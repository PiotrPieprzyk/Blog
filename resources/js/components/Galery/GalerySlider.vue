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
					<img :src="'./storage/graphicNew/'+listGraphicsProp[activeGaleryItem].path" />
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
	props: ["GaleryImgSlot", "activeGaleryItem", "listGraphicsProp"],
	computed: mapState(["graphics"]),
	mounted() {
		console.log(this.listGraphicsProp);
		console.log(this.activeGaleryItem);
		console.log(this.listGraphicsProp.length);
	}
};
</script>