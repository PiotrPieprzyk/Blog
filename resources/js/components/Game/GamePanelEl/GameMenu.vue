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
		<div class="consoleInput" @keydown.enter.exact="submitCommend('menu')">
			<input id="menu" type="text" class="consoleInput" v-model="thisCommend" autofocus />
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	computed: mapState(["menu", "currentCommend"]),
	watch: {
		thisCommend: function() {
			this.$store.commit("setCurrentCommend", this.thisCommend);
		}
	},
	data: function() {
		return {
			uploadedPlaceElementsList: [],
			thisCommend: "",
			lastCommends: [],
			lastCommendId: -1,
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
	methods: {
		submitCommend(typeNavigation) {
			// write commend
			let div = document.createElement("div");
			let list = document.querySelector(".uploadedPlaceElementsList");
			div.classList.add("consoleCommend");
			div.textContent = this.currentCommend;
			if (list) {
				list.appendChild(div);
			}
			// save commend
			this.lastCommends.unshift(this.currentCommend);
			this.thisCommend = "";
			// auto scroll
			setTimeout(() => {
				document.querySelector(
					".screenGame"
				).scrollTop = document.querySelector(".screenGame").scrollHeight;
			}, 0);

			// check commend
			this.navigationCommend(this.currentCommend);
		},
		// === list commends === //
		navigationCommend(commend) {
			switch (commend) {
				case "gra":
					this.uploadedPlaceElementsList = [];
					this.lastCommends = [];
					this.lastCommendId = -1;
					Array.prototype.forEach.call(
						document.querySelectorAll(".consoleCommend"),
						function(node) {
							node.parentNode.removeChild(node);
						}
					);
					this.$store.commit("setMenu", false);

					break;
			}
		}
	},
	mounted() {
		setTimeout(() => {
			document.getElementById("menu").focus();
		}, 0);
	}
};
</script>