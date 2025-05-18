
export async function GET() {
    const res = await fetch('https://oavha4ppbd3sfhp7.public.blob.vercel-storage.com/posts.json', {
        cache: 'no-store'
    });

    if (!res.ok) {
        return new Response('Failed to fetch posts.json', { status: 500 });
    }

    const json = await res.text();

    return new Response(json, {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
        }
    });
}
