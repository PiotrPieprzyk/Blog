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
export const navigationCommendEdytor = {
  methods: {
    navigationCommend() {
      let commend = this.currentCommend.toLowerCase();

      switch (commend) {
        case "gra":
          this.cleanConsole();
          this.$store.commit("setMenu", "gra");

          break;
        case "menu":
          this.cleanConsole();
          this.$store.commit("setMenu", "menu");

          break;
      }
      if (commend) {
        console.log(commend);

        if (commend.slice(0, 4) == "newp") {
          let comArguments = commend.split(" ");
          if (comArguments.length == 6) {
            let xCoOrdinate = comArguments[1];
            let yCoOrdinate = comArguments[2];
            let locationTemp = comArguments[3];
            let worldName = comArguments[4];
            let nameTemp = comArguments[5];
            console.log("  xCoOrdinate: " + xCoOrdinate, "  yCoOrdinate: " + yCoOrdinate, "  locationTemp: " + locationTemp, "  worldName: " + worldName, 'nameTemp ' + nameTemp)

            this.mapPlace[yCoOrdinate + "_" + xCoOrdinate] = {
              name: nameTemp,
              description: "none",
              x: xCoOrdinate,
              y: yCoOrdinate,
              location: locationTemp,
              world: worldName
            }

            console.log(this.mapNavigation[yCoOrdinate]);
            if (!this.mapNavigation[yCoOrdinate]) {

              this.mapNavigation[yCoOrdinate] = {};
              console.log(this.mapNavigation[yCoOrdinate]);
              this.mapNavigation[yCoOrdinate][xCoOrdinate] = nameTemp;
              console.log(this.mapNavigation);

              console.log("DZIAŁA");
              this.sortingMapY();
              this.sortedMapY.forEach(element => {
                this.sortingMapX(element);
              });

              this.checkMinMaxValueX();
              this.checkMinMaxValueY();
            } else {
              console.log(this.mapNavigation[yCoOrdinate]);
              this.mapNavigation[yCoOrdinate][xCoOrdinate] = nameTemp;
              console.log(this.mapNavigation);

              console.log("DZIAŁA");
              this.sortingMapY();
              this.sortedMapY.forEach(element => {
                this.sortingMapX(element);
              });

              this.checkMinMaxValueX();
              this.checkMinMaxValueY();
            }

          }

        }
      }
    }
  }
}