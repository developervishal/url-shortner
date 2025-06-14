import { Zap } from "lucide-react";
import React from "react";

const Heading = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Zap className="w-4 h-4" />
        Lightning Fast URL Shortening
      </div>
      <h1 className="text-4xl md:text-6xl leading-tight font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
        Shorten your loooooooooooong URL
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Transform long, complex URLs into short, memorable links. Track
        performance, generate QR codes, and boost your digital presence.
      </p>
    </div>
  );
};

export default Heading;
