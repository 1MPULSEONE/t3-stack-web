import { SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { getMyImages } from '~/server/queries';

export const dynamic = 'force-dynamic';

async function Images() {
    const images = await getMyImages();

    return (
        <div className='flex flex-wrap justify-center gap-x-4 gap-y-20 p-4'>
            {[...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images].map(
                image => (
                    <div key={image.id} className='flex h-48 w-48 flex-col'>
                        <Link href={`/img/${image.id}`} className={'h-48'}>
                            <Image
                                src={image.url}
                                width={192}
                                height={192}
                                alt={image.name}
                                className='h-full object-cover'
                            />
                            <div>{image.name}</div>
                        </Link>
                    </div>
                )
            )}
        </div>
    );
}

export default async function HomePage() {
    return (
        <main className=''>
            <SignedOut>
                <div className='h-full w-full text-center text-2xl'>Please sign in above</div>
            </SignedOut>
            <SignedIn>
                <Images />
            </SignedIn>
        </main>
    );
}
