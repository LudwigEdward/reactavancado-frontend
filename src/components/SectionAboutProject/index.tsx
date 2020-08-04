import React from 'react'
import Parser from 'html-react-parser'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { AboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  sectionAboutProject: AboutProjectProps
}

const SectionAboutProject = ({ sectionAboutProject }: Props) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Container>
          <S.Image>
            <source
              srcSet={getImageUrl(sectionAboutProject.image.url)}
              type="image/webp"
            />
            <source
              srcSet={getImageUrl(sectionAboutProject.image.url)}
              type="image/png"
            />
            <img
              src={getImageUrl(sectionAboutProject.image.url)}
              loading="lazy"
              alt={sectionAboutProject.image.alternativeText}
            />
            {console.log(sectionAboutProject)}
          </S.Image>
          <div>
            <Heading>{sectionAboutProject.title}</Heading>
            <S.Text>{Parser(sectionAboutProject.description)}</S.Text>
          </div>
        </S.Container>
      </Container>
    </S.Wrapper>
  )
}

export default SectionAboutProject
