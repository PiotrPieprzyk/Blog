<template>
	<div class="GraphicProfile">
		<div class="graphicTitle">GRAPHIC</div>
		<div class="addGraphicButton">
			<form class="formNewGraphic" method="POST" action="/graphics" enctype="multipart/form-data">
				<input type="hidden" name="_token" :value="csrf" />
				<input type="file" name="graphic" ref="file" @change="processFile($event)" />
				<div class="submitWraper">
					<button @click="sendPhoto" class="submitForm" style>PRESS</button>
				</div>
			</form>
			<div class="plusItem">
				<div class="singleBar"></div>
				<div class="singleBar"></div>
			</div>
		</div>
		<div class="yourGraphicListWrapper"></div>
	</div>
</template>
<script>
import { mapState } from "vuex";
import { request } from "http";

export default {
	computed: {
		jsAnimation() {
			return this.$store.state.jsAnimation;
		},
		csrf() {
			return this.$store.state.csrf;
		},
		authCheck() {
			return this.$store.state.authCheck;
		}
	},
	data() {
		return {
			graphic: ""
		};
	},
	methods: {
		sendPhoto(e) {
			e.preventDefault();
			let objThis = this;
			console.log([this.graphic, this.authCheck.id]);
			let formData = new FormData();

			formData.append("file", this.graphic);
			formData.append("id", this.authCheck.id);
			axios
				.post("/graphics", formData, {
					headers: {
						"Content-Type": "multipart/form-data"
					}
				})
				.then(request => {
					console.log(request);
				})
				.catch(function() {
					console.log("FAILURE!!");
				});
		},
		processFile(event) {
			console.log("work");
			this.graphic = this.$refs.file.files[0];
		}
	},
	beforeMount() {
		console.log("hey im Graphic BEFORE MOUTED");
	},
	mounted() {
		console.log("hey im Graphic MOUTED");
		axios
			.get("/graphics")
			.then(request => {
				console.log(request.data);
			})
			.catch(function() {
				console.log("FAILURE!!");
			});
	},

	beforeRouteLeave(to, from, next) {
		console.log("działa true");
		document.getElementById(1).classList.remove("activeProfilePage");
		// Wracanie do listy profil

		next();
	}
};
</script>