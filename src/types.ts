export interface Watch {
    id: string;
    name: string;
    brand: string;
    collection: string;
    price: number;
    image: string;
    gender: 'Men' | 'Women' | 'Unisex';
    category: 'Classic' | 'Sports' | 'Smart' | 'Luxury';
    description: string;
    featured?: boolean;
    onSale?: boolean;
    discountPrice?: number;
}

export const WATCH_COLLECTION: Watch[] = [
    // --- ROLEX (Target 4+) ---
    {
        id: 'r1',
        name: 'DAY-DATE 40',
        brand: 'Rolex',
        collection: 'Oyster Perpetual',
        price: 2800000,
        image: 'images/generated/men_watch_gold.png',
        gender: 'Men',
        category: 'Luxury',
        description: 'The president\'s watch, redefined in 18k yellow gold.',
        featured: true
    },
    {
        id: 'r2',
        name: 'SUBMARINER DATE',
        brand: 'Rolex',
        collection: 'Professional',
        price: 950000,
        image: 'images/generated/men_watch_4.png',
        gender: 'Men',
        category: 'Sports',
        description: 'The reference among divers\' watches.',
    },
    {
        id: 'r3',
        name: 'LADY-DATEJUST',
        brand: 'Rolex',
        collection: 'Classic',
        price: 850000,
        image: 'images/generated/women_watch_gold.png',
        gender: 'Women',
        category: 'Luxury',
        description: 'Grace and elegance in a timeless design.',
    },
    {
        id: 'r4',
        name: 'DAYTONA LUXE',
        brand: 'Rolex',
        collection: 'Professional',
        price: 3500000,
        image: 'images/generated/rolex_daytona.png',
        gender: 'Men',
        category: 'Sports',
        description: 'The ultimate tool watch for those with a passion for driving and speed.',
    },

    // --- OMEGA (Target 4+) ---
    {
        id: 'o1',
        name: 'SPEEDMASTER MOON',
        brand: 'Omega',
        collection: 'Speedmaster',
        price: 650000,
        image: 'images/generated/men_watch_sport.png',
        gender: 'Men',
        category: 'Sports',
        description: 'The legendary chronograph that accompanied the Apollo missions.',
    },
    {
        id: 'o2',
        name: 'CONSTELLATION CO-AXIAL',
        brand: 'Omega',
        collection: 'Constellation',
        price: 450000,
        image: 'images/generated/omega_constellation_unique.png',
        gender: 'Women',
        category: 'Luxury',
        description: 'Characterized by its famous "claws" and beautiful mother-of-pearl dial.',
    },
    {
        id: 'o3',
        name: 'SEAMASTER DIVER 300M',
        brand: 'Omega',
        collection: 'Seamaster',
        price: 520000,
        image: 'images/generated/omega_seamaster.png',
        gender: 'Men',
        category: 'Sports',
        description: 'A professional timepiece with a maritime soul.',
    },
    {
        id: 'o4',
        name: 'DE VILLE PRESTIGE',
        brand: 'Omega',
        collection: 'De Ville',
        price: 380000,
        image: 'images/generated/omega_deville.png',
        gender: 'Women',
        category: 'Classic',
        description: 'Simple and elegant, the quintessential dress watch.',
    },

    // --- PATEK PHILIPPE (Target 4+) ---
    {
        id: 'p1',
        name: 'NAUTILUS BLUE',
        brand: 'Patek Philippe',
        collection: 'Nautilus',
        price: 6500000,
        image: 'images/generated/patek_nautilus.png',
        gender: 'Men',
        category: 'Luxury',
        description: 'An elegant sports watch with an iconic porthole design.',
        featured: true
    },
    {
        id: 'p2',
        name: 'ANNUAL CALENDAR',
        brand: 'Patek Philippe',
        collection: 'Complications',
        price: 3200000,
        image: 'images/generated/men_watch_2.png',
        gender: 'Men',
        category: 'Luxury',
        description: 'Mechanical excellence with a sophisticated aesthetic.',
    },
    {
        id: 'p3',
        name: 'CALATRAVA WHITE GOLD',
        brand: 'Patek Philippe',
        collection: 'Calatrava',
        price: 2500000,
        image: 'images/generated/women_watch_silver.png', // Placeholder unique-ish
        gender: 'Women',
        category: 'Classic',
        description: 'Pure elegance and minimalist design.',
    },
    {
        id: 'p4',
        name: 'AQUANAUT SPORT',
        brand: 'Patek Philippe',
        collection: 'Aquanaut',
        price: 4200000,
        image: 'images/generated/men_watch_3.png', // Placeholder unique-ish
        gender: 'Men',
        category: 'Sports',
        description: 'Modern, sporty and chic.',
    },

    // --- CARTIER (Target 4+) ---
    {
        id: 'c1',
        name: 'BALLON BLEU',
        brand: 'Cartier',
        collection: 'Ballon Bleu',
        price: 1200000,
        image: 'images/generated/women_watch_1.png',
        gender: 'Women',
        category: 'Luxury',
        description: 'Floating like a balloon, as blue as the sapphire cabochon.',
    },
    {
        id: 'c2',
        name: 'SANTOS DE CARTIER',
        brand: 'Cartier',
        collection: 'Santos',
        price: 680000,
        image: 'images/generated/cartier_santos.png',
        gender: 'Men',
        category: 'Luxury',
        description: 'One of the first wristwatches in history, designed for pilots.',
    },
    {
        id: 'c3',
        name: 'PANTHÈRE DE CARTIER',
        brand: 'Cartier',
        collection: 'Panthère',
        price: 2200000,
        image: 'images/generated/cartier_panthere.png',
        gender: 'Women',
        category: 'Luxury',
        description: 'A jewelry watch that doubles as a piece of high art.',
    },
    {
        id: 'c4',
        name: 'TANK LOUIS',
        brand: 'Cartier',
        collection: 'Tank',
        price: 850000,
        image: 'images/generated/women_watch_3.png', // Placeholder unique-ish
        gender: 'Unisex',
        category: 'Classic',
        description: 'The symbol of historical elegance since 1917.',
    },

    // --- AUDEMARS PIGUET (Target 4) ---
    {
        id: 'a1',
        name: 'ROYAL OAK SELFWINDING',
        brand: 'Audemars Piguet',
        collection: 'Royal Oak',
        price: 4500000,
        image: 'images/generated/hero_banner.png',
        gender: 'Men',
        category: 'Luxury',
        description: 'The iconic octagonal bezel and integrated bracelet.',
        featured: true
    },
    {
        id: 'a2',
        name: 'ROYAL OAK ROSE',
        brand: 'Audemars Piguet',
        collection: 'Royal Oak',
        price: 5500000,
        image: 'images/generated/hero_banner_v2.png',
        gender: 'Men',
        category: 'Luxury',
        description: 'Warm gold tones for the ultimate statement.',
    },
    {
        id: 'a3',
        name: 'OFFSHORE CHRONO',
        brand: 'Audemars Piguet',
        collection: 'Royal Oak Offshore',
        price: 3200000,
        image: 'images/generated/men_watch_5.png',
        gender: 'Men',
        category: 'Sports',
        description: 'Robust and powerful chronograph performance.',
    },
    {
        id: 'a4',
        name: 'CONCEPT TOURBILLON',
        brand: 'Audemars Piguet',
        collection: 'Royal Oak Concept',
        price: 9500000,
        image: 'images/generated/men_watch_6.png',
        gender: 'Men',
        category: 'Luxury',
        description: 'The cutting edge of haute horlogerie.',
    },

    // --- INTERNATIONAL BRANDS (Expansion) ---
    {
        id: 'i1',
        name: 'A-LOGO ELITE',
        brand: 'AIGNER',
        collection: 'Heritage',
        price: 85000,
        image: 'images/generated/aigner_watch.png',
        gender: 'Men',
        category: 'Luxury',
        description: 'Distinctive horseshoe design with premium leather.'
    },
    {
        id: 'i2',
        name: 'AX CHRONO',
        brand: 'ARMANI EXCHANGE',
        collection: 'Street',
        price: 25000,
        image: 'images/generated/armani_exchange_watch.png',
        gender: 'Men',
        category: 'Sports',
        description: 'Bold urban style for the modern professional.'
    },
    {
        id: 'i3',
        name: 'MEGA CHIEF',
        brand: 'DIESEL',
        collection: 'Brave',
        price: 32000,
        image: 'images/generated/diesel_watch.png',
        gender: 'Men',
        category: 'Sports',
        description: 'Aggressive industrial design with multi-timezone support.'
    },
    {
        id: 'i4',
        name: 'SIGNATURE ROSE',
        brand: 'COACH',
        collection: 'Madison',
        price: 28000,
        image: 'images/generated/coach_watch_women.png',
        gender: 'Women',
        category: 'Classic',
        description: 'Elegant rose gold with signature C pattern.'
    },
    {
        id: 'i5',
        name: 'PRX POWERMATIC',
        brand: 'Tissot',
        collection: 'T-Classic',
        price: 65000,
        image: 'images/generated/tissot_prx.png',
        gender: 'Men',
        category: 'Sports',
        description: 'Retro 1970s style with modern automatic precision.'
    },
    {
        id: 'i6',
        name: 'NAVITIMER 1',
        brand: 'Breitling',
        collection: 'Aviator',
        price: 750000,
        image: 'images/generated/breitling_navitimer.png',
        gender: 'Men',
        category: 'Sports',
        description: 'The legendary calculation tool for pilots.'
    },
    {
        id: 'i7',
        name: 'TITAN ADVENTURE',
        brand: 'Garmin',
        collection: 'Fenix',
        price: 85000,
        image: 'images/generated/garmin_fenix.png',
        gender: 'Unisex',
        category: 'Smart',
        description: 'Built for the ultimate adventure.'
    },
    {
        id: 'i8',
        name: 'MINIMAL FUTURE',
        brand: 'Calvin Klein',
        collection: 'Future',
        price: 18000,
        image: 'images/generated/calvin_klein_minimal.png',
        gender: 'Unisex',
        category: 'Classic',
        description: 'Pure architectural lines for the contemporary wrist.'
    },

    // --- MORE FILLERS FOR VARIETY ---
    {
        id: 'f1',
        name: 'HAPPY DIAMONDS',
        brand: 'Chopard',
        collection: 'Happy Sport',
        price: 1500000,
        image: 'images/generated/women_watch_2.png',
        gender: 'Women',
        category: 'Luxury',
        description: 'Dancing diamonds for a joyful look.',
    },
    {
        id: 'f2',
        name: 'SERPENTI SEDUTTORI',
        brand: 'Bulgari',
        collection: 'Serpenti',
        price: 2200000,
        image: 'images/generated/women_watch_4.png',
        gender: 'Women',
        category: 'Luxury',
        description: 'Born to be gold, glamorous and seductive.',
    },
    {
        id: 'f3',
        name: 'LIMELIGHT GALA',
        brand: 'Piaget',
        collection: 'Limelight',
        price: 3500000,
        image: 'images/generated/women_watch_cuff.png',
        gender: 'Women',
        category: 'Luxury',
        description: 'Radiant curves and diamonds.',
    },
    {
        id: 'f4',
        name: 'PROSPEX DIVER',
        brand: 'Seiko',
        collection: 'Prospex',
        price: 45000,
        image: 'images/generated/men_watch_1.png',
        gender: 'Men',
        category: 'Sports',
        description: 'High-performance diving technology.',
    }
];
