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
		"buttonProfileActive",
		"jsAnimation"
	]),

	mounted() {
		document.body.classList.add("overflowAuto");
		// Pojawianie się strony
		// document.getElementById(2).classList.remove("scaleDownCenter");
		// document.getElementById(2).classList.add("chooseButtonActive");
		// document.getElementById(2).classList.add("scaleUpCenter");
		this.jsAnimation.sizeUp(2);

		this.$store.commit("changeVisibleProfileButton2", true);
		this.$store.commit("changebuttonProfileActive", true);
		setTimeout(() => {
			this.$store.commit("changeVisibleProfileButton1", false);
			this.$store.commit("changeProfileCardActive", 2);
		}, 400);
	},
	beforeRouteLeave(to, from, next) {
		this.jsAnimation.sizeDown(2);
		document.body.classList.remove("overflowAuto");
		// Wracanie do listy profil
		this.$store.commit("changeVisibleProfileButton1", true);
		this.$store.commit("changeVisibleProfileButton2", true);
		this.$store.commit("changebuttonProfileActive", false);

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