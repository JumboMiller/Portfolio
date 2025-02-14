"use client";

import Typewriter from "typewriter-effect";

type TypeWriterProps = {
  texts: string[];
  autoStart?: boolean;
  loop?: boolean;
  delay?: number;
  deleteSpeed?: number;
};

const TypeWriter = ({
  texts,
  autoStart = true,
  loop = true,
  delay = 60,
  deleteSpeed = 40,
}: TypeWriterProps) => {
  return (
      <Typewriter
        options={{
          strings: texts,
          autoStart,
          loop,
          delay,
          deleteSpeed,
        }}
      />
  );
};

export default TypeWriter;
