<template>
	<transition name="hide-nav">
		<nav class="navBarOuter" v-if="headerVisible==2">
			<div class="navBarWrapper">
				<router-link to="/" style="z-index: 1;">
					<div class="logoWrapper">
						<p>OurBlog</p>
					</div>
				</router-link>
				<div class="buttonWrapper" v-if="authCheck==null && headerVisible==2">
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
				<div class="profileNavWrapper" v-if="authCheck!=null && headerVisible==2">
					<div class="profileNav">
						<p class="profileName">{{'Witaj! '+ authCheck.name }}</p>
						<form id="logout-form" method="POST" action="/logout">
							<input type="hidden" name="_token" :value="csrf" />
							<router-link :to="'/profile/'+authCheck.id">Profil</router-link>
							<button type="submit" class="submitForm">Logout</button>
						</form>
					</div>
				</div>
				<!-- Mobile -->
				<div class="ToggleMenuStyle" @click="toggleMenu=!toggleMenu">
					<div class="toggleBar"></div>
					<div class="toggleBar"></div>
					<div class="toggleBar"></div>
				</div>
				<div v-if="toggleMenu==true" class="mobileMenyPopup">
					<!-- Guest -->
					<div class="contentPopup" v-if="authCheck==null">
						<h1>Logowanie</h1>
						<div class="mobileLoginWrapper">
							<login-form></login-form>
						</div>
						<router-link to="/register" @click="toggleMenu=!toggleMenu" class="mobileRegister">
							<h1 @click="toggleMenu=!toggleMenu">Zarejestruj</h1>
						</router-link>
						<div class="close" @click="toggleMenu=!toggleMenu"></div>
					</div>
					<!-- Zalogowany -->
					<div class="contentPopup" v-if="authCheck!=null">
						<div class="mobileProfileNavWrapper">
							<p class="mobileProfileName">{{authCheck.name}}</p>
							<router-link :to="'/profile/'+authCheck.id" class="mobileProfileButton">
								<p @click="toggleMenu=!toggleMenu">Profil</p>
							</router-link>

							<form id="logout-form" method="POST" action="/logout" class="mobileLogOutForm">
								<input type="hidden" name="_token" :value="csrf" />
								<button type="submit" class="mobileSubmitForm">
									<p>Logout</p>
								</button>
							</form>
						</div>
						<div class="close" @click="toggleMenu=!toggleMenu"></div>
					</div>
				</div>
			</div>
		</nav>
	</transition>
</template>
<script>
import { setInterval, clearInterval, setTimeout } from "timers";

Math.easeOutQuart = function(t, b, c, d) {
	t /= d;
	t--;
	return -c * (t * t * t * t - 1) + b;
};

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
				changerWrapper.style.height =
					Math.easeOutQuart(round, 31, 155, 30) + "px";
				round++;
				if (round > 30) {
					clearInterval(interval);
				}
			}, 100 / 30);
		};
		// Wykonaj funkcję
		let interval = setInterval(() => {
			changerWrapper.style.width = Math.easeOutQuart(round, 70, 290, 30) + "px";
			round++;

			if (round > 30) {
				clearInterval(interval);
				changeHeight();
				// Wskaż który guzik jest aktywny
				storage.loginOrRegister = index;
			}
		}, 100 / 30);
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
		let roundDefaulting = 60;
		// Wskaż który guzik jest nie aktywny
		storage.loginOrRegister = index;
		// Funkcje
		let heightDefaulting = () => {
			roundDefaulting = 60;
			intervalDefaulting = setInterval(() => {
				defaulting.style.width =
					Math.easeOutQuart(roundDefaulting, 70, 290, 60) + "px";
				roundDefaulting--;

				if (roundDefaulting < 0) {
					clearInterval(intervalDefaulting);
				}
			}, 50 / 60);
		};

		// Wykonaj funkcję
		let intervalDefaulting = setInterval(() => {
			defaulting.style.height =
				Math.easeOutQuart(roundDefaulting, 31, 155, 60) + "px";
			roundDefaulting--;

			if (roundDefaulting < 0) {
				clearInterval(intervalDefaulting);
				heightDefaulting();
			}
		}, 50 / 60);
	}
};
export default {
	// Sprawdzanie czy ktoś jest zalogowany
	props: ["user"],
	data: function() {
		return {
			loginOrRegister: 0,
			toggleMenu: false
		};
	},
	computed: {
		authCheck() {
			return this.$store.state.authCheck;
		},
		csrf() {
			return this.$store.state.csrf;
		},
		headerVisible() {
			return this.$store.state.headerVisible;
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
		},
		changeToggleValue() {
			this.toggleMenu = !this.toggleMenu;
		}
	},
	created() {
		this.$store.commit("changeAuthData", this.user);
	}
};
</script>
