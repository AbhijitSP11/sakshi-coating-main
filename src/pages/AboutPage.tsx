const whyChooseUs = [
  { title: '25+ Years Experience', desc: 'Over two and a half decades of specialisation in industrial flooring systems across Nashik and Maharashtra.' },
  { title: 'Dealer of Pidilite CIPY Products', desc: 'We regularly work with high-quality epoxy systems from leading manufacturers such as Cipy Polyurethanes Pvt Ltd, and PU materials on every project.' },
  { title: 'Skilled Application Team', desc: 'Trained technicians and supervised applicators delivering consistent, high-quality results.' },
  { title: 'Industrial Client Experience', desc: 'Trusted by automobile plants, pharma facilities, warehouses, food processing units, and engineering plants.' },
  { title: 'Fast Project Completion', desc: 'Efficient project scheduling minimises downtime and ensures timely handover.' },
  { title: 'Strong After-Service Support', desc: 'Dedicated post-installation support and maintenance guidance for long-term floor performance.' },
];

export default function AboutPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-4 pb-12 pt-[190px] text-center"
        style={{ backgroundImage: 'url(/images/about-hero-bg.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-[#121628]/70" />
        <div className="relative mx-auto max-w-[900px] text-white">
          <h1 className="text-[48px] font-medium">About <span className="text-[#ffc219]">Us</span></h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="section-title inline-block text-[40px] font-medium text-[#23244a]">Who <span className="text-[#ffc219]">We Are</span></h3>
          <p className="mt-6 text-[16px] leading-8">
            SP Solutions is a Nashik-based industrial flooring contractor with over <strong>25 years of hands-on experience</strong> in epoxy, polyurethane, and protective coating systems. We serve factories, warehouses, pharma plants, food processing units, and commercial spaces across Maharashtra.
          </p>
          <p className="mt-4 text-[16px] leading-8">
            We regularly work with high-quality epoxy systems from leading manufacturers such as <strong> Cipy Polyurethanes Pvt Ltd </strong>, depending on project requirements. Material selection is based on site conditions, durability needs, and client preferences.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="rounded bg-[#f8fbff] p-8 shadow-sm">
              <h4 className="text-[28px] font-medium text-[#23244a]">Our Mission</h4>
              <p className="mt-4 text-[16px] leading-8">
                To deliver durable, safe, and high-performance flooring systems that enhance operational efficiency, hygiene, and safety while reducing long-term maintenance costs for our clients.
              </p>
            </article>
            <article className="rounded bg-[#f8fbff] p-8 shadow-sm">
              <h4 className="text-[28px] font-medium text-[#23244a]">Our Vision</h4>
              <p className="mt-4 text-[16px] leading-8">
                To be Maharashtra's most trusted industrial flooring partner — known for quality materials, skilled execution, and reliable after-service support.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="section-title inline-block text-[34px] font-medium text-[#23244a]">Why Choose <span className="text-[#ffc219]">Us</span></h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="rounded bg-white p-6 shadow-sm">
                <h4 className="text-[16px] font-semibold text-[#23244a]">{item.title}</h4>
                <p className="mt-2 text-[14px] leading-7 text-[#55647a]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
