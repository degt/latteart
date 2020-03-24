<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-content>
      <v-row class="main-row" justify="center" align="center">
        <v-col>
          <div>
            <Art
              v-if="randomNumber !== null"
              :author="current.author"
              :image="current.image"
              :url="current.url"
              :loading="loading"
            />
            <div class="mx-auto mt-4" style="max-width: 300px">
              <v-btn
                block
                rounded
                depressed
                @click.stop.prevent="randomize"
                color="primary"
              >Randomize</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Art from "./components/Art";
import latteart from "./latteart";

export default {
  name: "App",

  components: {
    Art
  },

  data() {
    return {
      randomNumber: null,
      loading: false
    };
  },

  mounted() {
    // this.randomize();
  },

  methods: {
    async randomize() {
      const max = latteart.length;
      this.loading = true;

      await setTimeout(() => {
        this.randomNumber = Math.floor(Math.random() * Math.floor(max));
        this.loading = false;
      }, 1000);
    }
  },

  watch: {
    randomNumber(newValue, oldValue) {
      if (newValue === oldValue) {
        this.randomize();
      }
    }
  },

  computed: {
    current() {
      if (this.randomNumber == null) {
        return {};
      }

      return latteart[this.randomNumber];
    },
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>

<style lang="scss">
.main-row {
  min-height: 100vh;
}
</style>
