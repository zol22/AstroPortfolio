
import cateringImage from '../assets/images/CateringBusiness.png';
import cateringInfo from '../assets/images/cateringInfo.png';
import cateringInfo2 from '../assets/images/cateringInfo2.png';
import cateringInfo3 from '../assets/images/cateringInfo3.png';

import carDealer from '../assets/images/carDealer.png';

import NGO from '../assets/images/NGO.png';
import NGOInfo from '../assets/images/NGOInfo.png';
import NGOInfo2 from '../assets/images/NGOInfo2.png';

import piscoMixers from '../assets/images/piscoMixers.png';
import homepiscomixers from '../assets/images/homepiscomixers.png';
import piscoMixersInfo from '../assets/images/piscoMixersInfo.png';
import piscoMixersInfo2 from '../assets/images/piscoMixersInfo2.png';



import NGOHomepage from '../assets/images/NGOHomePage.png';
export const freelanceWork = [
	{
		id: "1",
		title: "Mobile Bartending Website",
		image: piscoMixers,
		slug: "mobile-bartending-website",
		landingPageImage: homepiscomixers,
		gallery:[piscoMixersInfo ,piscoMixersInfo2],
		description:
		  "Custom Squarespace site for a Peruvian cocktail and brunch brand. Designed for SEO, mobile users, and bold branding.",
		url:"https://www.piscomixers.com/",
		fullInfo: {
			summary: "A sleek, mobile-first Squarespace website built for a mobile bartending business. The site reflects the vibrant energy of the brand with event info, drink packages, and direct contact options.",
			whatItDoes: [
			  "Showcases signature cocktails and services for private events",
			  "Presents a bold and elegant visual brand using strong color and type",
			  "Encourages users to inquire about booking through a custom contact form",
			  "Works seamlessly across mobile and desktop devices"
			],
			howToUse: [
			  "Scroll through the homepage to learn more about services",
			  "Browse signature drinks and explore what’s included in packages",
			  "Click the call-to-action buttons to connect via the contact form",
			  "Use the sticky navigation to jump between sections"
			],
			features: [
			  "Squarespace CMS for easy editing and management",
			  "Mobile-first responsive layout",
			  "Custom branding with iconography and color palette",
			  "Contact form for client bookings",
			  "Optimized for SEO with proper titles and descriptions"
			],
			technologies: [
			  "Squarespace",
			  "Custom Squarespace Styling",
			  "Figma (Design Mockups)",
			  "Email Integration"
			]
		  }
	},
	{
		id: "2",
		title: "Peruvian Catering Website",
		image: cateringImage,
		slug: "peruvian-catering-website",
		description:
		  "Modern website for a Peruvian catering business built with Astro and Tailwind CSS. Fast, responsive, and professional.",
		gallery:[cateringInfo, cateringInfo2, cateringInfo3],
		url:"https://shimmering-kashata-f59a6c.netlify.app",
		fullInfo: {
			summary: "A fully responsive and SEO-optimized website built for a family-owned Peruvian catering business based in Orlando, FL. This site showcases traditional dishes, Rosa’s story, and contact options for pickup and delivery.",
			whatItDoes: [
			  "Displays authentic Peruvian food in an engaging, modern layout",
			  "Offers a simple and beautiful menu with pricing and images",
			  "Lets users view a food gallery and easily navigate the site on mobile or desktop",
			  "Includes a contact form for inquiries, powered by Netlify Forms",
			  "Built to be fast, lightweight, and SEO-optimized for Google search and local discovery"
			],
			howToUse: [
			  "Visit the homepage to learn more about Rosa and her food",
			  "Browse the menu for tamales, arroz con leche, causa, and more",
			  "Head to the contact section to send an order or inquiry",
			  "Use mobile or desktop — the experience is fully responsive"
			],
			features: [
			  "SEO Meta Tags (Open Graph, description, title per page)",
			  "Mobile-First Responsive Design",
			  "Smooth navigation across sections (Home, Menu, About, Contact)",
			  "Gallery with a Pinterest-style layout",
			  "Contact form with success page and Netlify Forms integration",
			  "Accessible layout using semantic HTML and ARIA best practices"
			],
			technologies: [
			  "Astro",
			  "Tailwind CSS",
			  "Netlify",
			  "Astro Icons",
			  "Astro Assets",
			  "Figma"
			]
		  }
	  },
	  {
		id: "3",
		title: "Car Dealer Website Design",
		image: carDealer ,
		slug: "car-dealer-website-design",
		description: "Custom Wix website designed for a car dealership client in Orlando. Built to showcase vehicle inventory, highlight services, and drive inquiries with a clean, user-friendly layout.",
		url: "", // add URL if you have it
		fullInfo: {
			summary: "A modern Wix-based website created for a local car dealership in Orlando, FL. The site was designed to showcase available inventory and encourage user engagement through quick navigation and clear calls to action.",
			whatItDoes: [
			"Displays available cars with photos, specs, and pricing",
			"Allows users to explore different categories of vehicles",
			"Drives leads with prominent 'Contact Us' and 'Schedule a Test Drive' sections"
			],
			howToUse: [
			"Explore the homepage to browse featured vehicles",
			"View car listings with pricing and details",
			"Use the contact form to send an inquiry or request more info"
			],
			features: [
			"Wix CMS for drag-and-drop management",
			"Responsive layout for mobile and desktop",
			"Custom styling to match brand identity",
			"Inventory showcase with gallery support",
			"SEO-optimized metadata and structure"
			],
			technologies: [
			"Wix",
			"Wix Editor",
			"Wix Forms",
			"Custom Design (Figma)"
			]
		}
	  },
	  {
		id: "4",
		title: "NGO Website Design",
		image: NGO,
		slug: "ngo-website-design",
		landingPageImage: NGOHomepage,
		gallery:[NGOInfo, NGOInfo2],
		description: "Website design for a nonprofit organization focused on supporting children and community outreach. Clean layout built to showcase their mission, services, and donation efforts.",
		url: "", // add URL if it's hosted
		fullInfo: {
		  summary: "A minimal and impactful website designed for a nonprofit NGO supporting children and local families. The site highlights the organization’s values, donation campaigns, and ways to get involved.",
		  whatItDoes: [
			"Highlights the mission and values of the nonprofit",
			"Shares stories, events, and ways to donate or volunteer",
			"Encourages community involvement through a clean, friendly layout"
		  ],
		  howToUse: [
			"Start on the homepage to learn about the cause",
			"Navigate to 'Our Mission' and 'Get Involved' for info and actions",
			"Click 'Donate' or 'Volunteer' to take part"
		  ],
		  features: [
			"Simple, emotionally driven layout with imagery and messaging",
			"Donation integration (PayPal, Stripe, or similar)",
			"Blog or update section for upcoming events",
			"Contact form and social media links",
			"Responsive design for accessibility on all devices"
		  ],
		  technologies: [
			"Wix or Custom HTML/CSS",
			"Figma",
			"Donation Tools",
			"Accessible Markup"
		  ]
		}
	  }
	  
	  
	
]
