import { products } from "@/app/constants/data";
import ImageGallery from "@/app/pages/ImageGallery";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params; // ✅ REQUIRED

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const { images, name, price, desc } = product;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 mt-8  ">
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <ImageGallery images={images as string[]} />

          <div className="md:py-8">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              {name}
            </h2>

            <div className="mb-6 flex items-center gap-3 mt-4">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-500">56 Ratings</span>
            </div>

            <div className="mb-4">
              <span className="text-xl font-bold">₦{price}</span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="h-6 w-6" />
              <span className="text-sm">2–4 Day Shipping</span>
            </div>

            <p className="mt-12 text-gray-500">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

// import { products } from "@/app/constants/data";
// import ImageGallery from "@/app/pages/ImageGallery";
// import { Button } from "@/components/ui/button";
// import { Star, Truck } from "lucide-react";

// interface ProductPageProps {
//   params: {
//     id: string;
//   };
// }

// const ProductPage = async ({ params }: ProductPageProps) => {
//   const { id } = await params;

//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return <p>Product not found</p>;
//   }
//   const { images, name, price, description } = products;

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-7xl px-4 md:px-8">
//         <div className="grid gap-8 md:grid-cols-2">
//           {/* IMAGE GALLERY (CLIENT) */}
//           <ImageGallery image={images} />

//           {/* PRODUCT INFO */}
//           <div className="md:py-8">
//             <div className="mb-3">
//               <span className="text-gray-500">{product.categoryName}</span>
//               <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
//                 {name}
//               </h2>
//             </div>

//             <div className="mb-6 flex items-center gap-3">
//               <Button className="rounded-full gap-x-2">
//                 <span className="text-sm">4.2</span>
//                 <Star className="h-5 w-5" />
//               </Button>
//               <span className="text-sm text-gray-500">56 Ratings</span>
//             </div>

//             <div className="mb-4">
//               <div className="flex items-end gap-2">
//                 <span className="text-xl font-bold text-gray-800">
//                   ${price}
//                 </span>
//                 <span className="text-red-500 line-through">
//                   ${product.price + 30}
//                 </span>
//               </div>
//               <span className="text-sm text-gray-500">
//                 Incl. VAT plus shipping
//               </span>
//             </div>

//             <div className="mb-6 flex items-center gap-2 text-gray-500">
//               <Truck className="h-6 w-6" />
//               <span className="text-sm">2–4 Day Shipping</span>
//             </div>
//             <div className="flex items-center p-2 space-x-2">
//               <Button variant="outline">-</Button>
//               <Button variant="ghost">0</Button>
//               <Button variant="outline">+</Button>
//             </div>

//             <div className="flex gap-2.5">
//               <Button variant="outline">Add to Bag</Button>
//               <Button variant="outline">Checkout now</Button>
//             </div>

//             <p className="mt-12 text-gray-500">{product.description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

// import { products } from "@/app/constants/data";
// import Image from "next/image";

// interface ProductPageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// const ProductPage = async ({ params }: ProductPageProps) => {
//   const { id } = await params; // ✅ unwrap params

//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div className="grid gap-4 lg:grid-cols-5">
//       {/* Thumbnails */}
//       <div className="order-last flex gap-4 lg:order-0 lg:flex-col">
//         {product.images.map((image, index) => (
//           <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
//             <Image
//               src={image}
//               width={200}
//               height={200}
//               alt={product.name}
//               className="h-full w-full object-cover object-center cursor-pointer"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Big Image */}
//       <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
//         <Image
//           src={product.images[0]}
//           width={500}
//           height={500}
//           alt={product.name}
//           className="h-full w-full object-cover object-center"
//         />
//         <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
//           Sale
//         </span>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
