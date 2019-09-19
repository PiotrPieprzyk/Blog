<template>
	<div class="GraphicProfile">Game</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	computed: mapState([
		"profileCardActive",
		"visibleProfileButton2",
		"visibleProfileButton1",
		"buttonProfileActive",
		"jsAnimation"
	]),

	mounted() {
		document.body.classList.add("overflowAuto");
		// Pojawianie się strony
		// document.getElementById(1).classList.remove("scaleDownCenter");
		// document.getElementById(1).classList.add("chooseButtonActive");
		// document.getElementById(1).classList.add("scaleUpCenter");
		// animaton //
		this.jsAnimation.sizeUp(1);

		this.$store.commit("changeVisibleProfileButton1", true);
		this.$store.commit("changebuttonProfileActive", true);
		setTimeout(() => {
			this.$store.commit("changeVisibleProfileButton2", false);
			this.$store.commit("changeProfileCardActive", 1);
		}, 400);
	},
	beforeRouteLeave(to, from, next) {
		document.body.classList.remove("overflowAuto");
		// Wracanie do listy profil
		this.$store.commit("changeVisibleProfileButton1", true);
		this.$store.commit("changeVisibleProfileButton2", true);
		this.$store.commit("changebuttonProfileActive", false);

		this.jsAnimation.sizeDown(1);

		// document
		// 	.querySelector(".chooseButtonActive")
		// 	.classList.remove("chooseButtonActive");
		// let scaledElement = document.querySelector(".scaleUpCenter");
		// scaledElement.classList.remove("scaleUpCenter");
		// scaledElement.classList.add("scaleDownCenter");
		next();
	}
};
</script>