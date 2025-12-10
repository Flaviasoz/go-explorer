import ThemeSelector from '@/core/components/theme/theme-selector'

const Home = () => {
  return (
    <div className='min-h-[100svh] w-full flex flex-col items-center justify-center bg-background text-foreground p-4'>
      <div className='absolute top-4 right-4'>
        <ThemeSelector />
      </div>
      <main className='flex flex-col items-center justify-center gap-8 max-w-4xl w-full'>
        <h1 className='text-4xl md:text-6xl font-bold text-center'>
          Bem-vindo ao Go Explorer
        </h1>
      </main>
    </div>
  )
}

export default Home
