export type Language = 'en' | 'ar'

export interface Dictionary {
  brand: { name: string; tag: string }
  langToggle: string
  nav: { about: string; services: string; work: string; process: string; contact: string }
  whatsappCta: string
  whatsappMessage: string
  callUs: string
  hero: {
    overline: string
    titleA: string
    titleEm: string
    sub: string
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    overline: string
    title: string
    p1: string
    p2: string
    highlights: { lead: string; rest: string }[]
    founderRole: string
    imgMainAlt: string
    imgDetailAlt: string
  }
  services: {
    overline: string
    title: string
    subtitle: string
    items: { title: string; blurb: string }[]
  }
  quote: { text: string; attribution: string }
  portfolio: {
    overline: string
    title: string
    subtitle: string
    all: string
    categories: Record<string, string>
    projects: Record<string, string>
    caption: string
  }
  process: {
    overline: string
    title: string
    subtitle: string
    steps: { title: string; text: string }[]
  }
  clientele: {
    overline: string
    title: string
    subtitle: string
    items: { title: string; text: string }[]
  }
  contact: {
    overline: string
    title: string
    sub: string
    whatsappButton: string
    info: { label: string; value: string; caption: string; isPhone?: boolean }[]
  }
  footer: {
    blurb: string
    servicesHeading: string
    exploreHeading: string
    contactHeading: string
    whatsappLine: string
    rights: string
    craftedIn: string
    backToTop: string
  }
  fabLabel: string
  city: string
}

const en: Dictionary = {
  brand: { name: 'Mraish', tag: 'Furniture · Amman' },
  langToggle: 'عربي',
  nav: { about: 'About', services: 'Services', work: 'Work', process: 'Process', contact: 'Contact' },
  whatsappCta: 'WhatsApp',
  whatsappMessage:
    'Hello Mraish Furniture — I found your website and would like to discuss a project.',
  callUs: 'Call us',
  hero: {
    overline: 'Bespoke furniture & interior craft — Amman, Jordan',
    titleA: 'Everything a beautiful space needs — crafted by ',
    titleEm: 'one workshop.',
    sub: 'Carpentry, upholstery, glass, aluminum, drapery, painting and lighting — Mraish Furniture takes your space from first sketch to final installed detail, under one roof in Amman.',
    ctaPrimary: 'Start your project',
    ctaSecondary: 'See the craft',
  },
  about: {
    overline: 'The atelier',
    title: 'Eight trades. One workshop. One standard.',
    p1: 'Mraish Furniture is the workshop of Omar Mraish, an Amman craftsman whose work spans everything a finished room needs — carpentry, upholstery, glass, aluminum, drapery, painting and lighting, held together by a designer’s eye.',
    p2: 'Because every trade lives under one roof, there are no subcontractor gaps and no weeks lost between steps — just one person accountable for the result, from the first site visit to the final installed detail.',
    highlights: [
      { lead: 'Made to measure', rest: 'built for your room, not for a catalogue.' },
      { lead: 'Restore or renew', rest: 'reupholstery and refinishing of the pieces you already love.' },
      { lead: 'Start to finish', rest: 'design, build, install and hand over — one accountable team.' },
    ],
    founderRole: 'Founder & master craftsman',
    imgMainAlt: 'Sketching a bespoke piece at the drafting table',
    imgDetailAlt: 'Finished interior detail',
  },
  services: {
    overline: 'What we do',
    title: 'Every craft a finished room needs',
    subtitle:
      'No subcontractors and no hand-offs — each trade is done by our own hands, so the details line up and the timeline holds.',
    items: [
      {
        title: 'Carpentry',
        blurb:
          'Bespoke joinery, doors, wardrobes, kitchens and one-off furniture — cut, assembled and finished in our own workshop.',
      },
      {
        title: 'Upholstery',
        blurb:
          'Sofas and chairs built or rebuilt from the frame up, dressed in fabrics chosen to look beautiful and live long.',
      },
      {
        title: 'Interior & Exterior Design',
        blurb:
          'Complete design and decoration for interiors and facades — concept, materials and execution by one accountable team.',
      },
      {
        title: 'Glass Works',
        blurb:
          'Mirrors, partitions, balustrades, shopfronts and tabletops — measured to the millimetre, cut and installed cleanly.',
      },
      {
        title: 'Aluminum Works',
        blurb:
          'Doors, windows, frames and cladding with clean lines and tight seals, made for Jordan’s climate.',
      },
      {
        title: 'Drapery',
        blurb:
          'Curtains, sheers and blinds tailored to fall exactly right — hardware, pleating and hanging included.',
      },
      {
        title: 'Painting',
        blurb:
          'Furniture refinishing and full residential painting — stains, lacquers and wall finishes with a flawless final coat.',
      },
      {
        title: 'Lighting Works',
        blurb:
          'Lighting planned, supplied and installed to flatter the room — ambient, task and accent, wired safely.',
      },
    ],
  },
  quote: {
    text: 'Bring us a photo, a fabric, an idea — we will build it as if it were going into our own home.',
    attribution: 'Omar Mraish · Founder',
  },
  portfolio: {
    overline: 'Selected work',
    title: 'The proof is in the pieces',
    subtitle: 'A glimpse of the joinery, upholstery and finishing that leaves our Amman workshop.',
    all: 'All',
    categories: {
      joinery: 'Joinery',
      upholstery: 'Upholstery',
      drapery: 'Drapery',
      lighting: 'Lighting',
      glass: 'Glass & Aluminum',
      design: 'Design & Decoration',
      workshop: 'Workshop',
    },
    projects: {
      kitchen: 'Bespoke kitchen & cabinetry',
      living: 'Living room reupholstery',
      dining: 'Dining suite in velvet & walnut',
      drapery: 'Full-height drapery',
      lighting: 'Layered lighting design',
      stair: 'Glass & metal stairwell',
      facade: 'Villa facade refresh',
      suite: 'Master suite interior',
      workshop: 'Inside the Mraish workshop',
    },
    caption:
      'Representative imagery. Full project photography is available on WhatsApp — ask to see work similar to yours.',
  },
  process: {
    overline: 'How we work',
    title: 'From first visit to final polish',
    subtitle:
      'A simple, predictable path — you always know what happens next and who is responsible. (Hint: it’s us.)',
    steps: [
      {
        title: 'Consult & measure',
        text: 'We visit, listen, measure and advise — bring photos, plans or just an idea.',
      },
      {
        title: 'Design & materials',
        text: 'You approve the design, fabrics, woods and finishes before anything is cut.',
      },
      {
        title: 'Craft in our workshop',
        text: 'Joinery, upholstery, glass and finishing happen under one roof, under our eyes.',
      },
      {
        title: 'Deliver & install',
        text: 'We deliver, install, light and paint — then hand over a finished space, not a kit.',
      },
    ],
  },
  clientele: {
    overline: 'Who we serve',
    title: 'At home in demanding rooms',
    subtitle:
      'From diplomatic residences to family villas, our work lives in rooms where the standard is non-negotiable.',
    items: [
      {
        title: 'Diplomatic missions & embassies',
        text: 'Discreet, punctual and precise — from reupholstering a residence’s sofas to fitting out reception rooms that host the world.',
      },
      {
        title: 'Private homes & villas',
        text: 'Bespoke pieces and full interior refits for families who want furniture made for their rooms, not for a showroom.',
      },
      {
        title: 'Hotels, offices & commercial',
        text: 'Durable, repairable furnishing and finishing for spaces that have to work hard, every single day.',
      },
    ],
  },
  contact: {
    overline: 'Contact',
    title: 'Let’s build something that lasts.',
    sub: 'Send a photo, a plan or just an idea — you’ll get a fast, honest answer about what it takes and what it costs.',
    whatsappButton: 'WhatsApp',
    info: [
      {
        label: 'Phone & WhatsApp',
        value: '+962 7 8180 0068',
        caption: 'Photos, plans and voice notes welcome',
        isPhone: true,
      },
      { label: 'Workshop', value: 'Amman, Jordan', caption: 'Serving clients across the Kingdom' },
      { label: 'Founder', value: 'Omar Mraish', caption: 'Carpenter, upholsterer, finisher' },
    ],
  },
  footer: {
    blurb:
      'Bespoke furniture and complete interior finishing, made by one workshop in Amman — from first sketch to final installation.',
    servicesHeading: 'Services',
    exploreHeading: 'Explore',
    contactHeading: 'Contact',
    whatsappLine: 'WhatsApp — photos & voice notes welcome',
    rights: 'All rights reserved.',
    craftedIn: 'Crafted in Amman, Jordan',
    backToTop: 'Back to top',
  },
  fabLabel: 'Chat on WhatsApp',
  city: 'Amman, Jordan',
}

const ar: Dictionary = {
  brand: { name: 'مريش', tag: 'للأثاث · عمّان' },
  langToggle: 'English',
  nav: { about: 'من نحن', services: 'خدماتنا', work: 'أعمالنا', process: 'كيف نعمل', contact: 'تواصل' },
  whatsappCta: 'واتساب',
  whatsappMessage: 'مرحباً مريش للأثاث — رأيت موقعكم وأود مناقشة مشروع.',
  callUs: 'اتصل بنا',
  hero: {
    overline: 'أثاث مفصّل وحِرَف داخلية — عمّان، الأردن',
    titleA: 'كل ما يحتاجه المكان الجميل — تصنعه ',
    titleEm: 'ورشة واحدة.',
    sub: 'نجارة، تنجيد، زجاج، ألمنيوم، ستائر، دهان وإنارة — مريش للأثاث تأخذ مساحتك من أول رسمة حتى آخر تفصيلة مركّبة، تحت سقف واحد في عمّان.',
    ctaPrimary: 'ابدأ مشروعك',
    ctaSecondary: 'شاهد أعمالنا',
  },
  about: {
    overline: 'الورشة',
    title: 'ثماني حِرَف. ورشة واحدة. معيار واحد.',
    p1: 'مريش للأثاث هي ورشة عمر مريش في عمّان، وتغطي أعماله كل ما تحتاجه الغرفة المكتملة — نجارة وتنجيد وزجاج وألمنيوم وستائر ودهان وإنارة، تجمعها عينُ مصمّم.',
    p2: 'لأن كل الحِرَف تعيش تحت سقف واحد، لا فجوات مقاولين ولا أسابيع ضائعة بين الخطوات — شخص واحد مسؤول عن النتيجة، من أول زيارة للموقع حتى آخر تفصيلة مركّبة.',
    highlights: [
      { lead: 'على المقاس', rest: 'يُصنع لغرفتك أنت، لا لكتالوج.' },
      { lead: 'ترميم أو تجديد', rest: 'إعادة تنجيد وتشطيب القطع التي تحبها.' },
      { lead: 'من البداية للنهاية', rest: 'تصميم وتصنيع وتركيب وتسليم — فريق واحد مسؤول.' },
    ],
    founderRole: 'المؤسس والحرفي الأول',
    imgMainAlt: 'رسم قطعة مفصّلة على طاولة التصميم',
    imgDetailAlt: 'تفصيلة داخلية منجزة',
  },
  services: {
    overline: 'ماذا نعمل',
    title: 'كل حرفة تحتاجها الغرفة المكتملة',
    subtitle: 'بلا مقاولي باطن وبلا تسليمات بين أطراف — كل حرفة تُنجز بأيدينا، فتتطابق التفاصيل ويثبت الموعد.',
    items: [
      {
        title: 'النجارة',
        blurb: 'أعمال خشبية مفصّلة: أبواب، خزائن، مطابخ وقطع أثاث فريدة — تُقصّ وتُجمَّع وتُشطَّب في ورشتنا.',
      },
      {
        title: 'التنجيد',
        blurb: 'كنب وكراسٍ تُبنى أو يُعاد بناؤها من الهيكل، بأقمشة مختارة لتُبهج العين وتعيش طويلاً.',
      },
      {
        title: 'التصميم الداخلي والخارجي',
        blurb: 'تصميم وديكور متكامل للمساحات والواجهات — فكرة ومواد وتنفيذ من فريق واحد مسؤول.',
      },
      {
        title: 'أعمال الزجاج',
        blurb: 'مرايا وقواطع ودرابزين وواجهات محلات وأسطح طاولات — قياس بالمليمتر وتركيب نظيف.',
      },
      {
        title: 'أعمال الألمنيوم',
        blurb: 'أبواب ونوافذ وإطارات وتكسيات بخطوط نظيفة وإحكام تام — مصنوعة لمناخ الأردن.',
      },
      {
        title: 'الستائر',
        blurb: 'ستائر وشيفون وبرادي مفصّلة لتنسدل كما يجب — مع الإكسسوارات والتركيب.',
      },
      {
        title: 'الدهان',
        blurb: 'إعادة تشطيب الأثاث ودهان المساحات السكنية — أصباغ ولكر وتشطيبات جدران بلمسة نهائية مثالية.',
      },
      {
        title: 'أعمال الإنارة',
        blurb: 'إنارة تُخطَّط وتُورَّد وتُركَّب لتُظهر جمال المكان — عامة ومهامّ وموجَّهة، بتمديد آمن.',
      },
    ],
  },
  quote: {
    text: 'أحضِر لنا صورة، قماشة، فكرة — وسنصنعها كما لو كانت ستدخل بيتنا نحن.',
    attribution: 'عمر مريش · المؤسس',
  },
  portfolio: {
    overline: 'من أعمالنا',
    title: 'الدليل في القطع نفسها',
    subtitle: 'لمحة من أعمال النجارة والتنجيد والتشطيب التي تخرج من ورشتنا في عمّان.',
    all: 'الكل',
    categories: {
      joinery: 'النجارة',
      upholstery: 'التنجيد',
      drapery: 'الستائر',
      lighting: 'الإنارة',
      glass: 'الزجاج والألمنيوم',
      design: 'التصميم والديكور',
      workshop: 'داخل الورشة',
    },
    projects: {
      kitchen: 'مطبخ وخزائن على المقاس',
      living: 'إعادة تنجيد غرفة جلوس',
      dining: 'طقم سفرة قطيفة وخشب جوز',
      drapery: 'ستائر بكامل الارتفاع',
      lighting: 'تصميم إنارة متعدد الطبقات',
      stair: 'درج زجاج ومعدن',
      facade: 'تجديد واجهة فيلا',
      suite: 'جناح نوم رئيسي',
      workshop: 'داخل ورشة مريش',
    },
    caption: 'الصور تمثيلية — صور المشاريع الكاملة متاحة عبر واتساب؛ اطلب رؤية أعمال مشابهة لمشروعك.',
  },
  process: {
    overline: 'كيف نعمل',
    title: 'من أول زيارة حتى آخر لمسة',
    subtitle: 'مسار بسيط وواضح — تعرف دائماً ما الخطوة التالية ومن المسؤول عنها. (تلميح: نحن.)',
    steps: [
      {
        title: 'استشارة وقياس',
        text: 'نزورك ونستمع ونقيس وننصح — أحضر صوراً أو مخططات أو مجرد فكرة.',
      },
      {
        title: 'التصميم والمواد',
        text: 'توافق على التصميم والأقمشة والأخشاب والتشطيبات قبل قصّ أي شيء.',
      },
      {
        title: 'التصنيع في ورشتنا',
        text: 'النجارة والتنجيد والزجاج والتشطيب — كلها تحت سقف واحد وتحت أعيننا.',
      },
      {
        title: 'التوصيل والتركيب',
        text: 'نوصّل ونركّب ونضبط الإنارة والدهان — ثم نسلّمك مكاناً مكتملاً، لا قطعاً متفرقة.',
      },
    ],
  },
  clientele: {
    overline: 'من نخدم',
    title: 'في المساحات الأكثر تطلّباً',
    subtitle: 'من مقرّات السفارات إلى الفلل العائلية، تعيش أعمالنا في أماكن لا تقبل المساومة على المستوى.',
    items: [
      {
        title: 'السفارات والبعثات الدبلوماسية',
        text: 'دقة وموثوقية وحضور راقٍ — من إعادة تنجيد كنب مقر الإقامة إلى تجهيز صالونات تستقبل العالم.',
      },
      {
        title: 'المنازل والفلل الخاصة',
        text: 'قطع مفصّلة وتجديدات داخلية كاملة لعائلات تريد أثاثاً صُنع لغرفها، لا لصالة عرض.',
      },
      {
        title: 'الفنادق والمكاتب والمساحات التجارية',
        text: 'تأثيث وتشطيب متين وقابل للصيانة لمساحات تعمل بجدّ كل يوم.',
      },
    ],
  },
  contact: {
    overline: 'تواصل',
    title: 'لنصنع شيئاً يدوم.',
    sub: 'أرسل صورة أو مخططاً أو مجرد فكرة — تصلك إجابة سريعة وصادقة عن الكلفة والمدة.',
    whatsappButton: 'واتساب',
    info: [
      {
        label: 'الهاتف وواتساب',
        value: '+962 7 8180 0068',
        caption: 'نرحّب بالصور والمخططات والرسائل الصوتية',
        isPhone: true,
      },
      { label: 'الورشة', value: 'عمّان، الأردن', caption: 'نخدم عملاءنا في مختلف أنحاء المملكة' },
      { label: 'المؤسس', value: 'عمر مريش', caption: 'نجّار ومنجّد ومُشطِّب' },
    ],
  },
  footer: {
    blurb: 'أثاث مفصّل وتشطيب داخلي متكامل من ورشة واحدة في عمّان — من أول رسمة حتى التركيب النهائي.',
    servicesHeading: 'خدماتنا',
    exploreHeading: 'استكشف',
    contactHeading: 'تواصل',
    whatsappLine: 'واتساب — نرحّب بالصور والرسائل الصوتية',
    rights: 'جميع الحقوق محفوظة.',
    craftedIn: 'صُنع في عمّان، الأردن',
    backToTop: 'العودة إلى الأعلى',
  },
  fabLabel: 'راسلنا على واتساب',
  city: 'عمّان، الأردن',
}

export const DICTIONARIES: Record<Language, Dictionary> = { en, ar }
