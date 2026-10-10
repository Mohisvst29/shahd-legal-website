/**
 * موقع المستشارة القانونية شهد إبراهيم محرم
 * المحرك البرمجي المتقدم للمؤثرات والحركات التفاعلية | Luxury FX & Logic
 */

// بيانات الخدمات القانونية التخصصية
const SERVICES_DATA = {
  1: {
    id: 1,
    title: "دراسة وتحليل القضايا والنزاعات",
    category: "studies",
    icon: "fa-magnifying-glass-chart",
    summary: "فحص شامل لكافة أوراق النزاع والمستندات الثبوتية واستنباط الحجج النظامية وبيان الموقف القانوني بدقة قبل البدء بأي إجراء قضائي.",
    details: "تتضمن هذه الخدمة دراسة متعمقة لكافة تفاصيل الملف القانوني، مراجعة الأدلة والقرائن وفق نظام الإثبات السعودي الجديد، وتقييم نقاط القوة والضعف في النزاع لتقديم تقرير استراتيجي متكامل يحدد أنسب المسارات القضائية أو الودية.",
    features: [
      "فحص مذكرات الخصوم والأحكام السابقة والوقائع",
      "تطبيق نصوص الأنظمة واللوائح القضائية المستقرة عليها المحاكم العليا",
      "إعداد تقرير فني شامل بالموقف القانوني ونسبة نجاح الدعوى",
      "رسم خطة استراتيجية للمرافعة أو الصلح القضائي"
    ],
    requirements: "نسخ من العقود، المراسلات، الأحكام والقرارات السابقة، وأي مستندات ثبوتية ذات صلة.",
    duration: "2 إلى 4 أيام عمل",
    defaultOption: "دراسة وتحليل قضية"
  },
  2: {
    id: 2,
    title: "تقديم الاستشارات القانونية المتخصصة",
    category: "consultations",
    icon: "fa-comments",
    summary: "استشارات فورية، مكتوبة، وشاملة في مختلف الفروع القانونية والنزاعات المالية والعمالية والتجارية لضمان سلامة خطواتكم.",
    details: "جلسات استشارية مرئية أو حضورية أو مذكرات رأي قانوني مكتوبة وموثقة، تجيب على كافة تساؤلاتك بدقة متناهية، وتحميك من الوقوع في أي التزامات أو تبعات مالية غير مدروسة.",
    features: [
      "جلسة استشارية مباشرة (عن بُعد عبر زووم/جوجل ميت أو حضورية)",
      "مذكرة رأي قانوني مكتوبة ومسببة نظامياً",
      "توضيح الإجراءات الوقائية والخطوات العملية الواجب اتخاذها",
      "إجابة فورية وتوضيح لكافة الاستفسارات اللاحقة للجلسة"
    ],
    requirements: "شرح موجز لموضوع الاستشارة مع المستندات الأساسية المؤيدة.",
    duration: "خلال 24 - 48 ساعة (أو فوري للحالات الطارئة)",
    defaultOption: "استشارة قانونية عامة"
  },
  3: {
    id: 3,
    title: "صياغة اللوائح والمذكرات الاعتراضية",
    category: "litigation",
    icon: "fa-file-signature",
    summary: "كتابة صحائف الدعوى، مذكرات الدفاع والرد، ولوائح الاستئناف والطعن والنقض مدعمة بالأسانيد الشرعية والنظامية القاطعة.",
    details: "صياغة المذكرات القانونية هي قلب العمل القضائي؛ نحرص على صياغة لغوية وقانونية رصينة ومحكمة تخاطب عقل الدائرة القضائية مباشرة، وتفنيد دفوع الخصم بدقة استناداً لأحدث المبادئ الصادرة عن المحكمة العليا.",
    features: [
      "صياغة صحائف الدعوى والطلبات العارضة",
      "تحرير مذكرات الجواب والدفوع الشكلية والموضوعية",
      "كتابة لوائح الاستئناف والاعتراض على الأحكام الابتدائية",
      "إعداد لوائح التماس إعادة النظر والطعن أمام المحكمة العليا"
    ],
    requirements: "صك الحكم الابتدائي، محاضر الضبط، والمذكرات السابقة في ملف الدعوى.",
    duration: "3 إلى 5 أيام عمل (مراعاة لمواعيد الاعتراض النظامية)",
    defaultOption: "صياغة لائحة أو مذكرة"
  },
  4: {
    id: 4,
    title: "صياغة وتوثيق العقود والاتفاقيات",
    category: "contracts",
    icon: "fa-file-contract",
    summary: "إعداد الاتفاقيات وعقود الشراكة والوساطة والتأسيس، مع إحكام الشروط الجزائية وتفادي الثغرات التي تؤدي للنزاعات المستقبلية.",
    details: "صياغة العقود التجارية والمدنية وفق نظام المعاملات المدنية ونظام الشركات السعودي الجديد، مع ضبط الالتزامات المتبادلة، وحالات الفسخ، والشرط الجزائي، وآليات فض النزاعات.",
    features: [
      "عقود التأسيس وملاحق تعديل قرارات الشركاء",
      "عقود الوساطة العقارية والتجارية وتقديم الخدمات",
      "اتفاقيات عدم الإفصاح وسرية المعلومات (NDA)",
      "عقود الامتياز التجاري (الفرنشايز) والتوزيع والشراكات الاستثمارية"
    ],
    requirements: "بيانات الأطراف، الشروط التجارية المتفق عليها، وطبيعة التزامات كل طرف.",
    duration: "2 إلى 4 أيام عمل",
    defaultOption: "صياغة أو مراجعة عقد"
  },
  5: {
    id: 5,
    title: "قيد ورفع الدعاوى والطلبات القضائية",
    category: "litigation",
    icon: "fa-landmark",
    summary: "تجهيز ملف الدعوى وقيده إلكترونياً لدى المحاكم واللجان شبه القضائية المختصة ومتابعة متطلبات الدوائر بدقة.",
    details: "استكمال كافة المتطلبات الإجرائية عبر منصات وزارة العدل (ناجز / ديوان المظالم / اللجان المصرفية والتأمينية)، واختيار المحكمة ذات الاختصاص النوعي والمكاني الصحيح لمنع رد الدعوى شكلياً.",
    features: [
      "تحديد الاختصاص القضائي الدقيق لمنع الدفوع بعدم الاختصاص",
      "صياغة وقائع وطلبات الدعوى في منصة ناجز",
      "رفع وإرفاق البينات وفق المعايير الإجرائية المعتمدة",
      "متابعة إحالة الدعوى وتحديد موعد الجلسة الأولى"
    ],
    requirements: "بيانات المدعي والمدعى عليه، ومستندات الإخطار أو التنبيه بالوفاء إن لزم.",
    duration: "خلال 24 إلى 48 ساعة من اكتمال الأوراق",
    defaultOption: "رفع طلب تنفيذ أو دعوى"
  },
  6: {
    id: 6,
    title: "رفع ومتابعة طلبات التنفيذ الجبري",
    category: "litigation",
    icon: "fa-gavel",
    summary: "إيداع السندات التنفيذية والأحكام والكمبيالات لدى محاكم التنفيذ واستكمال قرارات التنفيذ الجبري حتى استرداد كامل الحقوق.",
    details: "الاستفادة القصوى من نظام التنفيذ ولائحته التنفيذية لسرعة استصدار قرارات المادة (34) والمادة (46) ومتابعة إجراءات الإفصاح والحجز والمنع من السفر حتى تحصيل المبالغ المحكوم بها.",
    features: [
      "تدقيق السند التنفيذي (حكم، سند لأمر، عقد إيجار موحد، كمبيالة)",
      "قيد طلب التنفيذ عبر منصة ناجز التنفيذ",
      "متابعة إصدار القرارات التنفيذية ومذكرات الحجز",
      "التعامل مع منازعات التنفيذ الوقتية والموضوعية"
    ],
    requirements: "أصل السند التنفيذي أو صك الحكم المزيل بالصيغة التنفيذية ورقم هوية/سجل المنفذ ضده.",
    duration: "قيد فوري خلال 24 ساعة ومتابعة مستمرة",
    defaultOption: "رفع طلب تنفيذ أو دعوى"
  },
  7: {
    id: 7,
    title: "تدقيق ومراجعة المذكرات والمستندات",
    category: "contracts",
    icon: "fa-spell-check",
    summary: "مراجعة لغوية ونظامية وقانونية شاملة للعقود والمذكرات المحررة مسبقاً، واقتراح التعديلات والتوصيات الاحترازية لتلافي أي مخاطر.",
    details: "فحص مسودات العقود والمذكرات التي أعدتها جهات أخرى قبل توقيعها أو تقديمها للمحكمة، وكشف الثغرات المخفية وتعديل البنود المجحفة لضمان التوازن العقدي والامتثال للأنظمة.",
    features: [
      "كشف البنود الغامضة أو التي تحتمل تفسيرات متعددة",
      "تعديل الصياغات الضعيفة أو غير المتوافقة مع أحدث الأنظمة",
      "تقديم تقرير بملاحظات باللون الأحمر مع البدائل المقترحة",
      "مواءمة العقود مع الأنظمة السعودية الحديثة"
    ],
    requirements: "ملف المستند بصيغة قابلة للتعديل (Word أو PDF) وموجز بأهداف الطرفين.",
    duration: "1 إلى 3 أيام عمل",
    defaultOption: "أخرى"
  }
};

// تطبيق المظهر المفضل فوراً لمنع وميض الشاشة (Flash of Unstyled Theme)
(function applyInitialTheme() {
  const savedTheme = localStorage.getItem('shahd_theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
})();

// تهيئة التطبيق عند اكتمال تحميل المستند
document.addEventListener("DOMContentLoaded", () => {
  initThemeMode();
  applyDynamicSiteConfig();
  initCursorGlow();
  initHeroParticles();
  initScrollReveal();
  init3DTilt();
  initCounterStats();
  initButtonRipples();
  initServiceFilter();
  initNavbar();
  initMobileMenu();
  initServiceModals();
  initCostCalculator();
  initClientPortal();
  initConsultationForm();
  initFAQAccordion();
  initScrollAnimations();
});

/* -------------------------------------------------------------
   0. تطبيق إعدادات المنصة والهوية البصرية الحية (Dynamic Config Sync)
   ------------------------------------------------------------- */
function applyDynamicSiteConfig() {
  const storedConfig = localStorage.getItem('shahd_site_config');
  if (!storedConfig) return;
  try {
    const config = JSON.parse(storedConfig);

    // 1. الشعار وحجمه ونمط الدمج
    if (config.logo) {
      document.querySelectorAll('header img, footer img').forEach(img => {
        if (config.logo.url) img.src = config.logo.url;
        if (config.logo.height) img.style.height = `${config.logo.height}px`;
        if (config.logo.blendMode) img.style.mixBlendMode = config.logo.blendMode;
      });
    }

    // 2. صور الموقع (الهيرو، النبذة، المطرقة)
    if (config.images) {
      const hero = document.getElementById('hero');
      if (hero && config.images.heroBg) {
        hero.style.backgroundImage = `linear-gradient(rgba(13, 19, 31, 0.90), rgba(13, 19, 31, 0.95)), url('${config.images.heroBg}')`;
      }
      const portraitImg = document.querySelector('img[alt*="المستشارة والباحثة"]');
      if (portraitImg && config.images.portrait) portraitImg.src = config.images.portrait;

      const gavelImg = document.querySelector('img[alt*="مطرقة القاضي"]');
      if (gavelImg && config.images.lawGavel) gavelImg.src = config.images.lawGavel;
    }

    // 3. قنوات التواصل والروابط
    if (config.social) {
      if (config.social.whatsapp) {
        const cleanPhone = config.social.whatsapp.replace(/[^0-9]/g, '');
        document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
          try {
            const currentUrl = new URL(a.href, window.location.origin);
            const textParam = currentUrl.searchParams.get('text') || '';
            a.href = `https://wa.me/${cleanPhone}?text=${textParam}`;
          } catch(e) {}
        });
      }
      if (config.social.email) {
        document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
          a.href = `mailto:${config.social.email}`;
          if (a.textContent.includes('@')) a.textContent = config.social.email;
        });
      }
      if (config.social.linktree) {
        document.querySelectorAll('a[href*="linktr.ee"]').forEach(a => a.href = config.social.linktree);
      }
      if (config.social.twitter) {
        document.querySelectorAll('a[aria-label="X Twitter"]').forEach(a => a.href = config.social.twitter);
      }
      if (config.social.snapchat) {
        document.querySelectorAll('a[aria-label="Snapchat"]').forEach(a => a.href = config.social.snapchat);
      }
      if (config.social.linkedin) {
        document.querySelectorAll('a[aria-label="LinkedIn"]').forEach(a => a.href = config.social.linkedin);
      }
    }

    // 4. جدول المواعيد والأوقات المتاحة وحالة استقبال الاستشارات
    if (config.schedule) {
      // إشارة وتنبيه التفرغ وساعات العمل
      const consultForm = document.getElementById('consultationBookingForm') || document.querySelector('#practice-areas form');
      if (consultForm) {
        let scheduleBadge = document.getElementById('advisorScheduleBadge');
        if (!scheduleBadge) {
          scheduleBadge = document.createElement('div');
          scheduleBadge.id = 'advisorScheduleBadge';
          consultForm.prepend(scheduleBadge);
        }

        let statusText = "متاحة ومستعدة لاستقبال الاستشارات فوراً ✓";
        let statusBg = "bg-emerald-950/70 border-emerald-500/40 text-emerald-300";
        let dotColor = "bg-emerald-400";

        if (config.schedule.status === 'busy') {
          statusText = "جدول المواعيد ممتلئ جزئياً (المواعيد خلال 48 ساعة)";
          statusBg = "bg-amber-950/70 border-amber-500/40 text-amber-300";
          dotColor = "bg-amber-400";
        } else if (config.schedule.status === 'urgent_only') {
          statusText = "استقبال الاستشارات والطعون القضائية الطارئة فقط";
          statusBg = "bg-rose-950/70 border-rose-500/40 text-rose-300";
          dotColor = "bg-rose-400";
        }

        scheduleBadge.className = `p-2.5 rounded-lg border text-[11px] mb-3 flex items-center justify-between ${statusBg}`;
        scheduleBadge.innerHTML = `
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full ${dotColor} animate-pulse"></span>
            <span class="font-bold">${statusText}</span>
          </div>
          <span class="text-[10px] text-slate-300 font-mono">${config.schedule.workingDays || 'الأحد - الخميس'}</span>
        `;
      }

      // قائمة الفترات الزمنية الشاغرة
      if (config.schedule.slots && config.schedule.slots.length > 0) {
        const formServiceSelect = document.getElementById('serviceType');
        let slotSelect = document.getElementById('consultationPreferredSlot');
        const availableSlots = config.schedule.slots.filter(s => s.status === 'available');

        if (formServiceSelect && !slotSelect) {
          const slotDiv = document.createElement('div');
          slotDiv.id = 'slotDivWrapper';
          slotDiv.innerHTML = `
            <label class="block text-xs font-semibold text-white/95 mb-1" for="consultationPreferredSlot">الموعد المفضل للجلسة (الأوقات الشاغرة المتاحة حالياً):</label>
            <select class="w-full px-3.5 py-2.5 rounded bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E1217]" id="consultationPreferredSlot" name="preferredSlot">
              ${availableSlots.map(s => `<option value="${s.day} (${s.time})">${s.day} - ${s.time}</option>`).join('')}
              <option value="أي وقت متاح">أي موعد شاغر مناسب للمستشارة</option>
            </select>
          `;
          formServiceSelect.parentElement.after(slotDiv);
        } else if (slotSelect) {
          slotSelect.innerHTML = `
            ${availableSlots.map(s => `<option value="${s.day} (${s.time})">${s.day} - ${s.time}</option>`).join('')}
            <option value="أي وقت متاح">أي موعد شاغر مناسب للمستشارة</option>
          `;
        }
      }
    }

    // 5. آراء الموكلين المحدثة
    if (config.testimonials && config.testimonials.length > 0) {
      const testimonialsGrid = document.querySelector('#testimonials .grid');
      if (testimonialsGrid) {
        testimonialsGrid.innerHTML = config.testimonials.map(t => `
          <div class="bg-white p-7 rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between tilt-card reveal">
            <div class="space-y-3">
              <div class="flex text-[#C5A880] text-sm">
                ${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}
              </div>
              <p class="text-slate-700 text-sm leading-relaxed">"${t.text}"</p>
            </div>
            <div class="flex items-center gap-3.5 mt-6 pt-4 border-t border-stone-100">
              <div class="w-10 h-10 rounded-full bg-[#12161E] text-[#C5A880] flex items-center justify-center font-bold text-sm shadow">
                ${t.name.substring(0, 1)}
              </div>
              <div>
                <h4 class="font-bold text-sm text-[#141A22]">${t.name}</h4>
                <span class="text-xs text-slate-500">${t.role}</span>
              </div>
            </div>
          </div>
        `).join('');
      }
    }
  } catch (err) {
    console.warn("Error applying dynamic site config:", err);
  }
}

/* -------------------------------------------------------------
   1. هالة الإضاءة التفاعلية مع الماوس (Interactive Cursor Glow)
   ------------------------------------------------------------- */
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.innerWidth < 768) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderGlow() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderGlow);
  }
  requestAnimationFrame(renderGlow);
}

/* -------------------------------------------------------------
   2. جزيئات الذهب العائمة في قسم البداية (Hero Ambient Particles)
   ------------------------------------------------------------- */
function initHeroParticles() {
  const canvas = document.getElementById('heroParticlesCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particleCount = window.innerWidth < 768 ? 25 : 55;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.6,
      speedY: Math.random() * 0.35 + 0.12,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.2,
      fadeSpeed: Math.random() * 0.008 + 0.003
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.opacity += p.fadeSpeed;
      if (p.opacity > 0.7 || p.opacity < 0.15) {
        p.fadeSpeed = -p.fadeSpeed;
      }
      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(197, 168, 128, ${p.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(197, 168, 128, 0.4)';
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* -------------------------------------------------------------
   3. نظام ظهور العناصر الحركي مع التمرير (Scroll Reveal)
   ------------------------------------------------------------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------
   4. تأثير الإمالة ثلاثية الأبعاد (3D Interactive Tilt)
   ------------------------------------------------------------- */
function init3DTilt() {
  if (window.innerWidth < 1024) return; // تفعيل على شاشات سطح المكتب لضمان السلاسة

  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6; // إمالة ناعمة
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

/* -------------------------------------------------------------
   5. عداد الإحصائيات الحركي (Animated Counters)
   ------------------------------------------------------------- */
function initCounterStats() {
  const statNumbers = document.querySelectorAll('[data-counter-target]');
  if (!statNumbers.length) return;

  let hasAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(counter => {
          const target = +counter.getAttribute('data-counter-target');
          const prefix = counter.getAttribute('data-counter-prefix') || '';
          const suffix = counter.getAttribute('data-counter-suffix') || '';
          const duration = 1800;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing Out Quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentVal = Math.floor(easeProgress * target);

            counter.textContent = `${prefix}${currentVal}${suffix}`;
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = `${prefix}${target}${suffix}`;
            }
          }
          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-bar');
  if (statsSection) observer.observe(statsSection);
}

/* -------------------------------------------------------------
   6. تأثير التموج واللمعان للأزرار (Button Click Ripples)
   ------------------------------------------------------------- */
function initButtonRipples() {
  document.querySelectorAll('.btn-luxury, button[type="submit"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const circle = document.createElement('span');
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('ripple');

      const existingRipple = this.querySelector('.ripple');
      if (existingRipple) existingRipple.remove();

      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
}

/* -------------------------------------------------------------
   7. فلترة تصنيفات الخدمات القانونية (Service Category Filters)
   ------------------------------------------------------------- */
function initServiceFilter() {
  const filterBtns = document.querySelectorAll('[data-service-filter]');
  const serviceCards = document.querySelectorAll('.service-item-wrapper');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-service-filter');

      // تبديل الأزرار النشطة
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#C5A880]', 'text-[#0E1217]', 'font-bold');
        b.classList.add('bg-white', 'text-slate-700', 'border-stone-200');
      });
      btn.classList.add('bg-[#C5A880]', 'text-[#0E1217]', 'font-bold');
      btn.classList.remove('bg-white', 'text-slate-700', 'border-stone-200');

      serviceCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (targetCategory === 'all' || cardCat === targetCategory) {
          card.classList.remove('hidden-filter');
          card.style.display = '';
        } else {
          card.classList.add('hidden-filter');
          setTimeout(() => {
            if (card.classList.contains('hidden-filter')) {
              card.style.display = 'none';
            }
          }, 350);
        }
      });
    });
  });
}

/* -------------------------------------------------------------
   8. شريط التنقل وتأثيرات التمرير
   ------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector('[data-purpose="site-header"]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('shadow-lg', 'bg-white/95');
      header?.classList.remove('bg-[#FAF7F2]/95');
    } else {
      header?.classList.remove('shadow-lg', 'bg-white/95');
      header?.classList.add('bg-[#FAF7F2]/95');
    }

    // Scroll Spy: Highlight active nav link
    const scrollPos = window.scrollY + 200;
    document.querySelectorAll('section[id]').forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-[#9C7A4A]', 'border-[#9C7A4A]');
            link.classList.remove('border-transparent', 'text-slate-800');
          } else {
            link.classList.remove('text-[#9C7A4A]', 'border-[#9C7A4A]');
            link.classList.add('border-transparent', 'text-slate-800');
          }
        });
      }
    });
  });
}

/* -------------------------------------------------------------
   9. القائمة الجانبية للشاشات الصغيرة والتحكم المتجاوب للجوال
   ------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (!toggleBtn || !menu) return;

  function closeMenu() {
    menu.classList.add('hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
    const icon = toggleBtn.querySelector('i');
    if (icon) icon.className = 'fa-solid fa-bars text-2xl';
  }

  function openMenu() {
    menu.classList.remove('hidden');
    toggleBtn.setAttribute('aria-expanded', 'true');
    const icon = toggleBtn.querySelector('i');
    if (icon) icon.className = 'fa-solid fa-xmark text-2xl';
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // إغلاق القائمة عند النقر خارجها
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target) && !menu.classList.contains('hidden')) {
      closeMenu();
    }
  });

  // إغلاق القائمة بمفتاح Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
      closeMenu();
    }
  });
}

/* -------------------------------------------------------------
   9.1 نظام التبديل بين الوضع الليلي والوضع النهاري (Light & Dark Mode)
   ------------------------------------------------------------- */
function initThemeMode() {
  const toggleButtons = document.querySelectorAll('.theme-toggle-btn, [data-action="toggle-theme"]');

  function updateThemeUI(isLight) {
    toggleButtons.forEach(btn => {
      const icon = btn.querySelector('.theme-icon i') || btn.querySelector('i');
      const text = btn.querySelector('.theme-toggle-text');
      if (icon) {
        if (isLight) {
          icon.className = 'fa-solid fa-sun text-amber-500';
        } else {
          icon.className = 'fa-solid fa-moon text-[#C5A880]';
        }
      }
      if (text) {
        text.textContent = isLight ? 'الوضع النهاري' : 'الوضع الليلي';
      }
      btn.setAttribute('title', isLight ? 'التبديل إلى الوضع الليلي' : 'التبديل إلى الوضع النهاري');
      btn.setAttribute('aria-label', isLight ? 'التبديل إلى الوضع الليلي' : 'التبديل إلى الوضع النهاري');
    });
  }

  // مزامنة حالة الأزرار مع الوضع الحالي
  const isCurrentlyLight = document.documentElement.classList.contains('light');
  updateThemeUI(isCurrentlyLight);

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentIsLight = document.documentElement.classList.contains('light');
      const nextIsLight = !currentIsLight;

      if (nextIsLight) {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        localStorage.setItem('shahd_theme', 'light');
        showToast('تم تفعيل الوضع النهاري الفاخر ☀️');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('shahd_theme', 'dark');
        showToast('تم تفعيل الوضع الليلي الملكي 🌙');
      }

      updateThemeUI(nextIsLight);
    });
  });
}

/* -------------------------------------------------------------
   10. نافذة تفاصيل الخدمة التفاعلية (Service Modal)
   ------------------------------------------------------------- */
function initServiceModals() {
  const modalOverlay = document.getElementById('serviceModalOverlay');
  const modalClose = document.getElementById('closeServiceModal');
  const modalBody = document.getElementById('serviceModalContent');
  const bookBtn = document.getElementById('modalBookServiceBtn');

  if (!modalOverlay || !modalBody) return;

  document.querySelectorAll('[data-service-id]').forEach(card => {
    card.addEventListener('click', () => {
      const serviceId = card.getAttribute('data-service-id');
      openServiceModal(serviceId);
    });
  });

  function openServiceModal(id) {
    const service = SERVICES_DATA[id];
    if (!service) return;

    modalBody.innerHTML = `
      <div class="flex items-start gap-4 pb-4 border-b border-stone-200">
        <div class="w-14 h-14 rounded-xl bg-[#FAF7F2] border border-[#DFC39E] flex items-center justify-center text-[#9C7A4A] text-2xl flex-shrink-0 shadow-inner">
          <i class="fa-solid ${service.icon}"></i>
        </div>
        <div>
          <span class="text-xs font-bold text-[#9C7A4A] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#DFC39E]/50">الخدمة #${service.id}</span>
          <h3 class="font-serif-title text-2xl font-bold text-[#141A22] mt-1">${service.title}</h3>
        </div>
      </div>
      
      <div class="py-4 space-y-4 text-sm text-slate-700 leading-relaxed">
        <p class="text-slate-800 font-medium">${service.details}</p>
        
        <div>
          <h4 class="font-bold text-[#141A22] mb-2 text-sm flex items-center gap-2">
            <i class="fa-solid fa-list-check text-[#C5A880]"></i>
            ما تشمله هذه الخدمة بالتفصيل:
          </h4>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 pr-1">
            ${service.features.map(f => `<li class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-[#FAF7F2] text-[#9C7A4A] border border-[#DFC39E] flex items-center justify-center text-[10px]">✓</span> ${f}</li>`).join('')}
          </ul>
        </div>

        <div class="bg-[#FAF7F2] p-3.5 rounded-lg border border-[#E5DAC8] text-xs space-y-2 shadow-sm">
          <div class="flex items-start gap-2">
            <span class="font-bold text-[#9C7A4A] flex-shrink-0">المستندات المطلوبة:</span>
            <span>${service.requirements}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-[#9C7A4A]">المدة الزمنية المتوقعة:</span>
            <span class="font-semibold text-slate-800">${service.duration}</span>
          </div>
        </div>
      </div>
    `;

    if (bookBtn) {
      bookBtn.onclick = () => {
        closeModal();
        selectServiceInForm(service.defaultOption);
      };
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
  });
}

function selectServiceInForm(serviceOptionName) {
  const formSelect = document.getElementById('serviceType');
  const formSection = document.getElementById('consultation-quote');

  if (formSelect && serviceOptionName) {
    for (let i = 0; i < formSelect.options.length; i++) {
      if (formSelect.options[i].text.includes(serviceOptionName) || formSelect.options[i].value.includes(serviceOptionName)) {
        formSelect.selectedIndex = i;
        break;
      }
    }
  }

  formSection?.scrollIntoView({ behavior: 'smooth' });
  const nameInput = document.getElementById('fullName');
  setTimeout(() => nameInput?.focus(), 400);
}

/* -------------------------------------------------------------
   11. حاسبة تقدير الخدمات والاستشارات القانونية
   ------------------------------------------------------------- */
function initCostCalculator() {
  const calcForm = document.getElementById('feeCalcForm');
  const resultCard = document.getElementById('calcResultCard');
  const resultSummary = document.getElementById('calcResultSummary');
  const resultTimeline = document.getElementById('calcResultTimeline');
  const resultActionBtn = document.getElementById('calcActionBtn');

  if (!calcForm) return;

  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const serviceType = document.getElementById('calcService').value;
    const urgency = document.getElementById('calcUrgency').value;
    const complexity = document.getElementById('calcComplexity').value;

    let timeText = "2 إلى 4 أيام عمل";
    let scopeText = "دراسة مخصصة ومسببة وفق الأنظمة";

    if (urgency === 'urgent') {
      timeText = "خلال 24 إلى 48 ساعة كأولوية قصوى";
    } else if (urgency === 'same-day') {
      timeText = "فوري خلال نفس اليوم (خلال ساعات الدوام)";
    }

    if (serviceType === 'consultation') {
      scopeText = "جلسة استشارية متعمقة مع مذكرة رأي نظامي مكتوبة وتفنيد للمسائل المطروحة.";
    } else if (serviceType === 'contract') {
      scopeText = "صياغة عقد نموذجي محكم الثغرات والشروط الجزائية ومراجعته نظامياً.";
    } else if (serviceType === 'appeal') {
      scopeText = "إعداد لائحة اعتراضية مسببة بأسانيد المحكمة العليا ونصوص اللوائح التنفيذية.";
    } else if (serviceType === 'study') {
      scopeText = "دراسة ملف النزاع بالكامل، فحص البينات، وتقديم تقرير مفصل بفرص كسب القضية.";
    }

    resultSummary.innerHTML = `
      <div class="space-y-1">
        <div class="text-sm font-bold text-white">${scopeText}</div>
        <div class="text-xs text-[#C5A880]">تقدير الأتعاب يعتمد على حجم المستندات ودقة النزاع وفق المعايير المهنية.</div>
      </div>
    `;
    resultTimeline.textContent = timeText;

    const waText = encodeURIComponent(`السلام عليكم أستاذة شهد، أرغب في حجز خدمة [${document.getElementById('calcService').options[document.getElementById('calcService').selectedIndex].text}] - مستوى الاستعجال: [${document.getElementById('calcUrgency').options[document.getElementById('calcUrgency').selectedIndex].text}] - طبيعة الملف: [${document.getElementById('calcComplexity').options[document.getElementById('calcComplexity').selectedIndex].text}].`);
    resultActionBtn.href = `https://wa.me/?text=${waText}`;

    resultCard.classList.remove('hidden');
    resultCard.classList.add('reveal', 'active');
    showToast("تم احتساب التقدير المبدئي بنجاح!");
  });
}

/* -------------------------------------------------------------
   12. محاكي بوابة الموكلين ومتابعة المعاملات
   ------------------------------------------------------------- */
function initClientPortal() {
  const portalForm = document.getElementById('portalLookupForm');
  const portalResult = document.getElementById('portalResult');
  const portalRefInput = document.getElementById('portalRefNumber');

  if (!portalForm || !portalResult) return;

  portalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = portalRefInput.value.trim().toUpperCase() || "SH-2025-01";

    // جلب المعاملات الحية من لوحة التحكم
    let storedCases = JSON.parse(localStorage.getItem('shahd_cases')) || [];
    let matchedCase = storedCases.find(c => c.ref.toUpperCase() === query || (c.client && c.client.includes(query)));

    if (!matchedCase) {
      matchedCase = {
        ref: query,
        client: "طلب استشاري مباشر",
        service: "دراسة وتدقيق المعاملة",
        stage: 3,
        progress: 75,
        statusText: "الصياغة والتدقيق النهائي",
        updatedAt: new Date().toISOString().split('T')[0],
        advisor: "شهد إبراهيم محرم"
      };
    }

    const stage1Completed = matchedCase.stage >= 1;
    const stage2Completed = matchedCase.stage >= 2;
    const stage3Current = matchedCase.stage === 3;
    const stage3Completed = matchedCase.stage > 3;
    const stage4Completed = matchedCase.stage === 4;

    portalResult.innerHTML = `
      <div class="bg-[#17202B] border border-[#C5A880]/40 rounded-xl p-5 text-right space-y-4 shadow-2xl reveal active">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#2B3746] pb-3">
          <div>
            <span class="text-xs text-slate-400">رقم المرجع الاستشاري:</span>
            <span class="text-sm font-bold text-[#C5A880] mr-1 font-mono">${matchedCase.ref}</span>
            <span class="text-xs text-slate-300 mr-2">(${matchedCase.service})</span>
          </div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${matchedCase.progress === 100 ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'} text-xs font-semibold">
            <span class="w-2 h-2 rounded-full ${matchedCase.progress === 100 ? 'bg-emerald-400' : 'bg-amber-400 animate-ping'}"></span>
            ${matchedCase.statusText}
          </span>
        </div>

        <div class="space-y-2">
          <div class="flex justify-between text-xs text-slate-300">
            <span>نسبة إنجاز المعاملة:</span>
            <span class="font-bold text-[#C5A880] font-mono">${matchedCase.progress}%</span>
          </div>
          <div class="w-full bg-[#0E1217] h-2.5 rounded-full overflow-hidden p-0.5 border border-[#2B3746]">
            <div class="bg-gradient-to-l from-[#C5A880] to-[#E5D6C1] h-full rounded-full transition-all duration-1000" style="width: ${matchedCase.progress}%;"></div>
          </div>
        </div>

        <!-- المراحل الإجرائية -->
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs pt-1">
          <div class="p-2.5 rounded ${stage1Completed ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300' : 'bg-[#0E1217] text-slate-500'}">
            <div class="font-bold">1. استلام الطلب</div>
            <div class="text-[10px] text-emerald-400">${stage1Completed ? 'مكتمل ✓' : 'قيد الانتظار'}</div>
          </div>
          <div class="p-2.5 rounded ${stage2Completed ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300' : (matchedCase.stage === 2 ? 'bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#E5D6C1] animate-pulse' : 'bg-[#0E1217] text-slate-500')}">
            <div class="font-bold">2. فحص المستندات</div>
            <div class="text-[10px] ${stage2Completed ? 'text-emerald-400' : (matchedCase.stage === 2 ? 'text-[#C5A880]' : '')}">${stage2Completed ? 'مكتمل ✓' : (matchedCase.stage === 2 ? 'المرحلة الحالية ⚙' : 'قيد الانتظار')}</div>
          </div>
          <div class="p-2.5 rounded ${stage3Completed ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300' : (stage3Current ? 'bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#E5D6C1] animate-pulse' : 'bg-[#0E1217] text-slate-500')}">
            <div class="font-bold">3. الصياغة والتدقيق</div>
            <div class="text-[10px] ${stage3Completed ? 'text-emerald-400' : (stage3Current ? 'text-[#C5A880]' : '')}">${stage3Completed ? 'مكتمل ✓' : (stage3Current ? 'المرحلة الحالية ⚙' : 'قيد الانتظار')}</div>
          </div>
          <div class="p-2.5 rounded ${stage4Completed ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300' : 'bg-[#0E1217] border border-[#2B3746] text-slate-400'}">
            <div class="font-bold">4. التسليم النهائي</div>
            <div class="text-[10px] ${stage4Completed ? 'text-emerald-400' : ''}">${stage4Completed ? 'تم التسليم ✓' : 'قيد الانتظار'}</div>
          </div>
        </div>

        <div class="text-xs text-slate-400 bg-[#0E1217] p-3 rounded-lg border border-[#26303C] flex items-center justify-between">
          <span>المستشارة المشرفة: <strong>${matchedCase.advisor || 'شهد إبراهيم محرم'}</strong></span>
          <a href="https://wa.me/?text=${encodeURIComponent('السلام عليكم أستاذة شهد، أستفسر عن مستجدات المعاملة رقم ' + matchedCase.ref)}" class="text-[#C5A880] hover:underline font-semibold flex items-center gap-1.5" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-whatsapp text-emerald-400 text-sm"></i>
            تواصل بخصوص هذا الطلب
          </a>
        </div>
      </div>
    `;

    portalResult.classList.remove('hidden');
    showToast("تم جلب بيانات المعاملة بنجاح!");
  });

  // استعلام تلقائي إذا تم تمرير trackRef في الرابط
  const urlParams = new URLSearchParams(window.location.search);
  const trackRef = urlParams.get('trackRef');
  if (trackRef && portalRefInput) {
    portalRefInput.value = trackRef;
    setTimeout(() => {
      portalForm.dispatchEvent(new Event('submit'));
      const portalEl = document.getElementById('portal');
      if (portalEl) portalEl.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  }
}

/* -------------------------------------------------------------
   13. معالجة نموذج طلب الاستشارة القانونية والتحويل لصفحة الشكر
   ------------------------------------------------------------- */
function initConsultationForm() {
  const form = document.getElementById('consultationForm') || document.getElementById('consultationBookingForm');
  const noticeSuccess = document.getElementById('formSuccessNotice');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName')?.value.trim() || "موكل كريم";
    const email = document.getElementById('email')?.value.trim() || "";
    const phone = document.getElementById('phone')?.value.trim() || "";
    const serviceType = document.getElementById('serviceType')?.value || "استشارة قانونية";
    const preferredSlot = document.getElementById('consultationPreferredSlot')?.value || "أي موعد شاغر مناسب للمستشارة";
    const details = document.getElementById('details')?.value.trim() || "";

    // إنشاء رقم مرجع معتمد للمعاملة
    const refNumber = `SH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    // 1. حفظ الطلب في التخزين المحلي للوحة التحكم (shahd_inquiries)
    try {
      let storedInquiries = JSON.parse(localStorage.getItem('shahd_inquiries')) || [];
      storedInquiries.unshift({
        id: refNumber,
        name: fullName,
        phone: phone,
        email: email,
        service: serviceType,
        slot: preferredSlot,
        urgency: "normal",
        status: "new",
        date: new Date().toISOString().replace('T', ' ').substring(0, 16),
        details: `[الموعد المفضل: ${preferredSlot}]\n${details}`
      });
      localStorage.setItem('shahd_inquiries', JSON.stringify(storedInquiries));
    } catch (err) {
      console.warn("Inquiries storage error:", err);
    }

    // 2. إنشاء مسار استعلام تلقائي في بوابة الموكلين (shahd_cases)
    try {
      let storedCases = JSON.parse(localStorage.getItem('shahd_cases')) || [];
      storedCases.unshift({
        ref: refNumber,
        client: fullName,
        service: `${serviceType} — [${preferredSlot}]`,
        stage: 1,
        progress: 25,
        statusText: "تم استلام الطلب وبانتظار انعقاد الجلسة",
        updatedAt: new Date().toISOString().substring(0, 10),
        advisor: "شهد إبراهيم محرم"
      });
      localStorage.setItem('shahd_cases', JSON.stringify(storedCases));
    } catch (err) {
      console.warn("Cases storage error:", err);
    }

    // 3. تخزين بيانات الاستمارة للجلسة لعرضها في صفحة الشكر
    const submissionData = {
      ref: refNumber,
      name: fullName,
      phone: phone,
      email: email,
      service: serviceType,
      slot: preferredSlot,
      details: details
    };

    try {
      sessionStorage.setItem('shahd_latest_submission', JSON.stringify(submissionData));
    } catch (err) {
      console.warn(err);
    }

    // زر التحميل والمؤثرات
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i class="fa-solid fa-circle-notch fa-spin text-sm text-[#C5A880]"></i>
        <span>جاري تأكيد الموعد وتجهيز الإشعار...</span>
      `;
    }

    showToast("تم استلام طلبكم بنجاح! جاري تحويلكم لصفحة التأكيد...");

    // التحويل السلس لصفحة الشكر المخصصة
    setTimeout(() => {
      window.location.href = `thank-you.html?ref=${encodeURIComponent(refNumber)}`;
    }, 600);
  });
}

/* -------------------------------------------------------------
   14. الأسئلة الشائعة (Accordion)
   ------------------------------------------------------------- */
function initFAQAccordion() {
  const faqButtons = document.querySelectorAll('[data-faq-toggle]');

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      faqButtons.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherBtn.nextElementSibling?.classList.add('hidden');
          otherBtn.querySelector('.faq-icon')?.classList.remove('rotate-180');
        }
      });

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        content?.classList.add('hidden');
        icon?.classList.remove('rotate-180');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        content?.classList.remove('hidden');
        icon?.classList.add('rotate-180');
      }
    });
  });
}

/* -------------------------------------------------------------
   15. تأثيرات التمرير ونظام الإشعارات اللحظية (Toasts)
   ------------------------------------------------------------- */
function initScrollAnimations() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      scrollTopBtn?.classList.remove('opacity-0', 'pointer-events-none');
      scrollTopBtn?.classList.add('opacity-100');
    } else {
      scrollTopBtn?.classList.remove('opacity-100');
      scrollTopBtn?.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function showToast(message) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'toast bg-[#151C24] text-white border border-[#C5A880] px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 text-sm z-50';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="w-6 h-6 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center text-xs">✓</span>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
