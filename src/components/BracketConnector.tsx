export default function BracketConnector({ refs = {} }) {
  return (
    <div className="flex justify-center">
      <svg
        className="w-[360px] h-[80px] min-[821px]:w-[480px]"
        viewBox="0 0 480 80"
        fill="none"
      >
        {/* DOWNWARD PATH */}
        <path
          ref={refs.main || null}
          d="M240 0 V30"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* LEFT ARM */}
        <path
          ref={refs.left || null}
          d="
            M240 30 
            H80
            Q70 30 70 40
            V60
          "
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* RIGHT ARM */}
        <path
          ref={refs.right || null}
          d="
            M240 30 
            H400
            Q410 30 410 40
            V60
          "
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle cx="70" cy="60" r="4" fill="white" />
        <circle cx="410" cy="60" r="4" fill="white" />
      </svg>
    </div>
  );
}
