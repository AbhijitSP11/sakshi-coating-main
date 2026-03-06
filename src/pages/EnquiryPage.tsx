import { useState } from 'react';
import FormInput from '../components/FormInput';

interface FormState {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  location: string;
  country: string;
  requirement: string;
  verificationCode: string;
  attachment: File | null;
}

const initialFormState: FormState = {
  companyName: '',
  contactPerson: '',
  phone: '',
  email: '',
  location: '',
  country: '',
  requirement: '',
  verificationCode: '',
  attachment: null,
};

const formVerificationCode = 'SP26';
const enquiryRecipient = 'spsolutions.in.com@gmail.com';

const validateForm = (form: FormState) => {
  const nextErrors: Record<string, string> = {};

  if (!form.companyName.trim()) nextErrors.companyName = 'Company name is required.';
  if (!form.contactPerson.trim()) nextErrors.contactPerson = 'Contact person is required.';
  if (!form.phone.trim()) nextErrors.phone = 'Phone number is required.';
  if (!form.email.trim()) nextErrors.email = 'Email is required.';
  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
  if (!form.location.trim()) nextErrors.location = 'Location is required.';
  if (!form.country.trim()) nextErrors.country = 'Country is required.';
  if (!form.requirement.trim()) nextErrors.requirement = 'Requirement details are required.';
  if (!form.verificationCode.trim()) nextErrors.verificationCode = 'Verification code is required.';
  if (form.verificationCode.trim() && form.verificationCode.trim().toUpperCase() !== formVerificationCode) {
    nextErrors.verificationCode = 'Verification code does not match.';
  }

  return nextErrors;
};

export default function EnquiryPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitMessage('Please correct the highlighted fields.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus(null);

    try {
      const formData = new FormData();
      formData.append('name', form.contactPerson);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('_subject', `Website Enquiry: ${form.companyName}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      formData.append('_replyto', form.email);
      formData.append('company_name', form.companyName);
      formData.append('contact_person', form.contactPerson);
      formData.append('mobile_number', form.phone);
      formData.append('location', form.location);
      formData.append('country', form.country);
      formData.append('requirement_details', form.requirement);

      if (form.attachment) {
        formData.append('attachment', form.attachment);
      }

      const response = await fetch(`https://formsubmit.co/ajax/${enquiryRecipient}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const result = (await response.json()) as { success?: string | boolean; message?: string };

      if (!response.ok || (result.success !== 'true' && result.success !== true)) {
        throw new Error(result.message || 'Email service failed');
      }

      setSubmitStatus('success');
      setSubmitMessage('Enquiry submitted successfully. We will connect with you shortly.');
      setForm(initialFormState);
      setErrors({});
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Unable to send enquiry right now. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        className="relative overflow-hidden px-4 pb-12 pt-[190px] text-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80)', backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-[#121628]/70" />
        <div className="relative mx-auto max-w-[900px] text-white">
          <h1 className="text-[48px] font-medium">Send <span className="text-[#ffc219]">Enquiry</span></h1>
        </div>
      </section>

      <section id="enquiry-form" className="scroll-mt-[160px] bg-[#f8fbff] px-4 py-16">
        <div className="mx-auto max-w-[1200px] rounded bg-white p-8 shadow-[0_12px_30px_rgba(31,63,104,0.12)] md:p-10">
          <h3 className="section-title inline-block text-[32px] font-medium text-[#23244a]">Enquiry <span className="text-[#ffc219]">Form</span></h3>
          <div className="mt-2 text-sm text-[#5a6880]">Fields marked with * are required.</div>

          <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
            <FormInput label="Name of Company :" required value={form.companyName} onChange={(event) => setForm((prev) => ({ ...prev, companyName: event.target.value }))} error={errors.companyName} />
            <FormInput label="Name of Contact Person :" required value={form.contactPerson} onChange={(event) => setForm((prev) => ({ ...prev, contactPerson: event.target.value }))} error={errors.contactPerson} />
            <FormInput label="Tel. No. / Mobile No. :" required value={form.phone} onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))} error={errors.phone} />
            <FormInput type="email" label="Email" required value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} error={errors.email} />

            <div className="md:col-span-2">
              <FormInput textarea label="Address / City / Location :" required rows={3} value={form.location} onChange={(event) => setForm((prev) => ({ ...prev, location: event.target.value }))} error={errors.location} />
            </div>

            <label className="block text-[14px] text-[#23244a]">
              <span className="mb-2 block font-medium">Country : *</span>
              <select
                value={form.country}
                onChange={(event) => setForm((prev) => ({ ...prev, country: event.target.value }))}
                className="h-[50px] w-full border border-[#ced4da] bg-white px-3 text-sm outline-none focus:border-[#ffc219]"
              >
                <option value="">Select a country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="UAE">UAE</option>
              </select>
              {errors.country ? <span className="mt-1 block text-xs text-red-600">{errors.country}</span> : null}
            </label>

            <label className="block text-[14px] text-[#23244a]">
              <span className="mb-2 block font-medium">Attach File</span>
              <input
                type="file"
                onChange={(event) => {
                  const attachment = event.target.files?.[0] ?? null;
                  setForm((prev) => ({ ...prev, attachment }));
                }}
                className="block w-full text-sm text-[#23244a] file:mr-4 file:rounded file:border-0 file:bg-[#4f81bd] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-[#3d6797]"
              />
              <span className="mt-1 block text-xs text-[#666]">{form.attachment?.name || 'No file chosen'}</span>
            </label>

            <div className="md:col-span-2">
              <FormInput textarea label="Requirement Details :" required rows={4} value={form.requirement} onChange={(event) => setForm((prev) => ({ ...prev, requirement: event.target.value }))} error={errors.requirement} />
            </div>

            <label className="block text-[14px] text-[#23244a] md:col-span-2">
              <span className="mb-2 block font-medium">Please Enter Verification Code in the box : *</span>
              <div className="mb-2 inline-block rounded border border-[#ced4da] bg-[#f8fbff] px-4 py-2 text-base font-semibold tracking-[3px] text-[#1f3f68]">
                {formVerificationCode}
              </div>
              <input
                type="text"
                value={form.verificationCode}
                onChange={(event) => setForm((prev) => ({ ...prev, verificationCode: event.target.value.toUpperCase() }))}
                className="h-[50px] w-full border border-[#ced4da] bg-white px-3 text-sm outline-none focus:border-[#ffc219]"
              />
              {errors.verificationCode ? <span className="mt-1 block text-xs text-red-600">{errors.verificationCode}</span> : null}
            </label>

            {submitMessage ? (
              <div className={`rounded px-4 py-3 text-sm md:col-span-2 ${submitStatus === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {submitMessage}
              </div>
            ) : null}

            <div className="flex gap-3 pt-2 md:col-span-2">
              <button type="submit" disabled={isSubmitting} className="btn-theme rounded px-6 py-3 text-sm font-medium uppercase disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
              <button
                type="button"
                className="rounded border border-[#b8c6d9] px-6 py-3 text-sm font-medium uppercase text-[#1f3f68]"
                onClick={() => {
                  setForm(initialFormState);
                  setErrors({});
                  setSubmitMessage('');
                  setSubmitStatus(null);
                }}
              >
                Reset
              </button>
            </div>
          </form>

          <p className="mt-4 text-xs text-[#73809a]">
            Note: Email delivery is handled through FormSubmit and may ask for one-time inbox activation on first use.
          </p>
        </div>
      </section>
    </>
  );
}
