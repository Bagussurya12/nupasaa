<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const achievements = [
  {
    year: "2024",
    title: "Juara Umum Bidang MQK",
    location: "Kabupaten Bogor",
    description:
      "Pesantren Nurul Hidayah Parungsapi berhasil meraih prestasi membanggakan dengan menjadi Juara Umum dalam perlombaan Musabaqah Qira'atil Kutub (MQK) tingkat Kabupaten Bogor.",
    items: [
      { book: "Adabul Alim Wal Muta’alim", rank: "Juara ke-1" },
      { book: "Safinatunnajah", rank: "Juara ke-1" },
      { book: "Imrithi", rank: "Juara ke-1" },
      { book: "Ummul Barohin", rank: "Juara ke-1" },
      { book: "Khulasoh Nurul Yaqin", rank: "Juara ke-2" },
      { book: "Fathul Mu’in", rank: "Juara ke-3" },
      { book: "Riyadus Sholihin", rank: "Juara ke-3" },
      { book: "Hadist Arba’in", rank: "Juara ke-3" },
    ],
    highlight: true,
  },
  {
    year: "2026",
    title: "Juara 2 Bidang MQK",
    location: "Kabupaten Bogor",
    description:
      "Keberlanjutan prestasi santri di ajang MQK Kabupaten Bogor dengan mempertahankan posisi tiga besar di tingkat kabupaten.",
    items: [
      { book: "Washoya", rank: "Juara ke-1" },
      { book: "Imrithi", rank: "Juara ke-1" },
      { book: "Nuruzholam", rank: "Juara ke-1" },
      { book: "Jauhar Maknun", rank: "Juara ke-2" },
      { book: "Nuruzolam", rank: "Juara ke-3" },
    ],
    highlight: false,
  },
];

const getRankColor = (rank: string) => {
  if (rank.includes("ke-1")) return "bg-yellow-500 text-white";
  if (rank.includes("ke-2")) return "bg-gray-300 text-gray-800";
  if (rank.includes("ke-3")) return "bg-amber-600 text-white";
  return "bg-primary text-white";
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Hero Section -->
    <section
      class="relative py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-hidden"
    >
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
        ></div>
      </div>

      <!-- Floating Icons Background -->
      <div
        class="absolute top-10 left-10 animate-bounce duration-[3s] opacity-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-32 w-32 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>
      <div class="absolute bottom-10 right-10 animate-pulse opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-40 w-40 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>

      <div
        class="container mx-auto px-4 relative z-10 text-center space-y-8 pt-10"
      >
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-secondary-light font-bold uppercase tracking-widest text-sm border border-white/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          Gemilang & Berprestasi
        </div>
        <h1
          class="text-4xl md:text-7xl font-bold text-white leading-tight animate-fade-in uppercase"
        >
          Prestasi Santri <br />
        </h1>
        <p
          class="text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Bukti nyata kualitas bimbingan kitab kuning di Pondok Pesantren Nurul
          Hidayah Parungsapi. Menghasilkan generasi mutafaqqih fiddin yang
          unggul dan kompetitif.
        </p>
      </div>
    </section>

    <div class="container mx-auto px-4 -mt-20 relative z-20 pb-20">
      <div class="max-w-6xl mx-auto space-y-24">
        <!-- Achievement Cards Loop -->
        <div
          v-for="ach in achievements"
          :key="ach.year"
          class="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden relative"
        >
          <!-- Accent Strip -->
          <div
            class="h-3 w-full"
            :class="ach.highlight ? 'bg-yellow-500' : 'bg-primary'"
          ></div>

          <div class="p-8 md:p-16">
            <div class="grid lg:grid-cols-12 gap-16 items-start">
              <!-- Left: Year & Summary -->
              <div class="lg:col-span-5 space-y-8">
                <div
                  class="inline-block px-8 py-4 bg-primary/5 rounded-3xl border border-primary/10"
                >
                  <span
                    class="text-5xl font-black text-primary block leading-none mb-2"
                    >{{ ach.year }}</span
                  >
                  <span
                    class="text-sm font-bold text-secondary uppercase tracking-widest"
                    >{{ ach.location }}</span
                  >
                </div>

                <div class="space-y-4">
                  <h2
                    class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                  >
                    {{ ach.title }}
                  </h2>
                  <div class="w-20 h-1.5 bg-secondary rounded-full"></div>
                </div>

                <p class="text-lg text-gray-500 font-light leading-relaxed">
                  {{ ach.description }}
                </p>
              </div>

              <!-- Right: Items Grid -->
              <div class="lg:col-span-7 space-y-8">
                <h3
                  class="text-xl font-bold text-gray-800 flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Daftar Juara Cabang Kitab
                </h3>

                <div class="grid sm:grid-cols-2 gap-4">
                  <div
                    v-for="item in ach.items"
                    :key="item.book"
                    class="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div class="flex flex-col gap-4">
                      <span
                        class="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit"
                        :class="getRankColor(item.rank)"
                      >
                        {{ item.rank }}
                      </span>
                      <h4
                        class="text-lg font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors"
                      >
                        {{ item.book }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final CTA -->
    <section class="container mx-auto px-4">
      <div
        class="bg-primary-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
        ></div>
        <div class="relative z-10 space-y-8">
          <h2
            class="text-3xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto"
          >
            Ingin Menjadi Bagian dari <br />
            <span class="text-secondary">Generasi Berprestasi?</span>
          </h2>
          <NuxtLink
            to="/register"
            class="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-dark text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all active:scale-95"
          >
            Daftar Sekarang
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
