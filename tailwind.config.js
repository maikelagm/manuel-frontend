import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f1f9fa',
          '100': '#dbedf2',
          '200': '#bbdde6',
          '300': '#8cc4d4',
          '400': '#55a2bb',
          '500': '#3a86a0',
          '600': '#336e87',
          '700': '#2f5a6f',
          '800': '#2d4c5d',
          '900': '#2a4251',
          '950': '#172935',
        },
        success: {
          '50': '#f1faf4',
          '100': '#e0f5e5',
          '200': '#c0e8c7',
          '300': '#9ed9a8',
          '400': '#79c783',
          '500': '#57b15e',
          '600': '#4e9c53',
          '700': '#438646',
          '800': '#3c763e',
          '900': '#355f36',
          '950': '#1d361f',
        },
        error: {
          '50': '#fdf2f2',
          '100': '#fde8e8',
          '200': '#fbd5d5',
          '300': '#f8b4b4',
          '400': '#f98080',
          '500': '#f05252',
          '600': '#e02424',
          '700': '#c81e1e',
          '800': '#9b1c1c',
          '900': '#771d1d',
          '950': '#451a1a',
        },
        warning: {
          '50': '#fdfdea',
          '100': '#fdf6b2',
          '200': '#fce96a',
          '300': '#faca15',
          '400': '#e3a008',
          '500': '#c27803',
          '600': '#9f580a',
          '700': '#8e4b10',
          '800': '#723b13',
          '900': '#633112',
          '950': '#451a1a',
        },
        info: {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae6fd',
          '300': '#7dd3fc',
          '400': '#38bdf8',
          '500': '#0ea5e9',
          '600': '#0284c7',
          '700': '#0369a1',
          '800': '#075985',
          '900': '#0c4a6e',
          '950': '#1d361f',
        },
        neutral: {
          '50': '#f8f9fa',
          '100': '#f1f3f5',
          '200': '#e9ecef',
          '300': '#dee2e6',
          '400': '#ced4da',
          '500': '#adb5bd',
          '600': '#868e96',
          '700': '#495057',
          '800': '#343a40',
          '900': '#212529',
          '950': '#1d2124',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
});