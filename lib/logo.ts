import fs from "fs";
import path from "path";

export function getEmbeddedLogoDataUrl(): string | null {
  try {
    const publicPath = path.join(process.cwd(), "public", "digilink-logo.png");
    if (!fs.existsSync(publicPath)) return null;
    const buffer = fs.readFileSync(publicPath);
    const base64 = buffer.toString("base64");
    // assume PNG; change if you keep a different format
    return `data:image/png;base64,${base64}`;
  } catch (error) {
    // fail silently and let callers fallback
    return null;
  }
}

export default getEmbeddedLogoDataUrl;
