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
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .post-block {
        width: 80%;
        margin: 2rem 0;
        padding: 2.5rem;
        background: rgba(23, 42, 69, 0.7);
        backdrop-filter: blur(8px);
        border-radius: 1rem;
        position: relative;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(100, 255, 218, 0.1);
        transition: all 0.3s ease;
    }

    .post-block:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
        border-color: rgba(100, 255, 218, 0.3);
    }

    .left {
        margin-right: auto;
        border-top-right-radius: 4rem;
        border-bottom-right-radius: 4rem;
    }

    .right {
        margin-left: auto;
        border-top-left-radius: 4rem;
        border-bottom-left-radius: 4rem;
    }

    h1 {
        color: #64ffda;
        text-align: center;
        margin-bottom: 3rem;
        font-size: 2.5rem;
    }

    h2 {
        color: #64ffda;
        margin-top: 0;
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }

    .excerpt {
        line-height: 1.7;
        margin-bottom: 2rem;
        color: #ccd6f6;
    }

    .read-more {
        display: inline-block;
        color: #64ffda;
        text-decoration: none;
        border: 2px solid #64ffda;
        padding: 0.7rem 2rem;
        border-radius: 2rem;
        transition: all 0.3s ease;
        font-weight: 600;
        background-color: rgba(100, 255, 218, 0.1);
    }

    .read-more:hover {
        background-color: rgba(100, 255, 218, 0.3);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(100, 255, 218, 0.2);
    }
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
