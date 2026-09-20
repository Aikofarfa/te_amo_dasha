import { letterParagraphs, type RamoSearch } from "@/lib/ramo";

type Props = {
  search: RamoSearch;
};

export function Letter({ search }: Props) {
  const paragraphs = letterParagraphs(search);

  return (
    <article className="relative mx-auto max-w-xl rounded-xl bg-paper px-6 py-10 shadow-letter sm:px-10 sm:py-12">
      <img
        src="/images/pressed.jpg"
        alt=""
        className="mx-auto mb-8 h-28 w-full max-w-xs rounded-md object-cover opacity-90 sm:h-36"
      />
      <p className="font-display text-center text-xs tracking-kicker uppercase text-muted">
        Una carta, y veintiún flores
      </p>
      <div className="mt-8 space-y-5">
        {paragraphs.map((block, index) => {
          const isGreeting = index === 0 && block.startsWith("Para");
          const isSignoff = index === paragraphs.length - 1 && block.startsWith("Con todo");
          if (isGreeting) {
            return (
              <p
                key={index}
                className="font-display text-2xl font-medium leading-snug text-ink"
              >
                {block}
              </p>
            );
          }
          if (isSignoff) {
            const [lead, name] = block.split("\n");
            return (
              <p
                key={index}
                className="pt-2 font-display text-lg leading-relaxed text-ink"
              >
                {lead}
                {name ? (
                  <>
                    <br />
                    <span className="italic">{name}</span>
                  </>
                ) : null}
              </p>
            );
          }
          return (
            <p key={index} className="text-lg leading-relaxed text-ink/90">
              {block}
            </p>
          );
        })}
      </div>
    </article>
  );
}
