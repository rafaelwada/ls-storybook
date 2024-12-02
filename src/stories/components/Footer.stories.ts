import type { Meta, StoryObj } from '@storybook/react';

import Footer from '@/app/components/Footer';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

