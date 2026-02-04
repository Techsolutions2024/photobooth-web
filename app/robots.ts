import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://photobooth-pro.vn/sitemap.xml', // Thay đổi domain sau này khi bạn mua domain thật
    };
}
