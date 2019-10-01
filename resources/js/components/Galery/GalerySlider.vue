<template>
	<transition name="modal">
		<div class="GalerySliderWrapper">
			<div class="GaleryContent">
				<div class="PreviousImg">
					<img
						v-if="activeGaleryItem>0"
						:src="'./storage/graphicNew/'+listGraphicsProp[activeGaleryItem-1].path"
					/>
				</div>
				<div class="ActiveImg">
					<div class="ActiveImgContent">
						<img :src="'./storage/graphicNew/'+listGraphicsProp[activeGaleryItem].path" />
						<div v-if="!descriptionVisible" class="GraphicDescription">
							<div class="descriptionHeader">
								<p>The</p>
								<div v-if="!editActive" class="customeTitle">{{description.title}}</div>
								<input
									v-if="editActive"
									type="text"
									name="title"
									ref="title"
									id="title"
									class="customeTitle"
									:placeholder="description.title"
									v-model="description.title"
								/>
							</div>
							<div class="descriptionMain">
								<p>Content</p>

								<div v-if="!editActive" class="customeContentWrapper">{{description.info}}</div>
								<input
									v-if="editActive"
									type="text"
									name="info"
									ref="info"
									id="info"
									class="customeContentWrapper"
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
										class="customNick"
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
										class="customeDate"
										:placeholder="description.date"
										v-model="description.date"
									/>
								</div>
							</div>
						</div>
						<div class="imageDescriptionMenuWrapper">
							<div class="viewDescription" @click="viewDescription">+</div>
							<transition name="roll-in-top">
								<div v-if="!descriptionVisible" class="editDescription" @click="editDiscription()">Edit</div>
							</transition>
						</div>
					</div>
				</div>
				<div class="NextImg">
					<img
						v-if="activeGaleryItem<this.listGraphicsProp.length-1"
						:src="'./storage/graphicNew/'+listGraphicsProp[activeGaleryItem+1].path"
					/>
				</div>
			</div>
			<div class="sliderNavigation">
				<button v-if="activeGaleryItem>0" class="arrow prev" @click="$emit('previous')"></button>
				<button class="close" @click="$emit('close')"></button>
				<button
					v-if="activeGaleryItem<this.listGraphicsProp.length-1"
					class="arrow next"
					@click="$emit('next')"
				></button>
			</div>
		</div>
	</transition>
</template>
<script>
import { mapState } from "vuex";

export default {
	props: ["GaleryImgSlot", "activeGaleryItem", "listGraphicsProp", "graphicID"],
	computed: mapState(["graphics"]),
	watch: {},
	data() {
		return {
			descriptionVisible: true,
			description: "",
			editActive: false
		};
	},
	methods: {
		viewDescription() {
			if (this.descriptionVisible == true) {
				axios
					.get("/graphics/description/" + this.graphicID)
					.then(request => {
						console.log(request.data);
						this.description = request.data;

						this.storeDescription();

						this.descriptionVisible = false;
					})
					.catch(function() {
						console.log("FAILURE!!");
					});
			} else {
				this.descriptionVisible = true;
			}
		},
		storeDescription() {
			axios
				.post("/graphics/description/" + this.graphicID)
				.then(request => {
					console.log(request);
				})
				.catch(function() {
					console.log("FAILURE!!");
				});
		},
		editDiscription() {
			axios
				.patch("/graphics/description/" + this.graphicID, this.description)
				.then(request => {
					console.log(request);
					this.editActive = !this.editActive;
				})
				.catch(function() {
					console.log("FAILURE!!");
				});
		}
	},
	mounted() {
		console.log(this.listGraphicsProp);
		console.log(this.activeGaleryItem);
		console.log(this.listGraphicsProp.length);
	}
};
</script>