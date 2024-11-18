"use client";

interface supabaseLoaderParams {
  src: string;
  width: number | `${number}`;
  quality?: number;
}

export default function supabaseLoader({
  src,
  width,
  quality,
}: supabaseLoaderParams) {
  const url = new URL(`${src}`);
  url.searchParams.set("width", width.toString());
  url.searchParams.set("quality", (quality || 75).toString());
  return url.href;
}
