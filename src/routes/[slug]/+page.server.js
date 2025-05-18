import { fetchPosts } from '$lib/fetchPosts.js';

export async function load({ params }) {
    const posts = await fetchPosts();
    const post = posts.find(p => p.slug === params.slug);

    if (!post) {
        return {
            status: 404,
            error: new Error('Пост не найден')
        };
    }

    return { post };
}
