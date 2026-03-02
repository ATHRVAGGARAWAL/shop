export type Category = 'Lighting' | 'Power & Sockets' | 'Safety Systems' | 'Industrial' | 'Smart Home';

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
        id: 'philips-9w-led-bulb',
        name: 'Philips AceSaver 9W LED Bulb',
        description: 'Energy-efficient 9W AceSaver LED bulb with B22 base and EyeComfort technology. Provides cool daylight illumination with significant energy savings.',
        price: 145.00,
        category: 'Lighting',
        image: '/images/philips-bulb.jpg',
        brand: 'Philips',
        specifications: {
            'Wattage': '9W',
            'Base': 'B22',
            'Color': 'Cool Daylight',
            'Lumens': '825lm',
            'Warranty': '2 Years'
        },
        stock: 1200,
        isBestseller: true
    },
    {
        id: 'anchor-penta-switch',
        name: 'Anchor Penta 6A 1 Way Switch',
        description: 'High-quality 1-way switch from Anchor Penta series. Durable, sleek design perfect for modern homes and offices.',
        price: 25.00,
        category: 'Power & Sockets',
        image: '/images/anchor-switch.jpg',
        brand: 'Anchor',
        specifications: {
            'Current': '6A',
            'Type': '1-Way',
            'Series': 'Penta',
            'Color': 'White'
        },
        stock: 5000,
        isBestseller: true
    },
    {
        id: 'havells-fabio-socket',
        name: 'Havells Fabio 16A 3-Pin Socket',
        description: 'Premium 16A socket from Havells Fabio range. Enhanced safety with child shutter and robust build.',
        price: 185.00,
        category: 'Power & Sockets',
        image: '/images/havells-socket.jpg',
        brand: 'Havells',
        specifications: {
            'Current': '16A',
            'Type': '3-Pin',
            'Series': 'Fabio',
            'Safety': 'Child Shutter'
        },
        stock: 800
    },
    {
        id: 'polycab-wire-2.5sqmm',
        name: 'Polycab 2.5 Sq.mm FR Wire (90m)',
        description: 'High-performance Flame Retardant (FR) PVC insulated wire. Ideal for heavy loads like ACs and geysers.',
        price: 2450.00,
        category: 'Industrial',
        image: '/images/polycab-wire.jpg',
        brand: 'Polycab',
        specifications: {
            'Size': '2.5 Sq.mm',
            'Length': '90m',
            'Type': 'FR PVC',
            'Voltage': '1100V'
        },
        stock: 250,
        isNew: true
    },
    {
        id: 'philips-hue-starter-kit',
        name: 'Philips Hue Smart Lighting Starter Kit',
        description: 'Transform your home with the Philips Hue Smart Lighting Kit. includes 3 bulbs and a bridge for full smart control.',
        price: 12999.00,
        category: 'Smart Home',
        image: '/images/hue-kit.jpg',
        brand: 'Philips Hue',
        specifications: {
            'Colors': '16 Million',
            'Connectivity': 'Zigbee/Bluetooth',
            'Voice Control': 'Alexa, Google, Siri'
        },
        stock: 45,
        isNew: true
    },
    {
        id: 'digital-multimeter-pro',
        name: 'Pro-Tech Digital Multimeter',
        description: 'Professional grade digital multimeter for accurate voltage, current, and resistance measurements.',
        price: 3499.00,
        category: 'Safety Systems',
        image: '/images/multimeter.jpg',
        brand: 'Pro-Tech',
        specifications: {
            'Display': 'LCD with Backlight',
            'Accuracy': '0.5%',
            'Safety Rating': 'CAT III 600V'
        },
        stock: 120
    },
    {
        id: 'industrial-stabilizer-5kva',
        name: 'Microtek 5KVA Mainline Stabilizer',
        description: 'Powerful voltage stabilizer for complete home protection. Digital display and high-voltage cutoff.',
        price: 8500.00,
        category: 'Industrial',
        image: '/images/stabilizer.jpg',
        brand: 'Microtek',
        specifications: {
            'Capacity': '5KVA',
            'Input Range': '90V - 300V',
            'Output': '220V +/- 10%'
        },
        stock: 30
    },
    {
        id: 'solar-panel-100w',
        name: 'Luminous 100W Polycrystalline Solar Panel',
        description: 'High-efficiency solar panel for off-grid and hybrid systems. Durable aluminum frame and tempered glass.',
        price: 5500.00,
        category: 'Industrial',
        image: '/images/solar-panel.jpg',
        brand: 'Luminous',
        specifications: {
            'Wattage': '100W',
            'Type': 'Polycrystalline',
            'Warranty': '25 Years'
        },
        stock: 60,
        isNew: true
    }
];
