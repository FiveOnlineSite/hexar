// components/BracketConnector.tsx
export default function BracketConnector() {
  return (
    <div className="flex justify-center">
      <svg
        className="w-[320px] h-[80px]"
        viewBox="0 0 320 80"
        fill="none"
      >
        <path
          d="
            M160 0 
            V30

            H85
            Q75 30 75 40
            V60

            M160 30 
            H235
            Q245 30 245 40
            V60
          "
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle cx="75" cy="60" r="4" fill="white" />
        <circle cx="245" cy="60" r="4" fill="white" />
      </svg>
    </div>
  );
}
