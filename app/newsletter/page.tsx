import React from 'react'
import { newsletterMetadata } from '@/constants/metadata'
import NewsletterPage from '../client-page-content/NewsletterPage'

export const metadata = newsletterMetadata

export default function Newsletter() {
  return (
    <NewsletterPage />
  )
}
