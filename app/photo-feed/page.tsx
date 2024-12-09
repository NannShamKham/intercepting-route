import Link from "next/link"
import wonderImages from "./wonders"  
import Image from "next/image"
const page = ({params}:{params:{id:string}}) => {
 
  return (
    <main className="container mx-auto my-20">
      <h1 className="text-2xl text-red-500">
        New Wonders of the world
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {wonderImages.map(({id,name,src})=>(
          <Link key={id} href={`/photo-feed/${id}`} >
            <Image src={src} alt={name} className="w-full object-cover aspect-square" />
           </Link>
        ))}
      </div>
    </main>
  
  );}

export default page