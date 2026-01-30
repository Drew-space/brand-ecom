// import { Product } from "@/types/product";
// import Image from "next/image";

// type ShoppingCardProps = {
//   product: Product;
// };

// const ShoppingCard = ({ product }: ShoppingCardProps) => {
//   return (
//     <div className="border p-4 rounded-md   hover:cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full aspect-square relative ">
//       {product.images[0] && (
//         <Image
//           src={
//             typeof product.images[0] === "string"
//               ? product.images[0]
//               : product.images[0].src
//           }
//           width={150}
//           height={70}
//           alt={product.name}
//           className=" object-cover  rounded"
//         />
//       )}
//       <div className=" flex justify-between">
//         <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//         <p className="text-amber-600 font-bold mb-1">₦{product.price}</p>
//       </div>
//       <p className="text-gray-600 mb-2">{product.desc}</p>
//     </div>
//   );
// };

// export default ShoppingCard;

import { images } from "@/public/img/data";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

type ShoppingCardProps = {
  product: Product;
};

const ShoppingCard = ({ product }: ShoppingCardProps) => {
  return (
    <Link href={`/products/${product.id}`} className="w-full h-full">
      <div className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col p-2 h-full w-full">
        {/* Image */}
        {product.images[0] && (
          <div
            className="relative w-full h-48 rounded-xl overflow-hidden"
            style={{
              backgroundImage: `url(${product.images[0]})`,

              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        )}

        {/* Product Info */}
        <div className="p-4 flex flex-col gap-1">
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm line line-clamp-2  ">
            {product.desc}
          </p>
          <p className="text-gray font-bold">₦{product.price}</p>
          {/* <button className="bg-black/95 text-white rounded-full px-3 py-3 mt-4">
            Buy Now
          </button> */}
        </div>
      </div>
    </Link>
  );
};

export default ShoppingCard;
