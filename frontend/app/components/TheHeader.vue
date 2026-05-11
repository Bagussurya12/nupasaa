<script setup>
const isMenuOpen = ref(false);
const scrolled = ref(false);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Profil", href: "/profile" },
  { name: "Program", href: "/program" },
  { name: "Fasilitas", href: "/facility" },
  { name: "Kontak", href: "/contact" },
];

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrolled.value = window.scrollY > 20;
  });
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'md:bg-transparent bg-white/90 backdrop-blur-md shadow-md py-3'
        : 'bg-transparent py-5',
    ]"
  >
    <div class="container mx-auto px-4 md:px-6">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-3 group">
          <div
            class="relative w-14 h-14 flex items-center justify-center transition-all duration-300"
          >
            <img
              src="/assets/nupasa-logo-remove.png"
              alt="Nupasa Logo"
              class="w-10 h-10 object-contain"
            />
          </div>
          <div class="flex flex-col">
            <span
              :class="[
                'font-bold leading-tight text-lg tracking-tight',
                'text-gray-900 md:text-white',
              ]"
              >Nurul Hidayah</span
            >
            <span
              :class="[
                'text-xs font-medium uppercase tracking-[0.2em]',
                scrolled ? 'text-primary md:text-secondary' : 'text-primary md:text-white/80',
              ]"
              >Parung Sapi</span
            >
          </div>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            :class="[
              'font-medium transition-colors hover:text-secondary',
              'text-gray-700 md:text-white',
            ]"
          >
            {{ link.name }}
          </a>
          <button
            class="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md"
          >
            Daftar Sekarang
          </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-gray-900 focus:outline-none mx-6"
        >
          <svg
            v-if="!isMenuOpen"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-[-10px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-10px]"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white border-t mt-3 py-4 shadow-xl"
      >
        <div class="flex flex-col gap-4 px-4">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click="isMenuOpen = false"
            class="text-gray-800 font-medium py-2 border-b border-gray-50 last:border-0"
          >
            {{ link.name }}
          </a>
          <button
            class="bg-primary text-white px-6 py-3 mx-5 rounded-xl font-semibold mt-2 shadow-lg active:scale-95 transition-transform"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>
