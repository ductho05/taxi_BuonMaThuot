export default function sitemap() {
    return [
        {
            url: 'https://taxi-buon-ma-thuot.io.vn',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://taxi-buon-ma-thuot.io.vn/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://taxi-buon-ma-thuot.io.vn/contact',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}