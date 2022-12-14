import React from 'react'
import StyledApp from './App.style'

export interface Props {
  className?: string
}

const App = ({ className = '' }: Props) => {
  return (
    <StyledApp data-testid="App" className={className}>
      <h1>Project Structure</h1>
    </StyledApp>
  )
}

export default App
