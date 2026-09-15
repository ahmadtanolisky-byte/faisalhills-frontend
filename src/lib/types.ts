export interface MediaDetails {
  sourceUrl: string;
  altText: string;
  width?: number;
  height?: number;
}

export interface FeaturedImage {
  node: MediaDetails;
}

export interface Stat {
  title: string;
  value: string;
  group: "main" | "faisaltown" | string;
}

export interface Testimonial {
  title: string;
  content: string;
  role: string;
  rating: number;
  featuredImage?: FeaturedImage;
}

export interface Faq {
  title: string;
  content: string;
}

export interface GalleryCategory {
  name: string;
  slug: string;
}

export interface GalleryItem {
  title: string;
  content: string;
  featuredImage?: FeaturedImage;
  galleryCategories?: { nodes: GalleryCategory[] };
}

export interface Block {
  title: string;
  content: string;
  status: string;
  link: string;
  slug: string;
  featuredImage?: FeaturedImage;
}

export interface Landmark {
  title: string;
  driveTime: string;
  category: string;
}

export interface AmenityCategory {
  name: string;
  slug: string;
}

export interface Amenity {
  title: string;
  content: string;
  amenityCategories?: { nodes: AmenityCategory[] };
}

export interface Benefit {
  title: string;
  content: string;
}

export interface BookingStep {
  title: string;
  content: string;
  stepNumber: number;
  stepLabel: string;
}

export interface Flagship {
  title: string;
  content: string;
  link: string;
  slug: string;
  featuredImage?: FeaturedImage;
}

export interface ZedemProject {
  title: string;
  link: string;
}

export interface PlotTerm {
  name: string;
  slug: string;
}

export interface Plot {
  title: string;
  slug: string;
  plotNumber: string;
  size: string;
  price: string;
  facing: string;
  status: string;
  plotBlocks?: { nodes: PlotTerm[] };
  plotTypes?: { nodes: PlotTerm[] };
}

export interface SiteOptions {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  chairmanName: string;
  chairmanTitle: string;
  chairmanBio: string;
  chairmanPhoto: string;
  overviewTitle: string;
  overviewText: string;
  locationTitle: string;
  locationText: string;
  masterPlanImage: string;
  masterPlanPdfUrl: string;
  paymentPlanIntro: string;
  paymentPlanImage: string;
  paymentPlanPdfUrl: string;
  bookingIntro: string;
  benefitsIntro: string;
  amenitiesIntro: string;
  galleryIntro: string;
  ctaTitle: string;
  ctaText: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  address: string;
  facebookUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage?: FeaturedImage;
}

export interface HomePageData {
  siteOptions: SiteOptions;
  stats: { nodes: Stat[] };
  faisaltownStats: { nodes: Stat[] };
  zedemProjects: { nodes: ZedemProject[] };
  landmarks: { nodes: Landmark[] };
  blocks: { nodes: Block[] };
  plots: { nodes: Plot[] };
  flagships: { nodes: Flagship[] };
  bookingSteps: { nodes: BookingStep[] };
  benefits: { nodes: Benefit[] };
  amenities: { nodes: Amenity[] };
  testimonials: { nodes: Testimonial[] };
  galleryItems: { nodes: GalleryItem[] };
  faqs: { nodes: Faq[] };
  posts: { nodes: BlogPost[] };
}
