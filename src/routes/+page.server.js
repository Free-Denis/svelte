/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const res = await fetch('https://oavha4ppbd3sfhp7.public.blob.vercel-storage.com/posts.json');
    if (!res.ok) {
        console.error('Ошибка при загрузке данных:', res.statusText);
        return { summaries: [] };
    }

    const posts = await res.json();

    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title,
            excerpt: post.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...'
        }))
    };
}
