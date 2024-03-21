import { scrapeGujaratSamachar } from "@/app/(root)/(functions)/GujaratSamachar.mjs";

export async function GET() {
  const res = await scrapeGujaratSamachar();
  return new Response(JSON.stringify(res), { status: 200 });
}
