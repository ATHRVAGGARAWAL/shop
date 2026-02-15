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
        name: 'Philips 9W LED Bulb (Cool Daylight)',
        description: 'Energy-efficient 9W LED bulb with B22 base, providing bright and cool daylight illumination for everyday use.',
        price: 99.00,
        category: 'LED Bulbs',
        image: 'https://images.philips.com/is/image/PhilipsConsumer/929002389613-IMS-en_IN?$jpglarge$&wid=800',
        brand: 'Philips',
        specifications: {
            'Wattage': '9W',
            'Base': 'B22',
            'Color': '6500K (Cool Daylight)',
            'Lumens': '900lm'
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
        image: 'https://images.philips.com/is/image/PhilipsConsumer/929001955301-IMS-en_IN?$jpglarge$&wid=800',
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
        image: 'https://images.philips.com/is/image/PhilipsConsumer/929002216801-IMS-en_IN?$jpglarge$&wid=800',
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
        image: 'https://images.philips.com/is/image/PhilipsConsumer/929002449701-IMS-en_IN?$jpglarge$&wid=800',
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
        id: 'philips-slimline-batten-20w',
        name: 'Philips Slimline Advance LED Batten 20W',
        description: 'Sleek and slim 20W LED batten providing uniform, glare-free light. Perfect replacement for traditional tubelights.',
        price: 349.00,
        category: 'Tube Lights',
        image: 'https://images.philips.com/is/image/PhilipsConsumer/919215850259-IMS-en_IN?$jpglarge$&wid=800',
        brand: 'Philips',
        specifications: {
            'Wattage': '20W',
            'Length': '4 Feet',
            'Color': '6500K',
            'Material': 'Polycarbonate'
        },
        stock: 300
    },
    {
        id: 'philips-pomeron-spotlight-7w',
        name: 'Philips Pomeron LED Spotlight 7W',
        description: 'Adjustable recessed LED spotlight with a clean beam and focused light. Ideal for accent lighting in modern interiors.',
        price: 650.00,
        category: 'Spotlights',
        image: 'https://images.philips.com/is/image/PhilipsConsumer/5977631M3-IMS-en_IN?$jpglarge$&wid=800',
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
        image: 'https://images.philips.com/is/image/PhilipsConsumer/919215850383-IMS-en_IN?$jpglarge$&wid=800',
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
        image: 'https://images.philips.com/is/image/PhilipsConsumer/5975231J0-IMS-en_IN?$jpglarge$&wid=800',
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
