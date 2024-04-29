import { db } from '~/server/db';

export const dynamic = 'force-dynamic';

const mockUrls = [
    'https://utfs.io/f/a246cec9-4085-4e25-ae4e-870f20a5a5bc-tg0fvs.1000x1000x1.png',
    'https://utfs.io/f/035ba44b-8457-451d-9e86-a3c3ea799c29-mu01pe.1000x1000x1.jpg',
    'https://utfs.io/f/9941f471-6bb3-4084-b0c3-e0fc1ca03505-xk2g87.1000x1000x1.png',
    'https://utfs.io/f/f4f0fd14-b501-4156-b1db-c21b94fb6367-a2truw.png',
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default async function HomePage() {
    const posts = await db.query.posts.findMany();

    console.log(posts);
    return (
        <main className=''>
            <div className={'flex flex-wrap gap-4'}>
                {posts.map(post => (
                    <div key={post.id}>{post.name}</div>
                ))}
                {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
                    <div key={image.id + '-' + index} className={'w-48 p-4'}>
                        <img src={image.url} alt={'image'} />
                    </div>
                ))}
            </div>
        </main>
    );
}
