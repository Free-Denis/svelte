export const posts = [
    {
    slug: 'priemnye-chasy-may2-2025',
    title: 'Приёмные часы дирекции ДММиКН (12.05.25 - 16.05.25)',
    content: `
        <div class="schedule-container">
            <div class="schedule-notice">
                <p>📅 <strong>Расписание приёмных часов на неделю с 12.05.25 по 16.05.25:</strong></p>
            </div>

            <div class="timetable">
                <div class="day-card">
                    <h3>Понедельник</h3>
                    <p>12:15 - 13:00</p>
                </div>
                <div class="day-card">
                    <h3>Вторник</h3>
                    <p>12:00 - 13:00</p>
                </div>
                <div class="day-card inactive">
                    <h3>Среда</h3>
                    <p>Неприемный день</p>
                </div>
                <div class="day-card">
                    <h3>Четверг</h3>
                    <p>12:00 - 13:00</p>
                </div>
                <div class="day-card">
                    <h3>Пятница</h3>
                    <p>12:00 - 13:00</p>
                </div>
            </div>

            <div class="important-notes">
                <div class="note-block">
                    <p>🔍 <strong>Важно!</strong> Ищите нас по всему деканату - мы можем быть в разных местах</p>
                </div>
                
                <div class="note-block urgent">
                    <p>🚨 <strong>Срочные вопросы:</strong> Можно подойти вне приёмных часов или написать в ЛС</p>
                </div>
            </div>

            <div class="regular-work">
                <h3>Обычный режим работы деканата:</h3>
                <ul>
                    <li>Поиск потерянных вещей</li>
                    <li>Оформление электронных пропусков</li>
                    <li>Выдача уведомлений</li>
                    <li>Вопросы по восстановлению/переводу</li>
                </ul>
                <p><strong>Часы работы:</strong> Пн-Чт 10:00-16:00, Пт 10:00-15:00</p>
            </div>
        </div>

        <style>
            .schedule-container {
                max-width: 800px;
                margin: 0 auto;
            }
            .schedule-notice {
                background: rgba(100, 255, 218, 0.1);
                padding: 1rem;
                border-radius: 8px;
                margin-bottom: 1.5rem;
                text-align: center;
            }
            .timetable {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 1rem;
                margin-bottom: 2rem;
            }
            .day-card {
                background: rgba(23, 42, 69, 0.7);
                padding: 1.2rem;
                border-radius: 8px;
                text-align: center;
                border-top: 3px solid #64ffda;
            }
            .day-card.inactive {
                opacity: 0.7;
                border-top-color: #8892b0;
            }
            .important-notes {
                margin: 2rem 0;
            }
            .note-block {
                background: rgba(100, 255, 218, 0.1);
                padding: 1rem;
                border-left: 3px solid #64ffda;
                margin-bottom: 1rem;
            }
            .note-block.urgent {
                background: rgba(255, 107, 107, 0.1);
                border-left-color: #ff6b6b;
            }
            .regular-work {
                background: rgba(23, 42, 69, 0.5);
                padding: 1.5rem;
                border-radius: 8px;
            }
            .regular-work ul {
                padding-left: 1.5rem;
            }
            .regular-work li {
                margin-bottom: 0.5rem;
                position: relative;
                padding-left: 1.2rem;
            }
            .regular-work li:before {
                content: "•";
                color: #64ffda;
                position: absolute;
                left: 0;
            }
            h3 {
                color: #64ffda;
                margin-top: 0;
            }
            @media (max-width: 600px) {
                .timetable {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    ` 
    },
    {
        slug: 'anketa',
        title: 'Aнкетирование о работе кураторов',
        content: `
            <h2>Просим вас пройти анкетирование о работе кураторов (преподавателей) академических групп</h2>
            
            <p><strong>Срок анкетирования:</strong> до 12 мая 2025 года</p>
            
            <div style="background: rgba(100, 255, 218, 0.1); padding: 1rem; border-left: 3px solid #64ffda; margin: 1rem 0;">
                <h3>Правила заполнения:</h3>
                <ul>
                    <li><strong>Номер группы:</strong> с заглавных букв полностью (например, <code>МЕН-******</code>)</li>
                    <li><strong>Имя куратора:</strong> полностью ФИО, каждое слово с заглавной буквы (например, <code>Иванова Мария Петровна</code>)</li>
                </ul>
            </div>
            
            <p style="text-align: center; margin: 2rem 0;">
                <a href="https://forms.yandex.ru/cloud/68060ad1068ff0520f031733/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style="display: inline-block; 
                          background-color: #64ffda; 
                          color: #0a192f; 
                          padding: 12px 24px; 
                          border-radius: 4px; 
                          text-decoration: none;
                          font-weight: bold;">
                    Перейти к анкетированию
                </a>
            </p>
            
            <p style="font-size: 0.9em; color: #8892b0;">
                <i>По всем вопросам обращайтесь в учебный отдел</i>
            </p>
        `
    },
    {
        slug: 'itogovye-testy-2025',
        title: 'ВНИМАНИЕ! Итоговые тесты по онлайн-курсам!',
        content: `
            <div class="announcement">
                <p><strong>С 12 мая 2025 года начинается итоговое тестирование по онлайн-курсам!</strong></p>
                
                <div class="important-block">
                    <h3>Ключевые даты:</h3>
                    <ul>
                        <li><strong>2 июня 2025</strong> - последний день работы с заданиями курсов УрФУ</li>
                        <li><strong>9 мая 2025</strong> - крайний срок записи на тестирование по курсу "Основы военной подготовки"</li>
                        <li><strong>12.05.2025-16.05.2025</strong> - сроки тестирования по военной подготовке</li>
                    </ul>
                </div>

                <div class="resources">
                    <p>Полезные ссылки:</p>
                    <ul>
                        <li>📅 <a href="https://inf-online.urfu.ru/ru/grafik-ehkzamenov/" target="_blank">График всех отчетностей</a></li>
                        <li>📚 <a href="https://t.me/mathmechgr/2919" target="_blank">Список онлайн-курсов этого семестра</a></li>
                    </ul>
                </div>

                <div class="critical-notice">
                    <h4>ОЧЕНЬ ВАЖНО!</h4>
                    <p>По курсу УрФУ «Основы военной подготовки и безопасность жизнедеятельности»:</p>
                    <ol>
                        <li>Необходимо записаться на тестирование <strong>до 9 мая 2025</strong></li>
                        <li>Название тестирования: <strong>«Итоговый контроль (УрФУ)»</strong></li>
                    </ol>
                </div>

                <div class="email-notice">
                    <p>📩 <strong>Мониторим ящик urfu.me</strong> - все уведомления по онлайн-курсам приходят туда!</p>
                </div>
            </div>

            <style>
                .announcement {
                    line-height: 1.7;
                    font-size: 1.1rem;
                }
                .important-block {
                    background: rgba(255, 107, 107, 0.1);
                    border-left: 3px solid #ff6b6b;
                    padding: 1rem;
                    margin: 1.5rem 0;
                }
                .critical-notice {
                    background: rgba(255, 71, 71, 0.15);
                    border: 1px solid #ff4747;
                    padding: 1.2rem;
                    margin: 2rem 0;
                    border-radius: 5px;
                }
                .resources {
                    margin: 1.5rem 0;
                }
                .email-notice {
                    margin-top: 2rem;
                    padding: 1rem;
                    background: rgba(100, 255, 218, 0.1);
                    border-radius: 5px;
                }
                h3, h4 {
                    color: #ff6b6b;
                    margin-top: 0;
                }
                a {
                    color: #64ffda;
                    text-decoration: none;
                    border-bottom: 1px dashed;
                }
                a:hover {
                    color: #ff6b6b;
                }
                strong {
                    color: #ff6b6b;
                }
            </style>
        `
    },
    {
    slug: 'priemnye-chasy-may-2025',
    title: 'Приёмные часы дирекции ДММиКН (05.05.25 - 09.05.25)',
    content: `
        <div class="schedule-container">
            <div class="schedule-notice">
                <p>📅 <strong>Расписание приёмных часов на неделю с 05.05.25 по 09.05.25:</strong></p>
            </div>

            <div class="timetable">
                <div class="day-card">
                    <h3>Понедельник</h3>
                    <p>12:15 - 13:00</p>
                </div>
                <div class="day-card">
                    <h3>Вторник</h3>
                    <p>12:30 - 13:00</p>
                </div>
                <div class="day-card inactive">
                    <h3>Среда</h3>
                    <p>Неприемный день</p>
                </div>
                <div class="day-card holiday">
                    <h3>Четверг</h3>
                    <p>Выходной</p>
                </div>
                <div class="day-card holiday">
                    <h3>Пятница</h3>
                    <p>Выходной</p>
                </div>
            </div>

            <div class="important-notes">
                <div class="note-block">
                    <p>🔍 <strong>Важно!</strong> Ищите нас по всему деканату - мы можем быть в разных местах</p>
                </div>
                
                <div class="note-block urgent">
                    <p>🚨 <strong>Срочные вопросы:</strong> Можно подойти вне приёмных часов или написать в ЛС</p>
                </div>
            </div>

            <div class="regular-work">
                <h3>Обычный режим работы деканата:</h3>
                <ul>
                    <li>Поиск потерянных вещей</li>
                    <li>Оформление электронных пропусков</li>
                    <li>Выдача уведомлений</li>
                    <li>Вопросы по восстановлению/переводу</li>
                </ul>
                <p><strong>Часы работы:</strong> Пн-Вт 10:00-16:00, Ср 10:00-15:00</p>
            </div>
        </div>

        <style>
            .schedule-container {
                max-width: 800px;
                margin: 0 auto;
            }
            .schedule-notice {
                background: rgba(100, 255, 218, 0.1);
                padding: 1rem;
                border-radius: 8px;
                margin-bottom: 1.5rem;
                text-align: center;
            }
            .timetable {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 1rem;
                margin-bottom: 2rem;
            }
            .day-card {
                background: rgba(23, 42, 69, 0.7);
                padding: 1.2rem;
                border-radius: 8px;
                text-align: center;
                border-top: 3px solid #64ffda;
            }
            .day-card.inactive {
                opacity: 0.7;
                border-top-color: #8892b0;
            }
            .day-card.holiday {
                border-top-color: #ff6b6b;
            }
            .important-notes {
                margin: 2rem 0;
            }
            .note-block {
                background: rgba(100, 255, 218, 0.1);
                padding: 1rem;
                border-left: 3px solid #64ffda;
                margin-bottom: 1rem;
            }
            .note-block.urgent {
                background: rgba(255, 107, 107, 0.1);
                border-left-color: #ff6b6b;
            }
            .regular-work {
                background: rgba(23, 42, 69, 0.5);
                padding: 1.5rem;
                border-radius: 8px;
            }
            .regular-work ul {
                padding-left: 1.5rem;
            }
            .regular-work li {
                margin-bottom: 0.5rem;
                position: relative;
                padding-left: 1.2rem;
            }
            .regular-work li:before {
                content: "•";
                color: #64ffda;
                position: absolute;
                left: 0;
            }
            h3 {
                color: #64ffda;
                margin-top: 0;
            }
            @media (max-width: 600px) {
                .timetable {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `
},
    {
    slug: 'gto-success-2025',
    title: 'Минутка положительных новостей! Победы наших студентов в ГТО',
    content: `
        <div class="good-news">
            <div class="news-header">
                <h2>🏆 Наши чемпионы в Универсиаде-2025</h2>
                <p>23-24 апреля 2025 сборная УрФУ по многоборью ГТО с участием наших студентов показала отличные результаты:</p>
            </div>

            <div class="achievements">
                <div class="individual">
                    <h3>Личные достижения:</h3>
                    <ul class="star-list">
                        <li>Мария Туровинина</li>
                        <li>Анастасия Черкашина</li>
                        <li>Олег Коротаев</li>
                    </ul>
                </div>

                <div class="team">
                    <h3>Командные победы:</h3>
                    <div class="team-card">
                        <h4>Команда УрФУ №1</h4>
                        <ul>
                            <li>Короткова Мария</li>
                            <li>Коротаев Олег</li>
                        </ul>
                    </div>
                    <div class="team-card">
                        <h4>Команда УрФУ №2</h4>
                        <ul>
                            <li>Туровинина Мария</li>
                            <li>Войнова Анна</li>
                            <li>Кухтей Дмитрий</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="congrats">
                <p>🎉 <strong>Поздравляем наших чемпионов с блестящим выступлением!</strong></p>
                <p>Ваши достижения - гордость факультета!</p>
            </div>
        </div>

        <style>
            .good-news {
                background: rgba(100, 255, 218, 0.05);
                padding: 2rem;
                border-radius: 10px;
                border: 1px solid rgba(100, 255, 218, 0.3);
            }
            .news-header {
                text-align: center;
                margin-bottom: 2rem;
            }
            .news-header h2 {
                color: #64ffda;
                font-size: 1.8rem;
            }
            .achievements {
                display: flex;
                gap: 2rem;
                margin-bottom: 2rem;
            }
            .individual, .team {
                flex: 1;
            }
            .team-card {
                background: rgba(23, 42, 69, 0.7);
                padding: 1.2rem;
                border-radius: 8px;
                margin-bottom: 1rem;
            }
            h3, h4 {
                color: #64ffda;
                margin-top: 0;
            }
            .star-list li {
                position: relative;
                padding-left: 1.5rem;
                margin-bottom: 0.5rem;
            }
            .star-list li:before {
                content: "★";
                color: gold;
                position: absolute;
                left: 0;
            }
            .congrats {
                text-align: center;
                font-size: 1.2rem;
                padding: 1.5rem;
                background: rgba(100, 255, 218, 0.1);
                border-radius: 8px;
            }
            @media (max-width: 768px) {
                .achievements {
                    flex-direction: column;
                }
            }
        </style>
    `
},
{
    slug: 'holidays-may-2025',
    title: 'Внимание! Изменения в расписании на май 2025',
    content: `
        <div class="holiday-notice">
            <div class="holiday-header">
                <h2>🗓️ Изменения в расписании на май 2025</h2>
            </div>

            <div class="holiday-schedule">
                <div class="holiday-card red">
                    <h3>Выходные дни:</h3>
                    <div class="dates">
                        <p>1 мая (четверг)</p>
                        <p>8 мая (четверг)</p>
                        <p>9 мая (пятница)</p>
                    </div>
                </div>

                <div class="holiday-card blue">
                    <h3>Перенос занятий:</h3>
                    <div class="transfer">
                        <p><strong>17 мая (суббота)</strong> → занятия по расписанию <strong>8 мая (четверг)</strong></p>
                    </div>
                </div>
            </div>

            <div class="reminder">
                <p>⚠️ Пожалуйста, учитывайте эти изменения при планировании своего графика!</p>
            </div>
        </div>

        <style>
            .holiday-notice {
                max-width: 700px;
                margin: 0 auto;
                background: rgba(23, 42, 69, 0.8);
                padding: 2rem;
                border-radius: 10px;
                border: 1px solid rgba(100, 255, 218, 0.3);
            }
            .holiday-header {
                text-align: center;
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid rgba(100, 255, 218, 0.3);
            }
            .holiday-header h2 {
                color: #64ffda;
                margin: 0;
                font-size: 1.8rem;
            }
            .holiday-schedule {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1.5rem;
                margin-bottom: 2rem;
            }
            .holiday-card {
                padding: 1.5rem;
                border-radius: 8px;
                border-top: 4px solid;
            }
            .holiday-card.red {
                border-color: #ff6b6b;
                background: rgba(255, 107, 107, 0.1);
            }
            .holiday-card.blue {
                border-color: #64ffda;
                background: rgba(100, 255, 218, 0.1);
            }
            .holiday-card h3 {
                color: #e6f1ff;
                margin-top: 0;
                margin-bottom: 1rem;
                font-size: 1.3rem;
            }
            .dates p {
                margin: 0.8rem 0;
                padding-left: 1.5rem;
                position: relative;
            }
            .dates p:before {
                content: "✖";
                color: #ff6b6b;
                position: absolute;
                left: 0;
            }
            .transfer p {
                margin: 0;
                line-height: 1.6;
            }
            .transfer strong {
                color: #64ffda;
            }
            .reminder {
                text-align: center;
                padding: 1rem;
                background: rgba(255, 235, 59, 0.1);
                border-radius: 5px;
                border-left: 3px solid #ffeb3b;
            }
            @media (max-width: 768px) {
                .holiday-schedule {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `
},
{
    slug: 'minors-2025-registration',
    title: 'ВНИМАНИЕ! Запись на майноры 2025/2026 учебного года',
    content: `
        <div class="minors-alert">
            <div class="alert-header">
                <h2>⚠️ Важная информация о записи на майноры</h2>
                <p class="deadline">Срок окончания записи: <strong>01 июня 2025</strong></p>
            </div>

            <div class="current-status">
                <p>📊 <em>На текущий момент запись идёт не очень активно...</em></p>
            </div>

            <div class="instructions">
                <h3>Как понять, нужно ли записываться?</h3>
                
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <p>Откройте <strong>Личный кабинет</strong> → раздел <strong>"Учеба"</strong> → <strong>"Учебный план"</strong></p>
                        <p>Найдите майноры и посмотрите, в каком они семестре</p>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <p>Определите, какой семестр идёт сейчас</p>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <p>Если майнор в следующем семестре или через один:</p>
                        <p>Личный кабинет → <strong>"Учеба"</strong> → <strong>"Выбор майнора"</strong> → записываемся</p>
                    </div>
                </div>
            </div>

            <div class="example">
                <h4>Пример:</h4>
                <p>Сейчас <strong>4-й семестр</strong>, а майнор в <strong>6-м</strong> → значит записываться нужно!</p>
            </div>

            <div class="warning">
                <p>❗ <strong>Важно:</strong> Можно сразу перейти к записи, но учитывая возможные глюки системы, лучше сначала проверить учебный план!</p>
            </div>
        </div>

        <style>
            .minors-alert {
                max-width: 800px;
                margin: 0 auto;
                background: rgba(23, 42, 69, 0.9);
                padding: 2rem;
                border-radius: 10px;
                border: 1px solid rgba(255, 193, 7, 0.5);
            }
            .alert-header {
                text-align: center;
                margin-bottom: 1.5rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid rgba(100, 255, 218, 0.3);
            }
            .alert-header h2 {
                color: #ffc107;
                margin: 0 0 0.5rem 0;
            }
            .deadline {
                font-size: 1.2rem;
                color: #ff6b6b;
            }
            .current-status {
                text-align: center;
                margin-bottom: 2rem;
                font-style: italic;
            }
            .instructions {
                margin-bottom: 2rem;
            }
            .step {
                display: flex;
                gap: 1rem;
                margin-bottom: 1.5rem;
                align-items: flex-start;
            }
            .step-number {
                background: #64ffda;
                color: #0a192f;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                flex-shrink: 0;
            }
            .example {
                background: rgba(100, 255, 218, 0.1);
                padding: 1rem;
                border-radius: 8px;
                margin-bottom: 1.5rem;
                border-left: 3px solid #64ffda;
            }
            .example h4 {
                margin-top: 0;
                color: #64ffda;
            }
            .warning {
                background: rgba(255, 193, 7, 0.1);
                padding: 1rem;
                border-radius: 8px;
                border-left: 3px solid #ffc107;
            }
            strong {
                color: #64ffda;
            }
            @media (max-width: 768px) {
                .minors-alert {
                    padding: 1.5rem;
                }
            }
        </style>
    `
}
];