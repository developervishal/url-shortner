import { db } from "@/db";
import { urlsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
  
    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { success: false, message: "Empty or invalid URL", data: null },
        { status: 400 }
      );
    }

    const shortUrl = nanoid(8);
    const [result] = await db
      .insert(urlsTable)
      .values({
        shortUrl,
        originalUrl: url,
      })
      .returning();

    return NextResponse.json({
      success: true,
      message: "URL shortened successfully",
      data: result,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong", data: null },
      { status: 500 }
    );
  }
}
