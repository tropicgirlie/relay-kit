import { readFile } from "node:fs/promises";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const catalog = JSON.parse(
  await readFile(new URL("../src/catalog.json", import.meta.url), "utf8"),
);
const tokens = await readFile(
  new URL("../src/tokens.css", import.meta.url),
  "utf8",
);
const server = new McpServer({ name: "relay-kit", version: "0.1.0" });
const reply = (text) => ({ content: [{ type: "text", text }] });
server.registerTool(
  "list_components",
  { description: "List the Relay Kit React components and when to use them." },
  async () =>
    reply(
      JSON.stringify(
        catalog.map(({ name, description }) => ({ name, description })),
        null,
        2,
      ),
    ),
);
server.registerTool(
  "get_component",
  {
    description:
      "Read component props, a JSX example, and the source location.",
    inputSchema: { name: z.enum(catalog.map((c) => c.name)) },
  },
  async ({ name }) =>
    reply(
      JSON.stringify(
        {
          ...catalog.find((c) => c.name === name),
          source: "src/components.tsx",
          styles: ["src/tokens.css", "src/style.css"],
        },
        null,
        2,
      ),
    ),
);
server.registerTool(
  "get_tokens",
  { description: "Read the design tokens consumed by the app and Storybook." },
  async () => reply(tokens),
);
await server.connect(new StdioServerTransport());
