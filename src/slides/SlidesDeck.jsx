import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import {
  PATH_TESTING_TROPHY,
  PATH_REACT_PATTERNS,
  PATH_COMPOUND_TESTING,
} from '../constants'

import { NavBar, SlideLink } from './ui/Slide'

import { TestingTrophy } from './TestingTrophy'
import { ReactPatterns } from './ReactPatterns'
import { CompoundTesting } from './CompoundTesting'

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
              <SlideLink to={PATH_COMPOUND_TESTING}>Compound Testing</SlideLink>
            </NavBar>
          }
        />
        <Route path={`${PATH_TESTING_TROPHY}/*`} element={<TestingTrophy />} />
        <Route path={`${PATH_REACT_PATTERNS}/*`} element={<ReactPatterns />} />
        <Route
          path={`${PATH_COMPOUND_TESTING}/*`}
          element={<CompoundTesting />}
        />
      </Routes>
    </>
  )
}

export { SlidesDeck }
