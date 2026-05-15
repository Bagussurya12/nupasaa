<script setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div
    class="min-h-screen relative flex items-center justify-center bg-[#f8fafc] overflow-hidden px-4 py-20 mt-20"
  >
    <!-- Background Decorative Elements -->
    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        class="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 -right-24 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
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
            class="relative w-32 h-32 md:w-44 md:h-44 bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem] shadow-xl flex items-center justify-center border border-gray-100 mx-auto rotate-3 group hover:rotate-0 transition-transform duration-500"
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
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6">
          <div
            class="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-[0.2em]"
          >
            Coming Soon
          </div>
          <h1
            class="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight"
          >
            SPSB <span class="text-primary italic font-serif">Portal</span>
          </h1>
          <p
            class="text-lg md:text-2xl text-gray-500 font-light leading-relaxed max-w-xl mx-auto"
          >
            Sistem Penerimaan Santri Baru sedang dipersiapkan untuk mempermudah
            langkah awal putra-putri Anda menimba ilmu di
            <span class="text-gray-900 font-medium"
              >Nurul Hidayah Parungsapi</span
            >.
          </p>
        </div>

        <!-- Progress Indicator -->
        <div class="max-w-md mx-auto space-y-4 pt-4">
          <div class="flex justify-between items-end">
            <div class="text-left">
              <span
                class="block text-xs font-bold text-gray-400 uppercase tracking-widest"
                >Tahap Pengembangan</span
              >
              <span class="text-primary font-bold"
                >Integrasi Formulir Digital</span
              >
            </div>
            <span class="text-2xl font-black text-primary/20">85%</span>
          </div>
          <div
            class="h-3 w-full bg-gray-100 rounded-full overflow-hidden p-1 shadow-inner"
          >
            <div
              class="h-full bg-primary rounded-full relative overflow-hidden w-[85%]"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              ></div>
            </div>
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

      <!-- Footer Support -->
      <p class="text-center mt-12 text-gray-400 text-sm font-medium">
        Butuh bantuan pendaftaran? Hubungi
        <a
          href="https://wa.me/628561025891?text=Assalamu%27alaikum%20Ustadz%2C%20saya%20ingin%20mendaftar%20sebagai%20santri"
          target="_blank"
          class="text-primary hover:underline underline-offset-4 font-bold flex inline-flex items-center gap-1.5 justify-center"
        >
          Layanan Admin (WhatsApp)
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}

.animate-shimmer {
  animation: shimmer 3s infinite linear;
}

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
