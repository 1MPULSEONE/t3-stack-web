import { SignedIn, SignedOut } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { db } from '~/server/db';

export const dynamic = 'force-dynamic';

async function Images() {
    const images = await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id),
    });
    const user = await auth();

    console.log(images);
    return (
        <div className={'flex flex-wrap gap-4'}>
            {images
                .filter(image => image.userId === user.userId)
                .map(image => (
                    <div key={image.id} className={'w-48 p-4'}>
                        <img src={image.url} alt={'image'} />
                        <div>{image.name}</div>
                    </div>
                ))}
        </div>
    );
}

export default async function HomePage() {
    return (
        <main className=''>
            <SignedOut>
                <div className={'h-full w-full text-2xl'}>Please sign in above</div>
            </SignedOut>
            <SignedIn>
                <Images />
            </SignedIn>
        </main>
    );
}
