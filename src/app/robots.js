export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://taxi-buon-ma-thuot.io.vn/sitemap.xml',
    }
}