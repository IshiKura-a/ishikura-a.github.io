import Link from "next/link";
import type { ReactNode } from "react";
import { profile, publications } from "@/data/site";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <span>
      {authors.map((author, index) => (
        <span key={`${author}-${index}`}>
          {index > 0 ? ", " : ""}
          {author === profile.name ? <strong>{author}</strong> : author}
        </span>
      ))}
    </span>
  );
}

export default function PublicationsPage() {
  return (
    <main className="page-shell compact-page">
      <nav className="top-nav" aria-label="Primary navigation">
        <Link href="/" className="wordmark">{profile.handle} / {profile.name}</Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
        </div>
      </nav>
      <section className="section-block first-section" aria-labelledby="publications-heading">
        <div className="section-head">
          <p className="section-label">Publications</p>
          <h1 id="publications-heading">Selected publications.</h1>
        </div>
        <div className="publication-list">
          {publications.map((paper) => (
            <article key={paper.title} className="publication-row">
              <div className="publication-year">
                <span>{paper.year}</span>
                <span>{paper.venue}</span>
              </div>
              <div className="publication-body">
                <h2>{paper.title}</h2>
                <p className="authors"><span>Authors:</span> <AuthorList authors={paper.authors} /></p>
                <p className="paper-note">{paper.note}</p>
                <div className="paper-links">
                  {paper.links.map((link) => (
                    <ExternalLink key={link.label} href={link.href}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
