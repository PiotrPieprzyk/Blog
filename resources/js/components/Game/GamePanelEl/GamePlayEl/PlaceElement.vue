<template>
	<div class="placeElement">
		<div class="placeName">{{descriptionLocation.name}}</div>
		<div class="placeDescription">{{descriptionLocation.description}}</div>
		<div class="borders">Możesz pójść w:{{bordersList}}</div>
	</div>
</template>
<script lant="ts">
export default {
	props: ["descriptionLocation", "borderPlace", "navigationInfo"],
	data: function() {
		return {
			bordersList: ""
		};
	},
	mounted() {
		let borders = this.borderPlace(
			this.navigationInfo.x,
			this.navigationInfo.y
		);
		let directionsList = "";
		if (borders.left) {
			directionsList = directionsList + " lewo";
		}
		if (borders.right) {
			directionsList = directionsList + " prawo";
		}
		if (borders.top) {
			directionsList = directionsList + " góra";
		}
		if (borders.bottom) {
			directionsList = directionsList + " dół";
		}
		this.bordersList = directionsList;
	}
};
</script>