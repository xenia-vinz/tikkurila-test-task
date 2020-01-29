<template>
  <div
    class="painter">
    <div class="painter__inner">

      <div class="painter-avatar">
        <img
          class="painter-avatar__image"
          :src="painter.avatar"
          :alt="painter.name"
        />
      </div>

      <div class="painter-data">

        <div class="painter-data__item painter-data__item--full-width">
          <div class="painter-name">
            <a
              class="painter-name__link"
              :href="painter.url">
              {{ painter.name }}
            </a>
          </div>
        </div>
        <div class="painter-data__item painter-data__item--full-width">
          <div class="painter-property painter-property--location">
            <span
              class="painter-property__label">
              {{ painter.location }}
            </span>
          </div>
        </div>
        <div class="painter-data__item">
          <div class="painter-property painter-property--phone">
            <a
              class="painter-property__label painter-property__label--link"
              :href="`tel:${painter.phone}`">{{ painter.phone }}
            </a>
          </div>
        </div>
        <div class="painter-data__item">
          <div class="painter-property painter-property--email">
            <a
              class="painter-property__label painter-property__label--link"
              :href="`mailto:${painter.email}`">{{ painter.email }}
            </a>
          </div>
        </div>
        <div class="painter-data__item painter-data__item--full-width">
          <div
            class="painter-description"
            v-html="painter.descripton">
          </div>
        </div>
        <div class="painter-data__item painter-data__item--full-width">
          <ul class="painter-tags">
            <li
              v-for="(tag, index) in painter.tags"
              :key="`painter-${painter.guid}-tag-${index}`"
              class="painter-tags__item">
                {{ tag.title }}
            </li>
          </ul>
        </div>
      </div>

      <div class="painter-actions">
        <button class="painter-actions__btn request-btn">
          <span class="request-btn__text">Pyydä tarjous!</span>
        </button>
        <div class="painter-projects-counter">
          <span class="painter-projects-counter__icon" title="Projektien määrä"></span>
          <div class="painter-projects-counter__text">{{ painter.projects }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'painter',
  props: [
    'painter',
  ],
};
</script>

<style scoped lang="scss">
  @import '@/scss/_utils.scss';
  .painter {
    padding: 18px 0;
    border-top: 1px solid $c_gray_light3;

    &:first-child {
      border-top: 0;
    }
    &__inner {
      @include breakpoint($desktop) {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
    }
  }
    .painter-avatar {
      max-width: 50%;
      @include breakpoint($desktop) {
        flex-basis: calc(1/6 * 100%);
        max-width: 100%;
        padding: 0 20px 0 0;
      }
      &__image {
        max-width: 100%;
      }
    }
    .painter-data {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      @include breakpoint($desktop) {
        flex-basis: calc(2/3 * 100%);
      }
      &__item {
        margin: 2px 29px 2px 0;
        &--full-width {
          width: 100%;
          margin: 2px 0;
        }

        @include breakpoint($desktop) {
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
      .painter-name {
        margin: 0 0 5px;
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: .02rem;
        &__link {
        }
      }
      .painter-property {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: $c_text;

        // Icons
          &:before {
            content: '';
            display: none;
            @include bg();
            width: 18px;
            height: 18px;
            margin: 0 5px 0 0;
          }

        // Label
          &__label {
            padding: 3px 0 0;
            &--link {
            }
          }

        // Specifics
          &--location {
            font-size: 1.2rem;
            text-transform: uppercase;
            &:before {
              display: block;
              background-image: url('../assets/pin.svg');
            }
          }
          &--phone {
            &:before {
              display: block;
              background-image: url('../assets/phone.svg');
            }
          }
          &--email {
            &:before {
              display: block;
              background-image: url('../assets/mail.svg');
            }
          }
      }
      .painter-description {
        margin: 5px 0 0;
        font-size: 1.3rem;
        font-weight: 200;
        line-height: 1.5;
      }
      .painter-tags {
        display: block;
        font-size: 1.15rem;
        font-weight: 700;
        &__item {
          display: inline;
          &:before {
            content: ' •';
          }
          &:first-child {
            &:before {
              display: none;
            }
          }
        }
      }
    .painter-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0 0;
      padding: 15px 0;
      border-top: 1px dotted $c_gray2;
      @include breakpoint($desktop) {
        flex-basis: calc(1/6 * 100%);
        justify-content: flex-start;
        flex-direction: column;
        margin: 0;
        padding: 0 0 0 20px;
        border-top: 0;
      }
      &__btn {
        order: 2;
        @include breakpoint($desktop) {
          order: 1;
        }
      }
    }
      .request-btn {
        @include btn();
        position: relative;
        flex-basis: 50%;
        @include breakpoint($desktop) {
          flex-basis: 100%;
          width: 100%;
          padding-left: 15px;
          padding-right: 15px;
        }

        &--selected {
          background-color: $c_green;
        }
        &__text {
          &:before {
            content: '';
            display: none;
            vertical-align: middle;
            width: 16px;
            height: 16px;
            margin: 0 6px 0 0;
            @include bg();
            background-image: url('../assets/check-white.svg');
          }
          .request-btn--selected &:before {
            display: inline-block;
          }
        }
      }
      .painter-projects-counter {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 80px;
        order: 1;
        @include breakpoint($desktop) {
          order: 2;
          flex-direction: column;
        }

        &__icon {
          display: block;
          width: 18px;
          height: 18px;
          @include bg();
          background-image: url('../assets/house.svg');
          margin: 0 5px 0 0;
          @include breakpoint($desktop) {
            margin: 0 0 5px;
          }
        }
        &__text {
          padding: 3px 0 0;
          text-align: center;
        }
      }
</style>
