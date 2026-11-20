import type { Meta, StoryObj } from "@storybook/react-vite";
import { AgentMark } from "./components";

const meta = {
  title: "Components/AgentMark",
  component: AgentMark,
} satisfies Meta<typeof AgentMark>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Scout: Story = { args: { agent: "Scout" } };
export const Echo: Story = { args: { agent: "Echo" } };
export const Pilot: Story = { args: { agent: "Pilot" } };
