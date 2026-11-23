import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeedbackBar } from "./components";

const meta = {
  title: "Components/FeedbackBar",
  component: FeedbackBar,
} satisfies Meta<typeof FeedbackBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Unrated: Story = {
  args: {},
};
export const Helpful: Story = {
  args: { value: "Helpful" },
};
export const NeedsWork: Story = {
  args: { value: "Needs work" },
};
