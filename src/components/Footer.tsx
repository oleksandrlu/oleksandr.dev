import { CONTACT_EMAIL, LOCATION, SOCIAL_LINKS } from '@/constants';
import { getCurrentYear, formatEmailLink } from '@/utils';

export default function Footer() {
    const currentYear = getCurrentYear();

    return (
        <footer id="contact" className="text-white section-padding">
            <div className="container-content container-padding">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
                            LET'S TALK
                        </h2>
                        <a
                            href={formatEmailLink(CONTACT_EMAIL)}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl link-hover break-all sm:break-normal"
                            target="_blank"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>


                    <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:justify-end">

                        <div>
                            <h3 className="text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider text-lg sm:text-xl md:text-2xl">Socials</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            className="link-hover text-base sm:text-lg md:text-xl lg:text-2xl"
                                            target="_blank"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="border-divider-dark mb-6 sm:mb-8"></div>


                <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400">
                    <p>© {currentYear}</p>
                    <p className="text-center sm:text-left">{LOCATION}</p>
                </div>
            </div>
        </footer>
    );
}