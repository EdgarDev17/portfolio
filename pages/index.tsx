import Title from '../components/Title'
import P from '../components/P'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SolidButton from '../components/buttons/SolidButton'
import ProjectCard from '../components/ProjectCard'
import ProjectsApi from '../tools/projects'
import { ReactNode } from 'react'
import ContactForm from '../components/ContactForm'
import Head from 'next/head'

export default function Home() {
    const handleRenderProjects = (): ReactNode => {
        return ProjectsApi.map((item) => {
            return (
                <ProjectCard
                    key={item.id}
                    imageUrl={item.imgUrl}
                    title={item.title}
                    githubLink={item.github}
                    description={item.description}
                    tags={item.technologies}
                    websiteLink={item.websiteLink}
                />
            )
        })
    }

    return (

        // contenedor principal
        <div className="w-full lg:mx-auto lg:h-screen lg:w-11/12">
            <Head>
                <title>EdgarDev</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section className="flex w-full flex-col lg:h-5/6 lg:flex-row lg:items-center lg:justify-center ">
                <div className="">
                    <Title color="blue">Edgardo Rodríguez</Title>
                    <h2 className="mt-5 text-3xl font-semibold text-slate-700 lg:text-7xl">
                        I build awesome web apps
                    </h2>
                    <div className={'lg:hidden'}>
                        <motion.div
                            animate={{ y: [0, 50, 0] }}
                            transition={{ repeat: Infinity, duration: 7 }}
                        >
                            <Image
                                src="/group72.svg"
                                width={800}
                                height={800}
                                alt="image"
                            />
                        </motion.div>
                    </div>

                    <div className="mt-10 mb-20 lg:w-3/5">
                        <P lgmt={3} mt={12}>
                            Hey there!{' '}
                            <span className="font-semibold text-blue-500">
                                I am a software engineer
                            </span>{' '}
                            specializing on building better digital experiences.
                            Now Im focusing on building accesible, responsive,
                            scalable and awesome web apps. Come and lets build
                            awesome software and resolve problems!
                        </P>
                    </div>

                    <SolidButton label={'About me'} />
                </div>
                <div className="hidden lg:block">
                    <motion.div
                        animate={{ y: [0, 50, 0] }}
                        transition={{ repeat: Infinity, duration: 7 }}
                    >
                        <Image
                            src="/group72.svg"
                            width={800}
                            height={800}
                            alt="image"
                        />
                    </motion.div>
                </div>
            </section>

            <section
                id="about"
                className={
                    'my-5 flex h-5/6 flex-col items-center justify-center lg:flex-row'
                }
            >
                <div className="w-full text-justify">
                    <h2 className={'text-3xl font-semibold text-blue-500'}>
                        About me
                    </h2>
                    <div className="lg:w-1/2">
                        <P mt={5}>
                            Hello! if you’re here it’s because you’re looking
                            for a web engineer who likes to work in a team,
                            collaborate, listen to ideas from other people in a
                            team and who doesnt stop learning every day. you’re
                            in the{' '}
                            <span className="text-blue-500">right site</span>.
                        </P>

                        <P mt={3}>
                            I’ve been creating web software about 3 years, Ive
                            been learning best practices, unit testing,
                            debbuging, CI/CD, git and more! Some technologies I
                            enjoy work with include{' '}
                            <span className="text-blue-500">
                                React JS, Next Js, TypeScript, TailwindCSS and
                                Mongo DB.
                            </span>
                        </P>
                    </div>
                </div>

                <Image
                    src="/landing.svg"
                    alt="image"
                    width={800}
                    height={800}
                />
            </section>

            <section className={'my-32'}>
                <h2 className={'text-3xl font-semibold text-blue-500'}>
                    Projects I have built
                </h2>

                <div className={'mt-16'}>{handleRenderProjects()}</div>
            </section>

            <section className={'mt-52 h-96'}>
                <ContactForm />
            </section>
        </div>
    )
}
