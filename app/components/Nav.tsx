import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/rentals", label: "Rentals" },
  { href: "/sales", label: "Sales" },
  { href: "/cars", label: "Cars" },
  { href: "/jobs", label: "Jobs" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/20">
      <nav className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-black tracking-tight text-lg">
          <span className="text-white">Rachel</span>
          <span className="text-brand-400">Reed</span>
        </Link>
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}><Link className="navlink" href={l.href}>{l.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
