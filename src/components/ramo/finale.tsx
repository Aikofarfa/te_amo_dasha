import { Link } from "@tanstack/react-router";

type Props = {
  para: string;
  de: string;
  personalized: boolean;
};

export function Finale({ para, de, personalized }: Props) {
  const who = para.trim() || "ti";
  const from = de.trim();

  return (
    <section className="mx-auto max-w-xl px-4 pb-24 sm:px-6">
      <figure className="overflow-hidden rounded-xl bg-paper-deep shadow-letter">
        <img
          src="/images/bouquet.jpg"
          alt="Un ramo de flores amarillas"
          className="aspect-3/4 w-full object-cover"
        />
      </figure>
      <div className="mt-8 text-center">
        <p className="font-display text-xs tracking-kicker uppercase text-muted">
          El ramo
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink">
          Estas flores no se marchitan
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink/85">
          Un 21 de septiembre, {from ? `${from} juntó` : "junté"} veintiún flores
          amarillas para {who}. No caben en un florero. Caben aquí, todas las
          veces que quieras volver.
        </p>
      </div>

      {!personalized ? (
        <p className="mt-10 text-center text-sm text-muted">
          Si este ramo es para alguien más,{" "}
          <Link
            to="/personalizar"
            className="text-ink underline decoration-petal decoration-2 underline-offset-4"
          >
            ponle su nombre
          </Link>
          .
        </p>
      ) : null}
    </section>
  );
}
