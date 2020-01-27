<template>
  <div class="painter">
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
          <a
            class="painter-name"
            :href="painter.url">
            {{ painter.name }}
          </a>
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
              v-bind:key="`tag-${index}`"
              class="painter-tags-item">
                {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <div class="painter-actions">
        <div class="painter-actions__btn request-btn">
          <span class="request-counter-btn__icon"></span>
          <span class="request-counter-btn__text">Pyydä tarjous!</span>
        </div>
        <div class="painter-projects-counter">
          <div class="painter-projects-counter__icon"></div>
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
    &__inner {
    }
  }
    .painter-avatar {
      &__image {
      }
    }
    .painter-data {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;

      &__item {
        &--full-width {
          width: 100%;
        }
      }
    }
      .painter-name {
      }
      .painter-property {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        // Icons
          &:before {
            content: '';
            display: none;
            @include bg();
            width: 20px;
            height: 20px;
          }

          &--location {
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

        // Label
          &__label {
            &--link {
            }
          }
      }
    .painter-actions {
      &__btn {
      }
    }
      .request-btn {
        &__icon {
        }
        &__text {
        }
      }
      .painter-projects-counter {
        &__icon {
        }
        &__text {
        }
      }

</style>
