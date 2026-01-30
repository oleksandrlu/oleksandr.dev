import { SKILLS } from '@/constants';

export default function Capabilities() {

    return (
        <section id="capabilities" className="section-padding bg-white my-8 sm:my-12 md:my-16">
            <div className="container-content grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 container-padding">
                {/* Left column */}
                <div>
                    <h2 className="heading-section mb-4 sm:mb-6 text-gray-900">CAPABILITIES</h2>
                    <div className="flex items-start gap-2">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-900">
                            Focusing on building immersive digital experiences with performance and accessibility in mind.
                        </p>
                    </div>
                </div>
                {/* Right column */}
                <div className="space-y-3 sm:space-y-4">
                    {SKILLS.map((skill) => (
                        <div
                            key={skill.name}
                            className="border-b-2 border-black pb-2 sm:pb-3 relative group hover:border-primary transition-colors"
                        >
                            <span className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-gray-900">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}