<template>
	<div class="profileWebWrapper">
		<button :disabled="!visibleProfileButton2" id="1" class="white profileGalery" @click="scaleUp(1)">
			<transition name="opacity">
				<router-view v-if="!visibleProfileButton2" key="profileInfo"></router-view>
				<div v-else class="graphicTitleButton" key="profileTitle">GRAPHIC</div>
			</transition>
		</button>
		<button :disabled="!visibleProfileButton1" id="2" class="white profileGame" @click="scaleUp(2)">
			<transition name="opacity">
				<router-view v-if="!visibleProfileButton1"></router-view>
				<div v-else class="gameTitleButton" key="profileTitle">GAME</div>
			</transition>
		</button>
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
		"jsAnimation",
		"animationStatus"
	]),
	methods: {
		scaleUp(index) {
			if (index == 1) {
				this.$router.push({ name: "profileGraphic" });
			} else {
				this.$router.push({ name: "profileGame" });
			}
		},
		activeMinus() {
			this.activeGaleryId--;
			this.idGraphic = this.listGraphics[this.activeGaleryId].id;
		},
		activePlus() {
			this.activeGaleryId++;
			this.idGraphic = this.listGraphics[this.activeGaleryId].id;
		}
	},
	mounted() {
		console.log("hey im Profile");
		this.$store.commit("changeVisibleProfileButton1", true);
		this.$store.commit("changebuttonProfileActive", false);
		this.$store.commit("changeVisibleProfileButton2", true);

		if (this.$router.history.current.name == "profileGraphic") {
			this.$store.commit("changeVisibleProfileButton1", true);
			this.$store.commit("changebuttonProfileActive", true);
			this.$store.commit("changeVisibleProfileButton2", false);
			this.$store.commit("changeProfileCardActive", 1);
			document
				.getElementById(1)
				.classList.replace("profileGalery", "activeProfilePage");
			document.getElementById(2).classList.add("deActiveProfilePage");
		}
		if (this.$router.history.current.name == "profileGame") {
			this.$store.commit("changeVisibleProfileButton2", true);
			this.$store.commit("changebuttonProfileActive", true);
			this.$store.commit("changeVisibleProfileButton1", false);
			this.$store.commit("changeProfileCardActive", 2);
			document
				.getElementById(2)
				.classList.replace("profileGame", "activeProfilePage");
			document.getElementById(1).classList.add("deActiveProfilePage");
		}
	},
	beforeRouteUpdate(to, from, next) {
		// variables //
		let toPath = to.fullPath;
		let fromPath = from.fullPath;
		let splitToPath = toPath.split("/");
		let splitFromPath = fromPath.split("/");

		// RegExp //
		const regGraphic = new RegExp("/profile/+[0-9]+/graphic");
		const regGame = new RegExp("/profile/+[0-9]+/game");

		// which route //
		if (!this.animationStatus) {
			if (regGraphic.test(fromPath)) {
				this.$store.commit("changeAnimationStatus", true);
				let it = this;

				this.jsAnimation.sizeDown(1, it);
				this.$store.commit("changeVisibleProfileButton1", true);
				this.$store.commit("changebuttonProfileActive", false);
				this.$store.commit("changeVisibleProfileButton2", true);

				next();
			}
			if (regGame.test(fromPath)) {
				this.$store.commit("changeAnimationStatus", true);
				let it = this;

				this.jsAnimation.sizeDown(2, it);
				this.$store.commit("changeVisibleProfileButton1", true);
				this.$store.commit("changebuttonProfileActive", false);
				this.$store.commit("changeVisibleProfileButton2", true);

				next();
			}
			if (splitToPath.length == splitFromPath.length) {
				setTimeout(() => {
					this.$store.commit("changeAnimationStatus", true);
					let it = this;

					if (regGraphic.test(toPath)) {
						this.jsAnimation.sizeUp(1, it);

						this.$store.commit("changeVisibleProfileButton1", true);
						this.$store.commit("changebuttonProfileActive", true);
						this.$store.commit("changeVisibleProfileButton2", false);
						this.$store.commit("changeProfileCardActive", 1);
					} else {
						this.jsAnimation.sizeUp(2, it);

						this.$store.commit("changeVisibleProfileButton1", true);
						this.$store.commit("changebuttonProfileActive", true);
						this.$store.commit("changeVisibleProfileButton2", false);
						this.$store.commit("changeProfileCardActive", 1);
					}
					setTimeout(() => next(), 1000);
				}, 600);
			}
			if (
				regGraphic.test(toPath) &&
				!(splitToPath.length == splitFromPath.length)
			) {
				this.$store.commit("changeAnimationStatus", true);
				let it = this;
				this.jsAnimation.sizeUp(1, it);

				next();
			}
			if (
				regGame.test(toPath) &&
				!(splitToPath.length == splitFromPath.length)
			) {
				this.$store.commit("changeAnimationStatus", true);
				let it = this;
				this.jsAnimation.sizeUp(2, it);

				next();
			}
		} else {
			next(from);
		}
	}
};
</script>