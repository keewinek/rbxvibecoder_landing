import { JSX } from "preact";

interface DownloadButtonProps {
  href: string;
  filename?: string;
  class?: string;
  children: preact.ComponentChildren;
}

// Add gtag to the Window interface for TypeScript
// deno-lint-ignore no-explicit-any
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function DownloadButton({ href, filename, class: className, children }: DownloadButtonProps) {
  const handleClick = (e: JSX.TargetedMouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Fire Google Analytics event for download
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag('event', 'download_clicked', {
        event_category: 'engagement',
        event_label: 'rbx_plugin',
      });
    }
    // Create a temporary link to trigger download
    const link = document.createElement("a");
    link.href = href;
    if (filename) link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Open thank you page in a new tab after a short delay
    setTimeout(() => {
      window.open("/thank_you", "_blank");
    }, 500);
  };

  return (
    <a
      href={href}
      download={filename}
      class={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
} 