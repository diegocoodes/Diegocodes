"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { useEffect } from "react";

type TransitionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

type PendingNavigation = {
  pathname: string;
  resolve: () => void;
  timeoutId: number;
};

let pendingNavigation: PendingNavigation | null = null;

function finishPendingNavigation() {
  if (!pendingNavigation) {
    return;
  }

  window.clearTimeout(pendingNavigation.timeoutId);
  const { resolve } = pendingNavigation;
  pendingNavigation = null;
  resolve();
}

function isPlainPrimaryClick(event: MouseEvent<HTMLAnchorElement>) {
  const target = event.currentTarget.getAttribute("target");

  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    (!target || target.toLowerCase() === "_self") &&
    !event.currentTarget.hasAttribute("download")
  );
}

export default function TransitionLink({
  href,
  onClick,
  replace = false,
  scroll = true,
  ...props
}: TransitionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pendingNavigation?.pathname !== pathname) {
      return;
    }

    let secondFrameId = 0;
    const firstFrameId = window.requestAnimationFrame(() => {
      secondFrameId = window.requestAnimationFrame(() => {
        if (pendingNavigation?.pathname === pathname) {
          finishPendingNavigation();
        }
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrameId);
      window.cancelAnimationFrame(secondFrameId);
    };
  }, [pathname]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented || !isPlainPrimaryClick(event)) {
      return;
    }

    const destination = new URL(event.currentTarget.href, window.location.href);

    if (
      destination.origin !== window.location.origin ||
      destination.href === window.location.href
    ) {
      return;
    }

    event.preventDefault();

    const destinationHref = `${destination.pathname}${destination.search}${destination.hash}`;
    const navigate = () => {
      if (replace) {
        router.replace(destinationHref, { scroll });
        return;
      }

      router.push(destinationHref, { scroll });
    };
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      prefersReducedMotion ||
      typeof document.startViewTransition !== "function"
    ) {
      navigate();
      return;
    }

    finishPendingNavigation();

    const transition = document.startViewTransition(
      () =>
        new Promise<void>((resolve) => {
          pendingNavigation = {
            pathname: destination.pathname,
            resolve,
            timeoutId: window.setTimeout(finishPendingNavigation, 1200),
          };

          navigate();
        })
    );

    // A navegação continua normalmente mesmo se o navegador cancelar a animação.
    void transition.finished.catch(() => undefined);
  }

  return (
    <Link
      {...props}
      href={href}
      replace={replace}
      scroll={scroll}
      onClick={handleClick}
    />
  );
}
