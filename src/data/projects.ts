
import cateringImage from '../assets/images/CateringBusiness.png';
import cateringInfo from '../assets/images/cateringInfo.png';
import cateringInfo2 from '../assets/images/cateringInfo2.png';
import cateringInfo3 from '../assets/images/cateringInfo3.png';

import carDealer from '../assets/images/carDealer.png';

import NGO from '../assets/images/NGO.png';
import NGOInfo from '../assets/images/NGOInfo.png';
import NGOInfo2 from '../assets/images/NGOInfo2.png';
import NGOHomepage from '../assets/images/NGOHomepage.png';


import jobsy from '../assets/images/jobsy.png';
import jobsyHomepage from '../assets/images/jobsyHomepage.png';

import piscoMixers from '../assets/images/piscoMixers.png';
import homepiscomixers from '../assets/images/homepiscomixers.png';
import piscoMixersInfo from '../assets/images/piscoMixersInfo.png';
import piscoMixersInfo2 from '../assets/images/piscoMixersInfo2.png';

import visionboard from '../assets/images/visionboard.png';
import visionboardHomepage from '../assets/images/visionboardHomepage.png';


import choreTracker from '../assets/images/choreTracker.jpg';

export const projects = [
	{
		id: "1",
		title: "Jobsy",
		image: jobsy,
		slug: "jobsy",
        date:"2025-04-10",
		landingPageImage: jobsyHomepage,
		gallery:[],
		description: `Jobsy is a full-stack job tracking web application that helps users manage their job applications, monitor progress, track statuses, store notes and affirmations, and visualize their job-hunting journey with powerful statistics and reminders — all in one intuitive, modern dashboard.`,
		url:"https://job-tracker-next-js-rkhg.vercel.app",
		github:'https://github.com/zol22/JobTracker-Next.js',
		fullInfo: {
            features: [
                "Custom job status tracking (Applied, Interviewing, Offer Received, Rejected, etc.)",
                "Add and edit comments for each job entry",
                "Daily motivational affirmations with save and edit support",
                "Personal reminders with delete and manage functionality",
                "Pie chart of application statuses",
                "Bar chart of applications over time",
                "Offer Rate and Rejection Rate calculation",
                "Role-based authentication (per-user data)",
                "Optimistic UI updates with Zustand",
                "Responsive design for mobile & desktop",
                            ],
			whatItDoes: [
			    "Tracks all your job applications in one centralized dashboard",
                "Lets you add company info, role, description, and application status",
                "Supports comments and notes for each application",
                "Stores daily affirmations to boost motivation and mindset",
                "Manages personal reminders (e.g., follow-ups, interviews)",
                " Displays charts for job statuses, application trends, offer rates, and rejections",
                "Authenticates users with secure login/signup using Clerk",
                "Persists all data with Supabase (PostgreSQL)",
                "Fully responsive and mobile-friendly UI"
			],
			technologies: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Recharts",
                "Zustand",
                "Clerk",
                "Prisma ORM",
                "Supabase",
                "PostgreSQL",
                "Vercel"
			]
		  }
	},
	{
		id: "2",
		title: "Peruvian Catering Website",
		image: cateringImage,
		slug: "peruvian-catering-website",
        date:"2025-03-28",
		description:
		  "Modern website for a Peruvian catering business built with Astro and Tailwind CSS. Fast, responsive, and professional.",
		gallery:[cateringInfo, cateringInfo2, cateringInfo3],
		url:"https://shimmering-kashata-f59a6c.netlify.app",
		github:'https://github.com/zol22/RosiPeruvianBufffet',
		fullInfo: {
            features: [
                "SEO Meta Tags (Open Graph, description, title per page)",
                "Mobile-First Responsive Design",
                "Smooth navigation across sections (Home, Menu, About, Contact)",
                "Gallery with a Pinterest-style layout",
                "Contact form with success page and Netlify Forms integration",
                "Accessible layout using semantic HTML and ARIA best practices"
              ],
			whatItDoes: [
			  "Displays authentic Peruvian food in an engaging, modern layout",
			  "Offers a simple and beautiful menu with pricing and images",
			  "Lets users view a food gallery and easily navigate the site on mobile or desktop",
			  "Includes a contact form for inquiries, powered by Netlify Forms",
			  "Built to be fast, lightweight, and SEO-optimized for Google search and local discovery"
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
		title: "Mobile Bartending Website",
		image: piscoMixers,
		slug: "mobile-bartending-website",
        date:"2025-02-10",
		landingPageImage: homepiscomixers,
		gallery:[piscoMixersInfo ,piscoMixersInfo2],
		description:
		  "Custom Squarespace site for a Peruvian cocktail and brunch brand. Designed for SEO, mobile users, and bold branding.",
		url:"https://www.piscomixers.com/",
		github: '',
		fullInfo: {
            features: [
                "Squarespace CMS for easy editing and management",
                "Mobile-first responsive layout",
                "Custom branding with iconography and color palette",
                "Contact form for client bookings",
                "Optimized for SEO with proper titles and descriptions"
              ],
			whatItDoes: [
			  "Showcases signature cocktails and services for private events",
			  "Presents a bold and elegant visual brand using strong color and type",
			  "Encourages users to inquire about booking through a custom contact form",
			  "Works seamlessly across mobile and desktop devices"
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
		id: "4",
		title: "Car Dealer Website Design",
		image: carDealer ,
		slug: "car-dealer-website-design",
		date:"2023-02-10",
		description: "Custom Wix website designed for a car dealership client in Orlando. Built to showcase vehicle inventory, highlight services, and drive inquiries with a clean, user-friendly layout.",
		url: "", // add URL if you have it
		github: '',
		fullInfo: {
            features: [
			"Wix CMS for drag-and-drop management",
			"Responsive layout for mobile and desktop",
			"Custom styling to match brand identity",
			"Inventory showcase with gallery support",
			"SEO-optimized metadata and structure"
			],
			whatItDoes: [
			"Displays available cars with photos, specs, and pricing",
			"Allows users to explore different categories of vehicles",
			"Drives leads with prominent 'Contact Us' and 'Schedule a Test Drive' sections"
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
		id: "5",
		title: "NGO Website Design",
		image: NGO,
		slug: "ngo-website-design",
		date:"2024-06-10",
		landingPageImage: NGOHomepage,
		gallery:[NGOInfo, NGOInfo2],
		description: "Website design for a nonprofit organization focused on supporting children and community outreach. Clean layout built to showcase their mission, services, and donation efforts.",
		url: "", // add URL if it's hosted
		github: '',
		fullInfo: {
          features: [
			"Simple, emotionally driven layout with imagery and messaging",
			"Donation integration (PayPal, Stripe, or similar)",
			"Blog or update section for upcoming events",
			"Contact form and social media links",
			"Responsive design for accessibility on all devices"
		  ],
		  whatItDoes: [
			"Highlights the mission and values of the nonprofit",
			"Shares stories, events, and ways to donate or volunteer",
			"Encourages community involvement through a clean, friendly layout"
		  ],
		  technologies: [
			"Wix & Custom HTML/CSS",
			"Figma",
			"Donation Tools",
			"Accessible Markup"
		  ]
		}
	  },
	  {
		id: "6",
		title: "Vision Board",
		image: visionboard,
		slug: "vision-board",
		date:"2024-10-10",
		landingPageImage: visionboardHomepage,
		gallery:[],
		description: "The Vision Board Web App is a creative and interactive tool designed to help users visualize and organize their aspirations for the future. This app allows users to craft a personalized vision board, offering an engaging way to stay motivated and focused on achieving their goals.",
		url: "https://visionboard2025.netlify.app", // add URL if it's hosted
		github:'https://github.com/zol22/visionBoard',
		fullInfo: {
          features: [
			"Personalized Vision Boards: Tailor your board to reflect your aspirations",
			"Interactive UI: Dynamic hover and flip effects for an engaging experience",
			"Easy Updates: Modify or replace images as your goals change",
			"Responsive Design: Enjoy a seamless experience on any device"
		  ],
		  whatItDoes: [
			"Select from topics like Love, Family, Friends, Money, Success, Health, Personal Goals, and Travel",
			"Upload custom images to reflect personal aspirations for the year 2025",
			"Craft a visually stunning vision board that can be updated as goals evolve"
		  ],
		  technologies: [
			"React.js",
			"Tailwind CSS",
			"Unsplash API",
			"React Hooks",
			"Javascript ES6"
		  ]
		}
	  },
	  {
		id: "7",
		title: "Family Chore Tracker",
		image: choreTracker,
		slug: "family-chore-tracker",
		date:"2024-09-25",
		landingPageImage: "",
		gallery:[],
		description: "The Family Chore Tracker Web App is an intuitive and engaging tool designed to help families manage household tasks effortlessly. By combining organization with gamification, it encourages collaboration, responsibility, and teamwork among family members.",
		url: "https://zippy-pavlova-6a251a.netlify.app", // add URL if it's hosted
		github:'https://github.com/zol22/Parent-Child-Chore-Manager',
		fullInfo: {
          features: [
			"Family Management: Shared Family ID keeps all tasks organized under one group",
			"Real-Time Updates: Syncs instantly for all family members, ensuring smooth communication",
			"Responsive Design: Optimized for use on desktop, tablet, and mobile devices",
			"Gamification: Reward points and badges motivate children to complete tasks efficiently"
		  ],
		  whatItDoes: [
			"Parents and children can create accounts connected through a shared Family ID, ensuring tasks are organized under one family",
			"Parents can assign chores, set deadlines, and allocate reward points for completed tasks",
			"Children can view their assigned chores, update their progress, and earn points and badges for completing tasks",
			"A simple drag-and-drop feature allows tasks to move between statuses like `Assigned,` `In Progress,` and `Completed",
			"Kids are motivated to complete chores through a points system and achievements, making household tasks fun and rewarding"
		  ],
		  technologies: [
			"React.js",
			"Tailwind CSS",
			"FireBase Authentication",
			"FireBase Firestore",
			"React Drag and Drop (React DnD)"
		  ]
		}
	  },
	  
	  	  
]
