// components/BannerSlider.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function BannerSlider() {
  const banners = [
    {
      id: 1,
      image: "https://picsum.photos/seed/mattress/800/300",
      title: "Mattress",
      subtitle: "From ₹2,999",
      desc: "Wakefit, Sleepwell & more",
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/laptop/800/300",
      title: "Laptops",
      subtitle: "From ₹29,999",
      desc: "Dell, HP & more",
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/phone/800/300",
      title: "Smartphones",
      subtitle: "From ₹9,999",
      desc: "Samsung, OnePlus & more",
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/Headphone/800/300",
      title: "HeadPhones",
      subtitle: "From ₹1,999",
      desc: "Samsung, OnePlus & more",
    },
  ];

  return (
    <div className="mb-12">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative bg-blue-600 text-white flex items-center justify-between p-6 md:p-12 rounded-lg">
              {/* Left: Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="rounded-lg w-1/2 object-cover"
              />

              {/* Right: Text */}
              <div className="ml-6">
                <h2 className="text-3xl font-bold mb-2">{banner.title}</h2>
                <p className="text-xl font-semibold mb-2">{banner.subtitle}</p>
                <p className="mb-4">{banner.desc}</p>
                <button className="bg-amber-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-500">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
