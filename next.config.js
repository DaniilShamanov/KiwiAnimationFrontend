/** @type {import('next').NextConfig} */
module.exports = {
    env: {
        API_URL: 'http://localhost:5000',
        CLIENT_URL: 'https://kiwi-animations.com/'
    },
    images: {
        domains: ['res.cloudinary.com', 'flowbite.s3.amazonaws.com']
    },
  };