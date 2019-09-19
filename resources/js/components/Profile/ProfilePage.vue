<template>
	<div class="profileWebWrapper">
		<div class="profileWrapperButton">
			<button
				:disabled="!visibleProfileButton2"
				id="1"
				class="profileGalery"
				@click="scaleUp(1)"
			>Graphic</button>
			<button :disabled="!visibleProfileButton1" id="2" class="profileGame" @click="scaleUp(2)">Game</button>
		</div>
		<transition name="opacity">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	data() {
		return {
			buttonActive: false
		};
	},
	computed: mapState([
		"profileCardActive",
		"visibleProfileButton2",
		"visibleProfileButton1",
		"buttonProfileActive"
	]),
	methods: {
		scaleUp(index) {
			if (index == 1) {
				this.$router.push({ name: "profileGraphic" });
			} else {
				this.$router.push({ name: "profileGame" });
			}
		}
	},
	mounted() {},
	beforeRouteUpdate(to, from, next) {
		let path1 = to.fullPath;
		let path2 = from.fullPath;

		let splitPath1 = path1.split("/");
		let splitPath2 = path2.split("/");

		if (splitPath1.length == splitPath2.length) {
			console.log("działa");

			setTimeout(() => next(), 1000);
		} else {
			next();
		}
	}
};
</script>