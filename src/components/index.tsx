import "./images.css"

import image0 from "../../public/img-hanging/0.png"
import image1 from "../../public/img-hanging/1.png"
import image2 from "../../public/img-hanging/2.png"
import image3 from "../../public/img-hanging/3.png"
import image4 from "../../public/img-hanging/4.png"
import image5 from "../../public/img-hanging/5.png"
import image6 from "../../public/img-hanging/6.png"
import image7 from "../../public/img-hanging/7.png"
import image8 from "../../public/img-hanging/8.png"
import image9 from "../../public/img-hanging/9.png"
import image10 from "../../public/img-hanging/10.png"

const imagesHang: string[] = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10  ];

interface PropsImaginere {
  imageNumber: number
}

export const HangImages = ({imageNumber}: PropsImaginere) => {

  if (imageNumber >= 10) {
    imageNumber = 10;
  }


  return (
    <div className="images">
        <img
        className="images"
        src={imagesHang[imageNumber]}>
        </img>
    </div>
  )

}
