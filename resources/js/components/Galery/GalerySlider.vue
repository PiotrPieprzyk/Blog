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
						<img
							:src="'./storage/graphicNew/'+listGraphicsProp[activeGaleryItem].path"
							@click="viewDescription"
						/>
						<div
							v-if="!descriptionVisible"
							@click="descriptionVisible = !descriptionVisible"
							class="GraphicDescription"
						>
							<div class="descriptionHeader">
								<p>The</p>
								<div class="customeTitle">{{description.title}}</div>
							</div>
							<div class="descriptionMain">
								<p>Content</p>

								<div class="customeContentWrapper">{{description.info}}</div>
							</div>
							<div class="descriptionFooter">
								<div class="creatorNickWrapper">
									<p>Creator:</p>
									<div class="customNick">{{description.creator}}</div>
								</div>
								<div class="dataCreateWrapper">
									<p>Data:</p>
									<div class="customNick">{{description.date}}</div>
								</div>
							</div>
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
	data() {
		return {
			descriptionVisible: true,
			description: ""
		};
	},
	methods: {
		viewDescription() {
			axios
				.get("/graphics/description/" + this.graphicID)
				.then(request => {
					console.log(request.data);
					this.description = request.data;
					this.descriptionVisible = false;
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