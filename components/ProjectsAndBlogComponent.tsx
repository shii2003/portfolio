import React from 'react';
import ProjectCard from './ProjectCard';
import BlogCard from './BlogCard';

type ProjectsAndBlogComponentProps = {

};

const ProjectsAndBlogComponent: React.FC<ProjectsAndBlogComponentProps> = () => {

    return (
        <div className="flex flex-col items-center justify-center ">
            <div
                id='projects'
                className="flex items-center text-lg px-2 py-2 font-semibold border-b w-full border-neutral-700">
                PROJECTS
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 mb-6  justify-center items-center">
                <ProjectCard
                    repoImageSrc="/repo-image.png"
                    techLogos={[
                        { src: "/Nodejs.svg", alt: "Node.js" },
                        { src: "/next-js.svg", alt: "Next.js" },
                        { src: "/TailwindCSS.svg", alt: "Tailwind CSS" },
                        { src: "/postgresql.svg", alt: "PostgreSQL" },
                        { src: "/redis.svg", alt: "Redis" },
                        { src: "/redux.svg", alt: "Redux" },
                        { src: "/typescript.svg", alt: "Typescript" },
                    ]}
                    title='Temulate'
                    details={[
                        "Real-time Collaboration Tool",
                        "Next.js + Node + PostgreSQL",
                    ]}
                />

                <ProjectCard
                    repoImageSrc="/repo-image.png"
                    techLogos={[
                        { src: "/next-js.svg", alt: "Next.js" },
                        { src: "/TailwindCSS.svg", alt: "Tailwind CSS" },
                        { src: "/eth.svg", alt: "Ethereum" },

                    ]}
                    title='Temulate'
                    details={[
                        "Real-time Collaboration Tool",
                        "Next.js + Node + PostgreSQL",
                    ]}
                />

                <ProjectCard
                    repoImageSrc="/repo-image.png"
                    techLogos={[
                        { src: "/Nodejs.svg", alt: "Node.js" },
                        { src: "/next-js.svg", alt: "Next.js" },
                        { src: "/TailwindCSS.svg", alt: "Tailwind CSS" },
                        { src: "/prisma-light.svg", alt: "Typescript" },
                        { src: "/typescript.svg", alt: "Typescript" },
                        { src: "/kubernetes.svg", alt: "Kubernetes" },
                        { src: "/docker-logo.svg", alt: "Docker" },
                    ]}
                    title='Temulate'
                    details={[
                        "Real-time Collaboration Tool",
                        "Next.js + Node + PostgreSQL",
                    ]}
                />
                <ProjectCard
                    repoImageSrc="/repo-image.png"
                    techLogos={[
                        { src: "/Nodejs.svg", alt: "Node.js" },
                        { src: "/prisma-light.svg", alt: "Prisma" },
                        { src: "/typescript.svg", alt: "Typescript" },
                        { src: "/awslogo.svg", alt: "AWS" },
                        { src: "/aws-lambda.svg", alt: "Lambda" },
                        { src: "/serverless.svg", alt: "Serverless" },
                    ]}
                    title='Temulate'
                    details={[
                        "Real-time Collaboration Tool",
                        "Next.js + Node + PostgreSQL",
                    ]}
                />
            </div>
            <div
                id='blogs'
                className="flex items-center text-lg px-2 py-2 font-semibold w-full border-b border-neutral-700">
                BLOG
            </div>
            <div className="flex flex-col gap-6 mt-4 mb-6 items-start px-2 py-2 " >
                <BlogCard
                    srcImg="/repo-image.png"
                    altImg="aws-image"
                    title='aws'
                    details={["how to host an nodejs typescript api on lambda"]}

                />
                <BlogCard
                    srcImg="/repo-image.png"
                    altImg="aws-image"
                    title='aws'
                    details={["how to host an nodejs typescript api on lambda"]}

                />
            </div>
        </div>
    )
}
export default ProjectsAndBlogComponent;