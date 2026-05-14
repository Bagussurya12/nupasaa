<script setup>
import { ref, onMounted, onUnmounted } from "vue";
definePageMeta({
  layout: "default",
});

const stats = [
  { label: "Santri Aktif", value: "300+" },
  { label: "Tenaga Pengajar", value: "10+" },
  { label: "Program Ekstrakurikuler", value: "5+" },
  { label: "Tahun Berdiri", value: "1993" },
];

const carouselImages = [
  "/assets/home-carousel/compressed-keluarga-1.jpg",
  "/assets/home-carousel/compressed-alumni-group-1.jpg",
  "/assets/home-carousel/compressed-foto-silat.jpg",
  "/assets/home-carousel/compressed-santriawan-group-1.jpg",
  "/assets/home-carousel/compressed-santriawati-group-1.jpg",
  "/assets/home-carousel/compressed-santriawan-group-2.jpg",
  "/assets/home-carousel/compressed-santriawati-group-2.jpg",
  "/assets/home-carousel/compressed-santriawan-group-3.jpg",
  "/assets/home-carousel/compressed-santriawati-group-3.jpg",
  "/assets/home-carousel/compressed-santriawan-group-4.jpg",
  "/assets/home-carousel/compressed-santriawati-person-1.jpg",
  "/assets/home-carousel/compressed-santriwati-person-2.jpg",
];

const currentSlide = ref(0);
let timer = null;

const startTimer = () => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % carouselImages.length;
  }, 5000);
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

const programs = [
  {
    title: "Kajian Kitab Kuning",
    description:
      "Pendalaman khazanah literatur klasik Islam sebagai fondasi untuk melahirkan generasi ulama masa depan yang berilmu, berakhlak, dan mampu menjawab tantangan zaman.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Pendidikan Formal",
    description:
      "Pengintegrasian kurikulum pesantren dengan kurikulum nasional (MTs & MA) untuk menciptakan pendidikan yang seimbang antara pendalaman ilmu agama dan penguasaan ilmu umum.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Ekstrakurikuler",
    description:
      "Beragam kegiatan ekstrakurikuler yang dirancang untuk mengembangkan bakat dan minat santri, mencakup bidang olahraga, seni, hingga teknologi secara seimbang dan berkelanjutan.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const facilities = [
  {
    name: "Masjid Jami'",
    image: "/assets/home-facilities/masjid.JPG",
  },
  {
    name: "Asrama Nyaman",
    image: "/assets/home-facilities/asrama.JPG",
  },
  {
    name: "Lapangan Olahraga",
    image: "/assets/home-facilities/lapangan-olahraga.jpg",
  },
  {
    name: "Laboratorium Komputer",
    image:
      "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Coming Soon",
  },
];
</script>

<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20">
      <div class="absolute inset-0 z-0 overflow-hidden">
        <transition-group name="fade" tag="div" class="relative w-full h-full">
          <div
            v-for="(image, index) in carouselImages"
            :key="image"
            v-show="currentSlide === index"
            class="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out"
          >
            <img
              :src="image"
              alt="Pesantren Background"
              class="w-full h-full object-cover brightness-[0.4] scale-105"
            />
          </div>
        </transition-group>
        <div
          class="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-transparent z-10"
        ></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div class="max-w-3xl space-y-8 animate-fade-in-up">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-primary-light font-medium text-sm"
          >
            <span
              class="w-2 h-2 bg-secondary rounded-full animate-pulse"
            ></span>
            Pendaftaran Santri Baru TA 2026/2027 Telah Dibuka
          </div>
          <h1 class="text-5xl md:text-7xl font-bold leading-tight">
            Membentuk Cendikiawan
            <span class="text-secondary">Muslim</span> untuk Peradaban Modern.
          </h1>
          <p class="text-xl text-gray-200 leading-relaxed max-w-2xl">
            Pondok Pesantren Nurul Hidayah Cabang Parung Sapi berkomitmen
            Membentuk Cendekiawan Islam ahlussunah wal jama'ah yang berwawasan
            agama yang mendalam & berpengetahuan modern
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <NuxtLink
              to="/profile"
              class="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-secondary/20 flex items-center justify-center gap-2"
            >
              Pelajari Lebih Lanjut
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Slide Indicators -->
        <div class="flex gap-3 mt-12">
          <button
            v-for="(_, index) in carouselImages"
            :key="index"
            @click="currentSlide = index"
            class="h-1.5 rounded-full transition-all duration-500"
            :class="[
              currentSlide === index
                ? 'w-12 bg-secondary'
                : 'w-4 bg-white/30 hover:bg-white/50',
            ]"
          ></button>
        </div>
      </div>

      <!-- Floating Stats -->
      <div
        class="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 hidden lg:block"
      >
        <div class="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-4 gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center border-r last:border-0 border-gray-100"
          >
            <div class="text-3xl font-bold text-primary mb-1">
              {{ stat.value }}
            </div>
            <div
              class="text-sm text-gray-500 font-medium uppercase tracking-wider"
            >
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="profil" class="py-24 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div
              class="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-white flex items-center justify-center"
            >
              <img
                src="/assets/nupasa-logo-remove.png"
                alt="About Pesantren"
                class="w-full h-full object-contain p-4"
              />
            </div>
            <div
              class="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-3xl -z-0"
            ></div>
            <div
              class="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-0"
            ></div>
          </div>
          <div class="space-y-8">
            <div
              class="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest"
            >
              Tentang Kami
            </div>
            <h2
              class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Pusat Pendidikan Islam Berbasis
              <span class="text-primary">Adab & Ilmu</span>
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Didirikan sejak tahun 1993, Pondok Pesantren Nurul Hidayah Cabang
              Parung Sapi telah menjadi mercusuar ilmu di wilayah Bogor Barat.
              Kami fokus pada pembentukan karakter santri yang tangguh, mandiri,
              dan istiqomah dalam menjalankan syariat Islam.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="flex gap-4">
                <div
                  class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Kurikulum Terpadu</h4>
                </div>
              </div>
              <div class="flex gap-4">
                <div
                  class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Asatidzah Kompeten</h4>
                </div>
              </div>
            </div>
            <button
              class="text-primary font-bold flex items-center gap-2 group"
            >
              <NuxtLink to="profile">Lihat Profil Selengkapnya</NuxtLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section id="program" class="py-24 bg-gray-50">
      <div class="container mx-auto px-4 md:px-6 text-center mb-16">
        <div
          class="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold uppercase tracking-widest mb-4"
        >
          Layanan Pendidikan
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
          Program Unggulan Kami
        </h2>
        <p class="text-gray-500 mt-4 max-w-2xl mx-auto">
          Kami merancang kurikulum yang relevan untuk menghadapi tantangan zaman
          tanpa meninggalkan nilai tradisi.
        </p>
      </div>

      <div class="container mx-auto px-4 md:px-6">
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="program in programs"
            :key="program.title"
            class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group"
          >
            <div
              class="w-16 h-16 bg-primary/5 group-hover:bg-primary transition-colors rounded-2xl flex items-center justify-center mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-primary group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="program.icon"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              {{ program.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ program.description }}
            </p>
            <a
              href="#"
              class="text-primary font-semibold flex items-center gap-2"
            >
              Detail Program
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
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities Section -->
    <section id="fasilitas" class="py-24 bg-white">
      <div
        class="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
      >
        <div class="max-w-2xl">
          <div
            class="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest mb-4"
          >
            Fasilitas
          </div>
          <h2
            class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Lingkungan Belajar yang <span class="text-primary">Nyaman</span>
            <br />
            & Kondusif
          </h2>
        </div>
        <NuxtLink
          to="facility"
          class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold transition-all"
        >
          Lihat Semua Fasilitas
        </NuxtLink>
      </div>

      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="facility in facilities"
            :key="facility.name"
            class="relative group h-80 rounded-3xl overflow-hidden cursor-pointer"
          >
            <img
              :src="facility.image"
              :alt="facility.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"
            ></div>
            <div class="absolute bottom-6 left-6 right-6">
              <div
                v-if="facility.status"
                class="inline-block px-3 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-2"
              >
                {{ facility.status }}
              </div>
              <h4 class="text-white font-bold text-xl">{{ facility.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="kontak" class="py-24">
      <div class="container mx-auto px-4 md:px-6">
        <div
          class="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2"
          ></div>

          <div class="relative z-10 space-y-8">
            <h2
              class="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto"
            >
              Awali perjalanan ilmu yang bermakna
            </h2>
            <p class="text-xl text-primary-light max-w-2xl mx-auto">
              Mari bergabung menjadi bagian dari keluarga besar Pondok Pesantren
              Nurul Hidayah Parung Sapi.
            </p>
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            >
              <button
                class="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-all"
              >
                Hubungi WhatsApp
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

/* Carousel Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 1.5s ease-in-out,
    transform 10s ease-out;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.fade-leave-to {
  opacity: 0;
}
</style>
