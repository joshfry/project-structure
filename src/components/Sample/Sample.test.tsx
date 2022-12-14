import React from 'react'
import { render, screen } from '@testing-library/react'
import fixture from './Sample.fixtures'
import Sample from './Sample'

describe('Sample', () => {
  test('should render', () => {
    render(<Sample {...fixture} />)

    const component = screen.getByTestId('Sample')
    expect(component).toHaveClass('Sample')
  })
})
