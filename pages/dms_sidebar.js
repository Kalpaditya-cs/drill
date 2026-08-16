import React from 'react'
import { FaArchive, FaBook, FaDochub, FaMoon, FaSignOutAlt } from 'react-icons/fa'
import { FaGear, FaRightFromBracket } from 'react-icons/fa6'

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-1 overflow-hidden md:grid-cols-[335px_1fr]">

      {/* SIDEBAR */}

      <aside className="bg-white flex flex-col h-screen text-black">

        <div className="flex items-center gap-3 px-6 py-7 border-b border-b-cyan-100">
          <img
            src="/logo.svg"
            className="h-14 w-14"
            alt="Logo" />

          <div className="leading-tight">
            <div className="text-xl font-semibold tracking-[4px]">
              SAFEPAD
            </div>

            <div className="text-xs font-semibold tracking-[2px] text-blue-600">
              CONTRACTOR DMS
            </div>
          </div>

        </div>

        {/*SIDEBAR CONTENT*/}
        
        <div className="flex flex-col  p-4 boder-t border-gray-300 gap-4">

          <div className='hover:shadow-2xl hover:bg-gray-100 hover:rounded-2xl'>
            <button className="group flex w-full items-center rounded-2xl  border-l-4 border-transparent px-4 py-3 text-left font-semibold text-[18px] text-slate-700 focus:border-blue-500 focus:bg-blue-50 focus:text-black :outline-none">

              <span className="mr-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-500 group-focus:bg-blue-600 group-focus:text-white ">
                <FaBook />
              </span>
              Document
            </button>
          </div>


          <div className='hover:shadow-2xl hover:bg-gray-100 hover:rounded-2xl'>
            <button className="group flex w-full items-center rounded-2xl border-l-4 border-transparent px-4 py-3 text-left font-semibold text-[18px] text-slate-700 focus:border-blue-500 focus:bg-blue-50 focus:text-black focus:outline-none">

              <span className="mr-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-500 group-focus:bg-blue-600 group-focus:text-white">
                <FaRightFromBracket />
              </span>
              Verification & Signature
            </button>
          </div>


          <div className='hover:shadow-2xl hover:bg-gray-100 hover:rounded-2xl'>
            <button className="group flex w-full items-center rounded-2xl border-l-4 border-transparent px-4 py-3 text-left font-semibold text-[18px] text-slate-700 focus:border-blue-500 focus:bg-blue-50 focus:text-black focus:outline-none">

              <span className="mr-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-500 group-focus:bg-blue-600 group-focus:text-white">
                <FaArchive />
              </span>
              Version & Archive
            </button>
          </div>

        </div>

        {/* FOOTER BUTTONS */}

        <div className="mt-auto flex items-center gap-6 border-t border-gray-200 p-5 justify-center">

          {/* DARK */}
          <button
            className="group flex h-13 w-13 items-center overflow-hidden rounded-2xl bg-slate-900 shadow transition-all duration-300 hover:w-[100px]">
            <span className="flex h-13 w-13 shrink-0 items-center justify-center text-white">
              <FaMoon/>
            </span>

            <span className="whitespace-nowrap text font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Dark
            </span>
          </button>

          {/* SETTINGS */}
          <button
            className="group flex h-13 w-13 items-center overflow-hidden rounded-2xl bg-gray-50 text-gray-500 transition-all duration-300 hover:w-[120px] hover:bg-gray-100">
            <span className="flex h-13 w-13 shrink-0 items-center justify-center">
              <FaGear/>
            </span>

            <span className="whitespace-nowrap text font-semibold text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Settings
            </span>
          </button>

          {/* SIGN OUT */}
          <button
            className="group flex h-13 w-13 items-center overflow-hidden rounded-2xl bg-red-50 text-red-500 transition-all duration-300 hover:w-[125px] hover:bg-red-500 hover:text-white">
            <span className="flex h-13 w-13 shrink-0 items-center justify-center">
              <FaSignOutAlt/>
            </span>

            <span className="whitespace-nowrap text font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Sign out
            </span>
          </button>

        </div>

      </aside>

      <main className="bg-gray-100"></main>

    </div>
  )
}