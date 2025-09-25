<template>
  <aside class="w-64 bg-[var(--color-rebel)] text-white p-5 space-y-4">
    <div class="flex justify-center space-x-4 mb-4">
      <img
        src="../images/afwan.jpg"
        alt="User 1"
        class="w-25 h-25 rounded-full border-2 border-white shadow object-cover"
      />
      <img
        src="../images/brann.jpg"
        alt="User 2"
        class="w-25 h-25 rounded-full border-2 border-white shadow object-cover"
      />
    </div>

    <router-link
      to="/admin"
      class="text-xl font-bold mb-4 hover:text-[var(--color-deco)]"
    >
      Hello, Admin Ganteng
    </router-link>
    <ul class="space-y-2 mt-4">
      <li>
        <router-link to="/admin" class="hover:text-[var(--color-deco)]">
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link
          to="/manajemen-stok"
          class="hover:text-[var(--color-deco)]"
        >
          Manajemen Stok
        </router-link>
      </li>
      <li>
        <a href="" class="hover:text-[var(--color-deco)]">Laporan Keuangan</a>
      </li>
      <li>
        <a href="" class="hover:text-[var(--color-deco)]">Laporan Transaksi</a>
      </li>
    </ul>
  </aside>
</template>
