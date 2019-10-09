<template>
	<div class="placeElement">
		<div class="placeName">{{title}}</div>
		<div class="placeDescription">{{description}}</div>
	</div>
</template>
<script>
export default {
	props: ["title", "description"]
};
</script>