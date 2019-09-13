<template>
	<div class="GaleryPage">
		<div class="GaleryTitleWrapper">
			<div class="GaleryTitle">OurGalery</div>
		</div>
		<div class="GaleryGraphicWrapper">
			<div class="GraphicWrapper"></div>
		</div>
	</div>
</template>
<script>
export default {
	props: ["overflowType"],
	mounted() {
		document.body.classList.add("overflowAuto");
	}
};
</script>
<style >
</style>