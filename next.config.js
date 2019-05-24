module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/standup' : '',
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
        }
    }
};