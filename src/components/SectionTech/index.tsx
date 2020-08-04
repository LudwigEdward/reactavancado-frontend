import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import icons from './content'
import * as S from './styles'
import { sectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  sectionTech: sectionTechProps
}

const SectionTech = ({ sectionTech }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{sectionTech.title}</Heading>
      <S.IconsContainer>
        {sectionTech.techIcons.map(({ title, icon }) => (
          <S.Icon key={title}>
            <S.Icons src={getImageUrl(icon.url)} alt={title} loading="lazy" />
            <S.IconsName>{icon.alternativeText}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
