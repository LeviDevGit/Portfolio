'use client'

import { scroller } from 'react-scroll'

export const scrollToContact = () => {
  scroller.scrollTo('myScrollToElement', {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: 50, // Scrolls to element + 50 pixels down the page
    // ... other options
  })
}
