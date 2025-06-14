"use client";

import Image from "next/image";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Image src="/error.svg" height={550} width={500} alt="Not found" />
      <p className="text-xl text-muted-foreground">Something went wrong. Please try again later.</p>
    </div>
  );
};

export default Error;
