<template>
	<div class="GaleryPage">
		<div class="GaleryTitleWrapper">
			<div class="GaleryTitle">Graphics</div>
		</div>
		<div class="GaleryGraphicWrapper">
			<div v-for="item in graphics" :key="item.id" :class="'Graphic'+item.id" class="GraphicWrapper">
				<img :style="'background-image: url(./images/galery/'+item.href+');'" />
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
	computed: mapState(["graphics"])
};
</script>
<style >
</style>