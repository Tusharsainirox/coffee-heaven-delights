import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { MenuExplorer } from "@/components/menu-explorer";
import heroPour from "@/assets/hero-pour.jpg";
import biscoffFrappe from "@/assets/biscoff-frappe.jpg";
import spanishLatte from "@/assets/cappuccino.jpg";
import trufflePasta from "@/assets/truffle-pasta.jpg";
import pestoSandwich from "@/assets/pesto-sandwich.jpg";
import strawberryShake from "@/assets/strawberry-shake.jpg";
import chocoChipMocha from "@/assets/choco-chip-mocha.jpg";
import cheesecakeCoffee from "@/assets/cheesecake-coffee.jpg";
import logoImg from "@/assets/logo.jpg";
import interiorImg from "@/assets/cafe-interior.jpg";
import burgerImg from "@/assets/afgani-paneer-burger.jpg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const MAPS_URL = "https://share.google/CrYg6VvSMjuj30BJH";
const INSTAGRAM_URL = "https://www.instagram.com/coffeeheaven__/";
const PHONE = "+91 96719 96606";
const PHONE_HREF = "tel:+919671996606";

export const Route = createFileRoute("/")({
  component: CoffeeHeaven,
  head: () => ({
    meta: [
      { title: "Coffee Heaven | Cafe & Coffee Shop in Rewari" },
      {
        name: "description",
        content:
          "Coffee Heaven, Rewari — handcrafted coffee, cold coffee, shakes, pasta, sandwiches, burgers and more. Visit us at Gandhi Chowk, Model Town.",
      },
      { property: "og:title", content: "Coffee Heaven | Cafe & Coffee Shop in Rewari" },
      {
        property: "og:description",
        content:
          "A cozy cafe in Rewari serving handcrafted coffee, shakes, pasta, sandwiches and burgers. Open daily 11 AM – 10 PM at Gandhi Chowk, Model Town.",
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
          telephone: "+91 96719 96606",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gandhi Chowk, P-17, Model Town",
            addressLocality: "Rewari",
            addressRegion: "Haryana",
            postalCode: "123401",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 11:00-22:00",
          servesCuisine: ["Coffee", "Shakes", "Sandwiches", "Pasta", "Burgers"],
          sameAs: [INSTAGRAM_URL],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "70",
          },
        }),
      },
    ],
  }),
});

const featured = [
  {
    name: "Biscoff Frappe",
    price: "₹160 / ₹220",
    description: "Blended cold coffee with spiced cookie butter and cream.",
    image: biscoffFrappe,
    alt: "Biscoff frappe topped with whipped cream, caramel drizzle and cookie crumbs",
  },
  {
    name: "Spanish Latte",
    price: "₹120 / ₹160 / ₹200",
    description: "Espresso, sweetened milk and ice — smooth and mellow.",
    image: spanishLatte,
    alt: "Latte with delicate latte art in a ceramic cup",
  },
  {
    name: "Choco Chip Mocha",
    price: "₹160 / ₹220",
    description: "Mocha cold coffee loaded with chocolate chips and cream.",
    image: chocoChipMocha,
    alt: "Choco chip mocha cold coffee topped with whipped cream and chocolate chips",
  },
  {
    name: "Cheesecake Coffee",
    price: "₹140 / ₹180",
    description: "Creamy cheesecake blended with cold coffee and biscuit crumble.",
    image: cheesecakeCoffee,
    alt: "Cheesecake cold coffee with whipped cream and biscuit crumble",
  },
  {
    name: "Truffle Pasta",
    price: "₹150",
    description: "Creamy truffle sauce, cooked fresh to order.",
    image: trufflePasta,
    alt: "Bowl of creamy truffle pasta with black truffle shavings",
  },
  {
    name: "Pesto Paneer Sandwich",
    price: "₹200",
    description: "Char-grilled paneer and fresh pesto on toasted artisan bread.",
    image: pestoSandwich,
    alt: "Grilled pesto paneer sandwich cut in half on a wooden board",
  },
  {
    name: "Strawberry Shake",
    price: "₹130 / ₹160",
    description: "Thick, cold and blended — add popping boba for ₹50.",
    image: strawberryShake,
    alt: "Strawberry milkshake in a tall glass with whipped cream and fresh strawberries",
  },
  {
    name: "Loaded Afgani Paneer Burger",
    price: "₹130",
    description: "Creamy afgani paneer stacked in a toasted bun.",
    image: burgerImg,
    alt: "Loaded Afgani paneer burger with melted cheese, lettuce and creamy afgani sauce in a sesame bun",
  },
];

const reviewThemes = [
  { title: "Rich, aromatic coffee", note: "The brews are what guests mention first." },
  { title: "Cozy, welcoming ambience", note: "An easy place to settle into for a while." },
  { title: "Friendly, professional staff", note: "Warm service, without the fuss." },
  { title: "Fast service", note: "Orders come out quickly, even when it's full." },
  { title: "Clean and hygienic", note: "Tidy tables and a spotless counter." },
  { title: "Great for meet-ups & laptops", note: "Casual catch-ups or a work session." },
];

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Location" },
];

function CoffeeHeaven() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation — sticky */}
      <div className="sticky top-0 z-50 border-b border-espresso/10 bg-cream/85 backdrop-blur-md">
        <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-6 py-3 md:flex md:justify-between md:px-8">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso/20 transition-colors hover:bg-espresso/5 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <a href="#top" className="flex items-center justify-center md:justify-start">
            <img
              src={logoImg}
              alt="Coffee Heaven logo"
              width={160}
              height={160}
              className="h-10 w-auto md:h-12"
            />
          </a>
          <div className="hidden gap-8 text-sm font-medium uppercase tracking-widest md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-clay">
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={PHONE_HREF}
            className="justify-self-end rounded-full border border-espresso/20 px-4 py-2 text-xs font-medium transition-colors hover:bg-espresso/5 sm:px-5 sm:text-sm"
          >
            Call Now
          </a>
        </nav>
        {menuOpen && (
          <div className="border-t border-espresso/10 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-espresso/5 py-3 text-sm font-medium uppercase tracking-widest transition-colors last:border-0 hover:text-clay"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hero */}
      <header id="top" className="relative mx-auto max-w-7xl px-6 py-12 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-wider text-clay">
              Cafe in Rewari · Model Town
            </span>
            <h1 className="mb-6 font-serif text-6xl leading-[0.9] font-light md:text-8xl">
              Coffee <br />
              <span className="italic">Heaven</span>
            </h1>
            <p className="mb-4 max-w-md font-serif text-xl italic text-espresso/80">
              Your cozy corner for coffee, conversations &amp; good food.
            </p>
            <p className="mb-6 max-w-md text-lg leading-relaxed text-espresso/70">
              From handcrafted coffee and indulgent shakes to fresh pasta, sandwiches and
              burgers — there's something for every craving.
            </p>
            <p className="mb-10 text-sm font-medium tracking-wide">
              <span className="text-clay">4.9 ★</span>
              <span className="mx-2 text-espresso/30">·</span>
              70 Google Reviews
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="rounded-full bg-espresso px-8 py-4 font-medium text-cream transition-colors hover:bg-bean"
              >
                Explore Menu
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
                alt="Barista pouring milk into a cup of coffee with latte art at Coffee Heaven, Rewari"
                width={1200}
                height={1500}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-latte p-8 md:block">
                <p className="font-serif text-2xl italic">11 AM – 10 PM</p>
                <p className="text-sm uppercase tracking-tighter opacity-80">Open every day</p>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Featured */}
      <section className="bg-espresso py-24 text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 flex items-end justify-between">
              <div>
                <h2 className="mb-4 font-serif text-4xl">A few favourites</h2>
                <p className="text-cream/60">Some of the things worth ordering first.</p>
              </div>
              <div className="mx-12 hidden h-[1px] flex-grow bg-cream/10 md:block" />
              <a
                href="#menu"
                className="shrink-0 text-sm underline decoration-latte underline-offset-4"
              >
                Full Menu
              </a>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item, i) => (
              <Reveal key={item.name} delay={(i % 4) * 100}>
                <div className="group">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="mb-5 aspect-square w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-xl">{item.name}</h3>
                    <p className="shrink-0 text-sm text-latte tabular-nums">{item.price}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{item.description}</p>
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
            <div className="mb-12 max-w-xl">
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-wider text-clay">
                The Menu
              </span>
              <h2 className="mb-4 font-serif text-4xl md:text-5xl">
                Something for <span className="italic">every mood</span>
              </h2>
              <p className="text-lg leading-relaxed text-espresso/70">
                Hot or iced, sweet or savoury — every cup is brewed to order and every plate
                comes fresh out of our kitchen.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <MenuExplorer />
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="story" className="bg-secondary/50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
          <Reveal>
            <img
              src={interiorImg}
              alt="Inside Coffee Heaven — the espresso bar, pastry display and café seating in Model Town, Rewari"
              width={1080}
              height={858}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={150}>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-wider text-clay">
              About Us
            </span>
            <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">
              A place to <span className="italic">slow down</span>
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-espresso/70">
              Coffee Heaven is a cozy café in the heart of Rewari, bringing together quality
              coffee, refreshing shakes, comfort food and a relaxed atmosphere. Whether you're
              catching up with friends, getting some work done or simply looking for a good cup
              of coffee, Coffee Heaven is a place to slow down and enjoy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
              <div className="max-w-xl">
                <span className="mb-4 inline-block text-xs font-medium uppercase tracking-wider text-clay">
                  What People Say
                </span>
                <h2 className="font-serif text-4xl md:text-5xl">
                  Loved by <span className="italic">coffee lovers</span>
                </h2>
              </div>
              <div className="rounded-3xl bg-latte/15 px-8 py-6">
                <p className="font-serif text-5xl">4.9 ★</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-espresso/60">
                  70 Google Reviews
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviewThemes.map((theme, i) => (
              <Reveal key={theme.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-2xl border border-espresso/10 p-8 transition-colors hover:border-espresso/25">
                  <p className="mb-2 text-sm text-clay">★★★★★</p>
                  <h3 className="font-serif text-xl">{theme.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso/70">{theme.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-sm text-espresso/60">
              Recent reviewers include Mayank Phalswal, Aayush and Ankur Manethi.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block border-b border-espresso pb-1 font-medium"
            >
              See all reviews on Google →
            </a>
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
                  Coffee Heaven
                  <br />
                  Gandhi Chowk, P-17, Model Town,
                  <br />
                  Rewari, Haryana 123401
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay">
                  Phone
                </p>
                <a href={PHONE_HREF} className="border-b border-espresso text-lg">
                  {PHONE}
                </a>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay">
                  Hours
                </p>
                <p className="text-lg">11 AM – 10 PM, daily</p>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay">
                  Instagram
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-espresso text-lg"
                >
                  @coffeeheaven__
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-latte/10 p-8">
              <div>
                <h3 className="mb-4 font-serif text-2xl">Drop by, or call ahead.</h3>
                <p className="text-espresso/70">
                  Pull up for a cold coffee on the way home, book a table for a catch-up, or
                  call us to check what's fresh out of the kitchen today.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center rounded-full bg-espresso px-7 py-3.5 font-medium text-cream transition-colors hover:bg-bean"
                >
                  Get Directions
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex w-fit items-center rounded-full border border-espresso/20 px-7 py-3.5 font-medium transition-colors hover:bg-espresso/5"
                >
                  Call Now
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center rounded-full border border-espresso/20 px-7 py-3.5 font-medium transition-colors hover:bg-espresso/5"
                >
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso px-6 py-16 text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-serif text-2xl">Coffee Heaven</p>
            <p className="mt-2 text-sm text-cream/60">Coffee, conversations &amp; good food.</p>
          </div>
          <div className="text-sm text-cream/70">
            <p>Gandhi Chowk, P-17, Model Town,</p>
            <p>Rewari, Haryana</p>
            <p className="mt-3">11 AM – 10 PM</p>
          </div>
          <div className="text-sm text-cream/70">
            <a href={PHONE_HREF} className="block hover:text-cream">
              {PHONE}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block hover:text-cream"
            >
              Instagram: @coffeeheaven__
            </a>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-cream/70">
            <a href="#menu" className="hover:text-cream">
              Menu
            </a>
            <a href="#story" className="hover:text-cream">
              About
            </a>
            <a href="#reviews" className="hover:text-cream">
              Reviews
            </a>
            <a href="#visit" className="hover:text-cream">
              Location
            </a>
          </nav>
        </div>
        <p className="mx-auto mt-12 max-w-7xl border-t border-cream/10 pt-8 text-xs font-medium uppercase tracking-widest opacity-40">
          Coffee Heaven • Rewari • © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
