---
name: relay-ui
description: Compose React interfaces using Relay Kit components, states, and design tokens.
---

Use the Relay Kit MCP server to call list_components, then get_component for each component in your screen. Call get_tokens for the CSS variables. If working directly in the checkout, the same information lives in src/catalog.json and src/tokens.css.

Import the components from src/components.tsx using the path relative to your screen. Include the token stylesheet and component styles once at the app entry. For each ReviewItem, let its parent own the decision state and pass onDecision. Use the supported agent names for AgentMessage. Use src/Templates.tsx for working examples of both patterns.

When asked for a new variation, update the component, its Storybook states, and the catalog together.
