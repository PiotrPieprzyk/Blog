<template>
	<div class="startWebWrapperContent borRed">
		<div class="wrapperContentTitle">
			<h1>{{ cards[0].title }}</h1>
		</div>
		<div class="wrapperContent">{{ cards[0].content }}</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	computed: mapState(["cards"])
};
</script>