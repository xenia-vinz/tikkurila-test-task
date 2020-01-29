<template>
  <div class="painters">
    <div class="painters__inner width-wrapper">

      <transition-group name="painters-transition" tag="div">
        <Painter
          v-for="item in displayedPainters"
          v-bind:key="item.guid"
          :painter="item"
        ></Painter>
      </transition-group>

    </div>
  </div>
</template>

<script>
import Painter from './Painter.vue';

export default {
  name: 'Painters',
  components: {
    Painter,
  },
  props: {
  },
  data() {
    return {
    };
  },
  computed: {
    displayedPainters() {
      return this.$store.getters['painters/getData'];
    },
  },
  mounted() {
    this.$store.dispatch('painters/loadData');
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
  @import '@/scss/_utils.scss';
  .painters {
    &__inner {
    }
  }
    .painters-transition-move {
      transition: transform .3s;
    }
</style>
