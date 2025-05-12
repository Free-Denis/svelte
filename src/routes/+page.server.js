import { posts } from './data.js';

export function load() {
    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title,
            excerpt: post.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...'
        }))
    };
}