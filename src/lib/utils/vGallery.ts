import {gsap} from "gsap"

const setImageSize = (width : number) =>
{
  gsap.set('.gallery_image',{
    width
  })
}

const positionImages = (imageHeight : number) : void =>
{
  // console.log( imageHeight );
  gsap.set(`[data-col='0'] .gallery_image`,
  {
    y : (i) => imageHeight * (-1 + i)
  })
  gsap.set(`[data-col='1'] .gallery_image`,
  {
    y : (i) => imageHeight * (-1 + i)
  })
}

const loopImages = (imageHeight : number , imagesLength : number) : void =>
{
  const galleryWraperHeight = imagesLength * imageHeight

  gsap.to(`[data-col='0'] .gallery_image`,{
    duration : 10,
    repeat : -1,
    ease : 'none',
    y :`+=${galleryWraperHeight}`,
    modifiers : {
      y : gsap.utils.unitize((y) =>
       gsap.utils.wrap(-imageHeight, (imagesLength -1) * imageHeight, parseFloat(y))
      )
    }
  })

  gsap.to(`[data-col='1'] .gallery_image`,{
    duration : 12,
    repeat : -1,
    ease : 'none',
    y :`+=${galleryWraperHeight}`,
    modifiers : {
     y : gsap.utils.unitize((y) =>
       gsap.utils.wrap(-imageHeight, (imagesLength -1) * imageHeight, parseFloat(y))
      )
    }
  })

}

const createVGallery = (imageSize : number, gap : number, imagesLength : number) =>
{
  const imageHeight = imageSize + gap
  setImageSize(imageSize)
  gsap.killTweensOf(".gallery_image");
  positionImages(imageHeight);
  loopImages(imageHeight, imagesLength);
}

export {createVGallery}