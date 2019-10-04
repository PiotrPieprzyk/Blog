<template>
	<div class="webClass">
		<!-- CARDS -->
		<start-web-wrapper-img :backgroundImages="cards"></start-web-wrapper-img>

		<main class="mainWrapper df f1">
			<div class="startWebWrapper">
				<!-- PAGINATION -->
				<div class="startWebWrapperPagination">
					<start-web-pagination :backgroundImages="cards"></start-web-pagination>
				</div>

				<!-- CARD CONTENT -->
				<transition name="opacity" appear>
					<start-content v-if="loadedCard"></start-content>
				</transition>
			</div>
		</main>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: mapState(["cards", "loadedCard", "currentCard", "animationStatus"]),
	data: function() {
		return {};
	},
	methods: {
		toContact(index) {
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
	},
	mounted() {
		let it = this.currentCard;
		let scrollValue = this.currentCard;
		let activeScrollAnimation = true;

		let eventScroll = window.addEventListener("wheel", () => {
			if (activeScrollAnimation == true) {
				scrollValue = this.currentCard;
				activeScrollAnimation = false;
				if (event.deltaY < 0 && scrollValue > 0) {
					scrollValue--;
					this.toContact(scrollValue);
				} else if (event.deltaY > 0 && scrollValue < 3) {
					scrollValue++;
					this.toContact(scrollValue);
				}
				setTimeout(() => {
					activeScrollAnimation = true;
					console.log("YEY");
				}, 700);
			} else {
				console.log("EHHHH");
			}
		});

		console.log(this.currentCard);
		document
			.querySelector(".Image" + this.currentCard)
			.classList.add("activeCard");
		for (var i = 0; i < this.currentCard; i++) {
			document.querySelector(".Image" + i).classList.add("position-top");
		}
		this.$store.commit("loadCardStatus", true);
		document
			.getElementById("pagination " + this.currentCard)
			.classList.add("activePagination");
	}
};
</script>
