<template>
	<nav class="navBarOuter">
		<div class="navBarWrapper">
			<router-link to="/" style="z-index: 1;">
				<div class="logoWrapper">
					<p>OurBlog</p>
				</div>
			</router-link>
			<div class="buttonWrapper" v-if="authCheck==null">
				<div @click="sizingDown(2)" class="closeSizing"></div>
				<div @click="sizingUp(1)" class="loginButton" style="width: 60px; height: 31px;">
					<p>Zaloguj</p>
					<transition name="opacity">
						<div v-if="loginOrRegister == 1" class="responsiveLoginCard">
							<login-form></login-form>
						</div>
					</transition>
				</div>
				<div class="registerButton" style="width: 85px;">
					<p>Zarejestruj</p>
				</div>
			</div>
			<div class="profileNavWrapper" v-if="authCheck!=null">
				<div class="profileNav">
					<p class="profileName">{{'Witaj! '+ authCheck.name }}</p>
					<form id="logout-form" method="POST" action="/logout">
						<input type="hidden" name="_token" :value="csrf" />
						<router-link to="/">Profil</router-link>
						<button type="submit" class="submitForm">Logout</button>
					</form>
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
		let currentHeight = parseInt(changerWrapper.style.height);
		let round = 1;

		const interval = setInterval(() => {
			changerWrapper.style.width = currentWidth + round * 10 + "px";
			changerWrapper.style.height = currentHeight + round * 5 + "px";

			round++;

			if (round > 30) {
				clearInterval(interval);
				console.log("complited");
			}
		}, 2);
	}
};
let sizingDownDiv = (index, defaulting, storage) => {
	if (storage.loginOrRegister == 1) {
		defaulting = document.querySelector(".loginButton");
		console.log("login");
	}
	if (defaulting != "") {
		let currentWidthDefaulting = parseInt(defaulting.style.width);
		let currentHeightDefaulting = parseInt(defaulting.style.height);

		let roundDefaulting = 1;
		console.log(currentWidthDefaulting);

		const intervalDefaulting = setInterval(() => {
			defaulting.style.width =
				currentWidthDefaulting - roundDefaulting * 10 + "px";
			defaulting.style.height =
				currentHeightDefaulting - roundDefaulting * 5 + "px";
			roundDefaulting++;

			console.log(roundDefaulting);
			if (roundDefaulting > 30) {
				clearInterval(intervalDefaulting);
				console.log("complited");
			}
		}, 2);
	}
};
export default {
	// Sprawdzanie czy ktoś jest zalogowany
	props: ["user"],
	data: function() {
		return {
			loginOrRegister: 0
		};
	},
	computed: {
		authCheck() {
			console.log(this.$store.state.authCheck);
			return this.$store.state.authCheck;
		},
		csrf() {
			return this.$store.state.csrf;
		}
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
		}
	},
	created() {
		this.$store.commit("changeAuthData", this.user);
	}
};
</script>
