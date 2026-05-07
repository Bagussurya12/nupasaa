<script setup>
const error = useError()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="max-w-lg w-full text-center space-y-8">
      <!-- Icon/Illustration -->
      <div class="relative inline-block">
        <div class="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div class="absolute -top-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {{ error.statusCode }}
        </div>
      </div>

      <div class="space-y-4">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight">
          Halaman Tidak Ditemukan
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed">
          Mohon maaf, halaman yang Anda cari tidak tersedia atau sedang dalam pemeliharaan. Silakan kembali ke beranda.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-6">
        <button 
          @click="handleError"
          class="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Kembali ke Beranda
        </button>
        <a 
          href="https://wa.me/628123456789" 
          target="_blank"
          class="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
        >
          Hubungi Admin
        </a>
      </div>

      <div class="pt-12 text-sm text-gray-400">
        <p>Nurul Hidayah Parung Sapi &bull; Platform Informasi Santri</p>
      </div>
    </div>
  </div>
</template>
