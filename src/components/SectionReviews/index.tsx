import React from 'react'
import Slider from 'react-slick'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import reviews from './content'
import * as S from './styles'
import { SectionReviewsProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

type Props = {
  sectionReviews: SectionReviewsProps
}
const SectionReviews = ({ sectionReviews }: Props) => (
  <Container>
    <Heading reverseColor>{sectionReviews.title}</Heading>

    <S.Content>
      <Slider {...settings}>
        {sectionReviews.reviews.map(({ name, photo, text }, index) => (
          <ReviewCard
            key={index}
            name={name}
            image={getImageUrl(
              photo ? photo.url : '/uploads/reviewer_17f000c1cd.jpeg'
            )}
            description={text}
            id={index}
          />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
