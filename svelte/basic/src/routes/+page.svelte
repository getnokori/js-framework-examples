<script lang="ts">
	import nokori from '@nokori/js-sdk';
	const nk = new nokori(import.meta.env.VITE_NOKORI_API_KEY);
	import { onMount } from 'svelte';

	let orders: any = [];

	onMount(async () => {
		orders = await getOrders();
	});

	async function getOrders() {
		const { data: orders, error } = await nk.query.execute({
			queryId: '{{YOUR_QUERY_ID}}'
		});

		if (error) {
			console.error(error);
			return null;
		}

		return orders;
	}
</script>
<div id="wrapper">
<h1>Svelte nokori Example</h1>
<p>
	In this fictitious example, we are fetching customer orders from our database of soda orders at
	our soda shop.
</p>
<h2>Orders list</h2>
{#await orders}
	<p>loading...</p>
{:then orders}
	<table>
		<tr>
			<th>Order ID</th>
			<th>Product Name</th>
			<th>Quantity</th>
			<th>Customer Id</th>
		</tr>

		{#each orders as order}
			<tr>
				<td>{order.orderId}</td>
				<td>{order.productName}</td>
				<td>{order.quantity}</td>
				<td>{order.customerId}</td>
			</tr>
		{/each}
	</table>
{/await}
</div>

<style>

	#wrapper{
		padding-left: 20px;
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
