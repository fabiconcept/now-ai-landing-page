import React from 'react'

import BookCallPage from '../client-page-content/BookCallPage'
import { bookCallMetadata } from '@/constants/metadata'

export const metadata = bookCallMetadata

export default function page() {
  return (
    <BookCallPage />
  )
}
