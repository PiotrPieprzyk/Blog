<template>
	<nav class="navBarOuter">
		<div class="navBarWrapper">
			<router-link to="/">
				<div class="logoWrapper">
					<p>OurBlog</p>
				</div>
			</router-link>
			<div class="buttonWrapper">
				<div @click="logOrRegChange(1,)" class="loginButton">
					<p>Zaloguj</p>
					<transition @before-enter="beforeEnterLogin">
						<div v-if="loginOrRegister == 1" class="responsiveLoginCard"></div>
					</transition>
				</div>
				<div @click="logOrRegChange(2)" class="registerButton">
					<p>Zarejestruj</p>
					<transition>
						<div v-if="loginOrRegister == 2" class="responsiveRegisterCard"></div>
					</transition>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
import { setInterval, clearInterval } from "timers";

let loginDiv = document.querySelector(".loginButton");
console.log(loginDiv);
export default {
	data: function() {
		return {
			loginOrRegister: 0
		};
	},
	methods: {
		logOrRegChange(index) {
			this.loginOrRegister = index;
		},
		beforeEnterLogin(el) {
			let round = 1;
			console.log(el.parentElement);
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
	}
};
</script>
