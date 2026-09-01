"use strict";

const CONFIG = {
  regularForm: "https://forms.gle/F9hre1e8QxGRqMyo8",
  comboForm: "https://forms.gle/ud4BUMCfAzLNRRvD7",
  reviewLink: "https://g.page/r/CbVcd73wLHVtEAE/review",
  upiId: "mondaljoy7407-2@oksbi",
  payeeName: "Jit Fresh Masala",
  // Replace with the business WhatsApp number, including country code and no + sign.
  whatsappNumber: "917407363599",
};

const products = [
  {
    id: "turmeric",
    name: { en: "Turmeric Powder", bn: "হলুদ গুঁড়ো", hi: "हल्दी पाउडर" },
    subtitle: {
      en: "Bright colour, earthy aroma",
      bn: "উজ্জ্বল রং, মাটির মতো সুগন্ধ",
      hi: "चमकीला रंग, मिट्टी जैसी सुगंध",
    },
    size: "40 g",
    unitPrice: 8,
    image: "turmeric-25g.png",
  },
  {
    id: "chilli",
    name: {
      en: "Red Chilli Powder",
      bn: "লঙ্কা গুঁড়ো",
      hi: "लाल मिर्च पाउडर",
    },
    subtitle: {
      en: "Bold colour, balanced heat",
      bn: "গাঢ় রং, ভারসাম্যপূর্ণ ঝাল",
      hi: "गहरा रंग, संतुलित तीखापन",
    },
    size: "25 g",
    unitPrice: 9,
    image: "chilli-25g.png",
  },
  {
    id: "coriander",
    name: { en: "Coriander Powder", bn: "ধনে গুঁড়ো", hi: "धनिया पाउडर" },
    subtitle: {
      en: "Fresh, warm and citrusy",
      bn: "তাজা, উষ্ণ ও সতেজ সুবাস",
      hi: "ताज़ा, गर्म और हल्की खट्टी सुगंध",
    },
    size: "25 g",
    unitPrice: 8,
    image: "coriander-25g.png",
  },
  {
    id: "cumin",
    name: { en: "Cumin Powder", bn: "জিরা গুঁড়ো", hi: "जीरा पाउडर" },
    subtitle: {
      en: "Deep aroma, everyday flavour",
      bn: "গভীর সুবাস, প্রতিদিনের স্বাদ",
      hi: "गहरी सुगंध, रोज़ का स्वाद",
    },
    size: "25 g",
    unitPrice: 10,
    image: "cumin-25g.png",
  },
    {
    id: "garam",
    name: { en: "Garam Masala", bn: "গরম মসালা", hi: "गरम मसाला" },
    subtitle: {
      en: "Warm, aromatic blend",
      bn: "উষ্ণ, সুগন্ধিত মিশ্রণ",
      hi: "गर्म, सुगंधित मिश्रण",
    },
    size: "50 g",
    unitPrice: 40,
    image: "garam-50g.png",
  },
];

const combos = [
  {
    id: "celebration",
    name: {
      en: "Durga Puja Celebration Combo",
      bn: "দুর্গাপূজা সেলিব্রেশন কম্বো",
      hi: "दुर्गा पूजा सेलिब्रेशन कॉम्बो",
    },
    meta: {
      en: "5 packets • 250 g total",
      bn: "৫টি প্যাকেট • মোট ২৫০ গ্রাম",
      hi: "5 पैकेट • कुल 250 ग्राम",
    },
    price: 169,
    items: [
      "Turmeric 50 g",
      "Red Chilli 50 g",
      "Coriander 50 g",
      "Cumin 50 g",
      "FREE Red Chilli 50 g",
    ],
    images: [
      "turmeric-50g.png",
      "chilli-50g.png",
      "coriander-50g.png",
      "cumin-50g.png",
    ],
  },
  {
    id: "colour-heat",
    name: {
      en: "Colour & Heat Combo",
      bn: "কালার অ্যান্ড হিট কম্বো",
      hi: "कलर एंड हीट कॉम्बो",
    },
    meta: {
      en: "3 packets • 150 g total",
      bn: "৩টি প্যাকেট • মোট ১৫০ গ্রাম",
      hi: "3 पैकेट • कुल 150 ग्राम",
    },
    price: 109,
    items: ["Turmeric 50 g", "Red Chilli 50 g", "FREE Coriander 50 g"],
    images: ["turmeric-50g.png", "chilli-50g.png", "coriander-50g.png"],
  },
  {
    id: "aroma",
    name: {
      en: "Aroma Booster Combo",
      bn: "অ্যারোমা বুস্টার কম্বো",
      hi: "अरोमा बूस्टर कॉम्बो",
    },
    meta: {
      en: "3 packets • 150 g total",
      bn: "৩টি প্যাকেট • মোট ১৫০ গ্রাম",
      hi: "3 पैकेट • कुल 150 ग्राम",
    },
    price: 111,
    items: ["Coriander 50 g", "Cumin 50 g", "FREE Turmeric 50 g"],
    images: ["coriander-50g.png", "cumin-50g.png", "turmeric-50g.png"],
  },
  {
    id: "family",
    name: {
      en: "Durga Puja Family Saver",
      bn: "দুর্গাপূজা ফ্যামিলি সেভার",
      hi: "दुर्गा पूजा फैमिली सेवर",
    },
    meta: {
      en: "9 packets • 450 g total",
      bn: "৯টি প্যাকেট • মোট ৪৫০ গ্রাম",
      hi: "9 पैकेट • कुल 450 ग्राम",
    },
    price: 219,
    items: [
      "Turmeric 2 × 50 g",
      "Red Chilli 2 × 50 g",
      "Coriander 2 × 50 g",
      "Cumin 2 × 50 g",
      "FREE Turmeric 50 g",
    ],
    images: [
      "turmeric-50g.png",
      "chilli-50g.png",
      "coriander-50g.png",
      "cumin-50g.png",
    ],
  },
];

const testimonials = [
  {
    title: {
      en: "Freshness & aroma",
      bn: "তাজা গুণ ও সুগন্ধ",
      hi: "ताज़गी और सुगंध",
    },
    quote: {
      en: "Add the first verified customer review here.",
      bn: "প্রথম যাচাই করা গ্রাহক রিভিউ এখানে যোগ করুন।",
      hi: "पहली सत्यापित ग्राहक समीक्षा यहाँ जोड़ें।",
    },
    product: "Turmeric Powder",
  },
  {
    title: {
      en: "Clean packaging",
      bn: "পরিচ্ছন্ন প্যাকেজিং",
      hi: "साफ पैकेजिंग",
    },
    quote: {
      en: "Add the second verified customer review here.",
      bn: "দ্বিতীয় যাচাই করা গ্রাহক রিভিউ এখানে যোগ করুন।",
      hi: "दूसरी सत्यापित ग्राहक समीक्षा यहाँ जोड़ें।",
    },
    product: "Red Chilli Powder",
  },
  {
    title: {
      en: "Everyday flavour",
      bn: "প্রতিদিনের স্বাদ",
      hi: "रोज़ का स्वाद",
    },
    quote: {
      en: "Add the third verified customer review here.",
      bn: "তৃতীয় যাচাই করা গ্রাহক রিভিউ এখানে যোগ করুন।",
      hi: "तीसरी सत्यापित ग्राहक समीक्षा यहाँ जोड़ें।",
    },
    product: "Coriander Powder",
  },
];

const translations = {
  en: {
    announcementFresh: "You must buy a minimum of one dozen",
    home: "Home",
    ourMasala: "Our Masala",
    regularMasala: "Regular Masala",
    regularHint: "Individual fresh packs",
    comboProducts: "Combo Products",
    comboHint: "Festive value packs",
    about: "About",
    certificates: "Certificates",
    reviews: "Reviews",
    searchProducts: "Search products",
    searchMasala: "Search masala",
    orderNow: "Order Now",
    authentic: "Authentic flavour, every day",
    pureSpices: "Pure spices.",
    honestFlavour: "Honest flavour.",
    heroDescription:
      "Traditional care meets everyday convenience. Our masalas are freshly ground in small batches for the aroma, colour and taste your cooking deserves.",
    exploreMasalas: "Explore Masalas",
    orderViaForm: "Order via Google Form",
    carefullySelected: "carefully selected",
    smallBatchGround: "batch ground",
    sealedFresh: "for freshness",
    freshIngredients: "Fresh Ingredients",
    carefullySourced: "Carefully sourced",
    smallBatch: "Small Batch",
    groundWithCare: "Ground with care",
    cleanHygienic: "Clean & Hygienic",
    safelyPacked: "Safely packed",
    fullAroma: "Full Aroma",
    madeForFlavour: "Made for flavour",
    collection: "Our collection",
    everydayMasalas: "Everyday masalas,",
    madeBetter: "made better.",
    productIntro:
      "Choose a masala, select UPI / QR or Cash on Delivery, and place your order through a simple Google Form.",
    noMasala: "No masala found",
    trySearch:
      "Try turmeric, chilli, coriander, cumin, হলুদ, লঙ্কা, ধনে or জিরা.",
    showAll: "Show all masalas",
    codAvailable: "Cash on Delivery Available",
    codHint: "Choose Cash on Delivery while submitting the order form.",
    moreSoon: "More varieties of masala will be added soon.",
    festiveSavings: "Festive savings",
    durgaOffers: "Durga Puja offers,",
    everyKitchen: "made for every kitchen.",
    comboIntro:
      "Choose a festive combo, enjoy the included free packet, and order through the dedicated combo Google Form.",
    madeWith: "Made with",
    care: "care",
    everyBatch: "in every batch",
    ourStory: "Our story",
    fromKitchen: "From our kitchen",
    toYours: "to yours.",
    aboutLead:
      "Jit Fresh Masala began with one simple belief: everyday food deserves honest, aromatic spices.",
    aboutBody:
      "We select raw spices carefully, clean them thoroughly and grind them in small batches. Each pack is sealed to protect its natural aroma and prepared with care.",
    carefulSourcing: "Careful sourcing",
    freshGrinding: "Fresh grinding",
    hygienicPacking: "Hygienic packing",
    trust: "Trust & transparency",
    businessDetails: "Business details you",
    canVerify: "can verify.",
    certIntro:
      "Display your official registrations here so customers can buy with confidence.",
    certCopy: "Certificate copy can be added here",
    certNote:
      "Add the business's original FSSAI and Udyam / MSME certificate images or PDF links here.",
    customerFeedback: "Customer feedback",
    reviewsBuild: "Reviews that build",
    realTrust: "real trust.",
    reviewsIntro:
      "This section is ready for genuine customer feedback. Add verified reviews as they are received.",
    replaceFeedback: "Replace placeholders with genuine customer feedback.",
    writeReview: "Write a Review",
    simpleOrdering: "Simple ordering",
    readyBring: "Ready to bring fresh",
    flavourHome: "flavour home?",
    orderIntro:
      "Select your products, choose UPI / QR or Cash on Delivery, then submit the Google Form.",
    choose: "Choose",
    yourMasala: "Your masala",
    payment: "Payment",
    upiQrCod: "UPI / QR or COD",
    submit: "Submit",
    orderForm: "Order form",
    placeOrder: "Place Your Order",
    footerDescription:
      "Freshly ground masalas, prepared with care for everyday Indian kitchens.",
    quickLinks: "Quick Links",
    customerHelp: "Customer Help",
    regularOrderForm: "Regular Order Form",
    comboOrderForm: "Combo Order Form",
    emailUs: "Email Us",
    businessContact: "Business Contact",
    phonePlaceholder: "Phone: +91 7407363599",
    emailPlaceholder: "Email: jitm79738@gmail.com",
    addressPlaceholder:
      "Address: Taltala 05 No Ward, Kalyani, Nadia, 741235, West Bengal",
    businessLocation: "Business Location",
    openMaps: "Open in Google Maps",
    directPayment: "Direct UPI payment",
    payFor: "Pay for",
    enterAmount: "Enter payment amount",
    amountToPay: "Amount to pay",
    scanUpi: "Scan with any UPI app",
    pay: "Pay",
    payWithUpi: "with UPI App",
    copy: "Copy",
    upiSafety:
      "Check the receiver name and amount shown in your UPI app before paying. Never share your UPI PIN or OTP.",
    codModalHint:
      "No online payment is needed. Select Cash on Delivery in the order form.",
    codButton: "Choose Cash on Delivery",
    continueTo: "Continue to",
    packet: "packet",
    packets: "packets",
    payQr: "Pay / QR",
    combo: "Combo",
    festiveOffer: "Durga Puja offer",
    searchFound: "masala found for",
    copied: "Copied",
    copyFailed: "Copy the UPI ID manually",
    whatsappMissing: "Add the business WhatsApp number in script.js first.",
  },
  bn: {
    announcementFresh: "আপনাকে অবশ্যই ন্যূনতম এক ডজন কিনতে হবে",
    home: "হোম",
    ourMasala: "আমাদের মসলা",
    regularMasala: "রেগুলার মসলা",
    regularHint: "আলাদা তাজা প্যাকেট",
    comboProducts: "কম্বো প্রোডাক্ট",
    comboHint: "উৎসবের সাশ্রয়ী প্যাক",
    about: "আমাদের কথা",
    certificates: "সার্টিফিকেট",
    reviews: "রিভিউ",
    searchProducts: "প্রোডাক্ট খুঁজুন",
    searchMasala: "মসলা খুঁজুন",
    orderNow: "অর্ডার করুন",
    authentic: "প্রতিদিনের খাঁটি স্বাদ",
    pureSpices: "খাঁটি মসলা।",
    honestFlavour: "আসল স্বাদ।",
    heroDescription:
      "ঐতিহ্য ও প্রতিদিনের সুবিধার মেলবন্ধন। আপনার রান্নার প্রাপ্য সুবাস, রং ও স্বাদের জন্য আমাদের মসলা ছোট ব্যাচে সদ্য গুঁড়ো করা হয়।",
    exploreMasalas: "মসলা দেখুন",
    orderViaForm: "Google Form-এ অর্ডার",
    carefullySelected: "যত্নে বাছাই",
    smallBatchGround: "ব্যাচে গুঁড়ো",
    sealedFresh: "তাজা রাখতে সিল",
    freshIngredients: "তাজা উপকরণ",
    carefullySourced: "যত্নে সংগ্রহ",
    smallBatch: "ছোট ব্যাচ",
    groundWithCare: "যত্নে গুঁড়ো",
    cleanHygienic: "পরিচ্ছন্ন ও স্বাস্থ্যকর",
    safelyPacked: "নিরাপদ প্যাকিং",
    fullAroma: "ভরপুর সুগন্ধ",
    madeForFlavour: "স্বাদের জন্য তৈরি",
    collection: "আমাদের কালেকশন",
    everydayMasalas: "প্রতিদিনের মসলা,",
    madeBetter: "আরও ভালোভাবে।",
    productIntro:
      "মসলা বেছে UPI / QR বা Cash on Delivery নির্বাচন করুন, তারপর সহজ Google Form-এ অর্ডার দিন।",
    noMasala: "কোনও মসলা পাওয়া যায়নি",
    trySearch: "হলুদ, লঙ্কা, ধনে বা জিরা লিখে খুঁজুন।",
    showAll: "সব মসলা দেখুন",
    codAvailable: "Cash on Delivery উপলব্ধ",
    codHint: "অর্ডার ফর্ম জমা দেওয়ার সময় Cash on Delivery বেছে নিন।",
    moreSoon: "আরও নানা ধরনের মসলা শীঘ্রই যোগ হবে।",
    festiveSavings: "উৎসবের সাশ্রয়",
    durgaOffers: "দুর্গাপূজার অফার,",
    everyKitchen: "প্রতিটি রান্নাঘরের জন্য।",
    comboIntro:
      "উৎসবের কম্বো বেছে ফ্রি প্যাকেট নিন এবং আলাদা কম্বো Google Form-এ অর্ডার করুন।",
    madeWith: "তৈরি হয়েছে",
    care: "যত্নে",
    everyBatch: "প্রতিটি ব্যাচে",
    ourStory: "আমাদের গল্প",
    fromKitchen: "আমাদের রান্নাঘর থেকে",
    toYours: "আপনার রান্নাঘরে।",
    aboutLead:
      "Jit Fresh Masala একটি সহজ বিশ্বাস থেকে শুরু—প্রতিদিনের খাবার খাঁটি, সুগন্ধী মসলার যোগ্য।",
    aboutBody:
      "আমরা কাঁচা মসলা যত্নে বাছি, ভালোভাবে পরিষ্কার করি এবং ছোট ব্যাচে গুঁড়ো করি। প্রাকৃতিক সুবাস রক্ষার জন্য প্রতিটি প্যাক যত্নে সিল করা হয়।",
    carefulSourcing: "যত্নে সংগ্রহ",
    freshGrinding: "তাজা গুঁড়ো",
    hygienicPacking: "স্বাস্থ্যকর প্যাকিং",
    trust: "বিশ্বাস ও স্বচ্ছতা",
    businessDetails: "ব্যবসার তথ্য যা",
    canVerify: "যাচাই করা যায়।",
    certIntro: "গ্রাহকের আস্থা বাড়াতে অফিসিয়াল রেজিস্ট্রেশন এখানে দেখান।",
    certCopy: "সার্টিফিকেটের কপি এখানে যোগ করা যাবে",
    certNote:
      "ব্যবসার আসল FSSAI এবং Udyam / MSME সার্টিফিকেটের ছবি বা PDF লিংক এখানে যোগ করুন।",
    customerFeedback: "গ্রাহকের মতামত",
    reviewsBuild: "রিভিউ থেকে তৈরি হয়",
    realTrust: "আসল বিশ্বাস।",
    reviewsIntro:
      "আসল গ্রাহকের মতামতের জন্য এই বিভাগ প্রস্তুত। যাচাই করা রিভিউ পেলে এখানে যোগ করুন।",
    replaceFeedback: "প্লেসহোল্ডারের বদলে আসল গ্রাহকের মতামত যোগ করুন।",
    writeReview: "রিভিউ লিখুন",
    simpleOrdering: "সহজ অর্ডার",
    readyBring: "তাজা স্বাদ নিয়ে যেতে",
    flavourHome: "প্রস্তুত?",
    orderIntro:
      "প্রোডাক্ট বেছে UPI / QR বা Cash on Delivery নির্বাচন করুন, তারপর Google Form জমা দিন।",
    choose: "বেছে নিন",
    yourMasala: "আপনার মসলা",
    payment: "পেমেন্ট",
    upiQrCod: "UPI / QR বা COD",
    submit: "জমা দিন",
    orderForm: "অর্ডার ফর্ম",
    placeOrder: "অর্ডার করুন",
    footerDescription:
      "প্রতিদিনের ভারতীয় রান্নাঘরের জন্য যত্নে তৈরি সদ্য গুঁড়ো মসলা।",
    quickLinks: "দ্রুত লিংক",
    customerHelp: "গ্রাহক সহায়তা",
    regularOrderForm: "রেগুলার অর্ডার ফর্ম",
    comboOrderForm: "কম্বো অর্ডার ফর্ম",
    emailUs: "ইমেল করুন",
    businessContact: "ব্যবসার যোগাযোগ",
    phonePlaceholder: "ফোন: নম্বর যোগ করুন",
    emailPlaceholder: "ইমেল: ইমেল যোগ করুন",
    addressPlaceholder: "ঠিকানা: ব্যবসার ঠিকানা যোগ করুন",
    businessLocation: "ব্যবসার অবস্থান",
    openMaps: "Google Maps-এ খুলুন",
    directPayment: "সরাসরি UPI পেমেন্ট",
    payFor: "পেমেন্ট করুন",
    enterAmount: "পেমেন্টের পরিমাণ লিখুন",
    amountToPay: "পেমেন্টের পরিমাণ",
    scanUpi: "যেকোনও UPI অ্যাপে স্ক্যান করুন",
    pay: "পে করুন",
    payWithUpi: "UPI অ্যাপে",
    copy: "কপি",
    upiSafety:
      "পেমেন্টের আগে UPI অ্যাপে প্রাপকের নাম ও পরিমাণ মিলিয়ে নিন। UPI PIN বা OTP কখনও শেয়ার করবেন না।",
    codModalHint:
      "অনলাইন পেমেন্ট লাগবে না। অর্ডার ফর্মে Cash on Delivery নির্বাচন করুন।",
    codButton: "Cash on Delivery বেছে নিন",
    continueTo: "যান",
    packet: "প্যাকেট",
    packets: "প্যাকেট",
    payQr: "পে / QR",
    combo: "কম্বো",
    festiveOffer: "দুর্গাপূজার অফার",
    searchFound: "টি মসলা পাওয়া গেছে—",
    copied: "কপি হয়েছে",
    copyFailed: "UPI ID হাতে কপি করুন",
    whatsappMissing: "প্রথমে script.js-এ ব্যবসার WhatsApp নম্বর যোগ করুন।",
  },
  hi: {
    announcementFresh: "आपको कम से कम एक दर्जन खरीदना होगा",
    home: "होम",
    ourMasala: "हमारे मसाले",
    regularMasala: "रेगुलर मसाला",
    regularHint: "अलग ताज़ा पैकेट",
    comboProducts: "कॉम्बो प्रोडक्ट",
    comboHint: "त्योहार के वैल्यू पैक",
    about: "हमारे बारे में",
    certificates: "सर्टिफिकेट",
    reviews: "रिव्यू",
    searchProducts: "प्रोडक्ट खोजें",
    searchMasala: "मसाला खोजें",
    orderNow: "ऑर्डर करें",
    authentic: "हर दिन असली स्वाद",
    pureSpices: "शुद्ध मसाले।",
    honestFlavour: "असली स्वाद।",
    heroDescription:
      "परंपरागत देखभाल और रोज़ की सुविधा का मेल। आपकी रसोई के योग्य सुगंध, रंग और स्वाद के लिए हमारे मसाले छोटे बैच में ताज़ा पिसे जाते हैं।",
    exploreMasalas: "मसाले देखें",
    orderViaForm: "Google Form से ऑर्डर",
    carefullySelected: "ध्यान से चुना",
    smallBatchGround: "बैच में पिसा",
    sealedFresh: "ताज़गी के लिए सील",
    freshIngredients: "ताज़ी सामग्री",
    carefullySourced: "ध्यान से प्राप्त",
    smallBatch: "छोटा बैच",
    groundWithCare: "सावधानी से पिसा",
    cleanHygienic: "साफ और हाइजीनिक",
    safelyPacked: "सुरक्षित पैकिंग",
    fullAroma: "भरपूर सुगंध",
    madeForFlavour: "स्वाद के लिए बना",
    collection: "हमारा कलेक्शन",
    everydayMasalas: "रोज़ के मसाले,",
    madeBetter: "और बेहतर।",
    productIntro:
      "मसाला चुनें, UPI / QR या Cash on Delivery लें और आसान Google Form से ऑर्डर करें।",
    noMasala: "कोई मसाला नहीं मिला",
    trySearch: "हल्दी, मिर्च, धनिया या जीरा खोजें।",
    showAll: "सभी मसाले दिखाएँ",
    codAvailable: "Cash on Delivery उपलब्ध",
    codHint: "ऑर्डर फॉर्म भरते समय Cash on Delivery चुनें।",
    moreSoon: "मसालों की और किस्में जल्द जोड़ी जाएँगी।",
    festiveSavings: "त्योहार की बचत",
    durgaOffers: "दुर्गा पूजा ऑफर,",
    everyKitchen: "हर रसोई के लिए।",
    comboIntro:
      "त्योहार का कॉम्बो चुनें, फ्री पैकेट पाएँ और अलग कॉम्बो Google Form से ऑर्डर करें।",
    madeWith: "बनाया गया",
    care: "देखभाल से",
    everyBatch: "हर बैच में",
    ourStory: "हमारी कहानी",
    fromKitchen: "हमारी रसोई से",
    toYours: "आपकी रसोई तक।",
    aboutLead:
      "Jit Fresh Masala एक सरल विश्वास से शुरू हुआ—रोज़ का खाना ईमानदार, सुगंधित मसालों का हकदार है।",
    aboutBody:
      "हम कच्चे मसालों को ध्यान से चुनते, अच्छी तरह साफ करते और छोटे बैच में पीसते हैं। प्राकृतिक सुगंध बचाने के लिए हर पैक सावधानी से सील होता है।",
    carefulSourcing: "सावधानी से चयन",
    freshGrinding: "ताज़ी पिसाई",
    hygienicPacking: "हाइजीनिक पैकिंग",
    trust: "विश्वास और पारदर्शिता",
    businessDetails: "व्यवसाय की जानकारी",
    canVerify: "जिसे जाँच सकें।",
    certIntro:
      "ग्राहकों का विश्वास बढ़ाने के लिए आधिकारिक रजिस्ट्रेशन यहाँ दिखाएँ।",
    certCopy: "सर्टिफिकेट की कॉपी यहाँ जोड़ें",
    certNote:
      "व्यवसाय के असली FSSAI और Udyam / MSME सर्टिफिकेट की इमेज या PDF लिंक यहाँ जोड़ें।",
    customerFeedback: "ग्राहक प्रतिक्रिया",
    reviewsBuild: "रिव्यू बनाते हैं",
    realTrust: "सच्चा विश्वास।",
    reviewsIntro:
      "यह भाग असली ग्राहक प्रतिक्रिया के लिए तैयार है। सत्यापित रिव्यू मिलने पर जोड़ें।",
    replaceFeedback: "प्लेसहोल्डर की जगह असली ग्राहक प्रतिक्रिया जोड़ें।",
    writeReview: "रिव्यू लिखें",
    simpleOrdering: "आसान ऑर्डर",
    readyBring: "ताज़ा स्वाद घर",
    flavourHome: "लाने को तैयार?",
    orderIntro:
      "प्रोडक्ट चुनें, UPI / QR या Cash on Delivery लें, फिर Google Form जमा करें।",
    choose: "चुनें",
    yourMasala: "अपना मसाला",
    payment: "पेमेंट",
    upiQrCod: "UPI / QR या COD",
    submit: "जमा करें",
    orderForm: "ऑर्डर फॉर्म",
    placeOrder: "अपना ऑर्डर दें",
    footerDescription:
      "हर भारतीय रसोई के लिए देखभाल से तैयार ताज़े पिसे मसाले।",
    quickLinks: "क्विक लिंक",
    customerHelp: "ग्राहक सहायता",
    regularOrderForm: "रेगुलर ऑर्डर फॉर्म",
    comboOrderForm: "कॉम्बो ऑर्डर फॉर्म",
    emailUs: "ईमेल करें",
    businessContact: "व्यवसाय संपर्क",
    phonePlaceholder: "फोन: अपना नंबर जोड़ें",
    emailPlaceholder: "ईमेल: अपना ईमेल जोड़ें",
    addressPlaceholder: "पता: व्यवसाय का पता जोड़ें",
    businessLocation: "व्यवसाय का स्थान",
    openMaps: "Google Maps में खोलें",
    directPayment: "सीधा UPI पेमेंट",
    payFor: "पेमेंट करें",
    enterAmount: "पेमेंट राशि डालें",
    amountToPay: "पेमेंट राशि",
    scanUpi: "किसी भी UPI ऐप से स्कैन करें",
    pay: "पे करें",
    payWithUpi: "UPI ऐप से",
    copy: "कॉपी",
    upiSafety:
      "पेमेंट से पहले UPI ऐप में पाने वाले का नाम और राशि जाँचें। UPI PIN या OTP कभी साझा न करें।",
    codModalHint:
      "ऑनलाइन पेमेंट की जरूरत नहीं। ऑर्डर फॉर्म में Cash on Delivery चुनें।",
    codButton: "Cash on Delivery चुनें",
    continueTo: "आगे जाएँ",
    packet: "पैकेट",
    packets: "पैकेट",
    payQr: "पे / QR",
    combo: "कॉम्बो",
    festiveOffer: "दुर्गा पूजा ऑफर",
    searchFound: "मसाले मिले—",
    copied: "कॉपी हो गया",
    copyFailed: "UPI ID को हाथ से कॉपी करें",
    whatsappMissing: "पहले script.js में व्यवसाय का WhatsApp नंबर जोड़ें।",
  },
};

const productQuantities = Object.fromEntries(
  products.map((product) => [product.id, 1]),
);
const comboQuantities = Object.fromEntries(
  combos.map((combo) => [combo.id, 1]),
);
let language = localStorage.getItem("jit-language") || "en";
let searchTerm = "";
let activeReview = 0;
let reviewTimer;
let paymentContext = {
  name: "Order",
  amount: 1,
  form: CONFIG.regularForm,
  formType: "Regular",
  custom: false,
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const t = (key) => translations[language]?.[key] || translations.en[key] || key;
const money = (amount) => `₹${Number(amount).toFixed(2)}`;
const escapeHtml = (value) =>
  String(value).replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ],
  );

function renderProducts() {
  const normalized = searchTerm.trim().toLocaleLowerCase();
  const visible = products.filter((product) => {
    const searchable = [
      product.id,
      ...Object.values(product.name),
      ...Object.values(product.subtitle),
    ]
      .join(" ")
      .toLocaleLowerCase();
    return !normalized || searchable.includes(normalized);
  });

  $("#productGrid").innerHTML = visible
    .map((product) => {
      const quantity = productQuantities[product.id];
      const total = product.unitPrice * quantity;
      return `
      <article class="product-card">
        <div class="product-image">
          <span class="size-pill">${product.size}</span>
          <img src="${product.image}" alt="${escapeHtml(product.name[language])} ${product.size}" loading="lazy" />
        </div>
        <div class="product-body">
          <h3>${escapeHtml(product.name[language])}</h3>
          <p>${escapeHtml(product.subtitle[language])}</p>
          <div class="price-row">
            <span><strong>${money(total)}</strong><br /><small>₹${product.unitPrice} × ${quantity} ${quantity === 1 ? t("packet") : t("packets")}</small></span>
            <div class="quantity-control" aria-label="${escapeHtml(product.name[language])} quantity">
              <button type="button" data-kind="product" data-action="decrease" data-id="${product.id}" aria-label="Decrease quantity">−</button>
              <span>${quantity}</span>
              <button type="button" data-kind="product" data-action="increase" data-id="${product.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="button button-primary product-pay" type="button" data-kind="product" data-action="pay" data-id="${product.id}">${t("payQr")} · ${money(total)}</button>
        </div>
      </article>`;
    })
    .join("");

  $("#noResults").hidden = visible.length > 0;
  $("#productGrid").hidden = visible.length === 0;
  const summary = $("#searchSummary");
  summary.hidden = !normalized;
  summary.textContent = normalized
    ? `${visible.length} ${t("searchFound")} “${searchTerm.trim()}”`
    : "";
}

function renderCombos() {
  $("#comboGrid").innerHTML = combos
    .map((combo) => {
      const quantity = comboQuantities[combo.id];
      const total = combo.price * quantity;
      const galleryClass =
        combo.images.length === 3 ? "combo-gallery three" : "combo-gallery";
      return `
      <article class="combo-card">
        <div class="${galleryClass}">
          ${combo.images.map((image, index) => `<img src="${image}" alt="${escapeHtml(combo.name[language])} product ${index + 1}" loading="lazy" />`).join("")}
        </div>
        <div class="combo-body">
          <span class="combo-label">${t("festiveOffer")}</span>
          <h3>${escapeHtml(combo.name[language])}</h3>
          <p class="combo-meta">${escapeHtml(combo.meta[language])}</p>
          <ul class="combo-items">${combo.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          <div class="combo-price"><span><strong>${money(total)}</strong><br /><small>₹${combo.price} × ${quantity} ${quantity === 1 ? t("combo") : t("comboProducts")}</small></span></div>
          <div class="combo-action-row">
            <div class="quantity-control" aria-label="${escapeHtml(combo.name[language])} quantity">
              <button type="button" data-kind="combo" data-action="decrease" data-id="${combo.id}" aria-label="Decrease quantity">−</button>
              <span>${quantity}</span>
              <button type="button" data-kind="combo" data-action="increase" data-id="${combo.id}" aria-label="Increase quantity">+</button>
            </div>
            <button class="button button-primary" type="button" data-kind="combo" data-action="pay" data-id="${combo.id}">${t("payQr")} · ${money(total)}</button>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function renderTestimonials() {
  $("#testimonialTrack").innerHTML = testimonials
    .map(
      (review) => `
    <article class="testimonial">
      <div class="stars" aria-label="5 stars">★★★★★</div>
      <blockquote>“${escapeHtml(review.title[language])}”</blockquote>
      <p>${escapeHtml(review.quote[language])}<br /><strong>${escapeHtml(review.product)}</strong></p>
    </article>`,
    )
    .join("");

  $("#sliderDots").innerHTML = testimonials
    .map(
      (_, index) =>
        `<button type="button" class="${index === activeReview ? "active" : ""}" data-review="${index}" aria-label="Show review ${index + 1}"></button>`,
    )
    .join("");
  updateReviewSlider();
}

function updateReviewSlider() {
  $("#testimonialTrack").style.transform =
    `translateX(-${activeReview * 100}%)`;
  $("#testimonialCount").textContent =
    `${String(activeReview + 1).padStart(2, "0")} / ${String(testimonials.length).padStart(2, "0")}`;
  $$("[data-review]").forEach((dot, index) =>
    dot.classList.toggle("active", index === activeReview),
  );
}

function moveReview(direction) {
  activeReview =
    (activeReview + direction + testimonials.length) % testimonials.length;
  updateReviewSlider();
  restartReviewTimer();
}

function restartReviewTimer() {
  clearInterval(reviewTimer);
  reviewTimer = setInterval(() => {
    activeReview = (activeReview + 1) % testimonials.length;
    updateReviewSlider();
  }, 6500);
}

function applyLanguage(nextLanguage) {
  language = translations[nextLanguage] ? nextLanguage : "en";
  document.documentElement.lang = language;
  localStorage.setItem("jit-language", language);
  $("#languageSelect").value = language;
  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  $$("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  renderProducts();
  renderCombos();
  renderTestimonials();
  if (!$("#paymentModal").hidden) updatePaymentUi();
}

function setOrderLinks() {
  $$(".regular-order-link").forEach((link) => {
    link.href = CONFIG.regularForm;
    link.target = "_blank";
    link.rel = "noopener";
  });
  $$(".combo-order-link").forEach((link) => {
    link.href = CONFIG.comboForm;
    link.target = "_blank";
    link.rel = "noopener";
  });
}

function buildUpiUrl() {
  const transaction = `JIT${Date.now()}`;
  const params = new URLSearchParams({
    pa: CONFIG.upiId,
    pn: CONFIG.payeeName,
    tr: transaction,
    tn: paymentContext.name,
    am: Number(paymentContext.amount).toFixed(2),
    cu: "INR",
  });
  return `upi://pay?${params.toString()}`;
}

function drawPaymentQr(upiUrl) {
  const canvas = $("#paymentQr");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (window.QRCode?.toCanvas) {
    window.QRCode.toCanvas(
      canvas,
      upiUrl,
      {
        width: 220,
        margin: 1,
        color: { dark: "#173f34", light: "#ffffff" },
        errorCorrectionLevel: "M",
      },
      (error) => {
        if (error) drawQrFallback(context);
      },
    );
  } else {
    drawQrFallback(context);
  }
}

function drawQrFallback(context) {
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 220, 220);
  context.fillStyle = "#173f34";
  context.font = "700 15px sans-serif";
  context.textAlign = "center";
  context.fillText("QR needs internet once", 110, 99);
  context.font = "13px sans-serif";
  context.fillText("Use the UPI button below", 110, 124);
}

function updatePaymentUi() {
  const amount = Math.max(1, Number(paymentContext.amount) || 1);
  paymentContext.amount = amount;
  $("#paymentProduct").textContent = paymentContext.name;
  $("#paymentAmount").textContent = money(amount);
  $("#upiButtonAmount").textContent = money(amount);
  $("#formTypeLabel").textContent = paymentContext.formType;
  $("#customAmountField").hidden = !paymentContext.custom;
  if (paymentContext.custom) $("#customAmount").value = amount;
  const upiUrl = buildUpiUrl();
  $("#upiPayLink").href = upiUrl;
  $("#codOrderLink").href = paymentContext.form;
  $("#continueOrderLink").href = paymentContext.form;
  [$("#codOrderLink"), $("#continueOrderLink")].forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener";
  });
  drawPaymentQr(upiUrl);
}

function openPayment({ name, amount, form, formType, custom = false }) {
  paymentContext = { name, amount, form, formType, custom };
  updatePaymentUi();
  $("#paymentModal").hidden = false;
  document.body.classList.add("modal-open");
  $("#modalClose").focus();
}

function closePayment() {
  $("#paymentModal").hidden = true;
  document.body.classList.remove("modal-open");
}

function handleCatalogAction(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const { action, id, kind } = button.dataset;
  const isProduct = kind === "product";
  const list = isProduct ? products : combos;
  const quantities = isProduct ? productQuantities : comboQuantities;
  const item = list.find((entry) => entry.id === id);
  if (!item) return;

  if (action === "increase") quantities[id] = Math.min(99, quantities[id] + 1);
  if (action === "decrease") quantities[id] = Math.max(1, quantities[id] - 1);
  if (action === "increase" || action === "decrease") {
    isProduct ? renderProducts() : renderCombos();
    return;
  }

  const unitPrice = isProduct ? item.unitPrice : item.price;
  openPayment({
    name: `${item.name[language]} × ${quantities[id]}`,
    amount: unitPrice * quantities[id],
    form: isProduct ? CONFIG.regularForm : CONFIG.comboForm,
    formType: isProduct ? t("regularMasala") : t("comboProducts"),
  });
}

function performSearch() {
  searchTerm = $("#productSearch").value;
  renderProducts();
  $("#products").scrollIntoView({ behavior: "smooth", block: "start" });
  $("#searchForm").classList.remove("open");
}

$("#productGrid").addEventListener("click", handleCatalogAction);
$("#comboGrid").addEventListener("click", handleCatalogAction);
$("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  performSearch();
});
$("#productSearch").addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderProducts();
});
$("#showAllButton").addEventListener("click", () => {
  searchTerm = "";
  $("#productSearch").value = "";
  renderProducts();
});

$("#menuToggle").addEventListener("click", () => {
  const open = $("#mainNav").classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", String(open));
});
$("#searchToggle").addEventListener("click", () => {
  $("#searchForm").classList.toggle("open");
  if ($("#searchForm").classList.contains("open")) $("#productSearch").focus();
});
$("#masalaToggle").addEventListener("click", () => {
  const open = $("#masalaToggle").parentElement.classList.toggle("open");
  $("#masalaToggle").setAttribute("aria-expanded", String(open));
});
$("#mainNav").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    $("#mainNav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-dropdown")) {
    $(".nav-dropdown").classList.remove("open");
    $("#masalaToggle").setAttribute("aria-expanded", "false");
  }
});

$("#reviewPrev").addEventListener("click", () => moveReview(-1));
$("#reviewNext").addEventListener("click", () => moveReview(1));
$("#sliderDots").addEventListener("click", (event) => {
  const dot = event.target.closest("[data-review]");
  if (!dot) return;
  activeReview = Number(dot.dataset.review);
  updateReviewSlider();
  restartReviewTimer();
});

$("#languageSelect").addEventListener("change", (event) =>
  applyLanguage(event.target.value),
);
$("#customPayButton").addEventListener("click", () =>
  openPayment({
    name: "Custom payment",
    amount: 1,
    form: CONFIG.regularForm,
    formType: t("regularMasala"),
    custom: true,
  }),
);
$("#customAmount").addEventListener("input", (event) => {
  paymentContext.amount = Math.max(1, Number(event.target.value) || 1);
  const upiUrl = buildUpiUrl();
  $("#paymentAmount").textContent = money(paymentContext.amount);
  $("#upiButtonAmount").textContent = money(paymentContext.amount);
  $("#upiPayLink").href = upiUrl;
  drawPaymentQr(upiUrl);
});
$("#modalClose").addEventListener("click", closePayment);
$("#paymentModal").addEventListener("click", (event) => {
  if (event.target === $("#paymentModal")) closePayment();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !$("#paymentModal").hidden) closePayment();
});
$("#copyUpiButton").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(CONFIG.upiId);
    $("#copyUpiButton").textContent = t("copied");
    setTimeout(() => {
      $("#copyUpiButton").textContent = t("copy");
    }, 1500);
  } catch {
    window.prompt(t("copyFailed"), CONFIG.upiId);
  }
});

$("#whatsappButton").addEventListener("click", (event) => {
  if (CONFIG.whatsappNumber.includes("REPLACE")) {
    event.preventDefault();
    alert(t("917407363599"));
    return;
  }
  event.currentTarget.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Jit Fresh Masala, I want to place an order.")}`;
});

$$('.social-icons a[href="#"]').forEach((link) =>
  link.addEventListener("click", (event) => event.preventDefault()),
);

setOrderLinks();
applyLanguage(language);
restartReviewTimer();
