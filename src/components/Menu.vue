<template>
  <div
    :class="{'main-menu--open': isOpen}"
    class="main-menu">

    <nav class="main-menu__items">
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
        <button class="main-menu__link request-counter-btn" disabled>
          <span class="request-counter-btn__text">Pyydä tarjous</span>
          <span class="request-counter-btn__counter">0</span>
        </button>
      </div>
    </nav>

    <button class="main-menu-trigger">
      <span
        @click="toggleMenu"
        class="main-menu-trigger__icon">
      </span>
    </button>

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

    @include breakpoint($desktop) {
      display: block;
      padding: 17px 0;
      min-height: 0;
    }

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

      overflow: hidden;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform .3s linear;

      .main-menu--open & {
        transform: scaleY(1);
      }

      @include breakpoint($desktop) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 0;
        left: 0;
        width: auto;
        max-width: $layout_max_width;
        margin: 0 auto;
        padding: 0 14px;
        background: transparent;
        transform: none;
      }
    }
      &__item {
        border-bottom: 1px solid $c_menu_bg;
        &:last-child {
          border-bottom: 0;
        }
        @include breakpoint($desktop) {
          border: 0;
        }

        &--home {
          display: none;
          @include breakpoint($desktop) {
            display: block;
            margin-left: calc(1/6 * 100%);
          }
        }
        &--btn {
          @include breakpoint($desktop) {
            margin-left: auto;
            padding: 0 0 0 14px;
          }
        }
      }
        &__link {
          display: block;
          padding: 14px;
          font-size: 1.5rem;
          color: $c_white;
          &:hover {
            text-decoration: none;
            background: $c_brown_light;
          }
          @include breakpoint($desktop) {
            text-transform: uppercase;
            font-size: 1.3rem;
          }
          // Specifics
            .main-menu__item--home & {
              display: block;
              font-size: 0;
              &:before {
                content: '';
                display: block;
                width: 18px;
                height: 18px;
                @include bg();
                background-image: url('../assets/home-white.svg');
              }
            }
        }
  }
    .main-menu-trigger {
      @include breakpoint($desktop) {
        display: none;
      }

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
    @include breakpoint($desktop) {
      @include btn();
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $c_white;
    }
    &__text {
      @include breakpoint($desktop) {
        display: block;
      }
    }
    &__counter {
      display: none;
      @include breakpoint($desktop) {
        display: block;
        margin: 0 0 0 5px;
        .request-counter-btn[disabled] & {
          display: none;
        }
      }
    }
  }
</style>
