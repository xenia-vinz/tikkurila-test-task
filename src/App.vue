<template>
  <div
    id="app"
    class="wrapper">

    <Header />

    <main
      class="main">
      <div class="main__inner">
        <SearchPanel />
        <Painters />
      </div>
    </main>

    <Footer />

  </div>
</template>

<script>
import Header from './components/Header.vue';
import SearchPanel from './components/SearchPanel.vue';
import Painters from './components/Painters.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    SearchPanel,
    Painters,
    Footer,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>

<style lang="scss">
  @import '@/scss/_utils.scss';
  @import '@/scss/_base.scss';
  .main {
    &__inner {
    }
  }
</style>
