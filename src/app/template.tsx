export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[100dvw] overflow-x-hidden relative w-full h-full">
      {children}
    </div>
  );
}
