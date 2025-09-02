export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-4">
          Welcome to Rachel Reed Art
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A bold, clean, and aesthetic space to explore my products, services, 
          sales, rentals, cars, jobs, and more.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <a
          href="/products"
          className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-gray-50"
        >
          <h3 className="font-bold text-xl mb-2">Products</h3>
          <p>Browse custom artwork and prints.</p>
        </a>

        <a
          href="/services"
          className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-gray-50"
        >
          <h3 className="font-bold text-xl mb-2">Services</h3>
          <p>Commission unique pieces tailored to you.</p>
        </a>

        <a
          href="/contact"
          className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-gray-50"
        >
          <h3 className="font-bold text-xl mb-2">Contact</h3>
          <p>Let’s connect and create something beautiful.</p>
        </a>
      </div>
    </section>
  );
}
