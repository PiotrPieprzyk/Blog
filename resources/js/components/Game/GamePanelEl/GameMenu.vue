<template>
	<div class="menuWrapper">
		<div class="uploadedPlaceElementsList">
			<place-element
				v-for="(element,index) in uploadedPlaceElementsList"
				:key="index"
				:descriptionLocation="uploadedPlaceElementsList[index]"
			></place-element>
		</div>
		<div class="consoleInput" @keydown.enter.exact="submitCommend('menu')">
			<input id="menu" type="text" class="consoleInput" v-model="menuCommend" autofocus />
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	computed: mapState(["menu"]),
	watch: {
		menuCommend: function() {
			this.$store.commit("setCurrentCommend", this.menuCommend);
		}
	},
	data: function() {
		return {
			uploadedPlaceElementsList: [],
			menuCommend: "",
			lastCommends: [],
			lastCommendId: -1
		};
	},
	methods: {
		submitCommend(typeNavigation) {
			console.log("WORK");
			let div = document.createElement("div");
			let list = document.querySelector(".uploadedPlaceElementsList");
			div.classList.add("consoleCommend");
			div.textContent = this.menuCommend;
			if (list) {
				list.appendChild(div);
			}

			if (typeNavigation == "menu") {
				this.navigationCommend(this.menuCommend);
			}
			this.lastCommends.unshift(this.menuCommend);
			this.menuCommend = "";
			setTimeout(() => {
				document.querySelector(
					".screenGame"
				).scrollTop = document.querySelector(".screenGame").scrollHeight;
			}, 0);
		},
		navigationCommend(commend) {
			console.log("DZIAŁA");
			switch (commend) {
				case "game":
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