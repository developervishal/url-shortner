import { db } from "@/db";
import { urlsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    const [urlData] = await db
      .select()
      .from(urlsTable)
      .where(eq(urlsTable.shortUrl, id));
    if (!urlData) {
      return NextResponse.json(
        { success: false, message: "URL not Found" },
        { status: 404 }
      );
    }
   return NextResponse.json(
        { success: true, data: urlData},
        { status: 200 }
      );
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
