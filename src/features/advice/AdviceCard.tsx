import useViewportSize from "../../hooks/useViewportSize";
import PatternDividerDesktop from "../../svg/PatternDividerDesktop";
import PatternDividerMobile from "../../svg/PatternDividerMobile";
import { useAdvice } from "./useAdvice";

const AdviceCard: React.FC = () => {
  const { isTablet, isDesktop } = useViewportSize();
  const { isLoading, data } = useAdvice();
  console.log("toto", data);

  if (isLoading) return <p>Loading...</p>;

  return (
    <article className="bg-dark-grayish-blue relative h-[19.6875rem] w-[21.4375rem] rounded-[10px] px-6 py-10 text-center md:h-[20.75rem] md:w-[33.75rem] md:p-12">
      <p className="text-neon-green mb-6 text-[0.6875rem] tracking-[3.46px] md:text-sm md:tracking-[4.09px]">
        {`ADVICE #${data.slip.id}`}
      </p>
      <p className="text-light-cyan mb-6 text-[1.5rem] -tracking-[0.26px] md:mb-10 md:text-[1.75rem] md:leading-snug md:-tracking-[0.3px]">
        {data.slip.advice}
      </p>
      {isTablet || isDesktop ? (
        <PatternDividerDesktop />
      ) : (
        <PatternDividerMobile />
      )}
      <DiceButton />
    </article>
  );
};

const DiceButton: React.FC = () => {
  return (
    <button className="bg-neon-green hover:shadow-neon-button absolute bottom-0 left-1/2 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          fill="#202733"
        />
      </svg>
    </button>
  );
};

export default AdviceCard;
