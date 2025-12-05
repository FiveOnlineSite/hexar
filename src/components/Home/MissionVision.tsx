
export default function MissionVision() {
  return (
    <section className="py--16 top-0 left-0 mission-vision-section w-full h-full bg-[url('/images/vision-mission-bg.png')] bg-no-repeat bg-[30%] bg-contain ">
<div className="lg:flex block items-center my-16">
<div className="lg:w-[50%] w-full h-full flex items-center">
      <svg
        width="100%"
        height="100%"
        className="relative left-0 top-0"
        viewBox="0 0 1200 1200"
        xmlns="http://www.w3.org/2000/svg"
      >
       <defs>
  <filter id="roundedMask" x="-10%" y="-10%" width="120%" height="120%">
    <feMorphology operator="dilate" radius="1" in="SourceGraphic" result="dilated" />
    <feGaussianBlur in="dilated" stdDeviation="1" result="blurred" />
    <feMorphology operator="erode" radius="1" in="blurred" result="rounded" />
    <feComposite in="rounded" in2="SourceGraphic" operator="over" />
  </filter>

  <mask id="diamondMask">
    <rect width="1200" height="1200" fill="black" />

    {/* === BIG DIAMOND (50-ish rounded via filter) === */}
    <rect
        x={-460}
        y={80}
        width={860}
        height={840}
        rx={50}
        ry={50}
        fill="white"
        transform="rotate(45 -80 400)"
        />

    {/* === SMALL DIAMOND 1 (center: 360,285) === */}
    <rect
        x={317.5}   // 480 - 102.5
        y={65}
        width={305}
        height={305}
        rx={25}
        ry={25}
        fill="white"
        transform="rotate(45 480 285)"
        />

    {/* === SMALL DIAMOND 2 (center: 360,565) === */}
    <rect
        x={516.5}
        y={524.5}
        width={305}
        height={305}
        rx={25}
        ry={25}
        fill="white"
        transform="rotate(45 480 565)"
        />

    {/* === SMALL DIAMOND 3 (center: 550,455) === */}
    <rect
        x={613.5}   // 670 - 102.5
        y={271.5}
        width={305}
        height={305}
        rx={25}
        ry={25}
        fill="white"
        transform="rotate(45 670 455)"
        />
  </mask>
</defs>


        {/* ONE SINGLE VIDEO MASKED BY ALL DIAMONDS */}
        <foreignObject
          x="0"
          y="0"
          width="1200"
          height="1200"
          mask="url(#diamondMask)"
        >
          <video
            src="/videos/bg-video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </foreignObject>
      </svg>
    </div>

    <div className="lg:w-[50%] w-full lg:pe-20 px-8">
        <div className="pb-4">
            <h2 className="lg:text-[56px] md:text-[40px] text-[36px] font-semibold leading-tight mb-5">Our Mission</h2>
            <p className="lg:text-[22px] text-[16px] lg:font-base font-light lg:leading-base leading-tight">Our mission is to provide cutting-edge 3D arts solutions with exceptional quality and innovation. We bring creativity to life through immersive visuals, pushing artistic boundaries.</p>
        </div>

        <div className="pt-10 ">
            <h2 className="lg:text-[56px] md:text-[40px] text-[36px] font-semibold leading-tight mb-5">Our Vision</h2>
            <p className="lg:text-[22px] text-[16px] lg:font-base font-light lg:leading-base leading-tight">Inspire and empower through transformative 3D arts. We aim to be a trusted partner known for our visionary approach, technical expertise, and commitment to excellence. By embracing creativity and staying at the forefront of technology, we shape the future and leave a lasting impact in the industry.</p>
        </div>
        
    </div>
</div>
 
    </section>

   
  );
}
