import { NextResponse } from "next/server";
import {
  isAdminAuthenticated,
  readJsonFile,
  writeJsonFile,
  saveUpload,
} from "@/lib/cms";

type LegalCourt = "sc" | "fsc" | "hc" | "cc";

const LEGAL_COURTS: LegalCourt[] = ["sc", "fsc", "hc", "cc"];

export async function GET(req: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const section = searchParams.get("section");

  switch (section) {
    case "resources":
      return NextResponse.json({
        categories: await readJsonFile("resources/categories.json", []),
        pdfs: await readJsonFile("resources/pdfs.json", []),
      });
    case "legal": {
      const legal: Record<string, unknown> = {};
      for (const c of LEGAL_COURTS) {
        legal[c] = await readJsonFile(`legal/${c}.json`, []);
      }
      return NextResponse.json(legal);
    }
    case "femicide":
      return NextResponse.json({
        items: await readJsonFile("femicide/items.json", []),
      });
    case "know-your-numbers":
      return NextResponse.json({
        items: await readJsonFile("know-your-numbers/items.json", []),
      });
    case "impact":
      return NextResponse.json({
        items: await readJsonFile("impact/items.json", []),
      });
    case "podcasts":
      return NextResponse.json({
        items: await readJsonFile("podcasts/items.json", []),
      });
    case "news":
      return NextResponse.json({
        items: await readJsonFile("news/items.json", []),
      });
    default:
      return NextResponse.json({ error: "Unknown section" }, { status: 400 });
  }
}

export async function POST(req: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("multipart/form-data")) {
    const form = await req.formData();
    const section = String(form.get("section") || "");
    const action = String(form.get("action") || "upload");
    const file = form.get("file");

    if (action === "upload" && file instanceof File && file.size > 0) {
      let dir = "";
      if (section === "resources-cover") dir = "resources/covers";
      else if (section === "resources-pdf") dir = "resources/pdfs";
      else if (section.startsWith("legal-")) {
        const court = section.replace("legal-", "") as LegalCourt;
        if (!LEGAL_COURTS.includes(court)) {
          return NextResponse.json({ error: "Invalid court" }, { status: 400 });
        }
        dir = `legal/pdfs/${court}`;
      } else if (section === "femicide") dir = "femicide/pdfs";
      else if (section === "know-your-numbers") dir = "know-your-numbers/pdfs";
      else if (section === "impact") dir = "impact/photos";
      else {
        return NextResponse.json({ error: "Invalid upload section" }, { status: 400 });
      }

      const url = await saveUpload(dir, file);
      return NextResponse.json({ ok: true, url });
    }

    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  const body = await req.json().catch(() => ({}));
  const section = String(body.section || "");
  const data = body.data;

  switch (section) {
    case "resources-categories":
      await writeJsonFile("resources/categories.json", data);
      break;
    case "resources-pdfs":
      await writeJsonFile("resources/pdfs.json", data);
      break;
    case "legal-sc":
    case "legal-fsc":
    case "legal-hc":
    case "legal-cc": {
      const court = section.replace("legal-", "");
      await writeJsonFile(`legal/${court}.json`, data);
      break;
    }
    case "femicide":
      await writeJsonFile("femicide/items.json", data);
      break;
    case "know-your-numbers":
      await writeJsonFile("know-your-numbers/items.json", data);
      break;
    case "impact":
      await writeJsonFile("impact/items.json", data);
      break;
    case "podcasts":
      await writeJsonFile("podcasts/items.json", data);
      break;
    case "news":
      await writeJsonFile("news/items.json", data);
      break;
    default:
      return NextResponse.json({ error: "Unknown section" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
