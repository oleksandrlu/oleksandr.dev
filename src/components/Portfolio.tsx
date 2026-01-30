import { PROJECTS } from '@/constants';
import Image from 'next/image';

export default function Portfolio() {

    return (
        <section id="portfolio" className="">
            <div className="my-8 sm:my-10 md:my-12 container-padding container-content">
                <h2 className="heading-section text-left uppercase xl:text-7xl">Recent</h2>
                <h2 className="heading-section text-left uppercase text-primary ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:text-7xl">Projects</h2>
            </div>
            <div className="space-y-8 sm:space-y-10 md:space-y-12 w-full sm:w-4/5 md:w-3/5 mx-auto container-padding">
                {PROJECTS.map((project, index) => (
                    <div
                        key={project.id}
                        className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 hover:bg-primary/5 transition-colors group ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''
                            }`}
                    >
                        <div className={`flex-1 w-full sm:w-auto ${index % 2 === 1 ? 'sm:flex sm:justify-end' : 'sm:flex sm:justify-start'}`}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={512}
                                height={600}
                                className="w-full sm:w-[80%] h-auto"
                                style={{
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                        <div className={`flex-1 relative w-full text-center sm:text-left ${index % 2 === 1 ? 'sm:text-right' : 'sm:text-left'}`}>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{project.description}</p>

                        </div>
                    </div>
                ))}
            </div >
        </section>

    );
}