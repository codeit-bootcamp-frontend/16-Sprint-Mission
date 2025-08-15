import Button from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Example/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Add: Story = {
  args: {
    variant: "add",
    children: "추가하기",
  },
};
