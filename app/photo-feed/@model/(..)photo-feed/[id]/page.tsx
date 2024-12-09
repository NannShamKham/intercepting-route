import wonderImages,{WonderImage} from "@/app/photo-feed/wonders";
import Image from "next/image";
import Modal from "@/app/components/model";
const PhotoModal = ({params:{id}}:{params:{id:string}}) => {
     const photo:WonderImage = wonderImages.find((p) => p.id === id);
  return (
    <Modal>
        <Image src={photo.src} alt={photo.name} className="w-full object-cover aspect-square" />
        <div className="bg-white p-4">
            <h1 className="text-2xl text-red-500">
                {photo.name}
            </h1>
            <p>{photo.photographer}</p>
            <p>{photo.location}</p>
        </div>
    </Modal>
  )
}

export default PhotoModal