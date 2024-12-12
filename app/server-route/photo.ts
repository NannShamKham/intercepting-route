import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";

export type PhotoImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
};

 const photoImages: PhotoImage[] = [
    {
        id: "1",
        name: "Great Wall of China",
        src: photo1,
        photographer: "John Doe",
        location: "China",
    },
    {
        id: "2",
        name: "Bagan",
        src: photo2,
        photographer: "Mg Mg",
        location: "Myanmar",
    },
    {
        id: "3",
        name: "Wonders of the World",
        src: photo3,
        photographer: "John Doe",    
        location: "New York, USA",
    }]

    export default photoImages;