module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/standup' : '',
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/cards': { page: '/name' },
            '/wheel': { page: '/name' },
            '/plinko': { page: '/name' },
            '/name': { page: '/name' },
        }
    }
};