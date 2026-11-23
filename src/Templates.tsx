import { useEffect, useRef, useState } from "react";
import { ChevronDown, RotateCcw, Send, Users } from "lucide-react";
import {
  AgentMark,
  AgentMessage,
  agents,
  FeedbackBar,
  ReviewItem,
  type Agent,
  type Feedback,
  type Status,
} from "./components";
type Message = { who: Agent | "You"; text: string; rating?: Feedback };
const firstMessages: Message[] = [
  {
    who: "Pilot",
    text: "The release brief is open. Scout, what did you find?",
  },
  {
    who: "Scout",
    text: "Three teams asked for an approval step before an agent publishes a change.",
  },
  { who: "Echo", text: "I’ll add human review to the acceptance criteria." },
];
function useSavedState<T>(
  key: string,
  initial: T,
  valid: (value: unknown) => boolean,
) {
  const [value, set] = useState<T>(() => {
    try {
      const data = JSON.parse(localStorage.getItem(key) || "null");
      return valid(data) ? data : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* Storage may be disabled. */
    }
  }, [key, value]);
  return [value, set] as const;
}
export function TeamRoom() {
  const [messages, setMessages] = useSavedState(
    "relay.team.v1",
    firstMessages,
    (v) =>
      Array.isArray(v) &&
      v.every(
        (m) =>
          m &&
          ["You", ...Object.keys(agents)].includes(m.who) &&
          typeof m.text === "string" &&
          (m.rating === undefined ||
            m.rating === "Helpful" ||
            m.rating === "Needs work"),
      ),
  );
  const [draft, setDraft] = useState(""),
    [agent, setAgent] = useState<Agent>("Scout");
  const log = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [messages]);
  function send(e: React.FormEvent) {
    e.preventDefault();
    const task = draft.trim();
    if (!task) return;
    const responses = {
      Scout: "Research note added to the brief",
      Echo: "Synthesis note added to the brief",
      Pilot: "Coordination task added to the brief",
    };
    setMessages((m) => [
      ...m,
      { who: "You", text: task },
      { who: agent, text: responses[agent] + " — “" + task + "”" },
    ]);
    setDraft("");
  }
  return (
    <div className="workspace-panel">
      <div className="panel-title">
        <div>
          <Users size={18} />
          <strong>Release brief</strong>
        </div>
        <button
          className="icon"
          title="Restore sample conversation"
          aria-label="Restore sample conversation"
          onClick={() => setMessages(firstMessages)}
        >
          <RotateCcw size={16} />
        </button>
      </div>
      <div className="messages" ref={log} role="log" aria-live="polite">
        {messages.map((m, i) =>
          m.who === "You" ? (
            <article key={i} className="user-msg">
              <strong>You</strong>
              <p>{m.text}</p>
            </article>
          ) : (
            <div key={i} className="agent-turn">
              <AgentMessage agent={m.who}>{m.text}</AgentMessage>
              <FeedbackBar
                value={m.rating}
                onRate={(rating) =>
                  setMessages((old) =>
                    old.map((item, j) => (i === j ? { ...item, rating } : item)),
                  )
                }
              />
            </div>
          ),
        )}
      </div>
      <form onSubmit={send} className="composer">
        <label className="agent-select">
          <AgentMark agent={agent} />
          <select
            aria-label="Recipient"
            value={agent}
            onChange={(e) => setAgent(e.target.value as Agent)}
          >
            {Object.keys(agents).map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
          <ChevronDown size={14} />
        </label>
        <input
          aria-label="Message"
          placeholder="Give your agent a task…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button disabled={!draft.trim()} aria-label="Send message">
          <Send size={17} />
        </button>
      </form>
      <p className="demo-note">
        Local demo · Scripted agent replies · Saved in this browser
      </p>
    </div>
  );
}
const initialReviews = [
  "Publish release brief",
  "Update onboarding copy",
  "Archive resolved feedback",
];
export function ReviewQueue() {
  const [states, setStates] = useSavedState<Status[]>(
    "relay.reviews.v1",
    initialReviews.map(() => "In review"),
    (v) =>
      Array.isArray(v) &&
      v.length === initialReviews.length &&
      v.every((s) => ["In review", "Approved", "Declined"].includes(s)),
  );
  return (
    <div className="workspace-panel">
      <div className="panel-title">
        <strong>
          {states.filter((s) => s === "In review").length} pending requests
        </strong>
        <button
          onClick={() => setStates(initialReviews.map(() => "In review"))}
        >
          <RotateCcw size={15} />
          Reset demo
        </button>
      </div>
      <div className="review-list">
        {initialReviews.map((title, i) => (
          <ReviewItem
            key={title}
            title={title}
            status={states[i]}
            onDecision={(value) =>
              setStates((old) => old.map((s, j) => (i === j ? value : s)))
            }
          />
        ))}
      </div>
      <p className="demo-note">
        Local demo · Decisions are saved in this browser
      </p>
    </div>
  );
}
