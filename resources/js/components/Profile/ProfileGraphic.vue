<template>
	<div class="GraphicProfile" @click.self="showImageMenu(-1)">
		<!-- Modal -->
		<transition name="opacity">
			<galery-slider
				v-if="OnSlider"
				@close="closeSlider()"
				@previous="activeMinus()"
				@next="activePlus()"
				:activeGaleryItem="activeGaleryId"
				:listGraphicsProp="listGraphics"
				:graphicID="idGraphic"
			></galery-slider>
		</transition>

		<div class="graphicTitle">GRAPHIC</div>
		<div class="addGraphicButton">
			<form class="formNewGraphic" method="POST" action="/graphics" enctype="multipart/form-data">
				<input v-if="addButtonActive" type="hidden" name="_token" :value="csrf" />
				<input
					v-if="addButtonActive"
					type="file"
					name="graphic"
					ref="file"
					id="file"
					@change="processFile($event)"
					class="inputfile"
					multiple
				/>
				<label for="file">{{ fileName }}</label>
				<div v-if="addButtonActive" class="submitWraper">
					<button @click="sendPhoto" class="submitForm">
						<img :src="image_src" />
					</button>
				</div>
			</form>

			<div class="plusItem" @click="activeAddButton()">
				<div class="singleBar"></div>
				<div class="singleBar"></div>
			</div>
		</div>
		<div class="errors">
			<p v-if="addButtonActive" class="errorFile">{{ errorFile }}</p>
		</div>

		<div class="yourGraphicListWrapper">
			<div class="GaleryGraphicWrapper" @click.self="showImageMenu(-1)">
				<div
					v-for="(item, index) in listGraphics"
					:key="index"
					:class="'Graphic'+index"
					class="GraphicWrapper"
				>
					<button
						:disabled="activeMenuImage==index"
						slot="GaleryImage"
						class="GraphicButton"
						@mouseover="showImageMenu(index)"
					>
						<img :style="'background-image: url(./storage/graphicNew/'+item.path+');'" />
						<div class="imageMenu" v-if="activeMenuImage==index">
							<div class="closeWrapper"></div>
							<div class="viewButton">
								<button @click="showSlider(index, listGraphics[index].id)" style="color: white">View</button>
							</div>
							<div class="deleteButton">
								<button @click.once="deleteImage(item.id)" style="color: white">Delete</button>
							</div>
						</div>
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
		},
		animationStatus() {
			return this.$store.state.animationStatus;
		}
	},
	data() {
		return {
			graphic: "",
			fileName: "Choose a file",
			userId: this.$router.history.current.params.id,
			listGraphics: "",
			OnSlider: false,
			activeGaleryId: "",
			addButtonActive: false,
			errorFile: "",
			image_src: "./images/header/send-icon.svg",
			activeMenuImage: -1,
			idGraphic: ""
		};
	},
	methods: {
		showSlider(id, graphic_id) {
			this.activeGaleryId = id;
			this.OnSlider = true;
			document.body.classList.remove("overflowAuto");
			this.idGraphic = graphic_id;
			console.log(this.listGraphics);
		},
		showImageMenu(id, e) {
			if (id == -1) {
				setTimeout(() => {
					this.activeMenuImage = id;
				}, 20);
			} else {
				setTimeout(() => {
					this.activeMenuImage = id;
					console.log(this.activeMenuImage);
				}, 20);
			}
		},
		activeMinus() {
			this.activeGaleryId--;
			this.idGraphic = this.listGraphics[this.activeGaleryId].id;
		},
		activePlus() {
			this.activeGaleryId++;
			this.idGraphic = this.listGraphics[this.activeGaleryId].id;
		},
		closeSlider() {
			this.OnSlider = false;
			document.body.classList.add("overflowAuto");
		},
		deleteImage(id) {
			axios.delete(`/graphics/${id}`).then(request => {
				axios
					.get("/graphics/" + this.userId)
					.then(request => {
						console.log(request.data);
						this.listGraphics = request.data;
						this.activeMenuImage = -1;
					})
					.catch(function() {
						console.log("FAILURE!!");
					});
			});
		},
		// Upload Graphics
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
					this.errorFile = "Wysłano!";
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
				.catch(error => {
					if (error.response.status == 422) {
						this.errorFile = error.response.data.errors.file[0];
					}
				})
				.then(() => {
					let errorhook = document.querySelector(".errors");
					if (window.getComputedStyle(errorhook).top == "-33px") {
						if (this.errorFile != "Wysłano!") {
							errorhook.style.color = "red";
							this.jsAnimation.errorAppear(errorhook);
							console.log("NO");
						}
						if (this.errorFile == "Wysłano!") {
							errorhook.style.color = "green";

							this.jsAnimation.errorAppear(errorhook);
							setTimeout(() => {
								console.log("YES");
								this.jsAnimation.errorDisappear(errorhook);
							}, 2000);
						}
					} else {
						if (this.errorFile == "Wysłano!") {
							errorhook.style.color = "green";
							if (!this.animationStatus) {
								this.$store.commit("changeAnimationStatus", true);
								setTimeout(() => {
									console.log("YES");
									this.jsAnimation.errorDisappear(errorhook);
									this.$store.commit("changeAnimationStatus", false);
								}, 1000);
							}
						}
					}
				});
		},
		processFile(event) {
			console.log("work");
			this.graphic = this.$refs.file.files[0];
			this.fileName = this.graphic.name;
			console.log(this.graphic);
		},

		// Animation
		activeAddButton() {
			let element = document.querySelector(".addGraphicButton");
			let errorhook = document.querySelector(".errors");

			if (this.addButtonActive == false) {
				let it = this;
				this.jsAnimation.scale_widthUP(it);
				this.jsAnimation.spin_the_crossUP();
				this.jsAnimation.activeShadowBlock(element);
			} else {
				let it = this;
				this.jsAnimation.scale_widthDown(it);
				this.jsAnimation.spin_the_crossDown();
				this.jsAnimation.deActiveShadowBlock(element);
				if (window.getComputedStyle(errorhook).top != "-33px") {
					console.log(document.querySelector(".errors"));
					this.jsAnimation.errorDisappear(errorhook);
				}
			}
		}
	},
	mounted() {
		document.body.classList.add("overflowAuto");
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
		// Wracanie do listy profil

		next();
	}
};
</script>