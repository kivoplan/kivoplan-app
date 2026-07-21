import Header from '../../components/Header';

export default function Dashboard() {
  const tasks = ['Finalize target location shortlist','Update monthly budget','Apply to two aligned roles','Research three housing options','Schedule weekly progress review'];
  return (
    <><Header /><main className="container dashboard"><div className="dashboard-grid">
      <aside className="card sidebar"><h3>KivoPlan</h3><div className="nav-item active">Overview</div><div className="nav-item">My roadmaps</div><div className="nav-item">AI coach</div><div className="nav-item">Progress</div><div className="nav-item">Account</div></aside>
      <section><span className="eyebrow">Dashboard preview</span><h1>Welcome back.</h1><p className="muted">Here’s where your saved plans, weekly actions, and AI check-ins will live.</p>
        <div className="grid grid-3"><div className="card"><p className="muted">Plan progress</p><div className="metric">62%</div></div><div className="card"><p className="muted">Tasks this week</p><div className="metric">5</div></div><div className="card"><p className="muted">Active roadmaps</p><div className="metric">1</div></div></div>
        <div className="card" style={{marginTop:18}}><h3>This week’s priorities</h3>{tasks.map((task,i)=><p key={task}>□ {task}</p>)}</div>
        <div className="card" style={{marginTop:18,background:'var(--brand-2)'}}><h3>AI coach</h3><p>Your strongest next move is to finish the budget comparison before expanding your search. That will make the remaining decisions easier.</p></div>
      </section>
    </div></main></>
  );
}
