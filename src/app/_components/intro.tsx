import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        What is?
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Simplifying complex topics across <strong>Technology</strong>, <strong>Science</strong>, 
        <strong>Business</strong>, <strong>Health</strong>, and more. Learn something new every day!
      </h4>
      <nav className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
        <a
          href="/category/technology"
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Technology
        </a>
        <a
          href="/category/science"
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Science
        </a>
        <a
          href="/category/business"
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Business
        </a>
        <a
          href="/category/health"
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Health
        </a>
        <a
          href="/category/finance"
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Finance
        </a>
        <a
          href="/category/lifestyle"
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Lifestyle
        </a>
      </nav>
    </section>
  );
}
