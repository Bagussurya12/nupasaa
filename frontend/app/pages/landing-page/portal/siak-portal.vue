<script setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div
    class="min-h-screen relative flex items-center justify-center bg-[#fdfcfb] overflow-hidden px-4 py-20 mt-20"
  >
    <!-- Background Decorative Elements -->
    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        class="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/4 -left-24 w-80 h-80 bg-gray-200/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-3xl w-full relative z-10">
      <div
        class="bg-white/70 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] p-8 md:p-16 text-center space-y-10 animate-page-in"
      >
        <!-- Static Icon with Premium Styling -->
        <div class="relative inline-block">
          <div
            class="absolute inset-0 bg-primary/10 rounded-full scale-150 blur-2xl"
          ></div>
          <div
            class="relative w-32 h-32 md:w-44 md:h-44 bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem] shadow-xl flex items-center justify-center border border-gray-100 mx-auto group hover:scale-105 transition-all duration-500"
          >
            <div class="p-6 bg-primary/5 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 md:h-24 md:w-24 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6">
          <div
            class="inline-block px-4 py-1.5 bg-gray-100 text-gray-500 rounded-full text-sm font-bold uppercase tracking-[0.2em]"
          >
            Digital Academic System
          </div>
          <h1
            class="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight"
          >
            SIAK <span class="text-primary italic font-serif">Portal</span>
          </h1>
          <p
            class="text-lg md:text-2xl text-gray-500 font-light leading-relaxed max-w-xl mx-auto"
          >
            Sistem Informasi Akademik sedang dalam tahap pengembangan untuk
            menghadirkan pemantauan nilai dan perkembangan santri secara
            <span class="text-gray-900 font-medium">Real-Time</span>.
          </p>
        </div>

        <!-- Features List (Decorative) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
          <div
            class="flex items-center gap-3 p-4 bg-white/50 rounded-2xl border border-gray-50 text-left group hover:bg-white transition-colors"
          >
            <div
              class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform"
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <span class="text-sm font-bold text-gray-700"
              >Laporan Hasil Belajar</span
            >
          </div>
          <div
            class="flex items-center gap-3 p-4 bg-white/50 rounded-2xl border border-gray-50 text-left group hover:bg-white transition-colors"
          >
            <div
              class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform"
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002-2z"
                />
              </svg>
            </div>
            <span class="text-sm font-bold text-gray-700"
              >Informasi Akademik</span
            >
          </div>
        </div>

        <!-- Action -->
        <div class="pt-6">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-3 bg-gray-900 hover:bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all hover:-translate-y-1 active:scale-95 group"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Beranda
          </NuxtLink>
        </div>
      </div>

      <!-- Support Info -->
      <p class="text-center mt-12 text-gray-400 text-sm font-medium">
        Pertanyaan seputar akademik? Hubungi
        <a
          href="mailto:akademik@nupasa.sch.id"
          class="text-primary hover:underline underline-offset-4 font-bold"
          >Bagian Akademik</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
@keyframes pageIn {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.98);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.animate-page-in {
  animation: pageIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
