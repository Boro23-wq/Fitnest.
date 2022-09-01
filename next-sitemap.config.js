/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://fitnest.vercel.app',
    generateRobotsTxt: true,
};
