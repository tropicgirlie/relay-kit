// Material 3 Expressive animated illustration of a human designer, AI agents,
// and a shared whiteboard collaborating in real time.
export function Artwork() {
  return (
    <div
      className="artwork"
      role="img"
      aria-label="Animated Material Expressive illustration of a human designer and AI agents collaborating on a shared whiteboard"
    >
      <svg
        viewBox="0 0 560 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="artwork-svg"
      >
        <defs>
          <filter
            id="board-shadow"
            x="110"
            y="26"
            width="320"
            height="270"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow
              dx="0"
              dy="14"
              stdDeviation="14"
              floodColor="#16213e"
              floodOpacity="0.10"
            />
          </filter>
          <filter
            id="soft-shadow"
            x="0"
            y="0"
            width="560"
            height="350"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="8"
              floodColor="#16213e"
              floodOpacity="0.12"
            />
          </filter>
        </defs>

        {/* M3 Expressive organic background shapes */}
        <g className="anim-spin-slow" style={{ transformOrigin: "470px 76px" }}>
          <path
            d="M470 28 C482 28 486 42 496 46 C506 50 518 44 522 56 C526 68 514 74 514 84 C514 94 526 102 518 112 C510 122 498 114 488 118 C478 122 474 134 462 132 C450 130 448 116 438 112 C428 108 416 112 414 100 C412 88 424 82 424 72 C424 62 414 52 422 42 C430 32 442 40 452 36 C460 32 460 28 470 28 Z"
            fill="#bfe8f7"
            opacity="0.82"
          />
        </g>

        <rect
          x="18"
          y="238"
          width="116"
          height="66"
          rx="33"
          fill="#f9ead3"
          opacity="0.9"
          className="anim-float-slow"
        />

        <circle
          cx="496"
          cy="266"
          r="46"
          fill="#f3e4f5"
          opacity="0.9"
          className="anim-float-alt"
        />

        {/* Shared Collaborative Whiteboard */}
        <g filter="url(#board-shadow)">
          {/* Board easel legs */}
          <path
            d="M196 256 L178 312 M344 256 L362 312"
            stroke="#9fb5d9"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Main whiteboard frame */}
          <rect
            x="134"
            y="44"
            width="274"
            height="214"
            rx="26"
            fill="#ffffff"
            stroke="#c8d6f0"
            strokeWidth="2.5"
          />
          {/* Whiteboard header bar */}
          <path
            d="M136 78 H406"
            stroke="#e8eef8"
            strokeWidth="2"
          />
          <circle cx="158" cy="61" r="5" fill="#e76f51" />
          <circle cx="175" cy="61" r="5" fill="#f4b942" />
          <circle cx="192" cy="61" r="5" fill="#2a9d8f" />
          <rect x="294" y="54" width="92" height="14" rx="7" fill="#eef3fc" />
          <rect x="302" y="59" width="48" height="4" rx="2" fill="#8ea4c9" />
          <circle cx="375" cy="61" r="4" fill="#2a9d8f" className="anim-pulse" />

          {/* Subtle dot grid inside whiteboard */}
          <g fill="#d9e3f4">
            <circle cx="164" cy="100" r="1.6" />
            <circle cx="196" cy="100" r="1.6" />
            <circle cx="228" cy="100" r="1.6" />
            <circle cx="260" cy="100" r="1.6" />
            <circle cx="292" cy="100" r="1.6" />
            <circle cx="324" cy="100" r="1.6" />
            <circle cx="356" cy="100" r="1.6" />
            <circle cx="388" cy="100" r="1.6" />
            <circle cx="164" cy="140" r="1.6" />
            <circle cx="260" cy="140" r="1.6" />
            <circle cx="388" cy="140" r="1.6" />
            <circle cx="164" cy="180" r="1.6" />
            <circle cx="260" cy="180" r="1.6" />
            <circle cx="388" cy="180" r="1.6" />
            <circle cx="164" cy="220" r="1.6" />
            <circle cx="356" cy="220" r="1.6" />
            <circle cx="388" cy="220" r="1.6" />
          </g>

          {/* Sticky note 1 (Human's idea) */}
          <g className="anim-sticky-1" style={{ transformOrigin: "194px 132px" }}>
            <rect
              x="154"
              y="96"
              width="80"
              height="70"
              rx="16"
              fill="#fde6c4"
            />
            <rect x="166" y="112" width="46" height="6" rx="3" fill="#9c5a20" />
            <rect x="166" y="125" width="56" height="5" rx="2.5" fill="#c7874b" />
            <rect x="166" y="137" width="38" height="5" rx="2.5" fill="#c7874b" />
            <rect x="166" y="150" width="24" height="7" rx="3.5" fill="#e76f51" />
          </g>

          {/* Animated hand-drawn connector arrow from idea to component */}
          <path
            d="M238 130 C254 128, 258 118, 274 124"
            stroke="#1d3b72"
            strokeWidth="3"
            strokeLinecap="round"
            className="anim-draw-line"
          />
          <path
            d="M269 117 L276 124 L268 129"
            stroke="#1d3b72"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="anim-draw-arrow"
          />

          {/* Component spec card on whiteboard (Agent-built UI block) */}
          <g className="anim-card-pop" style={{ transformOrigin: "334px 132px" }}>
            <rect
              x="282"
              y="94"
              width="108"
              height="78"
              rx="18"
              fill="#e8f3ff"
              stroke="#9fc5f8"
              strokeWidth="2"
            />
            <rect x="294" y="108" width="56" height="6" rx="3" fill="#1d3b72" />
            <rect x="294" y="121" width="76" height="5" rx="2.5" fill="#6b8cc2" />
            {/* Mini pill buttons inside whiteboard card */}
            <rect x="294" y="138" width="42" height="20" rx="10" fill="#1d3b72" />
            <rect x="303" y="146" width="24" height="4" rx="2" fill="#ffffff" />
            <rect
              x="342"
              y="138"
              width="36"
              height="20"
              rx="10"
              fill="#ffffff"
              stroke="#b7cef2"
              strokeWidth="1.5"
            />
            {/* Live approval check badge */}
            <g className="anim-check-pop" style={{ transformOrigin: "386px 98px" }}>
              <circle cx="386" cy="98" r="12" fill="#229972" />
              <path
                d="M381 98 L384.5 101.5 L391.5 94.5"
                stroke="#ffffff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* Bottom shared rule card (Human + Agent sync) */}
          <g className="anim-sticky-2" style={{ transformOrigin: "268px 212px" }}>
            <rect
              x="196"
              y="186"
              width="148"
              height="52"
              rx="16"
              fill="#f3e4f5"
            />
            <circle cx="218" cy="212" r="11" fill="#7c4dba" />
            <path
              d="M218 206 L219.8 210.2 L224 212 L219.8 213.8 L218 218 L216.2 213.8 L212 212 L216.2 210.2 Z"
              fill="#ffffff"
            />
            <rect x="238" y="202" width="62" height="6" rx="3" fill="#4f2d7f" />
            <rect x="238" y="214" width="90" height="5" rx="2.5" fill="#8f6eb8" />
          </g>

          {/* Whiteboard marker tray */}
          <rect x="218" y="253" width="108" height="10" rx="5" fill="#1d3b72" />
          <rect x="234" y="249" width="26" height="5" rx="2.5" fill="#e76f51" />
          <rect x="268" y="249" width="28" height="5" rx="2.5" fill="#bfe8f7" />
        </g>

        {/* Animated Live Agent Cursor gliding on the whiteboard */}
        <g className="anim-cursor-glide">
          <path
            d="M0 0 L5 16 L9 10 L16 8 Z"
            fill="#1d3b72"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <rect x="11" y="11" width="46" height="18" rx="9" fill="#1d3b72" />
          <text
            x="34"
            y="23"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="9.5"
            fontWeight="700"
            fontFamily="Manrope, sans-serif"
          >
            Scout
          </text>
        </g>

        {/* LEFT: Human Designer Character (Material 3 Expressive editorial style) */}
        <g filter="url(#soft-shadow)" className="anim-human-breathe" style={{ transformOrigin: "82px 265px" }}>
          {/* Shoulders / Coral sweater */}
          <path
            d="M28 296 C28 242 52 216 84 216 C114 216 132 238 136 274 L136 306 C136 314 128 320 120 320 H44 C35 320 28 312 28 296 Z"
            fill="#e76f51"
          />
          {/* Sweater collar detail */}
          <path
            d="M66 218 C74 228 92 228 100 218"
            stroke="#fde6c4"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Neck */}
          <rect x="73" y="198" width="20" height="22" rx="10" fill="#f3bda1" />
          {/* Head */}
          <circle cx="84" cy="176" r="28" fill="#f6c7ae" />
          {/* Expressive hair silhouette */}
          <path
            d="M56 174 C55 150 74 138 95 144 C108 148 114 159 112 172 C104 162 94 159 80 160 C68 161 62 167 56 174 Z"
            fill="#16213e"
          />
          <circle cx="57" cy="162" r="11" fill="#16213e" />
          {/* Eyes & warm smile */}
          <circle cx="92" cy="177" r="2.6" fill="#16213e" />
          <circle cx="103" cy="176" r="2.6" fill="#16213e" />
          <path
            d="M93 187 C96 191 102 191 105 186"
            stroke="#16213e"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Reaching arm holding whiteboard marker */}
          <g className="anim-human-arm" style={{ transformOrigin: "108px 236px" }}>
            <path
              d="M106 238 C126 226 140 202 156 168"
              stroke="#e76f51"
              strokeWidth="17"
              strokeLinecap="round"
            />
            <circle cx="158" cy="164" r="9.5" fill="#f6c7ae" />
            {/* Marker pen */}
            <path
              d="M155 166 L172 146"
              stroke="#1d3b72"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            <circle cx="173" cy="144" r="2.5" fill="#e76f51" />
          </g>
        </g>

        {/* Human pill tag */}
        <g transform="translate(34, 304)">
          <rect
            width="92"
            height="24"
            rx="12"
            fill="#ffffff"
            stroke="#d9e1ee"
            strokeWidth="1.5"
          />
          <circle cx="15" cy="12" r="4.5" fill="#e76f51" />
          <text
            x="27"
            y="16"
            fill="#16213e"
            fontSize="11"
            fontWeight="700"
            fontFamily="Manrope, sans-serif"
          >
            Designer
          </text>
        </g>

        {/* RIGHT: Expressive AI Agent Companion (M3 Clover Bot) */}
        <g filter="url(#soft-shadow)" className="anim-agent-float">
          {/* Glowing antenna */}
          <path
            d="M472 146 L472 128"
            stroke="#1d3b72"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="472" cy="123" r="7" fill="#f4b942" className="anim-pulse" />
          {/* Expressive squircle/clover body */}
          <rect
            x="430"
            y="144"
            width="84"
            height="84"
            rx="30"
            fill="#1d3b72"
          />
          {/* Luminous visor face */}
          <rect
            x="443"
            y="164"
            width="58"
            height="34"
            rx="17"
            fill="#bfe8f7"
          />
          {/* Friendly blinking eyes */}
          <g className="anim-blink" style={{ transformOrigin: "472px 181px" }}>
            <circle cx="460" cy="181" r="4.5" fill="#16213e" />
            <circle cx="484" cy="181" r="4.5" fill="#16213e" />
          </g>
          {/* Cheerful little wave/hand pointing at board */}
          <path
            d="M432 192 C414 190 404 180 396 172"
            stroke="#1d3b72"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <circle cx="394" cy="170" r="6" fill="#bfe8f7" />
        </g>

        {/* Secondary Mini Agent Buddy (Echo) */}
        <g className="anim-float-alt">
          <rect
            x="444"
            y="54"
            width="44"
            height="44"
            rx="16"
            fill="#7c4dba"
          />
          <path
            d="M466 65 L469 73 L477 76 L469 79 L466 87 L463 79 L455 76 L463 73 Z"
            fill="#ffffff"
          />
        </g>

        {/* Signal arc from Agent to Whiteboard */}
        <path
          d="M440 78 C422 78 416 90 404 94"
          stroke="#7c4dba"
          strokeWidth="2.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
          className="anim-dash-flow"
        />

        {/* Agent pill tag */}
        <g transform="translate(422, 244)">
          <rect
            width="102"
            height="24"
            rx="12"
            fill="#ffffff"
            stroke="#d9e1ee"
            strokeWidth="1.5"
          />
          <circle cx="15" cy="12" r="4.5" fill="#1d3b72" />
          <text
            x="27"
            y="16"
            fill="#16213e"
            fontSize="11"
            fontWeight="700"
            fontFamily="Manrope, sans-serif"
          >
            AI Agents
          </text>
        </g>
      </svg>
    </div>
  );
}

// Compact animated emblem for the top header bar echoing the human + whiteboard + agent trio.
export function HeaderScene() {
  return (
    <span className="header-scene" aria-hidden="true">
      <svg viewBox="0 0 74 26" width="74" height="26" fill="none">
        {/* Mini human circle */}
        <circle cx="11" cy="13" r="6.5" fill="#e76f51" />
        <circle cx="11" cy="11.5" r="2.2" fill="#fde6c4" />
        {/* Mini whiteboard */}
        <rect
          x="23"
          y="4"
          width="28"
          height="18"
          rx="5"
          fill="#ffffff"
          stroke="#b8cae8"
          strokeWidth="1.5"
        />
        <path
          d="M28 11 H39 M28 16 H45"
          stroke="#1d3b72"
          strokeWidth="2"
          strokeLinecap="round"
          className="anim-mini-stroke"
        />
        <circle cx="44" cy="10" r="2.2" fill="#229972" className="anim-pulse" />
        {/* Mini agent squircle */}
        <rect
          x="57"
          y="6.5"
          width="13"
          height="13"
          rx="4.5"
          fill="#1d3b72"
          className="anim-mini-bob"
        />
        <rect x="59.5" y="10.5" width="8" height="4.5" rx="2.2" fill="#bfe8f7" />
      </svg>
    </span>
  );
}
