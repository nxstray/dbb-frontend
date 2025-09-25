<template>
  <nav class="bg-[var(--color-merino)] p-2 flex items-center relative h-16">
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <p class="text-[var(--color-rebel)] text-lg font-semibold">
        Welcome To Admin page
      </p>
    </div>

    <router-link
      to="/"
      class="ml-auto p-2 text-sm rounded-lg bg-[var(--color-rebel)] text-white hover:text-[var(--color-cardinal)]"
    >
      <button>Home</button>
    </router-link>
  </nav>
</template>

<script></script>
