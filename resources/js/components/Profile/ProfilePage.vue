<template>
	<div class="profileWebWrapper">
		<button :disabled="!visibleProfileButton2" id="1" class="profileGalery" @click="scaleUp(1)"></button>
		<button :disabled="!visibleProfileButton1" id="2" class="profileGame" @click="scaleUp(2)"></button>
		<transition name="opacity">
			<router-view v-if="visibleProfileButton1"></router-view>
		</transition>
		<transition name="opacity">
			<router-view v-if="visibleProfileButton2"></router-view>
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
		"buttonProfileActive",
		"jsAnimation"
	]),
	methods: {
		scaleUp(index) {
			if (index == 1) {
				this.$router.push({ name: "profileGraphic" });
				this.jsAnimation.sizeUp(1);
			} else {
				this.$router.push({ name: "profileGame" });
				this.jsAnimation.sizeUp(2);
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