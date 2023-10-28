import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

const Titles = ({ data, setSelectedProject }) => {
  return (
    <div className="w-full border-t border-[rgba(183,171,152,0.25)] ">
      {data.map((project, i) => (
        <Title
          key={i}
          data={{ ...project, i }}
          setSelectedProject={setSelectedProject}
        />
      ))}
    </div>
  );
};

function Title({ data, setSelectedProject }) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  const classNameP =
    "inline-block text-[#b7ab98] uppercase font-bold text-[8vw] leading-[7.5vw] relative z-[2]  ";

  return (
    <div
      ref={container}
      className="border-b border-[rgba(183,171,152,0.25)] cursor-default relative z-[2]"
    >
      <div
        onMouseOver={() => setSelectedProject(i)}
        onMouseLeave={() => setSelectedProject(null)}
        className="inline-block pl-[10%] "
      >
        <motion.p
          style={{
            clipPath: clip,
          }}
          className={classNameP}
        >
          {title}
        </motion.p>
        <p
          className={twMerge(
            classNameP,
            "block absolute text-[#1c1c1c] top-0 z-[1]"
          )}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default Titles;
