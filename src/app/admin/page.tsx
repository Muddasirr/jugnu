"use client";

import { useEffect, useState, FormEvent } from "react";

type Tab =
  | "resources"
  | "legal"
  | "femicide"
  | "know-your-numbers"
  | "impact"
  | "podcasts"
  | "news";

const TABS: { id: Tab; label: string }[] = [
  { id: "resources", label: "Resources" },
  { id: "legal", label: "Legal Judgements" },
  { id: "femicide", label: "Femicide Watch" },
  { id: "know-your-numbers", label: "Know Your Numbers" },
  { id: "impact", label: "Our Impact" },
  { id: "podcasts", label: "Podcast" },
  { id: "news", label: "In the News" },
];

const LEGAL_LABELS: Record<string, string> = {
  sc: "Supreme Court (SC)",
  fsc: "Federal Shariat Court (FSC)",
  hc: "High Court (HC)",
  cc: "Constitutional Court (CC)",
};

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

const fieldInput =
  "w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 bg-white";
const fieldLabel = "block text-xs font-bold uppercase text-gray-600";
const fieldTextarea =
  "mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 bg-white resize-y min-h-[72px]";

export default function AdminPage() {
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [tab, setTab] = useState<Tab>("resources");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  // Resources
  const [categories, setCategories] = useState<any[]>([]);
  const [resourcePdfs, setResourcePdfs] = useState<any[]>([]);

  // Legal
  const [legal, setLegal] = useState<Record<string, any[]>>({
    sc: [],
    fsc: [],
    hc: [],
    cc: [],
  });
  const [legalCourt, setLegalCourt] = useState("sc");

  // Lists
  const [femicide, setFemicide] = useState<any[]>([]);
  const [kyn, setKyn] = useState<any[]>([]);
  const [impact, setImpact] = useState<any[]>([]);
  const [podcasts, setPodcasts] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin/me")
      .then((r) => r.json())
      .then((d) => {
        setAuthed(!!d.authenticated);
        setChecking(false);
      })
      .catch(() => setChecking(false));
  }, []);

  useEffect(() => {
    if (!authed) return;
    loadSection(tab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed, tab]);

  async function loadSection(section: Tab) {
    setBusy(true);
    setMessage("");
    try {
      const res = await fetch(`/api/admin/content?section=${section}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load");
      if (section === "resources") {
        setCategories(data.categories || []);
        setResourcePdfs(data.pdfs || []);
      } else if (section === "legal") {
        setLegal({
          sc: data.sc || [],
          fsc: data.fsc || [],
          hc: data.hc || [],
          cc: data.cc || [],
        });
      } else if (section === "femicide") setFemicide(data.items || []);
      else if (section === "know-your-numbers") setKyn(data.items || []);
      else if (section === "impact") setImpact(data.items || []);
      else if (section === "podcasts") setPodcasts(data.items || []);
      else if (section === "news") setNews(data.items || []);
    } catch (e: any) {
      setMessage(e.message || "Load failed");
    } finally {
      setBusy(false);
    }
  }

  async function login(e: FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      setAuthed(true);
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
  }

  async function uploadFile(section: string, file: File) {
    const form = new FormData();
    form.append("section", section);
    form.append("action", "upload");
    form.append("file", file);
    const res = await fetch("/api/admin/content", { method: "POST", body: form });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Upload failed");
    return data.url as string;
  }

  async function saveJson(section: string, data: unknown) {
    const res = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, data }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Save failed");
    setMessage("Saved successfully");
  }

  if (checking) {
    return (
      <main className="admin-cms min-h-screen bg-[#AC1514] flex items-center justify-center">
        <p className="text-white font-semibold tracking-wide">Loading…</p>
      </main>
    );
  }

  if (!authed) {
    return (
      <main className="admin-cms min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left — Jugnu brand panel */}
        <section className="relative bg-[#AC1514] text-white flex flex-col justify-between px-8 md:px-12 py-10 md:py-14 overflow-hidden min-h-[40vh] md:min-h-screen">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: 'url("/heroes/banner-1.png")' }}
          />
          <div className="absolute inset-0 bg-[#AC1514]/75" />

          <div className="relative z-10">
            <img
              src="/logojugnu.svg"
              alt="Jugnu"
              className="h-12 md:h-14 w-auto brightness-0 invert"
            />
          </div>

          <div className="relative z-10 max-w-md space-y-5 my-10 md:my-0">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80 font-semibold">
              The Jugnu Project
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Pakistan&apos;s Digital Domestic Violence Resource Center
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              Manage resources, legal judgements, impact stories, podcasts and news —
              keeping survivor-centered content updated for communities across Pakistan.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-white/85">
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                Resource library &amp; PDF uploads
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                Court judgements (SC, FSC, HC, CC)
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                Femicide Watch, Impact gallery &amp; more
              </li>
            </ul>
          </div>

          <p className="relative z-10 text-xs text-white/70">
            Admin control panel · Authorized access only
          </p>
        </section>

        {/* Right — Login */}
        <section className="bg-white flex items-center justify-center px-6 md:px-12 py-12 md:py-16">
          <form onSubmit={login} className="w-full max-w-md space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-black mb-2">Admin Login</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sign in to manage Jugnu website content.
              </p>
            </div>

            {error && (
              <p className="text-sm text-[#AC1514] bg-[#AC1514]/10 border border-[#AC1514]/30 px-3 py-2 font-medium">
                {error}
              </p>
            )}

            <label className="block text-sm font-bold text-black uppercase tracking-wide">
              Username
              <input
                className="mt-2 w-full border-2 border-gray-300 px-4 py-3 text-base font-normal normal-case tracking-normal focus:outline-none focus:border-[#AC1514]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </label>

            <label className="block text-sm font-bold text-black uppercase tracking-wide">
              Password
              <input
                type="password"
                className="mt-2 w-full border-2 border-gray-300 px-4 py-3 text-base font-normal normal-case tracking-normal focus:outline-none focus:border-[#AC1514]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </label>

            <button
              type="submit"
              disabled={busy}
              className="w-full bg-[#AC1514] text-white font-bold py-3.5 uppercase tracking-wider hover:bg-[#8B0E0E] disabled:opacity-60 transition"
            >
              {busy ? "Signing in…" : "Sign in"}
            </button>

            <p className="text-xs text-gray-500 text-center">
              Protected area for The Jugnu Project team
            </p>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="admin-cms min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-[#AC1514] text-white px-4 md:px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold">Jugnu CMS Control Panel</h1>
          <p className="text-sm text-white/80">Uploads go into /public/cms</p>
        </div>
        <button
          onClick={logout}
          className="bg-black text-white px-4 py-2 text-sm font-bold uppercase hover:bg-gray-900"
        >
          Log out
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 text-sm font-bold border rounded-sm transition ${
                tab === t.id
                  ? "bg-[#AC1514] text-white border-[#AC1514]"
                  : "bg-white text-gray-900 border-gray-300 hover:border-[#AC1514]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {message && (
          <p className="mb-4 text-sm bg-green-50 border border-green-200 text-green-800 px-3 py-2">
            {message}
          </p>
        )}
        {busy && <p className="mb-4 text-sm text-gray-500">Working…</p>}

        {tab === "resources" && (
          <ResourcesTab
            categories={categories}
            setCategories={setCategories}
            resourcePdfs={resourcePdfs}
            setResourcePdfs={setResourcePdfs}
            uploadFile={uploadFile}
            saveJson={saveJson}
            setMessage={setMessage}
          />
        )}

        {tab === "legal" && (
          <LegalTab
            legal={legal}
            setLegal={setLegal}
            legalCourt={legalCourt}
            setLegalCourt={setLegalCourt}
            uploadFile={uploadFile}
            saveJson={saveJson}
            setMessage={setMessage}
          />
        )}

        {tab === "femicide" && (
          <PdfListPanel
            title="Femicide Watch PDFs"
            items={femicide}
            setItems={setFemicide}
            uploadSection="femicide"
            onSave={() => saveJson("femicide", femicide)}
            onUpload={uploadFile}
            setMessage={setMessage}
          />
        )}

        {tab === "know-your-numbers" && (
          <PdfListPanel
            title="Know Your Numbers PDFs"
            items={kyn}
            setItems={setKyn}
            uploadSection="know-your-numbers"
            onSave={() => saveJson("know-your-numbers", kyn)}
            onUpload={uploadFile}
            setMessage={setMessage}
          />
        )}

        {tab === "impact" && (
          <ImpactTab
            impact={impact}
            setImpact={setImpact}
            uploadFile={uploadFile}
            saveJson={saveJson}
            setMessage={setMessage}
          />
        )}

        {tab === "podcasts" && (
          <PodcastsTab
            podcasts={podcasts}
            setPodcasts={setPodcasts}
            saveJson={saveJson}
            setMessage={setMessage}
          />
        )}

        {tab === "news" && (
          <NewsTab news={news} setNews={setNews} saveJson={saveJson} setMessage={setMessage} />
        )}
      </div>
    </main>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-5 space-y-6">
      <h2 className="text-lg font-extrabold text-black border-b pb-2">{title}</h2>
      {children}
    </div>
  );
}

function UploadBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#AC1514]/5 border-2 border-dashed border-[#AC1514]/30 rounded-md p-5 space-y-4">
      <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#AC1514]">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ListHeader({ count }: { count: number }) {
  return (
    <h3 className="text-sm font-extrabold uppercase tracking-wide text-gray-700 border-b border-gray-200 pb-2">
      Existing items ({count})
    </h3>
  );
}

function SaveButton({ onClick, label = "Save changes" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#AC1514] text-white px-5 py-2.5 text-sm font-bold uppercase hover:bg-[#8B0E0E]"
    >
      {label}
    </button>
  );
}

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm text-red-700 font-bold hover:underline"
    >
      Remove
    </button>
  );
}

function FileUploadButton({
  label,
  accept,
  onFile,
}: {
  label: string;
  accept: string;
  onFile: (file: File) => void;
}) {
  return (
    <label className="inline-flex text-sm font-bold bg-gray-900 text-white px-4 py-2.5 rounded cursor-pointer hover:bg-black">
      {label}
      <input
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onFile(f);
          e.target.value = "";
        }}
      />
    </label>
  );
}

function PdfListPanel({
  title,
  items,
  setItems,
  uploadSection,
  onSave,
  onUpload,
  setMessage,
}: {
  title: string;
  items: any[];
  setItems: (v: any[]) => void;
  uploadSection: string;
  onSave: () => void;
  onUpload: (section: string, file: File) => Promise<string>;
  setMessage: (m: string) => void;
}) {
  const [draft, setDraft] = useState({ title: "", description: "", file: "" });

  async function addItem() {
    if (!draft.file) {
      setMessage("Please upload a PDF first");
      return;
    }
    setItems([
      ...items,
      {
        id: uid(),
        title: draft.title || "Untitled",
        description: draft.description,
        file: draft.file,
      },
    ]);
    setDraft({ title: "", description: "", file: "" });
    setMessage("Added to list — click Save changes to persist");
  }

  return (
    <Panel title={title}>
      <UploadBox title="Upload new PDF">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className={fieldLabel}>
            Title
            <input
              className={`mt-1 ${fieldInput}`}
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              placeholder="Document title"
            />
          </label>
          <div className="flex flex-col justify-end gap-2">
            <span className={fieldLabel}>PDF file</span>
            <div className="flex flex-wrap items-center gap-3">
              <FileUploadButton
                label={draft.file ? "Change PDF" : "Choose PDF"}
                accept="application/pdf"
                onFile={async (f) => {
                  try {
                    const url = await onUpload(uploadSection, f);
                    setDraft((d) => ({
                      ...d,
                      file: url,
                      title: d.title || f.name.replace(/\.pdf$/i, ""),
                    }));
                    setMessage("PDF uploaded — fill details and Add to list");
                  } catch (err: any) {
                    setMessage(err.message);
                  }
                }}
              />
              {draft.file && (
                <span className="text-xs text-green-700 font-medium truncate max-w-[200px]">
                  Ready to add
                </span>
              )}
            </div>
          </div>
        </div>
        <label className={fieldLabel}>
          Description
          <textarea
            className={fieldTextarea}
            rows={2}
            value={draft.description}
            onChange={(e) => setDraft({ ...draft, description: e.target.value })}
            placeholder="Short description (optional)"
          />
        </label>
        <button
          type="button"
          onClick={addItem}
          className="bg-black text-white px-5 py-2.5 text-sm font-bold uppercase hover:bg-gray-900"
        >
          Add to list
        </button>
      </UploadBox>

      <div className="space-y-4">
        <ListHeader count={items.length} />
        {items.length === 0 && (
          <p className="text-sm text-gray-500">No items yet. Upload one above.</p>
        )}
        {items.map((item, i) => (
          <div
            key={item.id || i}
            className="border border-gray-200 rounded-md p-4 bg-gray-50 space-y-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className={fieldLabel}>
                Title
                <input
                  className={`mt-1 ${fieldInput}`}
                  value={item.title || ""}
                  onChange={(e) => {
                    const next = [...items];
                    next[i] = { ...item, title: e.target.value };
                    setItems(next);
                  }}
                />
              </label>
              <label className={fieldLabel}>
                PDF
                <input className={`mt-1 ${fieldInput} bg-gray-100`} value={item.file || ""} readOnly />
              </label>
            </div>
            <label className={fieldLabel}>
              Description
              <textarea
                className={fieldTextarea}
                rows={2}
                value={item.description || ""}
                onChange={(e) => {
                  const next = [...items];
                  next[i] = { ...item, description: e.target.value };
                  setItems(next);
                }}
              />
            </label>
            <RemoveButton onClick={() => setItems(items.filter((_, idx) => idx !== i))} />
          </div>
        ))}
        {items.length > 0 && <SaveButton onClick={onSave} />}
      </div>
    </Panel>
  );
}

function ResourcesTab({
  categories,
  setCategories,
  resourcePdfs,
  setResourcePdfs,
  uploadFile,
  saveJson,
  setMessage,
}: {
  categories: any[];
  setCategories: (v: any[]) => void;
  resourcePdfs: any[];
  setResourcePdfs: (v: any[]) => void;
  uploadFile: (section: string, file: File) => Promise<string>;
  saveJson: (section: string, data: unknown) => Promise<void>;
  setMessage: (m: string) => void;
}) {
  const [catDraft, setCatDraft] = useState({ title: "", description: "", cover: "" });
  const [pdfDraft, setPdfDraft] = useState({ title: "", file: "" });

  function addCategory() {
    if (!catDraft.title.trim()) {
      setMessage("Please enter a category title");
      return;
    }
    setCategories([
      ...categories,
      {
        id: categories.length + 1,
        title: catDraft.title,
        description: catDraft.description,
        cover: catDraft.cover,
        link: "/resources/documents",
      },
    ]);
    setCatDraft({ title: "", description: "", cover: "" });
    setMessage("Category added — click Save to persist");
  }

  function addPdf() {
    if (!pdfDraft.file) {
      setMessage("Please upload a PDF first");
      return;
    }
    setResourcePdfs([
      ...resourcePdfs,
      { id: uid(), title: pdfDraft.title || "Untitled", file: pdfDraft.file },
    ]);
    setPdfDraft({ title: "", file: "" });
    setMessage("PDF added — click Save to persist");
  }

  return (
    <section className="space-y-8">
      <Panel title="Category Cards">
        <UploadBox title="Upload new category">
          <label className={fieldLabel}>
            Title
            <input
              className={`mt-1 ${fieldInput} font-semibold`}
              value={catDraft.title}
              onChange={(e) => setCatDraft({ ...catDraft, title: e.target.value })}
              placeholder="Category title"
            />
          </label>
          <label className={fieldLabel}>
            Description
            <textarea
              className={fieldTextarea}
              rows={2}
              value={catDraft.description}
              onChange={(e) => setCatDraft({ ...catDraft, description: e.target.value })}
              placeholder="Short description"
            />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <FileUploadButton
              label={catDraft.cover ? "Change cover" : "Upload cover"}
              accept="image/*"
              onFile={async (f) => {
                try {
                  const url = await uploadFile("resources-cover", f);
                  setCatDraft((d) => ({ ...d, cover: url }));
                  setMessage("Cover uploaded — add title and Add to list");
                } catch (err: any) {
                  setMessage(err.message);
                }
              }}
            />
            {catDraft.cover && (
              <span className="text-xs text-green-700 font-medium truncate max-w-[240px]">
                Cover ready
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={addCategory}
            className="bg-black text-white px-5 py-2.5 text-sm font-bold uppercase hover:bg-gray-900"
          >
            Add to list
          </button>
        </UploadBox>

        <div className="space-y-4">
          <ListHeader count={categories.length} />
          {categories.length === 0 && (
            <p className="text-sm text-gray-500">No categories yet. Upload one above.</p>
          )}
          {categories.map((cat, i) => (
            <div key={cat.id || i} className="border border-gray-200 rounded-md p-4 bg-gray-50 space-y-3">
              <label className={fieldLabel}>
                Title
                <input
                  className={`mt-1 ${fieldInput}`}
                  value={cat.title || ""}
                  onChange={(e) => {
                    const next = [...categories];
                    next[i] = { ...cat, title: e.target.value };
                    setCategories(next);
                  }}
                />
              </label>
              <label className={fieldLabel}>
                Description
                <textarea
                  className={fieldTextarea}
                  rows={2}
                  value={cat.description || ""}
                  onChange={(e) => {
                    const next = [...categories];
                    next[i] = { ...cat, description: e.target.value };
                    setCategories(next);
                  }}
                />
              </label>
              <label className={fieldLabel}>
                Cover URL
                <input
                  className={`mt-1 ${fieldInput} bg-gray-100`}
                  value={cat.cover || ""}
                  readOnly
                />
              </label>
              <RemoveButton onClick={() => setCategories(categories.filter((_, idx) => idx !== i))} />
            </div>
          ))}
          {categories.length > 0 && (
            <SaveButton onClick={() => saveJson("resources-categories", categories)} label="Save categories" />
          )}
        </div>
      </Panel>

      <Panel title="Resource PDFs">
        <UploadBox title="Upload new PDF">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className={fieldLabel}>
              Title
              <input
                className={`mt-1 ${fieldInput}`}
                value={pdfDraft.title}
                onChange={(e) => setPdfDraft({ ...pdfDraft, title: e.target.value })}
                placeholder="PDF title"
              />
            </label>
            <div className="flex flex-col justify-end gap-2">
              <span className={fieldLabel}>PDF file</span>
              <FileUploadButton
                label={pdfDraft.file ? "Change PDF" : "Choose PDF"}
                accept="application/pdf"
                onFile={async (f) => {
                  try {
                    const url = await uploadFile("resources-pdf", f);
                    setPdfDraft((d) => ({
                      ...d,
                      file: url,
                      title: d.title || f.name.replace(/\.pdf$/i, ""),
                    }));
                    setMessage("PDF uploaded — Add to list");
                  } catch (err: any) {
                    setMessage(err.message);
                  }
                }}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={addPdf}
            className="bg-black text-white px-5 py-2.5 text-sm font-bold uppercase hover:bg-gray-900"
          >
            Add to list
          </button>
        </UploadBox>

        <div className="space-y-4">
          <ListHeader count={resourcePdfs.length} />
          {resourcePdfs.length === 0 && (
            <p className="text-sm text-gray-500">No PDFs yet. Upload one above.</p>
          )}
          {resourcePdfs.map((pdf, i) => (
            <div key={pdf.id || i} className="border border-gray-200 rounded-md p-4 bg-gray-50 space-y-3">
              <label className={fieldLabel}>
                Title
                <input
                  className={`mt-1 ${fieldInput}`}
                  value={pdf.title || ""}
                  onChange={(e) => {
                    const next = [...resourcePdfs];
                    next[i] = { ...pdf, title: e.target.value };
                    setResourcePdfs(next);
                  }}
                />
              </label>
              <label className={fieldLabel}>
                PDF
                <input className={`mt-1 ${fieldInput} bg-gray-100`} value={pdf.file || ""} readOnly />
              </label>
              <RemoveButton onClick={() => setResourcePdfs(resourcePdfs.filter((_, idx) => idx !== i))} />
            </div>
          ))}
          {resourcePdfs.length > 0 && (
            <SaveButton onClick={() => saveJson("resources-pdfs", resourcePdfs)} label="Save PDFs" />
          )}
        </div>
      </Panel>
    </section>
  );
}

function LegalTab({
  legal,
  setLegal,
  legalCourt,
  setLegalCourt,
  uploadFile,
  saveJson,
  setMessage,
}: {
  legal: Record<string, any[]>;
  setLegal: (v: Record<string, any[]>) => void;
  legalCourt: string;
  setLegalCourt: (v: string) => void;
  uploadFile: (section: string, file: File) => Promise<string>;
  saveJson: (section: string, data: unknown) => Promise<void>;
  setMessage: (m: string) => void;
}) {
  const items = legal[legalCourt] || [];
  const [draft, setDraft] = useState({ title: "", description: "", file: "" });

  function addItem() {
    if (!draft.file) {
      setMessage("Please upload a PDF first");
      return;
    }
    const next = { ...legal };
    next[legalCourt] = [
      ...items,
      {
        id: uid(),
        title: draft.title || "Untitled",
        description: draft.description,
        file: draft.file,
      },
    ];
    setLegal(next);
    setDraft({ title: "", description: "", file: "" });
    setMessage("Judgement added — click Save to persist");
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.keys(LEGAL_LABELS).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setLegalCourt(c);
              setDraft({ title: "", description: "", file: "" });
            }}
            className={`px-3 py-2 text-sm font-bold border ${
              legalCourt === c ? "bg-black text-white" : "bg-white border-gray-300"
            }`}
          >
            {LEGAL_LABELS[c]}
          </button>
        ))}
      </div>

      <Panel title={LEGAL_LABELS[legalCourt]}>
        <UploadBox title="Upload new judgement">
          <label className={fieldLabel}>
            Title
            <input
              className={`mt-1 ${fieldInput} font-semibold`}
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              placeholder="Judgement title"
            />
          </label>
          <label className={fieldLabel}>
            Description
            <textarea
              className={fieldTextarea}
              rows={2}
              value={draft.description}
              onChange={(e) => setDraft({ ...draft, description: e.target.value })}
              placeholder="Short description"
            />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <FileUploadButton
              label={draft.file ? "Change PDF" : "Choose PDF"}
              accept="application/pdf"
              onFile={async (f) => {
                try {
                  const url = await uploadFile(`legal-${legalCourt}`, f);
                  setDraft((d) => ({
                    ...d,
                    file: url,
                    title: d.title || f.name.replace(/\.pdf$/i, ""),
                  }));
                  setMessage("PDF uploaded — Add to list");
                } catch (err: any) {
                  setMessage(err.message);
                }
              }}
            />
            {draft.file && (
              <span className="text-xs text-green-700 font-medium">PDF ready</span>
            )}
          </div>
          <button
            type="button"
            onClick={addItem}
            className="bg-black text-white px-5 py-2.5 text-sm font-bold uppercase hover:bg-gray-900"
          >
            Add to list
          </button>
        </UploadBox>

        <div className="space-y-4">
          <ListHeader count={items.length} />
          {items.length === 0 && (
            <p className="text-sm text-gray-500">No judgements yet. Upload one above.</p>
          )}
          {items.map((item, i) => (
            <div key={item.id || i} className="border border-gray-200 rounded-md p-4 bg-gray-50 space-y-3">
              <label className={fieldLabel}>
                Title
                <input
                  className={`mt-1 ${fieldInput} font-semibold`}
                  value={item.title || ""}
                  onChange={(e) => {
                    const next = { ...legal };
                    const list = [...(next[legalCourt] || [])];
                    list[i] = { ...item, title: e.target.value };
                    next[legalCourt] = list;
                    setLegal(next);
                  }}
                />
              </label>
              <label className={fieldLabel}>
                Description
                <textarea
                  className={fieldTextarea}
                  rows={2}
                  value={item.description || ""}
                  onChange={(e) => {
                    const next = { ...legal };
                    const list = [...(next[legalCourt] || [])];
                    list[i] = { ...item, description: e.target.value };
                    next[legalCourt] = list;
                    setLegal(next);
                  }}
                />
              </label>
              <label className={fieldLabel}>
                PDF
                <input className={`mt-1 ${fieldInput} bg-gray-100`} value={item.file || ""} readOnly />
              </label>
              <RemoveButton
                onClick={() => {
                  const next = { ...legal };
                  next[legalCourt] = (next[legalCourt] || []).filter((_, idx) => idx !== i);
                  setLegal(next);
                }}
              />
            </div>
          ))}
          {items.length > 0 && (
            <SaveButton
              onClick={() => saveJson(`legal-${legalCourt}`, legal[legalCourt] || [])}
              label={`Save ${LEGAL_LABELS[legalCourt]}`}
            />
          )}
        </div>
      </Panel>
    </section>
  );
}

function ImpactTab({
  impact,
  setImpact,
  uploadFile,
  saveJson,
  setMessage,
}: {
  impact: any[];
  setImpact: (v: any[]) => void;
  uploadFile: (section: string, file: File) => Promise<string>;
  saveJson: (section: string, data: unknown) => Promise<void>;
  setMessage: (m: string) => void;
}) {
  const [draft, setDraft] = useState({ title: "", content: "", image: "" });

  function addItem() {
    if (!draft.image) {
      setMessage("Please upload a photo first");
      return;
    }
    setImpact([
      ...impact,
      { id: uid(), title: draft.title, content: draft.content, image: draft.image },
    ]);
    setDraft({ title: "", content: "", image: "" });
    setMessage("Gallery item added — click Save to persist");
  }

  return (
    <section>
      <Panel title="Our Impact Gallery">
        <UploadBox title="Upload new gallery item">
          <label className={fieldLabel}>
            Caption / title
            <input
              className={`mt-1 ${fieldInput} font-semibold`}
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              placeholder="Caption or title"
            />
          </label>
          <label className={fieldLabel}>
            Written content
            <textarea
              className={fieldTextarea}
              rows={2}
              value={draft.content}
              onChange={(e) => setDraft({ ...draft, content: e.target.value })}
              placeholder="Description or story"
            />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <FileUploadButton
              label={draft.image ? "Change photo" : "Upload photo"}
              accept="image/*"
              onFile={async (f) => {
                try {
                  const url = await uploadFile("impact", f);
                  setDraft((d) => ({ ...d, image: url }));
                  setMessage("Photo uploaded — Add to list");
                } catch (err: any) {
                  setMessage(err.message);
                }
              }}
            />
            {draft.image && (
              <span className="text-xs text-green-700 font-medium">Photo ready</span>
            )}
          </div>
          <button
            type="button"
            onClick={addItem}
            className="bg-black text-white px-5 py-2.5 text-sm font-bold uppercase hover:bg-gray-900"
          >
            Add to list
          </button>
        </UploadBox>

        <div className="space-y-4">
          <ListHeader count={impact.length} />
          {impact.length === 0 && (
            <p className="text-sm text-gray-500">No gallery items yet. Upload one above.</p>
          )}
          {impact.map((item, i) => (
            <div key={item.id || i} className="border border-gray-200 rounded-md p-4 bg-gray-50 space-y-3">
              <label className={fieldLabel}>
                Caption / title
                <input
                  className={`mt-1 ${fieldInput} font-semibold`}
                  value={item.title || ""}
                  onChange={(e) => {
                    const next = [...impact];
                    next[i] = { ...item, title: e.target.value };
                    setImpact(next);
                  }}
                />
              </label>
              <label className={fieldLabel}>
                Written content
                <textarea
                  className={fieldTextarea}
                  rows={2}
                  value={item.content || ""}
                  onChange={(e) => {
                    const next = [...impact];
                    next[i] = { ...item, content: e.target.value };
                    setImpact(next);
                  }}
                />
              </label>
              <label className={fieldLabel}>
                Image
                <input className={`mt-1 ${fieldInput} bg-gray-100`} value={item.image || ""} readOnly />
              </label>
              <RemoveButton onClick={() => setImpact(impact.filter((_, idx) => idx !== i))} />
            </div>
          ))}
          {impact.length > 0 && (
            <SaveButton onClick={() => saveJson("impact", impact)} label="Save gallery" />
          )}
        </div>
      </Panel>
    </section>
  );
}

function PodcastsTab({
  podcasts,
  setPodcasts,
  saveJson,
  setMessage,
}: {
  podcasts: any[];
  setPodcasts: (v: any[]) => void;
  saveJson: (section: string, data: unknown) => Promise<void>;
  setMessage: (m: string) => void;
}) {
  const [draft, setDraft] = useState({ title: "", url: "" });

  function addItem() {
    if (!draft.url.trim()) {
      setMessage("Please enter a YouTube or link URL");
      return;
    }
    setPodcasts([
      ...podcasts,
      { id: uid(), title: draft.title || "Untitled episode", url: draft.url },
    ]);
    setDraft({ title: "", url: "" });
    setMessage("Episode added — click Save to persist");
  }

  return (
    <section>
      <Panel title="Podcast episodes">
        <UploadBox title="Add new episode">
          <label className={fieldLabel}>
            Episode title
            <input
              className={`mt-1 ${fieldInput} font-semibold`}
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              placeholder="Episode title"
            />
          </label>
          <label className={fieldLabel}>
            YouTube / link URL
            <input
              className={`mt-1 ${fieldInput}`}
              value={draft.url}
              onChange={(e) => setDraft({ ...draft, url: e.target.value })}
              placeholder="https://youtube.com/..."
            />
          </label>
          <button
            type="button"
            onClick={addItem}
            className="bg-black text-white px-5 py-2.5 text-sm font-bold uppercase hover:bg-gray-900"
          >
            Add to list
          </button>
        </UploadBox>

        <div className="space-y-4">
          <ListHeader count={podcasts.length} />
          {podcasts.length === 0 && (
            <p className="text-sm text-gray-500">No episodes yet. Add one above.</p>
          )}
          {podcasts.map((item, i) => (
            <div key={item.id || i} className="border border-gray-200 rounded-md p-4 bg-gray-50 space-y-3">
              <label className={fieldLabel}>
                Episode title
                <input
                  className={`mt-1 ${fieldInput} font-semibold`}
                  value={item.title || ""}
                  onChange={(e) => {
                    const next = [...podcasts];
                    next[i] = { ...item, title: e.target.value };
                    setPodcasts(next);
                  }}
                />
              </label>
              <label className={fieldLabel}>
                YouTube / link URL
                <input
                  className={`mt-1 ${fieldInput}`}
                  value={item.url || ""}
                  onChange={(e) => {
                    const next = [...podcasts];
                    next[i] = { ...item, url: e.target.value };
                    setPodcasts(next);
                  }}
                />
              </label>
              <RemoveButton onClick={() => setPodcasts(podcasts.filter((_, idx) => idx !== i))} />
            </div>
          ))}
          {podcasts.length > 0 && (
            <SaveButton onClick={() => saveJson("podcasts", podcasts)} label="Save podcasts" />
          )}
        </div>
      </Panel>
    </section>
  );
}

function NewsTab({
  news,
  setNews,
  saveJson,
  setMessage,
}: {
  news: any[];
  setNews: (v: any[]) => void;
  saveJson: (section: string, data: unknown) => Promise<void>;
  setMessage: (m: string) => void;
}) {
  const [draft, setDraft] = useState({ title: "", url: "", source: "", dateLabel: "" });

  function addItem() {
    if (!draft.url.trim()) {
      setMessage("Please enter an article or video URL");
      return;
    }
    setNews([
      ...news,
      {
        id: uid(),
        title: draft.title || "Untitled",
        url: draft.url,
        source: draft.source,
        dateLabel: draft.dateLabel,
        date: new Date().toISOString().slice(0, 10),
      },
    ]);
    setDraft({ title: "", url: "", source: "", dateLabel: "" });
    setMessage("News item added — click Save to persist");
  }

  return (
    <section>
      <Panel title="In the News">
        <UploadBox title="Add new news item">
          <label className={fieldLabel}>
            Headline
            <input
              className={`mt-1 ${fieldInput} font-semibold`}
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              placeholder="Headline"
            />
          </label>
          <label className={fieldLabel}>
            Article or video URL
            <input
              className={`mt-1 ${fieldInput}`}
              value={draft.url}
              onChange={(e) => setDraft({ ...draft, url: e.target.value })}
              placeholder="https://..."
            />
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className={fieldLabel}>
              Source
              <input
                className={`mt-1 ${fieldInput}`}
                value={draft.source}
                onChange={(e) => setDraft({ ...draft, source: e.target.value })}
                placeholder="e.g. Dawn"
              />
            </label>
            <label className={fieldLabel}>
              Date label
              <input
                className={`mt-1 ${fieldInput}`}
                value={draft.dateLabel}
                onChange={(e) => setDraft({ ...draft, dateLabel: e.target.value })}
                placeholder="e.g. March 2025"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={addItem}
            className="bg-black text-white px-5 py-2.5 text-sm font-bold uppercase hover:bg-gray-900"
          >
            Add to list
          </button>
        </UploadBox>

        <div className="space-y-4">
          <ListHeader count={news.length} />
          {news.length === 0 && (
            <p className="text-sm text-gray-500">No news items yet. Add one above.</p>
          )}
          {news.map((item, i) => (
            <div key={item.id || i} className="border border-gray-200 rounded-md p-4 bg-gray-50 space-y-3">
              <label className={fieldLabel}>
                Headline
                <input
                  className={`mt-1 ${fieldInput} font-semibold`}
                  value={item.title || ""}
                  onChange={(e) => {
                    const next = [...news];
                    next[i] = { ...item, title: e.target.value };
                    setNews(next);
                  }}
                />
              </label>
              <label className={fieldLabel}>
                URL
                <input
                  className={`mt-1 ${fieldInput}`}
                  value={item.url || ""}
                  onChange={(e) => {
                    const next = [...news];
                    next[i] = { ...item, url: e.target.value };
                    setNews(next);
                  }}
                />
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className={fieldLabel}>
                  Source
                  <input
                    className={`mt-1 ${fieldInput}`}
                    value={item.source || ""}
                    onChange={(e) => {
                      const next = [...news];
                      next[i] = { ...item, source: e.target.value };
                      setNews(next);
                    }}
                  />
                </label>
                <label className={fieldLabel}>
                  Date label
                  <input
                    className={`mt-1 ${fieldInput}`}
                    value={item.dateLabel || ""}
                    onChange={(e) => {
                      const next = [...news];
                      next[i] = { ...item, dateLabel: e.target.value };
                      setNews(next);
                    }}
                  />
                </label>
              </div>
              <RemoveButton onClick={() => setNews(news.filter((_, idx) => idx !== i))} />
            </div>
          ))}
          {news.length > 0 && (
            <SaveButton onClick={() => saveJson("news", news)} label="Save news" />
          )}
        </div>
      </Panel>
    </section>
  );
}
