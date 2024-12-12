"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photoImages from '../slider/photo';
import Image from 'next/image';
export default function ImageSlider() {
      const settings = {
                    dots: true,
                };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {photoImages.map(({id,name,src})=>(
            <div key={id}>
                <Image src={src} alt={name} />
            </div>
        ))}
      </Slider>
    </div>
  );
}