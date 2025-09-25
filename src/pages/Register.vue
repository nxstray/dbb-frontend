<template>
  <div class="min-h-screen bg-[var(--color-merino)] flex flex-col">


    <div class="flex-grow flex items-center justify-center">
      <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2
          class="text-2xl font-bold text-center mb-6 text-[var(--color-rebel)]"
        >
          Register
        </h2>

        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-[var(--color-rebel)]"
              >Nama</label
            >
            <input
              type="text"
              class="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-santafe)]"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-[var(--color-rebel)]"
              >Email</label
            >
            <input
              type="email"
              class="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-santafe)]"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-[var(--color-rebel)]"
              >Password</label
            >
            <input
              type="password"
              class="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-santafe)]"
            />
          </div>
          <button
            class="w-full py-2 bg-[var(--color-santafe)] text-white rounded-lg hover:bg-[var(--color-rebel)]"
          >
            Register
          </button>
        </form>

        <p class="mt-4 text-sm text-center text-gray-600">
          Sudah punya akun?
          <router-link
            to="/login"
            class="text-[var(--color-cardinal)] font-medium"
            >Login</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
