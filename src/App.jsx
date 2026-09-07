import { useState, useEffect, useRef } from 'react';

// ==========================================
// PURE SVG VECTOR ICONS (ZERO EMOJIS)
// ==========================================
const WhatsAppIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const LocationPinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneCallIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const CheckCircleIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const TargetIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const VisionIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const PackageIcon = ({ size = 26, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const PriceTagIcon = ({ size = 26, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);

const HeadsetIcon = ({ size = 26, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
  </svg>
);

const TruckIcon = ({ size = 26, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"></rect>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>
);

const ShieldCheckIcon = ({ size = 26, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <polyline points="9 12 11 14 15 10"></polyline>
  </svg>
);

// Vehicle compatibility database with dependent makes & models
const vehicleDatabase = {
  Volkswagen: ['Polo Vivo', 'Polo TSI / GTI', 'Golf 6 / 7 / 8', 'Amarok', 'Tiguan', 'Caddy'],
  Toyota: ['Hilux', 'Fortuner', 'Corolla / Quest', 'Starlet', 'Quantum / HiAce', 'Urban Cruiser'],
  BMW: ['3 Series (E90 / F30 / G20)', '1 Series (E87 / F20)', 'X3 / X5', '5 Series'],
  Ford: ['Ranger', 'Fiesta', 'EcoSport', 'Everest', 'Focus'],
  Audi: ['A3 / S3', 'A4', 'Q5', 'A1'],
  Nissan: ['NP200', 'NP300 Hardbody', 'Almera', 'Navara', 'Magnite'],
  Hyundai: ['i20', 'Grand i10', 'Accent', 'Tucson', 'Creta'],
  'Mercedes-Benz': ['C-Class (W204 / W205)', 'A-Class', 'E-Class', 'GLC / GLA']
};

const yearsList = [
  '2025', '2024', '2023', '2022', '2021', '2020', 
  '2019', '2018', '2017', '2016', '2015', '2014', 
  '2013', '2012', '2011', '2010', 'Older'
];

const productsData = [
  {
    id: 1,
    sku: 'SKU-VW821-PK',
    oem: 'OEM 030 115 561 AN',
    name: 'Polo & Polo Vivo (1.4 / 1.6) Full Major Service Kit',
    category: 'Service Kits',
    makes: ['Volkswagen'],
    models: ['Polo Vivo', 'Polo TSI / GTI'],
    vehicles: 'VW Polo Vivo (2010-2024), Polo 1.4/1.6',
    description: 'Includes engine oil, oil filter, air filter, spark plugs, and sump plug washer.',
    price: 'R 1 625,00',
    image: '/images/polo_vivo_service_kit.jpg',
    inStock: true
  },
  {
    id: 2,
    sku: 'SKU-TY440-SK',
    oem: 'OEM 04152-YZZA6',
    name: 'Toyota Hilux & Fortuner 2.4 / 2.8 GD-6 Service Kit',
    category: 'Service Kits',
    makes: ['Toyota'],
    models: ['Hilux', 'Fortuner'],
    vehicles: 'Toyota Hilux GD-6, Fortuner GD-6 (2016-2024)',
    description: 'OEM grade oil filter, diesel fuel filter element, and high-flow air filter.',
    price: 'R 1 506,00',
    image: '/images/toyota_runx_service_kit.jpg',
    inStock: true
  },
  {
    id: 3,
    sku: 'SKU-TY902-FK',
    oem: 'OEM 17801-21050',
    name: 'Toyota Corolla / Quest / Auris Triple Filter Kit',
    category: 'Filters & Fluids',
    makes: ['Toyota'],
    models: ['Corolla / Quest'],
    vehicles: 'Toyota Corolla 1.3/1.6/1.8, Corolla Quest (2014-2024)',
    description: 'Precision cabin pollen filter, air intake filter, and spin-on oil filter.',
    price: 'R 450,00',
    image: '/images/toyota_corolla_filter_kit.jpg',
    inStock: true
  },
  {
    id: 4,
    sku: 'SKU-BM301-HL',
    oem: 'OEM 63117161670',
    name: 'BMW 3 Series E90 Headlamp Assembly (Right Side)',
    category: 'Electrical & Lighting',
    makes: ['BMW'],
    models: ['3 Series (E90 / F30 / G20)'],
    vehicles: 'BMW 3 Series E90 Sedan / Touring (2005-2012)',
    description: 'Direct replacement crystal clear halogen headlamp with integrated indicator lens.',
    price: 'R 1 800,00',
    image: '/images/bmw_e90_headlamp.jpg',
    inStock: true
  },
  {
    id: 5,
    sku: 'SKU-VW882-BP',
    oem: 'OEM 6R0 853 665 E',
    name: 'VW Polo Vivo Bumper Grille Set with Fog Lamps',
    category: 'Body Parts',
    makes: ['Volkswagen'],
    models: ['Polo Vivo'],
    vehicles: 'VW Polo Vivo Hatch & Sedan (2010-2018)',
    description: 'Complete 3-piece lower honeycomb grille kit with matching projector fog lights.',
    price: 'R 1 500,00',
    image: '/images/vw_polo_bumper_grilles.jpg',
    inStock: true
  },
  {
    id: 6,
    sku: 'SKU-FD512-BP',
    oem: 'OEM AB39-2001-AB',
    name: 'Ford Ranger 2.2 / 3.2 Heavy Duty Front Brake Pad Set',
    category: 'Brake Systems',
    makes: ['Ford'],
    models: ['Ranger', 'Everest'],
    vehicles: 'Ford Ranger T6 (2011-2022), Ford Everest',
    description: 'Ceramic low-dust compound with anti-squeal shims for high-temperature stopping power.',
    price: 'R 890,00',
    image: '/images/polo_vivo_service_kit.jpg',
    inStock: true
  },
  {
    id: 7,
    sku: 'SKU-NS104-SK',
    oem: 'OEM 15208-9F60A',
    name: 'Nissan NP200 (1.6 8V / 16V) Minor Service Pack',
    category: 'Service Kits',
    makes: ['Nissan'],
    models: ['NP200'],
    vehicles: 'Nissan NP200 1.6 Pick-up (2008-2023)',
    description: 'Genuine spec oil filter, air filter, and copper core spark plugs.',
    price: 'R 580,00',
    image: '/images/toyota_runx_service_kit.jpg',
    inStock: true
  },
  {
    id: 8,
    sku: 'SKU-HY220-BRK',
    oem: 'OEM 58101-1JA00',
    name: 'Hyundai i20 & Grand i10 Front Vented Brake Discs (Pair)',
    category: 'Brake Systems',
    makes: ['Hyundai'],
    models: ['i20', 'Grand i10'],
    vehicles: 'Hyundai i20 (2012-2021), Grand i10',
    description: 'High carbon precision balanced 256mm disc rotors for vibration-free braking.',
    price: 'R 1 150,00',
    image: '/images/toyota_corolla_filter_kit.jpg',
    inStock: true
  },
  {
    id: 9,
    sku: 'SKU-AU910-CL',
    oem: 'OEM 1K0 121 251 DM',
    name: 'Audi A3 / Golf 7 TSI Aluminum Core Engine Radiator',
    category: 'Engine Components',
    makes: ['Audi', 'Volkswagen'],
    models: ['A3 / S3', 'Golf 6 / 7 / 8'],
    vehicles: 'Audi A3 1.4/1.8/2.0 TSI (2013-2020), VW Golf 7 GTI',
    description: 'High efficiency aluminum brazed cooling core with durable reinforced plastic tanks.',
    price: 'R 1 950,00',
    image: '/images/bmw_e90_headlamp.jpg',
    inStock: false
  }
];

const categories = [
  'All', 
  'Service Kits', 
  'Engine Components', 
  'Transmission Parts', 
  'Brake Systems', 
  'Suspension & Steering', 
  'Electrical & Lighting', 
  'Body Parts', 
  'Filters & Fluids'
];

const trustTickerItems = [
  'FAST & RELIABLE DELIVERY (SAME-DAY / NEXT-DAY)',
  'IN-STORE COUNTER PICKUP: 3542 RAKOLOLO STR L EXT, SOSHANGUVE',
  'CUSTOM B2B SOLUTIONS & BULK PURCHASING FOR WORKSHOPS',
  'DIRECT WHATSAPP QUOTES: 074 503 7750',
  'ENGINE, BRAKES, SUSPENSION, TRANSMISSION & BODY SPARES',
  'ESTABLISHED 2023 • SOSHANGUVE'
];

const faqData = [
  {
    question: 'How do I check part availability and get a quote?',
    answer: 'Simply click "Check Availability" on any part in our catalogue, or click "Request Custom Quote". You can also send us a quick WhatsApp message directly at 074 503 7750 with your vehicle make, model, and the part or SKU you need. We will respond promptly with confirmed availability and pricing.'
  },
  {
    question: 'Do you offer delivery or in-store collection?',
    answer: 'We offer both! We operate an in-store counter at 3542 Rakololo street, L ext, Soshanguve for direct collection. We also provide fast and reliable delivery services including Same-day delivery (for select locations), Next-day delivery, and scheduled deliveries for businesses and workshops.'
  },
  {
    question: 'How do I know if you have the right part for my car?',
    answer: 'Simply send us your vehicle make, model, and year on WhatsApp at 074 503 7750 or submit a quote request online. Our automotive specialists will verify compatibility and provide you with the correct replacement component.'
  },
  {
    question: 'Do you provide bulk orders and B2B accounts for workshops and garages?',
    answer: 'Yes! We offer tailored B2B solutions for independent repair shops, auto dealerships, fleet managers, and retailers. This includes bulk purchasing options, specialized inventory management, and dedicated delivery plans.'
  },
  {
    question: 'What are your trading hours and physical address?',
    answer: 'Our sales and collection counter is located at 3542 Rakololo street, L ext, Soshanguve 0152. We are open Monday to Friday from 08:00 to 17:30, and Saturdays from 08:00 to 13:00. You can call or WhatsApp us anytime at 074 503 7750.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Card (Debit & Credit), Cash, and Instant EFT at our store counter in Soshanguve, as well as electronic EFT payments for deliveries and B2B invoices.'
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Vehicle selector states
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [activeVehicleFilter, setActiveVehicleFilter] = useState(null);

  // Modal & Form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Interactive FAQ state
  const [activeFaq, setActiveFaq] = useState(0);

  // Mobile menu state
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const videoRef = useRef(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isModalOpen]);

  // Handle Make change to reset Model
  const handleMakeChange = (e) => {
    const make = e.target.value;
    setSelectedMake(make);
    setSelectedModel('');
  };

  // Execute Vehicle Search Filter
  const handleFindParts = () => {
    if (!selectedMake && !selectedModel && !selectedYear) {
      const catalogueEl = document.getElementById('catalogue');
      if (catalogueEl) catalogueEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setActiveVehicleFilter({
      year: selectedYear,
      make: selectedMake,
      model: selectedModel
    });

    const catalogueEl = document.getElementById('catalogue');
    if (catalogueEl) catalogueEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClearVehicleFilter = () => {
    setActiveVehicleFilter(null);
    setSelectedYear('');
    setSelectedMake('');
    setSelectedModel('');
  };

  // Filtered Products Logic
  const filteredProducts = productsData.filter(product => {
    const matchesSearch = 
      searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.vehicles.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.oem.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

    let matchesVehicle = true;
    if (activeVehicleFilter) {
      if (activeVehicleFilter.make && !product.makes.includes(activeVehicleFilter.make)) {
        matchesVehicle = false;
      }
      if (activeVehicleFilter.model && !product.models.includes(activeVehicleFilter.model)) {
        matchesVehicle = false;
      }
    }

    return matchesSearch && matchesCategory && matchesVehicle;
  });

  const handleRequestQuote = (product = null) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setSubmitMessage('');
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    const rawData = new FormData(event.target);
    const customerName = rawData.get("Full Name") || "Customer";
    const phone = rawData.get("Phone Number") || "";
    const email = rawData.get("Email Address") || "";
    const vehicle = rawData.get("Vehicle Details") || "Not specified";
    const requiredParts = rawData.get("Required Parts") || "Custom Part";
    const fulfillment = rawData.get("Fulfillment Option") || "In-Store Counter Pickup";
    const message = rawData.get("Additional Message") || "";

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const intlPhone = cleanPhone.startsWith('0') ? `27${cleanPhone.slice(1)}` : cleanPhone;
    const whatsappLink = `https://wa.me/${intlPhone}`;

    // Formatted Web3Forms submission with executive labels and direct reply
    const web3FormData = new FormData();
    web3FormData.append("access_key", "8f1c2f77-a078-4d33-9dfc-7cc13591cb79");
    web3FormData.append("from_name", "Bosh Autoparts Web Inquiries");
    web3FormData.append("subject", `Quote Request: ${requiredParts} - ${customerName}`);
    if (email) {
      web3FormData.append("replyto", email);
    }
    
    web3FormData.append("Customer / Workshop", customerName);
    web3FormData.append("Phone Number", phone);
    if (cleanPhone) {
      web3FormData.append("WhatsApp Direct Chat", whatsappLink);
    }
    web3FormData.append("Email Address", email || "Not provided");
    web3FormData.append("Vehicle Details", vehicle);
    web3FormData.append("Required Part(s) / SKU", requiredParts);
    web3FormData.append("Fulfillment Preference", fulfillment);
    web3FormData.append("Customer Message", message || "No extra notes");
    web3FormData.append("Action", "Click the WhatsApp link above or reply to this email directly.");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });
      const data = await response.json();

      if (data.success) {
        setSubmitMessage("Quote request sent successfully! Our sales team will contact you or WhatsApp you shortly.");
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitMessage('');
        }, 3500);
      } else {
        setSubmitMessage(`Error: ${data.message || "Failed to send. Please WhatsApp us directly at 074 503 7750"}`);
      }
    } catch (error) {
      console.error(error);
      setSubmitMessage("Network error. Please call or WhatsApp us directly at 074 503 7750.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app-root">
      {/* Top Notification / Contact Bar */}
      <div className="header-top">
        <div className="container header-top-flex">
          <div className="header-top-left">
            <span className="live-badge">SOSHANGUVE HUB OPEN</span>
            <span>
              <LocationPinIcon size={14} /> 3542 Rakololo street, L ext, Soshanguve • Mon - Fri: 08:00 - 17:30 | Sat: 08:00 - 13:00
            </span>
          </div>
          <div className="header-top-right">
            <span>Direct Line: <strong>074 503 7750</strong></span>
            <a 
              href="https://wa.me/27745037750?text=Hi%20Bosh%20Autoparts%2C%20I%20would%20like%20to%20check%20availability%20for%20a%20part" 
              target="_blank" 
              rel="noreferrer" 
              className="whatsapp-quick-link"
            >
              <WhatsAppIcon size={14} color="#000" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="header">
        <div className="container header-content">
          <a href="#home" className="logo">
            <img src="/images/bosh_logo.png" alt="Bosh Autoparts Logo" className="logo-badge-img" />
            <div className="logo-text-wrap">
              <span className="logo-main-text">BOSH<span>AUTOPARTS</span></span>
              <span className="logo-slogan">Source Deliver Parts Fast</span>
            </div>
          </a>

          {/* Quick Search */}
          <div className="header-search">
            <input 
              type="text" 
              placeholder="Search by part name, SKU, or OEM number..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => {
              const el = document.getElementById('catalogue');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Search
            </button>
          </div>
          
          {/* Mobile Overlay Backdrop */}
          <div 
            className={`mobile-backdrop ${mobileNavOpen ? 'active' : ''}`}
            onClick={() => setMobileNavOpen(false)}
          ></div>

          {/* Navigation Links / Mobile Drawer */}
          <nav className={`nav-links ${mobileNavOpen ? 'mobile-open' : ''}`}>
            {/* Mobile Drawer Header */}
            <div className="mobile-nav-header">
              <div className="mobile-nav-brand">
                <img src="/images/bosh_logo.png" alt="Bosh Logo" className="mobile-nav-logo" />
                <div className="mobile-nav-brand-text">
                  <span className="mobile-nav-name">BOSH <span>AUTOPARTS</span></span>
                  <span className="mobile-nav-tag">Soshanguve Hub</span>
                </div>
              </div>
              <button 
                className="mobile-nav-close-btn" 
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close navigation"
              >
                ✕
              </button>
            </div>

            {/* Nav Items */}
            <div className="mobile-nav-links-list">
              <a href="#home" onClick={() => setMobileNavOpen(false)}>
                Home
              </a>
              <a href="#catalogue" onClick={() => setMobileNavOpen(false)}>
                Parts Catalogue
              </a>
              <a href="#about" onClick={() => setMobileNavOpen(false)}>
                About Us
              </a>
              <a href="#b2b" onClick={() => setMobileNavOpen(false)}>
                B2B Solutions
              </a>
              <a href="#faq" onClick={() => setMobileNavOpen(false)}>
                FAQ
              </a>
              <a href="#contact" onClick={() => setMobileNavOpen(false)}>
                Contact
              </a>
            </div>

            {/* Mobile Drawer Footer Actions */}
            <div className="mobile-nav-actions">
              <button className="btn btn-primary btn-nav-quote" onClick={() => {
                setMobileNavOpen(false);
                handleRequestQuote();
              }}>
                Request Custom Quote
              </button>
              <a 
                href="https://wa.me/27745037750?text=Hi%20Bosh%20Autoparts%2C%20I%20would%20like%20to%20inquire%20about%20a%20part"
                target="_blank"
                rel="noreferrer"
                className="btn-nav-whatsapp"
              >
                Chat on WhatsApp (074 503 7750)
              </a>
              <div className="mobile-nav-store-info">
                <span>3542 Rakololo street, L ext, Soshanguve</span>
                <span>Mon - Fri: 08:00 - 17:30 | Sat: 08:00 - 13:00</span>
              </div>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button className="mobile-toggle" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </header>

      {/* INFINITE SLIDING MARQUEE TICKER BAR */}
      <div className="trust-ticker-container">
        <div className="trust-ticker-track">
          {trustTickerItems.concat(trustTickerItems).map((item, idx) => (
            <div key={idx} className="trust-ticker-item">
              <span className="ticker-bullet">◆</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <main>
        {/* HERO SECTION WITH ENDLESS VIDEO LOOP & VEHICLE SELECTOR */}
        <section id="home" className="hero">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            className="hero-video"
            poster="/images/engine_poster.jpg"
            src="/videos/engine-video.mp4"
            onEnded={(e) => e.target.play()}
          ></video>
          
          <div className="hero-overlay"></div>
          
          <div className="container hero-content">
            <div className="hero-text">
              <div className="hero-badge">ESTABLISHED 2023 • SOSHANGUVE</div>
              <h1>Source & Deliver Car Parts Fast</h1>
              <p>
                Trusted provider of premium-quality automotive car parts and fast delivery services for vehicle owners, repair shops, auto dealerships, and fleet managers.
              </p>
              <div className="hero-action-buttons">
                <button className="btn btn-primary" onClick={() => handleRequestQuote()}>
                  Request A Custom Part
                </button>
                <a 
                  href="https://wa.me/27745037750?text=Hi%20Bosh%20Autoparts%2C%20I%20need%20a%20part%20for%20my%20car" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-whatsapp"
                >
                  <WhatsAppIcon size={20} color="#000" /> Quick WhatsApp Check
                </a>
              </div>
            </div>
            
            {/* FUNCTIONAL VEHICLE SELECTOR WIDGET */}
            <div className="vehicle-selector">
              <div className="selector-header">
                <h3>SELECT YOUR VEHICLE</h3>
                <span className="selector-sub">Filter parts by exact vehicle match</span>
              </div>
              <div className="selector-grid">
                {/* Year Selection */}
                <div className="select-wrapper">
                  <label>1. Year</label>
                  <select 
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="">Select Year</option>
                    {yearsList.map(yr => (
                      <option key={yr} value={yr}>{yr}</option>
                    ))}
                  </select>
                </div>

                {/* Make Selection */}
                <div className="select-wrapper">
                  <label>2. Make</label>
                  <select 
                    value={selectedMake} 
                    onChange={handleMakeChange}
                  >
                    <option value="">Select Make</option>
                    {Object.keys(vehicleDatabase).map(mk => (
                      <option key={mk} value={mk}>{mk}</option>
                    ))}
                  </select>
                </div>

                {/* Model Selection (Dependent on Make) */}
                <div className="select-wrapper">
                  <label>3. Model</label>
                  <select 
                    value={selectedModel} 
                    onChange={(e) => setSelectedModel(e.target.value)}
                    disabled={!selectedMake}
                  >
                    <option value="">{selectedMake ? 'Select Model' : 'Select Make First'}</option>
                    {selectedMake && vehicleDatabase[selectedMake]?.map(mdl => (
                      <option key={mdl} value={mdl}>{mdl}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button className="btn btn-primary btn-find-parts" onClick={handleFindParts}>
                FIND MY PARTS
              </button>
            </div>
          </div>
        </section>

        {/* CATALOGUE SECTION */}
        <section id="catalogue" className="catalogue-section container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">COMPREHENSIVE INVENTORY</span>
            <h2>AUTOMOTIVE CAR PARTS CATALOGUE</h2>
            <p>From essential maintenance items to specialized components for all major makes & models</p>
          </div>

          {/* Active Vehicle Filter Notice */}
          {activeVehicleFilter && (
            <div className="active-vehicle-banner">
              <div className="active-vehicle-info">
                <span className="active-dot"></span>
                <span>Active Vehicle Filter: <strong>{activeVehicleFilter.year || ''} {activeVehicleFilter.make || ''} {activeVehicleFilter.model || ''}</strong></span>
              </div>
              <button className="btn-clear-filter" onClick={handleClearVehicleFilter}>
                ✕ Clear Vehicle Filter
              </button>
            </div>
          )}

          <div className="catalogue-layout">
            {/* Sidebar Navigation */}
            <aside className="sidebar">
              <div className="sidebar-title-row">
                <h3>CATEGORIES</h3>
                <span className="mobile-swipe-indicator">Swipe &rarr;</span>
              </div>
              <ul className="category-list">
                {categories.map(cat => (
                  <li 
                    key={cat} 
                    className={`category-item ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <span>{cat}</span>
                  </li>
                ))}
              </ul>

              <div className="sidebar-help-card desktop-only-card">
                <h4>Need a part not listed?</h4>
                <p>We source engine, transmission, and body parts daily.</p>
                <button className="btn btn-secondary btn-sm" onClick={() => handleRequestQuote()}>
                  Request Sourcing
                </button>
              </div>
            </aside>

            {/* Product Grid Area */}
            <div className="catalogue-main">
              <div className="product-grid">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                      <div className="image-container">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <span className="category-pill">{product.category}</span>
                      </div>
                      <div className="product-content">
                        <div className="product-meta">
                          <span className="product-sku">{product.sku}</span>
                          <span className="product-oem">{product.oem}</span>
                        </div>
                        <h3 className="product-title">{product.name}</h3>
                        <p className="product-desc">{product.description}</p>
                        
                        <div className="product-vehicles">
                          <strong>FITS:</strong> {product.vehicles}
                        </div>
                        
                        <div className="product-footer">
                          <div className="product-price-row">
                            <div className="product-price">{product.price}</div>
                            {product.inStock ? (
                              <div className="stock-status in-stock">
                                <span className="stock-dot"></span>
                                IN STOCK (READY FOR PICKUP / DELIVERY)
                              </div>
                            ) : (
                              <div className="stock-status call-stock">
                                <span className="stock-dot"></span>
                                SOURCING ON DEMAND
                              </div>
                            )}
                          </div>
                          <button className="btn btn-primary btn-quote-card" onClick={() => handleRequestQuote(product)}>
                            Check Availability
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-products-card">
                    <h3>No Matching Parts Found</h3>
                    <p>We couldn't find listed inventory matching your selected vehicle or search term.</p>
                    <div className="no-products-actions">
                      <button className="btn btn-primary" onClick={() => handleRequestQuote()}>
                        Request Custom Part Sourcing
                      </button>
                      {activeVehicleFilter && (
                        <button className="btn btn-secondary" onClick={handleClearVehicleFilter}>
                          Show All Vehicle Parts
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Sourcing Banner (Placed AFTER products on mobile so it doesn't block catalogue view) */}
              <div className="catalogue-mobile-help-banner mobile-only-card">
                <div className="mobile-help-content">
                  <span className="mobile-help-badge">SPECIAL PART SOURCING</span>
                  <h4>Can't find your specific vehicle part?</h4>
                  <p>We source engines, gearboxes, control arms, sensors, and body parts across South Africa daily.</p>
                  <button className="btn btn-primary btn-sm" onClick={() => handleRequestQuote()}>
                    Request Part Sourcing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION - OFFICIAL COMPANY PROFILE */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="section-title-wrap about-header-wrap">
              <span className="section-eyebrow">ABOUT BOSH AUTOPARTS</span>
              <h2>RELIABLE SUPPLY & FAST DELIVERY</h2>
              <p>Founded in 2023 in Soshanguve, providing quality replacement car parts with dedicated delivery and counter collection.</p>
            </div>

            <div className="about-main-grid">
              {/* Left Column: Official Profile Story */}
              <div className="about-text-col">
                <div className="about-lead-box">
                  <h3>Your Trusted Automotive Parts Partner</h3>
                  <p>
                    <strong>Bosh Autoparts</strong> is a trusted provider of high-quality automotive car parts, serving both individual car owners and businesses in the automotive industry. With a passion for vehicles and a commitment to excellence, we specialize in the supply and fast delivery of a wide range of car parts — from essential service components to specialized parts for various makes and models.
                  </p>
                  <p>
                    We have built a reputation for <strong>reliability, competitive pricing, and exceptional customer service</strong>, ensuring that our clients receive the right parts at the right time, every time.
                  </p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="mission-vision-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px' }}>
                  <div className="highlight-item" style={{ flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <TargetIcon size={18} color="var(--accent-red)" />
                      <strong style={{ color: 'var(--primary-dark)', fontSize: '15px' }}>Our Mission</strong>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: '1.5' }}>
                      To provide the automotive industry with premium-quality car parts while offering unmatched delivery services that ensure the right parts are delivered on time, maximizing efficiency for our customers.
                    </p>
                  </div>
                  <div className="highlight-item" style={{ flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <VisionIcon size={18} color="var(--accent-red)" />
                      <strong style={{ color: 'var(--primary-dark)', fontSize: '15px' }}>Our Vision</strong>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: '1.5' }}>
                      To be the leading supplier of automotive car parts, known for innovation, reliability, and excellent customer service, while continuing to expand our delivery network and product offerings across regions.
                    </p>
                  </div>
                </div>

                <div className="about-highlights-list" style={{ marginTop: '20px' }}>
                  <div className="highlight-item">
                    <span className="highlight-check">
                      <CheckCircleIcon size={16} color="var(--accent-red)" />
                    </span>
                    <div>
                      <strong>Fast & Reliable Delivery:</strong>
                      <span>Same-day delivery (for select locations), Next-day delivery, and scheduled deliveries to your doorstep or workshop.</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-check">
                      <CheckCircleIcon size={16} color="var(--accent-red)" />
                    </span>
                    <div>
                      <strong>Direct In-Store Pickup:</strong>
                      <span>Walk-in counter collection available directly at 3542 Rakololo street, L ext, Soshanguve.</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-check">
                      <CheckCircleIcon size={16} color="var(--accent-red)" />
                    </span>
                    <div>
                      <strong>Competitive Pricing & Quality Assurance:</strong>
                      <span>Cost-effective pricing partnered with reputable manufacturers to supply only the highest-quality parts.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Counter & Contact Card */}
              <div className="about-visual-col">
                <div className="about-contact-highlight-card">
                  <div className="counter-card-header">
                    <div className="counter-icon-badge">
                      <LocationPinIcon size={24} />
                    </div>
                    <div>
                      <h4>Bosh Autoparts Hub</h4>
                      <span>3542 Rakololo street, L ext, Soshanguve 0152</span>
                    </div>
                  </div>

                  <div className="counter-card-body">
                    <div className="counter-info-row">
                      <span>WhatsApp / Call Line:</span>
                      <strong><a href="https://wa.me/27745037750" target="_blank" rel="noreferrer">074 503 7750</a></strong>
                    </div>
                    <div className="counter-info-row">
                      <span>Email Enquiries:</span>
                      <strong><a href="mailto:sales@boshautos.co.za">sales@boshautos.co.za</a></strong>
                    </div>
                    <div className="counter-info-row">
                      <span>Counter & Delivery Hours:</span>
                      <span>Mon - Fri: 08:00 - 17:30<br/>Sat: 08:00 - 13:00</span>
                    </div>
                    <div className="counter-info-row">
                      <span>Accepted Payments:</span>
                      <span>Card (Debit/Credit), Cash, Instant EFT</span>
                    </div>
                  </div>

                  <div className="counter-card-footer">
                    <a 
                      href="https://wa.me/27745037750?text=Hi%20Bosh%20Autoparts%2C%20I%20would%20like%20to%20check%20availability%20for%20a%20part" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-whatsapp" 
                      style={{width: '100%'}}
                    >
                      <WhatsAppIcon size={18} color="#000" /> WhatsApp Us: 074 503 7750
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 Core Pillars: Why Choose Us? (Pure Vector Icons) */}
            <div className="section-title-wrap" style={{ marginTop: '50px', marginBottom: '30px' }}>
              <span className="section-eyebrow">WHY CHOOSE US</span>
              <h2>OUR COMMITMENT TO EXCELLENCE</h2>
            </div>

            <div className="about-pillars-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <PackageIcon size={26} color="var(--accent-red)" />
                </div>
                <h4>Extensive Inventory</h4>
                <p>We offer a vast range of automotive car parts catering to multiple makes and models so you always find what you need.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <PriceTagIcon size={26} color="var(--accent-red)" />
                </div>
                <h4>Competitive Pricing</h4>
                <p>Designed to be cost-effective without compromising on quality, giving our customers excellent value for their money.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <HeadsetIcon size={26} color="var(--accent-red)" />
                </div>
                <h4>Exceptional Service</h4>
                <p>Our team of automotive experts is available to help you find the right part and answer technical queries promptly.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <TruckIcon size={26} color="var(--accent-red)" />
                </div>
                <h4>Fast & Reliable Delivery</h4>
                <p>We deliver parts quickly and securely to your doorstep or workshop to minimize vehicle downtime.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <ShieldCheckIcon size={26} color="var(--accent-red)" />
                </div>
                <h4>Commitment to Quality</h4>
                <p>We partner with reputable manufacturers to supply high-quality parts ensuring longevity and reliability.</p>
              </div>
            </div>

            {/* B2B Solutions Section Banner */}
            <div id="b2b" className="about-workflow-card" style={{ marginTop: '40px' }}>
              <div className="workflow-header">
                <h3>CUSTOM SOLUTIONS FOR B2B & TRADE CLIENTS</h3>
                <span>Dedicated Services For Workshops, Garages & Fleets</span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
                <div className="highlight-item" style={{ background: '#ffffff' }}>
                  <span className="highlight-check">
                    <CheckCircleIcon size={16} color="var(--accent-red)" />
                  </span>
                  <div>
                    <strong>Bulk Purchasing Options</strong>
                    <span>Special trade pricing and discount tiers for automotive repair shops, wholesalers, and fleet managers.</span>
                  </div>
                </div>
                <div className="highlight-item" style={{ background: '#ffffff' }}>
                  <span className="highlight-check">
                    <CheckCircleIcon size={16} color="var(--accent-red)" />
                  </span>
                  <div>
                    <strong>Specialized Inventory Management</strong>
                    <span>Scheduled restocking of fast-moving maintenance items (filters, brake pads, plugs, oils) for your workshop.</span>
                  </div>
                </div>
                <div className="highlight-item" style={{ background: '#ffffff' }}>
                  <span className="highlight-check">
                    <CheckCircleIcon size={16} color="var(--accent-red)" />
                  </span>
                  <div>
                    <strong>Dedicated Delivery Plans</strong>
                    <span>Priority dispatch and scheduled delivery routes to minimize repair bays downtime.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="faq-section">
          <div className="container">
            <div className="section-title-wrap">
              <span className="section-eyebrow">HELP & QUESTIONS</span>
              <h2>FREQUENTLY ASKED QUESTIONS</h2>
              <p>Everything you need to know about ordering, delivery options, compatibility, and B2B services</p>
            </div>

            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeFaq === index ? 'open' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                >
                  <div className="faq-header">
                    <h4>{faq.question}</h4>
                    <span className="faq-toggle-icon">{activeFaq === index ? '−' : '+'}</span>
                  </div>
                  {activeFaq === index && (
                    <div className="faq-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORE LOCATION, HOURS & CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-title-wrap">
              <span className="section-eyebrow">GET IN TOUCH</span>
              <h2>LOCATION & CONTACT DETAILS</h2>
              <p>Visit our counter in Soshanguve or reach out directly for fast quotes and delivery</p>
            </div>

            <div className="contact-grid">
              {/* Store Details */}
              <div className="contact-card">
                <h3>Company & Contact Details</h3>
                <div className="contact-item">
                  <span className="contact-icon">
                    <LocationPinIcon size={22} />
                  </span>
                  <div>
                    <strong>Physical Address</strong>
                    <p>3542 Rakololo street, L ext, Soshanguve 0152</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">
                    <PhoneCallIcon size={22} />
                  </span>
                  <div>
                    <strong>Telephone & Direct Enquiries</strong>
                    <p><a href="tel:0745037750">074 503 7750</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">
                    <WhatsAppIcon size={22} color="#25d366" />
                  </span>
                  <div>
                    <strong>WhatsApp Parts Desk</strong>
                    <p><a href="https://wa.me/27745037750" target="_blank" rel="noreferrer">074 503 7750 (Click to Chat)</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">
                    <MailIcon size={22} />
                  </span>
                  <div>
                    <strong>Email Enquiries</strong>
                    <p><a href="mailto:sales@boshautos.co.za">sales@boshautos.co.za</a></p>
                  </div>
                </div>
              </div>

              {/* Trading & Dispatch Hours */}
              <div className="contact-card hours-card">
                <h3>Trading & Delivery Hours</h3>
                <p style={{color: 'var(--text-muted)', marginBottom: '16px', fontSize: '14px'}}>
                  Counter pickup and dispatch operations at 3542 Rakololo street:
                </p>
                <div className="hours-table">
                  <div className="hours-row">
                    <span>Monday – Thursday</span>
                    <strong>08:00 – 17:30</strong>
                  </div>
                  <div className="hours-row">
                    <span>Friday</span>
                    <strong>08:00 – 17:30</strong>
                  </div>
                  <div className="hours-row">
                    <span>Saturday</span>
                    <strong>08:00 – 13:00</strong>
                  </div>
                  <div className="hours-row closed">
                    <span>Sunday & Public Holidays</span>
                    <strong>Closed (WhatsApp enquiries open)</strong>
                  </div>
                </div>

                <div className="hours-cta">
                  <button className="btn btn-primary" style={{width: '100%'}} onClick={() => handleRequestQuote()}>
                    Request Custom Part Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="#home" className="logo" style={{marginBottom: '16px'}}>
                <img src="/images/bosh_logo.png" alt="Bosh Autoparts Logo" className="logo-badge-img footer-logo-img" />
                <div className="logo-text-wrap">
                  <span className="logo-main-text">BOSH<span>AUTOPARTS</span></span>
                  <span className="logo-slogan">Source Deliver Parts Fast</span>
                </div>
              </a>
              <p>Founded in 2023 in Soshanguve. Premium-quality automotive replacement parts with fast and reliable delivery services across regions.</p>
              <div className="footer-phone-badge">
                <span>Call / WhatsApp:</span>
                <strong>074 503 7750</strong>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Quick Navigation</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#catalogue">Parts Catalogue</a></li>
                <li><a href="#about">About Bosh Autoparts</a></li>
                <li><a href="#b2b">B2B Workshop Solutions</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
                <li><a href="#contact">Store Location & Hours</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Product Categories</h4>
              <ul className="footer-links">
                <li><a href="#catalogue" onClick={() => { setSelectedCategory('Engine Components'); }}>Engine Components</a></li>
                <li><a href="#catalogue" onClick={() => { setSelectedCategory('Brake Systems'); }}>Brake Systems</a></li>
                <li><a href="#catalogue" onClick={() => { setSelectedCategory('Suspension & Steering'); }}>Suspension & Steering</a></li>
                <li><a href="#catalogue" onClick={() => { setSelectedCategory('Transmission Parts'); }}>Transmission Parts</a></li>
                <li><a href="#catalogue" onClick={() => { setSelectedCategory('Body Parts'); }}>Body & Lighting</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Direct Counter & Delivery</h4>
              <ul className="footer-links">
                <li><strong>Phone:</strong> 074 503 7750</li>
                <li><strong>WhatsApp:</strong> 074 503 7750</li>
                <li><strong>Email:</strong> sales@boshautos.co.za</li>
                <li><strong>Address:</strong> 3542 Rakololo street, L ext, Soshanguve 0152</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div>&copy; {new Date().getFullYear()} Bosh Autoparts. All Rights Reserved.</div>
          </div>
        </div>
      </footer>

      {/* MODAL FOR AVAILABILITY & QUOTE REQUEST */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={(e) => {
          if(e.target === e.currentTarget) setIsModalOpen(false);
        }}>
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h3>CHECK AVAILABILITY / GET QUOTE</h3>
                <span className="modal-sub">Bosh Autoparts • Soshanguve & Delivery</span>
              </div>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-prompt-text">
                {selectedProduct 
                  ? `Checking availability for: ${selectedProduct.sku} - ${selectedProduct.name}`
                  : "Let us know your vehicle and required part, and our sales team will confirm pricing, stock, and delivery/pickup options."
                }
              </p>
              
              <form onSubmit={onFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name / Workshop Name *</label>
                    <input type="text" name="Full Name" className="form-control" required placeholder="e.g. John Smith / Auto Workshop" />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp Number *</label>
                    <input type="tel" name="Phone Number" className="form-control" required placeholder="e.g. 074 503 7750" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="Email Address" className="form-control" placeholder="john@example.com" />
                </div>
                
                <div className="form-group">
                  <label>Vehicle Make, Model & Year *</label>
                  <input 
                    type="text" 
                    name="Vehicle Details" 
                    className="form-control" 
                    defaultValue={
                      selectedProduct 
                        ? selectedProduct.vehicles 
                        : (activeVehicleFilter ? `${activeVehicleFilter.year} ${activeVehicleFilter.make} ${activeVehicleFilter.model}`.trim() : '')
                    }
                    placeholder="e.g. 2018 VW Polo Vivo 1.4 / Toyota Hilux GD-6" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>Required Part(s) / SKU *</label>
                  <input 
                    type="text" 
                    name="Required Parts"
                    className="form-control" 
                    defaultValue={selectedProduct ? `${selectedProduct.sku} - ${selectedProduct.name}` : ''} 
                    required 
                    placeholder="e.g. Brake Pads, Clutch Kit, Radiator, Alternator, Service Pack"
                  />
                </div>
                
                <div className="form-group">
                  <label>Fulfillment Preference</label>
                  <select name="Fulfillment Option" className="form-control">
                    <option value="Counter Pickup (Soshanguve)">In-Store Counter Pickup (3542 Rakololo str, Soshanguve)</option>
                    <option value="Same-Day Delivery">Same-Day Delivery</option>
                    <option value="Next-Day Delivery">Next-Day Delivery</option>
                    <option value="Scheduled Workshop Delivery">Scheduled Workshop Delivery</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Additional Notes / Questions</label>
                  <textarea 
                    name="Additional Message" 
                    className="form-control" 
                    placeholder="Tell us any specific part details or delivery instructions..."
                    defaultValue={selectedProduct ? `Hi, please check stock availability and delivery/collection pricing for ${selectedProduct.sku}.` : 'Hi, please let me know availability and pricing for this part.'}
                    rows="3"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-submit-modal" disabled={isSubmitting}>
                  {isSubmitting ? 'TRANSMITTING REQUEST...' : 'SUBMIT AVAILABILITY & QUOTE REQUEST'}
                </button>

                {submitMessage && (
                  <div className={`submit-feedback ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
