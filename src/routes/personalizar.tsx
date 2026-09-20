import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildRamoPath } from "@/lib/ramo";

export const Route = createFileRoute("/personalizar")({
  component: Personalizar,
  head: () => ({
    meta: [{ title: "Armar el ramo" }],
  }),
});

function Personalizar() {
  const [para, setPara] = useState("");
  const [de, setDe] = useState("");
  const [nota, setNota] = useState("");
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const path = useMemo(() => buildRamoPath(para, de, nota), [para, de, nota]);
  const shareUrl = origin ? `${origin}${path}` : path;

  async function copyLink() {
    const url = `${window.location.origin}${path}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="min-h-dvh bg-paper px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-lg">
        <p className="font-display text-xs tracking-kicker uppercase text-muted">
          Para quien arma el ramo
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-ink">
          Ponle su nombre
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Escribe para quién es, de parte de quién, y si quieres, tu propia carta.
          Luego copia el link y mándaselo.
        </p>

        <form
          className="mt-10 space-y-5 rounded-xl border border-line bg-paper-deep/40 p-5 sm:p-7"
          onSubmit={(event) => {
            event.preventDefault();
            void copyLink();
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="para">Para</Label>
            <Input
              id="para"
              name="para"
              autoComplete="off"
              placeholder="Su nombre"
              value={para}
              onChange={(event) => setPara(event.target.value)}
              maxLength={48}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="de">De parte de</Label>
            <Input
              id="de"
              name="de"
              autoComplete="off"
              placeholder="Tu nombre"
              value={de}
              onChange={(event) => setDe(event.target.value)}
              maxLength={48}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nota">Carta (opcional)</Label>
            <Textarea
              id="nota"
              name="nota"
              placeholder="Déjala vacía si quieres la carta que ya está escrita."
              value={nota}
              onChange={(event) => setNota(event.target.value)}
              maxLength={1600}
            />
            <p className="text-xs text-muted">{nota.length} / 1600</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" className="flex-1">
              {copied ? "Link copiado" : "Copiar link"}
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <Link to="/" search={{ para, de, nota }}>
                Ver el ramo
              </Link>
            </Button>
          </div>
        </form>

        <p className="mt-6 break-all rounded-md bg-paper-deep px-3 py-2 text-xs text-muted">
          {shareUrl}
        </p>

        <p className="mt-8 text-center text-sm text-muted">
          <Link
            to="/"
            search={{ para: "", de: "", nota: "" }}
            className="text-ink underline decoration-petal decoration-2 underline-offset-4"
          >
            Volver al jardín
          </Link>
        </p>
      </div>
    </main>
  );
}
