import {
  ServiceItem,
  BotanicalIngredient,
  AcademyCourse,
  GraduateStory,
  GalleryItem,
  Testimonial,
  PackageDeal,
  FaqItem
} from '../types';

export const BRAND_INFO = {
  name: "HIBER BEAUTY SALON & ACADEMY",
  shortName: "HIBER",
  logoUrl: "https://cdn.phototourl.com/free/2026-08-20-a9185eaf-ea0f-49bc-822e-833cb3bae4f5.jpg",
  tagline: "Bahir Dar's Premier Luxury Beauty Sanctuary & Accredited Master Academy",
  amharicTagline: "ህብር የውበት ሳሎን እና የሙያ ማሰልጠኛ አካዳሚ",
  location: "Kebele 4, Friendship Building, 2nd Floor, in front of St. George Church, Bahir Dar, Ethiopia",
  city: "Bahir Dar, Ethiopia",
  phone1: "0975113940",
  phone2: "0912442905",
  instagram: "@Hiber Beauty Salon and Beauty Academy",
  instagramUrl: "https://instagram.com",
  tiktok: "Hiber Beauty Salon & Academy",
  tiktokUrl: "https://tiktok.com",
  whatsappNumber: "+251975113940",
  hours: "Monday – Sunday: 8:00 AM – 8:30 PM",
  stats: [
    { label: "Happy Salon Clients", value: "8,500+" },
    { label: "Certified Academy Graduates", value: "1,200+" },
    { label: "100% Organic Botanical Recipes", value: "14+" },
    { label: "Master Stylists & Educators", value: "18+" },
  ]
};

export const HAIR_SERVICES: ServiceItem[] = [
  {
    id: "hair-braid-royal",
    name: "Royal Ethiopian Braiding & Shuruba",
    category: "braiding",
    price: "800 – 2,500 ETB",
    duration: "2 - 5 hrs",
    description: "Authentic intricate traditional Ethiopian Shuruba, stitch braids, knotless goddess braids, and Fulani art with crisp partings and zero scalp tension.",
    features: ["Natural Nug & Rosemary scalp prep", "Knotless lightweight technique", "Beads & gold thread embellishments", "Long-lasting neat edge finish"],
    popular: true,
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hair-styling-silk",
    name: "Luxury Silk Press & Thermal Styling",
    category: "hair",
    price: "600 – 1,400 ETB",
    duration: "1.5 hrs",
    description: "Deep clarifying wash, custom hydration steam, heat-shield botanical oil infusion, and ultra-silky flat iron polish preserving natural curl bounce.",
    features: ["Deep steam moisture infusion", "Anti-humidity thermal seal", "Zero chemical alteration", "Lustrous featherweight bounce"],
    popular: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hair-coloring-balayage",
    name: "Master Hair Coloring, Ombré & Highlights",
    category: "coloring",
    price: "1,200 – 3,500 ETB",
    duration: "2 - 3.5 hrs",
    description: "Custom tonal formulations from rich caramel, warm honey, chocolate espresso to bold fashion shades with protective bond builders.",
    features: ["Custom color consultation", "Plex bond-protecting treatment", "Tone gloss seal", "Post-color hydration mask"],
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hair-cut-precision",
    name: "Precision Haircut & Sculpting",
    category: "cutting",
    price: "400 – 900 ETB",
    duration: "45 mins",
    description: "Expert face-framing layers, modern bob cuts, split-end micro-dusting, and curl-by-curl shaping for optimal volume and silhouette.",
    features: ["Custom face shape analysis", "Dead ends elimination", "Volumizing blowout", "Texturizing finish"],
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hair-curling-perm",
    name: "Hydra-Bounce Curls & Waves Styling",
    category: "hair",
    price: "500 – 1,200 ETB",
    duration: "1 hr",
    description: "Glamorous Hollywood waves, bouncy wand curls, or defined natural wash-and-go curl enhancement enriched with avocado butter.",
    features: ["Heatless or titanium wand options", "Flexible 72-hour hold", "Anti-frizz humidity shield", "Silk shine spray"],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hair-treat-steam",
    name: "Herbal Botanical Steam Growth Therapy",
    category: "treatments",
    price: "700 – 1,800 ETB",
    duration: "1.5 hrs",
    description: "Hiber's signature warm scalp mask using freshly crushed Niger seed (Nug), fenugreek (Abish), rosemary, and ginger under ozone micro-steam.",
    features: ["Follicle stimulation & blood flow", "Breakage reduction up to 85%", "Scalp detox & anti-dandruff", "Deep moisture lock"],
    popular: true,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hair-extensions-weave",
    name: "Seamless Extensions, Wigs & Sew-ins",
    category: "hair",
    price: "1,500 – 4,500 ETB",
    duration: "2.5 - 4 hrs",
    description: "Premium human hair installations including lace melt, closure sew-ins, tape-ins, micro-links, and custom wig styling & maintenance.",
    features: ["Undetectable HD lace melting", "Secure flat foundation", "Natural hair protection", "Custom styling included"],
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hair-special-scalp",
    name: "Intensive Scalp Therapy & Hair Health",
    category: "treatments",
    price: "650 – 1,500 ETB",
    duration: "1 hr",
    description: "Clinical yet organic scalp purification using Ethiopian coffee scrub, aloe vera gel, and tea tree infusion for thinning and stressed edges.",
    features: ["Gentle scalp exfoliation", "Edge regrowth nourishment", "pH rebalancing rinse", "High frequency stimulation"],
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
  }
];

export const MAKEUP_BEAUTY_SERVICES: ServiceItem[] = [
  {
    id: "makeup-bridal-imperial",
    name: "Imperial Ethiopian Bridal Glam",
    category: "bridal",
    price: "3,500 – 8,000 ETB",
    duration: "2 - 3 hrs",
    description: "Full ceremonial makeup tailored for traditional Habesha Kemis, Melse gold crown ensembles, and white wedding gowns with 24hr waterproof wear.",
    features: ["HD Airbrush / flawless skin finish", "Luxury mink lashes included", "Crown & jewelry placement", "Touch-up emergency kit"],
    popular: true,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "makeup-soft-glam",
    name: "Modern Soft Glam & Event Makeup",
    category: "makeup",
    price: "900 – 2,000 ETB",
    duration: "1 hr",
    description: "Luminous, velvet complexion, sculpted natural contours, refined smokey or winged eye artistry, and long-wearing nude or bold lips.",
    features: ["Custom skin undertone matching", "Feathered brow sculpting", "Individual lash application", "Setting mist lock"],
    popular: true,
    image: "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "beauty-brows-lashes",
    name: "Signature Brow Sculpt & Lash Extensions",
    category: "makeup",
    price: "400 – 1,500 ETB",
    duration: "45 - 90 mins",
    description: "Brow lamination, organic henna tinting, precision threading, and classic-to-volume hybrid lash extensions.",
    features: ["Custom brow mapping", "Natural organic henna tint", "Weightless lash fibers", "Lasts 4 to 6 weeks"],
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "beauty-luxury-nails",
    name: "Luxury Gel, Acrylic & Nail Art Lounge",
    category: "nails",
    price: "500 – 1,800 ETB",
    duration: "1 - 2 hrs",
    description: "Russian dry manicure, builder gel overlays, acrylic sculpting, custom Ethiopian gold line nail art, and relaxing paraffin hand bath.",
    features: ["Chip-free 3+ week longevity", "Custom nail art & chrome finishes", "Cuticle rejuvenation therapy", "Luxury hand massage"],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "beauty-facial-skincare",
    name: "Radiance Facial & Deep Pore Detox",
    category: "skincare",
    price: "800 – 2,200 ETB",
    duration: "1.2 hrs",
    description: "Ultrasonic extractions, custom Ethiopian honey & turmeric mask, hyaluronic acid infusion, ice globe lymphatic drainage, and LED phototherapy.",
    features: ["Deep pore purification", "Hyperpigmentation fading", "Collagen stimulation", "Instant glass-skin glow"],
    popular: true,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "beauty-henna-art",
    name: "Traditional & Contemporary Henna Artistry",
    category: "bridal",
    price: "450 – 1,800 ETB",
    duration: "1 - 2.5 hrs",
    description: "Organic 100% natural dark mahogany henna paste hand-drawn by master artists for bridal hands, feet, and holiday celebrations.",
    features: ["100% pure organic henna paste", "Intricate traditional & modern motifs", "Deep dark stain longevity", "Lavender & eucalyptus essential oils"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
  }
];

export const BOTANICAL_INGREDIENTS: BotanicalIngredient[] = [
  {
    id: "niger-seed",
    name: "Niger Seed Oil",
    amharicName: "የኑግ ዘይት (Nug)",
    iconType: "droplet",
    keyNutrients: "Linoleic Acid, Vitamin E, Omega-3 & 6, Zinc",
    targetConcerns: ["Hair Thinning", "Dry Brittle Scalp", "Luster Loss"],
    description: "Ethiopia's golden jewel for hair vitality. Extracted from indigenous Guizotia abyssinica, it deeply feeds dormant hair follicles and creates unbeatable shine.",
    howWeUseIt: "Warm scalp massage base and hot oil steam infusion",
    hairBenefit: "Stimulates micro-circulation at follicle roots and prevents premature shedding",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    badge: "Ethiopian Heritage"
  },
  {
    id: "fenugreek",
    name: "Fenugreek",
    amharicName: "አብሽ (Abish)",
    iconType: "leaf",
    keyNutrients: "Nicotinic Acid, High Plant Proteins, Potassium, Lecithin",
    targetConcerns: ["Breakage", "Edge Damage", "Scalp Inflammation"],
    description: "Revered in Ethiopian households for generations, Abish strengthens the hair shaft with concentrated plant mucilage and protein reconstruction.",
    howWeUseIt: "Whipped into a velvety deep conditioning mask with raw honey",
    hairBenefit: "Builds high tensile strength, softens kinky/curly textures, and prevents split ends",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    badge: "Strength Champion"
  },
  {
    id: "rosemary",
    name: "Fresh Rosemary Infusion",
    amharicName: "የስጋ መጥበሻ (Rosemary)",
    iconType: "sparkles",
    keyNutrients: "Carnasic Acid, Rosmarinic Acid, Antioxidants",
    targetConcerns: ["Slow Hair Growth", "Itchy Scalp", "Dandruff"],
    description: "Fresh highland rosemary steam-distilled to revitalize dormant follicles and naturally balance scalp sebum without heavy residue.",
    howWeUseIt: "Concentrated herbal hydrosol mist and scalp massage serum",
    hairBenefit: "Clinically proven to accelerate new growth speed and soothe scalp itching",
    image: "https://images.unsplash.com/photo-1515586000433-a5ac74c89978?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "avocado",
    name: "Pure Avocado Butter",
    amharicName: "አቮካዶ",
    iconType: "heart",
    keyNutrients: "Oleic Acid, Vitamins A, B5, D & E, Biotin",
    targetConcerns: ["Severe Dryness", "Porosity Imbalance", "Tangled Curls"],
    description: "Fresh creamy butter made from ripe Bahir Dar avocados, delivering intense moisture that penetrates the hair cuticle rather than sitting on top.",
    howWeUseIt: "Whipped moisture butter mask applied under warm hydration steam",
    hairBenefit: "Restores extreme softness, seals open cuticles, and provides effortless detangling",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ginger",
    name: "Wild Ginger Root",
    amharicName: "ዝንጅብል (Zinjibil)",
    iconType: "zap",
    keyNutrients: "Gingerol, Magnesium, Phosphorus, Potassium",
    targetConcerns: ["Dull Hair", "Sluggish Scalp", "Follicle Blockage"],
    description: "Warming active extract that increases blood flow to the scalp, washing away mineral deposits and reviving weakened roots.",
    howWeUseIt: "Fresh juice scalp detox and stimulating edge drops",
    hairBenefit: "Invigorates roots and purifies pores from product buildup",
    image: "https://images.unsplash.com/photo-1615485290197-2a41a457492c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hibiscus",
    name: "Hibiscus Petal Extract",
    amharicName: "የቀይ አበባ (Hibiscus)",
    iconType: "flower",
    keyNutrients: "Vitamin C, Alpha Hydroxy Acids, Amino Acids",
    targetConcerns: ["Premature Graying", "Limp Strands", "Cuticle Roughness"],
    description: "Rich in natural alpha hydroxy acids and pigments that strengthen hair keratin, lock in vibrant gloss, and stimulate dormant crown follicles.",
    howWeUseIt: "Deep rinse booster and herbal gloss mask",
    hairBenefit: "Boosts natural elasticity, prevents strand thinning, and imparts a glassy shine",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "aloe-vera",
    name: "Raw Aloe Vera Gel",
    amharicName: "ሬት (Eret / Aloe)",
    iconType: "droplets",
    keyNutrients: "Proteolytic Enzymes, Polysaccharides, 20 Minerals",
    targetConcerns: ["Irritated Scalp", "Sun Damage", "Excess Oil"],
    description: "Freshly sliced succulent gel that heals dead skin cells on the scalp, balances natural pH (4.5–5.5), and creates an anti-frizz moisture barrier.",
    howWeUseIt: "Pre-shampoo clarifying scalp treatment and leave-in hydration base",
    hairBenefit: "Cools scalp redness instantly and seals moisture into thirsty curl patterns",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "onion",
    name: "Red Onion Sulfur Extract",
    amharicName: "ቀይ ሽንኩርት (Key Shinkurt)",
    iconType: "shield",
    keyNutrients: "High Dietary Sulfur, Quercetin, Catalase Enzyme",
    targetConcerns: ["Alopecia / Thin Edges", "Excessive Hair Fall", "Weak Roots"],
    description: "Extracted without unpleasant scent using our proprietary citrus-rosemary distillation. High dietary sulfur rebuilds structural keratin bonds.",
    howWeUseIt: "Targeted edge and temple growth drops with botanical steam",
    hairBenefit: "Triggers rapid regrowth in thinning areas and dramatically reduces brush hair fall",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    badge: "Regrowth Hero"
  },
  {
    id: "coconut-oil",
    name: "Virgin Coconut Oil",
    amharicName: "የኮኮናት ዘይት",
    iconType: "shield-check",
    keyNutrients: "Lauric Acid, Medium Chain Triglycerides",
    targetConcerns: ["Protein Loss", "Bleach Damage", "Dry Ends"],
    description: "Unique low-molecular-weight oil that penetrates deep inside the cortex rather than remaining solely on the surface.",
    howWeUseIt: "Pre-wash protective barrier and hot oil hair bath",
    hairBenefit: "Protects against protein degradation during shampooing and chemical processes",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "olive-oil",
    name: "Cold-Pressed Extra Virgin Olive Oil",
    amharicName: "የወይራ ዘይት (Woyra)",
    iconType: "sun",
    keyNutrients: "Squalene, Oleuropein, Vitamin E",
    targetConcerns: ["Heat Damage", "Coarse Texture", "Lack of Elasticity"],
    description: "A timeless Mediterranean and Habesha classic. Squalene seals the outer cuticle, locking hydration within for days.",
    howWeUseIt: "Blended with pure honey for our signature deep conditioning bath",
    hairBenefit: "Restores supple flexibility to brittle strands and enhances natural curl definition",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "honey",
    name: "Ethiopian Forest Raw Honey",
    amharicName: "ንፁህ ማር (Mar)",
    iconType: "heart-handshake",
    keyNutrients: "Natural Humectants, Glucose Oxidase, B Vitamins",
    targetConcerns: ["Chronically Dry Hair", "Bacterial Scalp Issues"],
    description: "Pure unprocessed honey from Ethiopian flora. As a natural humectant, it pulls moisture directly from the atmosphere into the hair fiber.",
    howWeUseIt: "Added to all deep conditioning botanical masks",
    hairBenefit: "Locks long-lasting moisture, adds mirror shine, and soothes scalp bacteria",
    image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "coffee",
    name: "Ethiopian Yirgacheffe Coffee Bean Scrub",
    amharicName: "የኢትዮጵያ ቡና (Buna)",
    iconType: "coffee",
    keyNutrients: "Caffeine, Chlorogenic Acid, Polyphenols",
    targetConcerns: ["DHT Hair Loss", "Dull Color", "Follicle Dormancy"],
    description: "Rich caffeine blocks DHT hormones responsible for hair thinning while finely milled grounds gently polish away scalp debris.",
    howWeUseIt: "Scalp scrub therapy followed by cooling herbal toner",
    hairBenefit: "Blocks DHT follicle shrinkage, stimulates root metabolism, and enriches brown/black tones",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    badge: "Caffeine Boost"
  },
  {
    id: "banana",
    name: "Silky Ripe Banana Cream",
    amharicName: "ሙዝ (Muz)",
    iconType: "smile",
    keyNutrients: "Potassium, Natural Silicas, Vitamin B6",
    targetConcerns: ["Elasticity Loss", "Rough Cuticles", "Split Ends"],
    description: "Rich in natural silicas that help synthesize collagen, making hair noticeably thicker, softer, and more resilient to mechanical tension.",
    howWeUseIt: "Whipped into a silky smoothing mask for deep hydration",
    hairBenefit: "Improves strand manageability, strengthens elasticity, and eliminates frizz",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sesame",
    name: "Pure Sesame Seed Oil",
    amharicName: "የሰሊጥ ዘይት (Selit)",
    iconType: "sparkle",
    keyNutrients: "Sesamin, Vitamin K, Zinc, Essential Fatty Acids",
    targetConcerns: ["UV Sun Degradation", "Scalp Dryness", "Breakage"],
    description: "One of the oldest healing oils in East Africa. Naturally shields hair from harsh tropical UV rays while deeply conditioning from root to tip.",
    howWeUseIt: "Finishing gloss and warm scalp sealant",
    hairBenefit: "Natural UV ray protection, deep scalp hydration, and high-gloss non-greasy luster",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80"
  }
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: "course-pro-makeup",
    title: "Master Professional Makeup Artistry",
    duration: "3 Months (Intensive)",
    level: "All Levels",
    schedule: "Weekday Morning",
    price: "12,500 ETB",
    description: "Comprehensive bridal, editorial, television, and everyday glam training with live model practice, lighting mastery, and professional portfolio development.",
    syllabus: [
      "Skin Anatomy, Color Theory & Skin Undertone Matching",
      "Traditional Habesha Kemis & Modern White Bridal Glam",
      "Contouring, Highlighting, Baking & HD Airbrushing",
      "Eye Artistry: Winged Liner, Cut Crease, Smokey & Lashes",
      "Sanitation, Hygiene & Pro Artist Kit Management",
      "Client Consultation, Social Media Branding & Business"
    ],
    includes: [
      "Professional 24-Piece Makeup Brush Set",
      "Official Hiber Academy Diploma (Government Accredited)",
      "Portfolio Photoshoot with Professional Models",
      "Job Placement Assistance in Top Salons"
    ],
    certification: "Accredited Master Makeup Artist Diploma",
    popular: true,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "course-hair-styling",
    title: "Master Hairstyling, Cuts & Thermal Art",
    duration: "4 Months",
    level: "Beginner",
    schedule: "Weekday Afternoon",
    price: "15,000 ETB",
    description: "From precision shear cutting and layering to luxury silk press, thermal curling, blowouts, and advanced chemical texturizing.",
    syllabus: [
      "Hair Structure, Scalp Health & Porosity Analysis",
      "Precision Geometric Cutting, Bob Styles & Layering",
      "Thermal Silk Press, Flat Iron & Wand Curling Art",
      "Relaxing, Perms & Keratin Smoothing Techniques",
      "Salon Ergonomics, Blowout Speed & Volume Mastery",
      "Commercial Salon Operations & Pricing Strategy"
    ],
    includes: [
      "Full Hairdressing Tool Kit (Shears, Combs, Blowdryer)",
      "High-Density Mannequin Practice Head",
      "Graduation Cap & Gown Ceremony Celebration",
      "Internship at Hiber Salon Bahir Dar"
    ],
    certification: "Certified Professional Hair Stylist Diploma",
    popular: true,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "course-braiding-shuruba",
    title: "Advanced Traditional Braiding & Shuruba",
    duration: "2 Months",
    level: "All Levels",
    schedule: "Weekend Intensive",
    price: "9,500 ETB",
    description: "Master intricate traditional Ethiopian Shuruba designs, modern knotless braids, stitch cornrows, goddess locs, and dreadlock maintenance.",
    syllabus: [
      "Traditional Habesha Shuruba Patterns & Heritage Art",
      "Feed-in Braids, Stitch Cornrows & Geometric Partings",
      "Knotless Box Braids & Goddess Bohemian Curls",
      "Twists, Faux Locs, Passion Twists & Micro-braids",
      "Scalp Tension Management & Edge Preservation",
      "Fast Braiding Speed Drills & Client Retention"
    ],
    includes: [
      "Braiding Practice Kit & Parting Combs",
      "Certificate of Master Braiding Artistry",
      "Live Model Showcase Participation",
      "Business Guide to Mobile & Salon Braiding"
    ],
    certification: "Certified Master Braiding & Shuruba Specialist",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "course-natural-formulation",
    title: "Natural Hair Care & Botanical Formulation",
    duration: "1.5 Months",
    level: "Intermediate",
    schedule: "Summer Class",
    price: "8,000 ETB",
    description: "Learn how to formulate organic hair masks, hot oil infusions, and scalp growth elixirs using indigenous Ethiopian herbs like Nug, Abish, and Rosemary.",
    syllabus: [
      "Chemistry of Botanical Oils, Butters & Hydrosols",
      "Formulating Nug & Rosemary Scalp Stimulants",
      "Abish (Fenugreek) Protein Deep Conditioning Recipes",
      "Steam Therapy Protocols & Porosity Treatments",
      "Organic Product Preservation & Natural Packaging",
      "Creating Your Own Natural Hair Care Brand"
    ],
    includes: [
      "Raw Botanical Ingredients Starter Kit",
      "Formulation Recipe Manual & Steam Protocols",
      "Certificate in Botanical Trichology & Hair Wellness",
      "Direct Mentorship from Hiber Founder"
    ],
    certification: "Certified Botanical Hair Care Practitioner",
    popular: true,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "course-nails-esthetics",
    title: "Nail Technology & Luxury Esthetics",
    duration: "2 Months",
    level: "Beginner",
    schedule: "Weekday Morning",
    price: "10,000 ETB",
    description: "Russian dry manicures, acrylic sculpting, gel extensions, nail art trends, brow lamination, lash extensions, and facial skincare essentials.",
    syllabus: [
      "Nail Anatomy, Nail Diseases & Hospital-grade Sanitation",
      "Russian Dry Manicure & E-File Precision Technique",
      "Hard Gel, Builder Gel & Acrylic Sculpting",
      "3D Nail Art, Ombré, Chrome & Gold Foiling",
      "Brow Mapping, Tinting & Lash Extensions Application",
      "Pricing Nail Sets & Social Media Client Attraction"
    ],
    includes: [
      "Professional E-File Machine & Gel Starter Kit",
      "Nail Technician Diploma",
      "Hands-on Live Practice Sessions",
      "Graduate Directory Listing"
    ],
    certification: "Certified Master Nail Technician & Esthetician",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "course-summer-bootcamp",
    title: "All-in-One Summer Beauty Bootcamp",
    duration: "6 Weeks (Accelerated)",
    level: "All Levels",
    schedule: "Summer Class",
    price: "14,000 ETB",
    description: "Fast-track comprehensive crash course designed for high school & university students on summer break. Covers makeup, hair styling, braiding, and nails.",
    syllabus: [
      "Module 1: Everyday & Event Makeup Artistry",
      "Module 2: Essential Hair Styling, Blowouts & Curls",
      "Module 3: Top Trending Braids & Shuruba Basics",
      "Module 4: Gel Nails, Manicures & Brow Grooming",
      "Module 5: Starting Your Freelance Beauty Business"
    ],
    includes: [
      "Comprehensive Multi-Discipline Starter Kit",
      "Summer Academy Certificate of Completion",
      "Graduation Runway Showcase & Ceremony",
      "Alumni Network Membership"
    ],
    certification: "Summer Beauty Professional Certificate",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  }
];

export const GRADUATE_STORIES: GraduateStory[] = [
  {
    id: "grad-1",
    name: "Selamawit Tadesse",
    course: "Master Professional Makeup Artistry",
    graduationYear: "Class of 2025",
    achievement: "Founder & Lead Artist at Selam Glam Studio, Bahir Dar",
    quote: "Enrolling in Hiber Beauty Academy transformed my passion into a thriving business. The hands-on training with real bridal models gave me the confidence to charge premium rates.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    salonLocation: "Bahir Dar, Kebele 13"
  },
  {
    id: "grad-2",
    name: "Bethlehem Assefa",
    course: "Master Hairstyling & Natural Hair Care",
    graduationYear: "Class of 2024",
    achievement: "Head Stylist & Botanical Hair Specialist",
    quote: "The knowledge of Ethiopian botanical ingredients like Nug and Abish set me apart from everyone else in the industry. Hiber's instructors are truly world-class mentors.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
    salonLocation: "Addis Ababa, Bole"
  },
  {
    id: "grad-3",
    name: "Hanan Mohammed",
    course: "Advanced Traditional Braiding & Shuruba",
    graduationYear: "Class of 2025",
    achievement: "Celebrity Braider & Bridal Consultant",
    quote: "From traditional royal Shuruba to modern knotless techniques, the precision I learned at Hiber helped me build a fully booked client roster within 2 months of graduation.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    salonLocation: "Bahir Dar, Kebele 4"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Traditional Ethiopian Royal Bridal Melse",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    caption: "Intricate Shuruba, gold headpiece styling, and radiant bridal makeup for a royal Bahir Dar wedding."
  },
  {
    id: "gal-2",
    title: "Signature Intricate Stitch Cornrows",
    category: "braids",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
    caption: "Flawless precision geometric partings and long-lasting scalp-nourishing braiding art."
  },
  {
    id: "gal-3",
    title: "Academy Graduation Ceremony Celebration",
    category: "academy",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    caption: "Proud Hiber Academy graduates in academic gowns receiving their accredited diplomas."
  },
  {
    id: "gal-4",
    title: "Natural Nug & Abish Steam Treatment",
    category: "botanical",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
    caption: "Client undergoing our signature warm organic hair growth steam treatment."
  },
  {
    id: "gal-5",
    title: "High-Definition Editorial Soft Glam",
    category: "makeup",
    image: "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=900&q=80",
    caption: "Luminous skin finish, sculpted contours, and feathered brows created by our senior makeup artist."
  },
  {
    id: "gal-6",
    title: "Luxury Silk Press & High-Gloss Finish",
    category: "hair_styling",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    caption: "Zero-damage thermal silk press on 4C natural curls with fluid movement and mirror shine."
  },
  {
    id: "gal-7",
    title: "Academy Practical Class with Live Models",
    category: "academy",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    caption: "Hiber students mastering contouring and eye makeup techniques under one-on-one instructor guidance."
  },
  {
    id: "gal-8",
    title: "Gold Foil & Minimalist Luxury Nail Art",
    category: "makeup",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
    caption: "Custom Russian gel manicure with hand-painted gold leaf accents."
  },
  {
    id: "gal-9",
    title: "Modern Habesha Kemis Bridal Glam",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    caption: "Radiant golden tones paired with authentic Ethiopian bridal jewelry."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Rahel Mekonnen",
    role: "Bride",
    content: "Hiber made my wedding day in Bahir Dar utterly magical! The bridal team arrived promptly, perfected my hair, Melse headpiece, and makeup to stay flawless for 14 hours straight through all the dancing and heat. The best salon in Ethiopia!",
    rating: 5,
    service: "Imperial Bridal Glam Package",
    date: "January 2026",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    verified: true
  },
  {
    id: "test-2",
    name: "Eden Desta",
    role: "Regular Client",
    content: "My edges were severely damaged from tight weaves in the past. After 6 sessions of Hiber's Niger Seed & Rosemary steam therapy, my hair has grown back thicker than ever. Their natural care line is pure gold.",
    rating: 5,
    service: "Natural Botanical Growth Therapy",
    date: "February 2026",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    verified: true
  },
  {
    id: "test-3",
    name: "Tsion Kassa",
    role: "Academy Graduate",
    content: "Graduating from Hiber Beauty Academy gave me practical, real-world mastery. The instructors don't just teach theory—they teach you how to build high-paying client relationships. Today, I run my own salon with 4 employees!",
    rating: 5,
    service: "Master Hairstyling & Makeup Diploma",
    date: "November 2025",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    verified: true
  },
  {
    id: "test-4",
    name: "Marta Girma",
    role: "Salon Client",
    content: "The ambiance at Friendship Building is unmatched. Luxurious, pristine black and gold interior, soothing music, and complimentary coffee. Every appointment feels like royalty treatment.",
    rating: 5,
    service: "Silk Press & Luxury Nail Spa",
    date: "January 2026",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    verified: true
  }
];

export const BEAUTY_PACKAGES: PackageDeal[] = [
  {
    id: "pkg-queen-tana",
    title: "Queen of Lake Tana Spa & Glow",
    tagline: "The ultimate full-body and hair revitalizing experience",
    price: "3,800 ETB",
    originalValue: "5,200 ETB",
    duration: "3.5 hrs",
    servicesIncluded: [
      "Fresh Botanical Avocado & Nug Hair Steam Mask",
      "Radiance Facial with Ethiopian Honey & Turmeric Detox",
      "Russian Gel Manicure & Luxury Pedicure Spa",
      "Silk Press or Defined Wand Curls Styling",
      "Complimentary Ethiopian Gourmet Coffee & Refreshments"
    ],
    bestFor: "Special occasions, birthdays, and comprehensive monthly self-care",
    featured: true,
    badge: "Most Popular"
  },
  {
    id: "pkg-bridal-royale",
    title: "Imperial Bahir Dar Bridal Royale",
    tagline: "Full-spectrum bridal perfection for your grand celebration",
    price: "9,500 ETB",
    originalValue: "13,000 ETB",
    duration: "Full Day / 2 Sessions",
    servicesIncluded: [
      "Pre-Wedding Trial Makeup & Hair Consultation",
      "Wedding Day HD Waterproof Bridal Glam Makeup",
      "Royal Shuruba or Sculpted Bridal Updo with Crown Placement",
      "Traditional Dark Mahogany Henna Art (Hands & Feet)",
      "Luxury Gel Extensions with Gold Line Accent Art",
      "Emergency Touch-Up Kit & Lipstick Set"
    ],
    bestFor: "Brides wanting complete, stress-free luxury from pre-wedding to evening reception",
    featured: true,
    badge: "Bridal Signature"
  },
  {
    id: "pkg-crown-rebirth",
    title: "Natural Crown Rebirth Protocol",
    tagline: "Intensive 4-week hair restoration & growth package",
    price: "4,200 ETB",
    originalValue: "5,800 ETB",
    duration: "4 Weekly Sessions",
    servicesIncluded: [
      "4x Weekly Herbal Steam Infusions (Nug, Abish, Rosemary, Onion)",
      "Coffee Bean & Aloe Scalp Purification Scrub",
      "Precision Split-End Micro Dusting Cut",
      "Take-Home 100ml Botanical Scalp Growth Elixir",
      "Personalized Scalp Progress Tracking"
    ],
    bestFor: "Clients suffering from breakage, slow growth, postpartum shedding, or edge loss"
  },
  {
    id: "pkg-weekend-refresh",
    title: "Executive Weekend Quick Refresh",
    tagline: "High-speed glam for working professionals",
    price: "1,900 ETB",
    originalValue: "2,600 ETB",
    duration: "1.5 hrs",
    servicesIncluded: [
      "Express Hydration Hair Wash & Blowout",
      "Brow Threading & Natural Tinting",
      "Gel Express Polish Change",
      "Soft Daylight Camera-Ready Makeup"
    ],
    bestFor: "Friday afternoons, conferences, and weekend social events"
  }
];

export const WHY_CHOOSE_HIBER = [
  {
    title: "Authentic Botanical Formulations",
    description: "We harness indigenous Ethiopian super-ingredients (Nug, Abish, Rosemary, Honey, Coffee) prepared fresh in our laboratory bar for proven, zero-chemical hair restoration.",
    icon: "sparkles"
  },
  {
    title: "Government-Accredited Academy",
    description: "Our training curriculum is fully certified, producing over 1,200 successful graduates who now lead top salons across Ethiopia and abroad.",
    icon: "award"
  },
  {
    title: "Bahir Dar Prime Luxury Suite",
    description: "Located centrally on the 2nd floor of Friendship Building (Kebele 4) in front of St. George Church, with high-end modern salon amenities, VIP rooms, and private bridal suites.",
    icon: "map-pin"
  },
  {
    title: "Master Educators & Stylists",
    description: "Our artists undergo rigorous continuing education and have styled over 8,500 clients, including high-profile Ethiopian weddings and media productions.",
    icon: "users"
  },
  {
    title: "Strict Hospital-Grade Hygiene",
    description: "All metal implements are autoclave-sterilized, brushes sanitized between every client, and single-use disposables utilized for every facial and nail service.",
    icon: "shield-check"
  },
  {
    title: "Client-Centric Guarantee",
    description: "We prioritize your hair health above all. Every service begins with a thorough scalp and style consultation to ensure 100% satisfaction.",
    icon: "heart"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "salon",
    question: "Where is Hiber Beauty Salon & Academy located in Bahir Dar?",
    answer: "We are located at Kebele 4, Friendship Building, 2nd Floor, directly in front of St. George Church in Bahir Dar, Ethiopia. We are easily accessible with ample parking and elevator access."
  },
  {
    id: "faq-2",
    category: "salon",
    question: "Do I need an appointment or can I walk in?",
    answer: "While we gladly welcome walk-ins based on stylist availability, we strongly recommend booking in advance—especially for bridal services, silk presses, intricate Shuruba braiding, and chemical coloring—to guarantee your preferred time slot and stylist."
  },
  {
    id: "faq-3",
    category: "natural_care",
    question: "How do your natural botanical treatments help with hair growth and edge recovery?",
    answer: "Our treatments combine freshly extracted Ethiopian oils (Niger seed/Nug, Sesame, Coconut) and herbal actives (Fenugreek/Abish, Red Onion sulfur, Rosemary, Ginger, Coffee). When delivered under deep ozone steam, these nutrients penetrate the hair cortex and stimulate micro-circulation around dormant follicles, resulting in visibly reduced shedding and accelerated regrowth."
  },
  {
    id: "faq-4",
    category: "academy",
    question: "What are the requirements to enroll in Hiber Beauty Academy?",
    answer: "We welcome passionate individuals of all experience levels! You only need a valid Ethiopian ID (or passport), 2 passport-size photographs, and a minimum age of 16. We offer beginner foundation tracks as well as advanced masterclasses. Both weekday and weekend classes are available."
  },
  {
    id: "faq-5",
    category: "academy",
    question: "Do students receive an accredited certificate and tool kit?",
    answer: "Yes! Every graduate of our full diploma courses receives an official accredited certificate recognized across Ethiopia, along with a comprehensive professional starter tool kit and portfolio photography of their practical model work to kickstart their career immediately."
  },
  {
    id: "faq-6",
    category: "bridal",
    question: "How far in advance should I book my bridal beauty package?",
    answer: "We recommend reserving your wedding date 1 to 3 months in advance, especially during peak wedding seasons (Meskel, Timket, Genna, and post-Easter). This allows adequate time for hair trials, scalp prep regimens, and bridal party coordination."
  }
];
