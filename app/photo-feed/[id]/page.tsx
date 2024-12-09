"use client"
import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

export default function PhotoPage({ params }: { params: { id: string } }) {
    const photo: WonderImage = wondersImages.find((p) => p.id === params.id);
    console.log(photo);
    return (
        <div className="container mx-auto my-10">
           <div className="w-1/2 mx-auto">
                <h1>{photo.name}</h1>
           </div>
           <Image className="w-full object-cover aspect-square"  src={photo.src} alt={photo.name}/>
        </div>
    );
}