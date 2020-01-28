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
      painters: [
        {
          guid: 'aaa',
          url: '/company/aaa',
          name: 'Painter Name1',
          avatar: '/images/painter-1.jpg',
          location: 'Vantaa',
          phone: '050 000 1122',
          email: 'painter@gmail.com',
          descripton: '<p>Artisania on sisustusmaalaukseen, tapetointiin, erikois –ja efektimaalaukseen erikoistunut yritys.</p>',
          projects: '11',
          feedbacks: '1',
          tags: [
            {
              slug: 'wooden-facades',
              title: 'Puujulkisivut',
            },
            {
              slug: 'equalization',
              title: 'Tasoitustyöt',
            },
            {
              slug: 'effect',
              title: 'Efektimaalaus',
            },
            {
              slug: 'interior',
              title: 'Sisämaalaukset',
            },
            {
              slug: 'flooring',
              title: 'Lattiat',
            },
            {
              slug: 'doors',
              title: 'Ovet ikkunat ja kalusteet',
            },
          ],
        },
        {
          guid: 'a1a',
          url: '/company/bbb',
          name: 'Painter Name2',
          avatar: '/images/painter-2.jpg',
          location: 'Vantaa',
          phone: '050 000 1122',
          email: 'painter@gmail.com',
          descripton: '<p>Artisania on sisustusmaalaukseen, tapetointiin, erikois –ja efektimaalaukseen erikoistunut yritys.</p>',
          projects: '0',
          feedbacks: '12',
          tags: [
            {
              slug: 'wooden-facades',
              title: 'Puujulkisivut',
            },
            {
              slug: 'equalization',
              title: 'Tasoitustyöt',
            },
          ],
        },
      ],
    };
  },
  computed: {
    displayedPainters() {
      let filtered = this.painters;

      if (this.selectedTags) {
        filtered = filtered.filter(painter => this.checkTags(painter.tags));
      }
      if (this.currentSorting) {
        filtered = this.$_.orderBy(filtered, this.currentSorting, 'desc');
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
  created() {
    this.$store.subscribe((mutation) => {
      switch (mutation.type) {
        case 'sortings/SET_CURRENT':
          // console.log('sortings/SET_CURRENT', mutation.payload);
          break;
        case 'tags/SET_SELECTED':
          // console.log('tags/SET_SELECTED', this.$store.getters['tags/getSelected']);
          break;
        default:
          // do nothing
          break;
      }
    });
  },
  methods: {
    checkTags(tags) {
      const itemTags = tags.map(tag => tag.slug);
      const intersection = this.$_.intersection(itemTags, this.selectedTags);
      const isVisible = this.selectedTags.length ? (intersection.length > 0) : true;
      return isVisible;
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
