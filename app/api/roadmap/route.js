export async function POST(request) {
  const body = await request.json();
  const { path, goal, timeline, budget, context } = body;
  if (!goal) return Response.json({ error: 'Please enter a goal.' }, { status: 400 });

  if (!process.env.OPENAI_API_KEY) {
    const demo = `GOAL\n${goal}\n\n90-DAY ROADMAP\n1. Clarify the decision: define success, non-negotiables, and the biggest unknown.\n2. Gather evidence: compare three realistic options using cost, timing, risk, and quality-of-life factors.\n3. Take the first commitment step: schedule one concrete action within seven days.\n4. Review progress weekly and adjust the plan when new information appears.\n\nTHIS WEEK\n• Write down your top three priorities.\n• Identify one obstacle you can remove immediately.\n• Complete one action that creates momentum.\n\nDETAILS CONSIDERED\nPlanning area: ${path}\nTimeline: ${timeline || 'Not provided'}\nBudget: ${budget || 'Not provided'}\nContext: ${context || 'Not provided'}\n\nDemo mode is active. Add OPENAI_API_KEY in Vercel to generate live personalized roadmaps.`;
    return Response.json({ roadmap: demo });
  }

  const prompt = `Create a practical, supportive roadmap for this user. Avoid medical, legal, or financial guarantees. Include: summary, key assumptions, first 7 days, 30-day milestones, 90-day milestones, risks, and the next best action.\n\nPlanning area: ${path}\nGoal: ${goal}\nTimeline: ${timeline}\nBudget: ${budget}\nContext: ${context}`;

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { 'Content-Type':'application/json', 'Authorization':`Bearer ${process.env.OPENAI_API_KEY}` },
    body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-4.1-mini', input: prompt })
  });
  if (!response.ok) return Response.json({ error: 'The AI service could not create a plan right now.' }, { status: 502 });
  const data = await response.json();
  return Response.json({ roadmap: data.output_text || 'Your roadmap was created, but no text was returned.' });
}
