import {gsap} from "gsap"

const positionImages = (imageWidth : number) : void =>
{
  gsap.set(`[data-row='0'] .gallery_image`,
  {
    x : (i) => imageWidth * (-1 + i)
  })
  gsap.set(`[data-row='1'] .gallery_image`,
  {
    x : (i) => imageWidth * (-1 + i)
  })
}

const loopImages = (imageWidth : number , imagesLength : number) : void =>
{
  const galleryWraperWidth = imagesLength * imageWidth

  gsap.to(`[data-row='0'] .gallery_image`,{
    duration : 10,
    repeat : -1,
    ease : 'none',
    x :`+=${galleryWraperWidth}`,
    modifiers : {
      x : gsap.utils.unitize((x) =>
       gsap.utils.wrap(-imageWidth, (imagesLength -1) * imageWidth, parseFloat(x))
      )
    }
  })

  gsap.to(`[data-row='1'] .gallery_image`,{
    duration : 12,
    repeat : -1,
    ease : 'none',
    x :`+=${galleryWraperWidth}`,
    modifiers : {
      x : gsap.utils.unitize((x) =>
       gsap.utils.wrap(-imageWidth, (imagesLength -1) * imageWidth, parseFloat(x))
      )
    }
  })

}

const createHGallery = (imageWidth : number, imagesLength : number) =>
{
  positionImages(imageWidth);
  loopImages(imageWidth, imagesLength);
}

export {createHGallery}