<template>
	<div class="GameProfile">Graphic</div>
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
		document.getElementById(2).classList.remove("scaleDownCenter");
		document.getElementById(2).classList.add("chooseButtonActive");
		document.getElementById(2).classList.add("scaleUpCenter");
		this.$store.commit("changeVisibleProfileButton1", false);
		this.$store.commit("changeVisibleProfileButton2", true);
		this.$store.commit("changeProfileCardActive", 2);
		this.$store.commit("changebuttonProfileActive", true);
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