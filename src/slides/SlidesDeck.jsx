import { Route, Routes } from 'react-router-dom'

import { PATH_TESTING_TROPHY, PATH_REACT_PATTERNS } from '../constants'

import { NavBar, SlideLink } from './ui/Slide'

import { TestingTrophy } from './TestingTrophy'
import { ReactPatterns } from './ReactPatterns'

const SlidesDeck = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <NavBar>
              <SlideLink to={PATH_TESTING_TROPHY}>Testing Trophy</SlideLink>
              <SlideLink to={PATH_REACT_PATTERNS}>React patterns</SlideLink>
            </NavBar>
          }
        />
        <Route path={`${PATH_TESTING_TROPHY}/*`} element={<TestingTrophy />} />
        <Route path={`${PATH_REACT_PATTERNS}/*`} element={<ReactPatterns />} />
      </Routes>
    </>
  )
}

export { SlidesDeck }
