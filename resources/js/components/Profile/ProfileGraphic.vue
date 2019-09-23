<template>
	<div class="GraphicProfile">
		<div class="graphicTitle">GRAPHIC</div>
		<div class="addGraphicButton"></div>
		<div class="yourGraphicListWrapper"></div>
	</div>
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
		console.log("działa true");
		document.getElementById(1).classList.remove("activeProfilePage");
		document.getElementById(2).classList.remove("deActivateProfilePage");
		// Wracanie do listy profil

		next();
	}
};
</script>