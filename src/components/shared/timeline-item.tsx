import { Separator } from "@/components/ui/separator";
import Image, { StaticImageData } from "next/image";

export interface ITimelineItemProps {
  type?: "education" | "work" | "other" | undefined;
  id?: number | undefined;
  title?: string | undefined;
  date?: string | undefined;
  description?: string | undefined;
  image?: string | StaticImageData | undefined;
}
export default function TimelineItem({
  type,
  id,
  title,
  date,
  description,
  image,
}: ITimelineItemProps) {
  return (
    <div className="w-full shadow-xl bg-background/70 backdrop-blur-sm border border-border min-h-52 rounded-lg flex flex-col py-3 px-4 text-secondary gap-4">
      <div className="flex flex-row justify-between gap-2 items-center font-semibold">
        <h2 className="flex flex-row gap-2 items-center">{title}</h2>
        <Separator className="flex-1" />
        <p>{date}</p>
      </div>
      <div className="flex flex-row gap-3 h-full">
        <p className="max-w-[80%] text-foreground">
          <span className="ml-3 text-justify">{description}</span>
        </p>
        <div className="bg-white flex-1 max-w-[20%] h-min rounded-md aspect-square">
          {image && (
            <Image
              src={image}
              width={200}
              height={200}
              alt="Timeline item Logo"
              className="w-[200px] h-auto rounded-sm"
            />
          )}
        </div>
      </div>
    </div>
  );
}
