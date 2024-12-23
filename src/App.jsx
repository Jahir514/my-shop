import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div className="overflow-hidden duration-200 bg-white dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <Category />
      <Services />
    </div>
  );
};

export default App;
