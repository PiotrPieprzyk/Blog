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
		></galery-slider>
		<div class="GaleryGraphicWrapper">
			<div v-for="item in graphics" :key="item.id" :class="'Graphic'+item.id" class="GraphicWrapper">
				<button slot="GaleryImage" class="GraphicButton" @click="showSlider(item.href, item.id)">
					<img :style="'background-image: url(./images/galery/'+item.href+');'" />
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	props: ["overflowType"],
	mounted() {
		document.body.classList.add("overflowAuto");
		document.body.classList.add("galeryBackground");
	},
	computed: mapState(["graphics"]),
	data() {
		return {
			OnSlider: false,
			activeGaleryId: ""
		};
	},
	methods: {
		showSlider(href, id) {
			this.activeGaleryId = id;
			this.OnSlider = true;
		}
	}
};
</script>
<style >
</style>