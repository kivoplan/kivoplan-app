'use client';

import { useState } from 'react';
import Header from '../../components/Header';

const planningAreas = [
  { name: 'Moving', icon: '🏡' },
  { name: 'Career', icon: '💼' },
  { name: 'Business', icon: '🚀' },
  { name: 'Money', icon: '💰' },
  { name: 'Personal Growth', icon: '🌱' },
  { name: 'Health', icon: '🏃' },
  { name: 'Travel', icon: '✈️' },
  { name: 'Education', icon: '🎓' },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const [form, setForm] = useState({
    path: '',
    goal: '',
    timeline: '',
    budget: '',
    context: '',
  });

  function choosePlanningArea(path) {
    setForm({ ...form, path });
    setStep(2);
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/roadmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      setResult(
        data.roadmap ||
          data.error ||
          'Unable to create your roadmap. Please try again.'
      );
    } catch {
      setResult('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />

      <main className="container form-shell">
        {step === 0 && (
          <section className="card onboarding-welcome">
            <span className="eyebrow">Your next chapter starts here</span>

            <h1>Welcome to KivoPlan</h1>

            <h2>Let&apos;s build your roadmap together.</h2>

            <p className="muted">
              You don&apos;t need to have everything figured out today. Tell us
              where you want to go, and we&apos;ll help turn uncertainty into a
              clear plan.
            </p>

            <p className="onboarding-time">⏱ About 5 minutes</p>

            <button
              className="btn btn-primary"
              type="button"
              onClick={() => setStep(1)}
            >
              Start My Roadmap
            </button>
          </section>
        )}

        {step === 1 && (
          <section>
            <button
              className="back-button"
              type="button"
              onClick={() => setStep(0)}
            >
              ← Back
            </button>

            <span className="eyebrow">Step 1 of 2</span>

            <h1>What would you like KivoPlan to help you with?</h1>

            <p className="muted">
              Choose the area that best matches what you are working through
              right now.
            </p>

            <div className="planning-grid">
              {planningAreas.map((area) => (
                <button
                  className="planning-card"
                  type="button"
                  key={area.name}
                  onClick={() => choosePlanningArea(area.name)}
                >
                  <span className="planning-icon">{area.icon}</span>
                  <span>{area.name}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {step === 2 && (
          <section>
            <button
              className="back-button"
              type="button"
              onClick={() => setStep(1)}
            >
              ← Back
            </button>

            <span className="eyebrow">Step 2 of 2</span>

            <h1>Tell me a little more.</h1>

            <p className="muted">
              You selected <strong>{form.path}</strong>. Your answers will help
              KivoPlan create a roadmap that feels realistic and personal.
            </p>

            <form className="card" onSubmit={submit}>
              <div className="form-row">
                <label htmlFor="goal">
                  If everything worked out, what would you like to accomplish?
                </label>

                <textarea
                  id="goal"
                  required
                  rows="4"
                  placeholder="Example: I want to move to Northern Virginia and find a better-paying remote job."
                  value={form.goal}
                  onChange={(e) =>
                    setForm({ ...form, goal: e.target.value })
                  }
                />
              </div>

              <div className="form-row">
                <label htmlFor="timeline">
                  When would you like this to happen?
                </label>

                <input
                  id="timeline"
                  required
                  placeholder="Example: Within 3 months"
                  value={form.timeline}
                  onChange={(e) =>
                    setForm({ ...form, timeline: e.target.value })
                  }
                />
              </div>

              <div className="form-row">
                <label htmlFor="budget">
                  Is there a budget or financial limit to consider?
                </label>

                <input
                  id="budget"
                  placeholder="Optional"
                  value={form.budget}
                  onChange={(e) =>
                    setForm({ ...form, budget: e.target.value })
                  }
                />
              </div>

              <div className="form-row">
                <label htmlFor="context">
                  What is the biggest thing standing in your way?
                </label>

                <textarea
                  id="context"
                  rows="5"
                  placeholder="Share any concerns, obstacles, current progress, or details your roadmap should consider."
                  value={form.context}
                  onChange={(e) =>
                    setForm({ ...form, context: e.target.value })
                  }
                />
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Building your roadmap...' : 'Create My Roadmap'}
              </button>
            </form>

            {result && (
              <section className="card roadmap-result">
                <span className="eyebrow">Your personalized plan</span>
                <h2>Your KivoPlan roadmap</h2>
                <div className="result">{result}</div>
              </section>
            )}
          </section>
        )}
      </main>
    </>
  );
}
