import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  images: (string | StaticImageData)[];
}
