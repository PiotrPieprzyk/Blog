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
	// methods: {
	// 	checkBorders(x, y) {
	// 		console.log(y);
	// 		console.log(x);
	// 		let left = this.mapNavigation[y][x - 1];
	// 		let right = this.mapNavigation[y][x + 1];
	// 		let top;
	// 		let bottom;
	// 		if (this.mapNavigation[y + 1]) {
	// 			top = this.mapNavigation[y + 1][x];
	// 		} else {
	// 			top = undefined;
	// 		}
	// 		if (this.mapNavigation[y - 1]) {
	// 			bottom = this.mapNavigation[y - 1][x];
	// 		} else {
	// 			bottom = undefined;
	// 		}
	// 		return { left, right, top, bottom };
	// 	}
	// },
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