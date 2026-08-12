import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "crypto";
import fs from "fs/promises";
import path from "path";

export const ADMIN_USER = process.env.ADMIN_USER || "***REMOVED***";
export const ADMIN_PASS = process.env.ADMIN_PASS || "***REMOVED***";
export const SESSION_COOKIE = "jugnu_admin_session";

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || "***REMOVED***";

export function makeSessionToken(): string {
  return createHash("sha256")
    .update(`${ADMIN_USER}:${ADMIN_PASS}:${SESSION_SECRET}`)
    .digest("hex");
}

export function verifyCredentials(username: string, password: string): boolean {
  const uHash = createHash("sha256").update(username).digest("hex");
  const pHash = createHash("sha256").update(password).digest("hex");
  const expectedU = createHash("sha256").update(ADMIN_USER).digest("hex");
  const expectedP = createHash("sha256").update(ADMIN_PASS).digest("hex");
  try {
    return (
      timingSafeEqual(Buffer.from(uHash), Buffer.from(expectedU)) &&
      timingSafeEqual(Buffer.from(pHash), Buffer.from(expectedP))
    );
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const expected = makeSessionToken();
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

export const CMS_ROOT = path.join(process.cwd(), "public", "cms");

export async function readJsonFile<T>(relativePath: string, fallback: T): Promise<T> {
  const full = path.join(CMS_ROOT, relativePath);
  try {
    const raw = await fs.readFile(full, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function writeJsonFile(relativePath: string, data: unknown): Promise<void> {
  const full = path.join(CMS_ROOT, relativePath);
  await fs.mkdir(path.dirname(full), { recursive: true });
  await fs.writeFile(full, JSON.stringify(data, null, 2), "utf8");
}

export async function saveUpload(
  relativeDir: string,
  file: File
): Promise<string> {
  const dir = path.join(CMS_ROOT, relativeDir);
  await fs.mkdir(dir, { recursive: true });
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const stamp = Date.now();
  const filename = `${stamp}-${safeName}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(dir, filename), buffer);
  return `/cms/${relativeDir}/${filename}`.replace(/\\/g, "/");
}

export type CmsSection =
  | "resources"
  | "legal"
  | "femicide"
  | "know-your-numbers"
  | "impact"
  | "podcasts"
  | "news";
