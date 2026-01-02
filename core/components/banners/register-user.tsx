const RegisterUser = () => {
  return (
    <div className='relative isolate flex items-center justify-center gap-x-6 overflow-hidden bg-linear-to-r from-explorer-coral via-explorer-peach to-explorer-blush px-6 py-2.5 sm:px-3.5'>
      <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
        <p className='text-sm/6 text-white'>
          <strong className='font-semibold'>Go Explorer</strong>
          <svg
            viewBox='0 0 2 2'
            aria-hidden='true'
            className='mx-2 inline size-0.5 fill-current'
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Descubra destinos únicos e planeje sua próxima aventura com exclusividade.
        </p>
        <a
          href='#'
          className='flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-explorer-coral shadow-lg hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:shadow-xl'
        >
          Inscreva-se agora <span aria-hidden='true'>&rarr;</span>
        </a>
      </div>
    </div>
  )
}

export default RegisterUser
