import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import fixture from './Sample.fixtures'
import Sample from './Sample'

export default {
  title: 'Components/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>

const Template: ComponentStory<typeof Sample> = args => <Sample {...args} />

export const Default = Template.bind({})
Default.args = { ...fixture }
