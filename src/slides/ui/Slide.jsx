import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors, font, desktop, tablet } from './theme'

export const NavBar = styled.nav`
  grid-area: 1 / 1 / 3 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  height: 100%;
`
NavBar.displayName = 'NavBar'

export const Slide = styled.article`
  display: grid;
  grid-template-rows: auto 1fr 30px;
  grid-template-columns: 1fr;
  gap: 20px;
  min-height: 100vh;
  width: 100vw;
  margin: auto;
  padding: 21px;
  border: 2px solid ${colors.dark[100]};

  ${tablet} {
    padding: 42px 78px;
    height: 100vh;
  }
`
Slide.displayName = 'Slide'

export const SlideLink = styled(Link)`
  color: ${colors.dark[100]};
  font-size: ${font.small};
  text-decoration: none;

  :hover {
    color: ${colors.yellow};
  }

  ${tablet} {
    font-size: ${font.large};
  }

  ${desktop} {
    font-size: ${font.larger};
  }
`
SlideLink.displayName = 'SlideLink'

export const SlideHeader = styled.header``
SlideHeader.displayName = 'SlideHeader'

export const SlideTitle = styled.h1`
  margin-bottom: 9px;
  font-size: ${font.small};

  ${tablet} {
    margin-bottom: 18px;
    font-size: ${font.larger};
  }

  ${desktop} {
    font-size: ${font.largest};
  }
`
SlideTitle.displayName = 'SlideTitle'

export const SlideSubitle = styled.h2`
  margin-bottom: 9px;
  font-size: ${font.normal};

  :last-child {
    margin-bottom: 0;
  }

  ${tablet} {
    margin-bottom: 18px;
  }

  ${desktop} {
    font-size: ${font.larger};
  }
`
SlideSubitle.displayName = 'SlideSubitle'

export const SlideSection = styled.section`
  overflow: auto;

  :last-child {
    margin-bottom: 0;
  }

  section:not(:last-child) {
    margin-bottom: 30px;
  }
`
SlideSection.displayName = 'SlideSection'

export const SlideSectionHeader = styled.header`
  margin-bottom: 18px;
`
SlideSectionHeader.displayName = 'SlideSectionHeader'

export const SlideSectionTitle = styled.h3`
  font-size: ${font.normal};
  margin-bottom: 18px;

  ${desktop} {
    font-size: ${font.larger};
  }
`
SlideSectionTitle.displayName = 'SlideSectionTitle'

export const SlideSectionSubtitle = styled.h4`
  margin-bottom: 12px;
  font-size: ${font.smaller};
  font-weight: ${font.weight.bold};
  text-decoration: underline;

  :last-child {
    margin-bottom: 0;
  }

  ${desktop} {
    font-size: ${font.normal};
  }
`
SlideSectionSubtitle.displayName = 'SlideSectionSubtitle'

export const SlideSectionContent = styled.div`
  display: flex;
  flex-direction: ${({ isRow }) => (isRow ? 'row' : 'column')};
  justify-content: space-around;
  font-size: ${font.smaller};
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0;
  }

  > * {
    white-space: pre-line;
  }

  a,
  code,
  p,
  pre {
    margin-bottom: 9px;
    font-size: ${font.smaller};
  }

  ${tablet} {
    font-size: ${font.normal};

    a,
    code,
    p,
    pre {
      font-size: ${font.small};
    }
  }

  ${desktop} {
    font-size: ${font.large};

    a,
    code,
    p,
    pre {
      font-size: ${font.large};
    }
  }
`
SlideSectionContent.displayName = 'SlideSectionContent'

export const SlideList = styled.ul`
  margin-left: 30px;
  padding: 0;
  list-style: ${({ bullet }) => bullet || 'disc'};

  ul {
    margin-top: 9px;
    :not(:last-child) {
      margin-bottom: 9px;
    }
  }
`
SlideList.displayName = 'SlideList'

export const SlideListItem = styled.li`
  margin: 0 0 9px;
  padding: 0;

  :last-child {
    margin-bottom: 0;
  }

  p {
    :not(:last-child) {
      margin-bottom: 9px;
    }
  }
`
SlideListItem.displayName = 'SlideListItem'

export const SlideSectionItem = styled.div`
  margin-bottom: 18px;

  :last-child {
    margin: 0;
  }
`

export const SlideActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
SlideActions.displayName = 'SlideActions'

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  place-items: center;
  gap: 10px;
`

export const Img = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;

  :last-child {
    margin: 0;
  }
`

export const SlideCode = ({ children }) => (
  <code>
    <pre>{children}</pre>
  </code>
)
