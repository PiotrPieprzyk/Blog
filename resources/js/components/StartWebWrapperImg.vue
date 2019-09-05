<template>
	<div class="start-web-wrapper-img borRed">
		<div
			class="cardWrapper"
			v-for="item in backgroundImages"
			:key="item.id"
			:class="'Image'+item.id"
			:style="'z-index:-'+item.id"
		>
			<img :src="item.href" />
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