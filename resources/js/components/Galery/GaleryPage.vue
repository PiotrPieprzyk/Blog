<template>
	<div class="GaleryPage">
		<div class="GaleryTitleWrapper">
			<div class="GaleryTitle">Graphic</div>
		</div>
		<galery-slider
			v-if="OnSlider"
			@close="OnSlider = false"
			@previous="activeGaleryId--"
			@next="activeGaleryId++"
			:activeGaleryItem="activeGaleryId"
			:listGraphicsProp="listGraphics"
		></galery-slider>
		<div class="GaleryGraphicWrapper">
			<div
				v-for="(item, index) in listGraphics"
				:key="index"
				:class="'Graphic'+index"
				class="GraphicWrapper"
			>
				<button slot="GaleryImage" class="GraphicButton" @click="showSlider(index)">
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
			listGraphics: ""
		};
	},
	methods: {
		showSlider(id) {
			this.activeGaleryId = id;
			this.OnSlider = true;
		}
	},
	mounted() {
		document.body.classList.add("overflowAuto");
		document.body.classList.add("galeryBackground");
		axios
			.get("/graphics/" + 0)
			.then(request => {
				console.log(request.data);
				this.listGraphics = request.data;
			})
			.catch(function() {
				console.log("FAILURE!!");
			});
	},
	beforeRouteLeave(to, from, next) {
		document.body.classList.remove("overflowAuto");
		document.body.classList.remove("galeryBackground");
		console.log("GALERY");
		next();
	}
};
</script>
<style >
</style>