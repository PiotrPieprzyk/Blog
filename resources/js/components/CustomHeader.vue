<template>
	<nav class="navBarOuter">
		<div class="navBarWrapper">
			<router-link to="/" style="z-index: 1;">
				<div class="logoWrapper">
					<p>OurBlog</p>
				</div>
			</router-link>
			<div class="buttonWrapper">
				<div @click="sizingDown(2)" class="closeSizing"></div>
				<div @click="sizingUp(1)" class="loginButton" style="width: 60px;">
					<p>Zaloguj</p>
					<transition name="opacity">
						<div v-if="loginOrRegister == 1" class="responsiveLoginCard"></div>
					</transition>
				</div>
				<div class="registerButton" style="width: 85px;">
					<p>Zarejestruj</p>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
import { setInterval, clearInterval } from "timers";

let sizingUpDiv = (index, changerWrapper, storage) => {
	if (index == 1) {
		changerWrapper = document.querySelector(".loginButton");
		console.log(changerWrapper.style.width);
	}

	if (changerWrapper != "") {
		let currentWidth = parseInt(changerWrapper.style.width);
		let round = 1;

		const interval = setInterval(() => {
			changerWrapper.style.width = currentWidth + round * 10 + "px";
			round++;

			if (round > 30) {
				clearInterval(interval);
				console.log("complited");
			}
		}, 10);
	}
};
let sizingDownDiv = (index, defaulting, storage) => {
	if (storage.loginOrRegister == 1) {
		defaulting = document.querySelector(".loginButton");
		console.log("login");
	}
	if (defaulting != "") {
		let currentWidthDefaulting = parseInt(defaulting.style.width);
		let roundDefaulting = 1;
		console.log(currentWidthDefaulting);

		const intervalDefaulting = setInterval(() => {
			defaulting.style.width =
				currentWidthDefaulting - roundDefaulting * 10 + "px";
			roundDefaulting++;

			console.log(roundDefaulting);
			if (roundDefaulting > 30) {
				clearInterval(intervalDefaulting);
				console.log("complited");
			}
		}, 10);
	}
};
export default {
	data: function() {
		return {
			loginOrRegister: 0
		};
	},
	methods: {
		sizingUp(index) {
			let changerWrapper = "";
			if (this.loginOrRegister != index) {
				sizingUpDiv(index, changerWrapper, this);
				this.loginOrRegister = index;
			}
		},
		sizingDown(index) {
			let defaulting = "";
			sizingDownDiv(index, defaulting, this);
			this.loginOrRegister = index;
		},
		beforeEnterLogin(el) {
			let round = 1;
			// const interval = setInterval(() => {
			// 	let currentWidth = parseInt(
			// 		document.querySelector(".loginButton").style.width
			// 	);
			// 	console.log(currentWidth);
			// 	document.querySelector(".loginButton").style.width =
			// 		currentWidth + round * 10 + "px";
			// 	console.log(round);
			// 	round++;
			// 	if (round > 20) {
			// 		clearInterval(interval);
			// 		console.log("complited");
			// 	}
			// });
		}
	},
	mounted() {}
};
</script>
