import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="text-ink-strong text-2xl font-extrabold tracking-tight">
        Login page
      </h1>
      <p className="text-ink-muted">We'll build this soon.</p>
      <Link
        to="/"
        className="text-yellow mt-2 text-sm font-semibold hover:underline"
      >
        ← Back home
      </Link>
    </main>
  );
}

export default LoginPage;
