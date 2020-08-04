import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import content from './content'
import * as S from './styles'
import { SectionConceptsProps } from 'types/api'

type Props = {
  sectionConcepts: SectionConceptsProps
}

const SectionConcepts = ({ sectionConcepts }: Props) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{sectionConcepts.title}</Heading>
      <S.List>
        {sectionConcepts.concepts.map((concept, index: number) => (
          <S.Item key={index}>{concept.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
