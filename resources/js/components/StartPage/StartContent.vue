<template>
	<div class="startWebWrapperContent">
		<div class="wrapperContentTitle mt60">
			<h1>{{ cards[currentCard].title }}</h1>
		</div>
		<div class="wrapperContent" v-html="cards[currentCard].content"></div>
		<div class="buttonWrapper">
			<router-link to="/galery" v-if="cards[currentCard].buttonText !=''">
				<button class="buttonItem">{{cards[currentCard].buttonText}}</button>
			</router-link>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	computed: mapState(["cards", "currentCard"])
};
</script>