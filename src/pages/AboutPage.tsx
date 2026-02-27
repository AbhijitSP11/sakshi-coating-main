export default function AboutPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-4 pb-12 pt-[190px] text-center"
        style={{ backgroundImage: 'url(https://sakshicoating.com/images/bg/all-banner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-[#121628]/70" />
        <div className="relative mx-auto max-w-[900px] text-white">
          <h1 className="text-[48px] font-medium">About <span className="text-[#ffc219]">Us</span></h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="section-title inline-block text-[40px] font-medium text-[#23244a]">About <span className="text-[#ffc219]">Us</span></h3>
            <p className="mt-6 text-[16px] leading-8"><b>Sakshi Coating Pvt. Ltd.</b> is a leading manufacturer, supplier, and applicator of epoxy and polyurethane (PU) coating systems, providing advanced industrial flooring and protective coating solutions across India.</p>
            <p className="mt-6 text-[16px] font-semibold uppercase">Our Heritage and Leadership</p>
            <p className="mt-2 text-[16px] leading-8">Established over <b>15 years ago</b> under the leadership of <b>Mr. Sukhdev Singh Rawat (Director)</b>, the company specializes in solvent-free, solvent based and water-based epoxy and PU resin systems.</p>
            <p className="mt-6 text-[16px] font-semibold uppercase">Technical Expertise and Specialized Systems</p>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-[16px] leading-8">
              <li><b>Flooring Systems:</b> Epoxy flooring, PU concrete flooring, Epoxy flake flooring and decorative metallic systems.</li>
              <li><b>Chemical and Safety Solutions:</b> Phenolic novolac chemical-resistant epoxy flooring and anti-skid PU car parking systems.</li>
              <li><b>Hygienic and Protective Coatings:</b> Food-grade epoxy flooring, PU coatings, and waterproofing solutions.</li>
            </ul>
          </div>
          <div>
            <img src="https://sakshicoating.com/images/about-main.jpg" alt="About Sakshi" className="w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="text-[34px] font-medium text-[#23244a]">We also provide other products for various industrial sectors:</h3>
          <p className="mt-5 text-[16px] leading-8">All types Anti Corrosion Coating, Construction Chemicals, High performance coatings for off-shore and marine environment, heat resistant coatings, pipeline coating, and food-grade epoxy coating.</p>
          <div className="mt-7 space-y-2 text-[16px]">
            <p>- Heavy duty self level Industrial Epoxy floor coating for concrete surfaces. (3-10 mm)</p>
            <p>- Epoxy ESD / Conductive / Antistatic floor coating for concrete surfaces.</p>
            <p>- Phenolic Epoxy Novolac chemical resistance flooring.</p>
            <p>- Epoxy clear for 3D table top and floor coating.</p>
            <p>- Epoxy Grouting compound and epoxy based adhesive systems.</p>
          </div>
        </div>
      </section>
    </>
  );
}


