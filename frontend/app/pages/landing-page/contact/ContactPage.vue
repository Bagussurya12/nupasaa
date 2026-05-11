<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const contactInfo = [
  {
    title: "Alamat",
    description:
      "Jl. Parung Sapi No. 123, Kec. Jasinga, Kab. Bogor, Jawa Barat",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Telepon",
    description: "(021) 1234 5678",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Email",
    description: "info@nurulhidayah.sch.id",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "WhatsApp",
    description: "0812 3456 7890",
    icon: "M17 8l4 4m0 0l-4 4m4-4H3",
    color: "bg-emerald-50 text-emerald-600",
  },
];

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
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523213139764-42c2140d04f6?q=80&w=2340&auto=format&fit=crop"
          alt="Contact Hero"
          class="w-full h-full object-cover brightness-[0.3]"
        />
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
          <div
            v-for="info in contactInfo"
            :key="info.title"
            class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
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
          </div>
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
      <div class="container mx-auto px-4 md:px-6 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
          Punya Pertanyaan Lain?
        </h2>
        <div class="max-w-3xl mx-auto space-y-4">
          <div
            class="p-6 bg-gray-50 rounded-2xl text-left hover:bg-gray-100 transition-colors cursor-pointer flex justify-between items-center group"
          >
            <span class="font-bold text-gray-800"
              >Bagaimana prosedur pendaftaran santri baru?</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div
            class="p-6 bg-gray-50 rounded-2xl text-left hover:bg-gray-100 transition-colors cursor-pointer flex justify-between items-center group"
          >
            <span class="font-bold text-gray-800"
              >Berapa biaya pendidikan di Nurul Hidayah?</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
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
</style>
