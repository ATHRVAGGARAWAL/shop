export type Category = 'LED Bulbs' | 'Smart Lighting' | 'Tube Lights' | 'Ceiling Lights' | 'Spotlights';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    image: string;
    brand: string;
    specifications: Record<string, string>;
    stock: number;
    isNew?: boolean;
    isBestseller?: boolean;
}

export const products: Product[] = [
    {
        id: 'philips-9w-led-b22',
        name: 'Philips AceSaver 9W LED Bulb (Golden Yellow)',
        description: 'Energy-efficient 9W AceSaver LED bulb with E27 base and EyeComfort technology. Provides warm golden yellow illumination with up to 87% energy saving.',
        price: 99.00,
        category: 'LED Bulbs',
        image: 'https://via.placeholder.com/800x800.png?text=Philips+Bulb',
        brand: 'Philips',
        specifications: {
            'Wattage': '9W',
            'Base': 'E27',
            'Color': '3000K (Golden Yellow)',
            'Lumens': '825lm',
            'Energy Saving': 'Up to 87%',
            'Technology': 'EyeComfort'
        },
        stock: 500,
        isBestseller: true
    },
    {
        id: 'philips-10w-t-bulb',
        name: 'Philips T-Bulb 10W (Cool Daylight)',
        description: 'Innovative T-shaped LED bulb with a wider light spread and flexible swivelling head for customizable lighting.',
        price: 299.00,
        category: 'LED Bulbs',
        image: 'https://via.placeholder.com/800x800.png?text=T-Bulb',
        brand: 'Philips',
        specifications: {
            'Wattage': '10W',
            'Base': 'B22',
            'Shape': 'T-Bulb',
            'Feature': 'Swivelling Head'
        },
        stock: 200
    },
    {
        id: 'philips-hue-wca-bulb',
        name: 'Philips Hue White & Color Ambiance Bulb',
        description: 'Smart LED bulb offering 16 million colors and shades of white. Control via Bluetooth or Hue Bridge for voice and app control.',
        price: 3899.00,
        category: 'Smart Lighting',
        image: 'https://via.placeholder.com/800x800.png?text=Hue+Smart+Bulb',
        brand: 'Philips Hue',
        specifications: {
            'Colors': '16 Million',
            'Control': 'App & Voice',
            'Base': 'E27',
            'Dimmable': 'Yes'
        },
        stock: 50,
        isNew: true
    },
    {
        id: 'philips-wiz-9w-smart',
        name: 'Philips WiZ Smart LED Bulb 9W',
        description: 'Wi-Fi enabled smart bulb with tunable white and multicolor options. Works with existing Wi-Fi, no hub required.',
        price: 899.00,
        category: 'Smart Lighting',
        image: 'https://via.placeholder.com/800x800.png?text=WiZ+Smart+LED',
        brand: 'Philips WiZ',
        specifications: {
            'Wattage': '9W',
            'Connectivity': 'Wi-Fi',
            'Feature': 'Tunable White & Color',
            'Base': 'B22'
        },
        stock: 150
    },
    {
        id: 'philips-starbright-batten-40w',
        name: 'Philips StarBright LED Batten 40W',
        description: 'Transform your space with a wider, sleeker and brighter batten. 40W StarBright LED batten with 4000 lumens for superior illumination in homes and offices.',
        price: 649.00,
        category: 'Tube Lights',
        image: 'https://via.placeholder.com/800x800.png?text=LED+Batten',
        brand: 'Philips',
        specifications: {
            'Wattage': '40W',
            'Length': '4 Feet',
            'Lumens': '4000lm',
            'Color': '6500K (Cool Daylight)',
            'Design': '2x Wider, 2x Brighter, 3x Sleek'
        },
        stock: 300
    },
    {
        id: 'philips-pomeron-spotlight-7w',
        name: 'Philips Pomeron LED Spotlight 7W',
        description: 'Adjustable recessed LED spotlight with a clean beam and focused light. Ideal for accent lighting in modern interiors.',
        price: 650.00,
        category: 'Spotlights',
        image: 'https://via.placeholder.com/800x800.png?text=Spotlight',
        brand: 'Philips',
        specifications: {
            'Wattage': '7W',
            'Cutout': '70mm',
            'Adjustable Head': 'Yes',
            'Color': 'Warm White'
        },
        stock: 100
    },
    {
        id: 'philips-dome-ceiling-light',
        name: 'Philips 12W LED Dome Ceiling Light',
        description: 'Surface mounted dome light providing soft, diffused lighting for general illumination in living areas.',
        price: 799.00,
        category: 'Ceiling Lights',
        image: 'https://via.placeholder.com/800x800.png?text=Dome+Ceiling+Light',
        brand: 'Philips',
        specifications: {
            'Wattage': '12W',
            'Mounting': 'Surface',
            'Shape': 'Round',
            'Color': 'Cool Day Light'
        },
        stock: 80
    },
    {
        id: 'philips-star-surface-downlight',
        name: 'Philips Star Surface Downlight 6W',
        description: 'Compact and efficient surface-mounted downlight. Easy installation on standard ceilings without cutting.',
        price: 550.00,
        category: 'Ceiling Lights',
        image: 'https://via.placeholder.com/800x800.png?text=Surface+Downlight',
        brand: 'Philips',
        specifications: {
            'Wattage': '6W',
            'Shape': 'Square/Round',
            'Finish': 'White',
            'Type': 'Surface Mount'
        },
        stock: 120
    }
];
