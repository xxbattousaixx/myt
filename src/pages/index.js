import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        title="Premium websites customized for all your projects"
        subtitle="Focus on building your amazing service and we will do the rest."
        strapline=""
        size="lg"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <FeaturesSection
        title="Helping your business grow."
        subtitle="There is enormous value in a reliable application. Take your business to the next level with a modern website, SEO optimized and scalable. Get listed and found on Google; you will have access to site analytics so you can reach a much wider audience or a niche -- everything is customizable and made to specification."
        strapline="Created with passion"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      {/* <ClientsSection
        title="You're in good company"
        subtitle=""
        strapline="Lots of happy customers"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      /> */}
      <TestimonialsSection
        title="Customer Testimonials"
        subtitle=""
        strapline="Real Feedback"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
    </>
  );
}

export default IndexPage;
