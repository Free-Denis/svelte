export async function load({ params }) {
    const res = await fetch("https://oavha4ppbd3sfhp7.public.blob.vercel-storage.com/posts.json");
    const posts = await res.json();

    const post = posts.find(p => p.slug === params.slug);

    if (!post) {
        return {
            status: 404
        };
    }

    return { post };
}
