export interface ServiceItem {
  title: string;
  desc: string;
}

export interface Translations {
  lang: string;
  alternateLang: string;
  alternatePath: string;
  nav: {
    about: string;
    services: string;
    promova: string;
    studio: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  services: {
    title: string;
    items: ServiceItem[];
  };
  promova: {
    title: string;
    subtitle: string;
    text: string;
    cta: string;
  };
  studio: {
    title: string;
    text: string;
    cta: string;
  };
  footer: {
    address: string;
    contact: string;
    rights: string;
  };
}
