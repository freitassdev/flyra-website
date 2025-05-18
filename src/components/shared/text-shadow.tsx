export const TextShadow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        "relative w-fit h-fit text-5xl md:text-6xl font-bold bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#f1f1f1_100%)] bg-clip-text text-transparent " +
        className
      }
    >
      {children}
    </div>
  );
};
