<template>
	<div class="startWebWrapperContent">
		<div class="wrapperContentTitle mt60">
			<h1>{{ cards[currentCard].title }}</h1>
		</div>
		<div class="wrapperContent" v-html="cards[currentCard].content"></div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	computed: mapState(["cards", "currentCard"])
};
</script>