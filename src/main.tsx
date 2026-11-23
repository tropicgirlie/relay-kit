import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  BookOpen,
  Box,
  Boxes,
  Check,
  ChevronRight,
  Component,
  Copy,
  FileCheck2,
  Hexagon,
  Layers,
  LayoutGrid,
  Menu,
  MessagesSquare,
  Palette,
  PanelsTopLeft,
  Search,
  X,
} from "lucide-react";
import "@fontsource-variable/manrope";
import "./tokens.css";
import "./style.css";
import {
  AgentMark,
  AgentMessage,
  Brand,
  FeedbackBar,
  ReviewItem,
  StatusPill,
  type Feedback,
  type Status,
} from "./components";
import { TeamRoom, ReviewQueue } from "./Templates";
import { Artwork } from "./Artwork";
import catalog from "./catalog.json";
import tokens from "./tokens.css?raw";
const sections = [
  {
    title: "Library",
    items: [
      ["overview", "Overview", LayoutGrid],
      ["components", "Components", Component],
      ["foundations", "Foundations", Layers],
    ],
  },
  {
    title: "Templates",
    items: [
      ["team", "Team room", MessagesSquare],
      ["review", "Review queue", FileCheck2],
    ],
  },
  { title: "Resources", items: [["setup", "Getting started", BookOpen]] },
] as const;
const pages = sections.flatMap((s) =>
  s.items.map(([id, title, icon]) => ({ id, title, icon, section: s.title })),
);
type Page = (typeof pages)[number]["id"];
function currentPage(): Page {
  return pages.find((p) => p.id === location.hash.slice(1))?.id || "overview";
}
function CopyCode({ text }: { text: string }) {
  const [state, setState] = useState("Copy");
  return (
    <div className="code">
      <pre>
        <code>{text}</code>
      </pre>
      <button
        aria-label={state + " code"}
        title={state}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setState("Copied");
          } catch {
            setState("Select and copy the code");
          }
          setTimeout(() => setState("Copy"), 1800);
        }}
      >
        {state === "Copied" ? <Check size={15} /> : <Copy size={15} />}
      </button>
      {state !== "Copy" && <small role="status">{state}</small>}
    </div>
  );
}
function TemplatePreview({ team }: { team: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={"template-art " + (team ? "art-team" : "art-review")}
    >
      <div className="mock">
        <div className="mock-title">
          {team ? <MessagesSquare size={14} /> : <FileCheck2 size={14} />}
          <b>{team ? "Team room" : "Approval request"}</b>
          <span className="window-dots">•••</span>
        </div>
        {team ? (
          <div className="mock-body">
            <div className="mock-row">
              <AgentMark agent="Scout" />
              <div>
                <b>Scout</b>
                <i />
                <i />
              </div>
            </div>
            <div className="mock-row">
              <AgentMark agent="Echo" />
              <div>
                <b>Echo</b>
                <i />
              </div>
            </div>
          </div>
        ) : (
          <div className="mock-body">
            <span className="mock-label">PROPOSED ACTION</span>
            <strong>Publish release brief</strong>
            <div className="mock-actions">
              <span>
                <Check size={12} />
                Approve
              </span>
              <span>Decline</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function Overview() {
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="eyebrow">
            <span />
            DESIGN SYSTEM
          </div>
          <h1>System overview</h1>
        </div>
        <span className="version">v0.1.0</span>
      </div>
      <section className="hero">
        <div className="hero-grid" />
        <Artwork />
        <div className="hero-copy">
          <div className="hero-tag">
            <Activity size={14} /> RELAY KIT
          </div>
          <h2>
            Interfaces for
            <br />
            agent teams<span>.</span>
          </h2>
          <p>
            Reusable components and templates for
            <br className="wide" /> collaborative AI workflows.
          </p>
          <a className="hero-button" href="#components">
            <Boxes size={16} />
            Explore components
          </a>
        </div>
      </section>
      <section className="template-section">
        <div className="section-heading">
          <h2>Starter templates</h2>
          <span>2 templates</span>
        </div>
        <div className="template-grid">
          {[true, false].map((team) => (
            <a
              key={String(team)}
              className="template-card"
              href={team ? "#team" : "#review"}
            >
              <TemplatePreview team={team} />
              <div className="template-foot">
                <div>
                  <h3>{team ? "Team room" : "Review queue"}</h3>
                  <p>
                    {team
                      ? "A shared thread for a team of agents."
                      : "A workspace for human approvals."}
                  </p>
                </div>
                <ChevronRight size={17} />
              </div>
            </a>
          ))}
        </div>
      </section>
      <section>
        <div className="section-heading">
          <h2>Explore the library</h2>
        </div>
        <div className="library-grid">
          {[
            {
              page: "components",
              title: "Components",
              icon: Component,
              desc: "Building blocks and usage examples.",
            },
            {
              page: "foundations",
              title: "Foundations",
              icon: Palette,
              desc: "Color, spacing, and shape tokens.",
            },
          ].map((x) => (
            <a href={"#" + x.page} key={x.page}>
              <x.icon size={22} />
              <div>
                <b>{x.title}</b>
                <p>{x.desc}</p>
              </div>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
function Components() {
  const [status, setStatus] = useState<Status>("In review");
  const [rating, setRating] = useState<Feedback | undefined>(undefined);
  const samples = [
    <div className="inline">
      <AgentMark agent="Scout" />
      <AgentMark agent="Echo" />
      <AgentMark agent="Pilot" />
    </div>,
    <div className="inline">
      <StatusPill status="Ready" />
      <StatusPill status="In review" />
      <StatusPill status="Approved" />
    </div>,
    <AgentMessage agent="Echo">
      The release brief is ready for review.
    </AgentMessage>,
    <ReviewItem title="Publish brief" status={status} onDecision={setStatus} />,
    <FeedbackBar value={rating} onRate={setRating} />,
  ];
  return (
    <div className="doc-stack">
      {catalog.map((c, i) => (
        <section className="spec" key={c.name}>
          <h2>{c.name}</h2>
          <p>{c.description}</p>
          <div className="spec-preview">{samples[i]}</div>
          <CopyCode text={c.example} />
        </section>
      ))}
    </div>
  );
}
function Foundations() {
  return (
    <div className="spec">
      <h2>Color tokens</h2>
      <div className="swatches">
        {[...tokens.matchAll(/--([\w-]+): (#[\da-f]+);/g)].map(
          ([, name, hex]) => (
            <div key={name}>
              <i style={{ background: hex }} />
              <b>{name}</b>
              <code>{hex}</code>
            </div>
          ),
        )}
      </div>
      <h2>Token source</h2>
      <CopyCode text={tokens.trim()} />
    </div>
  );
}
function Setup() {
  return (
    <div className="doc-stack">
      {[
        [
          "Run the workspace",
          "From the relay-kit folder, install the packages and launch the local app.",
          "npm ci\nnpm run dev",
        ],
        [
          "Explore Storybook",
          "Open the local Storybook to inspect component states and try their controls.",
          "npm run storybook",
        ],
        [
          "Connect a coding agent",
          "In your MCP client, add a local stdio server. Replace the example path with your checkout’s absolute path.",
          JSON.stringify(
            {
              mcpServers: {
                "relay-kit": {
                  command: "node",
                  args: ["/absolute/path/to/relay-kit/mcp/server.mjs"],
                },
              },
            },
            null,
            2,
          ),
        ],
        [
          "Load the Claude Code plugin",
          "From the project folder, start Claude Code with the bundled plugin. Use /relay-kit:relay-ui to apply the component guide.",
          "claude --plugin-dir .",
        ],
        [
          "Generate the Figma library",
          "In Figma Desktop, open a design file, choose Plugins → Development → Import plugin from manifest, then select the file below and run Relay Kit Foundations.",
          "figma/manifest.json",
        ],
      ].map(([name, desc, code]) => (
        <section key={name} className="spec">
          <h2>{name}</h2>
          <p>{desc}</p>
          <CopyCode text={code} />
        </section>
      ))}
    </div>
  );
}
const descriptions = {
  team: "Coordinate research, synthesis, and handoffs in a shared conversation.",
  review: "Review proposed actions and record a decision for each one.",
  components: "Inspect the building blocks used throughout the templates.",
  foundations: "The shared values behind the Relay Kit interface.",
  setup: "Run the kit locally and connect your design tools.",
  overview: "",
};
function App() {
  const [page, setPage] = useState<Page>(currentPage),
    [menu, setMenu] = useState(false),
    [showSearch, setSearch] = useState(false),
    [query, setQuery] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const active = pages.find((p) => p.id === page)!;
  useEffect(() => {
    function change() {
      setPage(currentPage());
      setMenu(false);
      setSearch(false);
      window.scrollTo(0, 0);
    }
    function key(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch((v) => !v);
      }
      if (e.key === "Escape") setMenu(false);
    }
    addEventListener("hashchange", change);
    addEventListener("keydown", key);
    return () => {
      removeEventListener("hashchange", change);
      removeEventListener("keydown", key);
    };
  }, []);
  useEffect(() => {
    document.title = active.title + " · Relay Kit";
  }, [active]);
  useEffect(() => {
    if (showSearch) {
      setQuery("");
      dialog.current?.showModal();
    } else dialog.current?.close();
  }, [showSearch]);
  const results = pages.filter((p) =>
    (p.title + " " + p.section).toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div className="shell">
      <a
        className="skip"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Skip to content
      </a>
      {menu && (
        <button
          aria-label="Close navigation"
          className="scrim"
          onClick={() => setMenu(false)}
        />
      )}
      <aside className={menu ? "side open" : "side"}>
        <a
          href="#overview"
          className="brand-link"
          onClick={() => setMenu(false)}
        >
          <Brand />
        </a>
        <button
          className="search"
          onClick={() => {
            setMenu(false);
            setSearch(true);
          }}
        >
          <Search size={16} />
          Search library<kbd>⌘ K</kbd>
        </button>
        <nav>
          {sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              {s.items.map(([id, title, Icon]) => (
                <a
                  href={"#" + id}
                  onClick={() => setMenu(false)}
                  aria-current={id === page ? "page" : undefined}
                  className={id === page ? "active" : ""}
                  key={id}
                >
                  <Icon size={17} />
                  {title}
                </a>
              ))}
            </section>
          ))}
        </nav>
        <div className="side-bottom">
          <div className="kit-icon">
            <Box size={19} />
          </div>
          <div>
            <b>Relay Kit</b>
            <small>Design system · v0.1.0</small>
          </div>
        </div>
      </aside>
      <div className="main-col">
        <header>
          <button
            className="mobile-icon icon"
            onClick={() => setMenu(!menu)}
            aria-label="Open navigation"
          >
            <Menu />
          </button>
          <PanelsTopLeft size={16} />
          <span className="separator">/</span>
          <span>{active.section}</span>
          <span className="separator">/</span>
          <b>{active.title}</b>
          <span className="header-end">
            <Hexagon size={15} /> Workspace
          </span>
        </header>
        <main id="main" tabIndex={-1}>
          {page === "overview" ? (
            <Overview />
          ) : (
            <>
              <div className="eyebrow">
                <span />
                {active.section.toUpperCase()}
              </div>
              <h1>{active.title}</h1>
              <p className="lead">{descriptions[page]}</p>
              {page === "components" ? (
                <Components />
              ) : page === "foundations" ? (
                <Foundations />
              ) : page === "team" ? (
                <TeamRoom />
              ) : page === "review" ? (
                <ReviewQueue />
              ) : (
                <Setup />
              )}
            </>
          )}
        </main>
      </div>
      <dialog
        ref={dialog}
        onClose={() => setSearch(false)}
        onClick={(e) => {
          if (e.target === dialog.current) setSearch(false);
        }}
        aria-label="Search library"
      >
        <div className="dialog-body">
          <label>
            <Search size={19} />
            <input
              autoFocus
              placeholder="Search library…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              aria-label="Close search"
              className="icon"
              onClick={() => setSearch(false)}
            >
              <X size={17} />
            </button>
          </label>
          <div className="results">
            {results.length ? (
              results.map((p) => (
                <a
                  key={p.id}
                  href={"#" + p.id}
                  onClick={() => setSearch(false)}
                >
                  <p.icon size={17} />
                  {p.title}
                  <small>{p.section}</small>
                </a>
              ))
            ) : (
              <p>No pages match “{query}”.</p>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
