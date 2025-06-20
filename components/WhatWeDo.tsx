import { cn } from "../lib/utils";
import {
  IconBulb,
  IconBook,
  IconDeviceMobile,
  IconMicrophone,
  IconPhotoVideo,
  IconRocket,
  // IconAdjustmentsBolt,
  // IconHeart,
} from "@tabler/icons-react";

export function WhatWeDo() {
  const features = [
    {
      title: "STRATEGY",
      description:
        "Business Strategy, Marketing Strategy, Campaign Strategy, PAN African Market Engagement, Growth Marketing",
      icon: IconBulb,
    },
    {
      title: "CONTENT",
      description:
        "Content Strategy, Content Development, Digital Lead Generation, Communication Strategy, Writing for the Mass Media",
      icon: IconBook,
    },
    {
      title: "DIGITAL",
      description:
        "Awareness Campaign, Conversion Support, Influencer Partnerships, Reputation Management, Expansion Support",
      icon: IconDeviceMobile,
    },
    {
      title: "PR",
      description:
        "Press, Media & Government Relationships, Media Coverage Support, Partnerships, Industry Visibility, Events for Visibility",
      icon: IconMicrophone,
    },
    {
      title: "MEDIA",
      description:
        "Media Strategy, Media Buying, Competitive Media Analysis, Digital Lead Generation, Total Marketing Scope",
      icon: IconPhotoVideo,
    },
    {
      title: "ACTIVATION",
      description:
        "Customer Engagement Events, Content Campaigns, Market Engagement, Growth Initiatives, Visibility Events",
      icon: IconRocket,
    },
    // {
    //   title: "SERVICE 7",
    //   description: "Add your seventh service here if needed",
    //   icon: IconHeart,
    // },
    // {
    //   title: "SERVICE 8",
    //   description: "Add your eighth service here if needed",
    //   icon: IconAdjustmentsBolt,
    // },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">
        <Icon
          size={40}
          className="text-[#C6D900] transition-colors duration-200 group-hover/feature:text-[#1A3E1B]"
        />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#D8E927] transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block"
          style={{
            color: "#C6D900",
            transition: "color 0.2s",
          }}
        >
          <span
            className="group-hover/feature:text-[#1A3E1B]"
            style={{ transition: "color 0.2s" }}
          >
            {title}
          </span>
        </span>
      </div>
      <p
        className="text-sm max-w-xs relative z-10 px-10 transition-colors duration-200"
        style={{ color: "#C6D900" }}
      >
        <span
          className="group-hover/feature:text-[#1A3E1B]"
          style={{ transition: "color 0.2s" }}
        >
          {description}
        </span>
      </p>
    </div>
  );
};
