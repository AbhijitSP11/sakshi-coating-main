export default function AboutPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-4 pb-12 pt-[190px] text-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1600&q=80)', backgroundPosition: 'center', backgroundSize: 'cover' }}
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
            We are specialists in industrial and commercial flooring systems, delivering reliable epoxy, polyurethane, and protective coating solutions for modern infrastructure. Our company is built on technical expertise, skilled workmanship, and a commitment to quality execution.
          </p>
          <p className="mt-4 text-[16px] leading-8">
            With extensive experience in surface preparation and coating application, we understand the unique requirements of different industries and provide customized flooring solutions that perform under demanding conditions.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="rounded bg-[#f8fbff] p-8 shadow-sm">
              <h4 className="text-[28px] font-medium text-[#23244a]">Our Mission</h4>
              <p className="mt-4 text-[16px] leading-8">
                To deliver durable, safe, and aesthetically superior flooring systems that enhance operational efficiency while reducing maintenance costs for our clients.
              </p>
            </article>
            <article className="rounded bg-[#f8fbff] p-8 shadow-sm">
              <h4 className="text-[28px] font-medium text-[#23244a]">Our Vision</h4>
              <p className="mt-4 text-[16px] leading-8">
                To become a preferred flooring solutions partner known for quality, reliability, and technical excellence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] px-4 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="text-[34px] font-medium text-[#23244a]">Why Choose Us</h3>
          <ul className="arrow-list mt-7 grid gap-3 text-[16px] md:grid-cols-2">
            <li>Experienced technical team</li>
            <li>Quality material application</li>
            <li>Professional supervision</li>
            <li>On-time project delivery</li>
            <li>Customized flooring solutions</li>
            <li>Strong after-service support</li>
          </ul>
        </div>
      </section>
    </>
  );
}
