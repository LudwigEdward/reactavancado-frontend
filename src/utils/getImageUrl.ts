import { processEnv } from 'next/dist/lib/load-env-config'

export const getImageUrl = (url: string) =>
  `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
