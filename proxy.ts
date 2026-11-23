import { NextResponse, type NextRequest } from "next/server";

const locales = ["vi", "en", "zh", "ja", "ko", "th"];
const fallback = "en";

function detect(header: string | null): string {
  if (!header) return fallback;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { base: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return ranked.find((r) => locales.includes(r.base))?.base ?? fallback;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;

  const saved = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = saved && locales.includes(saved) ? saved : detect(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
