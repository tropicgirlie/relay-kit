import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReviewItem } from "./components";

const meta = {
  title: "Components/ReviewItem",
  component: ReviewItem,
} satisfies Meta<typeof ReviewItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Inreview: Story = {
  args: { title: "Publish release brief", status: "In review" },
};
export const Approved: Story = {
  args: { title: "Publish release brief", status: "Approved" },
};
export const Declined: Story = {
  args: { title: "Publish release brief", status: "Declined" },
};
