import Image from 'next/image';
import { getImage } from '~/server/queries';

export default async function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
    const idAsNum = Number(photoId);

    if (Number.isNaN(idAsNum)) throw new Error('Invalid id');
    const image = await getImage(idAsNum);

    return (
        <div>
            <Image src={image.url} width={384} height={384} alt={image.id.toString()} className={'object-contain'} />
        </div>
    );
}
