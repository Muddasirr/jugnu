import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "crypto";
import fs from "fs/promises";
import path from "path";

export const SESSION_COOKIE = "jugnu_admin_session";

// Admin credentials come only from the environment. If any are missing,
// login is disabled rather than falling back to defaults in the source.
function adminConfig() {
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASS;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!user || !pass || !secret) return null;
  return { user, pass, secret };
}

const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");

export function makeSessionToken(): string {
  const cfg = adminConfig();
  if (!cfg) throw new Error("Admin login is not configured");
  return sha256(`${cfg.user}:${cfg.pass}:${cfg.secret}`);
}

export function verifyCredentials(username: string, password: string): boolean {
  const cfg = adminConfig();
  if (!cfg) return false;
  return (
    timingSafeEqual(Buffer.from(sha256(username)), Buffer.from(sha256(cfg.user))) &&
    timingSafeEqual(Buffer.from(sha256(password)), Buffer.from(sha256(cfg.pass)))
  );
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cfg = adminConfig();
  if (!cfg) return false;
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
