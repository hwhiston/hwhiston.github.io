export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

import idea from '/images/journey/idea.jpg';
import studying from '/images/journey/studying.jpg';
import graduation from '/images/journey/graduation.jpg';
import softwareDeveloper from '/images/journey/software-developer.jpg';
import gaming from '/images/journey/gaming.jpg';
import rocketLogo from '/images/journey/rocket-logo.jpg';

const journeyTimeline: JourneyItem[] = [
  {
    year: '2007',
    title: 'First Steps in Computer Science',
    description:
      'Took my first computer science course in high school, learning Visual Basic and discovering a passion for programming and technology.',
    image: idea,
  },
  {
    year: '2010',
    title: 'Started University – Game Development Focus',
    description:
      'Began my Honours BSc in Computer Science (Game Development) at the University of Windsor, inspired by a love of games, music, and creative writing.',
    image: studying,
  },
  {
    year: '2012',
    title: 'Co-op Experience',
    description:
      'Learned Java and C#, and completed my first co-op placement at Windsor Mold Group, developing internal tools and automation with Excel VBA and C# for the Tooling Division.',
    image: studying,
  },
  {
    year: '2013',
    title: 'Industry Experience & Personal Growth',
    description:
      'Focused on co-op work, gaining valuable real-world experience and building confidence as a developer.',
    image: softwareDeveloper,
  },
  {
    year: '2014',
    title: 'Game Development & Competitive Gaming',
    description:
      'Worked with the Unity game engine and continued to develop programming skills. Became involved in competitive gaming and started attending local tournaments.',
    image: gaming,
  },
  {
    year: '2016',
    title: 'Graduation & New Horizons',
    description:
      'Completed my undergraduate degree and was accepted into the MSc in Computer Science program at the University of Windsor, specializing in software engineering. The focus of my thesis was on pathfinding AI.',
    image: graduation,
  },
  {
    year: '2018',
    title: 'MSc Graduation & First Full-Time Role',
    description:
      'Graduated and joined Scribendi as a Front-End Developer, supporting a global team of editors with web application development. Reached a milestone of financial independence, including reliable transportation.',
    image: softwareDeveloper,
  },
  {
    year: '2020–2022',
    title: 'New Beginnings at Rocket Innovation Studio',
    description:
      'Joined Rocket Innovation Studio (RIS) as an Associate Software Developer, adapting to remote work and independent living. Promoted to Software Developer and contributed to a variety of web projects and internal tools for Edison and RIS partners.',
    image: rocketLogo,
  },
  {
    year: '2022–2023',
    title: 'Growth at RIS',
    description:
      'Worked at RIS with the Rocket Mortgage team, using AWS, Node, Angular, and Sitecore to build and maintain web platforms.',
    image: rocketLogo,
  },
  {
    year: '2024–Present',
    title: 'Working with Partners',
    description:
      'At RIS, I focus on React, Node, and C# to deliver and support modern web solutions for RocketPro and its partners. I continue to grow my skills while contributing to a collaborative, innovative environment.',
    image: rocketLogo,
  },
  {
    year: '2025',
    title: 'Portfolio Launch & Looking Forward',
    description:
      'Launched my personal portfolio website to showcase my journey, projects, and growth as a developer. I continue to learn, create, and support others in the tech community.',
    image: idea,
  },
];

export default journeyTimeline;
