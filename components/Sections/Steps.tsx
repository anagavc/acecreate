import { HeadingFour, HeadingTwo, Paragraph } from "../Fonts";
import AOS from "aos";
import { useEffect } from "react";

const Steps = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const steps = [
    {
      number: "01",
      title: "UX/UI Research",
      desc: `This involves a systematic study of your product’s target audience
              to address their needs and goals through design.The research
              process includes information gathering, interviews, and so on.
              Also, during the study, prototype pages and applications are
              developed based on the data obtained.`,
    },
    {
      number: "02",
      title: "Design, Development & Deployment",
      desc: ` Development is the phase where the website comes to life. We will use various programs and software to integrate the elements of the website design into a fully functional website that is responsive across all types of devices, safe/secure against cross site scripting and  extremely lighweight.`,
    },
    {
      number: "03",
      title: "Maintenance",
      desc: `We monitor your website to ensure that we constantly attract visitors back to the site, update your content, attend to enquiries from users and repair any glitches that may develop with time.`,
    },
  ];
  return (
    <section className="bg-white flex flex-col px-8 lg:px-32 py-12 ">
      <div className="grid max-w-screen-xl gap-8 py-8 mx-auto lg:gap-8  lg:grid-row-2">
        <HeadingTwo content="Steps we follow in building a perfect website for you." />
        <div className="grid max-w-screen-xl  mx-auto lg:gap-10 xl:gap-10 lg:py-4 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              className="flex flex-col gap-4 w-full"
              key={step.title}
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <HeadingFour content={step.number} />

              <HeadingFour content={step.title} />

              <Paragraph content={step.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
