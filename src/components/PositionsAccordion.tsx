type PositionsItem = {
  designation: string;
  description: string;
};

type PositionsAccordionProps = {
  position: PositionsItem;
  isOpen: boolean;
  onToggle: () => void;
};

export default function PositonsAccordion({ position, isOpen, onToggle }: PositionsAccordionProps) {
    return (
        <div className="border-b border-[#FFFFFFCC] overflow-hidden py-2 mb-2">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="3xl:text-[40px] 2xl:text-[35px] lg:text-[30px] md:text-[25px] text-[20px] font-base text-white">
          {position.designation}
        </span>

        <span
          className="transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
        >
          <img
            src="/images/icons/arrow.png"
            alt="arrow"
            className="w-[24px] h-[24px] object-cover"
          />
        </span>
      </button>

      <div
        className={`pt-6 text-[#ffffffcc] 3xl:text-[20px] 2xl:text-[18px] lg:text-[15px] md:text-[15px] text-[14px] leading-relaxed transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div>
        {position.description}

        </div>
        <div className="inline-flex justify-end w-full mb-5">
        <a href="#" className="text-[20px] inline-block font-semibold leading-base py-3 px-12 bg-[#D50000] rounded-lg lg:mt-5 md:mt-5 mt-2">Apply Now</a>

        </div>
      </div>
    </div>
    ) 
}