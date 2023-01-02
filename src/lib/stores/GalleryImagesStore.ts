import { writable } from 'svelte/store';

const gallery = {
	dimens: [
		'720x900',
		'720x900',
		'720x575',
		'720x576',
		'768x1024',
		'768x1024',
		'720x636',
		'720x900',
		'720x802',
		'720x900',
		'720x900',
		'720x1280',
		'719x479',
		'960x1280',
		'720x900',
		'768x1024',
		'1024x768',
		'576x1024',
		'577x1024',
		'1024x768',
		'768x1024',
		'480x640',
		'960x1280'
	],
	images: [
		'/gallery/1.webp',
		'/gallery/2.webp',
		'/gallery/3.webp',
		'/gallery/4.webp',
		'/gallery/5.webp',
		'/gallery/6.webp',
		'/gallery/7.webp',
		'/gallery/8.webp',
		'/gallery/9.webp',
		'/gallery/10.webp',
		'/gallery/11.webp',
		'/gallery/12.webp',
		'/gallery/13.webp',
		'/gallery/14.webp',
		'/gallery/15.webp',
		'/gallery/16.webp',
		'/gallery/17.webp',
		'/gallery/18.webp',
		'/gallery/19.webp',
		'/gallery/20.webp',
		'/gallery/21.webp',
		'/gallery/22.webp',
		'/gallery/23.webp'
	]
};

const GalleryImages = writable(gallery);

export default GalleryImages;