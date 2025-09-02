export default function Page() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold">Products</h1>
        <p className="opacity-80">Commission-based items. Simple to browse and filter.</p>
      </header>

      <div className="card p-6">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <input placeholder="Search..." className="w-full md:w-1/2 px-4 py-2 rounded-lg bg-black/20 border border-white/10 outline-none" />
          <div className="flex gap-3">
            <select className="px-3 py-2 rounded-lg bg-black/20 border border-white/10">
              <option>All</option>
              <option>Active</option>
              <option>Unavailable</option>
            </select>
            <select className="px-3 py-2 rounded-lg bg-black/20 border border-white/10">
              <option>Sort: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
        <p className="mt-6 opacity-70">Nothing available yet.</p>
      </div>
    </section>
  );
}
