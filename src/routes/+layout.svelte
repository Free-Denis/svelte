<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    
    let isHydrated = false;
    onMount(() => { isHydrated = true; });
</script>

<svelte:head>
    <title>Новости</title>
    <meta name="theme-color" content="#0a192f">
    <style>
        /* Критические стили */
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #0a192f 0%, #172a45 100%) !important;
            color: #e6f1ff !important;
            min-height: 100vh;
            font-family: 'Arial', sans-serif;
        }
        .nav {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 100;
            display: flex;
            gap: 15px;
        }
        .nav-button {
            padding: 10px 20px;
            background: rgba(100, 255, 218, 0.1);
            border: 1px solid #64ffda;
            color: #64ffda;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 500;
        }
    </style>
</svelte:head>

<div class="nav">
    <a href="/" class="nav-button" class:active={isHydrated && $page.url.pathname === '/'}>Home</a>
    <a href="/developer" class="nav-button" class:active={isHydrated && $page.url.pathname === '/developer'}>Developer</a>
</div>

<main>
    <slot />
</main>

<style>
    /* Не-критические стили */
    .nav-button {
        transition: all 0.3s ease;
        backdrop-filter: blur(5px);
    }
    .nav-button:hover {
        background: rgba(100, 255, 218, 0.2);
        transform: translateY(-2px);
    }
    .nav-button.active {
        background: rgba(100, 255, 218, 0.3);
    }
    main {
        padding-top: 80px;
    }
</style>