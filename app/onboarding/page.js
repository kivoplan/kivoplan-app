'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Link from 'next/link';

export default function Onboarding() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [form, setForm] = useState({ path:'Career', goal:'', timeline:'', budget:'', context:'' });

  async function submit(e) {
    e.preventDefault();
    setLoading(true); setResult('');
    try {
      const response = await fetch('/api/roadmap', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
      const data = await response.json();
      setResult(data.roadmap || data.error || 'Unable to create a roadmap.');
    } catch {
      setResult('Something went wrong. Please try again.');
    } finally { setLoading(false); }
  }

  return (
    <>
      <Header />
      <main className="container form-shell">
        <span className="eyebrow">Roadmap builder</span>
        <h1>What are you planning next?</h1>
        <p className="muted">This first version creates a roadmap instantly. When your OpenAI key is connected in Vercel, it will use live AI.</p>
        <form className="card" onSubmit={submit}>
          <div className="form-row"><label>Planning area</label><select value={form.path} onChange={e=>setForm({...form,path:e.target.value})}><option>Career</option><option>Moving</option><option>Money</option><option>Wellness</option><option>Travel</option><option>Business</option></select></div>
          <div className="form-row"><label>Your goal</label><input required placeholder="Example: Move to Northern Virginia by September" value={form.goal} onChange={e=>setForm({...form,goal:e.target.value})}/></div>
          <div className="form-row"><label>Target timeline</label><input placeholder="Example: 3 months" value={form.timeline} onChange={e=>setForm({...form,timeline:e.target.value})}/></div>
          <div className="form-row"><label>Budget or financial limit</label><input placeholder="Optional" value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}/></div>
          <div className="form-row"><label>Important details</label><textarea placeholder="Share constraints, concerns, current progress, or anything the plan should consider." value={form.context} onChange={e=>setForm({...form,context:e.target.value})}/></div>
          <button className="btn btn-primary" disabled={loading}>{loading ? 'Building your roadmap…' : 'Create my roadmap'}</button>
        </form>
        {result && <section className="card" style={{marginTop:18}}><h2>Your KivoPlan roadmap</h2><div className="result">{result}</div><div style={{marginTop:18}}><Link className="btn btn-secondary" href="/dashboard">View dashboard demo</Link></div></section>}
      </main>
    </>
  );
}
