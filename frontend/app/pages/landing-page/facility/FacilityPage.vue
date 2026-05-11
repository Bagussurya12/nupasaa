<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const facilities = [
  {
    category: "Ibadah",
    items: [
      {
        name: "Masjid Jami' Nurul Hidayah",
        description:
          "Pusat kegiatan spiritual dan ibadah harian santri dengan kapasitas hingga 1.000 jamaah.",
        image:
          "https://images.unsplash.com/photo-1765025121245-fc78fe005a45?q=80&w=1200",
      },
    ],
  },
  {
    category: "Akademik",
    items: [
      {
        name: "Ruang Kelas Modern",
        description:
          "Ruang belajar yang nyaman dilengkapi dengan sarana multimedia untuk mendukung proses KBM.",
        image:
          "https://images.unsplash.com/photo-1541339907198-e087563f02b1?q=80&w=1200",
      },
      {
        name: "Laboratorium Komputer",
        description:
          "Fasilitas komputasi modern untuk menunjang literasi digital dan pembelajaran IT santri.",
        image:
          "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?q=80&w=1200",
      },
      {
        name: "Perpustakaan (Maktabah)",
        description:
          "Koleksi ribuan kitab kuning dan buku pengetahuan umum untuk menunjang riset santri.",
        image:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200",
      },
    ],
  },
  {
    category: "Penunjang",
    items: [
      {
        name: "Asrama Santri",
        description:
          "Hunian yang bersih dan teratur dengan pengawasan asatidzah 24 jam untuk membentuk kemandirian.",
        image:
          "https://images.unsplash.com/photo-1543364972-12a04a63ce01?q=80&w=1200",
      },
      {
        name: "Lapangan Olahraga",
        description:
          "Sarana olahraga yang luas (Futsal, Basket, Badminton) untuk menjaga kebugaran santri.",
        image:
          "https://images.unsplash.com/photo-1738836082547-ee0b8f18ff1b?q=80&w=1200",
      },
      {
        name: "Kantin & Ruang Makan",
        description:
          "Area makan yang higienis dengan menu bergizi seimbang yang disiapkan setiap hari.",
        image:
          "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=1200",
      },
    ],
  },
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1738836082547-ee0b8f18ff1b?q=80&w=2340&auto=format&fit=crop"
          alt="Facilities Hero"
          class="w-full h-full object-cover brightness-[0.35]"
        />
        <div class="absolute inset-0 bg-primary/30 backdrop-blur-[1px]"></div>
      </div>

      <div
        class="container mx-auto px-4 relative z-10 text-center space-y-6 mt-20"
      >
        <div
          class="inline-block px-4 py-1.5 bg-primary-light/20 text-white rounded-full text-sm font-bold uppercase tracking-widest animate-fade-in border border-white/20"
        >
          Sarana & Prasarana
        </div>
        <h1
          class="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up"
        >
          Fasilitas Terbaik untuk <br />
          <span class="text-secondary">Kenyamanan Santri</span>
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl mx-auto font-light">
          Kami menyediakan lingkungan belajar dan tempat tinggal yang kondusif
          guna mendukung perkembangan intelektual dan spiritual santri secara
          maksimal.
        </p>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div
          v-for="(category, catIndex) in facilities"
          :key="category.category"
          :class="['mb-24 last:mb-0', catIndex % 2 === 1 ? '' : '']"
        >
          <div class="flex items-center gap-4 mb-12">
            <h2 class="text-3xl font-bold text-gray-900">
              {{ category.category }}
            </h2>
            <div
              class="flex-grow h-px bg-gradient-to-r from-primary/20 to-transparent"
            ></div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="item in category.items" :key="item.name" class="group">
              <div
                class="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-lg mb-6 border border-gray-100"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"
                ></div>
              </div>
              <h3
                class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors"
              >
                {{ item.name }}
              </h3>
              <p class="text-gray-600 leading-relaxed font-light">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Virtual Tour / CTA Section -->
    <section class="py-24 bg-gray-50 border-t border-gray-100">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div
              class="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold uppercase tracking-widest"
            >
              Visit Us
            </div>
            <h2
              class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Ingin Melihat Langsung <br />
              <span class="text-primary">Fasilitas Kami?</span>
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Kami dengan senang hati menyambut kunjungan calon santri dan orang
              tua untuk melihat langsung lingkungan pendidikan di Pondok
              Pesantren Nurul Hidayah Parung Sapi.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <NuxtLink
                to="/contact"
                class="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-center transition-all shadow-xl shadow-primary/20"
              >
                Jadwalkan Kunjungan
              </NuxtLink>
              <button
                class="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-2xl font-bold transition-all"
              >
                Lihat Video Profil
              </button>
            </div>
          </div>

          <div class="relative">
            <div
              class="aspect-video bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden relative group cursor-pointer border-[8px] border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1523213139764-42c2140d04f6?q=80&w=1200"
                alt="Video Placeholder"
                class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  class="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <!-- Decorative Elements -->
            <div
              class="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full -z-10 animate-pulse"
            ></div>
            <div
              class="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-2xl -z-10 rotate-12"
            ></div>
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
</style>
