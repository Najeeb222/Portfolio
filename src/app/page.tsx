import { HomeContainer } from "@modules/Home";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Najeeb Ullah",
  url: siteUrl,
  image: `${siteUrl}/assets/images/headerImg.png`,
  jobTitle: "MERN Stack Developer",
  description:
    "MERN stack and Next.js developer building modern, responsive web applications.",
  email: "mailto:Najeeb13750@gmail.com",
  telephone: "+923490302906",
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Web development",
  ],
  sameAs: [
    "https://github.com/Najeeb222",
    "https://www.linkedin.com/in/najeeb-ullah-0b771b35a",
    "https://www.facebook.com/mian.syed.najeeb.ullah",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <HomeContainer />
    </>
  );
}