import api from "./api";

// checkout (status: pending)
export const checkout = async (pelangganId, items) => {
  const requestData = {
    pelangganId: pelangganId,
    items: items.map(item => ({
      menuId: item.id,
      quantity: item.qty
    }))
  };
  
  console.log('=== FRONTEND CHECKOUT DEBUG ===');
  console.log('Sending to backend:', requestData);
  
  return api.post("/pesanan/checkout", requestData);
};
