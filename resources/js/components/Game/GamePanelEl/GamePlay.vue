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
			<form autocomplete="off">
				<input id="game" type="text" class="consoleInput" v-model="thisCommend" autofocus />
			</form>
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
			mapPlace: {},
			// NAVIGATION MAP
			mapNavigation: {}
		};
	},
	methods: {
		getCurrentPlace(k, l) {
			let index = l + "_" + k;
			this.uploadedPlaceElementsList.push(this.mapPlace[index]);
		}
	},
	mounted() {
		axios.get("maps/" + "dream").then(request => {
			console.log(request);
			if (request != null) {
				this.mapPlace = JSON.parse(request.data.descriptions);
				this.mapNavigation = JSON.parse(request.data.navigation);

				this.getCurrentPlace(
					this.currentNavigation.x,
					this.currentNavigation.y
				);
				document.getElementById("game").focus();
			}
		});
	}
};
</script>