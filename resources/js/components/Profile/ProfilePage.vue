<template>
	<div class="profileWebWrapper">
		<button
			:disabled="buttonActive"
			v-if="visibleProfileButton1"
			id="1"
			class="profileGalery"
			@click="scaleUp(1)"
		></button>
		<button
			:disabled="buttonActive"
			v-if="visibleProfileButton2"
			id="2"
			class="profileGame"
			@click="scaleUp(2)"
		></button>
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
		next();
	}
};
</script>