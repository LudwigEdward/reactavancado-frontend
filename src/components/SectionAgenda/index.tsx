import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'
import Parser from 'html-react-parser'

import * as S from './styles'
import { SectionAgendaProps } from 'types/api'

type Props = {
  sectionAgenda: SectionAgendaProps
}

const SectionAgenda = ({ sectionAgenda }: Props) => (
  <Container id="agenda">
    <Heading reverseColor>{sectionAgenda.title}</Heading>
    <S.Text>{Parser(sectionAgenda.description)}</S.Text>
  </Container>
)

export default SectionAgenda
