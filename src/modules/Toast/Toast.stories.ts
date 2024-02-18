import type { Meta, StoryObj } from "@storybook/vue3";

import Toast from "./Toast";
import { useToast } from "./toasts";

type Story = StoryObj<typeof Toast>;

const meta: Meta<typeof Toast> = {
  title: "Toast",
  component: Toast,
  render: (args) => ({
    setup: () => {
      const { toast } = useToast();

      const onClick = () => {
        toast({ ...args });
      };

      return { args, onClick };
    },
    template: `
      <button @click="onClick">Run</button>
    `
  }),
};

export const Default: Story = {
  args: {
    message: 'I am a toast, nice to meet you !',
  },
};

export const Titled: Story = {
  args: {
    title: 'Better ?',
    message: 'Hey look, I have a title !',
  },
};

export const ToastType: Story = {
  args: {
    type: 'success',
    message: "You're using the good framework !",
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['success', 'error', 'warning', 'info'],
    },
  },
};

export const Duration: Story = {
  args: {
    displayTime: 5000,
    message: 'You will see me for 5 seconds.',
  },
};

export default meta;
