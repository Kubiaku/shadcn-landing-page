export const translations = {
  pl: {
    navbar: {
      testimonials: "Opinie",
      team: "Zespół",
      contact: "Kontakt",
      faq: "FAQ",
      features: {
        showcase: "Pokaż swoją wartość",
        showcaseDesc: "Podkreśl, jak Twój produkt rozwiązuje problemy użytkowników.",
        trust: "Buduj zaufanie",
        trustDesc: "Wykorzystaj elementy dowodów społecznych, aby budować zaufanie i wiarygodność.",
        leads: "Pozyskuj leady",
        leadsDesc: "Twórz atrakcyjne wizualnie i strategiczne formularze pozyskiwania leadów."
      }
    },
    team: {
      title: "Zespół",
      subtitle: "Nasz Zespół Marzeń",
      positions: {
        vueDeveloper: "Programista Vue Frontend",
        creator: "Twórca tej strony",
        uiUxDesigner: "Projektant UI/UX",
        mlEngineer: "Inżynier Uczenia Maszynowego",
        tensorFlow: "Specjalista TensorFlow",
        cloudDeveloper: "Programista Cloud Native",
        kubernetes: "Orkiestrator Kubernetes"
      }
    },
    footer: {
      contact: "Kontakt",
      platforms: "Platformy",
      help: "Pomoc",
      socials: "Media",
      copyright: "Wszelkie Prawa Zastrzeżone"
    },
    sponsors: {
      title: "Nasi Główni Sponsorzy"
    },
    pricing: {
      contact: "Skontaktuj się z nami"
    }
  },
  en: {
    navbar: {
      testimonials: "Testimonials",
      team: "Team",
      contact: "Contact",
      faq: "FAQ",
      features: {
        showcase: "Showcase Your Value",
        showcaseDesc: "Highlight how your product solves user problems.",
        trust: "Build Trust",
        trustDesc: "Leverages social proof elements to establish trust and credibility.",
        leads: "Capture Leads",
        leadsDesc: "Make your lead capture form visually appealing and strategically."
      }
    },
    team: {
      title: "Team",
      subtitle: "The Company Dream Team",
      positions: {
        vueDeveloper: "Vue Frontend Developer",
        creator: "Creator Of This Website",
        uiUxDesigner: "UI/UX Designer",
        mlEngineer: "Machine Learning Engineer",
        tensorFlow: "TensorFlow Tinkerer",
        cloudDeveloper: "Cloud Native Developer",
        kubernetes: "Kubernetes Orchestrator"
      }
    },
    footer: {
      contact: "Contact",
      platforms: "Platforms",
      help: "Help",
      socials: "Socials",
      copyright: "All Rights Reserved"
    },
    sponsors: {
      title: "Our Platinum Sponsors"
    },
    pricing: {
      contact: "Contact US"
    }
  }
};

export type TranslationKey = keyof typeof translations.pl;
