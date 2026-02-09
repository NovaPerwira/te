export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Nova Perwira',
        url: 'https://novaperwira.com', // Replace with actual domain
        jobTitle: 'AI & Web Developer',
        description: 'Versatile AI and web developer specializing in clear interfaces, sharp decisions, and fast execution.',
        image: 'https://novaperwira.com/novaperwira.webp', // Linking to the image used in hero
        sameAs: [
            'https://www.instagram.com/novastrategyid',
            'https://github.com/NovaPerwira',
            'https://www.linkedin.com/in/novaperwira' // Assumption or placeholder based on page.tsx text
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
