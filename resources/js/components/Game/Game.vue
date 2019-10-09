<template>
	<div class="screenGame">
		<div class="uploadedPlaceElementsList">
			<place-element
				v-for="(element,index) in uploadedPlaceElementsList"
				:key="index"
				:descriptionLocation="uploadedPlaceElementsList[index]"
				:borderPlace="checkBorders"
				:navigationInfo="currentNavigation"
			></place-element>
		</div>
		<div class="consoleInput" @keydown.enter="submitCommend">
			<input type="text" class="consoleInput" v-model="currentCommend" />
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			uploadedPlaceElementsList: [],
			currentCommend: "",
			currentNavigation: {
				x: 0,
				y: 0
			},
			mapPlace: {
				"0_0": {
					name: "home",
					description: "small house",
					x: 0,
					y: 0,
					location: "city",
					world: ""
				},
				"0_1": {
					name: "Wood",
					description: "smelly wood",
					x: 1,
					y: 0,
					location: "wood",
					world: ""
				}
			},
			mapNavigation: {
				0: { 0: 1, 1: 1 }
			}
		};
	},

	methods: {
		submitCommend() {
			console.log("WORK");
			let div = document.createElement("div");
			let list = document.querySelector(".uploadedPlaceElementsList");
			div.classList.add("consoleCommend");
			div.textContent = this.currentCommend;
			if (list) {
				list.appendChild(div);
			}
			this.navigationCommend(this.currentCommend);
			this.currentCommend = "";
		},
		navigationCommend(commend) {
			let border = this.checkBorders(
				this.currentNavigation.x,
				this.currentNavigation.y
			);
			console.log(border);
			if (commend == "left" && border.left) {
				this.currentNavigation.x--;
				this.getCurrentPlace(
					this.currentNavigation.x,
					this.currentNavigation.y
				);
			} else if (commend == "right" && border.right) {
				this.currentNavigation.x++;
				this.getCurrentPlace(
					this.currentNavigation.x,
					this.currentNavigation.y
				);
			} else if (commend == "top" && border.top) {
				this.currentNavigation.y++;
				this.getCurrentPlace(
					this.currentNavigation.x,
					this.currentNavigation.y
				);
			} else if (commend == "bottom" && border.bottom) {
				this.currentNavigation.y--;
				this.getCurrentPlace(
					this.currentNavigation.x,
					this.currentNavigation.y
				);
			} else {
			}
		},
		getCurrentPlace(k, l) {
			let index = l + "_" + k;
			this.uploadedPlaceElementsList.push(this.mapPlace[index]);
		},
		checkBorders(x, y) {
			console.log(y);
			console.log(x);
			let left = this.mapNavigation[y][x - 1];
			let right = this.mapNavigation[y][x + 1];
			let top;
			let bottom;
			if (this.mapNavigation[y + 1]) {
				top = this.mapNavigation[y + 1][x];
			} else {
				top = undefined;
			}
			if (this.mapNavigation[y - 1]) {
				bottom = this.mapNavigation[y - 1][x];
			} else {
				bottom = undefined;
			}
			return { left, right, top, bottom };
		}
	},
	mounted() {
		this.getCurrentPlace(0, 0);
	}
};
</script>