import Image from "next/image";
import {motion} from 'framer-motion'

type Props = {
  imageUrl: string
  title: string
  description: string
  tags: string[]
  githubLink: string
  websiteLink: string
}

const ProjectCard = () => {

  return (
    <motion.div
      whileHover={{
        scale: 1.05,

        transition: { duration: 0.5 },
      }}
      className="flex items-center justify-evenly border rounded-md my-3 hover:border-blue-500">
      <div>
        <Image src="/meetup.png" alt="project preview" height={350} width={350} />
      </div>

      <div className="w-1/2">
        <p className={'text-xl font-semibold text-blue-500'}>Titulo del proyecto</p>
        <p className={'text-justify mt-3'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, assumenda aut deleniti, deserunt dolore et
          fugiat illo magni minima, nam natus nulla perferendis placeat quas ratione repellat similique unde vel?</p>

        <div className={'mt-5 flex gap-8 text-blue-800'}>
          <p>Next JS</p><p>TypeScript</p><p>TailwindCSS</p><p>Framer Motion</p><p>React JS</p>
        </div>

        <div className={'mt-5 flex gap-5'}>
          <Image src={'/github.svg'} alt={'github Link'} height={32} width={32}/>
        </div>

      </div>
    </motion.div>);
};


export default ProjectCard;