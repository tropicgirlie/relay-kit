import {
  AudioLines,
  Check,
  CircleDot,
  Compass,
  GitPullRequest,
  ScanLine,
  Waves,
  X,
} from "lucide-react";

export const agents = {
  Scout: { icon: Compass, role: "Research" },
  Echo: { icon: AudioLines, role: "Synthesis" },
  Pilot: { icon: ScanLine, role: "Coordination" },
};
export type Agent = keyof typeof agents;
export function AgentMark({ agent }: { agent: Agent }) {
  const Icon = agents[agent].icon;
  return (
    <span
      className={"agent-mark " + agent.toLowerCase()}
      role="img"
      aria-label={agent}
    >
      <Icon size={17} strokeWidth={1.8} />
    </span>
  );
}
export type Status = "Ready" | "In review" | "Approved" | "Declined";
export function StatusPill({ status }: { status: Status }) {
  const Icon =
    status === "Approved" ? Check : status === "Declined" ? X : CircleDot;
  return (
    <span className={"status " + status.toLowerCase().replace(" ", "-")}>
      <Icon size={12} />
      {status}
    </span>
  );
}
export function AgentMessage({
  agent,
  children,
}: {
  agent: Agent;
  children: React.ReactNode;
}) {
  return (
    <article className="agent-message">
      <AgentMark agent={agent} />
      <div>
        <strong>{agent}</strong>
        <small>{agents[agent].role}</small>
        <p>{children}</p>
      </div>
    </article>
  );
}
export function ReviewItem({
  title,
  status,
  onDecision,
}: {
  title: string;
  status: Status;
  onDecision?: (status: "Approved" | "Declined") => void;
}) {
  return (
    <article className="review-item">
      <div className="review-line">
        <GitPullRequest size={19} />
        <strong>{title}</strong>
        <StatusPill status={status} />
      </div>
      {status === "In review" && onDecision && (
        <div className="decisions">
          <button onClick={() => onDecision("Approved")}>
            <Check size={14} />
            Approve
          </button>
          <button onClick={() => onDecision("Declined")}>
            <X size={14} />
            Decline
          </button>
        </div>
      )}
    </article>
  );
}
export function Brand() {
  return (
    <span className="brand">
      <span className="brand-mark">
        <Waves size={23} />
      </span>
      Relay Kit
    </span>
  );
}
