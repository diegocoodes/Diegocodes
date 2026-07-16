"use client";

import { useEffect } from "react";

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, string>>;
  fbq?: (
    action: "trackCustom",
    eventName: string,
    parameters?: Record<string, string>
  ) => void;
};

export default function AnalyticsBridge() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-track]");

      if (!trackedElement) {
        return;
      }

      const eventName = trackedElement.dataset.track ?? "site_interaction";
      const eventLabel = trackedElement.dataset.trackLabel ?? "";
      const dataLayerWindow = window as DataLayerWindow;

      dataLayerWindow.dataLayer?.push({
        event: eventName,
        label: eventLabel,
      });
      dataLayerWindow.fbq?.("trackCustom", eventName, {
        label: eventLabel,
      });
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
