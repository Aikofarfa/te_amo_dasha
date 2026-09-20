import { BloomFlower } from "@/components/ramo/bloom-flower";
import { FLOWERS } from "@/lib/ramo";
import { Button } from "@/components/ui/button";

type Props = {
  picked: ReadonlySet<number>;
  onPick: (id: number) => void;
  onPickAll: () => void;
};

export function Garden({ picked, onPick, onPickAll }: Props) {
  const count = picked.size;
  const remaining = FLOWERS.length - count;

  return (
    <section className="mx-auto max-w-3xl px-4 pb-8 sm:px-6">
      <div className="mb-8 flex flex-col items-center text-center">
        <p className="font-display text-xs tracking-kicker uppercase text-muted">
          El jardín
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-ink">
          {count === 0
            ? "Toca una flor para abrirla"
            : count === FLOWERS.length
              ? "Las veintiuna, para ti"
              : `${count} de ${FLOWERS.length} flores`}
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          {count === FLOWERS.length
            ? "Ya no les falta agua. Este ramo no se marchita."
            : "Cada una guarda una línea. No hay prisa."}
        </p>
        {remaining > 0 ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="mt-3"
            onClick={onPickAll}
          >
            Abrir todas
          </Button>
        ) : null}
      </div>

      <div className="grid grid-cols-3 gap-x-2 gap-y-6 sm:grid-cols-4 sm:gap-x-4 md:grid-cols-5">
        {FLOWERS.map((flower) => (
          <BloomFlower
            key={flower.id}
            flower={flower}
            picked={picked.has(flower.id)}
            onPick={onPick}
          />
        ))}
      </div>
    </section>
  );
}
