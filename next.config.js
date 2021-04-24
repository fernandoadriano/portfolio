const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true,
  images: {
    domains: ['www.datocms-assets.com'],
  },
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
