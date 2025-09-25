<template>
  <div class="payment-container">
    <h2>Pilih cara pembayaran</h2>

    <div class="payment-options">
      <h3>eWallet</h3>
      <button @click="pilihMetode('OVO')">OVO</button>
      <button @click="pilihMetode('Gopay')">Gopay</button>
      <button @click="pilihMetode('ShopeePay')">ShopeePay</button>
    </div>

    <div class="payment-options">
      <h3>QRIS</h3>
      <button @click="pilihMetode('QRIS')">Bayar dengan QRIS</button>
    </div>

    <div v-if="qrCode">
      <h3>Scan QR Code</h3>
      <qrcode-vue :value="qrCode" :size="200" />
      <p>Total: Rp {{ total }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { generateQris } from "../services/orderService";
import QrcodeVue from "qrcode.vue";

const qrCode = ref(null);
const total = ref(0);
const idPesanan = 1;

const pilihMetode = async (metode) => {
  if (metode === "QRIS") {
    const res = await generateQris(idPesanan);
    qrCode.value = res.data.qrString;
    total.value = res.data.total;
  } else {
    alert(`Metode ${metode} masih dalam pengembangan`);
  }
};
</script>

<style>
.payment-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
.payment-options {
  margin-bottom: 20px;
}
</style>