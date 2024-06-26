import React from "react";
import { BookmarkIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

function PricingSection(props) {
  const plans = [
    {
      id: "Starter",
      name: "Starter",
      price: "300",
      subtitle: "For small business",
      perks: [
        <>
          <strong>-</strong> Landing Page
        </>,
        <>
          <strong>-</strong> About Us
        </>,
        <>
          <strong>-</strong> Contact Us
        </>,
        <>
          <strong>-</strong> SEO
        </>,
    
      ],
    },
    {
      id: "Pro",
      name: "Pro",
      price: "400",
      subtitle: "For large teams",
      featured: true,
      perks: [
        <>
          <strong>-</strong> Login
        </>,
        <>
          <strong>-</strong> Visual FX
        </>,
        <>
          <strong>-</strong> Payments
        </>,
        <>
          <strong>-</strong> More Pages
        </>,
      
      ],
    },
    {
      id: "Business",
      name: "Business",
      price: "500",
      subtitle: "Custom solutions",
      perks: [
        <>
          <strong>-</strong> User Profiles
        </>,
        <>
          <strong>-</strong> Dashboard View
        </>,
        <>
          <strong>-</strong> API
        </>,
        <>
          <strong>-</strong> Database
        </>,
      ],
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
      <div className="space-y-10 container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0 lg:py-6">
          {plans.map((plan, index) => (
            <div
              className={
                "rounded-lg shadow-sm flex flex-col border-2" +
                (plan.featured
                  ? " bg-blue-50 lg:border-4 border-blue-300 hover:border-blue-400 relative lg:-mx-2 lg:-my-6"
                  : "") +
                (!plan.featured
                  ? " bg-gray-100 border-gray-200 hover:border-gray-300"
                  : "")
              }
              key={index}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center">
                  <BookmarkIcon className="inline-block w-6 h-6 text-orange-400" />
                </div>
              )}

              <div className="p-5 lg:p-6 text-center bg-white rounded-t-lg">
                <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-blue-200 bg-opacity-50 text-blue-600 rounded-full mb-4">
                  {plan.name}
                </span>
                <div className="mb-1">
                  <span className="text-3xl lg:text-4xl font-extrabold">
                    {plan.price}
                  </span>
                  <span className="text-gray-700 font-semibold">USD</span>
                  <p className="text-gray-600 text-sm font-medium">
                    {plan.subtitle}
                  </p>
                </div>
              </div>

              {plan.perks && (
                <div
                  className={
                    "p-5 lg:p-6 space-y-5 lg:space-y-6 text-gray-700 grow" +
                    (plan.featured ? " text-blue-900" : "")
                  }
                >
                  <ul className="space-y-4 text-sm lg:text-base">
                    {plan.perks.map((perk, index) => (
                      <li className="flex items-center space-x-2" key={index}>
                        <CheckCircleIcon className="text-emerald-500 inline-block w-5 h-5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="px-5 pb-5 lg:px-6 lg:pb-6">
                <Button
                  href={`/contact`}
                  size="lg"
                  variant={plan.featured ? "primary" : "dark"}
                  isBlock={true}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default PricingSection;
