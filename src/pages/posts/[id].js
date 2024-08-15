// pages/posts/[id].js
import { useRouter } from 'next/router';

export async function getStaticPaths() {
    // Ma'lumotlar manbaidan olingan yo'llar ro'yxati
    const res = await fetch('https://api.example.com/posts');
    const posts = await res.json();

    const paths = posts.map(post => ({
        params: { id: post.id.toString() },
    }));

    return {
        paths,
        fallback: false, // false bo'lsa, mavjud bo'lmagan yo'llar 404 xatoni qaytaradi
    };
}

export async function getStaticProps({ params }) {
    // Parametrlar yordamida ma'lumotlarni olish
    const res = await fetch(`https://api.example.com/posts/${params.id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}

export default function Post({ post }) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
