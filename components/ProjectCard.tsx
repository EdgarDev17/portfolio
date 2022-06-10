import Image from 'next/image'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
    imageUrl: string
    title: string
    description: string
    tags: string[]
    githubLink: string
    websiteLink: string
}

const ProjectCard = (data: Props) => {
    let id = 0

    const tags = (): ReactNode => {
        return data.tags.map((item) => {
            return <p key={id + 1}>{`${item}, `}</p>
        })
    }

    return (
        <motion.div
            whileHover={{
                scale: 1.05,

                transition: { duration: 0.5 },
            }}
            className="my-3 flex flex-col items-center justify-evenly rounded-md border hover:border-blue-500 lg:flex-row"
        >
            <div>
                <Image
                    src={data.imageUrl}
                    alt="project preview"
                    height={350}
                    width={350}
                />
            </div>

            <div className="w-full lg:w-1/2">
                <p className={'mt-5 text-xl font-semibold text-blue-500'}>
                    {data.title}
                </p>
                <p className={'mt-3 text-justify'}>{data.description}</p>

                <div
                    className={
                        'mt-5 flex flex-wrap gap-1 text-blue-800 lg:gap-8'
                    }
                >
                    {tags()}
                </div>

                <div className={'mt-5 flex gap-5'}>
                    <a href={data.githubLink}>
                        <Image
                            src={'/github.svg'}
                            alt={'github Link'}
                            height={32}
                            width={32}
                        />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
