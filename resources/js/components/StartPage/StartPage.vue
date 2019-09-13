<template>
	<div class="webClass">
		<!-- CARDS -->
		<start-web-wrapper-img :backgroundImages="cards"></start-web-wrapper-img>

		<main class="mainWrapper df f1">
			<div class="startWebWrapper">
				<!-- PAGINATION -->
				<div class="startWebWrapperPagination">
					<start-web-pagination :backgroundImages="cards"></start-web-pagination>
				</div>

				<!-- CARD CONTENT -->
				<transition name="opacity" appear>
					<start-content v-if="loadedCard"></start-content>
				</transition>
			</div>
		</main>
		<footer class="footerWrapper">
			<p>Check this ;)</p>
		</footer>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: mapState(["cards", "loadedCard", "currentCard"]),
	data: function() {
		return {};
	},
	mounted() {
		document.body.classList.remove("overflowAuto");

		document.querySelector(".Image" + this.currentCard).classList.add("active");
		for (var i = 0; i < this.currentCard; i++) {
			document.querySelector(".Image" + i).classList.add("position-top");
		}
		this.$store.commit("loadCardStatus", true);
		document
			.getElementById("pagination " + this.currentCard)
			.classList.add("activePagination");
	}
};
</script>
