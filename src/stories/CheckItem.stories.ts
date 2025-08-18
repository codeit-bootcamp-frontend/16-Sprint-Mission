import CheckItem from "@/components/CheckItem";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Example/CheckItem",
  component: CheckItem,
} satisfies Meta<typeof CheckItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 0,
    initValue: false,
    variant: "default",
    onChange: (value) => {
      console.log(value);
    },
    children: "투두 타이틀",
  },
};

export const Detail: Story = {
  args: {
    id: 1,
    initValue: false,
    variant: "detail",
    onChange: (value) => {
      console.log(value);
    },
    children: "가나다라",
  },
};
