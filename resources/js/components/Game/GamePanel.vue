<template>
	<div class="GamePage">
		<div class="GameScreenWrapper">
			<div class="screenGame">
				<!-- GAME -->
				<game-menu v-if="menu"></game-menu>
				<game-play v-if="!menu"></game-play>
				<!-- MENU -->
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	computed: mapState(["menu"]),
	data: function() {
		return {};
	}
};
</script>