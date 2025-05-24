import IconCategorie from "@/components/classement/icon-categorie";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const categorie = [
    { icon: "/event/222.svg", title: "2x2" },
    { icon: "/event/333.svg", title: "3x3" },
    { icon: "/event/444.svg", title: "4x4" },
    { icon: "/event/555.svg", title: "5x5" },
    { icon: "/event/666.svg", title: "6x6" },
    { icon: "/event/333oh.svg", title: "3x3 one hand" },
    { icon: "/event/pyram.svg", title: "pyramix" },
    { icon: "/event/clock.svg", title: "clock" },
  ];
  return (
    <div className="px-4 md:px-12 w-full h-full ">
      <Card className="w-[350px] md:w-[500px] mx-auto mt-10 p-4">
        <CardHeader>
          <CardTitle>Cathegorie</CardTitle>
          <CardContent>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </CardContent>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 justify-center">
            {categorie.map((cat) => (
              <IconCategorie
                key={cat.title}
                icon={cat.icon}
                title={cat.title}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Generer scramble</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
