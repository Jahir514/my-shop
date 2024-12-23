import Button from "../Shared/Button";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/gaming.png";
import Image5 from "../../assets/category/vr.png";
import Image6 from "../../assets/category/speaker.png";
const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* row 1 */}
          {/* colum 1 */}
          <div className="h-[320px] relative py-10 pl-5 text-white rounded-3xl bg-gradient-to-br from-black/90 to-black/70 flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-4 text-4xl font-bold xl:text-5xl opacity-20">Experience</p>
                <Button text="Browse" textColor="text-white" bgColor="bg-primary" />
              </div>
            </div>
            {/* image */}
            <img src={Image1} alt="earphone image" className="absolute w-[320px] bottom-0" />
          </div>
          {/* colum 2 */}
          <div className="h-[320px] relative py-10 pl-5 text-white rounded-3xl bg-gradient-to-br from-brandYellow to-brandYellow/90 flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-4 text-4xl font-bold xl:text-5xl opacity-40">Gadget</p>
                <Button text="Browse" textColor="text-brandYellow" bgColor="bg-white" />
              </div>
            </div>
            {/* image */}
            <img src={Image2} alt="earphone image" className="absolute w-[320px] -right-4 lg:top-[40px]" />
          </div>
          {/* colum 3 */}
          <div className="h-[320px] col-span-2 relative py-10 pl-5 text-white rounded-3xl bg-gradient-to-br from-primary to-primary/90 flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-4 text-4xl font-bold xl:text-5xl opacity-40">Laptop</p>
                <Button text="Browse" textColor="text-primary" bgColor="bg-white" />
              </div>
            </div>
            {/* image */}
            <img
              src={Image3}
              alt="laptop image"
              className="absolute w-[280px] lg:w-[320px] top-1/2 -translate-y-1/2 -right-0 "
            />
          </div>

          {/* row 2 */}
          {/* colum 1 */}
          <div className="h-[320px] col-span-2 relative py-10 pl-5 text-white rounded-3xl bg-gradient-to-br from-gray-300/90 to-gray-100 flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-4 text-4xl font-bold text-gray-600 xl:text-5xl opacity-10">Gaming</p>
                <Button text="Browse" textColor="text-white" bgColor="bg-primary" />
              </div>
            </div>
            {/* image */}
            <img src={Image4} alt="earphone image" className="absolute w-[320px] -right-0 top-1/2 -translate-y-1/2" />
          </div>
          {/* colum 2 */}
          <div className="h-[320px] relative py-10 pl-5 text-white rounded-3xl bg-gradient-to-br from-brandGreen to-brandGreen/90 flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-4 text-4xl font-bold xl:text-5xl opacity-40">Oculus</p>
                <Button text="Browse" textColor="text-white" bgColor="bg-primary" />
              </div>
            </div>
            {/* image */}
            <img src={Image5} alt="earphone image" className="absolute w-[320px] bottom-0" />
          </div>
          {/* colum 3 */}
          <div className="h-[320px] relative py-10 pl-5 text-white rounded-3xl bg-gradient-to-br from-brandBlue to-brandBlue/90 flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-4 text-4xl font-bold xl:text-5xl opacity-40">Speaker</p>
                <Button text="Browse" textColor="text-brandYellow" bgColor="bg-white" />
              </div>
            </div>
            {/* image */}
            <img src={Image6} alt="laptop image" className="w-[200px] absolute bottom-0 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
