<template>
	<div class="GraphicProfile">graphic</div>
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
	beforeRouteEnter(to, from, next) {
		if (from.fullPath != "/profile/2/") {
			let sizingElement = document.getElementById(1);
			let setStyle = sizingElement.style;
			setStyle.width = "100vw";
			setStyle.height = "100vh";
			setStyle.right = 0;
			setStyle.top = 0;
			setStyle.left = 0;
			setStyle.bottom = 0;
		}
		next();
	},
	mounted() {
		document.getElementById(1).classList.add("activeProfilePage");
		document.getElementById(2).classList.add("deActivateProfilePage");
		this.$store.commit("changeVisibleProfileButton1", true);
		this.$store.commit("changebuttonProfileActive", true);
		this.$store.commit("changeVisibleProfileButton2", false);
		this.$store.commit("changeProfileCardActive", 1);
	},

	beforeRouteLeave(to, from, next) {
		console.log("działa");
		document.getElementById(1).classList.remove("activeProfilePage");
		document.getElementById(2).classList.remove("deActivateProfilePage");
		// Wracanie do listy profil
		this.$store.commit("changeVisibleProfileButton1", true);
		this.$store.commit("changeVisibleProfileButton2", true);
		this.$store.commit("changebuttonProfileActive", false);

		next();
	}
};
</script>