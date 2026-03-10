interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Horn of Africa Situation Room',
    description: `A Python-based early warning and humanitarian analytics system that monitors conflict incidents, refugee flows from South Sudan to Gambella, and generates risk scores and weekly diplomatic situation briefs.`,
    imgSrc: '/static/images/ssudan_to_gambella_arrivals.png',
    href: 'https://github.com/kogilo/horn-of-africa-situation-room/blob/master/notebooks/01_situation_room.ipynb',
  },
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
