<script setup>
definePageMeta({
  layout: 'default'
})

const visi = "Mewujudkan generasi Muslim yang beraqidah Salaf, berakhlak mulia, cerdas, dan mandiri."
const misi = [
  "Menyelenggarakan pendidikan Islam berbasis Al-Qur'an dan Sunnah sesuai pemahaman Salafush Shalih.",
  "Membina karakter santri agar memiliki adab dan akhlakul karimah.",
  "Mengembangkan potensi akademik dan non-akademik santri secara optimal.",
  "Membekali santri dengan kemandirian dan keterampilan hidup (life skills)."
]

const history = [
  { year: '1993', event: 'Perintisan awal oleh para asatidzah di wilayah Parung Sapi.' },
  { year: '1998', event: 'Peresmian bangunan pertama dan dimulainya program pengajian tetap.' },
  { year: '2005', event: 'Pembukaan jenjang pendidikan formal (MTs/SMP).' },
  { year: '2015', event: 'Pembangunan asrama santri putra dan putri modern.' },
  { year: '2024', event: 'Transformasi digital dan pengembangan sarana teknologi informasi.' }
]

const leaders = [
  { 
    name: 'KH. Ahmad Fauzi, Lc.', 
    role: 'Pimpinan Pondok', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&fit=crop',
    bio: 'Lulusan Universitas Islam Madinah dengan pengalaman dakwah lebih dari 20 tahun.'
  },
  { 
    name: 'Ustadz Ridwan Hakim', 
    role: 'Kepala Kesantrian', 
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&fit=crop',
    bio: 'Fokus pada pembinaan karakter dan disiplin santri sehari-hari.'
  },
  { 
    name: 'Ustadzah Siti Aminah', 
    role: 'Kepala Keputrian', 
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&fit=crop',
    bio: 'Mengelola program khusus muslimah dan tahfidz putri.'
  }
]
</script>

<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2340&auto=format&fit=crop" 
          alt="Pesantren Profile" 
          class="w-full h-full object-cover brightness-[0.4]"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary-dark/80"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10 text-center space-y-6">
        <div class="inline-block px-4 py-1.5 bg-secondary text-white rounded-full text-sm font-bold uppercase tracking-widest animate-fade-in">
          Profil Pesantren
        </div>
        <h1 class="text-4xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up">
          Mengenal Lebih Dekat <br/> <span class="text-secondary-light">Nurul Hidayah</span>
        </h1>
        <p class="text-xl text-gray-100 max-w-3xl mx-auto font-light leading-relaxed">
          Dedikasi penuh untuk mencetak generasi yang tidak hanya cerdas secara intelektual, namun juga kokoh secara spiritual dan beraqidah lurus.
        </p>
      </div>
    </section>

    <!-- History Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16 space-y-4">
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900">Sejarah & Perjalanan</h2>
            <div class="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            <div v-for="(item, index) in history" :key="item.year" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-on-scroll">
              <!-- Dot -->
              <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2">
                <svg class="fill-current w-3 h-3" viewBox="0 0 12 12">
                  <path d="M12 4L4.929 11.071 1.393 7.536 2.807 6.121 4.929 8.243 10.586 2.586z" />
                </svg>
              </div>
              <!-- Card -->
              <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ml-auto md:ml-0">
                <div class="flex items-center justify-between space-x-2 mb-2">
                  <div class="font-bold text-primary text-xl">{{ item.year }}</div>
                </div>
                <div class="text-gray-600 leading-relaxed">{{ item.event }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visi Misi Section -->
    <section class="py-24 bg-primary relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div class="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 border-4 border-white rounded-full"></div>
      </div>
      
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-20">
          <div class="space-y-8">
            <h2 class="text-4xl font-bold text-white border-l-8 border-secondary pl-6">Visi Kami</h2>
            <p class="text-2xl text-primary-light font-medium italic leading-relaxed">
              "{{ visi }}"
            </p>
            <div class="pt-8">
               <img src="https://images.unsplash.com/photo-1543364972-12a04a63ce01?q=80&w=800" alt="Visi Image" class="rounded-3xl shadow-2xl opacity-80" />
            </div>
          </div>
          
          <div class="space-y-8">
            <h2 class="text-4xl font-bold text-white border-l-8 border-secondary pl-6">Misi Kami</h2>
            <div class="space-y-6">
              <div v-for="(item, index) in misi" :key="index" class="flex gap-6 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all">
                <div class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {{ index + 1 }}
                </div>
                <p class="text-lg text-white font-light leading-relaxed">
                  {{ item }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4 md:px-6 text-center mb-16 space-y-4">
        <div class="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest">
          Struktur Organisasi
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900">Pimpinan & Tenaga Pengajar</h2>
        <p class="text-gray-500 max-w-2xl mx-auto">Didukung oleh asatidzah yang berkompeten dan berdedikasi tinggi dalam membimbing para santri.</p>
      </div>

      <div class="container mx-auto px-4 md:px-6">
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="leader in leaders" :key="leader.name" class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div class="aspect-[4/5] overflow-hidden relative">
              <img :src="leader.image" :alt="leader.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p class="text-white text-sm italic">{{ leader.bio }}</p>
              </div>
            </div>
            <div class="p-8 text-center space-y-2">
              <h3 class="text-2xl font-bold text-gray-900">{{ leader.name }}</h3>
              <p class="text-primary font-bold tracking-widest uppercase text-sm">{{ leader.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="bg-secondary rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-white shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div class="space-y-6 max-w-2xl relative z-10">
            <h2 class="text-4xl md:text-5xl font-bold leading-tight">Jadilah Bagian dari Perjalanan Kami</h2>
            <p class="text-xl text-white/80 font-light">
              Pendaftaran santri baru telah dibuka. Hubungi kami untuk informasi lebih lanjut mengenai kurikulum dan fasilitas.
            </p>
          </div>
          
          <div class="flex gap-4 relative z-10 shrink-0">
            <NuxtLink to="/contact" class="bg-white text-secondary hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-95">
              Hubungi Kami
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
