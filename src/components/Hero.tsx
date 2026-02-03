import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <main id="home" className="hero-container w-full h-screen overflow-hidden table-cell align-middle text-center px-4 sm:px-6 md:px-8 pt-20">
        <p className="z-2 inline-block relative mix-blend-difference">
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[160px] 2xl:text-[200px] leading-[0.9] typewriter">
            Hi, I'm Oleksandr
          </span>
        </p>
        <p className="z-2 mix-blend-difference text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl inline-block relative blend mix-blend-light mt-4 sm:mt-6 md:mt-8">
          <span className="typewriter">I will turn ideas into products that deliver results</span>
        </p>
        <div className="hero-image-container absolute z-1 left-0 bottom-0 w-full sm:w-auto">
          <Image src="/images/avatars/oleksandr.png" alt="oleksandr" width={512} height={600} className="w-full sm:w-auto h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-none" style={{
            objectFit: 'contain',
          }} />
        </div>
      </main>
    </>
  );
}