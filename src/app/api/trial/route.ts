import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

export const runtime = "nodejs";

const trialSchema = z.object({
  name: z.string().trim().min(2).max(100),
  parentName: z.string().trim().max(100).optional(),
  email: z.email().max(254),
  whatsapp: z.string().trim().max(30).optional(),
  program: z.enum(["Quran Reading", "Tajweed", "Hifz", "Islamic Studies"]).optional(),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const parsed = trialSchema.safeParse({
      name: formData.get("name"),
      parentName: formData.get("parentName") || undefined,
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp") || undefined,
      program: formData.get("program") || undefined,
      website: formData.get("website") || undefined,
    });

    if (!parsed.success) {
      return NextResponse.redirect(new URL("/?trial=invalid#trial", request.url), 303);
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.redirect(new URL("/?trial=unavailable#trial", request.url), 303);
    }

    await db.trialRequest.create({
      data: {
        name: parsed.data.name,
        parentName: parsed.data.parentName || null,
        email: parsed.data.email,
        whatsapp: parsed.data.whatsapp || null,
        program: parsed.data.program || null,
      },
    });

    return NextResponse.redirect(new URL("/?trial=success#trial", request.url), 303);
  } catch {
    return NextResponse.redirect(new URL("/?trial=unavailable#trial", request.url), 303);
  }
}
