<template>
  <div class="painters">
    <div class="painters__inner width-wrapper">

      <Painter />

      <Painter
        v-for="item in painters"
        v-bind:key="item.id"
        v-bind:painter="item"
      ></Painter>


    </div>
  </div>
</template>

<script>
import Painter from './Painter.vue';

export default {
  name: 'Painters',
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
          descripton: 'Artisania on sisustusmaalaukseen, tapetointiin, erikois –ja efektimaalaukseen erikoistunut yritys.',
          projects: 11,
          tags: [
            'Puujulkisivut',
            'Tasoitustyöt',
            'Efektimaalaus',
            'Sisämaalaukset',
            'Lattiat',
            'Ovet ikkunat ja kalusteet',
          ],
        },
        {
          guid: 'a1a',
          url: '/company/bbb',
          name: 'Painter Name1',
          avatar: '/images/painter-2.jpg',
          location: 'Vantaa',
          phone: '050 000 1122',
          email: 'painter@gmail.com',
          descripton: 'Artisania on sisustusmaalaukseen, tapetointiin, erikois –ja efektimaalaukseen erikoistunut yritys.',
          projects: 0,
          tags: [
            'Puujulkisivut',
            'Tasoitustyöt',
            'Efektimaalaus',
            'Sisämaalaukset',
            'Lattiat',
            'Ovet ikkunat ja kalusteet',
          ],
        },
      ],
    };
  },
  components: {
    Painter,
  },
};
</script>

<style scoped lang="scss">
  @import '@/scss/_utils.scss';
  .painters {
    &__inner {
    }
  }
</style>
