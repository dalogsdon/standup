const withSass = require('@zeit/next-sass');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withSass({
    assetPrefix: isProduction ? '/standup' : '',
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/cards': { page: '/name' },
            '/wheel': { page: '/name' },
            '/plinko': { page: '/name' },
            '/name': { page: '/name' },
        }
    },
    publicRuntimeConfig: {
        linkPrefix: isProduction ? '/standup' : ''
    }
});