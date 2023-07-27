"use client";
import GDPChart from '@/components/gdpchart'
import ImageSlider from '@/components/image-slider';
import Image from 'next/image';

export default function Home() {

  const imageUrls = [
    "https://media.discordapp.net/attachments/416094051339862016/1133942290000388116/kirti-kalla-JRhvllDBhzs-unsplash.jpg?width=400&height=600",
    "https://media.discordapp.net/attachments/416094051339862016/1133942290000388116/kirti-kalla-JRhvllDBhzs-unsplash.jpg?width=400&height=600",
  ];
  return (
    <div>
      <div className='min-w-full'>
      {/* <img src={"https://media.discordapp.net/attachments/416094051339862016/1133942290000388116/kirti-kalla-JRhvllDBhzs-unsplash.jpg?width=400&height=600"} alt='img'/> */}
      <ImageSlider imageUrls={imageUrls} />
      </div>
      </div>
  )
}
