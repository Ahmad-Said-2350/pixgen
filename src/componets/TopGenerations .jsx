import React from 'react';

const TopGenerations  = async() => {
    const res = await fetch('https://pixgen-tan.vercel.app/data.json')
    const photos  = await res.json()
    const topPhotos = photos.slice(0,6) 
    return (
       <div>
            <h1 className="text-2xl font-bold my-5">Top Generations</h1>

            <div className="grid grid-cols-4 gap-5">
                {topPhotos.map(photo => <div key={photo.id}><h1>{photo.title}</h1></div>)}
            </div>
        </div>
    );
};

export default TopGenerations ;