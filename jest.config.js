/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'vite-jest',
  },
};

export default config;