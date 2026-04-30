import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

const PhotoDetailsPage = async ({params}) => {
const {id} = await params;
const res = await fetch('https://pixgen-tan.vercel.app/data.json')
    const photos  = await res.json()

    const photo = photos.find(p =>p.id == id)
    return (
        <div className=' my-10'>
            

<Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
            <Image
                src={photo.imageUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={photo.title}
                className="object-cover rounded-xl"
                />

                <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>
            </div>

            <div>
                <h2 className="font-medium">{photo.model}</h2>
            </div>

           <div className="flex gap-5">
             <div className="flex items-center gap-2">
                
                <p>{photo.category}</p>
            </div>



               <div className="flex items-center gap-2">
                <p>{photo.resolution}</p>
            </div>
           </div>

     
        </Card>





        </div>
    );
};

export default PhotoDetailsPage;