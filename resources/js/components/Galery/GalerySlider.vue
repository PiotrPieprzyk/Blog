<template>
	<transition name="modal">
		<div class="GalerySliderWrapper">
			<div class="GaleryContent">
				<div class="PreviousImg">
					<img v-if="activeGaleryItem>1" :src="'./images/galery/'+graphics[activeGaleryItem-2].href" />
				</div>
				<div class="ActiveImg">
					<img :src="'./images/galery/'+graphics[activeGaleryItem-1].href" />
				</div>
				<div class="NextImg">
					<img v-if="activeGaleryItem<11" :src="'./images/galery/'+graphics[activeGaleryItem].href" />
				</div>
			</div>
			<div class="sliderNavigation">
				<button v-if="activeGaleryItem>1" class="arrow prev" @click="$emit('previous')"></button>
				<button class="close" @click="$emit('close')"></button>
				<button v-if="activeGaleryItem<11" class="arrow next" @click="$emit('next')"></button>
			</div>
		</div>
	</transition>
</template>
<script>
import { mapState } from "vuex";

export default {
	props: ["GaleryImgSlot", "activeGaleryItem"],
	computed: mapState(["graphics"])
};
</script>