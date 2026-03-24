import MainLayout from '../layouts/MainLayout'

function Home() {
  return (
    <MainLayout>
      <section className="flex min-h-screen flex-col items-center justify-center py-16 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Home Page
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Landing page structure initialized
        </p>
      </section>
    </MainLayout>
  )
}

export default Home
