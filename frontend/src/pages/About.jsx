import React from "react";
import { Link } from "react-router-dom";

const team = [
  { name: "Amit", role: "Product", color: "bg-blue-500" },
  { name: "Dev", role: "Engineering", color: "bg-green-500" },
  { name: "Alex", role: "Design", color: "bg-purple-500" },
];

const About = () => {
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
            <Link className="text-gray-900 font-semibold" to="/about">
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
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-extrabold text-gray-900">
              About Task Manager
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              We believe productivity tools should be simple, fast, and joyful.
              Our mission is to help teams focus on outcomes — not overhead — by
              offering a clean, secure, and collaborative task experience.
            </p>
          </div>
        </section>

        <section className="py-12 border-t bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">What we value</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Clarity",
                  desc: "Clear ownership and simple workflows.",
                },
                {
                  title: "Speed",
                  desc: "Every interaction should feel instant.",
                },
                {
                  title: "Trust",
                  desc: "Your data is protected with JWT-based auth.",
                },
              ].map((v, i) => (
                <div key={i} className="p-6 rounded-xl border bg-white">
                  <h3 className="font-semibold text-gray-900">{v.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">The team</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((m) => (
                <div
                  key={m.name}
                  className="p-6 rounded-xl border bg-white flex items-center gap-4"
                >
                  <div className={`h-12 w-12 rounded-full ${m.color}`} />
                  <div>
                    <div className="font-semibold text-gray-900">{m.name}</div>
                    <div className="text-sm text-gray-600">{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-t bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Like what you see?
            </h2>
            <p className="mt-2 text-gray-600">
              Join now and start organizing work the delightful way.
            </p>
            <Link
              to="/register"
              className="mt-6 inline-block px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700"
            >
              Create account
            </Link>
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

export default About;

