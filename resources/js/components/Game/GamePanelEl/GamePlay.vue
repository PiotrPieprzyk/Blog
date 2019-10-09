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
			@keydown.ctrl.up.exact="gameCommend='góra'"
			@keydown.ctrl.down.exact="gameCommend='dół'"
			@keydown.ctrl.left.exact="gameCommend='lewo'"
			@keydown.ctrl.right.exact="gameCommend='prawo'"
		>
			<input id="game" type="text" class="consoleInput" v-model="gameCommend" autofocus />
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	computed: mapState(["menu", "currentCommend"]),
	data: function() {
		return {
			gameCommend: "",

			menuConditional: false,
			uploadedPlaceElementsList: [],
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
			},
			lastCommends: [],
			lastCommendId: -1
		};
	},
	watch: {
		gameCommend: function() {
			this.$store.commit("setCurrentCommend", this.gameCommend);
		},
		menuConditional: function() {
			this.$store.commit("setMenu", this.menuConditional);
		}
	},
	methods: {
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
		},
		getCurrentPlace(k, l) {
			let index = l + "_" + k;
			this.uploadedPlaceElementsList.push(this.mapPlace[index]);
		},
		submitCommend(typeNavigation) {
			console.log("WORK");
			let div = document.createElement("div");
			let list = document.querySelector(".uploadedPlaceElementsList");
			div.classList.add("consoleCommend");
			div.textContent = this.currentCommend;
			if (list) {
				list.appendChild(div);
			}

			if (typeNavigation == "game") {
				this.navigationCommendGame(this.currentCommend);
			}
			if (typeNavigation == "menu") {
				this.navigationCommend(this.currentCommend);
			}
			this.lastCommends.unshift(this.currentCommend);
			this.gameCommend = "";
			setTimeout(() => {
				document.querySelector(
					".screenGame"
				).scrollTop = document.querySelector(".screenGame").scrollHeight;
			}, 0);
		},
		showLastCommend(x) {
			if (x == 1 && this.lastCommends.length - 1 > this.lastCommendId) {
				this.lastCommendId++;
				this.currentCommend = this.lastCommends[this.lastCommendId];
				console.log(this.lastCommendId);
			} else if (x == 0 && this.lastCommendId > 0) {
				this.lastCommendId--;
				this.currentCommend = this.lastCommends[this.lastCommendId];
				console.log(this.lastCommendId);
			} else {
				this.currentCommend = "";
				this.lastCommendId = -1;
			}
		},
		navigationCommendGame(commend) {
			let border = this.checkBorders(
				this.currentNavigation.x,
				this.currentNavigation.y
			);
			console.log(border);
			switch (commend) {
				case "lewo":
					if (border.left) {
						this.currentNavigation.x--;
						this.getCurrentPlace(
							this.currentNavigation.x,
							this.currentNavigation.y
						);
					}
					break;
				case "prawo":
					if (border.right) {
						this.currentNavigation.x++;
						this.getCurrentPlace(
							this.currentNavigation.x,
							this.currentNavigation.y
						);
					}
					break;
				case "góra":
					if (border.top) {
						this.currentNavigation.y++;
						this.getCurrentPlace(
							this.currentNavigation.x,
							this.currentNavigation.y
						);
					}
					break;
				case "dół":
					if (border.bottom) {
						this.currentNavigation.y--;
						this.getCurrentPlace(
							this.currentNavigation.x,
							this.currentNavigation.y
						);
					}
					break;
				case "menu":
					this.uploadedPlaceElementsList = [];
					this.lastCommends = [];
					this.lastCommendId = -1;
					Array.prototype.forEach.call(
						document.querySelectorAll(".consoleCommend"),
						function(node) {
							node.parentNode.removeChild(node);
						}
					);
					this.menuConditional = true;

					break;
			}
		}
	},
	mounted() {
		this.getCurrentPlace(this.currentNavigation.x, this.currentNavigation.y);
		setTimeout(() => {
			document.getElementById("game").focus();
		}, 0);
	}
};
</script>