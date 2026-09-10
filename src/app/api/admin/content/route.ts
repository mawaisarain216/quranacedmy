import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.record(z.string(), z.string());

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { ok: false, error: "Supabase DATABASE_URL is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const values = schema.parse(await request.json());
    await db.$transaction(
      Object.entries(values).map(([key, value]) =>
        db.siteContent.upsert({
          where: { key },
          create: { key, value },
          update: { value },
        }),
      ),
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Could not save content." },
      { status: 400 },
    );
  }
}
