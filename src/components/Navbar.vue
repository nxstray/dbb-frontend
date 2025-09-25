<template>
  <nav class="bg-[var(--color-santafe)] text-[var(--color-rebel)] shadow-md">
    <div class="container mx-auto flex justify-between items-center py-3 px-4">
      <div class="flex items-center space-x-2">
        <span class="text-2xl">🍴</span>
        <span class="font-bold text-lg">Dapur Bunda Bahagia</span>
      </div>

      <div class="hidden md:flex space-x-6">
        <RouterLink to="/" class="hover:text-[var(--color-cardinal)]"
          >Home</RouterLink
        >
        <RouterLink
          to="/makanan-utama"
          class="hover:text-[var(--color-cardinal)]"
          >Makanan Utama</RouterLink
        >
        <RouterLink to="/appetizer" class="hover:text-[var(--color-cardinal)]"
          >Appetizer</RouterLink
        >
        <RouterLink to="/minuman" class="hover:text-[var(--color-cardinal)]"
          >Minuman</RouterLink
        >
      </div>

      <div class="flex items-center space-x-4">
        <button class="relative">
          <span class="material-icons">shopping_cart</span>
          <span
            class="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1"
            >0</span
          >
        </button>

       
        <RouterLink to="/login">
          <span class="material-icons cursor-pointer">account_circle</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
