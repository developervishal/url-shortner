import NotFound from "@/components/not-found";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{
    urlId: string;
  }>;
}
const Page = async ({ params }: Props) => {
  const { urlId } = await params;
  const response = await fetch(process.env.BASE_URL+`/api/url-shortner/${urlId}`);
  const result = await response.json();
  if (!result.success) {
    return <NotFound />;
  }
  if (result?.data?.originalUrl) {
    redirect(result.data.originalUrl);
  }
};

export default Page;
