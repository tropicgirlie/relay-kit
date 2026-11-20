import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusPill } from "./components";

const meta = {
  title: "Components/StatusPill",
  component: StatusPill,
} satisfies Meta<typeof StatusPill>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Ready: Story = { args: { status: "Ready" } };
export const Inreview: Story = { args: { status: "In review" } };
export const Approved: Story = { args: { status: "Approved" } };
export const Declined: Story = { args: { status: "Declined" } };
