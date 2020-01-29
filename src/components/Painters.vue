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
      let filtered = this.$store.getters['painters/getData'] || [];

      if (this.selectedTags) {
        filtered = filtered.filter(painter => this.checkTags(painter.tags));
      }
      if (this.currentSorting) {
        const order = this.currentSorting !== 'name' ? 'desc' : 'acs';
        filtered = this.$_.orderBy(
          filtered,
          item => this.tryNumericString(item[this.currentSorting]),
          [order],
        );
      }
      return filtered;
    },
    currentSorting: {
      get() {
        return this.$store.getters['sortings/getCurrent'];
      },
    },
    selectedTags: {
      get() {
        return this.$store.getters['tags/getSelected'];
      },
    },
  },
  mounted() {
    this.$store.dispatch('painters/loadData');
  },
  methods: {
    checkTags(tags) {
      const itemTags = tags.map(tag => tag.slug);
      const intersection = this.$_.intersection(itemTags, this.selectedTags);
      const isVisible = this.selectedTags.length ? (intersection.length > 0) : true;
      return isVisible;
    },
    tryNumericString(value) {
      return (+value || value === '0') ? parseInt(value, 10) : value;
    },
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
