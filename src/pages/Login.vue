<template>
  <div class="min-h-screen bg-[var(--color-merino)] flex flex-col">
    <Navbar />
    <div class="flex-grow flex items-center justify-center">
      <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-center mb-6 text-[var(--color-rebel)]">
          Login
        </h2>

        <form class="space-y-4" @submit.prevent="handleLogin">
          <div>
            <label class="block text-sm font-medium text-[var(--color-rebel)]">Email</label>
            <input
              v-model="email"
              type="email"
              required
              class="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-santafe)]"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-[var(--color-rebel)]">Password</label>
            <input
              v-model="password"
              type="password"
              required
              class="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-santafe)]"
            />
          </div>
          <button
            type="submit"
            class="w-full py-2 bg-[var(--color-santafe)] text-white rounded-lg hover:bg-[var(--color-rebel)]"
          >
            Login
          </button>
        </form>

        <p class="mt-4 text-sm text-center text-gray-600">
          Belum punya akun?
          <router-link to="/register" class="text-[var(--color-cardinal)] font-medium">
            Register
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { loginUser } from "../services/authService";
import Navbar from "@/components/Navbar.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    console.log('=== LOGIN ATTEMPT ===');
    console.log('Email:', email.value);
    
    const res = await loginUser(email.value, password.value);
    
    console.log('=== LOGIN RESPONSE DEBUG ===');
    console.log('Full response:', res);
    console.log('Response data:', res.data);
    console.log('User object:', res.data.user);
    
    if (res.data && res.data.success) {
      const userData = res.data.user;
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("role", res.data.role || "pelanggan");
      
      console.log('SAVED TO LOCALSTORAGE:');
      console.log('User data:', userData);
      console.log('Verify save:', localStorage.getItem('user'));
      
      alert("Login sukses!");
      router.push("/");
    } else {
      alert(res.data?.message || "Login gagal!");
    }
  } catch (err) {
    console.error('Login error:', err);
    console.log('Error response:', err.response?.data);
    alert(err.response?.data?.message || "Login gagal!");
  }
};
</script>