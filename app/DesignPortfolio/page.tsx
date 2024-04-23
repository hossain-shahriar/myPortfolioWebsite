'use client'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react';
import Footer from '../Components/Footer'; // Assuming Footer.tsx is in the same directory

// Define your images directly here or load them via getStaticProps if they are dynamic
const localImages = [
    { id: 1, href: '/AndroidProject.png', imageSrc: '/AndroidProject.png', description: 'UX Design for Android Studio Project' },
    { id: 2, href: '/BeautifulBangladesh.png', imageSrc: '/BeautifulBangladesh.png', description: 'Beautiful Bangladesh' },
    { id: 3, href: '/Populationday.png', imageSrc: '/Populationday.png', description: 'World Population Day' },
    { id: 4, href: '/SustainableLiving.png', imageSrc: '/SustainableLiving.png', description: 'Sustainable Living' },
    { id: 5, href: '/HappyDiwali.png', imageSrc: '/HappyDiwali.png', description: 'Happy Diwali' },
    { id: 6, href: '/MidAutumnFestival.png', imageSrc: '/MidAutumnFestival.png', description: 'Mid Autumn Festival' },
    { id: 7, href: '/HappyHalloween.png', imageSrc: '/HappyHalloween.png', description: 'Happy Halloween' }
  // Add more images as needed
];

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Gallery() {
  return (
    <>
    <div className="text-gray-600 mx-auto max-w-2xl py-16 px-12 sm:py-24 sm:px-6 lg:max-w-full lg:px-56">
    <h1 className="py-16 text-6xl font-bold my-4">UX and Graphic Design Portfolio</h1>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {localImages.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  )
}

function BlurImage({ image }: { image: { id: number, href: string, imageSrc: string, description: string } }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-black xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <p className="pt-4 font-bold mt-1 text-lg text-gray-600">{image.description}</p>
    </a>
  )
}






























// // DesignPortfolio.tsx
// import React from 'react';
// import Image from 'next/image';
// import Footer from '../Components/Footer';  // Ensure the path to Footer is correct

// const DesignPortfolio = () => {
//   const portfolioImages = [
//     { id: 1, href: '/AndroidProject.png', imageSrc: '/AndroidProject.png', description: 'UX Design for Android Studio Project' },
//     { id: 2, href: '/BeautifulBangladesh.png', imageSrc: '/BeautifulBangladesh.png', description: 'Beautiful Bangladesh' },
//     { id: 3, href: '/Populationday.png', imageSrc: '/Populationday.png', description: 'World Population Day' },
//     { id: 4, href: '/SustainableLiving.png', imageSrc: '/SustainableLiving.png', description: 'Sustainable Living' },
//     { id: 5, href: '/HappyDiwali.png', imageSrc: '/HappyDiwali.png', description: 'Happy Diwali' },
//     { id: 6, href: '/MidAutumnFestival.png', imageSrc: '/MidAutumnFestival.png', description: 'Mid Autumn Festival' },
//     { id: 7, href: '/HappyHalloween.png', imageSrc: '/HappyHalloween.png', description: 'Happy Halloween' }
//   ];

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <header>
//         <h1 className="text-6xl font-bold text-center mb-12">UX and Graphic Design Portfolio</h1>
//       </header>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {portfolioImages.map((image) => (
//           <div key={image.id} className="relative w-full h-64">
//             <a href={image.href} className="group block w-full h-full">
//               <Image
//                 src={image.imageSrc}
//                 alt={image.description}
//                 layout="fill"
//                 objectFit="cover"
//                 className="transition-opacity duration-500 ease-in-out hover:opacity-75"
//               />
//               <div className="absolute bottom-0 left-0 bg-opacity-75 bg-gray-900 w-full text-white p-4 text-sm">
//                 {image.description}
//               </div>
//             </a>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default DesignPortfolio;
