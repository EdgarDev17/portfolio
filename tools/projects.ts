type Projects = {
  title: String
  description: String
  technologies: string[]
  github: string
}


const ProjectsApi: Projects[] =
  [
    {
      title: "Meet Up: Group video calls",
      description: "You can create groups to video calls. This web app have built in NextJS and Twilio Api.",
      technologies: ["Next JS, Javascript", "Twilio", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/EdgarDev17/google-meetup"
    }
  ];


export default ProjectsApi