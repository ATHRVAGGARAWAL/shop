export type Category = 'MCBs' | 'LED Bulbs' | 'Tube Lights' | 'Wires' | 'Industrial Fittings' | 'Switches' | 'Whole Sale';

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
}

export const products: Product[] = [
    {
        id: 'havells-mcb-32a-sp',
        name: 'HAVELLS MCB 32A SINGLE POLE',
        description: 'Reliable 32A single pole circuit breaker for home and industrial protection. Built for safety and longevity.',
        price: 245.00,
        category: 'MCBs',
        image: 'https://rukminim2.flixcart.com/image/832/832/k33ddzk0/circuit-breaker/y/7/h/dhmdcspz032-havells-original-imafm9yv9zbzgqhz.jpeg',
        brand: 'Havells',
        specifications: {
            'Amperage': '32A',
            'Poles': 'Single Pole',
            'Voltage': '240V',
            'Breaking Capacity': '10kA'
        },
        stock: 50
    },
    {
        id: 'siemens-c32-mcb',
        name: 'SIEMENS C32 MCB',
        description: 'High-performance Siemens MCB designed for superior protection and durability in industrial environments.',
        price: 320.00,
        category: 'MCBs',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/VZ/YH/ZM/2290040/siemens-single-pole-mcb-500x500.jpg',
        brand: 'Siemens',
        specifications: {
            'Amperage': '32A',
            'Poles': 'Single Pole',
            'Voltage': '240V'
        },
        stock: 30
    },
    {
        id: 'philips-b22-9w-led',
        name: 'PHILIPS B22 9W LED BULB',
        description: 'Energy-efficient LED bulb with bright white light output and long lifespan.',
        price: 95.00,
        category: 'LED Bulbs',
        image: 'https://images.philips.com/is/image/PhilipsConsumer/929002389613-IMS-en_IN?$jpglarge$&wid=800',
        brand: 'Philips',
        specifications: {
            'Wattage': '9W',
            'Lumens': '900lm',
            'Base': 'B22'
        },
        stock: 100
    },
    {
        id: 'finolex-pvc-wire-1-5sqmm',
        name: 'FINOLEX PVC WIRE 1.5 SQ MM',
        description: 'High-quality copper wire for house wiring applications with flame retardant properties.',
        price: 1850.00,
        category: 'Wires',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/TI/TQ/RY/3218949/finolex-1-5-sq-mm-fr-pvc-insulated-wire-90m--500x500.jpg',
        brand: 'Finolex',
        specifications: {
            'Size': '1.5 sq mm',
            'Length': '90m',
            'Type': 'FR (Flame Retardant)'
        },
        stock: 20
    },
    {
        id: 'schneider-16a-3p-mcb',
        name: 'SCHNEIDER 16A 3-POLE MCB',
        description: 'Commercial grade 3-pole circuit breaker for heavy machinery and industrial panels.',
        price: 1250.00,
        category: 'MCBs',
        image: 'https://download.schneider-electric.com/files?p_Doc_Ref=A9F74316_product_picture',
        brand: 'Schneider Electric',
        specifications: {
            'Amperage': '16A',
            'Poles': '3-Pole',
            'Voltage': '415V'
        },
        stock: 15
    },
    {
        id: 'anchor-roma-6a-1w-switch',
        name: 'ANCHOR ROMA 6A 1-WAY SWITCH',
        description: 'Elegant and durable modular switch from the Roma series, perfect for modern interiors.',
        price: 45.00,
        category: 'Switches',
        image: 'https://4.imimg.com/data4/UV/UK/MY-25459345/anchor-roma-switches-500x500.jpg',
        brand: 'Anchor',
        specifications: {
            'Current': '6A',
            'Type': '1-Way',
            'Module': '1 Module'
        },
        stock: 500
    },
    {
        id: 'polycab-2-5sqmm-3c-cable',
        name: 'POLYCAB 2.5 SQ MM 3-CORE CABLE',
        description: 'Industrial grade flexible 3-core cable for high-power appliance connections.',
        price: 4500.00,
        category: 'Wires',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/2957/EX/RR/ST/1247480/polycab-2-5-sqmm-3-core-copper-flexible-cable-500x500.jpg',
        brand: 'Polycab',
        specifications: {
            'Size': '2.5 sq mm',
            'Cores': '3',
            'Length': '100m'
        },
        stock: 10
    },
    {
        id: 'crompton-20w-led-tube',
        name: 'CROMPTON 20W LED TUBE LIGHT',
        description: 'Efficient cool day light T5 LED tube light for uniform illumination.',
        price: 250.00,
        category: 'Tube Lights',
        image: 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1843?auto=format&fit=crop&q=80&w=800',
        brand: 'Crompton',
        specifications: {
            'Wattage': '20W',
            'Length': '4 Feet',
            'Color': '6500K'
        },
        stock: 60
    },
    {
        id: 'havells-reo-10a-2w-switch',
        name: 'HAVELLS REO 10A 2-WAY SWITCH',
        description: 'Premium finish 2-way switch for staircase and large room lighting control.',
        price: 110.00,
        category: 'Switches',
        image: 'https://images.unsplash.com/photo-1558210404-0985223f0388?auto=format&fit=crop&q=80&w=800',
        brand: 'Havells',
        specifications: {
            'Current': '10A',
            'Type': '2-Way',
            'Series': 'REO'
        },
        stock: 120
    },
    {
        id: 'industrial-plug-16a-3pin',
        name: 'INDUSTRIAL PLUG 16A 3-PIN',
        description: 'Heavy-duty 3-pin industrial plug for rugged environments and secure power delivery.',
        price: 350.00,
        category: 'Industrial Fittings',
        image: 'https://images.unsplash.com/photo-1520114056694-98dff2c3d1aa?auto=format&fit=crop&q=80&w=800',
        brand: 'Legrand',
        specifications: {
            'Rating': '16A',
            'Type': '3-Pin',
            'IP Rating': 'IP44'
        },
        stock: 40
    },
    {
        id: 'panasonic-12w-led-panel',
        name: 'PANASONIC 12W LED PANEL',
        description: 'Slim recessed LED panel light with anti-glare diffuser for office ceilings.',
        price: 395.00,
        category: 'LED Bulbs',
        image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&q=80&w=800',
        brand: 'Panasonic',
        specifications: {
            'Wattage': '12W',
            'Shape': 'Round',
            'Cutout': '5 Inch'
        },
        stock: 80
    },
    {
        id: 'l&t-63a-rccb-4p',
        name: 'L&T 63A RCCB 4-POLE',
        description: 'Residual Current Circuit Breaker providing superior protection against earth leakage currents.',
        price: 2850.00,
        category: 'MCBs',
        image: 'https://images.unsplash.com/photo-1621905252507-b35482cdca47?auto=format&fit=crop&q=80&w=800',
        brand: 'L&T',
        specifications: {
            'Rating': '63A',
            'Sensitivity': '30mA',
            'Poles': '4-Pole'
        },
        stock: 12
    },
    {
        id: 'gm-modular-16a-power-socket',
        name: 'GM MODULAR 16A POWER SOCKET',
        description: 'High-quality 16A socket with safety shutters for appliances like ACs and heaters.',
        price: 185.00,
        category: 'Switches',
        image: 'https://images.unsplash.com/photo-1510526330182-3d18d09819ee?auto=format&fit=crop&q=80&w=800',
        brand: 'GM Modular',
        specifications: {
            'Current': '16A',
            'Type': 'Power Socket',
            'Module': '2 Module'
        },
        stock: 200
    },
    {
        id: 'industrial-socket-32a-5pin',
        name: 'INDUSTRIAL SOCKET 32A 5-PIN',
        description: 'Panel mounted industrial socket for 3-phase high power connections.',
        price: 750.00,
        category: 'Industrial Fittings',
        image: 'https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?auto=format&fit=crop&q=80&w=800',
        brand: 'BCH Electric',
        specifications: {
            'Rating': '32A',
            'Type': '5-Pin',
            'Voltage': '415V'
        },
        stock: 25
    },
    {
        id: 'kei-flexible-wire-0-75sqmm',
        name: 'KEI FLEXIBLE WIRE 0.75 SQ MM',
        description: 'Flexible multi-strand wire for panel internal wiring and small tools.',
        price: 1150.00,
        category: 'Wires',
        image: 'https://images.unsplash.com/photo-1558211583-d28f610b05a4?auto=format&fit=crop&q=80&w=800',
        brand: 'KEI',
        specifications: {
            'Size': '0.75 sq mm',
            'Length': '100m',
            'Type': 'Flexible'
        },
        stock: 45
    },
    {
        id: 'wipro-36w-led-batten',
        name: 'WIPRO 36W LED BATTEN',
        description: 'High luminous efficiency LED batten for workshops and warehouses.',
        price: 550.00,
        category: 'Tube Lights',
        image: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&q=80&w=800',
        brand: 'Wipro',
        specifications: {
            'Wattage': '36W',
            'Lumens': '3600lm',
            'Length': '4 Feet'
        },
        stock: 35
    }
];
