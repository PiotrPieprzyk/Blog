<template>
	<div class="start-web-wrapper-img">
		<div
			class="cardWrapper"
			v-for="(item, index) in backgroundImages"
			:key="item.id"
			:class="'Image'+item.id"
			:style="'z-index:-'+item.id"
		>
			<img v-if="index!=3" :style="'background-image: url(./images/galery/'+item.href+');'" />
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	props: ["backgroundImages"],
	data: function() {
		return {};
	},
	computed: mapState(["currentImgArray"])
};
</script>