import Image from 'next/image';
import { getImage } from '~/server/queries';

export default async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id);

    return <Image src={image.url} width={384} height={384} alt={image.id.toString()} className={'object-contain'} />;
}
