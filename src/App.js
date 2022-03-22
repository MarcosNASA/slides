import { BrowserRouter as Router } from 'react-router-dom';

import { SlidesDeck } from './slides/SlidesDeck';
import { Slide } from './slides/ui/Slide';

function App() {
  return (
    <Router>
      <Slide>
        <SlidesDeck />
      </Slide>
    </Router>
  );
}

export default App;
