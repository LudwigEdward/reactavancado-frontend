import React from 'react'
import Parser from 'html-react-parser'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import content from './content'
import * as S from './styles'
import { SectionModulesProps } from 'types/api'

type Props = {
  sectionModules: SectionModulesProps
}
const SectionModules = ({ sectionModules }: Props) => (
  <Container>
    <Heading reverseColor>{sectionModules.title}</Heading>

    <S.Content>
      {sectionModules.modules.map(({ title, description, subtitle }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div>{Parser(description)}</div>
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
