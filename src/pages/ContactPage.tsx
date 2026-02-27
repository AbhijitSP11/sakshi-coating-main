import { useMemo, useState } from 'react';
import FormInput from '../components/FormInput';

interface FormState {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  location: string;
  requirement: string;
}

const initialFormState: FormState = {
  companyName: '',
  contactPerson: '',
  phone: '',
  email: '',
  location: '',
  requirement: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    if (!submitted) return {} as Record<string, string>;

    const nextErrors: Record<string, string> = {};
    if (!form.companyName.trim()) nextErrors.companyName = 'Company name is required.';
    if (!form.contactPerson.trim()) nextErrors.contactPerson = 'Contact person is required.';
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!form.email.trim()) nextErrors.email = 'Email is required.';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (!form.location.trim()) nextErrors.location = 'Location is required.';
    if (!form.requirement.trim()) nextErrors.requirement = 'Requirement details are required.';

    return nextErrors;
  }, [form, submitted]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    const hasErrors = Object.keys(errors).length > 0;

    if (!hasErrors) {
      alert('Enquiry submitted successfully.');
      setForm(initialFormState);
      setSubmitted(false);
    }
  };

  return (
    <>
      <section
        className="relative overflow-hidden px-4 pb-12 pt-[190px] text-center"
        style={{ backgroundImage: 'url(https://sakshicoating.com/images/bg/all-banner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-[#121628]/70" />
        <div className="relative mx-auto max-w-[900px] text-white">
          <h1 className="text-[48px] font-medium">Contact <span className="text-[#ffc219]">Us</span></h1>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2">
          <div className="rounded bg-white p-8 shadow-sm">
            <h3 className="section-title inline-block text-[32px] font-medium text-[#23244a]">Get In <span className="text-[#ffc219]">Touch</span></h3>
            <ul className="mt-8 space-y-5 text-[16px] leading-8">
              <li><b>Address:</b> Plot No. W-301, TTC Industrial Area, Rabale M.I.D.C, Navi Mumbai - 400701, Maharashtra.</li>
              <li><b>Phone:</b> +91-9867143094 / 8850757392</li>
              <li><b>Email:</b> response@sakshicoating.com</li>
            </ul>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15076.793664870025!2d73.0157712!3d19.1427901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c16de1a4e5b1%3A0x649a89429a10f4dc!2sSAKSHI%20COATING%20PVT.LTD.%20-%20Epoxy%20Coating%2C%20PU%20Floor%20Coating%2C%20Epoxy%20Paints!5e0!3m2!1sen!2sin!4v1723021101642!5m2!1sen!2sin"
              title="Sakshi Coating Map"
              className="mt-6 h-[320px] w-full border-0"
              loading="lazy"
            />
          </div>

          <div className="rounded bg-white p-8 shadow-sm">
            <h3 className="section-title inline-block text-[32px] font-medium text-[#23244a]">Send <span className="text-[#ffc219]">Enquiry</span></h3>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <FormInput label="Name of Company" required value={form.companyName} onChange={(event) => setForm((prev) => ({ ...prev, companyName: event.target.value }))} error={errors.companyName} />
              <FormInput label="Name of Contact Person" required value={form.contactPerson} onChange={(event) => setForm((prev) => ({ ...prev, contactPerson: event.target.value }))} error={errors.contactPerson} />
              <FormInput label="Tel. No. / Mobile No." required value={form.phone} onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))} error={errors.phone} />
              <FormInput type="email" label="Email" required value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} error={errors.email} />
              <FormInput textarea label="Address / City / Location" required rows={3} value={form.location} onChange={(event) => setForm((prev) => ({ ...prev, location: event.target.value }))} error={errors.location} />
              <FormInput textarea label="Requirement Details" required rows={4} value={form.requirement} onChange={(event) => setForm((prev) => ({ ...prev, requirement: event.target.value }))} error={errors.requirement} />

              <div className="flex gap-3 pt-2">
                <button type="submit" className="btn-theme rounded px-6 py-3 text-sm font-medium uppercase">Submit</button>
                <button type="button" className="rounded border border-[#ccc] px-6 py-3 text-sm font-medium uppercase" onClick={() => { setForm(initialFormState); setSubmitted(false); }}>
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h3 className="text-[34px] font-medium text-[#23244a]">
            Are You Looking Great Solution <span className="font-bold text-[#ffc219]">For Your Requirements?</span>
          </h3>
          <a href="mailto:response@sakshicoating.com" className="btn-theme rounded px-7 py-3 text-sm font-medium uppercase">Send Enquiry</a>
        </div>
      </section>
    </>
  );
}


