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
		<div class="yourGraphicListWrapper">
			<galery-slider
				v-if="OnSlider"
				@close="OnSlider = false"
				@previous="activeGaleryId--"
				@next="activeGaleryId++"
				:activeGaleryItem="activeGaleryId"
				:listGraphicsProp="listGraphics"
			></galery-slider>
			<div class="GaleryGraphicWrapper">
				<div
					v-for="(item, index) in listGraphics"
					:key="index"
					:class="'Graphic'+index"
					class="GraphicWrapper"
				>
					<button slot="GaleryImage" class="GraphicButton" @click="showSlider(index)">
						<img :style="'background-image: url(./storage/graphicNew/'+item.path+');'" />
					</button>
				</div>
			</div>
		</div>
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
			graphic: "",
			userId: this.$router.history.current.params.id,
			listGraphics: "",
			OnSlider: false,
			activeGaleryId: ""
		};
	},
	methods: {
		showSlider(id) {
			this.activeGaleryId = id;
			this.OnSlider = true;
		},
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
					axios
						.get("/graphics/" + this.userId)
						.then(request => {
							console.log(request.data);
							this.listGraphics = request.data;
						})
						.catch(function() {
							console.log("FAILURE!!");
						});
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
	mounted() {
		console.log(this.userId);
		axios
			.get("/graphics/" + this.userId)
			.then(request => {
				console.log(request.data);
				this.listGraphics = request.data;
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