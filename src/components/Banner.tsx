export default function Banner () {
    return (
        <section className="banner-section">
            <div className="relative h-full w-full">
                <video src="/videos/bg-video1.mp4" loop muted autoPlay className="relative w-full h-full"></video>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[58px] leading-base font-bold">About Us</h1>
            </div>
        </section>
    )
}