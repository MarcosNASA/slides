import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import { PATH_REACT_PATTERNS } from '../constants'
import { useSlides, useKeyboardNavigation } from '../utils/hooks'

import {
  SlideActions,
  SlideCode,
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

export const ReactPatterns = () => {
  const { nextSlide, previousSlide } = useSlides({
    path: PATH_REACT_PATTERNS,
    numberOfSlides: reactPatternsSlides.length,
  })

  useKeyboardNavigation({ nextSlide, previousSlide })

  return (
    <>
      <SlideHeader>
        <SlideTitle>React patterns</SlideTitle>
      </SlideHeader>

      <SlideSection>
        <Routes>
          {reactPatternsSlides.map((slide) => (
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
          <SlideListItem>Super deep dive 🤿</SlideListItem>
          <SlideListItem>My own opinions 🤷🏼‍♂️</SlideListItem>
          <SlideListItem>Convincing anyone on doing anything ❌</SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>What this talk is about</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>
            How to recognize the most common React patterns
            <SlideList>
              <SlideListItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kentcdodds.com/blog/how-to-give-rendering-control-to-users-with-prop-getters"
                >
                  Props getters
                </a>{' '}
                ♿️
              </SlideListItem>
              <SlideListItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reactjs.org/docs/render-props.html"
                >
                  Render props
                </a>{' '}
                🧩
              </SlideListItem>
              <SlideListItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kentcdodds.com/blog/compound-components-with-react-hooks"
                >
                  Compound components
                </a>{' '}
                📦
              </SlideListItem>
              <SlideListItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks"
                >
                  Reducer-based components
                </a>{' '}
                ♻️
              </SlideListItem>
            </SlideList>
          </SlideListItem>
          <SlideListItem>i bum dis shit</SlideListItem>
        </SlideList>
      </section>
    </SlideSectionContent>
  </>
)

const How = () => (
  <>
    <SlideSectionHeader>
      <SlideSectionTitle>How are we gonna do it?</SlideSectionTitle>
    </SlideSectionHeader>

    <SlideSectionContent>
      <section>
        <SlideSectionSubtitle>2-step process per pattern</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>Pattern description 📝</SlideListItem>
          <SlideListItem>Pattern example(s) 🔭</SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Study cases</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>Writing a counter. Workshop? 🛠</SlideListItem>
          <SlideListItem>`Shepphard.js` 🐑</SlideListItem>
        </SlideList>
      </section>
    </SlideSectionContent>
  </>
)

const PropsGettersIntro = () => (
  <>
    <SlideSectionHeader>
      <SlideSectionTitle>Props getters ♿️</SlideSectionTitle>
    </SlideSectionHeader>

    <SlideSectionContent>
      <section>
        <SlideSectionSubtitle>Getters</SlideSectionSubtitle>
        <p>Functions that get</p>
        <SlideCode>
          {`function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.getName = function() {
  return this.name
}
Person.prototype.getAge = function() {
  return this.age
}`}
        </SlideCode>
      </section>

      <section>
        <SlideSectionSubtitle>Props</SlideSectionSubtitle>
        <p>Components' parameters / React.createElement's second argument</p>
        <SlideCode>
          {`const Greet = ({ greeting }) =>
  return (
    <div>
      {greeting}
    </div>
  )
}

ReactDOM.render(<Component greeting="Hello" />, document.querySelector("#root"))

/* ReactDOM.render(React.createElement(Component, { greeting: "Hello" }), document.querySelector("#root")) */`}
        </SlideCode>
      </section>

      <section>
        <SlideSectionSubtitle>Props getters</SlideSectionSubtitle>
        <p>Getters for props</p>
        <SlideCode>
          {`
const getComponentProps = (overrides) => ({
  ...MY_COMPONENT_AWESOME_DEFAULT_PROPS,
  ...overrides
})

const Component = () => 
  <div {...getComponentProps()}>Hi</div>`}
        </SlideCode>
      </section>
    </SlideSectionContent>
  </>
)

const PropsGetters = () => (
  <>
    <SlideSectionHeader>
      <SlideSectionTitle>Props getters ♿️</SlideSectionTitle>
    </SlideSectionHeader>

    <SlideSectionContent>
      <section>
        <SlideSectionSubtitle>Utility</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>Giving API consumers the right defaults</SlideListItem>
          <SlideList>
            <SlideListItem>Accessibility attributes</SlideListItem>
            <SlideListItem>Styles</SlideListItem>
          </SlideList>
          <SlideListItem>Registration</SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Examples</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codesandbox.io/s/dead-simple-modal-z9co8s"
            >
              Right defaults: Dead-simple headless modal
            </a>
          </SlideListItem>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MarcosNASA/useFormReducer"
            >
              Registration: `use-form-reducer`
            </a>
          </SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Real world examples</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://react-table.tanstack.com/"
            >
              Right defaults: React Table
            </a>
          </SlideListItem>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://react-hook-form.com/api/useform"
            >
              Registration: React Hook Form
            </a>
          </SlideListItem>
        </SlideList>
      </section>
    </SlideSectionContent>
  </>
)

const RenderProps = () => (
  <>
    <SlideSectionHeader>
      <SlideSectionTitle>Render props 🧩</SlideSectionTitle>
    </SlideSectionHeader>

    <SlideSectionContent>
      <section>
        <SlideSectionSubtitle>Utility</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gist.github.com/MarcosNASA/e5d27bbdfd13b5164d5a5d921051cee3"
            >
              Inversion of control
            </a>
          </SlideListItem>
          <SlideList>
            <SlideListItem>UI (Slots)</SlideListItem>
            <SlideListItem>Logic</SlideListItem>
          </SlideList>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Examples</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>Slots: Renta paywall</SlideListItem>
          <SlideListItem>Logic: Invoicing</SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Real world examples</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              Slots: Rekt.js
            </a>
          </SlideListItem>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/downshift-js/downshift/blob/master/src/downshift.js#L1200"
            >
              Logic: Downshift
            </a>
          </SlideListItem>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://v5.reactrouter.com/web/api/Route/route-render-methods"
            >
              React Router
            </a>
          </SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Tip</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>Don't be afraid of `children` 👶🏿</SlideListItem>
        </SlideList>
      </section>
    </SlideSectionContent>
  </>
)

const CompoundComponents = () => (
  <>
    <SlideSectionHeader>
      <SlideSectionTitle>Compound components 📦</SlideSectionTitle>
    </SlideSectionHeader>

    <SlideSectionContent>
      <section>
        <SlideSectionSubtitle>What</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select"
            >
              Components tightly coupled wich share state implicitly
            </a>
          </SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Utility</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>Declarative APIs</SlideListItem>
          <SlideList>
            <SlideListItem>Beautiful to use</SlideListItem>
            <SlideListItem>Beautiful (and hard-ish) to write</SlideListItem>
          </SlideList>
          <SlideListItem>Crazy powerful</SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Examples</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>Questionnaire</SlideListItem>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MarcosNASA/useComponentSelfRegistration"
            >
              `useComponentSelfRegistration`
            </a>
          </SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Real world examples</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reach.tech/"
            >
              Reach UI
            </a>
          </SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>"Quick" comparison</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>
            <a href="https://codesandbox.io/s/declarative-vs-data-driven-api-ciejk">
              Side by side
            </a>
          </SlideListItem>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codesandbox.io/s/data-driven-stepper-w0wcx"
            >
              Data-driven Stepper
            </a>
          </SlideListItem>
          <SlideListItem>Compound Stepper</SlideListItem>
          <SlideList>
            <SlideListItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codesandbox.io/s/basic-compound-components-stepper-bj48y"
              >
                Level 1
              </a>
            </SlideListItem>
            <SlideListItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codesandbox.io/s/basic-compound-components-stepper-content-based-id-exj2e"
              >
                Level 2
              </a>
            </SlideListItem>
            <SlideListItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codesandbox.io/s/self-registering-stepper-y0qzw"
              >
                Level 3
              </a>
            </SlideListItem>
            <SlideListItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codesandbox.io/s/self-registering-stepper-y0qzw"
              >
                Level 4
              </a>
            </SlideListItem>
          </SlideList>
        </SlideList>
      </section>
    </SlideSectionContent>
  </>
)

const ReducerBasedComponents = () => (
  <>
    <SlideSectionHeader>
      <SlideSectionTitle>Reducer-based components ♻️</SlideSectionTitle>
    </SlideSectionHeader>

    <SlideSectionContent>
      <section>
        <SlideSectionSubtitle>What</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/docs/hooks-reference.html#usereducer"
            >
              useReducer
            </a>
          </SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Utility</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>Inversion of control</SlideListItem>
          <SlideListItem>One component, many behaviours</SlideListItem>
          <SlideList>
            <SlideListItem>
              Open for extensions, closed for modifications
            </SlideListItem>
          </SlideList>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Examples</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codesandbox.io/s/reducer-based-accordion-gn5jfw?file=/src/App.js"
            >
              Reducer-based headless accordion
            </a>
          </SlideListItem>
        </SlideList>
      </section>

      <section>
        <SlideSectionSubtitle>Real world examples</SlideSectionSubtitle>
        <SlideList>
          <SlideListItem>I don't really know many...</SlideListItem>
        </SlideList>
      </section>
    </SlideSectionContent>
  </>
)

const reactPatternsSlides = [
  {
    id: 1,
    getElement: () => <Introduction />,
  },
  {
    id: 2,
    getElement: () => <How />,
  },
  {
    id: 3,
    getElement: () => <PropsGettersIntro />,
  },
  {
    id: 4,
    getElement: () => <PropsGetters />,
  },
  {
    id: 5,
    getElement: () => <RenderProps />,
  },
  {
    id: 6,
    getElement: () => <CompoundComponents />,
  },
  {
    id: 7,
    getElement: () => <ReducerBasedComponents />,
  },
]
