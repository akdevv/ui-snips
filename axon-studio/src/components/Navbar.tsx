import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link to="/" className="flex items-center gap-2.5">
        <img src={logo} width={34} height={34} alt="Axon Studio" />
        <span className="text-ink-strong text-[15px] leading-[0.95] font-extrabold tracking-tight">
          Axon
          <br />
          Studio
        </span>
      </Link>

      <Link
        to="/login"
        className="bg-card-alt text-ink rounded-xs px-5 py-2 text-sm font-semibold transition-colors duration-150 ease-out hover:bg-[#3a3946] active:scale-[0.97]"
      >
        Login
      </Link>
    </header>
  );
}

export default Navbar;
