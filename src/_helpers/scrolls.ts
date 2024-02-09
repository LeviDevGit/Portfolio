'use client'

import { scroller } from 'react-scroll'

const scrollToContact = () => {
  scroller.scrollTo('myScrollToElement', {
    duration: 1500,
    delay: 100,
    smooth: true,
  })
}
const scrollToProjects = () => {
  scroller.scrollTo('myScrollToProjects', {
    duration: 1500,
    delay: 100,
    smooth: true,
  })
}

const scrollToAboutMe = () => {
  scroller.scrollTo('myScrollToAboutMe', {
    duration: 1500,
    delay: 100,
    smooth: true,
  })
}

export { scrollToContact, scrollToProjects, scrollToAboutMe }
