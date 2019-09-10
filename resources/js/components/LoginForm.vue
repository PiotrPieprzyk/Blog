<template>
	<form class="formLogin" method="POST" action="/login">
		<input type="hidden" name="_token" :value="csrf" />
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

		<button type="submit" class="submitForm">
			<img :src="image_src" />
		</button>
	</form>
</template>
<script>
export default {
	data() {
		return {
			image_src: "./images/header/send-icon.svg",
			userData: {
				email: "",
				password: "",
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
