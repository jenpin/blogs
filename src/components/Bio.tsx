import React from 'react'
import styled from 'styled-components'

import styles from '../styles'

const Container = styled.div`
  color: ${styles.color.grey};
  margin-bottom: 16px;

  &:hover {
    --title-size: 1.2;
  }

  @media only screen and (min-width: ${styles.width.medium}) {
    margin-bottom: 24px;
  }
`

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 3.2rem;
  margin-bottom: 8px;

  transition: transform 180ms cubic-bezier(0.16, 0.79, 0.71, 1.99);
  transform: scale(var(--title-size));
  transform-origin: 0 50%;
`

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
`

const Highlight = styled.span`
  background-color: ${styles.color.orange};
  padding: 2px 4px;
  color: white;
  border-radius: 4px;
  font-size: 1.4rem;
  white-space: nowrap;
`

const Bio = () => (
  <Container>
    <Title>Hi, I'm Jen 👋</Title>
    <Description>
      The first impression I want you to have of me is that of a budget
      traveller. I work, O yes I do! But nothing beats the thrill of finding a
      bargain especially in a foreign country. I migrated to Melbourne three
      years ago and Melbourne has taught me a very important lesson. The best
      things in life are indeed free!!
    </Description>
  </Container>
)

export default Bio
