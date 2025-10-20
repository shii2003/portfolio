import React from 'react';
import ProjectCard from './ProjectCard';
import BlogCard from './BlogCard';
import Footer from './Footer';

type ProjectsAndBlogComponentProps = {

};

const ProjectsAndBlogComponent: React.FC<ProjectsAndBlogComponentProps> = () => {

    return (
        <div className="flex flex-col items-center justify-center ">
            <div
                id='projects'
                className="flex items-center text-lg px-2 py-2 font-semibold border-b w-full border-neutral-700 mb-7">
                PROJECTS
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 mb-9  justify-center items-center">
                <ProjectCard
                    repoImageSrc="/temulate-img.png"
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
                        "Real-time Collaborative Canvas",
                        "Users Can Draw and Chat simultaneously",
                    ]}
                    githubLink='https://github.com/shii2003/Temulate'
                    isInProgress={false}
                />

                <ProjectCard
                    repoImageSrc="/EasyETH-img.png"
                    techLogos={[
                        { src: "/next-js.svg", alt: "Next.js" },
                        { src: "/TailwindCSS.svg", alt: "Tailwind CSS" },
                        { src: "/eth.svg", alt: "Ethereum" },

                    ]}
                    title='Easy ETH'
                    details={[
                        "Real-time canvas with chat",
                        "Redis cleanup and dockerized services",
                    ]}
                    githubLink='https://github.com/shii2003/EasyETH'
                    isInProgress={false}
                />

                <ProjectCard
                    repoImageSrc="/serverless-img.png"
                    techLogos={[
                        { src: "/Nodejs.svg", alt: "Node.js" },
                        { src: "/prisma-light.svg", alt: "Prisma" },
                        { src: "/typescript.svg", alt: "Typescript" },
                        { src: "/awslogo.svg", alt: "AWS" },
                        { src: "/aws-lambda.svg", alt: "Lambda" },
                        { src: "/serverless.svg", alt: "Serverless" },
                    ]}
                    title='Serverless-Lamda-API'
                    details={[
                        "RESTful API built with serverless architecture",
                        " Deployed to AWS using automated tooling.",
                    ]}
                    githubLink='https://github.com/shii2003/serverless-crud-api'
                    isInProgress={false}
                />


                <ProjectCard
                    repoImageSrc="/youcanban-img.png"
                    techLogos={[
                        { src: "/Nodejs.svg", alt: "Node.js" },
                        { src: "/next-js.svg", alt: "Next.js" },
                        { src: "/TailwindCSS.svg", alt: "Tailwind CSS" },
                        { src: "/prisma-light.svg", alt: "Typescript" },
                        { src: "/typescript.svg", alt: "Typescript" },
                        { src: "/kubernetes.svg", alt: "Kubernetes" },
                        { src: "/docker-logo.svg", alt: "Docker" },
                    ]}
                    title='Youcanban'
                    details={[
                        "Containerized full-stack app.",
                        "Deployed with Docker, K8s, and Ingress.",
                    ]}
                    githubLink='https://github.com/shii2003/youcanban'
                    isInProgress={true}
                />
            </div>
            <div
                id='blogs'
                className="flex items-center text-lg px-2 py-2 font-semibold w-full border-b border-neutral-700 mb-7">
                BLOG
            </div>
            <div className="flex flex-col gap-6 mt-4 mb-6 items-start px-2 py-2 " >
                <BlogCard
                    srcImg="/serverless-lambda-img.png"
                    altImg="aws-image"
                    title='Deploying API to AWS Lambda'
                    details={[
                        "Deploying a Serverless CRUD API to ",
                        "AWS Lambda with Node.js and TypeScript"
                    ]}

                    blogLink='https://medium.com/@shivaniteotia003/building-and-deploying-a-serverless-crud-api-to-aws-lambda-with-node-js-and-typescript-05bfe21e528c'

                />
                {/* <BlogCard
                    srcImg="/repo-image.png"
                    altImg="aws-image"
                    title='aws'
                    details={["how to host an nodejs typescript api on lambda"]}
                    blogLink='https://medium.com/'
                /> */}
            </div>
            <Footer />
        </div>
    )
}
export default ProjectsAndBlogComponent;