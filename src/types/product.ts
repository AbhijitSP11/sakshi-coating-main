export interface Product {
  id: string;
  category: string;
  subCategory: string;
  code: string;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  descriptionParagraphs?: string[];
  applications?: string[];
  benefitsTitle?: string;
  benefits?: string[];
  ctaText?: string;
  tds?: string;
  msds?: string;
}


