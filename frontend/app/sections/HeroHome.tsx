import ImageWithLoader from "../components/ImageWithLoader"
import HeroAnimationText from "../components/HeroAnimationText"

export function HeroHome() {

    return (
        <section className='flex flex-col justify-center items-center min-h-[calc(100dvh-76px)] bg-[var(--primary)]'>

            <div
                style={{
                    backgroundImage: 'linear-gradient(to top, var(--primary), var(--logo-shadow),  var(--primary))',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                }}
            />

            <ImageWithLoader
                fill={true}
                className='object-cover z-1 absolute'
                src="https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1756703048/foto-fem-2_sqwgy5.jpg"
                alt="Hero Image"
            />

            <HeroAnimationText />

        </section>
    )
}