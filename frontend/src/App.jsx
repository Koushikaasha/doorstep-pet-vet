import { useState } from "react";

const WHATSAPP_NUMBER = "919346297972";

const PACKAGES = [
  {
    id: "dog-arv",
    name: "Anti-Rabies Booster (ARV)",
    description: "Dog anti-rabies vaccination with health check and certificate.",
    species: "DOG",
    price: 499,
  },
  {
    id: "dog-dhppi",
    name: "DHPPI 7-in-1 Core Combo",
    description: "Dog core vaccination package with health check and vaccination certificate.",
    species: "DOG",
    price: 899,
  },
  {
    id: "dog-puppy-starter",
    name: "Puppy Starter Shield Pack",
    description: "Puppy vaccination starter package including combo vaccination, rabies, deworming and health record card.",
    species: "DOG",
    price: 1299,
  },
  {
    id: "cat-arv",
    name: "Feline Anti-Rabies (ARV)",
    description: "Cat anti-rabies vaccination with health check and certificate.",
    species: "CAT",
    price: 499,
  },
  {
    id: "cat-tricat",
    name: "Tricat / CRP 3-in-1 Combo",
    description: "Cat core vaccination package with health check and vaccination certificate.",
    species: "CAT",
    price: 999,
  },
  {
    id: "cat-kitten-starter",
    name: "Kitten Starter Shield Pack",
    description: "Kitten vaccination starter package including Tricat combo, rabies, deworming and health record card.",
    species: "CAT",
    price: 1399,
  },
];

const steps = [
  { icon: "📱", title: "Choose a package", text: "Pick the vaccination plan that suits your pet." },
  { icon: "💬", title: "Message us", text: "Share your preferred slot on WhatsApp." },
  { icon: "🏡", title: "We visit you", text: "Our vet arrives at your doorstep, fuss-free." },
];

const stats = [
  ["100%", "At-home visits"],
  ["🐕 🐈", "Dogs & cats"],
  ["Same week", "Slot booking"],
];

function App() {
  const [species, setSpecies] = useState("DOG");

  const visiblePackages = PACKAGES.filter((item) => item.species === species);

  function openWhatsApp(message) {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function bookPackage(item) {
    openWhatsApp(
      `Hi Doorstep Pet Vet! I would like to enquire about the ${item.name} package (₹${item.price}). Please share the available appointment slots.`
    );
  }

  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/avatar.png"
              alt="Doorstep Pet Vet Logo"
              className="h-10 w-10 rounded-full object-cover shadow-sm ring-2 ring-teal-600/20"
            />
            <div>
              <h1 className="text-xl font-extrabold text-teal-700">Doorstep Pet Vet</h1>
              <p className="text-xs text-slate-500">Veterinary care at home</p>
            </div>
          </div>
          <a
            href="#packages"
            className="rounded-full bg-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-700"
          >
            Explore packages
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-amber-50">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold tracking-widest text-teal-800">
                CARE THAT COMES TO YOU
              </span>
              <h2 className="mt-5 text-5xl font-black leading-[1.05] text-slate-900 md:text-7xl">
                Happier pets.
                <span className="block bg-gradient-to-r from-teal-600 to-emerald-400 bg-clip-text text-transparent">
                  Healthier lives.
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                Skip the clinic queue and the car-ride stress. We bring vaccinations and
                veterinary care right to your home.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#packages"
                  className="rounded-full bg-teal-600 px-7 py-4 font-bold text-white shadow-xl shadow-teal-600/30 transition hover:-translate-y-0.5 hover:bg-teal-700"
                >
                  View packages →
                </a>
                <button
                  onClick={() => openWhatsApp("Hi Doorstep Pet Vet! I'd like to know more about your services.")}
                  className="rounded-full border-2 border-slate-200 bg-white px-7 py-4 font-bold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
                >
                  Chat with us
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1100&q=85"
                alt="Dogs enjoying time outdoors"
                className="h-80 w-full rounded-[2rem] object-cover shadow-2xl md:h-[460px]"
              />
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl md:-left-6">
                <span className="text-3xl">🩺</span>
                <div>
                  <p className="font-extrabold text-slate-900">Vet at your door</p>
                  <p className="text-sm text-slate-500">No travel. No stress.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-slate-100 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 px-5 py-8 text-center">
            {stats.map(([big, small]) => (
              <div key={small}>
                <p className="text-xl font-black text-teal-700 md:text-3xl">{big}</p>
                <p className="mt-1 text-xs text-slate-500 md:text-sm">{small}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-black text-slate-900 md:text-4xl">
              How it works
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.title} className="rounded-3xl bg-slate-50 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-3xl">
                    {s.icon}
                  </div>
                  <p className="mt-5 text-sm font-bold text-teal-700">STEP {i + 1}</p>
                  <h3 className="mt-1 text-xl font-extrabold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="bg-gradient-to-b from-teal-50 to-white px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="font-bold uppercase tracking-widest text-teal-700">
                Simple. Clear. Convenient.
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-5xl">
                Vaccination packages
              </h2>
              <p className="mt-3 text-slate-600">Choose your pet's category to explore packages.</p>
            </div>

            <div className="mx-auto mt-8 flex w-fit gap-2 rounded-full bg-white p-1.5 shadow-md">
              {[["DOG", "🐕 For dogs"], ["CAT", "🐈 For cats"]].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setSpecies(value)}
                  aria-pressed={species === value}
                  className={`rounded-full px-7 py-3 font-bold transition ${
                    species === value
                      ? "bg-teal-600 text-white shadow-lg shadow-teal-600/30"
                      : "text-slate-600 hover:text-teal-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {visiblePackages.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="h-2 bg-gradient-to-r from-teal-500 to-emerald-300" />
                  <div className="flex flex-1 flex-col p-7">
                    <span className="w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700">
                      {species === "DOG" ? "🐕 Dog" : "🐈 Cat"}
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold text-slate-900">{item.name}</h3>
                    {item.description && (
                      <p className="mt-2 flex-1 text-slate-600">{item.description}</p>
                    )}
                    <p className="mt-6 text-4xl font-black text-teal-700">₹{item.price}</p>
                    <button
                      onClick={() => bookPackage(item)}
                      className="mt-5 rounded-full bg-teal-600 px-5 py-3.5 font-bold text-white transition group-hover:bg-teal-700"
                    >
                      Book on WhatsApp
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
            {/* Service Area */}
      <section className="bg-teal-50 px-5 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-teal-100 bg-white p-8 text-center shadow-sm md:p-12">
          <div className="text-4xl">📍</div>

          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-teal-700">
            Where we serve
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Hyderabad & nearby areas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            We provide at-home vaccination services for dogs and cats.
            Contact us on WhatsApp to enquire about service availability
            in your location.
          </p>

          <button
            onClick={() =>
              openWhatsApp(
                "Hi Doorstep Pet Vet! I would like to check at-home vaccination availability in my area in Hyderabad."
              )
            }
            className="mt-7 rounded-full bg-teal-600 px-7 py-3.5 font-bold text-white transition hover:bg-teal-700"
          >
            Check availability on WhatsApp →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 px-5 py-10 text-center text-slate-400">
        <div className="mx-auto mb-2 flex items-center justify-center gap-2">
          <img src="/avatar.png" alt="Doorstep Pet Vet Logo" className="h-7 w-7 rounded-full object-cover" />
          <p className="text-lg font-bold text-white">Doorstep Pet Vet</p>
        </div>
        <p className="mt-1 text-sm">Veterinary care at home, for the pets you love.</p>
      </footer>

      {/* Floating WhatsApp button */}
      <button
        onClick={() => openWhatsApp("Hi Doorstep Pet Vet! I need some help.")}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-2xl transition hover:scale-110"
      >
        💬
      </button>
    </div>
  );
}

export default App;