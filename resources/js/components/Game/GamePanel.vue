<template>
	<div class="GamePage">
		<div class="GameScreenWrapper">
			<div class="screenGame">
				<!-- GAME -->
				<game-menu v-if="menu == 'menu'"></game-menu>
				<game-play v-if="menu == 'gra'"></game-play>
				<game-edytor v-if="menu == 'edytor'"></game-edytor>
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