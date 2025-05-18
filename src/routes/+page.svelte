<script>
    import { onMount } from 'svelte';
    let summaries = [];

    onMount(async () => {
        try {
            const res = await fetch('https://oavha4ppbd3sfhp7.public.blob.vercel-storage.com/posts.json');
            if (!res.ok) throw new Error('Failed to load posts');

            const posts = await res.json();

            summaries = posts.map(post => ({
                slug: post.slug,
                title: post.title,
                excerpt: post.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...'
            }));
        } catch (e) {
            console.error(e);
        }
    });
</script>

<svelte:head>
    <title>Новости</title>
</svelte:head>

<style>
    /* Твой стиль без изменений */
</style>

<div class="container">
    <h1>МатМех Новости</h1>

    {#each summaries as summary, i}
        <div class="post-block {i % 2 === 0 ? 'left' : 'right'}">
            <h2>{summary.title}</h2>
            <p class="excerpt">{summary.excerpt}</p>
            <a href="/{summary.slug}" class="read-more">Читать далее →</a>
        </div>
    {/each}
</div>
