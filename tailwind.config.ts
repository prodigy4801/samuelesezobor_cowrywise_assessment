import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Roboto: ['Roboto', 'serif'],
        Lato: ['Lato', 'mono'],
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
      },
    },
  },
};
