import {gsap} from 'gsap';

/**
 *  GALLERY
 */

const calcGalleryHeight = (imgs: NodeListOf<HTMLImageElement>): number => {
	let galleryHeight = 0;

	// Get each column height and choose the taller
	for (let i = 0; i < colsNumber; i++) {
		let colImages = getColImages(imgs, i);
		let colHeight = getColHeight(colImages);

		if (colHeight > galleryHeight) galleryHeight = colHeight;
	}

	return galleryHeight;
};

/**
 *  COLUMNS
 */
let colsNumber: number;
let colsWidth : number[];
let colGap = 8;
let rowGap = 16;

const setColsNumber = (galleryWidth: number) => {
	if (galleryWidth > 1340) {
		colsNumber = 4;
	} else if (galleryWidth > 1024) {
		colsNumber = 3;
	} else if (galleryWidth > 768) {
		colsNumber = 2;
	} else {
		colsNumber = 1;
	}

	return colsNumber;
};

const getColsNumber = (gallerWidth: number) => {
	let colsNumber = setColsNumber(gallerWidth);
	return colsNumber;
};

const getColsWidth = (galleryWidth: number) => {
	colsWidth = [];
	if(colsNumber == 1)
	{
		colsWidth.push(galleryWidth)
		return colsWidth
	}

	galleryWidth = galleryWidth - (colGap * colsNumber - 1);
	let colWidth = Math.floor(galleryWidth / colsNumber);

	// If gallery width can be divided equally on the number of columns
	if (galleryWidth % colsNumber != 0) {
		for (let i = 1; i < colsNumber; i++) {
			colsWidth.push(colWidth);
		}
		let lastColWidth = galleryWidth - colWidth * (colsNumber - 1);
		colsWidth.push(lastColWidth);
	} else {
		for (let i = 0; i < colsNumber; i++) {
			colsWidth.push(colWidth);
		}
	}

	return colsWidth;
};

const getColImages = (imgs: NodeListOf<HTMLImageElement>, col: number): HTMLImageElement[] => {
	let colImages: HTMLImageElement[] = [];
	imgs.forEach((img, i) => {
		if (i % colsNumber == col) colImages.push(img);
	});

	return colImages;
};

const getColHeight = (colImages: HTMLImageElement[]): number => {
	let colHeight = 0;

	colImages.forEach((img) => {
		let imageHeight = getImageHeight(img)
		colHeight += imageHeight;
	});

	colHeight += rowGap * (colImages.length - 1);

	return colHeight;
};

/**
 *  IMAGES
 */

const getImageWidth = (i: number) => {
	const colIndex = i % colsNumber;
	const width = colsWidth[colIndex];

	return width;
};

const getImageHeight = (img : HTMLImageElement) =>
{
	let imageKey = parseInt(img.dataset.key as string)
	let imageDimen = img.dataset.dimen?.split('x') as string[]
	let imageNaturalWidth = parseInt(imageDimen[0])
	let imageNaturalHeight = parseInt(imageDimen[1])
	let imageRenderWidth = getImageWidth(imageKey);

	const height = imageRenderWidth * imageNaturalHeight / imageNaturalWidth
	return height
}

const getImageLeft = (i: number) => {
	let left = 0;
	let colIndex = i % colsNumber;

	while (colIndex != 0) {
		colIndex--;
		left += colsWidth[colIndex] + colGap;
	}

	return left;
};

const getImageTop = (i: number, imgs: NodeListOf<HTMLImageElement>) => {
	let top = 0;
	let n = i;

	while (n - colsNumber >= 0) {
		n -= colsNumber;
		top += getImageHeight(imgs[n]) + rowGap;
	}

	return top;
};

const getImageEase = (i: number): number => {
	if(colsNumber == 1){
		return 0.2
	}
	let col = i % colsNumber;
	let colEase = 0.8 + 0.3 * col;

	return colEase;
};

const scrollImages = (imgs: NodeListOf<Element>) => {
	let y = window.pageYOffset;
	gsap.to(imgs, {
		y: `-${y}`,
		// duration: (i) => getImageEase(i),
		// ease: colsNumber == 1 ? 'linear' : 'ease.in'
		duration: 0,
		ease: 'none'
	});
};

const positionImages = (imgs: NodeListOf<HTMLImageElement>, gallery: HTMLDivElement) => {
	let galleryWidth = gallery.clientWidth;
	colsNumber = setColsNumber(galleryWidth);
	colsWidth = getColsWidth(galleryWidth);

	imgs.forEach((img, i) => {
		let width = getImageWidth(i);
		let left = getImageLeft(i);
		let top = getImageTop(i, imgs);

		gsap.set(img, { width, left, top });
	});

	let galleryHeight = calcGalleryHeight(imgs);
	gallery.style.height = `${galleryHeight}px`;
};

export { positionImages as default, scrollImages };