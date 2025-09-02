export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-lg mb-4">We’d love to hear from you! Reach out anytime.</p>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-xl"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-xl"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-xl"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-800"
        >
          Send
        </button>
      </form>
    </main>
  );
}
