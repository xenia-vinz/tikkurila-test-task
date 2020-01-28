<template>
  <header class="header">
    <div class="header__inner">

      <div class="header-top">
        <div class="header-top__inner width-wrapper">

          <div class="header-logo">
            <a
              class="header-logo__link"
              href="/">
              Tikkurila
            </a>
          </div>

          <div class="header-slogan">
            <div class="header-slogan__text">
              Tekijätpankki
            </div>
          </div>

        </div>
      </div>

      <Menu />

    </div>
  </header>
</template>

<script>
import Menu from './Menu.vue';

export default {
  name: 'Header',
  props: {
  },
  components: {
    Menu,
  },
};
</script>

<style scoped lang="scss">
  @import '@/scss/_utils.scss';
  .header {
    position: relative;
    z-index: 9900;
    &__inner {
      padding-left: 0;
    }
  }
    .header-top {
      background: $c_header_bg;
      background: $c_header_bg_gradient;

      &__inner {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        min-height: 64px;
        padding: 0 0 0 64px;
        @include breakpoint($desktop) {
          position: relative;
        }
      }
    }
      .header-logo {
        position: absolute;
        top: 5px;
        left: 5px;
        width: 54px;
        z-index: 9905;

        @include breakpoint($desktop) {
          top: 0;
          left: 0;
          width: 100px;
        }

        &__link {
          display: block;
          width: 100%;
          font-size: 0;
          @include padding-hack(100%);
          @include bg();
          background-image: url('../assets/logo.svg');

          @include breakpoint($desktop) {
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
      .header-slogan {
        padding: 0 20px 0 55px;

        &__text {
          padding: 0.35rem 0 0;
          font-size: 1.7rem;
          font-weight: 700;
          color: $c_accent;
          text-transform: uppercase;
        }
      }
</style>
