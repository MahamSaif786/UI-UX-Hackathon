// "use client";

// import BreadcrumbCart from "@/components/cart-page/BreadcrumbCart";
// import ProductCard from "@/components/cart-page/ProductCard";
// import { Button } from "@/components/ui/button";
// import InputGroup from "@/components/ui/input-group";
// import { cn } from "@/lib/utils";
// import { integralCF } from "@/styles/fonts";
// import { FaArrowRight } from "react-icons/fa6";
// import { MdOutlineLocalOffer } from "react-icons/md";
// import { TbBasketExclamation } from "react-icons/tb";
// import React from "react";
// import { RootState } from "@/lib/store";
// import { useAppSelector } from "@/lib/hooks/redux";
// import Link from "next/link";

// export default function CartPage() {
//   const { cart, totalPrice, adjustedTotalPrice } = useAppSelector(
//     (state: RootState) => state.carts
//   );

//   return (
//     <main className="pb-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 xl:px-0">
//         {cart && cart.items.length > 0 ? (
//           <>
//             <BreadcrumbCart />
//             <h2
//               className={cn([
//                 integralCF.className,
//                 "font-bold text-3xl md:text-4xl text-gray-800 uppercase mb-6",
//               ])}
//             >
//               Your Cart
//             </h2>
//             <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
//               <div className="w-full p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-lg border border-gray-300 shadow-lg bg-white">
//                 {cart?.items.map((product, idx, arr) => (
//                   <React.Fragment key={idx}>
//                     <ProductCard data={product} />
//                     {arr.length - 1 !== idx && (
//                       <hr className="border-t-gray-300" />
//                     )}
//                   </React.Fragment>
//                 ))}
//               </div>
//               <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-lg border border-gray-300 shadow-lg bg-white">
//                 <h6 className="text-xl md:text-2xl font-bold text-gray-800">
//                   Order Summary
//                 </h6>
//                 <div className="flex flex-col space-y-4">
//                   <div className="flex items-center justify-between">
//                     <span className="md:text-xl text-gray-600">Subtotal</span>
//                     <span className="md:text-xl font-bold text-gray-800">${totalPrice}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="md:text-xl text-gray-600">
//                       Discount (-
//                       {Math.round(
//                         ((totalPrice - adjustedTotalPrice) / totalPrice) * 100
//                       )}
//                       %)
//                     </span>
//                     <span className="md:text-xl font-bold text-red-600">
//                       -${Math.round(totalPrice - adjustedTotalPrice)}
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="md:text-xl text-gray-600">Delivery Fee</span>
//                     <span className="md:text-xl font-bold text-gray-800">Free</span>
//                   </div>
//                   <hr className="border-t-gray-300" />
//                   <div className="flex items-center justify-between">
//                     <span className="md:text-xl text-gray-800">Total</span>
//                     <span className="text-xl md:text-2xl font-bold text-gray-800">
//                       ${Math.round(adjustedTotalPrice)}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex space-x-3">
//                   <InputGroup className="bg-gray-200">
//                     <InputGroup.Text>
//                       <MdOutlineLocalOffer className="text-gray-600 text-2xl" />
//                     </InputGroup.Text>
//                     <InputGroup.Input type="text"
//                       name="code"
//                       placeholder="Add promo code"
//                       className="bg-transparent placeholder:text-gray-400"
//                     />
//                   </InputGroup>
//                   <Button
//                     type="button"
//                     className="bg-black text-white rounded-full w-full max-w-[119px] h-[48px] transition-transform transform hover:scale-105"
//                   >
//                     Apply
//                   </Button>
//                 </div>
//                 <Button
//                   type="button"
//                   className="text-sm md:text-base font-medium bg-black text-white rounded-full w-full py-4 h-[54px] md:h-[60px] group transition-transform transform hover:scale-105"
//                 >
//                   Go to Checkout{" "}
//                   <FaArrowRight className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
//                 </Button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="flex items-center flex-col text-gray-400 mt-32">
//             <TbBasketExclamation strokeWidth={1} className="text-6xl" />
//             <span className="block mb-4">Your shopping cart is empty.</span>
//             <Button className="rounded-full w-24 bg-black text-white" asChild>
//               <Link href="/shop">Shop Now</Link>
//             </Button>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

"use client";

import BreadcrumbCart from "@/components/cart-page/BreadcrumbCart";
import ProductCard from "@/components/cart-page/ProductCard";
import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineLocalOffer } from "react-icons/md";
import { TbBasketExclamation } from "react-icons/tb";
import React from "react";
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks/redux";
import Link from "next/link";

export default function CartPage() {
  const { cart, totalPrice, adjustedTotalPrice } = useAppSelector(
    (state: RootState) => state.carts
  );

  return (
    <main className="pb-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        {cart && cart.items.length > 0 ? (
          <>
            <BreadcrumbCart />
            <h2
              className={cn([
                integralCF.className,
                "font-bold text-3xl md:text-4xl text-gray-800 uppercase mb-6",
              ])}
            >
              Your Cart
            </h2>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
              <div className="w-full p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-lg border border-gray-300 shadow-lg bg-white">
                {cart?.items.map((product, idx, arr) => (
                  <React.Fragment key={idx}>
                    <ProductCard data={product} />
                    {arr.length - 1 !== idx && (
                      <hr className="border-t-gray-300" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-lg border border-gray-300 shadow-lg bg-white">
                <h6 className="text-xl md:text-2xl font-bold text-gray-800">
                  Order Summary
                </h6>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-gray-600">Subtotal</span>
                    <span className="md:text-xl font-bold text-gray-800">${totalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-gray-600">
                      Discount (-
                      {Math.round(
                        ((totalPrice - adjustedTotalPrice) / totalPrice) * 100
                      )}
                      %)
                    </span>
                    <span className="md:text-xl font-bold text-red-600">
                      -${Math.round(totalPrice - adjustedTotalPrice)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-gray-600">Delivery Fee</span>
                    <span className="md:text-xl font-bold text-gray-800">Free</span>
                  </div>
                  <hr className="border-t-gray-300" />
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-gray-800">Total</span>
                    <span className="text-xl md:text-2xl font-bold text-gray-800">
                      ${Math.round(adjustedTotalPrice)}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <InputGroup className="bg-transparent border border-gray-300">
                    <InputGroup.Text>
                      <MdOutlineLocalOffer className="text-gray-600 text-2xl" />
                    </InputGroup.Text>
                    <InputGroup.Input
                      type="text"
                      name="code"
                      placeholder="Add promo code"
                      className="bg-transparent placeholder:text-gray-400"
                    />
                  </InputGroup>
                  <Button
                    type="button"
                    className="bg-transparent border border-black text-black rounded-full w-full max-w-[119px] h-[48px] transition-transform transform hover:scale-105"
                  >
                    Apply </Button>
                </div>
                <Button
                  type="button"
                  className="text-sm md:text-base font-medium bg-transparent border border-black text-black rounded-full w-full py-4 h-[54px] md:h-[60px] group transition-transform transform hover:scale-105"
                >
                  Go to Checkout{" "}
                  <FaArrowRight className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center flex-col text-gray-400 mt-32">
            <TbBasketExclamation strokeWidth={1} className="text-6xl" />
            <span className="block mb-4">Your shopping cart is empty.</span>
            <Button className="rounded-full w-24 bg-black text-white" asChild>
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}