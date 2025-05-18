
export async function fetchPosts() {
    const response = await fetch(
        'https://free-denis-projects.vercel-blob.vercel.app/posts.json'
    );

    if (!response.ok) {
        throw new Error(`Failed to load posts: ${response.status}`);
    }

    return await response.json();
}
