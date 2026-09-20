import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Cover } from "@/components/ramo/cover";
import { Finale } from "@/components/ramo/finale";
import { Garden } from "@/components/ramo/garden";
import { Letter } from "@/components/ramo/letter";
import { FLOWERS, pageTitle, parseRamoSearch } from "@/lib/ramo";

export const Route = createFileRoute("/")({
  validateSearch: parseRamoSearch,
  search: {
    middlewares: [stripSearchParams({ para: "", de: "", nota: "" })],
  },
  head: ({ match }) => ({
    meta: [{ title: pageTitle(match.search.para) }],
  }),
  component: Home,
});

function Home() {
  const search = Route.useSearch();
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [picked, setPicked] = useState<ReadonlySet<number>>(() => new Set());

  const personalized = Boolean(search.para.trim() || search.de.trim() || search.nota.trim());

  const onOpen = useCallback(() => {
    if (leaving || opened) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOpened(true);
      return;
    }
    setLeaving(true);
    window.setTimeout(() => setOpened(true), 480);
  }, [leaving, opened]);

  const onPick = useCallback((id: number) => {
    setPicked((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const onPickAll = useCallback(() => {
    setPicked(new Set(FLOWERS.map((flower) => flower.id)));
  }, []);

  if (!opened) {
    return <Cover para={search.para} leaving={leaving} onOpen={onOpen} />;
  }

  return (
    <main className="garden-enter min-h-dvh bg-paper-deep">
      <header className="relative h-72 overflow-hidden sm:h-96">
        <img
          src="/images/field.jpg"
          alt="Un campo de flores amarillas al atardecer"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/25 via-ink/15 to-paper-deep" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-16 text-center">
          <p className="font-display text-xs tracking-kicker uppercase text-paper">
            21 de septiembre
          </p>
          <h1 className="mt-2 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            {search.para.trim() ? `Para ${search.para.trim()}` : "Para ti"}
          </h1>
        </div>
      </header>

      <div className="relative z-10 -mt-10">
        <Letter search={search} />
      </div>

      <div className="mt-16">
        <Garden picked={picked} onPick={onPick} onPickAll={onPickAll} />
      </div>

      <div className="mt-8">
        <Finale para={search.para} de={search.de} personalized={personalized} />
      </div>
    </main>
  );
}
