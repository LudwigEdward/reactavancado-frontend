import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'
import Parser from 'html-react-parser'

import faq from './content'
import * as S from './styles'
import { SectionFaqProps } from 'types/api'

type Props = {
  sectionFaq: SectionFaqProps
}

const SectionFaq = ({ sectionFaq }: Props) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{sectionFaq.title}</Heading>

        <S.Questions>
          {sectionFaq.questions.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              {Parser(answer)}
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom>Eu tenho outra dúvida!</Heading>
          <p>
            Sem problemas! Você pode acessar qualquer uma das{' '}
            <a
              href="https://willianjusten.com.br/about"
              target="_blank"
              rel="noreferrer"
            >
              minhas redes sociais
            </a>{' '}
            ou entrar no{' '}
            <a
              href="https://slack-willianjusten.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              slack do nosso curso.
            </a>
          </p>
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
