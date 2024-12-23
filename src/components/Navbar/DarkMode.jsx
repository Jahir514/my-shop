import { useEffect, useState } from 'react';
import darkButton from '../../assets/website/dark-mode-button.png';
import lightButton from '../../assets/website/light-mode-button.png';
const DarkMode = () => {
  const [mode, setMode] = useState(localStorage.getItem('mode') ? localStorage.getItem('mode') : 'light');
  const htmlElement = document.documentElement;
  useEffect(() => {
    //set mode in local storage
    localStorage.setItem('mode', mode);
    //set class on html file based on mode
    if (mode === 'dark') {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
    } else {
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
    }
  }, [htmlElement.classList, mode]);
  return (
    <div className='relative'>
      <img
        src={lightButton}
        alt='light button'
        className={`w-12 cursor-pointer ${mode === 'dark' ? 'opacity-0' : 'opacity-100'} absolute right-0 top-0 z-10 duration-300 transition-all`}
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      />
      <img src={darkButton} alt='dark button' className={`w-12 `} onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} />
    </div>
  );
};

export default DarkMode;
