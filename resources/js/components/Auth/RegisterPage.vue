<template>
	<div class="registerWeb">
		<transition name="opacity" appear>
			<div class="registerCard" v-if="contentActive">
				<div class="registerTitle">Register</div>
				<div class="registerContent">
					<form class="formLogin" method="POST" action="/register">
						<input type="hidden" name="_token" :value="csrf" />
						<div class="formGroup">
							<input
								type="name"
								class="formInput"
								name="name"
								id="name"
								placeholder="name"
								v-model="userData.name"
							/>
						</div>
						<p class="errorInfo">{{ }}</p>

						<div class="formGroup">
							<input
								type="email"
								class="formInput"
								name="email"
								id="email"
								placeholder="email"
								v-model="userData.email"
							/>
						</div>
						<p class="errorInfo">{{ errorInfoEmail }}</p>
						<div class="formGroup">
							<input
								type="password"
								class="formInput"
								name="password"
								id="password"
								placeholder="password"
								v-model="userData.password"
							/>
						</div>
						<p class="errorInfo">{{ errorInfoPassword }}</p>
						<div class="formGroup">
							<input
								type="password"
								class="formInput"
								name="password_confirmation"
								id="password-confirm"
								placeholder="passwordConfirm"
								v-model="userData.passwordConfirm"
							/>
						</div>
						<p class="errorInfo">{{ errorInfoPasswordConfirm }}</p>
						<div class="submitWraper">
							<button :disabled="!vaditionStatus" type="submit" class="submitForm" style>
								<img :src="image_src" />
							</button>
						</div>
					</form>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
export default {
	data() {
		return {
			image_src: "./images/header/send-icon.svg",
			userData: {
				name: "",
				email: "",
				password: "",
				passwordConfirm: "",
				csrf: "",
				contentActive: false
			}
		};
	},
	methods: {
		isEmpty(element) {
			return element == "" ? true : false;
		}
	},
	computed: {
		errorEmail() {
			let thisIsEmail = email => {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(email).toLowerCase());
			};

			if (thisIsEmail(this.userData.email)) {
				return true;
			} else {
				return false;
			}
		},
		errorPassword() {
			return this.userData.password.length > 7 ? true : false;
		},
		vaditionStatus() {
			if (
				this.errorPassword &&
				this.errorEmail &&
				this.userData.password == this.userData.passwordConfirm &&
				this.userData.name != ""
			) {
				return true;
			} else {
				return false;
			}
		},
		csrf() {
			return this.$store.state.csrf;
		},
		errorInfoEmail() {
			let infoEmail = "";
			if (!this.errorEmail) {
				infoEmail = "*Wpisz email";
			}
			if (this.userData.email == "") {
				infoEmail = "";
			}
			return infoEmail;
		},
		errorInfoPassword() {
			let infoPassword = "";
			if (!this.errorPassword) {
				infoPassword = "*Hasło musi mieć minimum 8 znaków";
			}
			if (this.userData.password == "") {
				infoPassword = "";
			}
			return infoPassword;
		},
		errorInfoPasswordConfirm() {
			let errorInfoPasswordConfirm = "";
			if (this.userData.password != this.userData.passwordConfirm) {
				errorInfoPasswordConfirm = "*Powtórz hasło";
			}
			if (this.userData.passwordConfirm == "") {
				errorInfoPasswordConfirm = "";
			}
			return errorInfoPasswordConfirm;
		}
	},
	created() {
		this.contentActive = true;
		document.body.classList.remove("galeryBackground");
		document.body.classList.remove("overflowAuto");
	}
};
</script>