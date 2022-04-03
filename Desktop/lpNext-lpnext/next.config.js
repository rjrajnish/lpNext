module.exports = {
  reactStrictMode: false,
  images: { domains: ['res.cloudinary.com' ] },
  experimental: {
     
    styledComponents: true
  },
  // webpack: (config) => {
  //   config.resolve = {
  //     ...config.resolve,
  //     fallback: {
  //       "fs": false,
  //       "path": false,
  //       "os": false,
  //       'crypto':false
  //     }
  //   }
  //   return config
  // },

   
};
