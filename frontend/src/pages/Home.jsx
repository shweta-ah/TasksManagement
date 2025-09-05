import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary-600" />
            <span className="font-bold text-gray-900">Task Manager</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link className="text-gray-600 hover:text-primary-600" to="/home">
              Home
            </Link>
            <Link className="text-gray-600 hover:text-primary-600" to="/about">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                Organize, prioritize, and ship work with ease
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                A modern task management app with roles, real-time insights, and
                a delightful UI.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Link
                  to="/register"
                  className="px-5 py-3 rounded-lg text-white bg-primary-600 hover:bg-primary-700 font-medium"
                >
                  Create your account
                </Link>
                <Link
                  to="/about"
                  className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium"
                >
                  Learn more
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                  <span>No setup required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                  <span>Role-based access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-purple-500"></span>
                  <span>Beautiful UI</span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-xl border bg-white shadow-sm overflow-hidden">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary-50 to-white flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 p-6 w-full max-w-md">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-20 rounded-lg bg-gray-100 border border-gray-200"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500 text-center">
                Preview of your workspace
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Why you'll love it
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Smart dashboards",
                  desc: "Track progress, bottlenecks, and recent activity in one place.",
                },
                {
                  title: "Collaborative tasks",
                  desc: "Assign, comment, and keep everyone aligned with clear ownership.",
                },
                {
                  title: "Powerful filters",
                  desc: "Slice work by status, priority, due dates, and more.",
                },
                {
                  title: "Admin controls",
                  desc: "Manage users and roles with fine-grained permissions.",
                },
                {
                  title: "Fast & responsive",
                  desc: "Built with Vite and Tailwind for a snappy experience.",
                },
                {
                  title: "Secure by design",
                  desc: "JWT-based auth keeps your workspace protected.",
                },
              ].map((f, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border bg-white hover:shadow-sm transition"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-extrabold">
              Ready to boost your productivity?
            </h2>
            <p className="mt-2 text-primary-100">
              Create an account in less than a minute.
            </p>
            <div className="mt-6">
              <Link
                to="/register"
                className="px-6 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-primary-50"
              >
                Start for free
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500 border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Task Manager. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;

