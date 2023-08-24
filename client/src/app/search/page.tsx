import FilterBar from "@/components/FilterBar";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Link from 'next/link';

export default function Search() {
  return (
    <>
    <Navbar/>
    <div className="flex justify-between mx-auto w-[83vw]">
      <FilterBar />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:grid-cold-5 place-items-center lg:w-auto w-full">
        {
          Array.from({ length: 15 }).map((item, index) => (
            <Link href={`product/${`500`}`}>
              <Product CardSize='flex-col lg:w-[13vw] md:w-[20vw] xl:h-[44vh] lg:h-[30vh] sm:w-[35vw] h-[30vh] lg:text-base text-xs lg:h-[43vh] p-4' ImageSize=' h-[70%] w-full' />

            </Link>
          ))
        }
      </div>
    </div>
    </>
  )
}
