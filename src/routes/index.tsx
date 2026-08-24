import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import heroPour from "@/assets/hero-pour.jpg";
import oreoFrappe from "@/assets/oreo-frappe.jpg";
import biscoffCake from "@/assets/biscoff-cake.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import storefront from "@/assets/storefront.jpg";

const MAPS_URL = "https://share.google/CrYg6VvSMjuj30BJH";
const INSTAGRAM_URL = "https://www.instagram.com/";

export const Route = createFileRoute("/")({
  component: CoffeeHeaven,
  head: () => ({
    meta: [
      { title: "Coffee Heaven — Cozy Café near Gandhi Chowk, Rewari" },
      {
        name: "description",
        content:
          "Coffee Heaven, Rewari: from a local coffee cart to a cozy sit-down café. Oreo, KitKat and hazelnut cold coffees, cappuccinos, cheesecakes and Biscoff cakes. Open daily 11 AM – 10 PM at Model Town.",
      },
      { property: "og:title", content: "Coffee Heaven — Cozy Café near Gandhi Chowk, Rewari" },
      {
        property: "og:description",
        content:
          "Specialty hot and cold coffees, pastries and signature Biscoff cakes in Model Town, Rewari. Open daily 11 AM – 10 PM.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Coffee Heaven",
          address: {
            "@type": "PostalAddress",
            streetAddress: "P-17, near Gandhi Chowk, Model Town",
            addressLocality: "Rewari",
            addressRegion: "Haryana",
            postalCode: "123401",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 11:00-22:00",
          servesCuisine: ["Coffee", "Bakery", "Desserts"],
        }),
      },
    ],
  }),
});

const signatures = [
  {
    name: "Oreo Frappé",
    description:
      "Our legendary cold coffee blended with rich cream and dark chocolate cookies.",
    image: oreoFrappe,
    alt: "Oreo cold coffee frappé topped with whipped cream and cookie crumbles",
  },
  {
    name: "Biscoff Cake",
    description:
      "Signature spiced cookie butter cake, layered with velvet cream cheese.",
    image: biscoffCake,
    alt: "Slice of Biscoff cheesecake with caramel drizzle on a ceramic plate",
  },
  {
    name: "Classic Cappuccino",
    description:
      "Double-shot espresso with perfectly micro-foamed milk, poured with love.",
    image: cappuccino,
    alt: "Hot cappuccino with heart latte art in a ceramic mug",
  },
];

const coldCoffees = [
  { name: "Oreo Cold Coffee", note: "Blended thick with cookie crumble and cream" },
  { name: "Classic Frappé", note: "Iced, frothy and endlessly sippable" },
  { name: "KitKat Cold Coffee", note: "Double chocolate crunch in every sip" },
  { name: "Irish Cold Coffee", note: "Smooth, creamy and quietly indulgent" },
  { name: "Cheesecake Cold Coffee", note: "Dessert and coffee in one tall glass" },
  { name: "Caramel Cold Coffee", note: "Buttery caramel over chilled espresso" },
  { name: "Hazelnut Cold Coffee", note: "Roasted hazelnut with a silky finish" },
];

const hotCoffees = [
  { name: "Cappuccino", note: "The classic — espresso, steamed milk, dense foam" },
  { name: "Espresso", note: "A short, bold shot of our house roast" },
  { name: "Americano", note: "Clean and strong, served long" },
  { name: "Latte", note: "Mellow espresso wrapped in steamed milk" },
  { name: "Hot Mocha", note: "Espresso meets rich drinking chocolate" },
];

const bakery = [
  { name: "Special Cheesecakes", note: "Baked in small batches, rotating flavours" },
  { name: "Fresh Pastries", note: "Flaky, buttery, made for dipping" },
  { name: "Signature Biscoff Cakes", note: "The one Rewari keeps coming back for" },
];

function CoffeeHeaven() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
        <a href="#top" className="font-serif text-2xl font-semibold tracking-tight">
          Coffee Heaven
        </a>
        <div className="hidden gap-8 text-sm font-medium uppercase tracking-widest md:flex">
          <a href="#menu" className="transition-colors hover:text-clay">
            Menu
          </a>
          <a href="#story" className="transition-colors hover:text-clay">
            Our Story
          </a>
          <a href="#visit" className="transition-colors hover:text-clay">
            Location
          </a>
        </div>
        <div className="rounded-full border border-espresso/20 px-4 py-2 text-xs font-medium sm:px-5 sm:text-sm">
          11:00 AM – 10:00 PM
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative mx-auto max-w-7xl px-6 py-12 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-wider text-clay">
              Rewari's Favorite Corner
            </span>
            <h1 className="mb-8 font-serif text-6xl leading-[0.9] font-light md:text-8xl">
              Crafted <br />
              <span className="italic">with Soul</span>
            </h1>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-espresso/70">
              From a humble local cart to Rewari's most beloved sit-down sanctuary. Join
              us near Gandhi Chowk for brews that feel like home.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="rounded-full bg-espresso px-8 py-4 font-medium text-cream transition-colors hover:bg-bean"
              >
                View Menu
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-espresso/20 px-8 py-4 font-medium transition-colors hover:bg-espresso/5"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <img
                src={heroPour}
                alt="Barista pouring milk into a cup of coffee with latte art in a cozy café"
                width={1200}
                height={1500}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-latte p-8 md:block">
                <p className="font-serif text-2xl italic">Since day one</p>
                <p className="text-sm uppercase tracking-tighter opacity-80">
                  Small batches only
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Signature Brews */}
      <section className="bg-espresso py-24 text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 flex items-end justify-between">
              <div>
                <h2 className="mb-4 font-serif text-4xl">Signature Collections</h2>
                <p className="text-cream/60">The blends that defined our journey.</p>
              </div>
              <div className="mx-12 hidden h-[1px] flex-grow bg-cream/10 md:block" />
              <a href="#menu" className="shrink-0 text-sm underline decoration-latte underline-offset-4">
                Full Menu
              </a>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {signatures.map((item, i) => (
              <Reveal key={item.name} delay={i * 120}>
                <div className="group">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="mb-6 aspect-square w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <h3 className="mb-2 font-serif text-xl">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-cream/60">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu */}
      <section id="menu" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 max-w-xl">
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-wider text-clay">
                The Menu
              </span>
              <h2 className="mb-4 font-serif text-4xl md:text-5xl">
                Something for <span className="italic">every mood</span>
              </h2>
              <p className="text-lg leading-relaxed text-espresso/70">
                Hot or iced, bold or sweet — every cup is brewed to order, and every
                bake comes out of our own oven.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            <Reveal>
              <MenuColumn title="Cold Coffees & Frappés" items={coldCoffees} />
            </Reveal>
            <Reveal delay={120}>
              <MenuColumn title="Hot Coffees & Brews" items={hotCoffees} />
            </Reveal>
            <Reveal delay={240}>
              <MenuColumn title="Bakery & Desserts" items={bakery} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="bg-secondary/50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
          <Reveal>
            <img
              src={storefront}
              alt="Coffee Heaven café storefront glowing warmly at dusk with string lights"
              width={1000}
              height={600}
              loading="lazy"
              className="aspect-video w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={150}>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-wider text-clay">
              Our Story
            </span>
            <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">
              From a coffee cart <br />
              to <span className="italic">your corner café</span>
            </h2>
            <p className="mb-6 max-w-md text-lg leading-relaxed text-espresso/70">
              Coffee Heaven began as a small coffee cart on the streets of Rewari,
              pouring for friends, students and early risers. One cup at a time, it
              grew into the cozy sit-down café you'll find today near Gandhi Chowk.
            </p>
            <p className="max-w-md text-lg leading-relaxed text-espresso/70">
              The cart may have become a café, but the heart hasn't changed — honest
              coffee, fresh bakes, and a seat that's always saved for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-20 border-t border-espresso/10 pt-24 md:grid-cols-2">
          <Reveal>
            <h2 className="mb-8 font-serif text-4xl">
              Find us in the heart <br />
              of Model Town.
            </h2>
            <div className="space-y-8">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay">
                  Address
                </p>
                <p className="text-lg">
                  P-17, near Gandhi Chowk, Model Town,
                  <br />
                  Rewari, Haryana 123401
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay">
                  Hours
                </p>
                <p className="text-lg">Daily: 11:00 AM – 10:00 PM</p>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay">
                  Connect
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-espresso text-lg"
                >
                  Follow our Instagram
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-latte/10 p-8">
              <div>
                <h3 className="mb-4 font-serif text-2xl">More than coffee.</h3>
                <p className="text-espresso/70">
                  Explore our collection of pastries, cheesecakes, and specialty cold
                  coffees like KitKat, Irish, and Hazelnut. Come for a cup, stay for
                  the evening.
                </p>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center rounded-full bg-espresso px-8 py-4 font-medium text-cream transition-colors hover:bg-bean"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso px-6 py-12 text-center text-cream">
        <p className="text-sm font-medium uppercase tracking-widest opacity-40">
          Coffee Heaven • Rewari • © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

function MenuColumn({
  title,
  items,
}: {
  title: string;
  items: { name: string; note: string }[];
}) {
  return (
    <div>
      <h3 className="mb-8 border-b border-espresso/10 pb-3 font-serif text-2xl italic">
        {title}
      </h3>
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.name}>
            <p className="font-medium">{item.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
