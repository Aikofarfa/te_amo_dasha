import { FallingPetals } from "@/components/ramo/petals";

type Props = {
  para: string;
  leaving: boolean;
  onOpen: () => void;
};

export function Cover({ para, leaving, onOpen }: Props) {
  const forWhom = para.trim() ? `para ${para.trim()}` : "para ti";

  return (
    <section
      className={
        leaving
          ? "cover-leave relative min-h-dvh overflow-hidden"
          : "relative min-h-dvh overflow-hidden"
      }
    >
      <img
        src="/images/field.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/50" />
      <FallingPetals />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-lg flex-col items-center justify-center px-6 py-16 text-center text-paper">
        <p className="reveal font-display text-xs tracking-kicker uppercase text-paper/80">
          21 de septiembre
        </p>
        <h1 className="reveal mt-5 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
          Flores amarillas {forWhom}
        </h1>
        <p
          className="reveal mt-5 max-w-sm text-base leading-relaxed text-paper/85"
          style={{ animationDelay: "80ms" }}
        >
          No pude comprarte un ramo. Así que te escribí un jardín.
        </p>

        <button
          type="button"
          onClick={onOpen}
          className="reveal group mt-10 flex flex-col items-center gap-3"
          style={{ animationDelay: "160ms" }}
          aria-label="Abrir el ramo"
        >
          <span className="flex size-20 items-center justify-center rounded-full bg-wax text-wax-fg shadow-wax transition-transform duration-150 ease-out group-hover:scale-105 group-active:scale-[0.96]">
            <WaxMark />
          </span>
          <span className="font-display text-sm tracking-kicker uppercase text-paper">
            Abrir
          </span>
        </button>
      </div>
    </section>
  );
}

function WaxMark() {
  return (
    <svg viewBox="0 0 64 64" className="size-10" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <ellipse
          key={i}
          cx="32"
          cy="14"
          rx="4"
          ry="12"
          fill="currentColor"
          opacity="0.92"
          transform={`rotate(${i * 30} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="8" fill="var(--color-wax)" />
      <circle cx="32" cy="32" r="4.5" fill="currentColor" opacity="0.85" />
    </svg>
  );
}
