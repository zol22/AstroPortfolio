export const profile = {
	fullName: 'Solange',
	fulltitle: 'Freelance Full Stack Web Developer',
	title: 'Freelance Web Developer',
	author_name: 'Solange Ormeno', // Author name to be highlighted in the papers section
	company: 'Freelance', // Company name to be highlighted in the papers section
}


// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'ssormeno@hotmail.com',
	linkedin: 'https://www.linkedin.com/in/solangeormeno22/',
	x: 'https://x.com/solange25669633',
	github: 'https://github.com/zol22',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://solangeormeno.dev', // 'https://solangeormeno.dev' Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Keep empty if you're deploying to the root domain
}

export const seo = {
	default_title: 'Solange Ormeno Portfolio',
	default_description: 'Freelance full-stack web developer based in Orlando, FL. I build custom, responsive websites and web apps that solve real problems and help businesses grow.',
	default_image: '/solange-og-image.png',
}
