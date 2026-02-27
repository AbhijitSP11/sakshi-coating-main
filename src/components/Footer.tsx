export default function Footer() {
  return (
    <footer className="bg-[#121628] pt-6 text-white">
      <div className="bg-[#4f81bd]">
        <div className="mx-auto grid w-full max-w-[1200px] gap-5 px-4 py-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase">Address</p>
            <p className="mt-2 text-sm">Plot No. W-301, TTC Industrial Area, Rabale M.I.D.C, Navi Mumbai - 400701, Maharashtra.</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase">Phone</p>
            <p className="mt-2 text-sm">+91-9867143094 / 8850757392</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase">Email</p>
            <p className="mt-2 text-sm">response@sakshicoating.com</p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h5 className="text-[17px] font-medium uppercase">Sakshi <span className="text-[#ffc219]">Epoxy Floor Coating System</span></h5>
          <ul className="mt-4 space-y-2 text-sm uppercase text-white/90">
            <li>Primers</li>
            <li>Screed Coat</li>
            <li>Coving Coat</li>
            <li>Grouting Compound</li>
            <li>Self Level Top Coat</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[17px] font-medium uppercase">Sakshi <span className="text-[#ffc219]">Epoxy Paint / Coating System</span></h5>
          <ul className="mt-4 space-y-2 text-sm uppercase text-white/90">
            <li>2 Pack Epoxy Primer</li>
            <li>2 Pack Epoxy Top/Finish Paint</li>
            <li>Epoxy Clear Coating</li>
            <li>Epoxy Thinner</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[17px] font-medium uppercase">Quick <span className="text-[#ffc219]">Links</span></h5>
          <ul className="mt-4 space-y-2 text-sm uppercase text-white/90">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[17px] font-medium uppercase">Locate <span className="text-[#ffc219]">Us</span></h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15076.793664870025!2d73.0157712!3d19.1427901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c16de1a4e5b1%3A0x649a89429a10f4dc!2sSAKSHI%20COATING%20PVT.LTD.%20-%20Epoxy%20Coating%2C%20PU%20Floor%20Coating%2C%20Epoxy%20Paints!5e0!3m2!1sen!2sin!4v1723021101642!5m2!1sen!2sin"
            title="Sakshi Location"
            className="mt-3 h-[220px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="mx-auto w-full max-w-[1200px] px-4 text-sm text-white/75">
          Designed & Hosted by MID and Promoted by GID
        </div>
      </div>
    </footer>
  );
}


