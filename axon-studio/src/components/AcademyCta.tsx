import gradCap from "@/assets/grad-cap.svg";

function AcademyCta() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <img
        src={gradCap}
        alt="Graduation cap"
        width={130}
        height={130}
        className="mx-auto transition-transform duration-300 ease-out hover:scale-105 hover:rotate-3"
      />
      <h2 className="mt-4 text-[clamp(2rem,5vw,3rem)]">
        <span className="bg-red text-ink-strong inline-block -rotate-2 rounded px-3 pb-1">
          Not sure
        </span>{" "}
        how to sell AI?
      </h2>
      <p className="text-ink mx-auto mt-6 max-w-lg text-lg">
        <span className="text-ink-strong font-bold">
          Every account includes AI Sales Academy
        </span>{" "}
        — playbooks, scripts, and trainings to help you land your first AI
        client faster.
      </p>
    </section>
  );
}

export default AcademyCta;
