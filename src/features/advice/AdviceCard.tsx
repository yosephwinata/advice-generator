import useViewportSize from "../../hooks/useViewportSize";
import PatternDividerDesktop from "../../svg/PatternDividerDesktop";
import PatternDividerMobile from "../../svg/PatternDividerMobile";
import { useAdvice } from "./useAdvice";

const AdviceCard: React.FC = () => {
  const { isTablet, isDesktop } = useViewportSize();
  // I keep this line for future references. To show that you can use isLoading, isFetching, or isRefetching
  // const { data, refetch, isLoading, isFetching, isRefetching } = useAdvice();
  const { data, refetch, isFetching } = useAdvice();

  const handleDiceClick = async () => {
    await refetch();
  };

  return (
    <article className="relative min-h-60 w-[21.4375rem] rounded-[10px] bg-dark-grayish-blue px-6 py-10 text-center md:h-[20.75rem] md:w-[33.75rem] md:p-12">
      <p className="mb-6 text-[0.6875rem] tracking-[3.46px] text-neon-green md:text-sm md:tracking-[4.09px]">
        {!isFetching && `ADVICE #${data.slip.id}`}
      </p>
      <p className="mb-6 text-[1.5rem] -tracking-[0.26px] text-light-cyan md:mb-10 md:text-[1.75rem] md:leading-snug md:-tracking-[0.3px]">
        {isFetching ? "Loading..." : data.slip.advice}
      </p>
      {isTablet || isDesktop ? (
        <PatternDividerDesktop />
      ) : (
        <PatternDividerMobile />
      )}
      <DiceButton onDiceClick={handleDiceClick} isFetching={isFetching} />
    </article>
  );
};

interface DiceButtonProps {
  onDiceClick: () => void;
  isFetching: boolean;
}

const DiceButton: React.FC<DiceButtonProps> = ({ onDiceClick, isFetching }) => {
  return (
    <button
      onClick={onDiceClick}
      disabled={isFetching}
      className="absolute bottom-0 left-1/2 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-neon-green hover:shadow-neon-button"
    >
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
