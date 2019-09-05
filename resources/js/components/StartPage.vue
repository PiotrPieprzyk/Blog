<template>
	<div class="webClass">
		<!-- CARDS -->
		<start-web-wrapper-img :backgroundImages="cards"></start-web-wrapper-img>
		<!-- NAVBAR -->
		<nav>
			<div class="navBarWrapper borRed"></div>
		</nav>
		<main class="df f1 borRed">
			<div class="startWebWrapper mt60 borRed">
				<!-- PAGINATION -->
				<div class="startWebWrapperPagination borRed">
					<start-web-pagination :backgroundImages="cards"></start-web-pagination>
				</div>

				<!-- CARD CONTENT -->
				<transition name="opacity" appear>
					<start-content v-if="loadedCard"></start-content>
				</transition>
			</div>
		</main>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: mapState(["backgroundImgIndex", "cards", "loadedCard"]),
	data: function() {
		return {};
	},
	mounted() {
		document.querySelector(".Image0").classList.add("active");
		this.$store.commit("loadCardStatus", true);
	}
};
</script>
