/* eslint-disable react/prop-types */
const Banner = ({ data }) => {
  return (
    <div className='min-h[550px] flex justify-center items-center py-12'>
      <div className='container'>
        <div style={{ backgroundColor: data.bgColor }} className='grid items-center grid-cols-1 gap-6 text-white md:grid-cols-3 rounded-3xl'>
          {/* fisrt col */}
          <div className='p-6 sm:p-8'>
            <div className='text-sm'>{data.discount}</div>
            <h1 className='text-4xl font-bold uppercase lg:text-7xl'> {data.title}</h1>
            <p className='text-sm'>{data.date}</p>
          </div>
          {/* second col */}
          <div className='flex items-center h-full'>
            <img src={data.image} alt='banner image' className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover' />
          </div>
          {/* third col */}
          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p className='text-xl font-bold'>{data.title2}</p>
            <p className='text-3xl font-bold sm:text-5xl'>{data.title3}</p>
            <p className='text-sm leading-5 tracking-wide'>{data.title4}</p>
            <div>
              <button style={{ color: data.bgColor }} className='px-4 py-2 font-semibold bg-white rounded'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
