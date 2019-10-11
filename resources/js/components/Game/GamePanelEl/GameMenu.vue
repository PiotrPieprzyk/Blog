<template>
	<div class="menuWrapper">
		<div class="uploadedPlaceElementsList">
			<menu-element
				v-for="(element,index) in menuElement"
				:key="index"
				:title="element.title"
				:description="element.description"
			></menu-element>
		</div>
		<div
			class="consoleInput"
			@keydown.enter.exact="submitCommend"
			@keydown.up.exact="showLastCommend(1)"
			@keydown.down.exact="showLastCommend(0)"
		>
			<input id="menu" type="text" class="consoleInput" v-model="thisCommend" autofocus />
		</div>
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
import { navigationCommendMenu } from "./mixins/CommendList";
export default {
	mixins: [
		cleanConsole,
		showLastCommend,
		submitCommend,
		dataConsole,
		checkBorders,
		navigationCommendMenu
	],
	data: function() {
		return {
			uploadedPlaceElementsList: [],
			// MENU DATA
			menuElement: {
				0: {
					title: "Menu: lista komend:",
					description: `
  Edytor - tylko dla admina
  Gra 
  Opcje`
				}
			}
		};
	},
	mounted() {
		document.getElementById("menu").focus();
	}
};
</script>