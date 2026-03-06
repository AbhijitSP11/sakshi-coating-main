import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-4 pb-12 pt-[190px] text-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?auto=format&fit=crop&w=1600&q=80)', backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-[#121628]/70" />
        <div className="relative mx-auto max-w-[900px] text-white">
          <h1 className="text-[48px] font-medium">Contact <span className="text-[#ffc219]">Us</span></h1>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded bg-white p-8 shadow-[0_12px_30px_rgba(31,63,104,0.12)]">
            <h3 className="section-title inline-block text-[34px] font-medium text-[#1f3f68]">
              Get In <span className="text-[#ffc219]">Touch</span>
            </h3>
            <p className="mt-5 text-[15px] leading-7 text-[#42526b]">
              We are ready to assist you with professional flooring consultation, site inspection, and project execution.
            </p>

            <div className="mt-8 space-y-6 text-[#1f3f68]">
              <div className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffc219] text-[11px] font-bold text-[#1f3f68]">
                  LOC
                </span>
                <div>
                  <p className="text-[14px] font-semibold uppercase tracking-wide">Address</p>
                  <p className="mt-1 text-[16px] leading-7 text-[#33425f]">Silver Plaza, Pathardi Phata, Nashik, Maharashtra</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4f81bd] text-[11px] font-bold text-white">
                  TEL
                </span>
                <div>
                  <p className="text-[14px] font-semibold uppercase tracking-wide">Phone</p>
                  <p className="mt-1 text-[16px] leading-7 text-[#33425f]">+91-9890002239</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4f81bd] text-[11px] font-bold text-white">
                  MAIL
                </span>
                <div>
                  <p className="text-[14px] font-semibold uppercase tracking-wide">Email</p>
                  <p className="mt-1 text-[16px] leading-7 text-[#33425f]">spsolutions.in.com@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded bg-white shadow-[0_12px_30px_rgba(31,63,104,0.12)]">
            <div className="border-b border-[#d8e5f5] px-6 py-4">
              <h4 className="text-[22px] font-medium text-[#1f3f68]">Our Location On Map</h4>
              <p className="mt-1 text-sm text-[#4f81bd]">Silver Plaza, Pathardi Phata, Nashik</p>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Silver%20Plaza%20Pathardi%20Phata%20Nashik%2C%20Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="SP Solutions Nashik Location"
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
            <div className="px-6 py-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Silver+Plaza+Pathardi+Phata+Nashik"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded border border-[#4f81bd] px-4 py-2 text-sm font-medium text-[#4f81bd] transition hover:bg-[#4f81bd] hover:text-white"
              >
                Open Pin Location
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h3 className="text-[34px] font-medium text-[#23244a]">
            Request a Site Visit <span className="font-bold text-[#ffc219]">Today</span>
          </h3>
          <Link to="/enquiry" className="btn-theme rounded px-7 py-3 text-sm font-medium uppercase">Send Enquiry</Link>
        </div>
      </section>
    </>
  );
}
