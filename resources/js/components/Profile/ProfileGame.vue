<template>
	<div class="GameProfile">game</div>
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

	mounted() {},
	beforeRouteLeave(to, from, next) {
		document.getElementById(2).classList.remove("activeProfilePage");
		document.getElementById(1).classList.remove("deActivateProfilePage");
		// Wracanie do listy profil

		next();
	}
};
</script>