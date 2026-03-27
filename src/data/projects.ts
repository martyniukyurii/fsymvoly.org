export type ProjectCategory = "it" | "drones" | "education" | "art";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  tags: string[];
  status: "active" | "completed" | "ongoing";
  year: number;
  media?: {
    youtube?: string[];
    press?: { title: string; url: string; source: string }[];
  };
  model3d?: "drone" | "airship" | "radio" | "laptop" | "robot" | "poster";
  featured: boolean;
}

export const projects: Project[] = [
  // ===== IT PROJECTS =====
  {
    slug: "no-russia-content",
    title: "No Russia Content",
    shortTitle: "No Russia Content",
    category: "it",
    description: "Chrome та Firefox розширення що автоматично блокує весь російський контент у браузері",
    longDescription: "Розширення для браузерів Chrome та Firefox, яке автоматично виявляє та блокує весь російський контент: новини, сайти, відео та рекламу. Розроблено буковинськими IT-волонтерами як інструмент інформаційної боротьби. Отримало широке медіа-покриття на провідних українських IT-ресурсах.",
    tags: ["IT", "Chrome Extension", "InfoWar", "Volunteer"],
    status: "active",
    year: 2023,
    media: {
      press: [
        { title: "Буковинські IT-шники створили розширення що блокує весь російський контент", url: "https://molbuk.ua/news/292967", source: "Molbuk" },
        { title: "No Russia Content — розширення від буковинців", url: "https://dou.ua/forums/topic/44793/", source: "DOU" },
        { title: "No Russia Content: блокуємо Росію в браузері", url: "https://dev.ua/news/no-russia-content-1691601035", source: "Dev.ua" },
        { title: "No Russia Content", url: "https://noworries.news/ukrayinski-programisty-stvoryly-rozshyrennya-dlya-brauzera-chrome-shho-blokuye-ves-rosijskyj-kontent/", source: "NoWorries" },
        { title: "Буковинські IT-шники проти Росії", url: "https://promin.cv.ua/2023/08/02/ni-rosiiskomu-kontentu", source: "Проміньпресс" },
      ],
    },
    model3d: "laptop",
    featured: true,
  },
  {
    slug: "vyshunka",
    title: "Вишунка",
    shortTitle: "Вишунка AI",
    category: "it",
    description: "AI голосовий асистент-помічник для вивчення іноземних мов",
    longDescription: "Вишунка — інноваційний AI голосовий асистент, розроблений для полегшення вивчення іноземних мов. Використовує технології штучного інтелекту для адаптивного навчання, розпізнавання мови та персоналізованих вправ. Проект отримав грантову підтримку та медійне висвітлення.",
    tags: ["AI", "Voice Assistant", "EdTech", "NLP"],
    status: "active",
    year: 2023,
    media: {
      youtube: ["https://www.youtube.com/watch?v=-0sG_c_KaQ0"],
    },
    model3d: "laptop",
    featured: true,
  },
  {
    slug: "info-armiya",
    title: "Інфо Армія",
    shortTitle: "Інфо Армія",
    category: "it",
    description: "OSINT інструменти та платформа для інформаційного протистояння",
    longDescription: "Комплекс OSINT інструментів та платформ для виявлення та протидії російській дезінформації. Координація роботи 10 різноманітних волонтерських груп у рамках «Чернівецьких інформаційних військ».",
    tags: ["OSINT", "InfoWar", "Volunteer", "CyberWarfare"],
    status: "ongoing",
    year: 2022,
    model3d: "laptop",
    featured: false,
  },
  {
    slug: "cyberche",
    title: "CyberChe",
    shortTitle: "CyberChe",
    category: "it",
    description: "Проект з кібербезпеки для захисту українських цифрових ресурсів",
    longDescription: "CyberChe — ініціатива з кібербезпеки спрямована на захист українських цифрових ресурсів та навчання основам кіберзахисту. Включає воркшопи, консультації та практичні тренінги.",
    tags: ["Cybersecurity", "Defense", "Training"],
    status: "active",
    year: 2022,
    model3d: "laptop",
    featured: false,
  },
  {
    slug: "kharakternyк",
    title: "Характерник",
    shortTitle: "Характерник",
    category: "it",
    description: "Проектування та розробка тактичних автоматизованих AI наземних роботизованих систем",
    longDescription: "Проект «Характерник» займається проектуванням та розробкою тактичних автоматизованих наземних роботизованих систем з елементами штучного інтелекту для потреб оборони України.",
    tags: ["Robotics", "AI", "Defense", "Autonomous Systems"],
    status: "active",
    year: 2023,
    model3d: "robot",
    featured: false,
  },
  {
    slug: "tech-hub-bukovyna",
    title: "Tech Hub Bukovyna",
    shortTitle: "Tech Hub",
    category: "it",
    description: "Платформа для співпраці та розвитку технологічних проектів Буковини",
    longDescription: "Tech Hub Bukovyna — це платформа та простір для ІТ-проектів, стартапів та фрілансерів. Надає інфраструктурну підтримку, воркспейс та менторство для реалізації технологічних ідей.",
    tags: ["Startup", "Hub", "Co-working", "IT"],
    status: "active",
    year: 2022,
    model3d: "laptop",
    featured: false,
  },

  // ===== DRONES / RADIO PROJECTS =====
  {
    slug: "fpv-drony",
    title: "FPV Дрони для ЗСУ",
    shortTitle: "FPV Дрони",
    category: "drones",
    description: "Виробництво FPV дронів-камікадзе та розробка систем управління для Збройних Сил України",
    longDescription: "Команда волонтерів Фонду Символи розробляє та виготовляє FPV дрони-камікадзе для потреб ЗСУ. Проект охоплює: виробництво дронів, розробку систем head-tracker, налаштування FPV систем та навчання пілотів. Проект отримав широке медіа-висвітлення на провідних українських виданнях.",
    tags: ["FPV", "Drones", "Military", "Defense", "Volunteer"],
    status: "active",
    year: 2022,
    media: {
      youtube: [
        "https://www.youtube.com/watch?v=Rpx0jXaxfMM",
        "https://www.youtube.com/watch?v=wWW5w3yMyfw",
        "https://youtu.be/szth5i1UZgY",
        "https://youtu.be/F3IBmySdAT8",
        "https://youtu.be/rR4R0ZgotGw",
      ],
      press: [
        { title: "На Буковині ентузіасти розробляють прототипи дронів-камікадзе", url: "https://zahid.espreso.tv/na-bukovini-entuziasti-rozroblyayut-prototipi-droniv-kamikadze", source: "Espreso" },
        { title: "Дрони, убивці рації і повербанки: як студенти допомагають ЗСУ", url: "https://focus.ua/uk/digital/547231", source: "Focus" },
        { title: "Роблять дрони та рації: у Чернівцях студенти виготовляють техніку для військових", url: "https://suspilne.media/366844", source: "Суспільне" },
        { title: "Молодий буковинець", url: "https://www.youtube.com/watch?v=wWW5w3yMyfw", source: "YouTube" },
      ],
    },
    model3d: "drone",
    featured: true,
  },
  {
    slug: "decoder",
    title: "Decoder",
    shortTitle: "Decoder",
    category: "drones",
    description: "Система перехоплення та декодування радіосигналів",
    longDescription: "Decoder — проект з розробки систем перехоплення та аналізу радіосигналів для потреб оборони. Включає апаратну та програмну складові для моніторингу радіочастотного середовища.",
    tags: ["Radio", "SDR", "Defense", "Signal Intelligence"],
    status: "active",
    year: 2023,
    media: {
      youtube: ["https://www.youtube.com/watch?v=oKXHweA2E_4"],
    },
    model3d: "radio",
    featured: false,
  },
  {
    slug: "ratsii",
    title: "Рації для ЗСУ",
    shortTitle: "Рації",
    category: "drones",
    description: "Збірка та налаштування портативних радіостанцій для підрозділів ЗСУ",
    longDescription: "Волонтерський проект по збірці, налаштуванню та передачі портативних радіостанцій для підрозділів Збройних Сил України. Включає навчання особового складу роботі з радіозв'язком.",
    tags: ["Radio", "Military", "Volunteer"],
    status: "ongoing",
    year: 2022,
    model3d: "radio",
    featured: false,
  },

  // ===== EDUCATION PROJECTS =====
  {
    slug: "ai-treninhy",
    title: "AI Тренінги",
    shortTitle: "AI Тренінги",
    category: "education",
    description: "Практичні тренінги зі штучного інтелекту для широкої аудиторії",
    longDescription: "Серія практичних тренінгів з штучного інтелекту: від базових концепцій до практичного застосування ChatGPT, Midjourney та інших AI-інструментів для бізнесу та повсякденного використання.",
    tags: ["AI", "Education", "Training", "ChatGPT"],
    status: "ongoing",
    year: 2023,
    media: {
      youtube: ["https://www.youtube.com/watch?v=3KKHjHKvIXk"],
    },
    model3d: "laptop",
    featured: false,
  },
  {
    slug: "media-hub-bukovyna",
    title: "Media Hub Bukovyna",
    shortTitle: "Media Hub",
    category: "education",
    description: "Платформа для розвитку медіа-проектів: 270 медіа-продуктів, 21 авторська програма",
    longDescription: "Media Hub Bukovyna — платформа для співпраці та розвитку медіа-проектів. У партнерстві з місцевими ЗМІ реалізовано 270 медіа-продуктів та 21 авторську програму включаючи: ПіК Чернівці (21 випуск), Civilization CHE (15 вип.), Буковина.Travel (54 вип.), Запитай лікаря (14 вип.) та інші.",
    tags: ["Media", "TV", "Podcast", "Culture"],
    status: "active",
    year: 2022,
    model3d: "laptop",
    featured: false,
  },
  {
    slug: "zdorova-mentalnist",
    title: "Здорова Ментальність",
    shortTitle: "Ментальне Здоров'я",
    category: "education",
    description: "Програма психосоціальної підтримки постраждалих від війни — 2000+ учасників",
    longDescription: "Проект «Здорова ментальність: програма підтримки психічного здоров'я» — безкоштовні консультації, арт-терапія, групові заняття та психологічна підтримка для внутрішньо переміщених осіб, ветеранів та їх сімей. Охоплює Чернівецьку, Мамаївську, Сторожинецьку та Новоселицьку громади. 2000+ отримувачів послуг.",
    tags: ["Mental Health", "Social", "Grant", "Veterans", "IDP"],
    status: "active",
    year: 2024,
    model3d: "laptop",
    featured: false,
  },

  // ===== ART / SOCIAL PROJECTS =====
  {
    slug: "artforpeaceua",
    title: "ArtForPeaceUA",
    shortTitle: "ArtForPeace",
    category: "art",
    description: "Серії патріотичних арт-плакатів, постерів та коміксів про героїв України",
    longDescription: "ArtForPeaceUA — проект зі створення патріотичних артплакатів, постерів та коміксів. Серії: «Мистецтво в умовах війни», «Ми всі зараз ЗСУ», «Герої серед нас», «Все буде Україна», «Нація Нескорених», комікс-серія «Герої». Також «Лицарі Буковини» — арт-плакати про учасників війни з Буковини.",
    tags: ["Art", "Posters", "Comics", "Patriotic"],
    status: "active",
    year: 2022,
    model3d: "poster",
    featured: true,
  },
];

export const projectsByCategory = {
  it: projects.filter(p => p.category === "it"),
  drones: projects.filter(p => p.category === "drones"),
  education: projects.filter(p => p.category === "education"),
  art: projects.filter(p => p.category === "art"),
};

export const featuredProjects = projects.filter(p => p.featured);

export const categoryLabels: Record<ProjectCategory, string> = {
  it: "IT та Кіберзахист",
  drones: "Дрони та Радіотехніка",
  education: "Освіта та Медіа",
  art: "Мистецтво та Соціальне",
};
