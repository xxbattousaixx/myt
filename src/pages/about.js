import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import StatsSection from "./../components/StatsSection";
import TeamBiosSection from "./../components/TeamBiosSection";
import CtaSection from "./../components/CtaSection";
import img1 from "./../img/brown.jpg";
import img2 from "./../img/brown.png";
function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Website Development for small businesses" />
      <HeroSection2
        title={
          <>
            Make Your <span className="font-light">Time</span>
          </>
        }
        subtitle="Making your name our business."
        strapline=""
        size="lg"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        leftImage={img1}
        rightImage=""
      />
      <StatsSection
        title="Meeting standards and rendering results"
        subtitle="The ROI speaks for itself, when SEO can generate hundreds of daily leads with already existing content."
        strapline="Quick and reliable Results"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />

      <CtaSection
        title={
          <>
            Create a website <span className="text-blue-600">today</span>!
          </>
        }
        subtitle="Inspiring results from day one without the pain. Get your own custom website and start building amazing services."
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
    </>
  );
}

export default AboutPage;
