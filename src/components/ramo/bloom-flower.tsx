import type { Flower } from "@/lib/ramo";
import { cn } from "@/lib/utils";

type Props = {
  flower: Flower;
  picked: boolean;
  onPick: (id: number) => void;
};

function petals(count: number, inner = false) {
  return Array.from({ length: count }, (_, i) => ({
    i,
    angle: (360 / count) * i + (inner ? 360 / count / 2 : 0),
  }));
}

function FlowerHead({ flower, picked }: { flower: Flower; picked: boolean }) {
  const kind = flower.kind;
  const count = kind === "sunflower" ? 18 : kind === "daisy" ? 12 : 9;
  const rx = kind === "sunflower" ? 5 : kind === "daisy" ? 7 : 8;
  const ry = kind === "sunflower" ? 20 : kind === "daisy" ? 22 : 18;

  return (
    <svg viewBox="0 0 80 96" className="h-full w-full" aria-hidden="true">
      <line
        x1="40"
        y1="52"
        x2="40"
        y2="94"
        stroke="var(--color-leaf)"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity={picked ? 0.9 : 0.45}
      />
      <path
        d="M40 70 C 28 64, 22 74, 30 78"
        fill="none"
        stroke="var(--color-leaf)"
        strokeWidth="1.6"
        opacity={picked ? 0.8 : 0.3}
      />
      <g
        style={{
          transformOrigin: "40px 40px",
          transform: picked ? "scale(1)" : "scale(0.22)",
          transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {petals(count).map(({ i, angle }) => (
          <ellipse
            key={`a-${i}`}
            cx="40"
            cy="22"
            rx={rx}
            ry={ry}
            fill="currentColor"
            opacity={0.92 - (i % 3) * 0.06}
            transform={`rotate(${angle} 40 40)`}
          />
        ))}
        {kind === "rose"
          ? petals(7, true).map(({ i, angle }) => (
              <ellipse
                key={`b-${i}`}
                cx="40"
                cy="28"
                rx="6"
                ry="12"
                fill="var(--color-petal-deep)"
                opacity="0.85"
                transform={`rotate(${angle} 40 40)`}
              />
            ))
          : null}
      </g>
      <circle
        cx="40"
        cy="40"
        r={picked ? (kind === "sunflower" ? 11 : 7) : 6}
        fill={kind === "sunflower" ? "var(--color-ink)" : "var(--color-petal-deep)"}
      />
      {kind === "sunflower" ? (
        <circle cx="40" cy="40" r={picked ? 7 : 3.5} fill="var(--color-petal-deep)" />
      ) : (
        <circle cx="40" cy="40" r="2.6" fill="var(--color-paper)" opacity="0.7" />
      )}
    </svg>
  );
}

export function BloomFlower({ flower, picked, onPick }: Props) {
  return (
    <figure className="flex flex-col items-center gap-1.5">
      <button
        type="button"
        onClick={() => onPick(flower.id)}
        aria-pressed={picked}
        aria-label={
          picked
            ? `${flower.name}: ${flower.line}`
            : `Abrir la flor ${flower.name}`
        }
        className={cn(
          "size-20 rounded-full text-petal transition-[transform,filter] duration-200 ease-out",
          "hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petal/70",
          "active:scale-[0.96]",
          picked ? "bloom-glow" : "opacity-90",
        )}
      >
        <FlowerHead flower={flower} picked={picked} />
      </button>
      <figcaption className="max-w-28 text-center">
        <p className="font-display text-sm font-medium text-ink">{flower.name}</p>
        <p
          className={cn(
            "mt-0.5 text-xs leading-snug text-muted transition-[opacity,transform,filter] duration-300 ease-out",
            picked
              ? "translate-y-0 opacity-100 blur-0"
              : "h-0 overflow-hidden translate-y-1 opacity-0 blur-[2px]",
          )}
        >
          {flower.line}
        </p>
      </figcaption>
    </figure>
  );
}
