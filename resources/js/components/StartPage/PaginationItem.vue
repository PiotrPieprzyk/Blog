<template>
	<div class="paginationDropper">
		<div :id="'pagination '+keyImg" class="paginationItem" @click="changeBackground(keyImg)"></div>
	</div>
</template>
<script>
import { mapState } from "vuex";
import { setTimeout } from "timers";

export default {
	props: ["keyImg"],
	computed: mapState(["profileCardActive"]),
	methods: {
		changeBackground(index) {
			if (!this.animationStatus) {
				// Zmienne //
				var activeImg = document.querySelector(".activeCard");
				let nextImg = document.querySelector(".Image" + index);
				let activeImgIndex = activeImg._prevClass.substring(
					activeImg._prevClass.length - 1
				);
				// ActivationPagin //
				document
					.querySelector(".activePagination")
					.classList.remove("activePagination");
				document
					.getElementById("pagination " + index)
					.classList.add("activePagination");

				if (activeImgIndex != index && !this.animationStatus) {
					// AnimationStatus //
					this.$store.commit("changeAnimationStatus", true);
					this.$store.commit("loadCardStatus", false);

					// Change active components
					activeImg.classList.remove("activeCard");

					// DOWN //
					if (activeImgIndex < index) {
						while (activeImgIndex < index) {
							console.log(activeImgIndex);
							document
								.querySelector(".Image" + activeImgIndex)
								.classList.remove("slide-bottom");
							document
								.querySelector(".Image" + activeImgIndex)
								.classList.remove("position-top");
							document
								.querySelector(".Image" + activeImgIndex)
								.classList.add("slide-top");

							activeImgIndex++;
						}

						nextImg.classList.add("activeCard");
					}
					// UP //
					if (activeImgIndex > index) {
						while (activeImgIndex > index) {
							activeImgIndex--;
							document
								.querySelector(".Image" + activeImgIndex)
								.classList.remove("slide-top");
							document
								.querySelector(".Image" + activeImgIndex)
								.classList.remove("position-top");
							document
								.querySelector(".Image" + activeImgIndex)
								.classList.add("slide-bottom");
							console.log(activeImgIndex);
						}

						nextImg.classList.add("activeCard");
					}
					// AnimationStatus //
					setTimeout(() => {
						this.$store.commit("changeAnimationStatus", false);
						this.$store.commit("loadCardStatus", true);
						this.$store.commit("changecurrentCard", index);
					}, 500);
				}
			}
		}
	}
};
</script>