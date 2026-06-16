import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { profile, publications, thesisItems } from "@/data/site";

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

export default function Home() {
  const featured = publications.slice(0, 5);

  return (
    <main className="page-shell">
      <nav className="top-nav" aria-label="Primary navigation">
        <a href="#top" className="wordmark">
          {profile.handle} / {profile.name}
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <Link href="/publications">Publications</Link>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Zihao Tang / 唐子豪</p>
            <h1>Zihao Tang</h1>
            <p className="chinese-name">{profile.chineseName} · {profile.handle}</p>
            <p className="hero-claim">
              Hi, I&apos;m Zihao. I am currently at <em>Microsoft</em>, working on LLM agents, AI memory, and agentic reinforcement learning.
            </p>
            <p className="hero-claim hero-background">
              I received my Master&apos;s degree from Zhejiang University, where I was fortunate to be advised by A.P. Kun Kuang and Prof. Fei Wu and to work with AI4GC Lab.
            </p>
            <p className="meta-line">{profile.location}</p>
            <div className="link-row" aria-label="Profile links">
              {profile.links.map((link) => (
                <ExternalLink key={link.label} href={link.href}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>

          <aside className="hero-aside" aria-label="Current profile summary">
            <Image className="hero-avatar" src="/avatar.jpg" alt="Zihao Tang avatar" width={112} height={112} priority />
            <p className="current-note">
              <strong>Research focus:</strong> LLM Agents, AI Memory, and Agentic RL.
            </p>
          </aside>

        </div>
      </section>

      <section className="section-block" aria-labelledby="thesis-heading">
        <div className="section-head">
          <p className="section-label">Research interests</p>
          <div>
            <h2 id="thesis-heading">Agents that learn from experience.</h2>
          </div>
        </div>
        <div className="thesis-grid">
          {thesisItems.map((item) => (
            <article key={item.title} className="thesis-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-block" aria-labelledby="work-heading">
        <div className="section-head">
          <p className="section-label">Selected publications</p>
          <h2 id="work-heading">Representative papers from recent work.</h2>
        </div>
        <div className="publication-list">
          {featured.map((paper) => (
            <article key={paper.title} className="publication-row">
              <div className="publication-year">
                <span>{paper.year}</span>
                <span>{paper.venue}</span>
              </div>
              <div className="publication-body">
                <h3>{paper.title}</h3>
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
        <Link href="/publications" className="text-link">
          View all publications
        </Link>
      </section>

      <footer className="footer">
        <span>© {profile.name}</span>
        <span>ishikura-a.github.io</span>
      </footer>
    </main>
  );
}
