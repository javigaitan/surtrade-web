"use client"

import Image from "next/image"

const brands = [
  { name: "Brand 1", logo: "/placeholder.svg?key=br1&height=200&width=200" },
  { name: "Brand 2", logo: "/placeholder.svg?key=br2&height=200&width=200" },
  { name: "Brand 3", logo: "/placeholder.svg?key=br3&height=200&width=200" },
  { name: "Brand 4", logo: "/placeholder.svg?key=br4&height=200&width=200" },
  { name: "Brand 5", logo: "/placeholder.svg?key=br5&height=200&width=200" },
  { name: "Brand 6", logo: "/placeholder.svg?key=br6&height=200&width=200" },
  { name: "Brand 7", logo: "/placeholder.svg?key=br7&height=200&width=200" },
  { name: "Brand 8", logo: "/placeholder.svg?key=br8&height=200&width=200" },
]

export function BrandsCarousel() {
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands]

  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll">
        {duplicatedBrands.map((brand, index) => (
          <div key={`${brand.name}-${index}`} className="flex-shrink-0 w-64 mx-4">
            <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow h-64 flex items-center justify-center">
              <div className="relative h-40 w-40">
                <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-256px * ${brands.length}));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
