<script setup lang="ts">
import { onMounted, reactive } from "vue";
import nokori from "@nokori/js-sdk";
const nk = new nokori(import.meta.env.VITE_NOKORI_API_KEY);

interface Orders {
  orderId: string;
  productName: string;
  quantity: number;
  customerId: string;
}

interface Data {
  orders: Orders[];
  isLoading: boolean;
}

const data: Data = reactive({
  orders: [],
  isLoading: true,
});

onMounted(async () => {
  const { data: orders, error } = await nk.query.execute({
    queryId: "{{YOUR_QUERY_ID}}",
  });

  if (error) {
    console.error(error);
    return;
  }
  data.orders = orders;
  data.isLoading = false;
});
</script>

<template>
  <header>
    <div id="wrapper">
      <h1 class="text-4xl font-bold">Vue3 nokori Example</h1>
      <p class="pt-4">
        In this fictitious example, we are fetching customer orders from our
        database of soda orders at our soda shop.
      </p>
      <h2 class="text-xl pt-4">Orders list</h2>

      <p v-if="data.isLoading">loading...</p>

      <table class="table-auto" v-if="!data.isLoading">
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
</template>

<style scoped>
header {
  line-height: 1.5;
}

#wrapper {
  padding: 20px;
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
