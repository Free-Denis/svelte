<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { get } from 'svelte/store';

    let post = null;

    onMount(async () => {
        const slug = get(page).params.slug;
        try {
            const res = await fetch('https://oavha4ppbd3sfhp7.public.blob.vercel-storage.com/posts.json');
            if (!res.ok) throw new Error('Failed to load posts');

            const posts = await res.json();
            post = posts.find(p => p.slug === slug);

            if (!post) {
                post = { title: 'Пост не найден', content: '' };
            }
        } catch (e) {
            console.error(e);
            post = { title: 'Ошибка загрузки', content: '' };
        }
    });
</script>

<svelte:head>
    <title>{post ? post.title : 'Загрузка...'}</title>
</svelte:head>

<style>
    .post-container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
    }
    h1 {
        color: #64ffda;
        margin-bottom: 1.5rem;
    }
    .content {
        color: #ccd6f6;
        line-height: 1.7;
    }
    .back-link {
        display: inline-block;
        margin-top: 2rem;
        color: #64ffda;
    }

</style>

{#if post}
    <div class="post-container">
        <h1>{post.title}</h1>
        <div>{@html post.content}</div>
        <a href="/" class="back-link">← Назад к новостям</a>
    </div>
{:else}
    <p>Загрузка...</p>
{/if}
