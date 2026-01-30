import { TESTIMONIALS } from '@/constants';

export default function Testimonials() {

    return (
        <section id="testimonials" className="section-padding">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 container-padding">
                <h2 className="heading-section mb-2 sm:mb-4">Testimonials</h2>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl">What clients say about working with me.</p>
            </div>


            <div className="container-content container-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {TESTIMONIALS.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="card"
                    >

                        <div className="flex gap-1 mb-4 sm:mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className="text-black text-lg sm:text-xl md:text-2xl">★</span>
                            ))}
                        </div>


                        <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
                            {testimonial.text}
                        </p>


                        <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-divider">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                            />
                            <div>
                                <h4 className="font-semibold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl">{testimonial.name}</h4>
                                <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-2xl">{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="text-center mt-12 sm:mt-16 md:mt-20 container-padding">
                <p className="text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6">Want to work together?</p>
                <a
                    href="mailto:oleksandr.lu11@gmail.com"
                    className="btn-primary"
                >
                    Get In Touch
                </a>
            </div>
        </section>
    );
}