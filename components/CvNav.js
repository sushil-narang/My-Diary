import Link from "next/link";

const SECTIONS = [
  { href: "/profile", label: "Profile" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/talks", label: "Talks & workshops" },
];

export default function CvNav({ active }) {
  return (
    <nav className="cv-nav" aria-label="Curriculum vitae sections">
      {SECTIONS.map((section) => (
        <Link
          key={section.href}
          href={section.href}
          aria-current={active === section.href ? "page" : undefined}
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
}
