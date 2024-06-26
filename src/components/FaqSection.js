import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

function FaqSection(props) {
  const faqItems = [
    {
      question: "How long will this take?",
      answer:
        "Depending on the scale of the project from 1 to 3 weeks.",
    },
    {
      question: "Are there any payments before the site is finished?",
      answer:
        "Minimum 200$ will be charged weekly until project completion.",
    },
    {
      question: "Can I make website changes myself?",
      answer:
        "You will not be able to make website changes yourself.",
    },
    {
      question: "Can you make further modifications after project completion?",
      answer:
        "Yes. Modifications will range in pricing depending on scale.",
    },
    
  ];

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="space-y-12 container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {faqItems.map((item, index) => (
            <div className="prose prose-indigo" key={index}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>

        {props.showSupportButton && (
          <div className="text-center">
            <Button
              href={props.supportUrl}
              target="_blank"
              size="lg"
              variant="simple"
              startIcon={
                <ArrowTopRightOnSquareIcon className="opacity-50 inline-block w-5 h-5" />
              }
            >
              Go to support center
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}

export default FaqSection;
