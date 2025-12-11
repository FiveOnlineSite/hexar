type ConnectorRefs = {
  main: React.RefObject<SVGPathElement | null>;
  left: React.RefObject<SVGPathElement | null>;
  right: React.RefObject<SVGPathElement | null>;
};

export default function BracketConnector({ refs }: { refs: ConnectorRefs }) {
  return (
    <div className="flex justify-center">
      <svg
        className="w-[360px] h-[80px] min-[821px]:w-[480px]"
        viewBox="0 0 480 80"
        fill="none"
      >
        <path ref={refs.main} d="M240 0 V30" stroke="white" strokeWidth="2" />

        <path
          ref={refs.left}
          d="M240 30 H80 Q70 30 70 40 V60"
          stroke="white"
          strokeWidth="2"
        />

        <path
          ref={refs.right}
          d="M240 30 H400 Q410 30 410 40 V60"
          stroke="white"
          strokeWidth="2"
        />

        <circle cx="70" cy="60" r="4" fill="white" />
        <circle cx="410" cy="60" r="4" fill="white" />
      </svg>
    </div>
  );
}
