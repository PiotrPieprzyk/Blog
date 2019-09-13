<template>
	<div class="GaleryPage">
		<div class="GaleryTitleWrapper">
			<div class="GaleryTitle">Graphics</div>
		</div>
		<galery-slider v-if="OnSlider" @close="OnSlider = false" :GaleryImgSlot="currentGaleryImage"></galery-slider>
		<div class="GaleryGraphicWrapper">
			<div v-for="item in graphics" :key="item.id" :class="'Graphic'+item.id" class="GraphicWrapper">
				<button slot="GaleryImage" class="GraphicButton" @click="showSlider(item.href)">
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
			currentGaleryImage: ""
		};
	},
	methods: {
		showSlider(href) {
			this.currentGaleryImage = href;
			this.OnSlider = true;
		}
	}
};
</script>
<style >
</style>