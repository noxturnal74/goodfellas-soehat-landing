export const brandConfig = {
  "slug": "goodfellas-barbershop-soehat",
  "repo": "goodfellas-soehat-landing",
  "brandName": "GoodFellas Barbershop Soehat",
  "monogram": "GF",
  "category": "Barbershop",
  "location": "Soehat grooming route",
  "address": "Ruko Griya Shanta Eksekutif Blok MP-57, Jatimulyo, Lowokwaru, Malang",
  "contact": "0821-4309-9786",
  "publicLink": "https://www.semuabis.com/goodfellas-barbershop-soehat-0821-4309-9786",
  "instagram": "https://www.instagram.com/goodfellas_malang",
  "designConcept": "Corporate premium grooming landing",
  "conversionGoal": "Position GoodFellas as a dependable Soehat grooming stop with proof, hours, and direct booking.",
  "proofPoints": [
    "Business listing confirms phone, Soehat-area address, and daily 10:00-21:00 hours.",
    "Barberhead lists a 4.7 score from 200 reviews, making trust proof prominent.",
    "The category is hair care and barbering, so the page should sell outcome confidence, not generic services."
  ],
  "sourceLinks": [
    {
      "label": "GoodFellas listing",
      "url": "https://www.semuabis.com/goodfellas-barbershop-soehat-0821-4309-9786"
    },
    {
      "label": "GoodFellas Barberhead",
      "url": "https://barberhead.com/malang/goodfellas-barbershop-suhat"
    },
    {
      "label": "GoodFellas Instagram",
      "url": "https://www.instagram.com/goodfellas_malang"
    }
  ],
  "theme": {
    "bg": "#14100d",
    "accent": "#b08968",
    "accent2": "#e6ccb2",
    "paper": "#fff6ee"
  },
  "nav": [
    "Cuts",
    "Experience",
    "Prices",
    "Book"
  ],
  "hero": {
    "eyebrow": "Premium grooming near Soehat",
    "title": "Clean cuts, sharp grooming, and easy booking near Soehat.",
    "body": "A masculine grooming page for haircut, shaving, styling, and walk-in confidence. The route is simple: see the experience, choose a service, book.",
    "cta": "Book Haircut"
  },
  "sections": [
    {
      "id": "services",
      "kicker": "Barber Services",
      "title": "Haircut, shaving, and styling without overexplaining.",
      "items": [
        "Regular cut",
        "Shaving detail",
        "Hair styling"
      ]
    },
    {
      "id": "experience",
      "kicker": "Barber Experience",
      "title": "A cleaner shop narrative for customers who care about finish.",
      "items": [
        "Consult first",
        "Clean tools",
        "Consistent finish"
      ]
    },
    {
      "id": "price-list",
      "kicker": "Price List",
      "title": "Package names that make booking quicker.",
      "items": [
        "Regular Cut",
        "Senior Barber",
        "Signature Grooming"
      ]
    }
  ],
  "layout": "barber"
} as const;

export type BrandConfig = typeof brandConfig;
