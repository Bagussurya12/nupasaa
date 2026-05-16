<template>
  <footer class="bg-gray-900 text-white pt-20 pb-10">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 mb-16">
        <!-- Brand -->
        <div class="space-y-6">
          <div class="flex items-center gap-2">
            <img
              src="/assets/nupasa-logo-remove.png"
              alt="Nupasa Logo"
              class="w-10 h-10 object-contain"
            />
            <div class="flex flex-col">
              <span class="font-bold text-lg leading-tight">Nurul Hidayah</span>
              <span
                class="text-xs text-primary-light font-medium tracking-widest uppercase"
                >Parung Sapi</span
              >
            </div>
          </div>
          <p class="text-gray-400 leading-relaxed">
            Membentuk Cendikiawan Muslim untuk Peradaban Modern.
          </p>
          <div class="flex gap-4">
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                ></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-bold text-lg mb-8 relative">
            Tautan Cepat
            <span
              class="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"
            ></span>
          </h4>
          <ul class="space-y-4 text-gray-400">
            <li>
              <a href="/" class="hover:text-primary transition-colors"
                >Beranda</a
              >
            </li>
            <li>
              <a href="/profile" class="hover:text-primary transition-colors"
                >Profil Pesantren</a
              >
            </li>
            <li>
              <a href="/program" class="hover:text-primary transition-colors"
                >Program Pendidikan</a
              >
            </li>
            <li>
              <a href="/prestasi" class="hover:text-primary transition-colors"
                >Prestasi Santri</a
              >
            </li>
            <li>
              <a href="/facility" class="hover:text-primary transition-colors"
                >Sarana & Fasilitas</a
              >
            </li>
            <li>
              <a href="/contact" class="hover:text-primary transition-colors"
                >Hubungi Kami</a
              >
            </li>
          </ul>
        </div>

        <!-- Portals -->
        <div>
          <h4 class="font-bold text-lg mb-8 relative">
            Portal Layanan
            <span
              class="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"
            ></span>
          </h4>
          <ul class="space-y-4 text-gray-400">
            <li>
              <a
                href="/landing-page/portal/portal-alumni"
                class="hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span
                  class="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"
                ></span>
                Portal Alumni
              </a>
            </li>
            <li>
              <a
                href="/landing-page/portal/siak-portal"
                class="hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span
                  class="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"
                ></span>
                SIAK (Akademik)
              </a>
            </li>
            <li>
              <a
                href="/landing-page/portal/spsb-portal"
                class="hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span
                  class="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"
                ></span>
                SPSB (Pendaftaran)
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-bold text-lg mb-8 relative">
            Informasi Kontak
            <span
              class="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"
            ></span>
          </h4>
          <ul class="space-y-5 text-gray-400">
            <li class="flex gap-3 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span
                >Jl. Raya Parung Sapi, Sipak, Kec. Jasinga, Kabupaten Bogor,
                Jawa Barat 16670</span
              >
            </li>
            <li class="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>0856-1025-891</span>
            </li>
            <li class="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@nupasa.sch.id</span>
            </li>
          </ul>
        </div>

        <!-- Google Maps Preview / Newsletter -->
        <div>
          <h4 class="font-bold text-lg mb-8 relative">
            Lokasi Kami
            <span
              class="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"
            ></span>
          </h4>
          <div
            class="rounded-xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all shadow-lg border border-gray-800"
          >
            <div
              class="h-40 bg-gray-800 flex items-center justify-center text-gray-500 italic"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1724591829366!2d106.48302207566076!3d-6.499839293492346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42751dd3a7a7b1%3A0xfb1cdb0a39d674ed!2sPondok%20Pesantren%20Nurul%20Hidayah%20Parung%20Sapi!5e0!3m2!1sid!2sid!4v1777630155319!5m2!1sid!2sid"
                width="600"
                height="450"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm"
      >
        <div class="flex justify-center items-center">
          Developed by
          <span class="font-bold text-primary ml-2">Soratech</span>
        </div>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors"
            >Kebijakan Privasi</a
          >
          <a href="#" class="hover:text-white transition-colors"
            >Syarat & Ketentuan</a
          >
        </div>
        <p class="text-center">
          &copy; {{ currentYear }} Nurul Hidayah Parung Sapi.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
