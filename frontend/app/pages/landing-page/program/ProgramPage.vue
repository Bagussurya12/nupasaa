<script setup>
definePageMeta({
  layout: 'default'
})

const corePrograms = [
  {
    title: 'Tahfidz Al-Qur\'an',
    subtitle: 'Program Unggulan Hafalan 30 Juz',
    description: 'Fokus pada kualitas bacaan (tahsin), kekuatan hafalan (mutqin), serta pemahaman makna ayat. Santri dibimbing secara intensif oleh pengajar bersanad.',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1200',
    features: ['Sabaq, Sabqi, Manzil', 'Ujian Tasmi\' 5-30 Juz', 'Program Itqan & Sanad']
  },
  {
    title: 'Turots (Kitab Kuning)',
    subtitle: 'Kajian Literatur Klasik Islam',
    description: 'Pendalaman kitab-kitab klasik karya ulama terdahulu dalam bidang Aqidah, Fiqh, Nahwu, Shorof, dan Akhlak guna mencetak santri yang berilmu dalam.',
    image: 'https://images.unsplash.com/photo-1590076214537-17f7754bb50a?q=80&w=1200',
    features: ['Metode Sorogan & Bandongan', 'Kajian Fathul Qorib', 'Bahasa Arab Aktif']
  },
  {
    title: 'Pendidikan Formal',
    subtitle: 'SMP & SMA Terakreditasi',
    description: 'Integrasi kurikulum pesantren dengan kurikulum nasional (Kemendikbud/Kemenag) untuk memastikan santri memiliki ijazah formal dan kompetensi akademik umum.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200',
    features: ['Ijazah Negara', 'Persiapan Masuk PTN', 'Ekskul Olimpiade']
  }
]

const dailyRoutine = [
  { time: '04:00 - 05:30', activity: 'Shalat Shubuh & Zikir Pagi' },
  { time: '05:30 - 07:00', activity: 'Halaqah Tahfidz Pagi' },
  { time: '07:30 - 12:00', activity: 'Sekolah Formal & Madrasah' },
  { time: '13:30 - 15:00', activity: 'Istirahat & Qailullah' },
  { time: '16:00 - 17:30', activity: 'Ekstrakurikuler & Olahraga' },
  { time: '18:30 - 20:30', activity: 'Kajian Kitab & Halaqah Malam' },
  { time: '21:00', activity: 'Istirahat Malam' }
]

const extras = [
  { name: 'Pramuka', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
  { name: 'Beladiri', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { name: 'Hadroh', icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3' },
  { name: 'Jurnalistik', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' }
]
</script>

<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2340&auto=format&fit=crop" 
          alt="Programs Hero" 
          class="w-full h-full object-cover brightness-[0.3]"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10 text-center space-y-6">
        <div class="inline-block px-4 py-1.5 bg-secondary text-white rounded-full text-sm font-bold uppercase tracking-widest animate-fade-in shadow-lg">
          Kurikulum Terpadu
        </div>
        <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
          Program Pendidikan <br/> <span class="text-secondary-light">Masa Depan</span>
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl mx-auto font-light">
          Mencetak lulusan yang menguasai ilmu agama secara mendalam namun tetap kompetitif dalam bidang akademik umum dan teknologi.
        </p>
      </div>
    </section>

    <!-- Core Programs Detail -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div v-for="(program, index) in corePrograms" :key="program.title" 
          class="grid lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0"
          :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
        >
          <div :class="{ 'lg:order-2': index % 2 === 1 }" class="space-y-8">
            <div class="space-y-4">
              <h3 class="text-secondary font-bold tracking-widest uppercase text-sm">{{ program.subtitle }}</h3>
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{{ program.title }}</h2>
              <div class="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>
            <p class="text-lg text-gray-600 leading-relaxed font-light">
              {{ program.description }}
            </p>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li v-for="feature in program.features" :key="feature" class="flex items-center gap-3 text-gray-700">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="font-medium">{{ feature }}</span>
              </li>
            </ul>
          </div>
          
          <div :class="{ 'lg:order-1': index % 2 === 1 }" class="relative">
            <div class="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white">
              <img :src="program.image" :alt="program.title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full -z-0"></div>
            <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full -z-0"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Daily Routine Section -->
    <section class="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-20 items-center">
          <div class="space-y-8">
            <h2 class="text-4xl md:text-5xl font-bold leading-tight">Rutinitas Harian <br/> <span class="text-primary-light">Kehidupan Santri</span></h2>
            <p class="text-xl text-gray-400 font-light leading-relaxed">
              Disiplin adalah kunci pembentukan karakter. Setiap detik di pesantren dirancang untuk memberikan manfaat duniawi dan ukhrawi.
            </p>
            <div class="pt-8">
              <img src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800" alt="Routine Image" class="rounded-[2.5rem] grayscale opacity-50 border border-white/10" />
            </div>
          </div>
          
          <div class="bg-white/5 backdrop-blur-md rounded-[3rem] p-10 md:p-12 border border-white/10 shadow-2xl">
            <div class="space-y-8">
              <div v-for="item in dailyRoutine" :key="item.time" class="flex gap-8 group">
                <div class="text-primary-light font-bold min-w-[120px] pt-1 group-hover:text-secondary transition-colors">{{ item.time }}</div>
                <div class="relative pb-8 border-l border-white/10 pl-8 last:pb-0">
                  <div class="absolute -left-[5px] top-2 w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                  <h4 class="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">{{ item.activity }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Extracurriculars -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 md:px-6 text-center mb-16 space-y-4">
        <div class="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold uppercase tracking-widest">
          Pengembangan Diri
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900">Ekstrakurikuler</h2>
        <p class="text-gray-500 max-w-2xl mx-auto">Kami mengasah minat dan bakat santri melalui berbagai organisasi dan klub hobi.</p>
      </div>

      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="extra in extras" :key="extra.name" class="bg-gray-50 rounded-[2rem] p-10 text-center hover:bg-primary hover:text-white transition-all duration-300 group cursor-pointer shadow-sm">
            <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="extra.icon" />
              </svg>
            </div>
            <h4 class="text-xl font-bold">{{ extra.name }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24">
      <div class="container mx-auto px-4 md:px-6">
        <div class="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div class="relative z-10 space-y-8">
            <h2 class="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
              Mulai Langkah Pertama <br/> <span class="text-secondary">Menuju Kesuksesan</span>
            </h2>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <NuxtLink to="/contact" class="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all active:scale-95">
                Konsultasi Pendidikan
              </NuxtLink>
              <button class="w-full sm:w-auto bg-primary-dark border border-white/20 text-white hover:bg-primary-dark/80 px-12 py-5 rounded-2xl font-bold text-lg transition-all">
                Download Brosur PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}
</style>
