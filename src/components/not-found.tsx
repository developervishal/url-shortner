"use client"
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <Image src="/not-found.svg" height={250} width={400} alt="Not found" />
      <p className="text-muted-foreground text-xl">
        The URL you are searching for does not exist
      </p>
      <Button className="mt-4 h-12 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" onClick={()=>{router.push("/")}}>
        Create New
      </Button>
    </div>
  );
};

export default NotFound;
