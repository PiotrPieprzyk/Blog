<template>
	<div class="GaleryPage">
		<div class="GaleryTitleWrapper">
			<div class="GaleryTitle">Graphic</div>
		</div>
		<galery-slider
			v-if="OnSlider"
			@close="closeSlider()"
			@previous="activeMinus()"
			@next="activePlus()"
			:activeGaleryItem="activeGaleryId"
			:listGraphicsProp="listGraphics"
			:graphicID="idGraphic"
		></galery-slider>
		<div class="GaleryGraphicWrapper">
			<div
				v-for="(item, index) in listGraphics"
				:key="index"
				:class="'Graphic'+index"
				class="GraphicWrapper"
			>
				<button
					slot="GaleryImage"
					class="GraphicButton"
					@click="showSlider(index, listGraphics[index].id)"
				>
					<img :style="'background-image: url(./storage/graphicNew/'+item.path+');'" />
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	props: ["overflowType"],
	computed: mapState(["graphics"]),
	data() {
		return {
			OnSlider: false,
			activeGaleryId: "",
			listGraphics: "",
			idGraphic: ""
		};
	},
	methods: {
		showSlider(id, graphic_id) {
			this.activeGaleryId = id;
			this.OnSlider = true;
			document.body.classList.remove("overflowAuto");
			this.idGraphic = graphic_id;
		},
		closeSlider() {
			this.OnSlider = false;
			document.body.classList.add("overflowAuto");
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
		document.body.classList.add("overflowAuto");
		document.body.classList.add("galeryBackground");
		axios
			.get("/graphics/" + 0)
			.then(request => {
				this.listGraphics = request.data;
			})
			.catch(function() {});
	},
	beforeRouteLeave(to, from, next) {
		document.body.classList.remove("overflowAuto");
		document.body.classList.remove("galeryBackground");
		next();
	}
};
</script>
<style >
</style>