import { db } from "./db";
import { defaultContent } from "./default-content";
export async function getSiteContent(){ if(!process.env.DATABASE_URL) return defaultContent; try { const rows=await db.siteContent.findMany(); return {...defaultContent,...Object.fromEntries(rows.map(r=>[r.key,r.value]))}; } catch { return defaultContent; } }
