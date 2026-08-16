import React from "react";
import { FaBook, FaLock } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-1 overflow-hidden md:grid-cols-[380px_1fr]">

      {/* SIDEBAR */}

      <aside className="flex h-screen flex-col justify-between bg-white p-10 text-black">

        {/* LOGO */}
        <img
          src="/logo.svg"
          className="h-9 w-9"
          alt="Logo"
        />


        {/* LOGIN BOX*/}
        <div className="mx-auto w-full ">

          <h1 className="text-2xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in with your work email
          </p>

          <div className="mt-10">
            <label className="text-sm">
              Work email
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/> 
          </div>

          <button className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
             >Continue</button>

          <p className="mt-6 text-xs text-gray-500 flex items-center gap-2">
            <FaLock /> Secure login for authorized companies.
          </p>

        </div>


        {/* FOOTER */}
        <div className="border-t pt-5 text-center text-sm text-gray-500">
          Delivered by{" "}
          <span className="font-semibold text-gray-700">
            SafePad
          </span>
        </div>

      </aside>


      {/* MAIN */}

      <main className="relative h-screen overflow-y-auto overflow-x-hidden scrollbar-none">

        {/* FIXED VIDEO */}

        <video src="/timeline.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="fixed inset-0 -z-10 h-full w-full object-cover ml-95"/>

        <div
          className="fixed inset-0 -z-10 bg-black/70"></div>

        {/* CONTENT */}

        <div className="relative z-10 min-h-screen text-white">

          {/* HEADER*/}

          <header className="flex justify-end p-8">
            <div className="flex items-center rounded-full border border-white/30 bg-black/20 p-1 backdrop-blur">
              <button className="rounded-full px-4 py-1 text-sm uppercase text-gray-300  focus:bg-white focus:text-black focus:font-semibold"
                type="button">
                EN
              </button>
              <button className="rounded-full  px-4 py-1 text-sm  uppercase text-gray-300 focus:bg-white focus:text-black focus:font-semibold"
                type="button">
                NO
              </button>
            </div>
          </header>

          {/* FOOTER */}

          <footer>
            <div className="fixed px-10 mt-120 ml-20 py-10 text-sm text-white/60 animate-bounce [animation-duration:2s]">
              ↓ <span className="ml-2">Scroll to explore</span>
            </div></footer>

          {/* CONTENT */}

          <section className="flex min-h-screen items-center -mt-30">

            <div className="ml-25 max-w-160">

              <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur items-center">
                <FaBook className="bg-white/10" /> <span className="ml-2">SAFEPAD DMS</span>
              </div>

              <h2 className="text-5xl font-bold leading-[1.05] md:text-6xl">
                Documentation
                <br />
                requirements,
                <br />
                solved with AI.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Made for subcontractors, contractors and tunnelling
                industry. Answer a few simple questions, and SafePad
                generates the documentation the customer actually asked
                for — correctly and on time.
              </p>

            </div>
          </section>

          {/* SECOND CONTENT */}

          <section className="min-h-screen px-25 py-20">

            <h2 className="text-4xl font-bold">
              Answer. Tick. Done.
            </h2>

            <p className="mt-5 max-w-xl text-lg text-white/70">
              Made for subcontractors, contractors and tunnelling
              industry. Answer a few simple questions, and SafePad
              generates the documentation the customer actually asked
              for — correctly and on time.
            </p>

          </section>

          {/* THIRD CONTENT */}

          <section className="min-h-screen px-25 py-20">

            <h2 className="text-4xl font-bold">
              Documentation
            </h2>

            <p className="mt-5 max-w-xl text-lg text-white/70">
              Add your next section here.
            </p>

          </section>

        </div>
      </main>

    </div>
  );
}