import FullPageImageView from '~/components/full-image-page';

export default async function PhotoPage({ params: { id: photoId } }: { params: { id: string } }) {
    const idAsNum = Number(photoId);

    if (Number.isNaN(idAsNum)) throw new Error('Invalid id');
    return <FullPageImageView id={idAsNum} />;
}
