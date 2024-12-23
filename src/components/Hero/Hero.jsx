import Slider from 'react-slick';
import Image1 from '../../assets/hero/headphone.png';
import Image2 from '../../assets/category/vr.png';
import Image3 from '../../assets/category/macbook.png';
import Button from '../Shared/Button';
const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const heroSlide = [
    {
      id: 1,
      img: Image1,
      subtitle: 'Beats Solo',
      title: 'Wireless',
      title2: 'Headphone',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat et quam libero rem, soluta consectetur itaque nihil numquam nostrum consequuntur.',
    },
    {
      id: 2,
      img: Image2,
      subtitle: 'Beats Solo',
      title: 'Wireless',
      title2: 'Virtual',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat et quam libero rem, soluta consectetur itaque nihil numquam nostrum consequuntur.',
    },
    {
      id: 3,
      img: Image3,
      subtitle: 'Beats Solo',
      title: 'Branded',
      title2: 'Laptop',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat et quam libero rem, soluta consectetur itaque nihil numquam nostrum consequuntur.',
    },
  ];
  return (
    <div className='container'>
      <div className='overflow-hidden rounded-xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
          {/* hero section */}
          <Slider {...settings}>
            {heroSlide.map((data) => (
              <div key={data.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  {/* hero text section */}
                  <div className='flex flex-col pt-12 sm:pt-0 justify-center text-center gap-4 sm:text-left sm:pl-3 order-2 sm:order-1 relative z-10'>
                    <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                    <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[70px] md:text-[90px] xl:text-[150px] font-bold'>{data.title2}</h1>
                    <div>
                      <Button text='Shop By Category' bgColor='bg-primary' textColor='text-white' />
                    </div>
                  </div>
                  {/* hero image section */}
                  <div className='order-1 sm:order-2'>
                    <div>
                      <img
                        src={data.img}
                        alt='hero image'
                        className='w-[300px] h-[300px] sm:h-[350px] sm:w-[350px] sm:scale-102 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
