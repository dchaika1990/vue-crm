<template>
	<div class="app-main-layout">

		<Navbar
			@nav-click="isOpen = !isOpen"
		/>
		<Sidebar v-model="isOpen"/>

		<main class="app-content" v-bind:class="{full: !isOpen}">
			<div class="app-page">
				<router-view/>
			</div>
		</main>

		<FixedBtn/>
	</div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
import FixedBtn from "@/components/app/FixedBtn";

export default {
	name: "MainLayout",
	data: () => ({
		isOpen: true
	}),
	components: {
		Sidebar, Navbar, FixedBtn
	}
}
</script>

<style scoped>

</style>