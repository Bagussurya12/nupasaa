<template>
  <div class="min-h-screen flex flex-col selection:bg-primary selection:text-white">
    <TheHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
