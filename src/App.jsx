import { BrowserRouter } from 'react-router-dom'

import { SlidesDeck } from './slides/SlidesDeck'
import { Slide } from './slides/ui/Slide'

function App() {
  return (
    <BrowserRouter>
      <Slide>
        <SlidesDeck />
      </Slide>
    </BrowserRouter>
  )
}

export default App
