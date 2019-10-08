<template>
	<div class="placeElement">
		<div class="placeName">{{descriptionLocation.name}}</div>
		<div class="placeDescription">{{descriptionLocation.description}}</div>
		<div class="borders">Możesz pójść w:</div>
	</div>
</template>
<script>
export default {
	props: ["descriptionLocation", "borderPlace"],
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
		let borders = this.borderPlace(0, 0);
		let directionsList = "";
		if (borders.left) {
			directionsList = directionsList + "left ";
		}
		if (borders.right) {
			directionsList = directionsList + "right ";
		}
		if (borders.top) {
			directionsList = directionsList + "top ";
		}
		if (borders.bottom) {
			directionsList = directionsList + "bottom ";
		}

		setTimeout(() => {
			document.querySelector(".borders").innerHTML =
				document.querySelector(".borders").innerHTML + " " + directionsList;
		}, 0);
	}
};
</script>