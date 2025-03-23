export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[100dvw] overflow-x-hidden relative w-full h-full px-10 max-xl:px-12 max-sm:px-4 max-lg:max-w-full mx-auto max-w-8xl">
      {children}
    </div>
  );
}
