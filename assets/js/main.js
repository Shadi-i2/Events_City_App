/* تغطية لغوية كاملة + ثيم + حفظ بالكويكز */
const textBundle = {
  ar: {
    site_title: "دليل فعاليات المدينة",
    nav_home: "الرئيسية",
    nav_events: "الفعاليات",
    nav_about: "حول",
    nav_contact: "اتصل بنا",
    hero_title: "استكشف أحدث الفعاليات في مدينتك",
    hero_subtitle: "موسيقى، ثقافة، رياضة، وعروض عائلية — كل ذلك في مكان واحد.",
    hero_cta: "تصفح جميع الفعاليات",
    quick_cats: "تصفح حسب الفئة",
    latest_events: "أحدث الفعاليات",
    see_all: "الاطلاع على جميع الفعاليات",
    featured_week: "فعاليات بارزة هذا الأسبوع",
    events_heading: "جميع الفعاليات",
    filter_category: "الفئة",
    filter_date: "حدّد تاريخًا",
    filter_search: "بحث",
    apply_filters: "تطبيق",
    details: "تفاصيل الفعالية",
    back_to_events: "عودة للفعاليات",
    gallery: "معرض صور",
    approx_location: "موقع تقريبي",
    copied: "تم نسخ رابط الفعالية",
    contact_heading: "اتصل بنا",
    label_name: "الاسم",
    label_email: "البريد الإلكتروني",
    label_message: "الرسالة",
    send: "إرسال",
    reset: "تفريغ",
    alert_success: "تم إرسال رسالتك بنجاح!",
    alert_error: "يرجى التأكد من صحة البيانات.",
    about_heading: "حول الدليل",
    about_goal_title: "الهدف",
    about_goal_text:
      "تجميع فعاليات المدن السورية في مكان واحد ليسهل على الجمهور اكتشاف الأنشطة الثقافية والرياضية والعائلية.",
    about_vision_title: "الرؤية",
    about_vision_text:
      "أن يكون الدليل مرجعًا مبسّطًا وحديثًا يعكس حيوية المجتمع المحلي ويشجع المشاركة.",
    about_mission_title: "الرسالة",
    about_mission_text:
      "عرض معلومات دقيقة وبأسلوب واضح، مع تنظيم فعّال يراعي سهولة الوصول والتجاوب على مختلف الأجهزة.",
    team_title: "فريق العمل",
    team_name: "الاسم",
    team_class: "الصف",
    team_role: "الدور",
    policies_title: "سياسات مختصرة",
    policy_1:
      "تقديم فعالية يجب أن يتضمن: الاسم، التاريخ، المدينة، منظّم الحدث، صورة واضحة.",
    policy_2: "المحتوى المختصر والواضح يُفضّل مع تضمين وسائل التواصل المتاحة.",
    policy_3: "نراجع البيانات قبل النشر للتحقق من الاتساق والشكل.",
    alt_contacts: "معلومات تواصل بديلة",
    alt_email: "بريد عام: ",
    alt_socials: "حسابات التواصل: ",
  },
  en: {
    site_title: "City Events Guide",
    nav_home: "Home",
    nav_events: "Events",
    nav_about: "About",
    nav_contact: "Contact",
    hero_title: "Explore the latest events in your city",
    hero_subtitle:
      "Music, culture, sports, and family shows — all in one place.",
    hero_cta: "Browse all events",
    quick_cats: "Browse by category",
    latest_events: "Latest events",
    see_all: "See all events",
    featured_week: "Featured this week",
    events_heading: "All events",
    filter_category: "Category",
    filter_date: "Pick a date",
    filter_search: "Search",
    apply_filters: "Apply",
    details: "Details",
    back_to_events: "Back to events",
    gallery: "Gallery",
    approx_location: "Approximate location",
    copied: "Event link copied",
    contact_heading: "Contact us",
    label_name: "Name",
    label_email: "Email",
    label_message: "Message",
    send: "Send",
    reset: "Reset",
    alert_success: "Your message was sent successfully!",
    alert_error: "Please make sure the inputs are valid.",
    about_heading: "About",
    about_goal_title: "Goal",
    about_goal_text:
      "Aggregate events in Syrian cities in one place to make cultural, sports, and family activities easy to discover.",
    about_vision_title: "Vision",
    about_vision_text:
      "Be a simple, up-to-date reference that reflects community vitality and encourages participation.",
    about_mission_title: "Mission",
    about_mission_text:
      "Provide accurate information in a clear style with responsive, accessible organization.",
    team_title: "Team",
    team_name: "Name",
    team_class: "Class",
    team_role: "Role",
    policies_title: "Short policies",
    policy_1:
      "Submitting an event must include: name, date, city, organizer, and a clear image.",
    policy_2:
      "Concise and clear content is preferred, including available contact channels.",
    policy_3:
      "We review data before publishing to ensure consistency and formatting.",
    alt_contacts: "Alternative contacts",
    alt_email: "General email: ",
    alt_socials: "Social accounts: ",

  },
};

function setCookie(name, value, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${d.toUTCString()}; path=/`;
}
function getCookie(name) {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}

const runtimeState = {
  lang: getCookie("lang") || "ar",
  theme: getCookie("theme") || "light",
};

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(runtimeState.lang);
  setupLangButtons();
  setupThemeButtons();
  const p = location.pathname.toLowerCase();
  if (p.endsWith("index.html") || p.endsWith("/")) setupHomePage();
  else if (p.endsWith("events.html")) setupEventsPage();
  else if (p.endsWith("event.html")) setupEventPage();
  else if (p.endsWith("about.html")) applyDocTitle();
  else if (p.endsWith("contact.html")) setupContactPage();
});

function applyDocTitle() {
  document.title = textBundle[runtimeState.lang].site_title;
}

function applyLanguage(lang) {
  const html = document.documentElement;
  if (lang === "ar") {
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
  } else {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
  }
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const t = textBundle[lang][key];
    if (typeof t === "string") el.textContent = t;
  });
  applyDocTitle();
}

function setupLangButtons() {
  document.querySelectorAll(".btn-lang").forEach((btn) => {
    btn.addEventListener("click", () => {
      runtimeState.lang = btn.getAttribute("data-lang") || "ar";
      setCookie("lang", runtimeState.lang);
      applyLanguage(runtimeState.lang);
      const p = location.pathname.toLowerCase();
      if (p.endsWith("index.html") || p.endsWith("/")) setupHomePage(true);
      else if (p.endsWith("events.html")) setupEventsPage(true);
      else if (p.endsWith("event.html")) setupEventPage(true);
      else if (p.endsWith("contact.html")) setupContactPage(true);
    });
  });
}

function setupThemeButtons() {
  const btnL = document.getElementById("btnThemeLight");
  const btnD = document.getElementById("btnThemeDark");
  const setActive = () => {
    btnL.classList.toggle("active", runtimeState.theme === "light");
    btnD.classList.toggle("active", runtimeState.theme === "dark");
    document.documentElement.setAttribute("data-bs-theme", runtimeState.theme);
  };
  if (btnL && btnD) {
    btnL.addEventListener("click", () => {
      runtimeState.theme = "light";
      setCookie("theme", "light");
      setActive();
    });
    btnD.addEventListener("click", () => {
      runtimeState.theme = "dark";
      setCookie("theme", "dark");
      setActive();
    });
    setActive();
  }
}

async function getEventsData() {
  try {
    const res = await fetch("assets/data/events.json", { cache: "no-store" });
    return await res.json();
  } catch (e) {
    console.error("events.json load error", e);
    return [];
  }
}

function uniqueCategories(list) {
  return Array.from(new Set(list.map((e) => e.category)));
}
function asDate(str) {
  return new Date(str + "T00:00:00");
}
function isThisWeek(date) {
  const now = new Date();
  const in7 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
  return date >= now && date <= in7;
}

async function setupHomePage(refresh) {
  const data = await getEventsData();
  const catsRow = document.getElementById("catsRow");
  if (catsRow) {
    catsRow.innerHTML = "";
    uniqueCategories(data).forEach((c) => {
      const href = "events.html#cat=" + encodeURIComponent(c);
      catsRow.insertAdjacentHTML(
        "beforeend",
        `<div class="col-6 col-md-3 col-lg-2"><a href="${href}" class="btn btn-outline-primary w-100">${c}</a></div>`
      );
    });
  }
  const latestRow = document.getElementById("latestRow");
  if (latestRow) {
    latestRow.innerHTML = "";
    const latest = [...data]
      .sort((a, b) => asDate(b.date) - asDate(a.date))
      .slice(0, 3);
    latest.forEach((ev) => {
      const title = runtimeState.lang === "ar" ? ev.title_ar : ev.title_en;
      const summary =
        runtimeState.lang === "ar" ? ev.summary_ar : ev.summary_en;
      latestRow.insertAdjacentHTML(
        "beforeend",
        `
        <div class="col-12 col-md-4">
          <div class="card h-100 text-center">
            <div class="pt-3"><img class="thumb-circle-lg" src="${
              ev.thumb
            }" alt="${title}"></div>
            <div class="card-body">
              <span class="card-title-ribbon mb-2">${title}</span>
              <p class="small text-body-secondary mb-1">${ev.city} — ${
          ev.date
        }</p>
              <p class="mb-0">${summary}</p>
            </div>
            <div class="card-footer bg-transparent border-0 pb-3">
              <a href="event.html?id=${encodeURIComponent(
                ev.id
              )}" class="btn btn-sm btn-primary">${
          textBundle[runtimeState.lang].details
        }</a>
            </div>
          </div>
        </div>`
      );
    });
  }
  const inner = document.getElementById("featuredInner");
  if (inner) {
    inner.innerHTML = "";
    const week = data.filter((e) => isThisWeek(asDate(e.date)));
    const list = week.length ? week : data.slice(0, 3);
    list.forEach((ev, idx) => {
      const title = runtimeState.lang === "ar" ? ev.title_ar : ev.title_en;
      const summary =
        runtimeState.lang === "ar" ? ev.summary_ar : ev.summary_en;
      const active = idx === 0 ? "active" : "";
      inner.insertAdjacentHTML(
        "beforeend",
        `
        <div class="carousel-item ${active}">
          <img src="${
            ev.gallery?.[0] || ev.thumb
          }" class="d-block w-100" alt="${title}" style="max-height:420px;object-fit:cover;">
          <div class="carousel-caption d-none d-md-block bg-body-tertiary bg-opacity-75 rounded-3 p-2">
            <h5 class="mb-1">${title}</h5>
            <p class="mb-1">${summary}</p>
            <p class="small mb-2">${ev.city} — ${ev.date}</p>
            <a class="btn btn-sm btn-primary" href="event.html?id=${encodeURIComponent(
              ev.id
            )}">${textBundle[runtimeState.lang].details}</a>
          </div>
        </div>`
      );
    });
  }
}

async function setupEventsPage(refresh) {
  const data = await getEventsData();
  const sel = document.getElementById("filterCategory");
  if (sel) {
    sel.innerHTML = `<option value="" selected>${
      textBundle[runtimeState.lang].all || "الكل"
    }</option>`;
    uniqueCategories(data).forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      sel.appendChild(opt);
    });
  }
  const hash = location.hash;
  if (hash.startsWith("#cat=") && sel) {
    sel.value = decodeURIComponent(hash.split("=")[1] || "");
  }
  const form = document.getElementById("filtersForm");
  if (form)
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      drawEventsList(data);
    });
  drawEventsList(data);
}

function drawEventsList(data) {
  const list = document.getElementById("eventsList");
  const selCat = document.getElementById("filterCategory");
  const selDate = document.getElementById("filterDate");
  const txt = document.getElementById("filterText");
  const cat = selCat ? selCat.value : "";
  const date = selDate ? selDate.value : "";
  const q = txt ? (txt.value || "").toLowerCase() : "";
  const filtered = data.filter((ev) => {
    const inCat = cat ? ev.category === cat : true;
    const inDate = date ? ev.date === date : true;
    const title = (
      runtimeState.lang === "ar" ? ev.title_ar : ev.title_en
    ).toLowerCase();
    const inTxt = q
      ? title.includes(q) || ev.city.toLowerCase().includes(q)
      : true;
    return inCat && inDate && inTxt;
  });
  list.innerHTML = "";
  if (!filtered.length) {
    list.innerHTML = `<div class="col-12"><div class="alert alert-warning">${
      runtimeState.lang === "ar" ? "لا توجد نتائج." : "No results."
    }</div></div>`;
    return;
  }
  filtered.forEach((ev) => {
    const title = runtimeState.lang === "ar" ? ev.title_ar : ev.title_en;
    list.insertAdjacentHTML(
      "beforeend",
      `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 text-center">
          <div class="pt-3"><img src="${
            ev.thumb
          }" class="thumb-circle-md" alt="${title}"></div>
          <div class="card-body">
            <div><span class="card-title-ribbon">${title}</span></div>
            <p class="small text-body-secondary mb-2">${ev.city} — ${
        ev.date
      }</p>
            <a href="event.html?id=${encodeURIComponent(
              ev.id
            )}" class="btn btn-sm btn-primary">${
        textBundle[runtimeState.lang].details
      }</a>
          </div>
        </div>
      </div>`
    );
  });
}

async function setupEventPage(refresh) {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const container = document.getElementById("eventContainer");
  if (!id || !container) return;
  const data = await getEventsData();
  const ev = data.find((e) => e.id === id);
  if (!ev) {
    container.innerHTML = `<div class="alert alert-danger">${
      runtimeState.lang === "ar" ? "الفعالية غير موجودة" : "Event not found"
    }</div>`;
    return;
  }
  const title = runtimeState.lang === "ar" ? ev.title_ar : ev.title_en;
  const desc = runtimeState.lang === "ar" ? ev.desc_ar : ev.desc_en;
  container.innerHTML = `
    <div class="row g-4">
      <div class="col-12">
        <img class="event-hero" src="${
          ev.gallery?.[0] || ev.thumb
        }" alt="${title}">
      </div>
      <div class="col-lg-8">
        <h1 class="h4 mb-2">${title}</h1>
        <p class="text-body-secondary small mb-3">${ev.city} — ${ev.venue} — ${
    ev.date
  }</p>
        <p>${desc}</p>
        <h2 class="h6 mt-4">${textBundle[runtimeState.lang].gallery}</h2>
        <div class="d-flex flex-wrap gap-2">
          ${(ev.gallery || [])
            .slice(0, 4)
            .map(
              (src) =>
                `<img src="${src}" alt="${title}" class="rounded" style="width:220px;height:130px;object-fit:cover;">`
            )
            .join("")}
        </div>
        <div class="mt-4 d-flex flex-wrap gap-2">
          <span class="badge text-bg-primary">${ev.category}</span>
          <span class="badge text-bg-secondary">${ev.organizer}</span>
        </div>
        <div class="mt-4 d-flex flex-wrap gap-2">
          <button class="btn btn-outline-secondary btn-sm" id="btnAddCalendar"><i class="bi bi-calendar-plus"></i> ${
            runtimeState.lang === "ar" ? "إضافة إلى التقويم" : "Add to calendar"
          }</button>
          <button class="btn btn-outline-primary btn-sm" id="btnShare"><i class="bi bi-share"></i> ${
            runtimeState.lang === "ar" ? "مشاركة" : "Share"
          }</button>
        </div>
        <div class="mt-2 alert alert-success d-none" id="shareAlert">${
          textBundle[runtimeState.lang].copied
        }</div>
        <div class="mt-4">
          <a href="events.html" class="btn btn-outline-secondary">${
            textBundle[runtimeState.lang].back_to_events
          }</a>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${
              textBundle[runtimeState.lang].approx_location
            }</h5>
            <img src="${ev.map}" class="img-fluid rounded" alt="map">
          </div>
        </div>
      </div>
    </div>
  `;
  const shareBtn = document.getElementById("btnShare");
  const shareAlert = document.getElementById("shareAlert");
  if (shareBtn && shareAlert) {
    shareBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        shareAlert.classList.remove("d-none");
        setTimeout(() => shareAlert.classList.add("d-none"), 1800);
      } catch (e) {}
    });
  }
  const addBtn = document.getElementById("btnAddCalendar");
  if (addBtn) {
    addBtn.addEventListener("click", () => {});
  }
}

function setupContactPage(refresh) {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("contactAlert");
  if (!form || !alertBox) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();
    const valid =
      name.length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      msg.length >= 5;
    alertBox.classList.remove("d-none", "alert-success", "alert-danger");
    if (valid) {
      alertBox.classList.add("alert-success");
      alertBox.textContent = textBundle[runtimeState.lang].alert_success;
      form.reset();
    } else {
      alertBox.classList.add("alert-danger");
      alertBox.textContent = textBundle[runtimeState.lang].alert_error;
    }
  });
}
