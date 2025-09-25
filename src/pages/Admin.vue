<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-6">Dashboard Admin</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <div class="bg-white shadow p-6 rounded">
        <h2 class="text-lg font-semibold mb-2">Penjualan</h2>
        <p class="text-4xl font-bold text-blue-600">25</p>
      </div>

      <div class="bg-white shadow p-6 rounded">
        <h2 class="text-lg font-semibold mb-2">Total Transaksi</h2>
        <p class="text-4xl font-bold text-green-600">Rp 5.200.000</p>
      </div>
    </div>

    <div class="space-y-8">
      <div class="bg-white p-6 rounded shadow">
        <h2 class="text-xl font-bold mb-4">Stok Menu per Kategori</h2>
        <LineChart :labels="labels" :datasets="datasets" />
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";

export default {
  components: { LineChart },
  data() {
    return {
      labels: ["Item 1", "Item 2", "Item 3"],
      datasets: [
        {
          label: "Makanan",
          data: [12, 8, 5],
          borderColor: "#ad734e",
          backgroundColor: "rgba(173,115,78,0.2)",
          fill: true,
          tension: 0.3,
        },
        {
          label: "Appetizer",
          data: [10, 6, 9],
          borderColor: "#451d07",
          backgroundColor: "rgba(69,29,7,0.2)",
          fill: true,
          tension: 0.3,
        },
        {
          label: "Minuman",
          data: [20, 7, 15],
          borderColor: "#d12323",
          backgroundColor: "rgba(209,35,35,0.2)",
          fill: true,
          tension: 0.3,
        },
      ],
    };
  },
};
</script>
