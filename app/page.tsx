import { homeMetadata } from '@/constants/metadata'
import React from 'react'
import HomePage from './client-page-content/HomePage'

export const metadata = homeMetadata 

export default function Home() {
  return (
    <HomePage/>
  )
}
