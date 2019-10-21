<template>
	<div class="edytorWrapper">
		<div class="worldsListWrapper">
			<div class="world">Dream</div>
			<div
				class="consoleInput"
				@keydown.enter.exact="submitCommend"
				@keydown.up.exact="showLastCommend(1)"
				@keydown.down.exact="showLastCommend(0)"
			>
				<input id="menu" type="text" class="consoleInput" v-model="thisCommend" autofocus />
			</div>
		</div>
		<div
			class="mapWrapperOutter"
			@mousedown="grapMap"
			@mouseup="dropMap"
			@mousemove="moveMap"
			@wheel="scaleMap"
		>
			<div
				class="map"
				:style="'transform: translateX('+startPositionX+'px) translateY('+startPositionY+'px) scale('+startScale+') ; grid-template-rows: '+maxGridY"
			>
				<div
					class="colWrapper"
					v-for="(col) in sortedMapY"
					:key="col"
					:id="col"
					:style="'grid-template-columns: '+maxGridX  +'; grid-row: '+((maxValueY)+1+(-parseInt(col)))"
				>
					<div
						:id="col+'_'+location"
						class="location"
						v-for="(location, x) in sortedMapX[col]"
						:key="x"
						:style="'grid-column: '+ (Math.abs(minValueX)+1+parseInt(location))"
					>
						<p>{{mapPlace[col+"_"+location]? mapPlace[col+"_"+location].name +location: null }}</p>
						<p class="left bridge" v-if="checkBorders(location,col).left"></p>
						<p class="right bridge" v-if="checkBorders(location,col).right"></p>
						<p class="top bridge" v-if="checkBorders(location,col).top"></p>
						<p class="bottom bridge" v-if="checkBorders(location,col).bottom"></p>
					</div>
				</div>
			</div>
		</div>
		<div class="locationDescriptionsWrapper"></div>
	</div>
</template>
<script>
import {
	cleanConsole,
	showLastCommend,
	submitCommend,
	dataConsole,
	checkBorders
} from "./mixins/CleanConsole.js";
import { navigationCommendEdytor } from "./mixins/CommendList";
export default {
	mixins: [
		cleanConsole,
		showLastCommend,
		submitCommend,
		dataConsole,
		checkBorders,
		navigationCommendEdytor
	],
	data: function() {
		return {
			// CURRENT LOCATION
			currentNavigation: {
				x: 0,
				y: 0
			},
			// MAP DATA
			mapPlace: {
				"0_0": {
					name: "home",
					description: "small house",
					x: 0,
					y: 0,
					location: "city",
					world: "Dream"
				},
				"0_1": {
					name: "Wood",
					description: "smelly wood",
					x: 1,
					y: 0,
					location: "wood",
					world: "Dream"
				},
				"1_0": {
					name: "home",
					description: "small house",
					x: 0,
					y: 1,
					location: "city",
					world: "Dream"
				},
				"1_1": {
					name: "Wood",
					description: "smelly wood",
					x: 1,
					y: 1,
					location: "wood",
					world: "Dream"
				},
				"1_-1": {
					name: "home",
					description: "small house",
					x: 0,
					y: 1,
					location: "city",
					world: "Dream"
				},
				"1_2": {
					name: "Wood",
					description: "smelly wood",
					x: 2,
					y: 1,
					location: "wood",
					world: "Dream"
				},
				"-1_0": {
					name: "home",
					description: "small house",
					x: 0,
					y: -1,
					location: "city",
					world: "Dream"
				},
				"-1_1": {
					name: "Wood",
					description: "smelly wood",
					x: 1,
					y: -1,
					location: "wood",
					world: "Dream"
				},
				"-1_2": {
					name: "Wood",
					description: "smelly wood",
					x: 2,
					y: -1,
					location: "wood",
					world: "Dream"
				},
				"-3_2": {
					name: "LOL",
					description: "smelly wood",
					x: 2,
					y: -1,
					location: "wood",
					world: "Dream"
				}
			},
			// NAVIGATION MAP
			mapNavigation: {
				"1": { "0": "home", "1": "Wood", "2": "Wood", "-1": "home" },
				"0": { "0": "home", "1": "Wood" },
				"-1": { "0": "home", "1": "Wood", "2": "Wood" },
				"-3": { "2": "LOL" }
			},
			mapGrapped: false,
			startPositionX: 0,
			startPositionY: 0,
			startScale: 1,
			sortedMapY: [],
			sortedMapX: [[]],
			maxMapX: 0,
			maxMapY: 0,
			maxGridX: "",
			maxGridY: "",
			minValueX: 0,
			maxValueX: 0,
			minValueY: 0,
			maxValueY: 0
		};
	},
	methods: {
		checkMinMaxValueX() {
			let minXTEMP = 0;
			let maxXTEMP = 0;
			this.sortedMapY.forEach(elementY => {
				Object.keys(this.mapNavigation[elementY]).forEach(elementX => {
					if (minXTEMP > elementX) {
						minXTEMP = elementX;
					}
					if (maxXTEMP < elementX) {
						maxXTEMP = elementX;
					}
				});
			});
			this.maxMapX = Math.abs(minXTEMP - maxXTEMP) + 1;
			this.maxValueX = maxXTEMP;
			this.minValueX = minXTEMP;
		},
		checkMinMaxValueY() {
			let minYTEMP = 0;
			let maxYTEMP = 0;
			this.sortedMapY.forEach(elementY => {
				if (minYTEMP < parseInt(elementY)) {
					minYTEMP = parseInt(elementY);
				}
				if (maxYTEMP > parseInt(elementY)) {
					maxYTEMP = parseInt(elementY);
				}
			});
			this.maxMapY = Math.abs(minYTEMP - maxYTEMP) + 1;
			this.minValueY = maxYTEMP;
			this.maxValueY = minYTEMP;
			console.log(this.maxMapY + "MAX MAP GRID ");
			console.log(this.maxValueY + "MAX VALUE Y ");
			console.log(this.minValueY + "MIN VALUE Y ");
		},
		sortingMapY() {
			this.sortedMapY = [];
			Object.keys(this.mapNavigation).forEach(element => {
				this.sortedMapY.push(element);
			});
			this.sortedMapY.sort((a, b) => parseInt(a) - parseInt(b));
			this.sortedMapY.reverse();
			console.log(this.sortedMapY);
		},
		sortingMapX(x) {
			this.sortedMapX[x] = [];
			Object.keys(this.mapNavigation[x]).forEach(element => {
				this.sortedMapX[x].push(element);
			});
			this.sortedMapX[x].sort();
		},
		grapMap() {
			this.mapGrapped = true;
		},
		dropMap() {
			this.mapGrapped = false;
		},
		moveMap(e) {
			if (this.mapGrapped == true) {
				this.startPositionX = this.startPositionX + e.movementX;
				this.startPositionY = this.startPositionY + e.movementY;
			}
		},
		scaleMap(e) {
			let direction;
			if (e.deltaY < 0) {
				this.startScale = this.startScale + 0.5;
			} else {
				if (this.startScale - 0.5 > 0) {
					this.startScale = this.startScale - 0.5;
				}
			}
		}
	},
	watch: {
		maxMapX: function() {
			this.maxGridX = "";
			for (let i = 0; i < this.maxMapX; i++) {
				this.maxGridX = this.maxGridX + "1fr ";
			}
		},
		maxMapY: function() {
			this.maxGridY = "";
			for (let i = 0; i < this.maxMapY; i++) {
				this.maxGridY = this.maxGridY + "1fr ";
			}
		}
	},
	mounted() {
		document.getElementById("menu").focus();
		let keysArray = Object.keys(this.mapNavigation);
		let mapCollector = document.querySelector(".map");
		this.sortingMapY();
		this.sortedMapY.forEach(element => {
			this.sortingMapX(element);
		});

		this.checkMinMaxValueX();
		this.checkMinMaxValueY();
		// keysArray.forEach(element => {
		// 	let colWrapper = document.createElement("div");
		// 	colWrapper.classList.add("colWrapper");
		// 	Object.keys(this.mapNavigation[element]).forEach(element2 => {
		// 		let location = document.createElement("div");
		// 		location.id = element + "_" + element2;
		// 		location.classList.add("location");
		// 		colWrapper.appendChild(location);
		// 	});
		// 	mapCollector.appendChild(colWrapper);
		// });
	}
};
</script>