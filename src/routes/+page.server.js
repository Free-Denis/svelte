export async function load() {
    const res = await fetch("https://oavha4ppbd3sfhp7.public.blob.vercel-storage.com/posts.json");
    const posts = await res.json();

    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title,
            excerpt: post.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...'
        }))
    };
}
