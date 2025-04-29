import Head from "next/head";

export default function OurTeamHeading() {
  return (
    <>
      <Head>
        <title>Our Team | Siddhi Academy – Expert Educators in Thane</title>
        <meta
          name="description"
          content="Meet the experienced educators and staff at Siddhi Academy, Thane. Our team is dedicated to helping every student achieve academic success through personalized guidance."
        />
        <meta
          name="keywords"
          content="Siddhi Academy, Our Team, Educators in Thane, Teachers in Thane, Academic Staff, Coaching Experts, Best Academy in Thane"
        />
        <meta name="author" content="Siddhi Academy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Team | Siddhi Academy" />
        <meta
          property="og:description"
          content="Get to know the pillars of Siddhi Academy – our passionate team of educators committed to student success in Thane."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://www.siddhiacademythane.com/our-team" />
        <meta property="og:site_name" content="Siddhi Academy" />
      </Head>

      <main>
        <section className="text-center px-4 py-12 mt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Team – The Pillars of Siddhi Academy
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg md:text-xl md:text-medium">
            At Siddhi Academy in Thane, we are proud to have a dedicated and skilled team
            of educators and administrators who work tirelessly to ensure each
            student receives personalized attention and academic support for success.
          </p>
        </section>
      </main>
    </>
  );
}
