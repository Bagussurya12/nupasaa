<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const corePrograms = [
  {
    title: "Kitab Kuning",
    subtitle: "Kajian Kitab Kitab Kuning",
    description:
      "Pendalaman turats (khazanah klasik Islam) melalui kajian kitab-kitab karya ulama salaf yang otoritatif, membentuk santri dengan pemahaman mendalam, pola pikir sistematis, serta akhlak yang terjaga dalam setiap aspek kehidupan.",
    image: "/assets/program/kitab-kuning.jpg",
    features: [
      "Aqidah & Tauhid",
      "Fiqh & Ushul Fiqh",
      "Akhlak",
      "Tafsir & Ilmu Tafsir",
      "Hadits & Ilmu Hadits",
      "Nahwu",
      "Shorof",
      "Balaghah",
      "Mantiq",
      "Tajwid",
    ],
  },
  {
    title: "Pendidikan Formal",
    subtitle: "MTs & MA Terakreditasi",
    description:
      "Menghadirkan pendidikan formal terakreditasi yang mengintegrasikan kurikulum pesantren dan nasional, membekali santri dengan pengetahuan akademik yang kuat, karakter yang matang, serta kesiapan menghadapi tantangan pendidikan dan kehidupan di masa depan.",
    image: "/assets/program/pendidikan-formal.jpeg",
    features: [
      "Madrasah Tsanawiyah (MTs)",
      "Madrasah Aliyah (MA)",
      "Kurikulum Nasional & Pesantren",
    ],
  },
  {
    title: "Perguruan Tinggi Islam",
    subtitle: "Sekolah Tinggi Agama Islam (STAI)",
    description:
      "Perpaduan harmonis antara kedalaman ilmu pesantren dan standar pendidikan nasional, menghadirkan generasi berilmu luas, berakhlak mulia, serta siap bersaing di dunia akademik maupun profesional.",
    image: "/assets/program/perguruan-tinggi.jpeg",
    features: [
      "S1 Pendidikan Agama Islam",
      "S1 Ekonomi Syariah",
      "S1 Hukum Ekonomi Syariah",
      "S1 Manajemen Bisnis Syariah",
      "S2 Pendidikan Agama Islam",
    ],
  },
];

const dailyRoutine = [
  { time: "03:30 - 04:00", activity: "Qiyamul Lail" },
  { time: "04:30 - 05:00", activity: "Shalat Shubuh & Zikir Pagi" },
  {
    time: "05:00 - 05:30",
    activity: "Hafalan Al-Quran, Hadits, dan Kitab Kuning",
  },
  { time: "05:30 - 05:40", activity: "GSM (Kegiatan Kebersihan 10 Menit)" },
  { time: "05:40 - 07:30", activity: "Pengajian Kitab Kuning Pagi" },
  { time: "07:30 - 08:00", activity: "Sarapan & Persiapan Sekolah" },
  { time: "08:00 - 11:30", activity: "Sekolah Formal & Madrasah" },
  { time: "11:30 - 13:00", activity: "Sholat Dzuhur & Makan Siang" },
  { time: "13:00 - 14:30", activity: "Sorogan Kitab Kuning" },
  {
    time: "14:30 - 15:00",
    activity: "Istirahat dan Persiapan Sholat Ashar berjamaah",
  },
  {
    time: "15:00 - 15:30",
    activity: "Sholat Ashar berjamaah, dan dzikir sore",
  },
  {
    time: "15:30 - 17:00",
    activity: "Pengajian Kitab Kuning",
  },
  {
    time: "17:00 - 18:00",
    activity: "Istirahat dan Persiapan Sholat Maghrib berjamaah",
  },
  {
    time: "18:00 - 18:30",
    activity: "Sholat Maghrib berjamaah, dan dzikir",
  },
  {
    time: "18:30 - 19:00",
    activity: "Sorogan Al-Quran",
  },
  {
    time: "19:00 - 19:30",
    activity: "Sholat Isya Berjamaah & Dzikir",
  },
  {
    time: "19:30 - 21:00",
    activity: "Kajian Kitab & Halaqah Malam",
  },
  { time: "21:00 - 22:00", activity: "Hifdzul Kutub Bersama" },
  { time: "22:00 - 03:00", activity: "Istirahat Malam" },
];
const showAllRoutine = ref(false);
const displayedRoutine = computed(() => {
  if (showAllRoutine.value) return dailyRoutine;
  return dailyRoutine.slice(0, 10);
});

const categories = [
  "Semua",
  "Keagamaan",
  "Sains & Teknologi",
  "Olahraga & Seni",
  "Kepemimpinan",
];
const activeCategory = ref("Semua");

const extras = [
  {
    name: "Tahsin Al-Quran",
    category: "Keagamaan",
    description:
      "Pendalaman teknik membaca Al-Quran dengan tajwid yang benar dan tartil.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    name: "Hadroh",
    category: "Olahraga & Seni",
    description:
      "Seni musik Islami menggunakan rebana untuk mengiringi lantunan shalawat.",
    icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
  },
  {
    name: "Muhadharah",
    category: "Keagamaan",
    description:
      "Latihan public speaking dan orasi dalam bahasa Arab, Inggris, dan Indonesia.",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  },
  {
    name: "Pencak Silat",
    category: "Olahraga & Seni",
    description:
      "Olahraga bela diri tradisional untuk melatih fisik, mental, dan kedisiplinan.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    name: "Pramuka",
    category: "Kepemimpinan",
    description:
      "Pembentukan karakter melalui kegiatan kepanduan dan ketangkasan alam terbuka.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  },
  {
    name: "Paskibra",
    category: "Kepemimpinan",
    description:
      "Pelatihan baris-berbaris untuk membentuk kedisiplinan dan rasa nasionalisme.",
    icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9",
  },
  {
    name: "Software Engineering",
    category: "Sains & Teknologi",
    description:
      "Pembelajaran pemrograman web dan aplikasi untuk mencetak santri digital.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    name: "Graphic Design",
    category: "Sains & Teknologi",
    description:
      "Eksplorasi kreativitas visual menggunakan perangkat lunak desain modern.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    name: "Robotic & IOT",
    category: "Sains & Teknologi",
    description:
      "Inovasi teknologi melalui perakitan robot dan sistem otomatisasi cerdas.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  },
  {
    name: "Mathematic & Science",
    category: "Sains & Teknologi",
    description:
      "Klub peminatan untuk olimpiade sains dan pendalaman logika matematika.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.31a2 2 0 00-1.1.88 2 2 0 00-.31 1.096l.124 2.478c.017.347.149.673.374.94a2 2 0 00.732.532c.326.126.677.173 1.019.138l2.478-.253a2 2 0 001.562-2.387l-.477-2.387zM9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z",
  },
];

const filteredExtras = computed(() => {
  if (activeCategory.value === "Semua") return extras;
  return extras.filter((extra) => extra.category === activeCategory.value);
});
const currentProgramSlide = ref(0);
const programCarouselImages = [
  "/assets/program/alumni-group-1.jpg",
  "/assets/program/paskibra-santriawati.jpg",
  "/assets/program/paskibra.jpg",
  "/assets/program/santriawati-group-1.jpg",
  "/assets/program/seni-santriawan-2.jpg",
  "/assets/program/seni-santriawan.jpg",
];

onMounted(() => {
  setInterval(() => {
    currentProgramSlide.value =
      (currentProgramSlide.value + 1) % programCarouselImages.length;
  }, 5000);
});

const salafMethods = [
  {
    name: "Sorogan",
    type: "Individual",
    description: "Santri membaca kitab di hadapan ustadz/kyai secara personal. Ustadz memperbaiki bacaan, pemahaman, dan nahwu-sharaf secara intensif.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    name: "Tahsin",
    type: "Al-Quran",
    description: "Teknik memperbaiki bacaan Al-Qur'an agar sesuai kaidah tajwid, berfokus pada makharijul huruf, sifat huruf, dan tartil.",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  },
  {
    name: "Bandongan",
    type: "Klasikal",
    description: "Kyai membaca dan menjelaskan isi kitab, sementara santri menyimak dan mencatat (memaknai) secara kolektif.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    name: "Hafalan",
    type: "Tahfiz",
    description: "Kewajiban menghafal nazham (bait syair) atau matan kitab tertentu, terutama ilmu alat seperti Nahwu dan Sharaf.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    name: "Bathsul Masa'il",
    type: "Diskusi",
    description: "Forum diskusi ilmiah membahas masalah fiqih kontemporer berdasarkan kitab kuning untuk melatih analisis kritis.",
    icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
  },
  {
    name: "Halaqah",
    type: "Lingkaran",
    description: "Santri duduk melingkar menyimak pengajian kitab-kitab tasawuf atau fikih langsung dari Kyai.",
    icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const specialMethods = [
  {
    name: "Metode Mubtadi (Nahwu & Shorof)",
    description: "Menekankan praktik dan hafalan dengan nazhoman (syair) serta rumus. Memudahkan pemula membaca kitab dasar seperti Safinatunnaja dan Fathul Qorieb.",
    features: ["Praktik Intensif", "Hafalan Nazhom", "Rumus Praktis", "Bertahap (Jilid)"],
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    name: "Metode Mubtadi (Tajwid)",
    description: "Fokus pada praktik makharijul huruf dan tajwid melalui syair dan rumus yang mempermudah pemahaman bagi santri pemula.",
    features: ["Praktik Makharij", "Nazhom Tajwid", "Metode Cepat", "Latihan Terukur"],
    icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
  },
];

const curriculumYears = [
  {
    title: "Tahun Pertama",
    tagline: "Pondasi Dasar & Adab",
    hafalan: [
      "Kitab Awamil",
      "Tasrif Tsulasi Mujarrod",
      "Do'a-do'a Harian",
      "Ta'rif Dasar Nahwu",
      "Lughoh Kitab Awamil",
    ],
    kemampuan: [
      "Membaca Al-Qur’an tartil",
      "Praktek ibadah harian",
      "Melughot kitab kuning",
      "Tasrif Tsulasi Mujarrod",
    ],
  },
  {
    title: "Tahun Kedua",
    tagline: "Penguatan Alat & Tajwid",
    hafalan: [
      "Juz Amma (An-Nas - Adh-Dhuha)",
      "Kitab Fat’hul Athfal",
      "Kitab Jurumiyah",
      "Ta’rifat Dasar Bab I",
      "Tasrif Tsulasi Majid",
    ],
    kemampuan: [
      "I’rob Kitab Awamil",
      "Membaca Safinatunnajaa",
      "Tasrif Tsulasi Majid",
    ],
  },
  {
    title: "Tahun Ketiga",
    tagline: "Eskalasi Fiqh & Hadits",
    hafalan: [
      "Juz Amma (An-Naba - Al-Lail)",
      "Kitab Imritiy",
      "Matn Binaa",
      "Hadits Arba’in",
      "Tasrif Ruba’i",
      "Dalil Tauhid",
    ],
    kemampuan: [
      "I’rob Kitab Jurumiyah",
      "Membaca Kitab Taqrieb",
      "Tasrif Ruba’i",
      "Dalil Aqli & Naqli Tauhid",
    ],
  },
  {
    title: "Tahun Keempat",
    tagline: "Logika & Kedalaman Shorof",
    hafalan: [
      "Yasin & Surat Pilihan",
      "Matn Hal Maqsud",
      "Sulamul Munawwarok",
      "Asal & Tasrif Bina",
      "Ta’rifat Bab III",
    ],
    kemampuan: [
      "I’rob Tizan Addarori",
      "Membaca Riyadhul Badi’ah",
      "Asal & Tasrif Bina Awal",
    ],
  },
  {
    title: "Tahun Kelima",
    tagline: "Kematangan Literasi Turats",
    hafalan: [
      "Surat Pilihan 5",
      "Zauhar Al-Maknun",
      "Alfiyah (300 Bait)",
      "Ta’rifat Mantiq",
      "Asal & Tasrif Bina",
    ],
    kemampuan: [
      "I’rob Mutammimah",
      "Membaca Fathul Qorieb",
      "Penguasaan Bina & Asal",
    ],
  },
  {
    title: "Tahun Keenam",
    tagline: "Kemandirian & Pengabdian",
    hafalan: [
      "Surat Pilihan 6",
      "Alfiyah (Khatam 1000 Bait)",
      "Ta’rifat Balaghoh",
    ],
    kemampuan: ["Mengajar Sorogan (Awamil-Mutammimah)", "Membaca Fathul Mu’in"],
  },
  {
    title: "Tahun Ketujuh",
    tagline: "Puncak Kajian & Penjelasan",
    hafalan: [
      "Tikror Alfiyah & Kitab Alat",
      "Review Hal Maqsud & Imritiy",
      "Review Zauhar Al-Maknun",
    ],
    kemampuan: [
      "Mengajar Sorogan I'rob Tingkat Lanjut",
      "Menjelaskan Kitab-kitab Besar",
    ],
  },
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <transition-group name="fade">
          <img
            v-for="(image, index) in programCarouselImages"
            :key="image"
            v-show="currentProgramSlide === index"
            :src="image"
            alt="Programs Hero"
            class="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
          />
        </transition-group>
        <div
          class="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent"
        ></div>
      </div>

      <div
        class="container mx-auto px-4 relative z-10 text-center space-y-6 mt-20"
      >
        <h1
          class="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up"
        >
          Program Pendidikan <br />
          <span class="text-secondary-light">Masa Depan</span>
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl mx-auto font-light">
          Mencetak lulusan yang menguasai ilmu agama secara mendalam namun tetap
          kompetitif dalam bidang akademik umum dan teknologi.
        </p>
      </div>
    </section>

    <!-- Core Programs Detail -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div
          v-for="(program, index) in corePrograms"
          :key="program.title"
          class="grid lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0"
          :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
        >
          <div :class="{ 'lg:order-2': index % 2 === 1 }" class="space-y-8">
            <div class="space-y-4">
              <h3
                class="text-secondary font-bold tracking-widest uppercase text-sm"
              >
                {{ program.subtitle }}
              </h3>
              <h2
                class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                {{ program.title }}
              </h2>
              <div class="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>
            <p class="text-lg text-gray-600 leading-relaxed font-light">
              {{ program.description }}
            </p>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li
                v-for="feature in program.features"
                :key="feature"
                class="flex items-center gap-3 text-gray-700"
              >
                <div
                  class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="font-medium">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div :class="{ 'lg:order-1': index % 2 === 1 }" class="relative">
            <div
              class="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white"
            >
              <img
                :src="program.image"
                :alt="program.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div
              class="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full -z-0"
            ></div>
            <div
              class="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full -z-0"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Methods Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16 space-y-4">
          <h3 class="text-primary font-bold tracking-widest uppercase text-sm">
            Metodologi Pendidikan
          </h3>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
            Metode Pembelajaran Pesantren
          </h2>
          <div class="w-24 h-1.5 bg-primary mx-auto rounded-full mt-4"></div>
          <p class="text-gray-600 max-w-2xl mx-auto pt-4 font-light">
            Kami mengkombinasikan metode klasik pesantren salaf yang telah teruji selama berabad-abad 
            dengan metode khusus yang dikembangkan secara internal untuk mempercepat pemahaman santri.
          </p>
        </div>

        <!-- Salaf Methods Grid -->
        <div class="mb-20">
          <h4 class="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span class="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">1</span>
            Metode Utama Pesantren Salaf
          </h4>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="method in salafMethods"
              :key="method.name"
              class="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
            >
              <div class="flex justify-between items-start mb-6">
                <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="method.icon" />
                  </svg>
                </div>
                <span class="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full">
                  {{ method.type }}
                </span>
              </div>
              <h5 class="text-xl font-bold text-gray-900 mb-3">{{ method.name }}</h5>
              <p class="text-gray-500 text-sm leading-relaxed">{{ method.description }}</p>
            </div>
          </div>
        </div>

        <!-- Special Methods Section -->
        <div>
          <h4 class="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span class="w-8 h-8 bg-secondary text-white rounded-lg flex items-center justify-center text-sm">2</span>
            Metode Khusus Nurul Hidayah Parungsapi
          </h4>
          <div class="grid lg:grid-cols-2 gap-12">
            <div
              v-for="special in specialMethods"
              :key="special.name"
              class="relative bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <!-- Decorative background -->
              <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div class="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div class="w-20 h-20 bg-secondary/10 rounded-[2rem] flex items-center justify-center text-secondary shrink-0 group-hover:rotate-6 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="special.icon" />
                  </svg>
                </div>
                <div class="space-y-6">
                  <div>
                    <h5 class="text-2xl font-bold text-gray-900 mb-3">{{ special.name }}</h5>
                    <p class="text-gray-600 leading-relaxed font-light">{{ special.description }}</p>
                  </div>
                  <div class="grid grid-cols-2 gap-4 pt-4">
                    <div v-for="feat in special.features" :key="feat" class="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <div class="w-2 h-2 bg-secondary rounded-full"></div>
                      {{ feat }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Curriculum Section -->
    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h3
            class="text-secondary font-bold tracking-widest uppercase text-sm"
          >
            Roadmap Pendidikan
          </h3>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
            Kurikulum 7 Tahun
          </h2>
          <p class="text-lg text-gray-600 font-light leading-relaxed">
            Kurikulum Pondok Pesantren Nurul Hidayah Parungsapi dirancang secara
            komprehensif selama tujuh tahun. Santri diharapkan menyelesaikan
            masa pendidikan minimal tujuh tahun untuk mencapai kompetensi
            maksimal sebelum melanjutkan pengabdian atau pendidikan tinggi.
          </p>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden lg:block transform -translate-x-1/2"
          ></div>

          <div class="space-y-24">
            <div
              v-for="(year, index) in curriculumYears"
              :key="year.title"
              class="relative flex flex-col lg:flex-row items-center gap-12"
              :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
            >
              <!-- Timeline Dot -->
              <div
                class="absolute left-1/2 top-0 -translate-x-1/2 w-12 h-12 bg-white border-4 border-primary rounded-full z-10 hidden lg:flex items-center justify-center font-bold text-primary shadow-lg"
              >
                {{ index + 1 }}
              </div>

              <!-- Content Card -->
              <div class="w-full lg:w-1/2">
                <div
                  class="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative group overflow-hidden"
                >
                  <!-- Background Pattern -->
                  <div
                    class="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"
                  ></div>

                  <div class="relative z-10">
                    <div class="flex items-center gap-4 mb-6">
                      <div
                        class="lg:hidden w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold"
                      >
                        {{ index + 1 }}
                      </div>
                      <div>
                        <h4 class="text-2xl font-bold text-gray-900">
                          {{ year.title }}
                        </h4>
                        <p class="text-primary font-medium text-sm">
                          {{ year.tagline }}
                        </p>
                      </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8">
                      <!-- Hafalan -->
                      <div class="space-y-4">
                        <div
                          class="flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                          Hafalan
                        </div>
                        <ul class="space-y-2">
                          <li
                            v-for="item in year.hafalan"
                            :key="item"
                            class="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span class="text-primary mt-1">✓</span>
                            {{ item }}
                          </li>
                        </ul>
                      </div>

                      <!-- Kemampuan -->
                      <div class="space-y-4">
                        <div
                          class="flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V22M7 13h10M12 5V3m0 18v-2"
                            />
                          </svg>
                          Kemampuan
                        </div>
                        <ul class="space-y-2">
                          <li
                            v-for="item in year.kemampuan"
                            :key="item"
                            class="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span class="text-secondary mt-1">★</span>
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Spacer for Timeline -->
              <div class="hidden lg:block lg:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Daily Routine Section -->
    <section class="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-20 items-center">
          <div class="space-y-8">
            <h2 class="text-4xl md:text-5xl font-bold leading-tight">
              Rutinitas Harian <br />
              <span class="text-primary-light">Kehidupan Santri</span>
            </h2>
            <p class="text-xl text-gray-400 font-light leading-relaxed">
              Disiplin adalah kunci pembentukan karakter. Setiap detik di
              pesantren dirancang untuk memberikan manfaat duniawi dan ukhrawi.
            </p>
            <div class="pt-8">
              <img
                src="/assets/program/kegiatan-santri.jpg"
                alt="Routine Image"
                class="rounded-[2.5rem] grayscale opacity-50 border border-white/10"
              />
            </div>
          </div>

          <div
            class="bg-white/5 backdrop-blur-md rounded-[3rem] p-10 md:p-12 border border-white/10 shadow-2xl"
          >
            <div class="space-y-8">
              <div
                v-for="item in displayedRoutine"
                :key="item.time"
                class="flex gap-8 group"
              >
                <div
                  class="text-primary-light font-bold min-w-[120px] pt-1 group-hover:text-secondary transition-colors text-sm md:text-base"
                >
                  {{ item.time }}
                </div>
                <div
                  class="relative pb-8 border-l border-white/10 pl-8 last:pb-0"
                >
                  <div
                    class="absolute -left-[5px] top-2 w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"
                  ></div>
                  <h4
                    class="text-base md:text-lg font-bold text-gray-200 group-hover:text-white transition-colors"
                  >
                    {{ item.activity }}
                  </h4>
                </div>
              </div>

              <!-- See More Button -->
              <div class="pt-4 flex justify-center lg:justify-start">
                <button
                  @click="showAllRoutine = !showAllRoutine"
                  class="flex items-center gap-2 text-primary-light hover:text-secondary font-bold transition-all group"
                >
                  <span>{{
                    showAllRoutine
                      ? "Lihat Lebih Sedikit"
                      : "Lihat Selengkapnya"
                  }}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 transition-transform duration-300"
                    :class="{ 'rotate-180': showAllRoutine }"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Extracurriculars -->
    <section class="py-24 bg-gray-50/50">
      <div class="container mx-auto px-4 md:px-6 text-center mb-16 space-y-6">
        <div
          class="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest"
        >
          Pengembangan Diri
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
          Ekstrakurikuler & <span class="text-primary">Minat Bakat</span>
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto text-lg font-light">
          Kami menyediakan wadah yang luas bagi santri untuk mengeksplorasi
          potensi diri, mengasah kreativitas, dan membangun jiwa kepemimpinan.
        </p>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-3 mt-10">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            class="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            :class="
              activeCategory === cat
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            "
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="container mx-auto px-4 md:px-6 min-h-[600px]">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <transition-group name="list">
            <div
              v-for="extra in filteredExtras"
              :key="extra.name"
              class="group relative bg-white rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 border border-gray-100 shadow-sm hover:shadow-2xl overflow-hidden"
            >
              <!-- Decorative element -->
              <div
                class="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"
              ></div>

              <div class="relative z-10">
                <div
                  class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-primary group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      :d="extra.icon"
                    />
                  </svg>
                </div>

                <div class="mb-4">
                  <span
                    class="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full border border-primary/10"
                  >
                    {{ extra.category }}
                  </span>
                </div>

                <h4
                  class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors"
                >
                  {{ extra.name }}
                </h4>

                <p class="text-gray-500 leading-relaxed font-light text-sm">
                  {{ extra.description }}
                </p>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24">
      <div class="container mx-auto px-4 md:px-6">
        <div
          class="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div
            class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
          ></div>
          <div class="relative z-10 space-y-8">
            <h2
              class="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto"
            >
              Mulai Langkah Pertama <br />
              <span class="text-secondary">Menuju Kesuksesan</span>
            </h2>
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <NuxtLink
                to="/contact"
                class="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all active:scale-95"
              >
                Konsultasi Pendidikan
              </NuxtLink>
              <button
                class="w-full sm:w-auto bg-primary-dark border border-white/20 text-white hover:bg-primary-dark/80 px-12 py-5 rounded-2xl font-bold text-lg transition-all"
              >
                Download Brosur PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 2s ease-in-out,
    transform 2s ease-out;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.fade-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
.list-move {
  transition: transform 0.5s ease;
}
</style>
