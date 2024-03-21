import { scrapeDivyaBhaskar } from "@/app/(root)/(functions)/DivyaBhaskar.mjs";

export async function GET() {
  const res = await scrapeDivyaBhaskar();
  return new Response(JSON.stringify(res), { status: 200 });
}
