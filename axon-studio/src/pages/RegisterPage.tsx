import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="rise w-full max-w-md">
        {/* logo centered above the card */}
        <Link
          to="/"
          className="mb-8 flex flex-col items-center gap-2.5 transition-transform duration-200 ease-out hover:-rotate-2"
        >
          <img src={logo} width={48} height={48} alt="Axon Studio" />
          <span className="text-ink-strong text-center text-lg leading-[0.95] font-extrabold tracking-tight">
            Axon Studio
          </span>
        </Link>

        <div className="bg-card rounded-md p-8 ring-1 ring-white/5">
          <h1 className="text-ink-strong text-center text-2xl">
            Create your{" "}
            <span className="decoration-yellow underline decoration-4 underline-offset-4">
              account
            </span>
          </h1>
          <p className="text-ink-muted mt-2 text-center text-sm">
            Start finding AI-ready clients in minutes.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="text-ink-strong mb-2 block text-sm font-bold"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Doe"
                className="bg-base text-ink placeholder:text-ink-muted/60 focus:ring-yellow w-full rounded-xs px-4 py-3 ring-1 ring-white/10 transition duration-150 ease-out outline-none focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-ink-strong mb-2 block text-sm font-bold"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="bg-base text-ink placeholder:text-ink-muted/60 focus:ring-yellow w-full rounded-xs px-4 py-3 ring-1 ring-white/10 transition duration-150 ease-out outline-none focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-ink-strong mb-2 block text-sm font-bold"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="At least 8 characters"
                className="bg-base text-ink placeholder:text-ink-muted/60 focus:ring-yellow w-full rounded-xs px-4 py-3 ring-1 ring-white/10 transition duration-150 ease-out outline-none focus:ring-2"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow w-full transform-gpu cursor-pointer rounded-xs py-3.5 text-base font-bold transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              Create Account
            </button>
          </form>
        </div>

        <p className="text-ink-muted mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}

export default RegisterPage;
