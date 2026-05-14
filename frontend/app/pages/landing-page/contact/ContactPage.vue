<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const contactInfo = [
  {
    title: "Alamat",
    description:
      "Jl. Raya Parung Sapi, Sipak, Kec. Jasinga, Kabupaten Bogor, Jawa Barat 16670",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    color: "bg-blue-50 text-blue-600",
    link: "https://www.google.com/maps/dir//Pondok+Pesantren+Nurul+Hidayah+Parung+Sapi,+Kalongsawah,+Jasinga,+Bogor+Regency,+West+Java+16670",
  },
  {
    title: "Telepon",
    description: "0856-8445-533",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    color: "bg-green-50 text-green-600",
    link: "tel:08568445533",
  },
  {
    title: "Email",
    description: "info@nupasa.sch.id",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "bg-purple-50 text-purple-600",
    link: "mailto:info@nupasa.sch.id",
  },
  {
    title: "WhatsApp",
    description: "+62 856-8359-285",
    icon: "M12.031 2c-5.508 0-9.985 4.477-9.985 9.985 0 1.761.462 3.474 1.336 4.988l-1.422 5.187 5.187-1.422c1.474.793 3.125 1.22 4.884 1.22 5.508 0 9.985-4.477 9.985-9.985 0-5.508-4.477-9.985-9.985-9.985zm4.395 13.913c-.22.616-1.282 1.15-1.77 1.22-.488.071-.98.113-2.614-.547-2.146-.867-3.523-3.056-3.63-3.2-.107-.144-.875-1.164-.875-2.226 0-1.061.554-1.583.75-1.802.196-.219.428-.274.571-.274.143 0 .285.002.408.008.129.006.302-.049.473.363.171.412.589 1.433.639 1.536.051.103.085.223.017.359-.068.137-.103.223-.205.342-.103.119-.215.267-.307.359-.103.103-.211.215-.091.421.12.206.533.877 1.144 1.421.785.699 1.445.916 1.651 1.02.206.103.325.086.446-.051.12-.137.513-.599.649-.804.137-.206.273-.171.461-.103.188.068 1.197.565 1.402.667.206.103.342.154.393.24.051.085.051.496-.169 1.112z",
    color: "bg-emerald-50 text-emerald-600",
    link: "https://wa.me/628568359285",
  },
];

const carouselImages = [
  "/assets/contact-carousel/santriawan-group-1.jpg",
  "/assets/contact-carousel/santriawan-group.jpg",
  "/assets/contact-carousel/santriawati-group-1.jpg",
  "/assets/contact-carousel/santriawati-group-2.jpg",
];

const currentSlide = ref(0);
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitted = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  isSubmitting.value = false;
  submitted.value = true;

  // Reset form
  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";

  setTimeout(() => {
    submitted.value = false;
  }, 5000);
};

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % carouselImages.length;
  }, 5000);
});

const faqs = reactive([
  {
    question: "Apa saja unit pendidikan yang tersedia di lembaga ini?",
    answer:
      "Nurul Hidayah Parungsapi menyediakan jenjang pendidikan yang lengkap, meliputi Pondok Pesantren, Madrasah Tsanawiyah (MTs), Madrasah Aliyah (MA), hingga jenjang Perguruan Tinggi (S1) yang saat ini bekerja sama dengan STAI Nida El Adabi. Selain itu, terdapat juga Majlis Ta'lim sebagai bagian dari unit pendidikannya.",
    isOpen: false,
  },
  {
    question:
      "Kurikulum seperti apa yang diterapkan dalam sistem pendidikannya?",
    answer:
      'Pesantren ini menerapkan "Kurikulum Tujuh Tahun", di mana santri diharapkan menempuh pendidikan minimal selama tujuh tahun untuk menguasai berbagai tingkatan kitab. Sistem pendidikannya menggunakan manhaj Salafussolih dan Ahlusunnah wal jama\'ah dengan fokus pada pendalaman kitab kuning melalui metode seperti Sorogan, Bandongan, dan Hafalan.',
    isOpen: false,
  },
  {
    question:
      "Apa keunggulan dan prestasi yang pernah diraih oleh pesantren ini?",
    answer:
      "Keunggulan utamanya adalah santri dibekali kemampuan membaca kitab kuning, penguasaan bahasa asing (Arab dan Inggris), serta tidak tertinggal dalam dunia teknologi (digital). Dalam hal prestasi, pesantren ini berhasil meraih gelar Juara Umum bidang MQK (Musabaqah Qira'atil Kutub) tingkat Kabupaten Bogor pada tahun 2024 dan meraih Juara 2 pada tahun 2026 dengan menjuarai berbagai kategori lomba kitab.",
    isOpen: false,
  },
]);
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <transition-group name="fade">
          <img
            v-for="(image, index) in carouselImages"
            :key="image"
            v-show="currentSlide === index"
            :src="image"
            alt="Contact Hero"
            class="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
          />
        </transition-group>
        <div class="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10 text-center space-y-4">
        <h1 class="text-4xl md:text-6xl font-bold text-white animate-fade-in">
          Hubungi Kami
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl mx-auto font-light">
          Silakan hubungi kami untuk informasi lebih lanjut mengenai
          pendaftaran, program pendidikan, atau kunjungan ke pesantren.
        </p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-20"
        >
          <a
            v-for="info in contactInfo"
            :key="info.title"
            :href="info.link"
            target="_blank"
            class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group block"
          >
            <div
              :class="[
                'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform',
                info.color,
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="info.icon"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ info.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">{{ info.description }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Form & Map Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div
            class="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100"
          >
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Kirim Pesan</h2>
            <p class="text-gray-500 mb-10">
              Isi formulir di bawah ini dan tim kami akan segera menghubungi
              Anda.
            </p>

            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-sm font-semibold text-gray-700 ml-1"
                    >Nama Lengkap</label
                  >
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Contoh: Ahmad Fauzi"
                    class="w-full px-6 py-4 bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 rounded-2xl outline-none transition-all"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-semibold text-gray-700 ml-1"
                    >Email</label
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="email@contoh.com"
                    class="w-full px-6 py-4 bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 rounded-2xl outline-none transition-all"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-semibold text-gray-700 ml-1"
                  >Subjek</label
                >
                <select
                  v-model="form.subject"
                  required
                  class="w-full px-6 py-4 bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 rounded-2xl outline-none transition-all appearance-none"
                >
                  <option value="" disabled selected>Pilih Keperluan</option>
                  <option value="Pendaftaran">Pendaftaran Santri Baru</option>
                  <option value="Informasi">Informasi Umum</option>
                  <option value="Kunjungan">Kunjungan Pesantren</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-semibold text-gray-700 ml-1"
                  >Pesan</label
                >
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="Tuliskan pesan Anda di sini..."
                  class="w-full px-6 py-4 bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 rounded-2xl outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <template v-if="!isSubmitting">
                  Kirim Pesan Sekarang
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </template>
                <template v-else>
                  <svg
                    class="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Mengirim...
                </template>
              </button>

              <transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
              >
                <div
                  v-if="submitted"
                  class="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-center font-medium border border-emerald-100"
                >
                  Pesan Anda telah berhasil dikirim! Kami akan segera
                  menghubungi Anda.
                </div>
              </transition>
            </form>
          </div>

          <!-- Map & Extra Info -->
          <div class="space-y-8">
            <div
              class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 h-[450px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1724591829366!2d106.48302207566076!3d-6.499839293492346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42751dd3a7a7b1%3A0xfb1cdb0a39d674ed!2sPondok%20Pesantren%20Nurul%20Hidayah%20Parung%20Sapi!5e0!3m2!1sid!2sid!4v1777630155319!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

            <div
              class="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl"
            >
              <div
                class="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
              ></div>
              <h3 class="text-2xl font-bold mb-4 relative z-10">
                Waktu Pelayanan
              </h3>
              <ul class="space-y-4 relative z-10 opacity-90">
                <li
                  class="flex justify-between items-center border-b border-white/10 pb-2"
                >
                  <span>Senin - Kamis</span>
                  <span class="font-bold">08:00 - 16:00</span>
                </li>
                <li
                  class="flex justify-between items-center border-b border-white/10 pb-2"
                >
                  <span>Jumat</span>
                  <span class="font-bold">08:00 - 11:30</span>
                </li>
                <li
                  class="flex justify-between items-center border-b border-white/10 pb-2"
                >
                  <span>Sabtu</span>
                  <span class="font-bold">09:00 - 13:00</span>
                </li>
                <li
                  class="flex justify-between items-center text-secondary-light"
                >
                  <span>Minggu</span>
                  <span class="font-bold">Tutup (Janji Temu Only)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Preview -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Punya Pertanyaan Lain?
          </h2>
          <p class="text-gray-500 max-w-2xl mx-auto">
            Berikut adalah beberapa hal yang paling sering ditanyakan mengenai
            lembaga kami.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <button
              @click="faq.isOpen = !faq.isOpen"
              class="w-full p-6 md:p-8 bg-gray-50/50 text-left flex justify-between items-center group transition-colors hover:bg-gray-50"
            >
              <span
                class="font-bold text-lg md:text-xl text-gray-800 transition-colors group-hover:text-primary"
              >
                {{ faq.question }}
              </span>
              <div
                class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform duration-300"
                :class="{ 'rotate-180 bg-primary text-white': faq.isOpen }"
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-[500px] opacity-100"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="max-h-[500px] opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="faq.isOpen" class="bg-white px-8 pb-8 overflow-hidden">
                <div class="h-px bg-gray-100 mb-6"></div>
                <p class="text-gray-600 leading-relaxed text-lg font-light">
                  {{ faq.answer }}
                </p>
              </div>
            </transition>
          </div>
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

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 2s ease-in-out,
    transform 2s ease-out;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.fade-leave-to {
  opacity: 0;
}
</style>
