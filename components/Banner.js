// // components/Banner.js
// export default function Banner() {
//   return (
//     <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg overflow-hidden mb-12 shadow-lg">
//       <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
//         {/* Left side: Image */}
//         <img
//           src="https://picsum.photos/seed/mattress/400/300"
//           alt="Banner Ad"
//           className="rounded-lg w-full md:w-1/3 object-cover mb-6 md:mb-0"
//         />

//         {/* Right side: Text */}
//         <div className="md:ml-8 text-center md:text-left">
//           <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
//           <p className="text-xl font-semibold mb-2">From ₹1,999</p>
//           <p className="mb-4">Make Your Way More Special with New Arrivals</p>
//           <button className="bg-amber-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-500">
//             Shop Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// components/Banner.js
export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg overflow-hidden mb-8 shadow-lg">
      <div className="flex items-center justify-between p-8">
        {/* Left side: Image */}
        <img
          src="https://picsum.photos/seed/Image /200/150"
          alt="Banner Ad"
          className="rounded-md w-48 h-32 object-cover"
        />

        {/* Right side: Text */}
        <div className="ml-7 flex-1 text-left">
          <h2 className="text-lg font-bold">New Arrivals</h2> 
          <p className="text-sm font-medium">From ₹1,999</p>
          <p className="text-xs mb-3">Special offers for you!</p> 
          <button className="bg-amber-400 text-black px-3 py-1 rounded text-sm font-semibold hover:bg-amber-500">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

