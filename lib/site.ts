const defaultSiteUrl = "https://diegocodes.com.br";
const previewSiteUrl = "https://diegocodes-dev.vercel.app";
const legacySiteUrl = "https://diegosilvaport.vercel.app";

export function getSiteUrl() {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL?.trim();

  if (!configuredSiteUrl) {
    return defaultSiteUrl;
  }

  try {
    const normalizedSiteUrl = new URL(configuredSiteUrl)
      .toString()
      .replace(/\/$/, "");

    return normalizedSiteUrl === legacySiteUrl ||
      normalizedSiteUrl === previewSiteUrl
      ? defaultSiteUrl
      : normalizedSiteUrl;
  } catch {
    return defaultSiteUrl;
  }
}
