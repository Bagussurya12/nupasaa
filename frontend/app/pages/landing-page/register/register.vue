<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const registrationLevels = [
  {
    name: "Madrasah Tsanawiyah",
    description: "Jenjang pendidikan menengah pertama (SMP) berbasis pesantren.",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  },
  {
    name: "Madrasah Aliyah",
    description: "Jenjang pendidikan menengah atas (SMA) berbasis pesantren.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

const importantPoints = [
  {
    title: "Kesesuaian Data",
    description: "Pastikan data yang diinput sesuai dengan Ijazah, Akte Kelahiran, Kartu Keluarga, serta KTP Kedua Orang Tua.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Lampiran Foto",
    description: "Siapkan foto lampiran yang diperlukan sesuai petunjuk formulir untuk proses verifikasi data.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Prosedur Pengiriman",
    description: "Setelah formulir terisi lengkap, kirimkan data sesuai dengan petunjuk yang tertera di akhir formulir.",
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
  },
  {
    title: "Arsip Fisik",
    description: "Jika datang langsung ke lokasi, harap membawa berkas fisik sebagai arsip administrasi pondok pesantren.",
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
  },
];

const openExternalForm = () => {
  window.open('https://bit.ly/formulirnupasa', '_blank');
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-24 pt-20">
    <!-- Hero Section -->
    <section class="relative py-24 bg-primary overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10 text-center text-white space-y-6">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight animate-fade-in uppercase">
          Formulir Pendaftaran <br />
          <span class="text-secondary-light">PP Nurul Hidayah Parungsapi</span>
        </h1>
        <p class="text-xl text-primary-light max-w-2xl mx-auto font-light">
          Silakan lengkapi data pendaftaran untuk jenjang Madrasah Tsanawiyah (MTs) atau Madrasah Aliyah (MA).
        </p>
      </div>
    </section>

    <div class="container mx-auto px-4 -mt-16 relative z-20">
      <div class="max-w-5xl mx-auto">
        <!-- Selection Cards -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <div 
            v-for="level in registrationLevels" 
            :key="level.name"
            class="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="level.icon" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ level.name }}</h3>
            <p class="text-gray-500 font-light leading-relaxed">{{ level.description }}</p>
          </div>
        </div>

        <!-- Information Content -->
        <div class="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
          <div class="absolute -right-20 -top-20 w-80 h-80 bg-secondary/5 rounded-full"></div>
          
          <div class="relative z-10 space-y-12">
            <div class="text-center space-y-4">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Poin Yang Harus Diperhatikan</h2>
              <div class="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
            </div>

            <!-- Points Grid -->
            <div class="grid sm:grid-cols-2 gap-10">
              <div 
                v-for="(point, index) in importantPoints" 
                :key="point.title"
                class="flex gap-6 items-start group"
              >
                <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300 border border-secondary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="point.icon" />
                  </svg>
                </div>
                <div class="space-y-2">
                  <h4 class="text-lg font-bold text-gray-800">{{ index + 1 }}. {{ point.title }}</h4>
                  <p class="text-gray-600 text-sm leading-relaxed font-light">{{ point.description }}</p>
                </div>
              </div>
            </div>

            <!-- CTA Section -->
            <div class="pt-8 text-center space-y-8">
              <div class="p-8 bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
                <p class="text-gray-600 font-medium text-lg">
                  Pastikan Anda telah membaca dan memahami seluruh poin di atas sebelum melanjutkan pengisian formulir.
                </p>
              </div>
              
              <button 
                @click="openExternalForm"
                class="inline-flex items-center gap-4 bg-secondary hover:bg-secondary-dark text-white px-16 py-6 rounded-2xl font-bold text-2xl shadow-2xl shadow-secondary/30 hover:-translate-y-1 transition-all active:scale-95 group"
              >
                Daftar Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <p class="text-gray-400 text-sm font-light">
                *Klik tombol di atas untuk diarahkan ke halaman Google Form resmi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
