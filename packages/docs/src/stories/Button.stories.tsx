import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@matheus/react'
import type { ButtonProps } from '@matheus/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}