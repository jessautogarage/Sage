import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Everything you need to <br /> integrate the bodygraph
        </h1>
        <p className="text-base md:text-lg mb-6">
          BodyGraph Chart gives you all the tools you need to create your Human Design Chart and integrate it into your website. You can create your bespoke style, customize and translate Human Design chart properties, link chart results to your products and services.
        </p>
        <a href="#" className="inline-flex items-center gap-2 font-semibold text-[#2f3542]">
          ▶ Watch the video
        </a>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <img
          src="/bodygraph-chart.png"
          alt="Bodygraph"
          className="w-full max-w-md mx-auto"
        />
        <div className="text-sm mt-4">
          8th January 2022 @ 09:05, UTC+1 <br />
          <strong>4 / 6 - Manifesting Generator</strong> <br />
          <span className="text-xs text-gray-600">
            TO RESPOND • EMOTIONAL • SOLAR PLEXUS • QUADRUPLE SPLIT DEFINITION
          </span>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <img src="/planet.png" className="absolute left-0 bottom-0 w-24 opacity-60" />
      <img src="/sparkle.png" className="absolute right-10 top-1/3 w-6" />
    </div>
  );
};

export default Hero;
