import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
import Wrapper from '../styledComponents/Wrapper'

// the App component should render out the GifListContainer component


const App = () => {
    return (
    <div>
        <NavBar />
        <Wrapper>
        <h1>GIPHY SEARCH APP</h1>
        <GifListContainer />
        </Wrapper>
    </div>
    )
  }
export default App
