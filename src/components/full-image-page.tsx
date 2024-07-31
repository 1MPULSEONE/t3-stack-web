import { clerkClient } from '@clerk/nextjs/server';
import Image from 'next/image';
import { getImage } from '~/server/queries';

export default async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id);

    const uploaderInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className='flex h-full w-full flex-row text-white'>
            <div className='flex w-full flex-shrink flex-grow flex-col items-center'>
                {/*Magic numbers in height, butI haven't come up with a better solution */}
                <img
                    src={image.url}
                    alt={image.name}
                    className={'m-auto max-h-[calc(100vh-100px)] min-w-[256px] object-contain'}
                />
            </div>
            <div className='flex h-full w-48 flex-shrink-0 flex-col border-l'>
                <div className='border-b p-2 text-center text-xl'>{image.name}</div>
                <div className='flex flex-col p-2'>
                    <span>Uploaded by</span>
                    <span>{uploaderInfo.fullName}</span>
                </div>
                <div className='flex flex-col p-2'>
                    <span>Created on</span>
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}
