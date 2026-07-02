import {
  Contributions,
  Education,
  FooterAbout,
  HeaderAbout,
  MoreAboutMe,
  Skills,
} from "@/components";

export const metadata = {
  title: "About",
  description:
    "Learn about Raúl Romero's experience, principles and full-stack development toolkit.",
};

export default function AboutMe() {
  return (
    <main className="section-shell" id="main-content">
      <HeaderAbout />
      <div className="grid gap-5 md:grid-cols-2">
        <Education />
        <Skills />
        <div className="md:col-span-2">
          <Contributions />
        </div>
        <div className="md:col-span-2">
          <MoreAboutMe />
        </div>
        <div className="pb-20 md:col-span-2">
          <FooterAbout />
        </div>
      </div>
    </main>
  );
}
