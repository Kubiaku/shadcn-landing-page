import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Jak długo trwa proces tworzenia strony internetowej?",
    answer: "Proces tworzenia strony internetowej zazwyczaj trwa od 2 do 4 tygodni, jednak czas realizacji może się różnić w zależności od złożoności projektu, współpracy z klientem oraz dostępności potrzebnych zasobów, takich jak treść i grafiki.",
    value: "item-1",
  },
  {
    question: "Ile kosztuje utrzymanie strony internetowej?",
    answer:
      "Pierwszy miesiąc obsługi strony jest darmowy. Późniejszy koszt utrzymania strony zależy od jej wielkości, jednak staramy się zapewnić konkurencyjne ceny, dostosowane do potrzeb i budżetu klienta.",
    value: "item-2",
  },
  {
    question: "Czy oferujecie wsparcie techniczne po wdrożeniu strony ?",
    answer:
      "Tak, pełne wsparcie techniczne jest wliczone w koszt utrzymania strony. Służąc pomocą w razie problemów technicznych oraz udzielając odpowiedzi na wszelkie pytania związane z funkcjonalnością strony.",
    value: "item-3",
  },
  {
    question: "Oferujecie pomoc w pozycjonowaniu strony ?",
    answer: "Tak, oferujemy pomoc w pozycjonowaniu strony internetowej. Zostanie przydzielony Ci specialista od marketingu, który zaproponuje strategię SEO, aby poprawić jej widoczność w wynikach wyszukiwania.",
    value: "item-4",
  },
  {
    question: "Czy sam będę mógł zmieniać trść na stronie?",
    answer: "Tak, tworzymy dedykowanego panel administracyjny do każdej naszej witryny. Dzięki niemu łatwo dodasz, usuniesz i edytujesz treści, zachowując pełną kontrolę nad swoją stroną.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Najczęściej zadawane pytania
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
