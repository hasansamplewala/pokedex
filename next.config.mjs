/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['raw.githubusercontent.com']
    },
    
    redirects: async () => {
        return [
            {
                source: '/pokemon',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
