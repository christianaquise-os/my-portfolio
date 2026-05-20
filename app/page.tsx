export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-12">
      <section>
        <h1 className="text-4xl font-bold">Christian Aquise</h1>
        <p className="mt-4 text-gray-600">One sentence about what you do.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p>2–3 sentences. Who you are, what you care about.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">Project Name</h3>
            <p className="text-gray-600">What it does, what you built, link.</p>
            <a href="https://github.com/you/project" className="text-blue-600 underline">View →</a>
          </div>
          {/* Duplicate for 2 more projects */}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          <a href="mailto:christian.aquise@gmail.com" className="text-blue-600 underline">Email</a> · {" "}
          <a href="https://github.com/yourhandle" className="text-blue-600 underline">GitHub</a> · {" "}
          <a href="https://linkedin.com/in/yourhandle" className="text-blue-600 underline">LinkedIn</a>
        </p>
      </section>
    </main>
  );
}