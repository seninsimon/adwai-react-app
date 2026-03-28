import { FaArrowRight } from "react-icons/fa";

export default function CareAssistPage() {
  return (
    <section className="container mx-auto px-4 mt-10  space-y-16">

      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
            Organize your journeys
          </h2>

          <p className="text-gray-600">
            Organize your Journeys Assemble your crew, Add your tasks, Share your experiences. Track your progress and motivate each other. Start your group journey here.
          </p>

          <p className="text-gray-600">
            Manage live chat, work flow interactions, and automation tools through Assists for improved experiences.
          </p>

          <p className="text-gray-600">
            Access our journey assists platform designed to manage and deliver organized activities.
          </p>

          <a
            href="https://assist.piaxu.com/dashboard"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white bg-[#e15bbb] hover:bg-[#e15bbb]/80 px-5 py-2.5 rounded-lg text-sm font-medium transition"
          >
            Go to Assist <FaArrowRight />
          </a>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/banner_01.png"
            alt="Mountain Climbing"
            className="rounded-xl object-cover w-full max-w-md"
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="flex justify-center md:order-1 order-2">
          <img
            src="/images/banner_02.png"
            alt="Care"
            className="rounded-xl object-cover w-full max-w-md"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-4 md:order-2 order-1">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
            Are you a Care practitioner or looking for Care practitioner services
          </h2>

          <p className="text-gray-600">
            Simplify your care journey. Find the right Care practitioner.
          </p>

          <p className="text-gray-600">
            Make care easier every step of the way. Book your appointment hassle-free, check into care.
          </p>

          <p className="text-gray-600">
            Transform the way you experience care. Spend quality time with your Care practitioner and customize the plan.
          </p>

          <p className="text-gray-600">
            Effortlessly navigate your care journey through managed tasks and care assists
          </p>

          <p className="text-gray-600">
            Access our care services platform designed to manage and deliver better support experiences for your users and customers.
          </p>

          <a
            href="https://care.piaxu.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white bg-[#e15bbb] hover:bg-[#e15bbb]/80 px-5 py-2.5 rounded-lg text-sm font-medium transition"
          >
            Go to Care <FaArrowRight />
          </a>
        </div>
      </div>

      {/* SECTION 3 (LEFT ALIGNED) */}
      <div className="max-w-2xl space-y-4">

        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
          Need Something Custom?
        </h2>

        <p className="text-gray-600">
          We support a wide range of use cases and partner models. Whether you're:
        </p>

        <ul className="text-gray-600 space-y-2">
          <li>• A practice with multiple practitioners</li>
          <li>• Looking for intelligent solutions</li>
          <li>• Representing an enterprise with large volume</li>
          <li>• A non-profit organization</li>
          <li>• Or interested in partnering with us</li>
        </ul>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-white bg-[#e15bbb] hover:bg-[#e15bbb]/80 px-6 py-3 rounded-lg font-medium transition"
        >
          Write to us <FaArrowRight />
        </a>
      </div>

    </section>
  );
}