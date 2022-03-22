import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PATH_TESTING_TROPHY, PATH_REACT_PATTERNS } from '../constants';

import { NavBar, SlideLink } from './ui/Slide';

import { TestingTrophy } from './TestingTrophy';
import { ReactPatterns } from './ReactPatterns';

const SlidesDeck = () => {
  return (
    <>
      <Switch>
        <Route path={PATH_TESTING_TROPHY} component={TestingTrophy}></Route>
        <Route path={PATH_REACT_PATTERNS} component={ReactPatterns}></Route>

        <NavBar>
          <SlideLink to={PATH_TESTING_TROPHY}>Testing Trophy</SlideLink>
          <SlideLink to={PATH_REACT_PATTERNS}>React patterns</SlideLink>
        </NavBar>
      </Switch>
    </>
  );
};

export { SlidesDeck };
