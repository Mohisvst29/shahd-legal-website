/**
 * لوحة تحكم منصة المستشارة القانونية شهد إبراهيم محرم
 * المحرك البرمجي الشامل للإدارة والجدولة والهوية البصرية | Admin System Pro
 */

// التهيئة الافتراضية لإعدادات المنصة والهوية البصرية
const DEFAULT_SITE_CONFIG = {
  logo: {
    url: "assets/images/logo.png",
    height: 56,
    blendMode: "multiply"
  },
  images: {
    heroBg: "assets/images/hero-bg.jpg",
    portrait: "assets/images/portrait.jpg",
    lawGavel: "assets/images/law-gavel.jpg"
  },
  social: {
    whatsapp: "+966500000000",
    email: "Shahd-lc@hotmail.com",
    linktree: "https://linktr.ee/Shahd_legal",
    twitter: "https://x.com/Shahd_legal",
    snapchat: "https://www.snapchat.com/add/shahd_legal",
    linkedin: "https://www.linkedin.com"
  },
  schedule: {
    workingDays: "الأحد - الخميس",
    workingHours: "09:00 ص - 06:00 م",
    status: "available", // available, busy, urgent_only
    slots: [
      { id: 1, day: "الأحد", time: "10:00 ص - 11:30 ص", status: "available" },
      { id: 2, day: "الأحد", time: "04:30 م - 06:00 م", status: "available" },
      { id: 3, day: "الإثنين", time: "11:00 ص - 12:30 م", status: "available" },
      { id: 4, day: "الإثنين", time: "05:00 م - 06:30 م", status: "booked" },
      { id: 5, day: "الثلاثاء", time: "10:00 ص - 11:30 ص", status: "available" },
      { id: 6, day: "الأربعاء", time: "04:00 م - 05:30 م", status: "available" },
      { id: 7, day: "الخميس", time: "11:00 ص - 01:00 م", status: "available" }
    ]
  },
  testimonials: [
    {
      id: 1,
      name: "عبدالله محمد",
      role: "رائد أعمال ومستثمر",
      rating: 5,
      text: "تعاملت مع الأستاذة شهد في صياغة لائحة استئناف لقضية عمالية معقدة. صياغتها كانت دقيقة ومستندة لمواد نظام العمل واللوائح التنفيذية وتم قبول اللائحة بحمد الله. احترافية عالية جداً."
    },
    {
      id: 2,
      name: "نورة العتيبي",
      role: "مديرة تنفيذية",
      rating: 5,
      text: "خدمة الاستشارة القانونية كانت واضحة وسريعة. قامت بدراسة العقد بدقة ونبهتني لثغرات جوهرية كان يمكن أن تكلفني مبالغ طائلة. أمانة ومصداقية تستحق كل التقدير."
    },
    {
      id: 3,
      name: "فيصل السالم",
      role: "صاحب مؤسسة تجارية",
      rating: 5,
      text: "متابعة ممتازة في إجراءات طلبات التنفيذ والتحصيل المالي. وضوح كامل في الرأي والمشورة القانونية منذ اليوم الأول دون أي وعود غير واقعية. قمة في المهنية."
    }
  ]
};

// طلبات الاستشارات
const DEFAULT_INQUIRIES = [
  {
    id: "REQ-101",
    name: "سلطان بن عبدالعزيز الراجحي",
    phone: "+966501234567",
    email: "sultan.rajhi@example.com",
    service: "صياغة وتوثيق العقود",
    urgency: "urgent",
    status: "new",
    date: "2026-10-10 14:30",
    details: "طلب صياغة عقد شراكة استثمارية وتأسيس شركة ذات مسؤولية محدودة بين 3 شركاء مع شروط تخارج وتحكيم تجاري."
  },
  {
    id: "REQ-102",
    name: "نوف فهد العتيبي",
    phone: "+966559876543",
    email: "nouf.legal@example.com",
    service: "صياغة لائحة اعتراضية",
    urgency: "urgent",
    status: "in_progress",
    date: "2026-10-09 11:15",
    details: "حكم ابتدائي صادر من المحكمة العمالية، ومتبقي 8 أيام على مهلة الاعتراض النظامية. نحتاج دراسة أسانيد الاستئناف."
  },
  {
    id: "REQ-103",
    name: "خالد بن إبراهيم المنصور",
    phone: "+966542223344",
    email: "khaled.m@example.com",
    service: "دراسة وتحليل قضية",
    urgency: "normal",
    status: "contacted",
    date: "2026-10-08 16:45",
    details: "نزاع حول عقد مقاولة تسليم مفتاح ومطالبات مالية عن أعمال إضافية غير مدرجة بجدول الكميات."
  },
  {
    id: "REQ-104",
    name: "مؤسسة الرؤية الحديثة للتجارة",
    phone: "+966567778899",
    email: "info@modern-vision.sa",
    service: "رفع ومتابعة طلبات التنفيذ",
    urgency: "normal",
    status: "completed",
    date: "2026-10-06 09:20",
    details: "سند لأمر بمبلغ 180,000 ريال، تم قيده عبر ناجز التنفيذ واستصدار قرار المادة 34 بنجاح."
  },
  {
    id: "REQ-105",
    name: "سارة عبدالله الغامدي",
    phone: "+966531122334",
    email: "sarah.gh@example.com",
    service: "تقديم الاستشارات القانونية",
    urgency: "same-day",
    status: "new",
    date: "2026-10-10 18:10",
    details: "استشارة قانونية عاجلة بخصوص إنهاء عقد عمل محدد المدة والحقوق العمالية والتعويضات المستحقة."
  }
];

// مسارات القضايا
const DEFAULT_CASES = [
  {
    ref: "SH-2025-01",
    client: "شركة الأفق للتقنية",
    service: "صياغة اتفاقية امتياز تجاري (فرنشايز)",
    stage: 3,
    progress: 75,
    statusText: "الصياغة والتدقيق النهائي",
    updatedAt: "2026-10-10",
    advisor: "شهد إبراهيم محرم"
  },
  {
    ref: "SH-2025-02",
    client: "عبدالرحمن الشمري",
    service: "لائحة اعتراضية استئناف محكمة تجارية",
    stage: 2,
    progress: 50,
    statusText: "فحص المستندات والأسانيد",
    updatedAt: "2026-10-09",
    advisor: "شهد إبراهيم محرم"
  },
  {
    ref: "SH-2025-03",
    client: "فاطمة محمد الدوسري",
    service: "مذكرة قسمة تركة وتصفية رضائية",
    stage: 4,
    progress: 100,
    statusText: "مكتمل وتم التسليم",
    updatedAt: "2026-10-08",
    advisor: "شهد إبراهيم محرم"
  }
];

// تحميل البيانات المحفوظة أو الافتراضية
let siteConfig = JSON.parse(localStorage.getItem('shahd_site_config')) || DEFAULT_SITE_CONFIG;
let inquiries = JSON.parse(localStorage.getItem('shahd_inquiries')) || DEFAULT_INQUIRIES;
let cases = JSON.parse(localStorage.getItem('shahd_cases')) || DEFAULT_CASES;

function saveSiteConfig() {
  localStorage.setItem('shahd_site_config', JSON.stringify(siteConfig));
}

function saveInquiries() {
  localStorage.setItem('shahd_inquiries', JSON.stringify(inquiries));
}

function saveCases() {
  localStorage.setItem('shahd_cases', JSON.stringify(cases));
}

// تطبيق المظهر المفضل فوراً لمنع وميض الشاشة
(function applyInitialAdminTheme() {
  const savedTheme = localStorage.getItem('shahd_theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
})();

// تهيئة اللوحة عند التشغيل
document.addEventListener("DOMContentLoaded", () => {
  initAdminTheme();
  renderStats();
  renderInquiriesTable();
  renderCasesTable();
  renderSchedule();
  renderBrandingSettings();
  renderSocialSettings();
  renderTestimonials();
  initTabs();
  initSearch();
  initModals();
  initClock();
  initNewInquiryForm();
  initNewCaseForm();
  initScheduleForm();
  initBrandingEvents();
});

function initAdminTheme() {
  const btn = document.getElementById('adminThemeToggle');
  const text = document.getElementById('adminThemeToggleText');
  if (!btn) return;

  function updateAdminThemeUI(isLight) {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = isLight ? 'fa-solid fa-sun text-amber-500' : 'fa-solid fa-moon text-[#C5A880]';
    }
    if (text) {
      text.textContent = isLight ? 'الوضع النهاري' : 'الوضع الليلي';
    }
  }

  updateAdminThemeUI(document.documentElement.classList.contains('light'));

  btn.addEventListener('click', () => {
    const currentIsLight = document.documentElement.classList.contains('light');
    const nextIsLight = !currentIsLight;

    if (nextIsLight) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('shahd_theme', 'light');
      showToast('تم تفعيل الوضع النهاري للوحة الإدارة ☀️');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('shahd_theme', 'dark');
      showToast('تم تفعيل الوضع الليلي للوحة الإدارة 🌙');
    }
    updateAdminThemeUI(nextIsLight);
  });
}

/* -------------------------------------------------------------
   1. الإحصائيات والمؤشرات
   ------------------------------------------------------------- */
function renderStats() {
  document.getElementById('statTotalInquiries').textContent = inquiries.length;
  document.getElementById('statNewInquiries').textContent = inquiries.filter(i => i.status === 'new').length;
  document.getElementById('statActiveCases').textContent = cases.filter(c => c.progress < 100).length;
  document.getElementById('statCompleted').textContent = inquiries.filter(i => i.status === 'completed').length + cases.filter(c => c.progress === 100).length;
}

/* -------------------------------------------------------------
   2. إدارة الهوية البصرية، الشعار والصور
   ------------------------------------------------------------- */
function renderBrandingSettings() {
  // الشعار
  const logoUrlInput = document.getElementById('cfgLogoUrl');
  const logoHeightInput = document.getElementById('cfgLogoHeight');
  const logoHeightVal = document.getElementById('cfgLogoHeightVal');
  const logoBlendInput = document.getElementById('cfgLogoBlend');
  const logoPreview = document.getElementById('adminLogoPreview');

  if (logoUrlInput) logoUrlInput.value = siteConfig.logo.url;
  if (logoHeightInput) logoHeightInput.value = siteConfig.logo.height;
  if (logoHeightVal) logoHeightVal.textContent = `${siteConfig.logo.height}px`;
  if (logoBlendInput) logoBlendInput.value = siteConfig.logo.blendMode;
  if (logoPreview) {
    logoPreview.src = siteConfig.logo.url;
    logoPreview.style.height = `${siteConfig.logo.height}px`;
    logoPreview.style.mixBlendMode = siteConfig.logo.blendMode;
  }

  // صور الموقع
  const heroBgInput = document.getElementById('cfgHeroBgUrl');
  const portraitInput = document.getElementById('cfgPortraitUrl');
  const gavelInput = document.getElementById('cfgGavelUrl');

  if (heroBgInput) heroBgInput.value = siteConfig.images.heroBg;
  if (portraitInput) portraitInput.value = siteConfig.images.portrait;
  if (gavelInput) gavelInput.value = siteConfig.images.lawGavel;

  const heroPreview = document.getElementById('adminHeroPreview');
  const portraitPreview = document.getElementById('adminPortraitPreview');
  const gavelPreview = document.getElementById('adminGavelPreview');

  if (heroPreview) heroPreview.style.backgroundImage = `url(${siteConfig.images.heroBg})`;
  if (portraitPreview) portraitPreview.src = siteConfig.images.portrait;
  if (gavelPreview) gavelPreview.src = siteConfig.images.lawGavel;
}

function initBrandingEvents() {
  const logoHeightInput = document.getElementById('cfgLogoHeight');
  const logoHeightVal = document.getElementById('cfgLogoHeightVal');
  const logoPreview = document.getElementById('adminLogoPreview');
  const logoBlendInput = document.getElementById('cfgLogoBlend');
  const logoUrlInput = document.getElementById('cfgLogoUrl');

  logoHeightInput?.addEventListener('input', (e) => {
    const val = e.target.value;
    if (logoHeightVal) logoHeightVal.textContent = `${val}px`;
    if (logoPreview) logoPreview.style.height = `${val}px`;
  });

  logoBlendInput?.addEventListener('change', (e) => {
    if (logoPreview) logoPreview.style.mixBlendMode = e.target.value;
  });

  logoUrlInput?.addEventListener('input', (e) => {
    if (logoPreview) logoPreview.src = e.target.value;
  });

  // المعاينة اللحظية عند كتابة الروابط
  document.getElementById('cfgHeroBgUrl')?.addEventListener('input', (e) => {
    const el = document.getElementById('adminHeroPreview');
    if (el) el.style.backgroundImage = `url(${e.target.value})`;
  });
  document.getElementById('cfgPortraitUrl')?.addEventListener('input', (e) => {
    const el = document.getElementById('adminPortraitPreview');
    if (el) el.src = e.target.value;
  });
  document.getElementById('cfgGavelUrl')?.addEventListener('input', (e) => {
    const el = document.getElementById('adminGavelPreview');
    if (el) el.src = e.target.value;
  });

  // معالجة رفع الملفات محلياً من الجهاز وتحويلها إلى DataURL
  function setupLocalFileUploader(fileInputId, textInputId, previewCallback) {
    const fileInput = document.getElementById(fileInputId);
    if (!fileInput) return;
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        alert("يرجى اختيار ملف صورة صالح (PNG, JPG, WebP)");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        const textInput = document.getElementById(textInputId);
        if (textInput) textInput.value = dataUrl;
        if (previewCallback) previewCallback(dataUrl);
        adminToast("تم تحميل الصورة بنجاح! انقر على 'حفظ وتطبيق' لتثبيتها بالموقع.");
      };
      reader.readAsDataURL(file);
    });
  }

  setupLocalFileUploader('uploadLogoFile', 'cfgLogoUrl', (url) => {
    if (logoPreview) logoPreview.src = url;
  });
  setupLocalFileUploader('uploadHeroFile', 'cfgHeroBgUrl', (url) => {
    const el = document.getElementById('adminHeroPreview');
    if (el) el.style.backgroundImage = `url(${url})`;
  });
  setupLocalFileUploader('uploadPortraitFile', 'cfgPortraitUrl', (url) => {
    const el = document.getElementById('adminPortraitPreview');
    if (el) el.src = url;
  });
  setupLocalFileUploader('uploadGavelFile', 'cfgGavelUrl', (url) => {
    const el = document.getElementById('adminGavelPreview');
    if (el) el.src = url;
  });

  // نموذج حفظ الهوية البصرية
  const brandingForm = document.getElementById('brandingSettingsForm');
  brandingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    siteConfig.logo.url = document.getElementById('cfgLogoUrl').value.trim();
    siteConfig.logo.height = parseInt(document.getElementById('cfgLogoHeight').value);
    siteConfig.logo.blendMode = document.getElementById('cfgLogoBlend').value;

    siteConfig.images.heroBg = document.getElementById('cfgHeroBgUrl').value.trim();
    siteConfig.images.portrait = document.getElementById('cfgPortraitUrl').value.trim();
    siteConfig.images.lawGavel = document.getElementById('cfgGavelUrl').value.trim();

    saveSiteConfig();
    renderBrandingSettings();
    adminToast("تم حفظ إعدادات الشعار والصور وتطبيقها على الموقع فوراً!");
  });
}

/* -------------------------------------------------------------
   3. إدارة جدول المواعيد والأوقات المتاحة للاستشارات
   ------------------------------------------------------------- */
function renderSchedule() {
  const statusSelect = document.getElementById('cfgScheduleStatus');
  const daysInput = document.getElementById('cfgWorkingDays');
  const hoursInput = document.getElementById('cfgWorkingHours');

  if (statusSelect) statusSelect.value = siteConfig.schedule.status;
  if (daysInput) daysInput.value = siteConfig.schedule.workingDays;
  if (hoursInput) hoursInput.value = siteConfig.schedule.workingHours;

  const slotsContainer = document.getElementById('scheduleSlotsContainer');
  if (!slotsContainer) return;

  slotsContainer.innerHTML = siteConfig.schedule.slots.map(slot => {
    const isAvail = slot.status === 'available';
    return `
      <div class="time-slot-card ${isAvail ? 'available' : 'booked'}">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-lg ${isAvail ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'} flex items-center justify-center text-xs font-bold">
            ${slot.day.substring(0, 2)}
          </span>
          <div>
            <div class="text-xs font-bold text-white">${slot.day} - ${slot.time}</div>
            <div class="text-[10px] ${isAvail ? 'text-emerald-400' : 'text-rose-400'}">
              ${isAvail ? 'متاح للحجز الفوري ✓' : 'محجوز حالياً ✕'}
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="toggleSlotStatus(${slot.id})" class="px-2.5 py-1 rounded bg-[#1C2634] hover:bg-[#253244] text-[11px] font-semibold text-slate-300 transition-colors">
            ${isAvail ? 'تعطيل الحجز' : 'إتاحة الموعد'}
          </button>
          <button onclick="deleteSlot(${slot.id})" class="w-7 h-7 rounded bg-rose-500/15 hover:bg-rose-500/30 text-rose-400 flex items-center justify-center text-xs transition-colors">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

window.toggleSlotStatus = function(id) {
  const slot = siteConfig.schedule.slots.find(s => s.id === id);
  if (!slot) return;
  slot.status = slot.status === 'available' ? 'booked' : 'available';
  saveSiteConfig();
  renderSchedule();
  adminToast(`تم تحديث حالة الموعد إلى: ${slot.status === 'available' ? 'متاح' : 'محجوز'}`);
};

window.deleteSlot = function(id) {
  siteConfig.schedule.slots = siteConfig.schedule.slots.filter(s => s.id !== id);
  saveSiteConfig();
  renderSchedule();
  adminToast("تم حذف الفترة الزمنية.");
};

function initScheduleForm() {
  // حفظ الإعدادات العامة للجدول
  const scheduleGenForm = document.getElementById('scheduleGeneralForm');
  scheduleGenForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    siteConfig.schedule.status = document.getElementById('cfgScheduleStatus').value;
    siteConfig.schedule.workingDays = document.getElementById('cfgWorkingDays').value.trim();
    siteConfig.schedule.workingHours = document.getElementById('cfgWorkingHours').value.trim();
    saveSiteConfig();
    adminToast("تم تحديث أوقات العمل وحالة استقبال الاستشارات!");
  });

  // إضافة فترة زمنية جديدة
  const addSlotForm = document.getElementById('addNewSlotForm');
  addSlotForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const day = document.getElementById('newSlotDay').value;
    const time = document.getElementById('newSlotTime').value.trim();

    const newSlot = {
      id: Date.now(),
      day: day,
      time: time,
      status: "available"
    };

    siteConfig.schedule.slots.push(newSlot);
    saveSiteConfig();
    renderSchedule();
    addSlotForm.reset();
    document.getElementById('addSlotModal')?.classList.remove('active');
    adminToast(`تمت إضافة الموعد [${day} - ${time}] لقائمة الاستشارات المتاحة.`);
  });
}

/* -------------------------------------------------------------
   4. إدارة قنوات وروابط التواصل الاجتماعي
   ------------------------------------------------------------- */
function renderSocialSettings() {
  const soc = siteConfig.social;
  document.getElementById('cfgSocWhatsApp').value = soc.whatsapp;
  document.getElementById('cfgSocEmail').value = soc.email;
  document.getElementById('cfgSocLinktree').value = soc.linktree;
  document.getElementById('cfgSocTwitter').value = soc.twitter;
  document.getElementById('cfgSocSnapchat').value = soc.snapchat;
  document.getElementById('cfgSocLinkedin').value = soc.linkedin;

  const form = document.getElementById('socialSettingsForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    siteConfig.social.whatsapp = document.getElementById('cfgSocWhatsApp').value.trim();
    siteConfig.social.email = document.getElementById('cfgSocEmail').value.trim();
    siteConfig.social.linktree = document.getElementById('cfgSocLinktree').value.trim();
    siteConfig.social.twitter = document.getElementById('cfgSocTwitter').value.trim();
    siteConfig.social.snapchat = document.getElementById('cfgSocSnapchat').value.trim();
    siteConfig.social.linkedin = document.getElementById('cfgSocLinkedin').value.trim();

    saveSiteConfig();
    adminToast("تم حفظ وتحديث روابط التواصل الاجتماعي بنجاح!");
  });
}

/* -------------------------------------------------------------
   5. إدارة الموكلين وتقييمات العملاء
   ------------------------------------------------------------- */
function renderTestimonials() {
  const container = document.getElementById('testimonialsListContainer');
  if (!container) return;

  container.innerHTML = siteConfig.testimonials.map(t => {
    return `
      <div class="admin-card p-4 space-y-2 relative border border-[#2B3746]">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="font-bold text-white text-sm">${t.name}</h4>
            <span class="text-xs text-[#C5A880]">${t.role}</span>
          </div>
          <div class="flex text-amber-400 text-xs">
            ${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}
          </div>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed bg-[#121720] p-3 rounded-lg border border-[#1E2734]">
          "${t.text}"
        </p>
        <div class="flex justify-end pt-1">
          <button onclick="deleteTestimonial(${t.id})" class="text-rose-400 hover:text-rose-300 text-xs flex items-center gap-1">
            <i class="fa-solid fa-trash text-[10px]"></i>
            حذف الرأي
          </button>
        </div>
      </div>
    `;
  }).join('');

  // إضافة رأي جديد
  const addForm = document.getElementById('addTestimonialForm');
  addForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTestimonial = {
      id: Date.now(),
      name: document.getElementById('newTestName').value.trim(),
      role: document.getElementById('newTestRole').value.trim(),
      rating: parseInt(document.getElementById('newTestRating').value),
      text: document.getElementById('newTestText').value.trim()
    };

    siteConfig.testimonials.unshift(newTestimonial);
    saveSiteConfig();
    renderTestimonials();
    addForm.reset();
    document.getElementById('addTestimonialModal')?.classList.remove('active');
    adminToast("تمت إضافة التقييم الجديد وسيظهر في الموقع فوراً!");
  });
}

window.deleteTestimonial = function(id) {
  if (confirm("هل تريد حذف هذا التقييم؟")) {
    siteConfig.testimonials = siteConfig.testimonials.filter(t => t.id !== id);
    saveSiteConfig();
    renderTestimonials();
    adminToast("تم حذف التقييم.");
  }
};

/* -------------------------------------------------------------
   6. جدول طلبات الاستشارات والبحث
   ------------------------------------------------------------- */
function renderInquiriesTable(filteredList = null) {
  const list = filteredList || inquiries;
  const tbody = document.getElementById('inquiriesTableBody');
  if (!tbody) return;

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center py-8 text-slate-500">
          <i class="fa-solid fa-inbox text-3xl mb-2 block"></i>
          لا توجد طلبات تطابق معايير البحث
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map(item => {
    let statusBadge = '';
    if (item.status === 'new') statusBadge = '<span class="badge-status badge-new"><span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>جديد</span>';
    else if (item.status === 'in_progress') statusBadge = '<span class="badge-status badge-progress"><span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>قيد المعالجة</span>';
    else if (item.status === 'contacted') statusBadge = '<span class="badge-status badge-new"><span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>تم التواصل</span>';
    else statusBadge = '<span class="badge-status badge-completed"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>مكتمل ✓</span>';

    let urgencyBadge = '';
    if (item.urgency === 'urgent') urgencyBadge = '<span class="text-xs font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">عاجل</span>';
    else if (item.urgency === 'same-day') urgencyBadge = '<span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">فوري اليوم</span>';
    else urgencyBadge = '<span class="text-xs text-slate-400">عادي</span>';

    const waMsg = encodeURIComponent(`السلام عليكم ورحمة الله أستاذ/ة ${item.name}، معك المستشارة القانونية شهد إبراهيم محرم بخصوص طلبكم رقم [${item.id}] لخدمة [${item.service}]. يسعدني الاطلاع على تفاصيل طلبك.`);
    const cleanPhone = item.phone.replace(/[^0-9]/g, '');

    return `
      <tr>
        <td class="font-mono text-xs font-bold text-[#C5A880]">${item.id}</td>
        <td>
          <div class="font-bold text-white text-sm">${item.name}</div>
          <div class="text-xs text-slate-400 font-mono">${item.phone}</div>
        </td>
        <td class="text-xs font-medium text-slate-300">${item.service}</td>
        <td>${urgencyBadge}</td>
        <td>${statusBadge}</td>
        <td class="text-xs text-slate-400 font-mono">${item.date}</td>
        <td>
          <div class="flex items-center gap-1.5">
            <a href="https://wa.me/${cleanPhone}?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 flex items-center justify-center transition-colors" title="محادثة واتساب">
              <i class="fa-brands fa-whatsapp text-sm"></i>
            </a>
            <button onclick="viewInquiryDetails('${item.id}')" class="w-8 h-8 rounded-lg bg-blue-500/15 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30 flex items-center justify-center transition-colors" title="عرض التفاصيل">
              <i class="fa-solid fa-eye text-xs"></i>
            </button>
            <button onclick="changeInquiryStatus('${item.id}')" class="w-8 h-8 rounded-lg bg-amber-500/15 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 flex items-center justify-center transition-colors" title="تحديث الحالة">
              <i class="fa-solid fa-rotate text-xs"></i>
            </button>
            <button onclick="deleteInquiry('${item.id}')" class="w-8 h-8 rounded-lg bg-rose-500/15 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 flex items-center justify-center transition-colors" title="حذف">
              <i class="fa-solid fa-trash text-xs"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/* -------------------------------------------------------------
   7. جدول إدارة مسار القضايا (Portal Cases)
   ------------------------------------------------------------- */
function renderCasesTable() {
  const tbody = document.getElementById('casesTableBody');
  if (!tbody) return;

  tbody.innerHTML = cases.map(c => {
    return `
      <tr>
        <td class="font-mono text-sm font-bold text-[#C5A880]">${c.ref}</td>
        <td>
          <div class="font-bold text-white text-sm">${c.client}</div>
          <div class="text-xs text-slate-400">${c.service}</div>
        </td>
        <td>
          <div class="w-36 bg-[#0E1217] h-2.5 rounded-full overflow-hidden p-0.5 border border-[#2B3746]">
            <div class="bg-gradient-to-l from-[#C5A880] to-[#E5D6C1] h-full rounded-full" style="width: ${c.progress}%;"></div>
          </div>
          <span class="text-xs text-slate-400 font-mono mt-1 inline-block">${c.progress}% (${c.statusText})</span>
        </td>
        <td class="text-xs text-slate-300">المرحلة ${c.stage} من 4</td>
        <td class="text-xs text-slate-400 font-mono">${c.updatedAt}</td>
        <td>
          <div class="flex items-center gap-1.5">
            <button onclick="editCaseProgress('${c.ref}')" class="px-3 py-1.5 rounded-lg bg-[#C5A880]/15 hover:bg-[#C5A880]/30 text-[#E5D6C1] border border-[#C5A880]/40 text-xs font-semibold transition-colors flex items-center gap-1">
              <i class="fa-solid fa-pen-to-square text-[11px]"></i>
              تحديث المسار
            </button>
            <button onclick="deleteCase('${c.ref}')" class="w-8 h-8 rounded-lg bg-rose-500/15 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 flex items-center justify-center transition-colors">
              <i class="fa-solid fa-trash text-xs"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/* -------------------------------------------------------------
   8. التبديل بين أقسام اللوحة (Tabs)
   ------------------------------------------------------------- */
function initTabs() {
  const navItems = document.querySelectorAll('[data-admin-tab]');
  const tabContents = document.querySelectorAll('.tab-content');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-admin-tab');

      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      tabContents.forEach(content => {
        if (content.id === `tab-${targetTab}`) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });
}

/* -------------------------------------------------------------
   9. البحث والفلترة
   ------------------------------------------------------------- */
function initSearch() {
  const searchInput = document.getElementById('adminGlobalSearch');
  const statusFilter = document.getElementById('inquiryStatusFilter');

  function applyFilters() {
    const query = searchInput?.value.trim().toLowerCase() || '';
    const status = statusFilter?.value || 'all';

    const filtered = inquiries.filter(item => {
      const matchesQuery = item.name.toLowerCase().includes(query) ||
                           item.id.toLowerCase().includes(query) ||
                           item.phone.includes(query) ||
                           item.service.toLowerCase().includes(query);

      const matchesStatus = status === 'all' || item.status === status;
      return matchesQuery && matchesStatus;
    });

    renderInquiriesTable(filtered);
  }

  searchInput?.addEventListener('input', applyFilters);
  statusFilter?.addEventListener('change', applyFilters);
}

/* -------------------------------------------------------------
   10. النوافذ المنبثقة والإجراءات
   ------------------------------------------------------------- */
function initModals() {
  const closeDetailsBtn = document.getElementById('closeDetailsModal');
  const detailsModal = document.getElementById('inquiryDetailsModal');

  closeDetailsBtn?.addEventListener('click', () => {
    detailsModal?.classList.remove('active');
  });

  detailsModal?.addEventListener('click', (e) => {
    if (e.target === detailsModal) detailsModal.classList.remove('active');
  });
}

window.viewInquiryDetails = function(id) {
  const item = inquiries.find(i => i.id === id);
  if (!item) return;

  const content = document.getElementById('inquiryDetailsContent');
  const modal = document.getElementById('inquiryDetailsModal');

  content.innerHTML = `
    <div class="space-y-4 text-right">
      <div class="flex justify-between items-center border-b border-[#2B3746] pb-3">
        <div>
          <span class="text-xs text-slate-400 font-mono">رقم الطلب: ${item.id}</span>
          <h3 class="font-bold text-lg text-white mt-0.5">${item.name}</h3>
        </div>
        <span class="text-xs font-mono text-slate-400">${item.date}</span>
      </div>

      <div class="grid grid-cols-2 gap-3 text-xs bg-[#121720] p-3 rounded-lg border border-[#263344]">
        <div>
          <span class="text-slate-400 block">رقم الجوال / واتساب:</span>
          <span class="text-white font-mono font-bold">${item.phone}</span>
        </div>
        <div>
          <span class="text-slate-400 block">البريد الإلكتروني:</span>
          <span class="text-white">${item.email}</span>
        </div>
        <div class="col-span-2 pt-1 border-t border-[#1C2634]">
          <span class="text-slate-400 block">نوع الخدمة:</span>
          <span class="text-[#C5A880] font-bold text-sm">${item.service}</span>
        </div>
      </div>

      <div>
        <h4 class="text-xs font-bold text-slate-300 mb-1">تفاصيل النزاع أو الاستفسار:</h4>
        <div class="bg-[#121720] p-4 rounded-lg border border-[#263344] text-xs leading-relaxed text-slate-200 whitespace-pre-wrap">
          ${item.details || 'لا توجد تفاصيل إضافية.'}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
};

window.changeInquiryStatus = function(id) {
  const item = inquiries.find(i => i.id === id);
  if (!item) return;

  const statuses = ['new', 'in_progress', 'contacted', 'completed'];
  const currentIndex = statuses.indexOf(item.status);
  const nextStatus = statuses[(currentIndex + 1) % statuses.length];

  item.status = nextStatus;
  saveInquiries();
  renderStats();
  renderInquiriesTable();
  adminToast(`تم تحديث حالة الطلب إلى: ${nextStatus}`);
};

window.deleteInquiry = function(id) {
  if (confirm(`حذف طلب الاستشارة رقم [${id}]؟`)) {
    inquiries = inquiries.filter(i => i.id !== id);
    saveInquiries();
    renderStats();
    renderInquiriesTable();
    adminToast(`تم حذف الطلب [${id}].`);
  }
};

window.editCaseProgress = function(ref) {
  const c = cases.find(item => item.ref === ref);
  if (!c) return;

  const stages = [
    { stage: 1, progress: 25, label: "استلام الطلب وحصر المستندات" },
    { stage: 2, progress: 50, label: "فحص المستندات والأسانيد" },
    { stage: 3, progress: 75, label: "الصياغة والتدقيق النهائي" },
    { stage: 4, progress: 100, label: "مكتمل وتم التسليم" }
  ];

  const currentIdx = stages.findIndex(s => s.stage === c.stage);
  const nextStage = stages[(currentIdx + 1) % stages.length];

  c.stage = nextStage.stage;
  c.progress = nextStage.progress;
  c.statusText = nextStage.label;
  c.updatedAt = new Date().toISOString().split('T')[0];

  saveCases();
  renderStats();
  renderCasesTable();
  adminToast(`تم تحديث مسار المعاملة [${ref}] إلى: ${nextStage.label} (${nextStage.progress}%)`);
};

window.deleteCase = function(ref) {
  if (confirm(`حذف مسار المعاملة [${ref}]؟`)) {
    cases = cases.filter(item => item.ref !== ref);
    saveCases();
    renderStats();
    renderCasesTable();
    adminToast(`تم حذف المعاملة [${ref}].`);
  }
};

function initNewInquiryForm() {
  const form = document.getElementById('addInquiryForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const newId = `REQ-${Math.floor(100 + Math.random() * 900)}`;
    const newReq = {
      id: newId,
      name: document.getElementById('newInqName').value.trim(),
      phone: document.getElementById('newInqPhone').value.trim(),
      email: document.getElementById('newInqEmail').value.trim() || 'unspecified@client.sa',
      service: document.getElementById('newInqService').value,
      urgency: document.getElementById('newInqUrgency').value,
      status: 'new',
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      details: document.getElementById('newInqDetails').value.trim()
    };

    inquiries.unshift(newReq);
    saveInquiries();
    renderStats();
    renderInquiriesTable();
    form.reset();
    document.getElementById('addInquiryModal')?.classList.remove('active');
    adminToast(`تمت إضافة الاستشارة الجديدة [${newId}] بنجاح.`);
  });
}

function initNewCaseForm() {
  const form = document.getElementById('addCaseForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const ref = document.getElementById('newCaseRef').value.trim().toUpperCase();
    const newCase = {
      ref: ref,
      client: document.getElementById('newCaseClient').value.trim(),
      service: document.getElementById('newCaseService').value.trim(),
      stage: 1,
      progress: 25,
      statusText: "استلام الطلب وحصر المستندات",
      updatedAt: new Date().toISOString().split('T')[0],
      advisor: "شهد إبراهيم محرم"
    };

    cases.unshift(newCase);
    saveCases();
    renderStats();
    renderCasesTable();
    form.reset();
    document.getElementById('addCaseModal')?.classList.remove('active');
    adminToast(`تم إنشاء مسار المعاملة [${ref}] بنجاح.`);
  });
}

window.exportInquiriesCSV = function() {
  let csv = "\uFEFFرقم الطلب,الاسم,الجوال,البريد,الخدمة,الاستعجال,الحالة,التاريخ\n";
  inquiries.forEach(i => {
    csv += `"${i.id}","${i.name}","${i.phone}","${i.email}","${i.service}","${i.urgency}","${i.status}","${i.date}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `shahd_legal_inquiries_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  adminToast("تم تصدير ملف البيانات (CSV) بنجاح!");
};

function initClock() {
  const clockEl = document.getElementById('adminLiveClock');
  if (!clockEl) return;
  function updateTime() {
    const now = new Date();
    clockEl.textContent = now.toLocaleDateString('ar-SA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  updateTime();
  setInterval(updateTime, 30000);
}

function adminToast(msg) {
  let toast = document.getElementById('adminToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'adminToast';
    toast.className = 'fixed bottom-5 left-5 z-50 bg-[#161F2B] text-white border border-[#C5A880] px-5 py-3 rounded-xl shadow-2xl text-xs flex items-center gap-2.5 transition-transform duration-300 translate-y-24';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="w-5 h-5 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center font-bold text-xs">✓</span>
    <span>${msg}</span>
  `;

  toast.classList.remove('translate-y-24');
  setTimeout(() => toast.classList.add('translate-y-24'), 3500);
}
