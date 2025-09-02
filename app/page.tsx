import Link from "next/link";

const sections = [
  { href: "/services", title: "All Services", desc: "Real estate, skin care, makeup consultation and more." },
  { href: "/rentals", title: "Property Rentals", desc: "Active rentals with price, description and photos." },
  { href: "/sales", title: "Property Sales", desc: "For-sale properties with full details." },
  { href: "/cars", title: "Cars", desc: "Rentals, lease & sales — coming soon." },
  { href: "/jobs", title: "Jobs / Recruiting", desc: "Commission-based recruiting board." },
  { href: "/products", title: "Products", desc: "Occasional commission-based items." },
  { href: "/contact", title: "Contact", desc: "Rachel Reed · +356 79989843 · rr.rachelreed@gmail.com" },
];

export default function Page() {
  return (
    <div className="space-y-12">
      <section className="text-center pt-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Premium. Bold. Simple.</h1>
        <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
          I’m <span className="font-semibold">Rachel Reed</span> — I connect people with the right homes, cars, jobs and products.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/services" className="btn">Explore Services</Link>
          <Link href="/rentals" className="btn bg-white text-black hover:bg-white/90">Browse Rentals</Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="card p-6 hover:-translate-y-0.5 transition-transform">
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="mt-2 opacity-80">{s.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
