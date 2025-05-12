<script>
    const developer = {
        name: "Денис",
        role: "Разработчик",
        bio: "Специалист по писанию курсача.",
        telegram: "https://t.me/free_denis",
        photo: "/developer.jpg",
        telegramIcon: "/telegram-icon.png" 
    };
</script>

<svelte:head>
    <title>Разработчик</title>
</svelte:head>

<style>
    .developer-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .profile {
        display: flex;
        gap: 3rem;
        align-items: center;
    }

    .photo {
        width: 300px;
        height: 400px;
        border-radius: 10px;
        object-fit: cover;
        border: 2px solid #64ffda;
        box-shadow: 0 4px 20px rgba(100, 255, 218, 0.2);
    }

    .info {
        flex: 1;
    }

    h1 {
        color: #64ffda;
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
    }

    h2 {
        color: #64ffda;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .bio {
        color: #ccd6f6;
        line-height: 1.7;
        font-size: 1.1rem;
    }

    .contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
    }

    .telegram-link {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #64ffda;
        text-decoration: none;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        padding: 10px 20px;
        border: 1px solid #64ffda;
        border-radius: 5px;
    }

    .telegram-link:hover {
        background: rgba(100, 255, 218, 0.1);
        transform: translateY(-2px);
    }

    .telegram-icon {
        width: 24px;
        height: 24px;
    }

    @media (max-width: 768px) {
        .profile {
            flex-direction: column;
        }
        
        .photo {
            width: 200px;
            height: 200px;
        }
    }
</style>

<div class="developer-container">
    <div class="profile">
        <img src={developer.photo} alt="Фото разработчика" class="photo" />
        <div class="info">
            <h1>{developer.name}</h1>
            <h2>{developer.role}</h2>
            <p class="bio">{developer.bio}</p>
        </div>
    </div>

    <div class="contacts">
        <a href={developer.telegram} class="telegram-link" target="_blank" rel="noopener noreferrer">
            <img src={developer.telegramIcon} alt="Telegram" class="telegram-icon" />
            Написать в Telegram
        </a>
    </div>
</div>