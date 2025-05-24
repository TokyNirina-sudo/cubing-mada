import { HoverCard, HoverCardTrigger } from "../ui/hover-card";
import Image from "next/image";
import { Button } from "../ui/button";
import { HoverCardContent } from "@radix-ui/react-hover-card";
export default function IconCategorie({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="item-center flex flex-col">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">
            <Image
              src={icon}
              alt="icon de categorie"
              width={14}
              height={14}
              className="dark:brightness-0 dark:invert"
            />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <span className=" text-sm font-semibold">{title}</span>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
