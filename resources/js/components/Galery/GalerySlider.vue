<template>
	<transition name="modal">
		<div class="GalerySliderWrapper">
			<div class="GaleryContent">
				<div class="PreviousImg">
					<img
						class="GraphicPrevious"
						v-if="activeGaleryItem>0"
						:src="'./storage/graphicNew/'+listGraphicsProp[activeGaleryItem-1].path"
					/>
				</div>
				<div class="ActiveImg">
					<div class="ProportionWrapper">
						<transition name="flip-in-ver-right" mode="out-in">
							<img
								v-if="descriptionVisible"
								class="Graphic"
								:src="'./storage/graphicNew/'+listGraphicsProp[activeGaleryItem].path"
							/>
							<div v-else class="GraphicDescription">
								<div class="descriptionHeader">
									<p>The</p>
									<div v-if="!editActive" class="customeTitle">{{description.title}}</div>
									<textarea
										v-if="editActive"
										type="text"
										name="title"
										ref="title"
										id="title"
										class="customeTitle editBorder"
										:placeholder="description.title"
										v-model="description.title"
									/>
								</div>
								<div class="descriptionMain">
									<p>Content</p>

									<div v-if="!editActive" class="customeContentWrapper">{{description.info}}</div>
									<textarea
										v-if="editActive"
										type="text"
										name="info"
										ref="info"
										id="info"
										class="customeContentWrapper editBorder"
										:placeholder="description.info"
										v-model="description.info"
									/>
								</div>
								<div class="descriptionFooter">
									<div class="creatorNickWrapper">
										<p>Creator:</p>
										<div v-if="!editActive" class="customNick">{{description.creator}}</div>
										<input
											v-if="editActive"
											type="text"
											name="creator"
											ref="creator"
											id="creator"
											class="customNick editBorder"
											:placeholder="description.creator"
											v-model="description.creator"
										/>
									</div>
									<div class="dataCreateWrapper">
										<p>Data:</p>
										<div v-if="!editActive" class="customNick">{{description.date}}</div>
										<input
											v-if="editActive"
											type="data"
											name="date"
											ref="date"
											id="date"
											class="customeDate editBorder"
											:placeholder="description.date"
											v-model="description.date"
										/>
									</div>
								</div>
							</div>
						</transition>
						<div class="imageDescriptionMenuWrapper">
							<div class="viewDescription" @click="viewDescription">
								<div class="animationIconDescription">
									<div class="angle1"></div>
									<div class="angle2"></div>
								</div>
							</div>
							<transition name="roll-in-top">
								<div v-if="!descriptionVisible" class="editDescription" @click="editDiscription()">
									<img :src="'./images/galery/navigation/pen-solid.svg'" />
								</div>
							</transition>
						</div>
					</div>
				</div>
				<div class="NextImg">
					<img
						class="GraphicNext"
						v-if="activeGaleryItem<this.listGraphicsProp.length-1"
						:src="'./storage/graphicNew/'+listGraphicsProp[activeGaleryItem+1].path"
					/>
				</div>
			</div>
			<div class="sliderNavigation">
				<button
					v-if="activeGaleryItem>0"
					class="arrow prev"
					@click="$emit('previous'); previousDescription()"
				></button>
				<button class="close" @click="$emit('close')"></button>
				<button
					v-if="activeGaleryItem<this.listGraphicsProp.length-1"
					class="arrow next"
					@click="$emit('next'); nextDescription()"
				></button>
			</div>
		</div>
	</transition>
</template>
<script>
import { mapState } from "vuex";

export default {
	props: ["GaleryImgSlot", "activeGaleryItem", "listGraphicsProp", "graphicID"],
	computed: mapState(["graphics", "jsAnimation"]),
	data() {
		return {
			descriptionVisible: true,
			description: "",
			editActive: false
		};
	},
	methods: {
		checkProportions(index) {
			let graphic;
			if (index == 1) {
				graphic = document.querySelector(".GraphicPrevious");
			} else if (index == 2) {
				graphic = document.querySelector(".Graphic");
			} else if (index == 3) {
				graphic = document.querySelector(".GraphicNext");
			}

			let sizingElement = document.querySelector(".ProportionWrapper");
			let wrapper = document.querySelector(".ActiveImg");
			let widthElement = window.getComputedStyle(graphic).width;
			let heightElement = window.getComputedStyle(graphic).height;
			heightElement = parseInt(heightElement.slice(0, -2));
			widthElement = parseInt(widthElement.slice(0, -2));
			var h = window.getComputedStyle(wrapper).height;
			var w = window.getComputedStyle(wrapper).width;
			h = parseInt(h.slice(0, -2));
			w = parseInt(w.slice(0, -2));

			let proportion = widthElement / heightElement;
			let procentWidth = (proportion * heightElement) / w;
			let procentHeight = widthElement / proportion / h;

			sizingElement.style.paddingRight = procentWidth * 100 + "%";
			sizingElement.style.height = procentHeight * 100 + "%";
		},
		viewDescription() {
			if (this.descriptionVisible == true) {
				axios
					.get("/graphics/description/" + this.graphicID)
					.then(request => {
						this.description = request.data;
						console.log(this.description);
						this.storeDescription();
						this.descriptionVisible = false;

						//animation
						this.jsAnimation.crossToAnkle();
					})
					.catch(error => {
						console.log(error);
					});
			} else {
				this.descriptionVisible = true;
			}
		},
		nextDescription() {
			if (this.descriptionVisible == false) {
				setTimeout(() => {
					this.viewDescription();
					this.checkDescriptionExist();
				}, 300);
			}
			setTimeout(() => {
				this.checkDescriptionExist();
			}, 0);
			this.descriptionVisible = true;
			this.editActive = false;
			this.checkProportions(3);
		},
		previousDescription() {
			if (this.descriptionVisible == false) {
				setTimeout(() => {
					this.viewDescription();
				}, 300);
			}
			setTimeout(() => {
				this.checkDescriptionExist();
			}, 0);
			this.descriptionVisible = true;
			this.editActive = false;
			this.checkProportions(1);
		},
		storeDescription() {
			axios
				.post("/graphics/description/" + this.graphicID)
				.then(request => {})
				.catch(function() {});
		},
		editDiscription() {
			axios
				.patch("/graphics/description/" + this.graphicID, this.description)
				.then(request => {
					this.editActive = !this.editActive;
				})
				.catch(function() {});
		},
		checkDescriptionExist() {
			axios
				.get("/graphics/description/" + this.graphicID)
				.then(request => {
					this.description = request.data;
					console.log(this.description);
					let crossWrapper = document.querySelector(
						".animationIconDescription"
					);
					let ankle2 = document.querySelector(".angle2");
					if (this.description != "") {
						console.log("YEY");

						crossWrapper.classList.add("animationIconDescription_DONE");
						ankle2.classList.add("angle2_DONE");
					} else {
						crossWrapper.classList.remove("animationIconDescription_DONE");
						ankle2.classList.remove("angle2_DONE");
					}
				})
				.catch(error => {
					console.log(error);
				});
		}
	},
	mounted() {
		this.checkDescriptionExist();

		this.checkProportions(2);
	},
	updated() {}
};
</script>