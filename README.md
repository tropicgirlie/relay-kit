# Relay Kit

An original starter for building a design system that designers, React developers, and coding agents can use. Team room and Review queue run entirely in the browser. Chat replies are scripted and approval decisions affect demo data. Both templates save their state on the current device.

## Run it

Use Node.js 24 and npm. Run these commands in this folder.

```sh
npm ci
npm run dev
```

Open the URL Vite prints. Use `npm run storybook` to inspect individual component states, `npm run build` for the static website, and `npm run build-storybook` for the standalone Storybook.

## How the pieces fit

| File | What you change |
| --- | --- |
| src/tokens.css | Named colors, spacing, and corner radius |
| src/components.tsx | Typed React components and their supported states |
| src/*.stories.tsx | Storybook examples of those states |
| src/catalog.json | Prop descriptions and examples used by the workspace and MCP |
| src/Templates.tsx | Team conversation and approval workflows |
| mcp/server.mjs | Read-only tools for component discovery, usage, and tokens |
| figma/ | Local Figma plugin that creates editable color variables, swatches, and a StatusPill variant set |

## Make it yours

Begin with one workflow your users repeat. For example, in Review queue a person opens a proposed action and records a decision. Design the in-review, approved, and declined states. Implement those states in ReviewItem, then add one story per state and update its catalog entry. Run the build and check the states in Storybook. A coding agent can then request get_component for ReviewItem and compose the same control into a new screen.

The demo stores decisions in localStorage. To use the queue for real actions, store requests on your backend, authorize the reviewer, and execute an approved request once. For live team chat, replace the scripted reply in TeamRoom with a server endpoint that streams model messages. Keep model credentials on that server.

## Figma

Run `npm run figma` after editing color tokens. In Figma Desktop, open a design file and import figma/manifest.json through Plugins → Development → Import plugin from manifest. Run Relay Kit Foundations to create a new page and a new variable collection. Each run preserves previous pages. Save the design file to keep your editable source. If Figma assigns a development plugin ID, use that ID in the manifest.

## Agent access

After installing dependencies, configure your MCP client's stdio server with command `node` and a single argument containing the absolute path to mcp/server.mjs. The server exposes list_components, get_component, and get_tokens. The hosted workspace serves the interactive demo. The stdio server runs on the machine containing this checkout.

For Claude Code, run `claude --plugin-dir .` from this folder and use `/relay-kit:relay-ui`. The plugin includes the same local MCP server.

## Reference architecture

The original Agentic UI technical notes document its Figma source, React and TypeScript components, Storybook stories, and component and token lookup through MCP. Relay Kit implements an independent, smaller version of that architecture. [Creator’s published notes](https://agenticui.dev/llms.txt)
