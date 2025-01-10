import { FaLock, FaShoppingCart, FaGift, FaHeadphones } from "react-icons/fa";
import Container from "./Container";

const Features = () => {
  const features = [
    { icon: <FaLock />, label: "SECURE PAYMENT" },
    { icon: <FaShoppingCart />, label: "ORIGINAL PRODUCTS" },
    { icon: <FaGift />, label: "FREE GIFT" },
    { icon: <FaHeadphones />, label: "QUANTITY SUPPORT" },
  ];

  return (
    <Container className="bg-[#F0FBFF] p-6 rounded-xl shadow-md mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <div className="text-blue-500 text-3xl">{feature.icon}</div>
            <p className="text-sm font-semibold text-blue-600">
              {feature.label}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Features;
