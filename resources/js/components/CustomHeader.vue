<template>
	<nav class="navBarOuter">
		<div class="navBarWrapper">
			<router-link to="/" style="z-index: 1;">
				<div class="logoWrapper">
					<p>OurBlog</p>
				</div>
			</router-link>
			<div class="buttonWrapper" v-if="authCheck==null">
				<div @click="sizingDown(2)" v-if="loginOrRegister == 1" class="closeSizing"></div>
				<div @click="sizingUp(1)" class="loginButton" style="width: 60px; height: 31px;">
					<p>Zaloguj</p>
					<transition name="opacity">
						<div v-if="loginOrRegister == 1" class="responsiveLoginCard">
							<login-form></login-form>
						</div>
					</transition>
				</div>
				<router-link to="/register" @click="sizingDown(2)" class="registerButton" style="width: 85px;">
					<p>Zarejestruj</p>
				</router-link>
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
import { setInterval, clearInterval, setTimeout } from "timers";
// Zwiększanie paska loguj
let sizingUpDiv = (index, changerWrapper, storage) => {
	// Który guzik zwiększyć?
	if (index == 1) {
		changerWrapper = document.querySelector(".loginButton");
	}
	// Czy ten guzik instnieje?
	if (changerWrapper != "") {
		// Sprawdź jego startową wielkość
		let currentWidth = parseInt(changerWrapper.style.width);
		let currentHeight = parseInt(changerWrapper.style.height);
		let round = 1;

		// Funkcje
		let changeHeight = () => {
			round = 1;
			interval = setInterval(() => {
				changerWrapper.style.height = currentHeight + round * 15 + "px";
				round++;
				if (round > 10) {
					clearInterval(interval);
				}
			}, 2);
		};
		// Wykonaj funkcję
		let interval = setInterval(() => {
			changerWrapper.style.width = currentWidth + round * 30 + "px";
			round++;

			if (round > 10) {
				clearInterval(interval);
				changeHeight();
				// Wskaż który guzik jest aktywny
				storage.loginOrRegister = index;
			}
		}, 2);
	}
};

// Zmniejszanie paska loguj
let sizingDownDiv = (index, defaulting, storage) => {
	// Który guzik zwiększyć?
	if (storage.loginOrRegister == 1) {
		defaulting = document.querySelector(".loginButton");
	}
	// Czy ten guzik instnieje?
	if (defaulting != "") {
		// Sprawdź jego startową wielkość
		let currentWidthDefaulting = parseInt(defaulting.style.width);
		let currentHeightDefaulting = parseInt(defaulting.style.height);
		let roundDefaulting = 1;
		// Wskaż który guzik jest nie aktywny
		storage.loginOrRegister = index;
		// Funkcje
		let heightDefaulting = () => {
			roundDefaulting = 1;
			intervalDefaulting = setInterval(() => {
				defaulting.style.width =
					currentWidthDefaulting - roundDefaulting * 30 + "px";
				roundDefaulting++;

				if (roundDefaulting > 10) {
					clearInterval(intervalDefaulting);
				}
			}, 2);
		};

		// Wykonaj funkcję
		let intervalDefaulting = setInterval(() => {
			defaulting.style.height =
				currentHeightDefaulting - roundDefaulting * 15 + "px";
			roundDefaulting++;

			if (roundDefaulting > 10) {
				clearInterval(intervalDefaulting);
				heightDefaulting();
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
			}
		},
		sizingDown(index) {
			let defaulting = "";
			sizingDownDiv(index, defaulting, this);
		}
	},
	created() {
		this.$store.commit("changeAuthData", this.user);
	}
};
</script>
