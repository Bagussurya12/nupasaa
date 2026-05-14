<script setup>
definePageMeta({
  layout: "default",
});

const visi =
  "Membentuk Cendekiawan Islam ahlussunah wal jama'ah yang berwawasan agama yang mendalam & berpengetahuan modern";
const misi = [
  "Berpengetahuan agama",
  "Berakhlakul Karimah",
  "Memiliki Kemandirian & Jiwa Kepemimpinan",
  "Mampu bersaing disegala bidang",
  "Berwawasan Modern & Islami",
  "Berpikir visioner, melangkah lebih maju menuju masa depan gemilang.",
];

const history = [
  {
    year: "1993",
    event: "Pendirian & Perintisan Nurul Hidayah Parung Sapi.",
  },
  {
    year: "1994",
    event: "Peresmian bangunan pertama dan dimulainya program pengajian tetap.",
  },
  { year: "2011", event: "Pembangunan Masjid Aisyah" },
  { year: "2015", event: "Pembangunan asrama putra dan putri modern." },
  {
    year: "2017",
    event:
      "Pembukaan Pendidikan Madrasah Tsanawiyah (MTs) & Madrasah Aliyah (MA).",
  },
  {
    year: "2026",
    event: "Transformasi digital dan pengembangan sarana teknologi informasi.",
  },
];

const leaders = [
  {
    name: "KH. Muhammad Ibnu Majah",
    role: "Pimpinan Pondok Pesantren",
    image: "/assets/profile/aa.jpg",
  },
  {
    name: "K.Babang Muhammad Syarif, S.Pd.I",
    role: "Kepala Sekolah & Kesantrian",
    image: "/assets/profile/Ka-babang.jpeg",
  },
  {
    name: "Ustadzah Mariatul Qibtiyah, S.Pd.I",
    role: "Kepala Keputrian",
    image: "/assets/profile/teh-kiki.jpg",
  },
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="/assets/profile/abah-profile.jpg"
          alt="Pesantren Profile"
          class="w-full h-full object-cover brightness-[0.35] scale-105"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary-dark/90"
        ></div>
      </div>

      <div
        class="container mx-auto px-6 relative z-10 text-center space-y-6 pt-20 pb-12"
      >
        <h1
          class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] animate-fade-in-up"
        >
          Mengenal Lebih Dekat <br class="hidden sm:block" />
          <span class="text-secondary-light">Pondok Pesantren</span>
          <br class="hidden sm:block" />
          <span class="text-secondary-light">Nurul Hidayah</span>
          Parung Sapi
        </h1>
        <p
          class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100"
        >
          Dedikasi sepenuh hati dalam melahirkan generasi unggul—cerdas dalam
          berpikir, kuat dalam iman, dan teguh dalam aqidah.
        </p>
      </div>
    </section>

    <!-- About Section / Highlight -->
    <section class="py-20 md:py-32 bg-gray-50/50 relative overflow-hidden">
      <!-- Decorative background -->
      <div
        class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      ></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-10">
          <div
            class="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-bold uppercase tracking-[0.2em] animate-fade-in"
          >
            Nilai & Khidmat
          </div>
          <h2
            class="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Berdiri Sejak 1993, <br class="hidden md:block" />
            <span class="text-primary">Berkhidmat untuk Umat</span>.
          </h2>
          <div class="relative px-4 md:px-12">
            <div
              class="absolute -left-2 top-0 bottom-0 w-1.5 bg-secondary rounded-full hidden md:block"
            ></div>
            <p
              class="text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic"
            >
              Didirikan oleh Almarhum Almaghfurlah
              <span class="font-bold text-gray-900">KH. Bukhori Muslim</span>
              dan
              <span class="font-bold text-gray-900"
                >Ustadzah Hj. Eneng Maspufah</span
              >
              atas restu guru beliau,
              <span class="font-bold text-gray-900">Mama KH. Uqon Bulqoeni</span
              >, kami hadir sebagai mercusuar pendidikan Islam di wilayah
              Parungsapi.
            </p>
            <div class="mt-8">
              <p
                class="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
              >
                Kini, di bawah kepemimpinan
                <span class="font-bold text-primary"
                  >KH. Muhammad Ibnu Majah</span
                >, Pondok Pesantren Nurul Hidayah terus berkembang menjadi
                lembaga yang mencetak cendikiawan muslim modern tanpa
                meninggalkan nilai-nilai luhur kepesantrenan.
              </p>
            </div>
          </div>
          <div class="flex justify-center pt-8">
            <div class="flex gap-2">
              <div class="w-12 h-1 bg-primary rounded-full"></div>
              <div class="w-4 h-1 bg-secondary rounded-full"></div>
              <div class="w-12 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- History Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12 md:mb-20 space-y-4">
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900">
              Sejarah & Perjalanan
            </h2>
            <div class="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div
            class="relative space-y-10 md:space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent"
          >
            <div
              v-for="(item, index) in history"
              :key="item.year"
              class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <!-- Dot -->
              <div
                class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110"
              >
                <div class="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <!-- Card -->
              <div
                class="w-[calc(100%-3.5rem)] md:w-[calc(50%-3rem)] bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all ml-auto md:ml-0"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="font-bold text-primary text-2xl tracking-tight">
                    {{ item.year }}
                  </div>
                </div>
                <div class="text-gray-600 leading-relaxed text-sm md:text-base">
                  {{ item.event }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visi Misi Section -->
    <section class="py-20 md:py-32 bg-primary relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute -top-24 -left-24 w-64 md:w-96 h-64 md:h-96 border-4 border-white/5 rounded-full"
        ></div>
        <div
          class="absolute -bottom-32 -right-32 w-80 md:w-[30rem] h-80 md:h-[30rem] border-4 border-white/5 rounded-full"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"
        ></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 md:gap-20">
          <!-- Visi -->
          <div class="space-y-8">
            <div class="space-y-4">
              <span
                class="text-secondary-light font-bold tracking-[0.2em] uppercase text-sm"
                >Aspirasi Kami</span
              >
              <h2
                class="text-3xl md:text-5xl font-bold text-white border-l-8 border-secondary pl-6"
              >
                Visi
              </h2>
            </div>
            <p
              class="text-xl md:text-3xl text-white font-medium italic leading-[1.4]"
            >
              "{{ visi }}"
            </p>
            <div class="relative group pt-4">
              <div
                class="absolute inset-0 bg-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"
              ></div>
              <img
                src="/assets/profile/visi-misi.jpg"
                alt="Visi Image"
                class="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-video md:aspect-auto brightness-90 group-hover:brightness-100 transition-all duration-500"
              />
            </div>
          </div>

          <!-- Misi -->
          <div class="space-y-8">
            <div class="space-y-4">
              <span
                class="text-secondary-light font-bold tracking-[0.2em] uppercase text-sm"
                >Langkah Kami</span
              >
              <h2
                class="text-3xl md:text-5xl font-bold text-white border-l-8 border-secondary pl-6"
              >
                Misi
              </h2>
            </div>
            <div class="space-y-4 md:space-y-6">
              <p
                class="text-xl md:text-2xl text-white/90 font-medium italic mb-4"
              >
                Membentuk generasi Islam yang:
              </p>
              <div
                v-for="(item, index) in misi"
                :key="index"
                class="flex gap-4 md:gap-6 bg-white/5 p-5 md:p-6 rounded-2xl md:rounded-[1.5rem] backdrop-blur-md border border-white/10 hover:bg-white/10 hover:translate-x-2 transition-all duration-300"
              >
                <div
                  class="w-10 md:w-12 h-10 md:h-12 bg-secondary rounded-xl flex items-center justify-center text-white font-bold shrink-0 shadow-lg"
                >
                  {{ index + 1 }}
                </div>
                <p
                  class="text-base md:text-lg text-white/90 font-light leading-relaxed self-center"
                >
                  {{ item }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="py-20 md:py-32 bg-gray-50">
      <div class="container mx-auto px-6 text-center mb-16 md:mb-24 space-y-6">
        <div
          class="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-bold uppercase tracking-[0.2em]"
        >
          Struktur Organisasi
        </div>
        <h2
          class="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
        >
          Pimpinan & Tenaga Pengajar
        </h2>
        <p
          class="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Didukung oleh asatidzah yang berkompeten dan berdedikasi tinggi dalam
          membimbing para santri menuju masa depan gemilang.
        </p>
      </div>

      <div class="container mx-auto px-6">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <div
            v-for="leader in leaders"
            :key="leader.name"
            class="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 group"
          >
            <div class="aspect-[4/5] overflow-hidden relative">
              <img
                :src="leader.image"
                :alt="leader.name"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8"
              >
                <div
                  class="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p
                    class="text-white text-sm md:text-base italic leading-relaxed"
                  >
                    {{ leader.bio }}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-8 md:p-10 text-center space-y-3">
              <h3
                class="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors"
              >
                {{ leader.name }}
              </h3>
              <div
                class="w-12 h-1 bg-secondary/30 mx-auto rounded-full group-hover:w-24 transition-all duration-500"
              ></div>
              <p
                class="text-primary font-bold tracking-widest uppercase text-xs md:text-sm"
              >
                {{ leader.role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 md:py-32 bg-white">
      <div class="container mx-auto px-6">
        <div
          class="bg-secondary rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-white shadow-2xl relative overflow-hidden group"
        >
          <!-- Animated Background Blobs -->
          <div
            class="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-black/5 rounded-full -translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-700"
          ></div>

          <div
            class="space-y-6 max-w-2xl relative z-10 text-center lg:text-left"
          >
            <h2 class="text-3xl md:text-5xl font-bold leading-[1.2]">
              Jadilah Bagian dari Perjalanan Kami
            </h2>
            <p
              class="text-lg md:text-xl text-white/90 font-light leading-relaxed"
            >
              Pendaftaran santri baru telah dibuka. Hubungi kami untuk informasi
              lebih lanjut mengenai kurikulum dan fasilitas.
            </p>
          </div>

          <div
            class="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0 w-full sm:w-auto"
          >
            <NuxtLink
              to="/contact"
              class="bg-white text-secondary hover:bg-gray-100 px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-95 text-center"
            >
              Hubungi Kami
            </NuxtLink>
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              class="bg-secondary-dark/30 hover:bg-secondary-dark/50 border border-white/20 px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg transition-all active:scale-95 text-center flex items-center justify-center gap-2"
            >
              <span>WhatsApp</span>
            </a>
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
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
