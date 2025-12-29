type BannerProp = {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function Banner ({title}:BannerProp) {
    return (
        <section className="banner-section">
            <div className="relative h-screen w-full">
                <video src="/videos/bg-video1.mp4" loop muted autoPlay playsInline className="relative w-full h-screen object-cover"></video>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:text-[53px] lg:text-[48px] md:text-[40px] sm:text-[36px] text-[30px] leading-tight font-bold">{title}</h1>
            </div>
        </section>
    )
}