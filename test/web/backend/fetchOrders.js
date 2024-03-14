import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const baseUrl = "https://sn-imran-testing-two.myshopify.com";
const accessToken = process.env.STORE_B_ACCESS_TOKEN;
async function fetchOrders() {
  const url = `${baseUrl}/admin/api/2024-01/orders.json`;
  const headers = {
    "X-Shopify-Access-Token": accessToken,
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.get(url, { headers });
    if (response.status === 200) {
      return response.data.orders;
    } else {
      console.error(`Error fetching orders: ${response.statusText}`);
      return [];
    }
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}
export default fetchOrders;