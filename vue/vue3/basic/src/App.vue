<script setup lang="ts">
import { onMounted, reactive } from "vue";
import LolaDB from "@loladb/sdk-js";
const lola = new LolaDB(import.meta.env.VITE_LOLA_API_KEY);

interface Orders {
  orderId: string;
  productName: string;
  quantity: number;
  customerId: string;
}

const data = {
  orders: reactive<Orders[]>([]),
};

onMounted(async () => {
  const { data: orders, error } = await lola.query.execute({
    queryId: "{{YOUR_QUERY_ID}}",
  });

  if (error) {
    console.error(error);
    return;
  }
  data.orders = orders;
});
</script>

<template>
  <header>
    <div id="wrapper">
      <h1>Vue3 lolaDB Example</h1>
      <p>
        In this fictitious example, we are fetching customer orders from our
        database of soda orders at our soda shop.
      </p>
      <h2>Orders list</h2>

      <p v-if="data.orders.length < 1">loading...</p>

      <table>
        <tr>
          <th>Order ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Customer Id</th>
        </tr>

        <tr v-for="order of data.orders" v-bind:key="order.orderId">
          <td>{{ order.orderId }}</td>
          <td>{{ order.productName }}</td>
          <td>{{ order.quantity }}</td>
          <td>{{ order.customerId }}</td>
        </tr>
      </table>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 40%;
}

table td,
table th {
  border: 1px solid #dddddd;
  text-align: right;
  padding: 8px;
}
</style>
