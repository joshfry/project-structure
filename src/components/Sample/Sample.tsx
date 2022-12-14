import React from 'react'
import StyledSample from './Sample.style'

export interface Props {
  className?: string
}

const Sample = ({ className = '' }: Props) => {
  return (
    <StyledSample data-testid="Sample" className={className}>
      Sample
    </StyledSample>
  )
}

export default Sample
