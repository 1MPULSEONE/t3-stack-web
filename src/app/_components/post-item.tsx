import React from 'react';

interface IPostItem {
    title: string;
    body: string;
    rofl: number;
}

interface IPost {
    data: IPostItem[];
}

const PostItem: React.FC<IPost> = React.forwardRef((props, ref) => {
    const { data } = props;

    return (
        <div>
            {data.map((post, index) => {
                return (
                    <div key={index}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                );
            })}
        </div>
    );
});

export default PostItem;
