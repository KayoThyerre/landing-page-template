import MainLayout from '../layouts/MainLayout'

function ContactSection() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <MainLayout>
        <div>
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Contato
          </h2>

          <div className="mt-10 grid gap-6 text-center lg:grid-cols-3">
            <article className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">GCM</h3>
              <p className="mt-3 text-slate-300">Ligue 153</p>
            </article>

            <article className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Prefeitura</h3>
              <p className="mt-3 text-slate-300">Ligue (99) 1212-3434</p>
            </article>

            <article className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Nossas redes</h3>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li>Instagram GCM</li>
                <li>Instagram Prefeitura</li>
                <li>Site Prefeitura</li>
              </ul>
            </article>
          </div>
        </div>
      </MainLayout>
    </section>
  )
}

export default ContactSection
