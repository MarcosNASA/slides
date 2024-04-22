import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import { PATH_TESTING_TROPHY } from '../constants'
import { useSlides, useKeyboardNavigation } from '../utils/hooks'

import {
  Img,
  SlideActions,
  SlideHeader,
  SlideLink,
  SlideList,
  SlideListItem,
  SlideSection,
  SlideSectionContent,
  SlideSectionHeader,
  SlideSectionSubtitle,
  SlideSectionTitle,
  SlideTitle,
} from './ui/Slide'

import testingTrophy from '../assets/testing-trophy.jpeg'
import testingTrophyWhy from '../assets/testing-trophy-why.png'

export const TestingTrophy = () => {
  const { nextSlide, previousSlide } = useSlides({
    path: PATH_TESTING_TROPHY,
    numberOfSlides: testingTrophySlides.length,
  })

  useKeyboardNavigation({ previousSlide, nextSlide })

  return (
    <>
      <SlideHeader>
        <SlideTitle>The Testing Trophy</SlideTitle>
      </SlideHeader>

      <SlideSection>
        <Routes>
          {testingTrophySlides.map((slide) => (
            <Route
              key={slide.id}
              path={`/slide/${slide.id}`}
              element={slide.getElement()}
            />
          ))}

          <Route element={<p role="alert">Oops, something went wrong</p>} />
        </Routes>
      </SlideSection>

      <SlideActions>
        <SlideLink to={previousSlide}>Atrás</SlideLink>
        <SlideLink to={nextSlide}>Siguiente</SlideLink>
      </SlideActions>
    </>
  )
}

const Introduction = () => (
  <>
    <SlideSectionHeader>
      <SlideSectionTitle>Introduction</SlideSectionTitle>
    </SlideSectionHeader>

    <SlideSectionContent>
      <section>
        <SlideSectionSubtitle>What this talk is not about</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>My own opinions 🤷🏼‍♂️</SlideListItem>
          <SlideListItem>Convincing anyone on doing anything ❌</SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>What this talk is about</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>
            <a href="https://testing-library.com/">Testing Library</a>'s
            opinions ♿️
            <SlideList>
              <SlideListItem>
                <a href="https://testing-library.com/docs/react-testing-library/intro">
                  Testing Trophy
                </a>{' '}
                🏆
              </SlideListItem>
              <SlideListItem>
                <a href="https://testingjavascript.com/">Testing JavaScript</a>{' '}
                course 🤓
              </SlideListItem>
            </SlideList>
          </SlideListItem>
          <SlideListItem>
            An attempt to explore how to add unit, integration and e2e tests to
            our apps 🧪
          </SlideListItem>
        </SlideList>
      </section>
    </SlideSectionContent>
  </>
)

const Premise = () => (
  <>
    <SlideSectionHeader>
      <SlideSectionTitle>Premise</SlideSectionTitle>
    </SlideSectionHeader>
    <SlideSectionContent isRow>
      <section>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Write tests. Not too many. Mostly integration.
          </p>
          &mdash; Guillermo Rauch (@rauchg){' '}
          <a href="https://twitter.com/rauchg/status/807626710350839808?ref_src=twsrc%5Etfw">
            December 10, 2016
          </a>
        </blockquote>
      </section>

      <section>
        <Img src={testingTrophy} width="400" />
      </section>
    </SlideSectionContent>
  </>
)

const WriteTests = () => (
  <>
    <SlideSectionHeader>
      <SlideSectionTitle>Why?</SlideSectionTitle>
    </SlideSectionHeader>
    <SlideSectionContent isRow>
      <section>
        <Img src={testingTrophyWhy} width="800" />
      </section>
    </SlideSectionContent>
  </>
)

const testingTrophySlides = [
  {
    id: 1,
    getElement: () => <Introduction />,
  },
  {
    id: 2,
    getElement: () => <Premise />,
  },
  {
    id: 3,
    getElement: () => <WriteTests />,
  },
]
