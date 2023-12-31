import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
      define: {
          'process.env.REACT_APP_YOUTUBE_API_KEY': JSON.stringify(env.REACT_APP_YOUTUBE_API_KEY )
      },
      base:"/youtube-clone/",
      plugins:[react()]
  };
});
