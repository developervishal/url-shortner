import NotFound from "@/components/not-found";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { urlsTable } from "@/db/schema";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{
    urlId: string;
  }>;
}
const Page = async ({ params }: Props) => {
  const { urlId } = await params;
  const [data] = await db
    .select()
    .from(urlsTable)
    .where(eq(urlsTable.shortUrl, urlId));
  if (!data) {
    return <NotFound />;
  }
  if (data.originalUrl) {
    redirect(data.originalUrl);
  }
};

export default Page;
