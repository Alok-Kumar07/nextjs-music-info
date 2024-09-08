"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="data:image/jpeg;base64,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"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];

const WhyChooseUs = () => {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs