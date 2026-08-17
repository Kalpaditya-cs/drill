import React from 'react'
import { FaCopy } from 'react-icons/fa'
import { FaPage4 } from 'react-icons/fa6'

export default function Home() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

      {/* HEADER */}
      <div className="px-5 py-4">
        <h1 className="uppercase text-xs font-bold tracking-[1.5px] text-slate-500">
          master safety records
        </h1>
      </div>


      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[1100px] text-xs">

          <thead>
            <tr className="bg-slate-50 text-left">

              <th className="px-3 py-3 uppercase text-[11px] font-bold tracking-wide text-blue-600">
                id/sentiment
              </th>

              <th className="px-3 py-3 uppercase text-[11px] font-bold tracking-wide text-blue-600">
                date
              </th>

              <th className="px-3 py-3 uppercase text-[11px] font-bold tracking-wide text-blue-600">
                company
              </th>

              <th className="px-3 py-3 uppercase text-[11px] font-bold tracking-wide text-blue-600">
                rig
              </th>

              <th className="px-3 py-3 uppercase text-[11px] font-bold tracking-wide text-blue-600">
                observations(narrative context)
              </th>

              <th className="px-3 py-3 uppercase text-[11px] font-bold tracking-wide text-blue-600">
                comments
              </th>

              <th className="px-3 py-3 uppercase text-[11px] font-bold tracking-wide text-blue-600">
                9 lsr rules
              </th>

            </tr>
          </thead>


          <tbody>

            <tr className="border-b border-slate-100 align-top">

              {/* ID / SENTIMENT */}
              <td className="px-3 py-3">

                <div className="flex items-center gap-2">

                  <span className="font-bold text-slate-700">
                    #92427
                  </span>
                 <div className='flex gap-1'>
                  <span className="h-4 w-4 rounded border border-slate-300">
                    <a href='https://ui.watermelon.sh/animated-components/category/cards' 
                    target='_blank' title='View full page'><FaCopy/></a>
                 
                  </span>

                  <span className="h-3 w-3 rounded-sm ">
                     <a href='https://ui.watermelon.sh/animated-components/category/cards' 
                    target='_blank' title='View full page'><FaCopy className='text-red-600'/></a>
                  </span>
                  </div>

                </div>


                <select
                  className="
                    mt-2
                    rounded-full
                    border border-red-200
                    bg-red-50
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
                    text-red-500
                    outline-none
                    appearance-none
                  "
                >
                  <option>Negative</option>
                  <option>Neutral</option>
                  <option>Positive</option>
                </select>

              </td>


              {/* DATE */}
              <td className="px-3 py-3 text-slate-500">
                06/09/2026
              </td>


              {/* COMPANY */}
              <td className="px-3 py-3 font-medium text-slate-700">
                Transocean
              </td>


              {/* RIG */}
              <td className="px-3 py-3 font-bold text-blue-600">
                TNG
              </td>


              {/* OBSERVATIONS */}
              <td className="px-3 py-3 min-w-[380px]">

                <div className="space-y-1 leading-relaxed text-slate-700">

                  <p>
                    <span className="font-bold">
                      1. Seen:
                    </span>{' '}
                    Observed gate into well test from staircase BB was correctly
                    hung up and labeled. But left in open position.
                  </p>

                  <p>
                    <span className="font-bold">
                      2. Discussed:
                    </span>{' '}
                    Contacted one of the workers in the area and asked him to
                    check occasionally that the gate was in closed position.
                  </p>

                  <p>
                    <span className="font-bold">
                      3. Reinforced:
                    </span>{' '}
                    —
                  </p>

                </div>

              </td>


              {/* COMMENTS */}
              <td className="px-3 py-3 min-w-[180px] text-slate-600">

                God praksis å bruke 1 minutt ekstra på å alternativ
                rute kontra å bryte inn pågående operasjon med mindre
                det er helt nødvendig.

              </td>


              {/* 9 LSR RULES */}
              <td className="px-3 py-3 min-w-[220px]">

                <select
                  className="
                    w-full
                    rounded-md
                    border-0
                    bg-pink-50
                    px-3
                    py-2
                    text-sm
                    text-pink-500
                    outline-none
                    focus:ring-1
                    focus:ring-pink-300
                  "
                  defaultValue="Working at Height"
                >

                  <option value="None">
                    None
                  </option>

                  <option value="Work Authorization">
                    Work Authorization
                  </option>

                  <option value="Driving">
                    Driving
                  </option>

                  <option value="Working at Height">
                    Working at Height
                  </option>

                  <option value="Safe Mechanical Lifting">
                    Safe Mechanical Lifting
                  </option>

                  <option value="Bypassing Safety Controls">
                    Bypassing Safety Controls
                  </option>

                  <option value="Confined Space">
                    Confined Space
                  </option>

                  <option value="Energy Isolation">
                    Energy Isolation
                  </option>

                  <option value="Hot Work">
                    Hot Work
                  </option>

                  <option value="Line of Fire">
                    Line of Fire
                  </option>

                </select>

              </td>

            </tr>


            {/* SECOND ROW */}
            <tr className="border-b border-slate-100 align-top">

              <td className="px-3 py-3">

                <div className="flex items-center gap-2">

                  <span className="font-bold text-slate-700">
                    #92428
                  </span>

                   <span className="h-4 w-4 rounded border border-slate-300">
                    <a href='https://ui.watermelon.sh/animated-components/category/cards' 
                    target='_blank' title='View full page'><FaCopy/></a>
                 
                  </span>

                  <span className="h-3 w-3 rounded-sm ">
                     <a href='https://ui.watermelon.sh/animated-components/category/cards' 
                    target='_blank' title='View full page'><FaCopy className='text-red-600'/></a>
                  </span>

                </div>

                <select
                  className="
                    mt-2
                    rounded-full
                    border border-red-200
                    bg-red-50
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
                    text-red-500
                    outline-none
                    appearance-none
                  "
                  defaultValue="Negative"
                >
                  <option>Positive</option>
                  <option>Neutral</option>
                  <option>Negative</option>
                </select>

              </td>


              <td className="px-3 py-3 text-slate-500">
                06/09/2026
              </td>


              <td className="px-3 py-3 font-medium text-slate-700">
                Transocean
              </td>


              <td className="px-3 py-3 font-bold text-blue-600">
                TNG
              </td>


              <td className="px-3 py-3 min-w-[380px]">

                <div className="space-y-1 leading-relaxed text-slate-700">

                  <p>
                    <span className="font-bold">
                      1. Seen:
                    </span>{' '}
                    Mange sperringer på dekket.
                  </p>

                  <p>
                    <span className="font-bold">
                      2. Discussed:
                    </span>{' '}
                    Viktig at folk ikke spør om å passere sperringer.
                  </p>

                  <p>
                    <span className="font-bold">
                      3. Reinforced:
                    </span>{' '}
                    Finn en ny rute.
                  </p>

                </div>

              </td>


              <td className="px-3 py-3 text-slate-600">
                —
              </td>


              <td className="px-3 py-3 min-w-[220px]">

                <select
                  className="
                    w-full
                    rounded-md
                    border-0
                    bg-slate-100
                    px-3
                    py-2
                    text-sm
                    text-slate-700
                    outline-none
                  "
                  defaultValue="None"
                >

                  <option value="None">
                    None
                  </option>

                  <option value="Work Authorization">
                    Work Authorization
                  </option>

                  <option value="Driving">
                    Driving
                  </option>

                  <option value="Working at Height">
                    Working at Height
                  </option>

                  <option value="Safe Mechanical Lifting">
                    Safe Mechanical Lifting
                  </option>

                  <option value="Bypassing Safety Controls">
                    Bypassing Safety Controls
                  </option>

                  <option value="Confined Space">
                    Confined Space
                  </option>

                  <option value="Energy Isolation">
                    Energy Isolation
                  </option>

                  <option value="Hot Work">
                    Hot Work
                  </option>

                  <option value="Line of Fire">
                    Line of Fire
                  </option>

                </select>

              </td>

            </tr>

            <tr className="border-b border-slate-100 align-top">

              {/* ID / SENTIMENT */}
              <td className="px-3 py-3">

                <div className="flex items-center gap-2">

                  <span className="font-bold text-slate-700">
                    #92427
                  </span>
                 <div className='flex gap-1'>
                  <span className="h-4 w-4 rounded border border-slate-300">
                    <a href='https://ui.watermelon.sh/animated-components/category/cards' 
                    target='_blank' title='View full page'><FaCopy/></a>
                 
                  </span>

                  <span className="h-3 w-3 rounded-sm ">
                     <a href='https://ui.watermelon.sh/animated-components/category/cards' 
                    target='_blank' title='View full page'><FaCopy className='text-red-600'/></a>
                  </span>
                  </div>

                </div>


                <select
                  className="
                    mt-2
                    rounded-full
                    border border-red-200
                    bg-red-50
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
                    text-red-500
                    outline-none
                    appearance-none
                  "
                >
                  <option>Negative</option>
                  <option>Neutral</option>
                  <option>Positive</option>
                </select>

              </td>


              {/* DATE */}
              <td className="px-3 py-3 text-slate-500">
                06/09/2026
              </td>


              {/* COMPANY */}
              <td className="px-3 py-3 font-medium text-slate-700">
                Transocean
              </td>


              {/* RIG */}
              <td className="px-3 py-3 font-bold text-blue-600">
                TNG
              </td>


              {/* OBSERVATIONS */}
              <td className="px-3 py-3 min-w-[380px]">

                <div className="space-y-1 leading-relaxed text-slate-700">

                  <p>
                    <span className="font-bold">
                      1. Seen:
                    </span>{' '}
                    Observed gate into well test from staircase BB was correctly
                    hung up and labeled. But left in open position.
                  </p>

                  <p>
                    <span className="font-bold">
                      2. Discussed:
                    </span>{' '}
                    Contacted one of the workers in the area and asked him to
                    check occasionally that the gate was in closed position.
                  </p>

                  <p>
                    <span className="font-bold">
                      3. Reinforced:
                    </span>{' '}
                    —
                  </p>

                </div>

              </td>


              {/* COMMENTS */}
              <td className="px-3 py-3 min-w-[180px] text-slate-600">

                God praksis å bruke 1 minutt ekstra på å alternativ
                rute kontra å bryte inn pågående operasjon med mindre
                det er helt nødvendig.

              </td>


              {/* 9 LSR RULES */}
              <td className="px-3 py-3 min-w-[220px]">

                <select
                  className="
                    w-full
                    rounded-md
                    border-0
                    bg-pink-50
                    px-3
                    py-2
                    text-sm
                    text-pink-500
                    outline-none
                    focus:ring-1
                    focus:ring-pink-300
                  "
                  defaultValue="Working at Height"
                >

                  <option value="None">
                    None
                  </option>

                  <option value="Work Authorization">
                    Work Authorization
                  </option>

                  <option value="Driving">
                    Driving
                  </option>

                  <option value="Working at Height">
                    Working at Height
                  </option>

                  <option value="Safe Mechanical Lifting">
                    Safe Mechanical Lifting
                  </option>

                  <option value="Bypassing Safety Controls">
                    Bypassing Safety Controls
                  </option>

                  <option value="Confined Space">
                    Confined Space
                  </option>

                  <option value="Energy Isolation">
                    Energy Isolation
                  </option>

                  <option value="Hot Work">
                    Hot Work
                  </option>

                  <option value="Line of Fire">
                    Line of Fire
                  </option>

                </select>

              </td>

            </tr>


            {/* SECOND ROW */}
            <tr className="border-b border-slate-100 align-top">

              <td className="px-3 py-3">

                <div className="flex items-center gap-2">

                  <span className="font-bold text-slate-700">
                    #92428
                  </span>

                   <span className="h-4 w-4 rounded border border-slate-300">
                    <a href='https://ui.watermelon.sh/animated-components/category/cards' 
                    target='_blank' title='View full page'><FaCopy/></a>
                 
                  </span>

                  <span className="h-3 w-3 rounded-sm ">
                     <a href='https://ui.watermelon.sh/animated-components/category/cards' 
                    target='_blank' title='View full page'><FaCopy className='text-red-600'/></a>
                  </span>

                </div>

                <select
                  className="
                    mt-2
                    rounded-full
                    border border-red-200
                    bg-red-50
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
                    text-red-500
                    outline-none
                    appearance-none
                  "
                  defaultValue="Negative"
                >
                  <option>Positive</option>
                  <option>Neutral</option>
                  <option>Negative</option>
                </select>

              </td>


              <td className="px-3 py-3 text-slate-500">
                06/09/2026
              </td>


              <td className="px-3 py-3 font-medium text-slate-700">
                Transocean
              </td>


              <td className="px-3 py-3 font-bold text-blue-600">
                TNG
              </td>


              <td className="px-3 py-3 min-w-[380px]">

                <div className="space-y-1 leading-relaxed text-slate-700">

                  <p>
                    <span className="font-bold">
                      1. Seen:
                    </span>{' '}
                    Mange sperringer på dekket.
                  </p>

                  <p>
                    <span className="font-bold">
                      2. Discussed:
                    </span>{' '}
                    Viktig at folk ikke spør om å passere sperringer.
                  </p>

                  <p>
                    <span className="font-bold">
                      3. Reinforced:
                    </span>{' '}
                    Finn en ny rute.
                  </p>

                </div>

              </td>


              <td className="px-3 py-3 text-slate-600">
                —
              </td>


              <td className="px-3 py-3 min-w-[220px]">

                <select
                  className="
                    w-full
                    rounded-md
                    border-0
                    bg-slate-100
                    px-3
                    py-2
                    text-sm
                    text-slate-700
                    outline-none
                  "
                  defaultValue="None"
                >

                  <option value="None">
                    None
                  </option>

                  <option value="Work Authorization">
                    Work Authorization
                  </option>

                  <option value="Driving">
                    Driving
                  </option>

                  <option value="Working at Height">
                    Working at Height
                  </option>

                  <option value="Safe Mechanical Lifting">
                    Safe Mechanical Lifting
                  </option>

                  <option value="Bypassing Safety Controls">
                    Bypassing Safety Controls
                  </option>

                  <option value="Confined Space">
                    Confined Space
                  </option>

                  <option value="Energy Isolation">
                    Energy Isolation
                  </option>

                  <option value="Hot Work">
                    Hot Work
                  </option>

                  <option value="Line of Fire">
                    Line of Fire
                  </option>

                </select>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  )
}