import type { Meta, StoryObj } from "@storybook/react-vite";
import { AgentMessage } from "./components";

const meta = {
  title: "Components/AgentMessage",
  component: AgentMessage,
} satisfies Meta<typeof AgentMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Research: Story = {
  args: { agent: "Scout", children: "The brief is ready for review." },
};
