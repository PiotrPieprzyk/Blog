export const navigationCommendGame = {
  methods: {
    navigationCommend() {
      let commend = this.currentCommend.toLowerCase();
      let borders = this.checkBorders(
        this.currentNavigation.x,
        this.currentNavigation.y
      );
      switch (commend) {
        case "lewo":
          if (borders.left) {
            this.currentNavigation.x--;
            this.getCurrentPlace(
              this.currentNavigation.x,
              this.currentNavigation.y
            );
          }
          break;
        case "prawo":
          if (borders.right) {
            this.currentNavigation.x++;
            this.getCurrentPlace(
              this.currentNavigation.x,
              this.currentNavigation.y
            );
          }
          break;
        case "góra":
          if (borders.top) {
            this.currentNavigation.y++;
            this.getCurrentPlace(
              this.currentNavigation.x,
              this.currentNavigation.y
            );
          }
          break;
        case "dół":
          if (borders.bottom) {
            this.currentNavigation.y--;
            this.getCurrentPlace(
              this.currentNavigation.x,
              this.currentNavigation.y
            );
          }
          break;
        case "menu":
          this.cleanConsole();
          this.$store.commit("setMenu", "menu");

          break;
      }
    }
  }
}
export const navigationCommendMenu = {
  methods: {
    navigationCommend() {
      let commend = this.currentCommend.toLowerCase();

      switch (commend) {
        case "gra":
          this.cleanConsole();
          this.$store.commit("setMenu", "gra");

          break;
        case "edytor":
          this.cleanConsole();
          this.$store.commit("setMenu", "edytor");

          break;
      }
    }
  }
}