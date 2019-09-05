<template>
	<div class="start-web-wrapper-img">
		<div
			class="cardWrapper"
			v-for="item in backgroundImages"
			:key="item.id"
			:class="'Image'+item.id"
			:style="'z-index:-'+item.id"
		>
			<img :style="'background-image: url('+item.href+');'" />
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