import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'
import Parser from 'html-react-parser'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'

type Props = {
  pricingBox: PricingBoxProps
}

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({ pricingBox }: Props) => {
  return (
    <S.Box>
      <S.Prices>
        <S.FullPrice>
          De <span>R${pricingBox.totalPrice}</span> por apenas
        </S.FullPrice>
        <S.DiscountPrice>
          <span>{pricingBox.numberInstallments}x de</span> R$
          {pricingBox.priceInstallment}
        </S.DiscountPrice>
      </S.Prices>
      <S.BenefitsList>{Parser(pricingBox.benefits)}</S.BenefitsList>

      <Button href={pricingBox.button.url} onClick={onClick} withPrice>
        <p>Comprar o curso</p>
        <div>
          <S.ButtonFullPrice>R${pricingBox.totalPrice}</S.ButtonFullPrice>
          <S.ButtonDiscountPrice>
            R${pricingBox.numberInstallments * pricingBox.priceInstallment}
          </S.ButtonDiscountPrice>
        </div>
      </Button>
    </S.Box>
  )
}

export default PricingBox
