<template>
  <div class="min-h-screen bg-[var(--color-merino)] flex flex-col">
    <Navbar />
    <div class="flex-grow flex items-center justify-center">
      <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-center mb-6 text-[var(--color-rebel)]">
          Register
        </h2>

        <form class="space-y-4" @submit.prevent="handleRegister">
          <div>
            <label class="block text-sm font-medium text-[var(--color-rebel)]">Nama</label>
            <input
              v-model="username"
              type="text"
              class="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-santafe)]"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-[var(--color-rebel)]">Email</label>
            <input
              v-model="email"
              type="email"
              class="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-santafe)]"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-[var(--color-rebel)]">Password</label>
            <input
              v-model="password"
              type="password"
              class="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-santafe)]"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full py-2 bg-[var(--color-santafe)] text-white rounded-lg hover:bg-[var(--color-rebel)]"
          >
            Register
          </button>
        </form>

        <p class="mt-4 text-sm text-center text-gray-600">
          Sudah punya akun?
          <router-link to="/login" class="text-[var(--color-cardinal)] font-medium">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { registerUser } from "../services/authService";
import Navbar from "@/components/Navbar.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");

const handleRegister = async () => {
  try {
    await registerUser(username.value, email.value, password.value);
    alert("Registrasi berhasil, silakan login!");
    router.push("/login");
  } catch (err) {
    alert(err.response?.data || "Registrasi gagal!");
  }
};
</script>