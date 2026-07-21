import Link from 'next/link';

export default function Header() {
  return (
    <header className="container nav">
      <Link className="logo" href="/">Kivo<span>Plan</span></Link>
      <nav className="navlinks">
        <a href="/#paths">Paths</a>
        <a href="/#how">How it works</a>
        <a href="/#pricing">Pricing</a>
        <Link className="btn btn-primary" href="/onboarding">Start my roadmap</Link>
      </nav>
    </header>
  );
}
