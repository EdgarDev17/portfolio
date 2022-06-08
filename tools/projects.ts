type Projects = {
  id: number
  imgUrl: string
  title: string
  description: string
  technologies: string[]
  github: string
  websiteLink: string
}


const ProjectsApi: Projects[] =
  [
    {
      id: 1,
      title: "Meet Up: Group video calls",
      imgUrl: "/meetup.png",
      description: "You can create groups to video calls. This web app have built in NextJS and Twilio Api.",
      technologies: ["Next JS", "Javascript", "Twilio", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/EdgarDev17/google-meetup",
      websiteLink: "test"
    },
    {
      id: 2,
      title: "Weather Up: Mobile Web App",
      imgUrl: "/weather.png",
      description: "You can create groups to video calls. This web app have built in NextJS and Twilio Api.",
      technologies: ["Next JS", "TypeScript", "TailwindCSS", "Framer Motion", "WeatherApi"],
      github: "https://github.com/EdgarDev17/weather-app",
      websiteLink: "test"
    },
    {
      id: 3,
      title: "Spotify Profile: Desktop Web App",
      imgUrl: "/spotify-ui.png",
      description: "You can check your profile out! You can check your top tracks, top artist, top albums and share and story for your social media.",
      technologies: ["Next JS", "TypeScript", "TailwindCSS", "Framer Motion", "WeatherApi"],
      github: "https://github.com/EdgarDev17/spotify-music-app",
      websiteLink: "test"
    }
  ];


export default ProjectsApi;