<template>
  <div class="p-8">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold">Manajemen Stok</h1>
      <button
        @click="tampilForm = !tampilForm"
        class="bg-[var(--color-santafe)] text-white px-4 py-2 rounded hover:bg-[var(--color-rebel)]"
      >
        {{ tampilForm ? "Tutup Form" : "Tambah Menu" }}
      </button>
    </div>

    <form
      v-if="tampilForm"
      @submit.prevent="tambahMenu"
      class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow mb-10"
    >
      <div>
        <label class="block mb-1">Nama Menu</label>
        <input
          v-model="form.nama"
          type="text"
          class="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label class="block mb-1">Kategori</label>
        <select
          v-model="form.kategori"
          class="w-full p-2 border rounded"
          required
        >
          <option disabled value="">Pilih Kategori</option>
          <option>Makanan</option>
          <option>Minuman</option>
          <option>Appetizer</option>
        </select>
      </div>

      <div>
        <label class="block mb-1">Stok</label>
        <input
          v-model="form.stok"
          type="number"
          class="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label class="block mb-1">Harga (Rp)</label>
        <input
          v-model="form.harga"
          type="number"
          class="w-full p-2 border rounded"
          required
        />
      </div>

      <div class="col-span-full">
        <button
          type="submit"
          class="bg-[var(--color-deco)] text-[var(--color-rebel)] px-4 py-2 rounded hover:bg-[var(--color-cardinal)] hover:text-white"
        >
          Simpan Menu
        </button>
      </div>
    </form>

    <div class="bg-white p-6 rounded shadow overflow-x-auto">
      <h2 class="text-xl font-semibold mb-4">Daftar Menu</h2>
      <table class="w-full table-auto border-collapse">
        <thead>
          <tr class="bg-[var(--color-merino)] text-[var(--color-rebel)]">
            <th class="text-left p-2 border-b">No</th>
            <th class="text-left p-2 border-b">Kategori</th>
            <th class="text-left p-2 border-b">Nama</th>
            <th class="text-left p-2 border-b">Stok</th>
            <th class="text-left p-2 border-b">Harga</th>
            <th class="text-left p-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(menu, index) in daftarMenu"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="p-2 border-b">{{ index + 1 }}</td>
            <td class="p-2 border-b">{{ menu.kategori }}</td>
            <td class="p-2 border-b">{{ menu.nama }}</td>
            <td class="p-2 border-b">{{ menu.stok }}</td>
            <td class="p-2 border-b">Rp {{ menu.harga.toLocaleString() }}</td>
            <td class="p-2 border-b space-x-2">
              <button
                @click="editMenu(index)"
                class="bg-[var(--color-deco)] text-[var(--color-rebel)] px-2 py-1 rounded hover:bg-[var(--color-santafe)] hover:text-white text-sm"
              >
                Edit
              </button>
              <button
                @click="hapusMenu(index)"
                class="bg-[var(--color-cardinal)] text-white px-2 py-1 rounded hover:bg-red-700 text-sm"
              >
                Hapus
              </button>
            </td>
          </tr>
          <tr v-if="daftarMenu.length === 0">
            <td colspan="6" class="text-center text-gray-500 p-4">
              Belum ada data menu.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tampilForm: false,
      form: {
        nama: "",
        kategori: "",
        stok: 0,
        harga: 0,
      },
      daftarMenu: [],
      indexEdit: null,
    };
  },
  methods: {
    tambahMenu() {
      const namaTrim = this.form.nama.trim().toLowerCase();
      const kategoriTrim = this.form.kategori.trim().toLowerCase();

      if (this.indexEdit !== null) {
        this.daftarMenu[this.indexEdit] = { ...this.form };
        this.indexEdit = null;
      } else {
        const existing = this.daftarMenu.find(
          (menu) =>
            menu.nama.trim().toLowerCase() === namaTrim &&
            menu.kategori.trim().toLowerCase() === kategoriTrim
        );

        if (existing) {
          existing.stok += Number(this.form.stok);
        } else {
          this.daftarMenu.push({ ...this.form });
        }
      }

      this.resetForm();
    },

    editMenu(index) {
      this.indexEdit = index;
      this.form = { ...this.daftarMenu[index] };
      this.tampilForm = true;
    },

    hapusMenu(index) {
      this.daftarMenu.splice(index, 1);
    },

    resetForm() {
      this.form = {
        nama: "",
        kategori: "",
        stok: 0,
        harga: 0,
      };
      this.tampilForm = false;
    },
  },
};
</script>
