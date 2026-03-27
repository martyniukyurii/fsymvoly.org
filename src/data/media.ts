export interface YoutubeVideo {
  id: string;
  url: string;
  title: string;
  description: string;
  project?: string;
}

export interface PressArticle {
  title: string;
  url: string;
  source: string;
  logo?: string;
  project: string;
  description: string;
}

export const youtubeVideos: YoutubeVideo[] = [
  {
    id: "3KKHjHKvIXk",
    url: "https://www.youtube.com/watch?v=3KKHjHKvIXk",
    title: "Тренінг зі штучного інтелекту",
    description: "Практичний тренінг по застосуванню AI інструментів",
    project: "ai-treninhy",
  },
  {
    id: "-0sG_c_KaQ0",
    url: "https://www.youtube.com/watch?v=-0sG_c_KaQ0",
    title: "Вишунка — AI голосовий асистент",
    description: "Презентація AI асистента для вивчення іноземних мов",
    project: "vyshunka",
  },
  {
    id: "oKXHweA2E_4",
    url: "https://www.youtube.com/watch?v=oKXHweA2E_4",
    title: "Decoder — система аналізу радіосигналів",
    description: "Демонстрація системи перехоплення радіосигналів",
    project: "decoder",
  },
  {
    id: "Rpx0jXaxfMM",
    url: "https://www.youtube.com/watch?v=Rpx0jXaxfMM",
    title: "Виробництво FPV дронів для ЗСУ",
    description: "Репортаж Чернівецького Променю про дрони-камікадзе",
    project: "fpv-drony",
  },
  {
    id: "wWW5w3yMyfw",
    url: "https://www.youtube.com/watch?v=wWW5w3yMyfw",
    title: "Молодь Буковини робить дрони для армії",
    description: "Репортаж Молодого буковинця про FPV дрони",
    project: "fpv-drony",
  },
  {
    id: "szth5i1UZgY",
    url: "https://youtu.be/szth5i1UZgY",
    title: "FPV дрони — продовження",
    description: "Додатковий репортаж про дрони для ЗСУ",
    project: "fpv-drony",
  },
  {
    id: "F3IBmySdAT8",
    url: "https://youtu.be/F3IBmySdAT8",
    title: "Дрони: технічна частина",
    description: "Технічні деталі виробництва FPV дронів",
    project: "fpv-drony",
  },
  {
    id: "rR4R0ZgotGw",
    url: "https://youtu.be/rR4R0ZgotGw",
    title: "IT-тренінг",
    description: "Тренінг з цифрових навичок",
    project: "ai-treninhy",
  },
];

export const pressArticles: PressArticle[] = [
  {
    title: "Буковинські IT-шники створили розширення що блокує весь російський контент",
    url: "https://molbuk.ua/news/292967",
    source: "Molbuk.ua",
    project: "no-russia-content",
    description: "Стаття про No Russia Content розширення від команди Фонду Символи",
  },
  {
    title: "No Russia Content — як заблокувати Росію в браузері",
    url: "https://dou.ua/forums/topic/44793/",
    source: "DOU.ua",
    project: "no-russia-content",
    description: "Огляд розширення на провідному IT-порталі України",
  },
  {
    title: "No Russia Content: блокуємо Росію",
    url: "https://dev.ua/news/no-russia-content-1691601035",
    source: "Dev.ua",
    project: "no-russia-content",
    description: "Публікація на Dev.ua про браузерне розширення",
  },
  {
    title: "На Буковині ентузіасти розробляють прототипи дронів-камікадзе",
    url: "https://zahid.espreso.tv/na-bukovini-entuziasti-rozroblyayut-prototipi-droniv-kamikadze",
    source: "Espreso.tv",
    project: "fpv-drony",
    description: "Репортаж про виробництво FPV дронів для ЗСУ",
  },
  {
    title: "Роблять дрони та рації: у Чернівцях студенти виготовляють техніку для військових",
    url: "https://suspilne.media/366844",
    source: "Суспільне",
    project: "fpv-drony",
    description: "Публікація Суспільного медіа про волонтерів Буковини",
  },
  {
    title: "Дрони, убивці рації і повербанки: як студенти допомагають ЗСУ",
    url: "https://focus.ua/uk/digital/547231",
    source: "Focus.ua",
    project: "fpv-drony",
    description: "Репортаж Focus.ua про буковинських волонтерів",
  },
  {
    title: "Буковинські IT-волонтери: хто вони і що роблять",
    url: "https://milukraine.net/2023/07/bukovynski-it-volontery",
    source: "MilUkraine",
    project: "no-russia-content",
    description: "Загальна стаття про IT-волонтерів Фонду Символи",
  },
  {
    title: "У Чернівцях запустили нову волонтерську ініціативу",
    url: "https://molbuk.ua/news/280616",
    source: "Molbuk.ua",
    project: "fpv-drony",
    description: "Про запуск волонтерської ініціативи Фонду Символи",
  },
];
