<template>
	<div class="startWebWrapperPaginationContent">
		<pagination-item v-for="image in backgroundImages " v-bind:key="image.id" :keyImg="image.id"></pagination-item>
	</div>
</template>
<script>
export default {
	props: ["backgroundImages"]
};
</script>