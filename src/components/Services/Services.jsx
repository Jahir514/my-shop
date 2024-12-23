import { FaHeadphonesAlt, FaWallet, FaCheckCircle, FaCarSide } from "react-icons/fa";
const serviceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  },
];
const Services = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 space-y-4 lg:grid-cols-4 lg:space-y-0">
          {serviceData.map((data) => (
            <div key={data.id} className="flex flex-col items-start gap-4 md:flex-row">
              {data.icon}
              <div>
                <h1 className="font-bold lg:text-xl">{data.title}</h1>
                <p className="text-sm text-gray-400">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
