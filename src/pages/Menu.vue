<template>
  <Navbar />
  <div class="max-w-7xl mx-auto p-6 flex">
    <div
      :class="[
        'transition-all duration-300',
        showCart ? 'w-3/4 pr-6' : 'w-full',
      ]"
    >
      <h1 class="text-3xl font-bold text-center mb-8 text-[var(--color-rebel)]">
        Catalog Menu
      </h1>

      <div v-for="kategori in categories" :key="kategori.nama" class="mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-[var(--color-santafe)]">
          {{ kategori.nama }}
        </h2>
        <div :class="['grid gap-6', showCart ? 'grid-cols-2' : 'grid-cols-3']">
          <div
            v-for="menu in kategori.items"
            :key="menu.id"
            class="w-full bg-[var(--color-merino)] border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <img
              class="w-full h-40 object-cover"
              :src="menu.gambar"
              :alt="menu.nama"
            />
            <div class="px-5 pb-5">
              <h5
                class="text-lg mt-4 font-semibold tracking-tight text-[var(--color-rebel)]"
              >
                {{ menu.nama }}
              </h5>
              <p class="text-sm text-gray-600 mb-2">{{ menu.deskripsi }}</p>

              <div class="flex items-center justify-between">
                <span class="text-xl font-bold text-[var(--color-cardinal)]">
                  Rp {{ menu.harga.toLocaleString() }}
                </span>
                <button
                  @click="addToCart(menu)"
                  class="text-white bg-[var(--color-santafe)] hover:bg-[var(--color-rebel)] focus:ring-4 focus:outline-none focus:ring-[var(--color-deco)] font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="slide">
      <aside
        v-if="showCart"
        class="w-1/4 fixed top-20 right-0 h-full bg-white shadow-lg p-5 overflow-x-auto"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Pesanan Saya</h2>
          <button @click="toggleCart" class="text-red-500">✕</button>
        </div>

        <div v-if="cart.length === 0" class="text-gray-500">
          Belum ada pesanan
        </div>

        <div v-for="item in cart" :key="item.id" class="mb-4 border-b pb-2">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-semibold">{{ item.nama }}</p>
              <p class="text-sm text-gray-600">
                Rp {{ item.harga.toLocaleString() }}
              </p>
            </div>
            <div class="flex items-center">
              <button @click="decreaseQty(item)" class="px-2">-</button>
              <span class="px-2">{{ item.qty }}</span>
              <button @click="increaseQty(item)" class="px-2">+</button>
            </div>
          </div>
        </div>

        <div class="mt-5 font-bold">
          Total: Rp
          {{
            cart.reduce((acc, i) => acc + i.harga * i.qty, 0).toLocaleString()
          }}
        </div>
        <button
          @click="checkoutNow"
          class="w-full mt-3 bg-[var(--color-santafe)] text-white py-2 rounded-lg"
        >
          Checkout
        </button>
      </aside>
    </transition>

    <button
      @click="toggleCart"
      class="fixed bottom-10 right-5 bg-[var(--color-santafe)] text-white p-3 rounded-full shadow-lg"
    >
      🛒
      <span v-if="cart.length > 0" class="ml-1">({{ cart.length }})</span>
    </button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import { useRouter } from "vue-router";
import { checkout } from "../services/orderService";

const router = useRouter();
const showCart = ref(false);

function toggleCart() {
  showCart.value = !showCart.value;
}

const categories = [
  {
    nama: "Makanan Utama",
    items: [
      {
        id: 1,
        nama: "Nasi Goreng Spesial",
        deskripsi: "Nasi goreng dengan ayam dan telur",
        harga: 25000,
        gambar: "/src/images/nasgor.jpg",
      },
      {
        id: 2,
        nama: "Ayam Bakar",
        deskripsi: "Ayam bakar bumbu kecap khas Dapur Bunda",
        harga: 30000,
        gambar: "/src/images/ayam.jpeg",
      },
    ],
  },
  {
    nama: "Appetizer",
    items: [
      {
        id: 3,
        nama: "Spring Roll",
        deskripsi: "Lumpia goreng renyah isi sayuran",
        harga: 15000,
        gambar: "/src/images/spring.jpg",
      },
      {
        id: 4,
        nama: "Salad Segar",
        deskripsi: "Salad buah dan sayuran segar",
        harga: 20000,
        gambar: "/src/images/salad.avif",
      },
    ],
  },
  {
    nama: "Minuman",
    items: [
      {
        id: 5,
        nama: "Es Teh Manis",
        deskripsi: "Teh hitam dengan es batu",
        harga: 8000,
        gambar: "/src/images/esteh.jpg",
      },
      {
        id: 6,
        nama: "Jus Jeruk",
        deskripsi: "Jus jeruk segar alami",
        harga: 12000,
        gambar: "/src/images/jusjeruk.jpg",
      },
    ],
  },
];

const cart = reactive([]);

function addToCart(menu) {
  const item = cart.find((i) => i.id === menu.id);
  if (item) {
    item.qty++;
  } else {
    cart.push({ ...menu, qty: 1 });
  }
}

function removeFromCart(id) {
  const index = cart.findIndex((i) => i.id === id);
  if (index !== -1) cart.splice(index, 1);
}

function increaseQty(item) {
  item.qty++;
}

function decreaseQty(item) {
  if (item.qty > 1) item.qty--;
  else removeFromCart(item.id);
}

// checkout logic
async function checkoutNow() {
  try {
    // DEBUG: Cek apa yang ada di localStorage
    console.log('=== LOCALSTORAGE DEBUG ===');
    console.log('Raw localStorage user:', localStorage.getItem('user'));
    
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('Parsed user:', user);
    console.log('user.idPelanggan:', user.idPelanggan);
    console.log('user keys:', Object.keys(user));
    
    console.log('user.id_pelanggan:', user.id_pelanggan);
    console.log('user.id:', user.id);
    
    if (!user || (!user.idPelanggan && !user.id_pelanggan && !user.id)) {
      alert('Silakan login terlebih dahulu');
      router.push('/login');
      return;
    }
    
    const pelangganId = user.idPelanggan || user.id_pelanggan || user.id;
    console.log('Using pelangganId:', pelangganId);
    
    const response = await checkout(pelangganId, cart);
    
    console.log('Checkout response:', response);
    
    if (response.data && response.data.success) {
      alert('Pesanan berhasil dibuat!');
      
      cart.splice(0, cart.length);
      
      // Redirect ke halaman payment
      router.push({
        name: "Payment",
        params: {
          idPesanan: response.data.pesananId,
          total: response.data.total,
        },
      });
    } else {
      alert(response.data?.message || "Gagal membuat pesanan");
    }
  } catch (err) {
    console.error('Checkout error:', err);
    alert(err.response?.data?.message || "Terjadi kesalahan saat checkout");
  }
}
</script>

<style>
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
</style>
