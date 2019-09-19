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
		document.getElementById(1).classList.add("activeProfilePage");
		document.getElementById(2).classList.add("deActivateProfilePage");

		this.$store.commit("changeVisibleProfileButton1", true);
		this.$store.commit("changebuttonProfileActive", true);
		this.$store.commit("changeVisibleProfileButton2", false);
		this.$store.commit("changeProfileCardActive", 1);
	},
	beforeRouteLeave(to, from, next) {
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