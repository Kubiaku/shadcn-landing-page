import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Responsywność",
    description:
      "Tworzymy responsywne strony internetowe, które doskonale wyglądają i funkcjonują na urządzeniach mobilnych i stacjonarnych, zapewniając doskonałe doświadczenia dla wszystkich użytkowników.",
  },
  {
    icon: "BadgeCheck",
    title: "Nowoczesne technologie",
    description:
      "Wykorzystujemy najnowsze technologie w projektowaniu stron internetowych, aby zapewnić innowacyjność, bezpieczeństwo i wydajność.",
  },
  {
    icon: "Goal",
    title: "Przyjazne SEO",
    description:
      "Nasze strony internetowe są zaprojektowane z uwzględnieniem najlepszych praktyk SEO, co zapewnia lepszą widoczność w wyszukiwarkach i przyciąga większy ruch.",
  },
  {
    icon: "PictureInPicture",
    title: "Intuicyjny panel administracyjny",
    description:
      "Każda nasza strona jest wyposażona w autorski, intuicyjny panel CMS, pozwalający na szybką i prostą edycję treści bez potrzeby znajomości programowania.",
  },
  {
    icon: "MousePointerClick",
    title: "Szybkość działania",
    description:
      "Optymalizujemy każdy element strony, aby zapewnić błyskawiczne ładowanie, co poprawia doświadczenie użytkownika i wspiera pozycjonowanie w wyszukiwarkach.",
  },
  {
    icon: "Newspaper",
    title: "Indywidualne podejście",
    description:
      "Każda strona jest unikalnie dostosowana do potrzeb naszych klientów, co zapewnia nie tylko unikatowość, ale również efektywność w osiąganiu biznesowych celów..",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Firma bez strony internetowej ?
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Możesz to zmienić !
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
