import { fetchPosts } from '$lib/fetchPosts.js';

export async function load() {
    const posts = await fetchPosts();

    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title,
            excerpt: post.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...'
        }))
    };
}
