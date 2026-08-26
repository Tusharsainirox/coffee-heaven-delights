import { useState } from "react";
import { menu } from "@/data/menu";
import { cn } from "@/lib/utils";

/** Tabbed, data-driven menu browser. Categories come from src/data/menu.ts. */
export function MenuExplorer() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Menu categories"
        className="-mx-6 mb-10 flex snap-x gap-2 overflow-x-auto px-6 pb-2 md:mx-0 md:flex-wrap md:px-0"
      >
        {menu.map((c) => (
          <button
            key={c.id}
            role="tab"
            type="button"
            aria-selected={c.id === active}
            onClick={() => setActive(c.id)}
            className={cn(
              "shrink-0 snap-start rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
              c.id === active
                ? "border-espresso bg-espresso text-cream"
                : "border-espresso/15 text-espresso/70 hover:border-espresso/40 hover:text-espresso",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" aria-label={category.label}>
        {category.blurb ? (
          <p className="mb-8 font-serif text-xl italic text-espresso/60">{category.blurb}</p>
        ) : null}

        <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {category.items.map((item) => (
            <li
              key={item.name}
              className="flex items-baseline justify-between gap-4 border-b border-espresso/10 pb-4"
            >
              <div className="min-w-0">
                <p className="font-medium">{item.name}</p>
                {item.note ? (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                ) : null}
              </div>
              <p className="shrink-0 font-serif text-lg tabular-nums">{item.price}</p>
            </li>
          ))}
        </ul>

        {category.notes?.length ? (
          <ul className="mt-8 space-y-2">
            {category.notes.map((note) => (
              <li key={note} className="text-sm text-espresso/60">
                + {note}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
