import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import headphones from './assets/hero/headphone.png';
const bannerData = {
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '10 Feb to 29 Feb',
  image: headphones,
  title2: 'Air Solo Bass',
  title3: 'Winter Sale',
  title4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse asperiores totam aperiam modi sed commodi nisi dolor reprehenderit.',
  bgColor: '#f42c37',
};

const App = () => {
  return (
    <div className='overflow-hidden duration-200 bg-white dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <Hero />
      <Category />
      <Services />
      <Banner data={bannerData} />
    </div>
  );
};

export default App;
