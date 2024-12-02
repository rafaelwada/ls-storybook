import type { Meta, StoryObj } from '@storybook/react';

import Header from '@/app/components/Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

