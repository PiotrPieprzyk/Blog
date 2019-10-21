<template>
	<div class="gamePlayWrapper">
		<div class="uploadedPlaceElementsList">
			<location
				v-for="(element,index) in uploadedPlaceElementsList"
				:key="index"
				:descriptionLocation="uploadedPlaceElementsList[index]"
				:borderPlace="checkBorders"
				:navigationInfo="currentNavigation"
			></location>
		</div>
		<div
			class="consoleInput"
			@keydown.enter.exact="submitCommend('game')"
			@keydown.up.exact="showLastCommend(1)"
			@keydown.down.exact="showLastCommend(0)"
			@keydown.ctrl.up.exact="thisCommend='góra'"
			@keydown.ctrl.down.exact="thisCommend='dół'"
			@keydown.ctrl.left.exact="thisCommend='lewo'"
			@keydown.ctrl.right.exact="thisCommend='prawo'"
		>
			<input id="game" type="text" class="consoleInput" v-model="thisCommend" autofocus />
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
import {
	cleanConsole,
	showLastCommend,
	submitCommend,
	dataConsole,
	checkBorders
} from "./mixins/CleanConsole.js";
import { navigationCommendGame } from "./mixins/CommendList";

export default {
	mixins: [
		cleanConsole,
		showLastCommend,
		submitCommend,
		dataConsole,
		checkBorders,
		navigationCommendGame
	],
	data: function() {
		return {
			uploadedPlaceElementsList: [],
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
			}
		};
	},
	methods: {
		getCurrentPlace(k, l) {
			let index = l + "_" + k;
			this.uploadedPlaceElementsList.push(this.mapPlace[index]);
		}
	},
	mounted() {
		this.getCurrentPlace(this.currentNavigation.x, this.currentNavigation.y);
		document.getElementById("game").focus();
	}
};
</script>