<script>
    export let data;
    $: post = data.post;
</script>

<svelte:head>
    <title>{post.title}</title>
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

<div class="post-container">
    <h1>{post.title}</h1>
    <div>{@html post.content}</div>
    <a href="/" class="back-link">← Назад к новостям</a>
</div>