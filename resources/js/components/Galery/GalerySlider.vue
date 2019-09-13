<template>
	<transition name="modal">
		<div class="GalerySliderWrapper">
			<div class="modal-container">
				<img :style="'background-image: url(./images/galery/'+GaleryImgSlot+');'" />
			</div>
		</div>
	</transition>
</template>
<script>
export default {
	props: ["GaleryImgSlot"]
};
</script>