<template>
  <header class="header">
    <div class="header__inner">

      <div class="header-top">
        <div class="header-top__inner width-wrapper">

          <div class="logo">
            <a href="/" class="logo__link">
              Tikkurila
            </a>
          </div>

          <div class="slogan">
            <div class="slogan__text">
              Tekijätpankki
            </div>
          </div>

        </div>
      </div>

      <nav class="main-menu">
        <div class="main-menu__inner width-wrapper">

          <div class="main-menu__item">
            <a href="/" class="main-menu__link main-menu__link--home">Home</a>
          </div>
          <div class="main-menu__item">
            <a href="/painters" class="main-menu__link main-menu__link">Tekijät</a>
          </div>
          <div class="main-menu__item">
            <a href="/about" class="main-menu__link main-menu__link">Tietoa palvelusta</a>
          </div>
          <div class="main-menu__item main-menu__item--btn">
            <a href="/about" class="main-menu__link request-btn">
              <span class="request-btn__text">Pyydä tarjous</span>
              <span class="request-btn__counter">(0)</span>
            </a>
          </div>

        </div>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
};
</script>

<style scoped lang="scss">
  @import '@/scss/_utils.scss';
  .header {
    &__inner {
    }
  }
</style>
