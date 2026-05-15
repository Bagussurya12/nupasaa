<script setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div
    class="min-h-screen relative flex items-center justify-center bg-[#f0f9ff] overflow-hidden px-4 py-20 mt-20"
  >
    <!-- Background Decorative Elements -->
    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 -left-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-3xl w-full relative z-10">
      <div
        class="bg-white/70 backdrop-blur-xl border border-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] p-8 md:p-16 text-center space-y-10 animate-page-in"
      >
        <!-- Static Icon with Premium Styling -->
        <div class="relative inline-block">
          <div
            class="absolute inset-0 bg-secondary/10 rounded-full scale-150 blur-2xl"
          ></div>
          <div
            class="relative w-32 h-32 md:w-44 md:h-44 bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem] shadow-xl flex items-center justify-center border border-gray-100 mx-auto -rotate-3 group hover:rotate-0 transition-transform duration-500"
          >
            <div class="p-6 bg-secondary/5 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 md:h-24 md:w-24 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6">
          <div
            class="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-bold uppercase tracking-[0.2em]"
          >
            Connecting Generations
          </div>
          <h1
            class="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight"
          >
            Portal <span class="text-secondary italic font-serif">Alumni</span>
          </h1>
          <p
            class="text-lg md:text-2xl text-gray-500 font-light leading-relaxed max-w-xl mx-auto"
          >
            Ruang silaturahmi digital untuk seluruh alumni
            <span class="text-gray-900 font-medium"
              >Nurul Hidayah Parungsapi</span
            >
            sedang dalam tahap pengembangan.
          </p>
        </div>

        <!-- Community Stats (Decorative) -->
        <div class="grid grid-cols-3 gap-4 pt-4">
          <div class="p-4 bg-white/50 rounded-2xl border border-gray-100">
            <span class="block text-2xl font-bold text-gray-900">1000+</span>
            <span
              class="text-[10px] uppercase tracking-wider text-gray-400 font-bold"
              >Alumni Tersebar</span
            >
          </div>
          <div class="p-4 bg-white/50 rounded-2xl border border-gray-100">
            <span class="block text-2xl font-bold text-gray-900">30+</span>
            <span
              class="text-[10px] uppercase tracking-wider text-gray-400 font-bold"
              >Angkatan</span
            >
          </div>
          <div class="p-4 bg-white/50 rounded-2xl border border-gray-100">
            <span class="block text-2xl font-bold text-gray-900">10+</span>
            <span
              class="text-[10px] uppercase tracking-wider text-gray-400 font-bold"
              >Provinsi</span
            >
          </div>
        </div>

        <!-- Action -->
        <div class="pt-6">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-3 bg-gray-900 hover:bg-secondary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all hover:-translate-y-1 active:scale-95 group"
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

      <!-- Motivation Support -->
      <p class="text-center mt-12 text-gray-400 text-sm font-medium">
        Ingin berbagi info alumni? Kirim pesan melalui
        <a
          href="mailto:alumni@nupasa.sch.id"
          class="text-secondary hover:underline underline-offset-4 font-bold"
          >Sekretariat Alumni</a
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
