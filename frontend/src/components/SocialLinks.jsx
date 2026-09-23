function Icon({ name }) {
  if (name === "Email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m3 6 9 7 9-7" />
      </svg>
    );
  }
  if (name === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2.16c-3.2.7-3.88-1.4-3.88-1.4-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.3-.52-1.5.11-3.12 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.62.24 2.82.12 3.12.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const EMAIL = "nishrititamrakar1028@gmail.com";

const LINKS = [
  { label: "Email", href: "mailto:" + EMAIL },
  { label: "GitHub", href: "https://github.com/Nishriti" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nishriti-tamrakar" },
];

// On desktop, "mailto:" only works if a mail app is set up, otherwise the
// browser shows a "choose an app" popup and opens a blank tab.
// So on desktop we open Gmail's compose window directly in the browser.
// On phones we keep "mailto:" so it opens the Gmail app.
function handleEmailClick(e) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) return; // let the normal mailto: link work
  e.preventDefault();
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(EMAIL),
    "_blank",
    "noopener,noreferrer"
  );
}

export default function SocialLinks() {
  return (
    <section className="social-links">
      <div className="social-links-inner">
        {LINKS.map(function (link, i) {
          const isLast = i === LINKS.length - 1;
          return (
            <div className="social-link-item" key={link.label}>
              <a
                href={link.href}
                {...(link.label === "Email"
                  ? { onClick: handleEmailClick }
                  : { target: "_blank", rel: "noreferrer" })}
              >
                <span className={"social-icon social-icon--" + link.label.toLowerCase()}>
                  <Icon name={link.label} />
                </span>
                <span className="social-label">{link.label}</span>
                <span className="social-arrow">-&gt;</span>
              </a>
              {!isLast && <span className="social-divider" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}