import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  imageUrl: string
  title: string
  description: string
  tags: string[]
  githubLink: string
  websiteLink: string
}

const ProjectCard = (data: Props) => {
  let id = 0;

  const tags = (): ReactNode => {
    return data.tags.map(item => {
      return <p key={id + 1}>{item}</p>;
    });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,

        transition: { duration: 0.5 }
      }}
      className="flex items-center justify-evenly border rounded-md my-3 hover:border-blue-500">
      <div>
        <Image src={data.imageUrl} alt="project preview" height={350} width={350} />
      </div>

      <div className="w-1/2">
        <p className={"text-xl font-semibold text-blue-500"}>{data.title}</p>
        <p className={"text-justify mt-3"}>{data.description}</p>

        <div className={"mt-5 flex gap-8 text-blue-800"}>
          {tags()}
        </div>

        <div className={"mt-5 flex gap-5"}>
          <a href={data.githubLink}>
            <Image src={"/github.svg"} alt={"github Link"} height={32} width={32} />
          </a>
        </div>

      </div>
    </motion.div>);
};


export default ProjectCard;