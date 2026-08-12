import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms";

export async function GET() {
  const ok = await isAdminAuthenticated();
  return NextResponse.json({ authenticated: ok });
}
