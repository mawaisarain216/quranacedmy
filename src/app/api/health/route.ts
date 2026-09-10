import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const startedAt = Date.now();

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { status: "degraded", database: "not_configured", timestamp: new Date().toISOString() },
      { status: 503 },
    );
  }

  try {
    await db.$queryRaw`SELECT 1`;
    return NextResponse.json({
      status: "ok",
      database: "ok",
      latencyMs: Date.now() - startedAt,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { status: "degraded", database: "unavailable", timestamp: new Date().toISOString() },
      { status: 503 },
    );
  }
}
