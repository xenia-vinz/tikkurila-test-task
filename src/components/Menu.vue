<template>
  <div
    :class="{'main-menu--open': isOpen}"
    class="main-menu">

    <nav class="main-menu__items width-wrapper">
      <div class="main-menu__item main-menu__item--home">
        <a href="/" class="main-menu__link">Home</a>
      </div>
      <div class="main-menu__item">
        <a href="/painters" class="main-menu__link">Tekijät</a>
      </div>
      <div class="main-menu__item">
        <a href="/about" class="main-menu__link">Tietoa palvelusta</a>
      </div>
      <div class="main-menu__item main-menu__item--btn">
        <a href="/about" class="main-menu__link request-counter-btn">
          <span class="request-counter-btn__text">Pyydä tarjous</span>
          <span class="request-counter-btn__counter">(0)</span>
        </a>
      </div>
    </nav>

    <div class="main-menu-trigger">
      <div
        @click="toggleMenu"
        class="main-menu-trigger__icon">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped lang="scss">
  @import '@/scss/_utils.scss';
  .main-menu {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 25px;
    background: $c_menu_bg;
    min-height: 65px;
    &__items {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 100%;
      padding: 0;
      margin: 0;
      background: $c_menu_items_bg_mobile;

      max-height: 0;
      overflow: hidden;
      transition: max-height .5s linear;

      .main-menu--open & {
        max-height: 100vh;
        transition: max-height 1s linear;
      }

      @include breakpoint($desktop) {
        position: relative;
        top: 0;
        left: 0;
        width: auto;
      }
    }
      &__item {
        padding: 14px;
        border-bottom: 1px solid $c_menu_bg;
        &:last-child {
          border-bottom: 0;
        }
        &--home {
          display: none;
          @include breakpoint($desktop) {
            display: block;
          }
        }
      }
        &__link {
          font-size: 1.5rem;
          color: $c_white;
          &:hover {
            text-decoration: none;
          }
          // Specifics
            .main-menu__item--home & {
              font-size: 0;
              &:before {
                content: '';
                display: block;
              }
            }
        }
  }
    .main-menu-trigger {
      &__icon {
        display: block;
        width: 30px;
        height: 30px;
        font-size: 0;
        @include bg();
        background-image: url('../assets/menu-white.svg');
        cursor: pointer;
        transition: background .1s linear;

        .main-menu--open & {
          background-image: url('../assets/close-white.svg');
          transition: background .1s linear;
        }
      }
    }

  .request-counter-btn {
    &__text {

    }
    &__counter {
      display: none;
      @include breakpoint($desktop) {
        display: block;
      }
    }
  }
</style>
