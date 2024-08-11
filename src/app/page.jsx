import Image from "next/image";
import AmineTrikiImg from "../../public/amine triki.webp";
import AmineTrikiImgc from "../../public/amine triki c.webp";

import Social from "@/components/sociel/Sociel";
import Heading from "@/components/heading/Heading";
import AutoTyping from "@/components/typing/AutoTyping";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import SkillSection from "@/components/SkillSection/SkillSection";

export default function Home() {
  return (
    <>
      <main className="container  flex justify-center	 items-center	 bg-yellow-100	">
        <section className="landing  ">
          <div className="container  flex justify-center	 items-center	 flex-wrap 	">
            <div>
              <h3 className="py-3 "> We are here for your help , I am </h3>
              <h1 className="my-3  text-5xl font-bold		">Amine Triki</h1>
              <div className="my-2">
                <AutoTyping />
              </div>

              <a
                className="bg-cyan-400  my-5 p-3  rounded-full"
                href="https://mega.nz/file/PJ8H2S5B#3siRUw1DYrWD7bTB8wgNt0jO3M0Ztjgv-JhCVQ4McgM"
                target="_blank"
                rel="noreferrer"
              >
                download resume
              </a>
              <div className="my-3">
                <Social />
              </div>
            </div>
            <Image
              className="image mt-5 mb-5 "
              src={AmineTrikiImg}
              alt="Amine Triki"
              width="400"
              title="Amine Triki"
            />
          </div>
        </section>
      </main>

      <Heading title="About me" description="Who am I ?" />

      <section className="container flex justify-center w-full	text-center mx-auto">
        <div className="container flex flex-wrap justify-center items-center flex-row gap-5">
          <div className="w-2/3">
            <p>
              I am a junior front end developer based in tunisia; I create
              elegant and responsive sites, easy to use and built with best
              practices; I use HTML ,CSS, SASS, Tailwind CSS, Bootstrap,
              JavaScript & React js; I am a WordPress designer
            </p>
          </div>
          <div>
            <Image
              className="image mt-5 mb-5 "
              src={AmineTrikiImgc}
              alt="Amine Triki"
              width="300"
              height="300"
              title="Amine Triki"
            />
          </div>
        </div>
      </section>
      <div className="bg-yellow-100 p-7	">
        <Heading title="My Services" description="What Services I’m Providing" />
        <div className="container mx-auto flex md:flex-row sm:flex-col sm:w-full sm:justify-center sm:items-center justify-between gap-10 flex-wrap">
          <Services src="/amine triki c.webp" title="front end developer" description="Js, Ts, React, Nextjs, Vue "/>
          <Services src="/amine triki c.webp" title="Wordpress" description="WordPress Designer"/>
          <Services src="/amine triki c.webp" title="backend developer" description="Php, Laravel, Mysql"/>
        </div>
      </div>
      <Heading title="My Projects" description=" What I build" />
      <Projects/>
      <Heading title="My Skills" description=" What I know" />
      <SkillSection />
    </>
  );
}
