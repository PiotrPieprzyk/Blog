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
		"buttonProfileActive"
	]),

	mounted() {
		document.getElementById(1).classList.remove("scaleDownCenter");
		document.getElementById(1).classList.add("chooseButtonActive");
		document.getElementById(1).classList.add("scaleUpCenter");
		this.$store.commit("changeVisibleProfileButton2", false);
		this.$store.commit("changeVisibleProfileButton1", true);
		this.$store.commit("changebuttonProfileActive", true);
		this.$store.commit("changeProfileCardActive", 1);
	},
	beforeRouteLeave(to, from, next) {
		this.$store.commit("changeVisibleProfileButton1", true);
		this.$store.commit("changeVisibleProfileButton2", true);
		this.$store.commit("changebuttonProfileActive", false);

		document
			.querySelector(".chooseButtonActive")
			.classList.remove("chooseButtonActive");
		let scaledElement = document.querySelector(".scaleUpCenter");
		scaledElement.classList.remove("scaleUpCenter");
		scaledElement.classList.add("scaleDownCenter");
		next();
	}
};
</script>