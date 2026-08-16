import React from 'react'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50 flex p-3'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 h-auto content-start gap-x-3 gap-y-2 w-full'>


        {/* ================= KPI 1 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-slate-500'>
              total ingested logs
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-slate-900'>
              115
            </span>

            <div className='flex flex-col items-end gap-1'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-green-500'>
                +26.4%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,38 25,30 50,35 75,20 100,27 125,12 150,22 175,10 200,17'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-blue-500'
            />

          </svg>

        </div>


        {/* ================= KPI 2 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-red-500'>
              critical risk exposure
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-red-600'>
              51
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-red-500'>
                +41.7%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,25 25,35 50,20 75,30 100,18 125,27 150,15 175,22 200,10'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-red-500'
            />

          </svg>

        </div>


        {/* ================= KPI 3 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-green-600'>
              positive safety culture
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-green-600'>
              62
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-green-500'>
                +17.0%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,35 25,30 50,32 75,20 100,25 125,15 150,20 175,10 200,15'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-green-500'
            />

          </svg>

        </div>


        {/* ================= KPI 4 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-purple-600'>
              life-saving rule breaches
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-purple-600'>
              49
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-red-500'>
                +40.0%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,35 25,25 50,30 75,15 100,25 125,18 150,28 175,12 200,20'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-purple-500'
            />

          </svg>

        </div>


        {/* ================= KPI 5 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-yellow-500'>
              operational field risks
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-orange-600'>
              66
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-orange-500'>
                +17.9%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,30 25,25 50,35 75,22 100,30 125,15 150,25 175,12 200,20'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-orange-500'
            />

          </svg>

        </div>


        {/* ================= KPI 6 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-blue-400'>
              active operator footprint
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-blue-600'>
              23
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-green-500'>
                +9.5%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,32 25,25 50,30 75,18 100,27 125,15 150,22 175,12 200,18'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-blue-500'
            />

          </svg>

        </div>


        {/* ================= KPI 7 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-orange-600'>
              repeated events (for view)
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-orange-500'>
              10
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-red-500'>
                +11.1%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,20 25,30 50,25 75,35 100,20 125,28 150,15 175,25 200,10'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-orange-500'
            />

          </svg>

        </div>


        {/* ================= KPI 8 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-red-500'>
              action deficiencies
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-red-600'>
              40
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-red-500'>
                +11.1%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,35 25,25 50,30 75,15 100,25 125,18 150,28 175,12 200,20'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-red-500'
            />

          </svg>

        </div>


        {/* ================= KPI 9 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-blue-400'>
              top-tier quality logs
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-blue-600'>
              24
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-green-500'>
                +33.3%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,35 25,30 50,35 75,20 100,25 125,12 150,20 175,15 200,10'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-blue-500'
            />

          </svg>

        </div>


        {/* ================= KPI 10 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-green-600'>
              baseline quality logs
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-green-600'>
              6
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-red-500'>
                -53.8%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,35 25,30 50,35 75,20 100,25 125,15 150,25 175,10 200,20'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-green-500'
            />

          </svg>

        </div>


        {/* ================= KPI 11 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-yellow-500'>
              triage coaching queue
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-orange-600'>
              32
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-red-500'>
                +52.4%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,30 25,20 50,35 75,25 100,30 125,15 150,25 175,12 200,20'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-orange-500'
            />

          </svg>

        </div>


        {/* ================= KPI 12 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3'>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-red-500'>
              rejected submissions
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-red-600'>
              53
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-red-500'>
                +35.9%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,25 25,30 50,20 75,35 100,25 125,15 150,30 175,12 200,20'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-red-500'
            />

          </svg>

        </div>


        {/* ================= KPI 13 ================= */}

        <div className='group relative flex flex-col h-[142px] overflow-hidden border rounded-xl border-slate-200 shadow-md bg-white p-3 '>

          <div className='flex justify-between'>

            <span className='uppercase text-[9px] font-extrabold tracking-widest text-purple-500'>
              clean data trust index
            </span>

            <span className='font-bold text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-400'>
              ?
            </span>

          </div>

          <div className='flex flex-1 items-end justify-between'>

            <span className='text-3xl font-bold text-purple-600'>
              21%
            </span>

            <div className='flex flex-col items-end gap-2'>

              <span className='text-[14px] font-semibold bg-gray-50 rounded-xl px-2 py-1 text-green-500'>
                +5.5%
              </span>

              <span className='text-[9px] font-semibold text-blue-600'>
                &lt; Since yesterday &gt;
              </span>

            </div>

          </div>


          {/* GRAPH */}

          <svg
            className='absolute left-0 bottom-0 h-35 w-full px-10 py-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            viewBox='0 0 200 50'
            preserveAspectRatio='none'
          >

            <polyline
              points='0,30 25,25 50,35 75,20 100,30 125,15 150,25 175,10 200,18'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-purple-500'
            />

          </svg>

        </div>


      </div>

    </div>
  )
}