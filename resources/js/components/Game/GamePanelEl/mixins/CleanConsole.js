export const cleanConsole = {
  methods: {
    cleanConsole() {
      this.uploadedPlaceElementsList = [];
      this.lastCommends = [];
      this.lastCommendId = -1;
      Array.prototype.forEach.call(
        document.querySelectorAll(".consoleCommend"),
        function (node) {
          node.parentNode.removeChild(node);
        }
      );
    },

  },
}
export const showLastCommend = {

  methods: {
    showLastCommend(x) {
      if (x == 1 && this.lastCommends.length - 1 > this.lastCommendId) {
        this.lastCommendId++;
        this.thisCommend = this.lastCommends[this.lastCommendId];
      } else if (x == 0 && this.lastCommendId > 0) {
        this.lastCommendId--;
        this.thisCommend = this.lastCommends[this.lastCommendId];
      } else {
        this.thisCommend = "";
        this.lastCommendId = -1;
      }
    },
  }
}

import { mapState } from "vuex";
export const dataConsole = {
  data: function () {
    return {
      thisCommend: "",
      lastCommends: [],
      lastCommendId: -1,
    }
  },

  computed: mapState(["currentCommend"]),
  watch: {
    thisCommend: function () {
      this.$store.commit("setCurrentCommend", this.thisCommend);
    }
  },
}
export const submitCommend = {

  methods: {
    submitCommend(typeNavigation) {
      // write commend
      let div = document.createElement("div");
      let list = document.querySelector(".uploadedPlaceElementsList");
      div.classList.add("consoleCommend");
      div.textContent = this.currentCommend;
      if (list) {
        list.appendChild(div);
      }
      // save commend
      this.lastCommends.unshift(this.currentCommend);
      this.thisCommend = "";
      // auto scroll
      setTimeout(() => {
        document.querySelector(
          ".screenGame"
        ).scrollTop = document.querySelector(".screenGame").scrollHeight;
      }, 0);

      // check commend
      this.navigationCommend(typeNavigation);
      this.lastCommendId = -1;
    },
  }
}

export const checkBorders = {
  methods: {
    checkBorders(x, y) {
      let xNav = parseInt(x);
      let yNav = parseInt(y);
      let left = this.mapNavigation[yNav][xNav - 1];
      let right = this.mapNavigation[yNav][xNav + 1];
      let top;
      let bottom;
      if (this.mapNavigation[yNav + 1]) {
        top = this.mapNavigation[yNav + 1][xNav];
      } else {
        top = undefined;
      }
      if (this.mapNavigation[yNav - 1]) {
        bottom = this.mapNavigation[yNav - 1][xNav];
      } else {
        bottom = undefined;
      }
      return { left, right, top, bottom };
    },
  },
}
export default [
  cleanConsole,
  showLastCommend,
  submitCommend,
  dataConsole,
]
// === that use ctrl + key === //
