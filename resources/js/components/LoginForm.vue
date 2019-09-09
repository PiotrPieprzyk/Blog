<template>
	<form class="formLogin">
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
				password: ""
			}
		};
	}
};
</script>
