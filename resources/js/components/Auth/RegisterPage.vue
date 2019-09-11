<template>
	<div class="registerWeb">
		<transition name="opacity" appear>
			<div class="registerCard">
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
						<p>{{ errorEmail? "":"Zły email" }}</p>
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
						<p>{{ errorEmail? "":"Zły email" }}</p>
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
						<p>{{ errorEmail? "":"Zły email" }}</p>
						<div class="formGroup">
							<input
								type="passwordConfirm"
								class="formInput"
								name="passwordConfirm"
								id="passwordConfirm"
								placeholder="passwordConfirm"
								v-model="userData.passwordConfirm"
							/>
						</div>
						<p>{{ errorEmail? "":"Zły email" }}</p>

						<div class="submitWraper">
							<button type="submit" class="submitForm">
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
				csrf: ""
			}
		};
	},
	computed: {
		errorEmail() {
			let thisIsEmail = email => {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(email).toLowerCase());
			};
			let empty = email => {
				return email == "" ? true : false;
			};
			if (empty(this.userData.email) || thisIsEmail(this.userData.email)) {
				return true;
			} else {
				return false;
			}
		},
		csrf() {
			return this.$store.state.csrf;
		}
	}
};
</script>