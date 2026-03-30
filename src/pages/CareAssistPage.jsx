import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function GetStartedPage() {
  const [openModal, setOpenModal] = useState(null);

  const Modal = ({ title, children }) => {
    if (!openModal) return null;

    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-2xl rounded-lg p-6 space-y-4 shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-[#1F2937]">{title}</h2>
            <button onClick={() => setOpenModal(null)}>✕</button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4  space-y-20">
      {/* HEADER */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold text-[#1F2937]">Get Started</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create your account and choose your path. Start with a free account in
          seconds. Tell us how you plan to use the platform so we can tailor
          your experience.
        </p>
      </div>

      {/* STEP 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1F2937]">
            Create Your Free Account
          </h2>

          <p className="text-gray-600 text-sm">
            Start for free. No commitment required.
          </p>

          <p className="text-gray-600 text-sm">
            Your free account gives you immediate access to core features,
            including tokens to activate Journey Assists.
          </p>

          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Journey creation & management</li>
            <li>• Intelligent assists</li>
            <li>• Personalized guidance</li>
            <li>• Upgrade anytime</li>
          </ul>

          <button
            onClick={() => setOpenModal("step1")}
            className="bg-[#e15bbb] text-white px-3 py-1 rounded-lg flex items-center gap-2"
          >
            Create Free Account <FaArrowRight />
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/banner_01.png"
            className="rounded-xl max-w-md w-full"
            alt="Step1"
          />
        </div>
      </div>

      {/* STEP 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div className="flex justify-center md:order-1 order-2">
          <img
            src="/images/banner_02.png"
            className="rounded-xl max-w-md w-full"
            alt="Step2"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-4 md:order-2 order-1">
          <h2 className="text-2xl font-semibold text-[#1F2937]">
            Are You an Individual Practitioner?
          </h2>

          <p className="text-gray-600 text-sm">
            Enable your professional tools and start managing care.
          </p>

          <p className="text-gray-600 text-sm">
            Manage availability, create care plans, and streamline workflows
            using Care Assists.
          </p>

          <button
            onClick={() => setOpenModal("step2")}
            className="bg-[#e15bbb] text-white px-3 py-1 rounded-lg flex items-center gap-2"
          >
            Set Up Practitioner Profile <FaArrowRight />
          </button>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1F2937]">
            Organization / Custom Setup
          </h2>

          <p className="text-gray-600 text-sm">
            Build a secure, scalable system tailored to your organization.
          </p>

          <p className="text-gray-600 text-sm">
            Get private infrastructure, custom assists, and full control over
            workflows.
          </p>

          <button
            onClick={() => setOpenModal("step3")}
            className="bg-[#e15bbb] text-white px-3 py-1 rounded-lg flex items-center gap-2"
          >
            Set up Organization Profile <FaArrowRight />
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/banner_03.png"
            className="rounded-xl max-w-md w-full"
            alt="Step3"
          />
        </div>
      </div>

      {/* NOT SURE */}
      <div className="text-center space-y-4">
        <h2 className="text-xl font-semibold text-[#1F2937]">
          Not Sure Where to Start?
        </h2>

        <p className="text-gray-600">
          Start with a free account and explore at your own pace. Upgrade
          anytime.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setOpenModal("step1")}
            className="bg-[#e15bbb] text-white px-3 py-1 rounded-lg"
          >
            Create Free Account
          </button>

          <button className="border px-3 py-1 rounded-lg">
            Talk to Our Team
          </button>
        </div>
      </div>

      {openModal === "step1" && (
        <Modal title="Create Free Account">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="border p-3 rounded-lg" placeholder="First Name" />
            <input className="border p-3 rounded-lg" placeholder="Last Name" />
            <input
              className="border p-3 rounded-lg"
              placeholder="Assist Name"
            />
            <input
              className="border p-3 rounded-lg"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="border p-3 rounded-lg"
              placeholder="Password"
            />
            <input
              type="password"
              className="border p-3 rounded-lg"
              placeholder="Confirm Password"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-800">
              What best describes you?
            </p>

            <div className="space-y-3">
              {[
                { label: "Care Seeker", value: "care_seeker" },
                { label: "Practitioner", value: "practitioner" },
                { label: "Organization", value: "organization" },
              ].map((item) => (
                <label
                  key={item.value}
                  className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:shadow-sm transition"
                >
                  <input
                    type="radio"
                    name="role"
                    value={item.value}
                    className="accent-gray-800"
                  />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="bg-[#e15bbb] text-white px-3 py-1 rounded-lg">
            Create Free Account
          </button>
        </Modal>
      )}

      {/* STEP 2 MODAL */}
      {openModal === "step2" && (
        <Modal title="Practitioner Setup">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="border p-3 rounded-lg"
              placeholder="Practice Name"
            />
            <input className="border p-3 rounded-lg" placeholder="Specialty" />
            <input
              className="border p-3 rounded-lg"
              placeholder="Certifications"
            />
            <input className="border p-3 rounded-lg" placeholder="Location" />
            <input
              className="border p-3 rounded-lg"
              placeholder="Availability"
            />
            <input
              className="border p-3 rounded-lg"
              placeholder="Services Offered"
            />
          </div>

          <textarea
            className="border p-3 rounded-lg w-full"
            placeholder="Bio"
          />

          <button className="bg-[#e15bbb] text-white px-6 py-3 rounded-lg">
            Save Practitioner Profile
          </button>
        </Modal>
      )}

      {/* STEP 3 MODAL */}
      {openModal === "step3" && (
        <Modal title="Organization Setup">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="border p-3 rounded-lg"
              placeholder="Organization Name"
            />
            <input
              className="border p-3 rounded-lg"
              placeholder="Practitioners Count"
            />
            <input
              className="border p-3 rounded-lg"
              placeholder="Specialties"
            />
            <input
              className="border p-3 rounded-lg"
              placeholder="Contact Name"
            />
            <input className="border p-3 rounded-lg" placeholder="Email" />
            <input className="border p-3 rounded-lg" placeholder="Phone" />
          </div>

          <textarea
            className="border p-3 rounded-lg w-full"
            placeholder="Needs / Goals"
          />

          <button className="bg-[#e15bbb] text-white px-3 py-1 rounded-lg">
            Submit
          </button>
        </Modal>
      )}
    </section>
  );
}
