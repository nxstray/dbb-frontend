<template>
  <div>
    <div class="flex h-screen">
      <Sidebar />

      <main class="flex-1 overflow-y-auto bg-gray-100">
        <NavAdmin />

        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/pages/Sidebar.vue";
import NavAdmin from "@/pages/AdminNavbar.vue";

export default {
  components: {
    Sidebar,
    NavAdmin,
  },
};
</script>


