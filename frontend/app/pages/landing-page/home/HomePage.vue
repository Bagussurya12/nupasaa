<script setup>
definePageMeta({
  layout: "default",
});

const stats = [
  { label: "Santri Aktif", value: "300+" },
  { label: "Tenaga Pengajar", value: "10+" },
  { label: "Program Unggulan", value: "5" },
  { label: "Tahun Berdiri", value: "1993" },
];

const programs = [
  {
    title: "Tahfidz Al-Qur'an",
    description:
      "Program menghafal Al-Qur'an 30 Juz dengan metode mutqin dan sanad.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Kajian Kitab Kuning",
    description:
      "Pendalaman literatur klasik Islam (Turots) untuk mencetak ulama masa depan.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Pendidikan Formal",
    description:
      "Integrasi kurikulum pesantren dengan kurikulum nasional (SMP & SMA).",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

const facilities = [
  {
    name: "Masjid Jami'",
    image:
      "https://images.unsplash.com/photo-1765025121245-fc78fe005a45?q=80&w=3048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Asrama Nyaman",
    image:
      "https://images.unsplash.com/photo-1543364972-12a04a63ce01?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Laboratorium Komputer",
    image:
      "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lapangan Olahraga",
    image:
      "https://images.unsplash.com/photo-1738836082547-ee0b8f18ff1b?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
</script>

<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Pesantren Background"
          class="w-full h-full object-cover brightness-[0.4]"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-transparent"
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
            Pendaftaran Santri Baru TA 2024/2025 Telah Dibuka
          </div>
          <h1 class="text-5xl md:text-7xl font-bold leading-tight">
            Membentuk Generasi
            <span class="text-secondary">Rabbani</span> Berakhlak Qur'ani
          </h1>
          <p class="text-xl text-gray-200 leading-relaxed max-w-2xl">
            Pondok Pesantren Nurul Hidayah Cabang Parung Sapi berkomitmen
            memberikan pendidikan Islam terbaik dengan memadukan nilai-nilai
            luhur kepesantrenan dan kemajuan teknologi.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button
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
            </button>
          </div>
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
              class="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800"
                alt="About Pesantren"
                class="w-full h-full object-cover"
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
              Didirikan sejak tahun 1998, Pondok Pesantren Nurul Hidayah Parung
              Sapi telah menjadi mercusuar ilmu di wilayah Bogor. Kami fokus
              pada pembentukan karakter santri yang tangguh, mandiri, dan
              istiqomah dalam menjalankan syariat Islam.
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
                  <p class="text-sm text-gray-500">
                    Kombinasi ilmu agama dan umum.
                  </p>
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
                  <p class="text-sm text-gray-500">
                    Lulusan universitas ternama.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="text-primary font-bold flex items-center gap-2 group"
            >
              Lihat Profil Selengkapnya
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
            Lingkungan Belajar yang Kondusif
          </h2>
        </div>
        <button
          class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold transition-all"
        >
          Lihat Semua Fasilitas
        </button>
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
              Siap Memulai Perjalanan Ilmu yang Berkah?
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
</style>
