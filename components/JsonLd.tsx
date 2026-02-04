export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Photobooth Pro",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "MultimediaApplication",
        "offers": {
            "@type": "Offer",
            "price": "499000",
            "priceCurrency": "VND"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "520"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Tiva Solutions",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+84-898-336-308",
                "contactType": "customer service",
                "areaServed": "VN"
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
