export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-white/10 bg-black/20">
      <div className="container grid gap-2 md:flex md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm opacity-90">© {new Date().getFullYear()} Rachel Reed</p>
          <p className="text-sm opacity-70">+356 79989843 · rr.rachelreed@gmail.com</p>
        </div>
        <div className="text-sm opacity-70">Premium yet simple — Next.js</div>
      </div>
    </footer>
  );
}
