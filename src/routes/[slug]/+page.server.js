import { posts } from '../data.js';

export function load({ params }) {
    const post = posts.find(p => p.slug === params.slug);
    
    if (!post) return { status: 404 };
    
    return { post };
}