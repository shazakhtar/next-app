export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto max-w-4xl px-6 text-center">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
              Welcome to My Website
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
              A modern, responsive web page built with Next.js
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 pt-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800">
              <div className="mb-4 text-4xl">🚀</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lightning-fast performance with Next.js
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800">
              <div className="mb-4 text-4xl">📱</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Responsive
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Works perfectly on all devices
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800">
              <div className="mb-4 text-4xl">🎨</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Beautiful
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Modern design with Tailwind CSS
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl active:scale-95">
              Get Started
            </button>
          </div>

          {/* Footer */}
          <div className="pt-12 text-sm text-gray-500 dark:text-gray-400">
            <p>Built with Next.js, React, and Tailwind CSS</p>
            <p className="mt-2">© 2026 - Deployed and Ready</p>
          </div>
        </div>
      </main>
    </div>
  );
}
