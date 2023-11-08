import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const ThemeSwitcher = () => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (theme: string | undefined) => {
    // setTheme(theme!)
    switch (theme) {
      case "light": setTheme("dark");
        break;
      case "dark": setTheme("system");
        break;
      case "system": setTheme("light");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const renderSvg = {
    "light":
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        shapeRendering="geometricPrecision"
      >
        <circle cx={12} cy={12} r={5} />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>,
    "dark":
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        shapeRendering="geometricPrecision"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>,
    "system":
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        shapeRendering="geometricPrecision"
      >
        <rect width={20} height={14} x={2} y={3} rx={2} ry={2} />
        <path d="M8 21h8M12 17v4" />
      </svg>
  }

  return (
    <div className='text-current !fixed z-50 top-0 right-0 m-8 flex flex-row-reverse'>
      <Link to={'/#'}>
        <Button className='bg-transparent text-current p-0 h-12 w-12 space-x-2 flex items-center justify-center rounded-xl'>
          <svg
            fill="currentColor"
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            data-name="Layer 1"
          >
            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
          </svg>
        </Button>
      </Link>
      <Button
        className='bg-transparent text-current p-0 h-12 w-12 space-x-2 flex items-center justify-center rounded-xl'
        onClick={() => handleThemeChange(theme)}
      >
        {renderSvg[theme]}
      </Button>

    </div>

  );
};

export default ThemeSwitcher;
