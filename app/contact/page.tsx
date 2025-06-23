import { contactMetadata } from '@/constants/metadata'
import React from 'react'
import ContactPage from '../client-page-content/ContactPage'

export const metadata = contactMetadata

export default function Contact() {
  return (
    <ContactPage />
  )
}
