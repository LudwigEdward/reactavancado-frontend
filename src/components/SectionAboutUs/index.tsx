import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import content from './content'
import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  sectionAboutUs: SectionAboutUsProps
}

const SectionAboutUs = ({ sectionAboutUs }: Props) => (
  <Container>
    <Heading reverseColor>{sectionAboutUs.title}</Heading>

    <S.Content>
      {sectionAboutUs.authors.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          image={getImageUrl(profile.photo.url)}
          socialLinks={profile.socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
