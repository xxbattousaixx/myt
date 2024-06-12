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
        title="Premium leads for all your SaaS projects"
        subtitle="Focus on building your amazing service and we will do the rest. We grew more than 10,000 online businesses."
        strapline=""
        size="lg"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <FeaturesSection
        title="The best tech under the hood"
        subtitle="Build user friendly and modern dashboards using the latest tech. Now is the time with a best selling UI framework."
        strapline="Created with passion"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <ClientsSection
        title="You're in good company"
        subtitle=""
        strapline="Lots of happy customers"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
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
