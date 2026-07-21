import Link from 'next/link';
import Header from '../components/Header';

const paths = [
  ['💼','Career','Compare options, prepare applications, and create a realistic transition plan.'],
  ['🏡','Moving','Build a relocation roadmap around budget, timing, housing, and work.'],
  ['💰','Money','Turn financial goals into practical milestones and weekly actions.'],
  ['🌿','Wellness','Create supportive routines for fitness, rest, and sustainable progress.'],
  ['✈️','Travel','Plan meaningful trips around your budget, calendar, and priorities.'],
  ['🚀','Business','Move an idea from concept to launch with a focused action plan.']
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero container">
          <span className="eyebrow">Personal planning, powered by AI</span>
          <h1>Make your next big decision with a plan.</h1>
          <p>KivoPlan turns uncertainty into a personalized roadmap for career changes, moving, money, wellness, travel, and business.</p>
          <div className="actions">
            <Link className="btn btn-primary" href="/onboarding">Build my roadmap</Link>
            <a className="btn btn-secondary" href="#how">See how it works</a>
          </div>
          <div className="preview">
            <div className="preview-grid">
              <div className="card">
                <p className="muted">Your current plan</p>
                <h3>Relocate to a new city by September</h3>
                <div className="progress"><span /></div>
                <p className="muted">62% complete • 5 priorities this week</p>
              </div>
              <div className="card">
                <p className="muted">AI coach</p>
                <h3>You’re making steady progress.</h3>
                <p className="muted">Focus next on comparing housing costs and confirming your target salary range.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="paths" className="section container">
          <h2>One place for life’s moving parts.</h2>
          <p className="section-intro">Start with one decision or combine several goals into a plan that works together.</p>
          <div className="grid grid-3">
            {paths.map(([icon,title,text]) => (
              <article className="card" key={title}>
                <div className="path-icon">{icon}</div>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="section container">
          <h2>From overwhelmed to organized.</h2>
          <div className="grid grid-3 steps">
            <div className="card step"><div><h3>Tell KivoPlan what’s changing</h3><p className="muted">Answer a few focused questions about your goals, budget, timing, and constraints.</p></div></div>
            <div className="card step"><div><h3>Receive a tailored roadmap</h3><p className="muted">Get practical milestones, next actions, risks, and decision points.</p></div></div>
            <div className="card step"><div><h3>Return and keep moving</h3><p className="muted">Track progress and update your plan as your situation changes.</p></div></div>
          </div>
        </section>

        <section id="pricing" className="section container">
          <h2>Start simply. Upgrade when it helps.</h2>
          <div className="pricing">
            <div className="card">
              <h3>Free</h3><div className="price">$0</div>
              <ul className="feature-list"><li>One starter roadmap</li><li>Basic progress view</li><li>Limited AI guidance</li></ul>
              <Link className="btn btn-secondary" href="/onboarding">Start free</Link>
            </div>
            <div className="card" style={{borderColor:'var(--brand)'}}>
              <span className="eyebrow">Recommended</span><h3>KivoPlan Pro</h3><div className="price">$12<span style={{fontSize:'1rem'}}>/month</span></div>
              <ul className="feature-list"><li>Multiple active roadmaps</li><li>Weekly AI check-ins</li><li>Saved progress and plan updates</li></ul>
              <form action="/api/checkout" method="POST"><button className="btn btn-primary" type="submit">Choose Pro</button></form>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">© {new Date().getFullYear()} KivoPlan. Built to help people move forward with clarity.</footer>
    </>
  );
}
