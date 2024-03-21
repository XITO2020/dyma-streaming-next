// next.config.js
import path from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/styles")]
  },
  images: {
    domains: ['image.tmdb.org'] // Ajoutez ici le domaine de votre image
  }
};

export default nextConfig;
