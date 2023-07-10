const sortDesktop = require('sort-css-media-queries');
module.exports = {
    plugins: [
        require('css-mqpacker')({
            sort: sortDesktop.desktopFirst
        }),
        require('autoprefixer')({grid: true}),
        require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true
                }
            }]
        }),
    ]
}