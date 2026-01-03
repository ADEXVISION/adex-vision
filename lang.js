/* ================= LANGUAGE LIST ================= */

const languageList = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  "pt-br": "Português (Brasil)",
  nl: "Nederlands",
  da: "Dansk",
  fi: "Suomi",
  no: "Norsk",
  sv: "Svenska",
  pl: "Polski",
  ru: "Русский",
  ar: "العربية",
  ja: "日本語",
  ko: "한국어",
  "zh-cn": "简体中文",
  "zh-tw": "繁體中文",
  tr: "Türkçe",
  th: "ไทย"
};

/* ================= TRANSLATIONS ================= */

const translations = {
  en: {
    store: "Store",
    news: "News",
    battle: "Battle Pass",
    packs: "Packs",
    xcoin: "X-Coin",
    support: "Support",
    get_now: "Get Gold Pack",
    join_community: "Join the Community",
    join_team: "Join the Team",
    stay_updated: "Stay Updated",
    language_select: "Select your region & language",
    need_help: "Need help? Contact us or join our community support."
  },

  de: {
    store: "Shop",
    news: "News",
    battle: "Battle Pass",
    packs: "Pakete",
    xcoin: "X-Coin",
    support: "Support",
    get_now: "Gold-Paket holen",
    join_community: "Community beitreten",
    join_team: "Dem Team beitreten",
    stay_updated: "Aktuell bleiben",
    language_select: "Region & Sprache auswählen",
    need_help: "Brauchst du Hilfe? Kontaktiere uns oder tritt dem Support bei."
  },

  es: {
    store: "Tienda",
    news: "Noticias",
    battle: "Pase de batalla",
    packs: "Paquetes",
    xcoin: "X-Coin",
    support: "Soporte",
    get_now: "Obtener paquete Gold",
    join_community: "Unirse a la comunidad",
    join_team: "Únete al equipo",
    stay_updated: "Mantente informado",
    language_select: "Selecciona tu región e idioma",
    need_help: "¿Necesitas ayuda? Contáctanos o únete al soporte."
  }
};

/* ================= CORE LOGIC ================= */

function setLanguage(lang) {
  const normalized = lang.toLowerCase();
  localStorage.setItem("lang", normalized);

  document.documentElement.lang = normalized;

  const base = normalized.split("-")[0];
  const dict =
    translations[normalized] ||
    translations[base] ||
    translations.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.documentElement.dir = (normalized === "ar") ? "rtl" : "ltr";

  const label = languageList[normalized] || languageList[base] || "English";
  document.querySelectorAll(".current-language").forEach(el => {
    el.textContent = `Selected Region: ${label}`;
  });

  console.info("Active language:", normalized);
  console.info(
    "Dictionary:",
    dict === translations.en ? "EN fallback" : normalized
  );
}

/* ================= INIT ================= */

window.addEventListener("load", () => {
  const saved = localStorage.getItem("lang");
  const browser = navigator.language.toLowerCase();
  setLanguage(saved || browser);
});
