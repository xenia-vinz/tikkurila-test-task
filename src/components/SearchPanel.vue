<template>
  <div class="search-panel">
    <div class="search-panel__inner">

      <div class="search-panel-top">
        <div class="search-panel-top__inner width-wrapper">

          <div class="search-panel-form">
            <div class="search-panel-form__title">Hae</div>
            <div class="search-panel-form__form">
              <form
                class="search-form"
                action="">
                <input
                  class="search-form__input"
                  type="text"
                  name="search_queue"
                  value=""
                  placeholder=""
                />
                <button
                  class="search-form__submit-btn"
                  type="submit"
                >
                  Hae
                </button>
              </form>
            </div>
          </div>

          <div
            :class="{'search-panel-sorting--hidden': !sortings}"
            class="search-panel-sorting">
            <div class="search-panel-sorting__title">Lajitteluperuste</div>
            <div class="search-panel-sorting__items">
              <span
                v-for="item in sortings"
                :key="item.slug"
                :class="[
                  {
                    'search-panel-sorting__item--active':
                    (currentSorting == item.slug)
                  }
                ]"
                class="search-panel-sorting__item"
                @click="setSorting(item.slug)"
              >
                {{ item.title }}
              </span>
            </div>
          </div>

        </div>
      </div>

      <div class="search-panel-bottom">
        <div class="search-panel-bottom__inner">

          <div
            :class="{'search-panel-filters--hidden': !tags}"
            class="search-panel-filters">
            <div class="search-panel-filters__inner width-wrapper">
              <div class="search-panel-filters__title">
                Valitse maalaustyö
              </div>
              <div class="search-panel-filters__tags">
                <ul class="search-panel-tags">
                  <li
                    v-for="item in tags"
                    :key="item.slug"
                    :data-tag="item.slug"
                    :data-selected="item.selected"
                    :class="[
                      {
                        'search-panel-tags__tag--active': item.selected
                      }
                    ]"
                    class="search-panel-tags__tag"
                    @click="setTag(item.slug, item.selected)">
                    <span
                      class="search-panel-tags__tag-btn"
                      data-tag="terassit"
                      >
                      {{ item.title }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="search-panel-description">
            <div class="search-panel-description__inner width-wrapper text-content">
              <p>Etsi projektiisi sopivia urakoitsijoita ja pyydä tarjous!</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPanel',
  props: {
  },
  data() {
    return {
    };
  },
  computed: {
    sortings: {
      get() {
        return this.$store.getters['sortings/getData'];
      },
    },
    currentSorting: {
      get() {
        return this.$store.getters['sortings/getCurrent'];
      },
    },
    tags: {
      get() {
        return this.$store.getters['tags/getData'];
      },
    },
  },
  mounted() {
    this.$store.dispatch('sortings/loadData');
    this.$store.dispatch('tags/loadData');
  },
  methods: {
    setSorting(data) {
      this.$store.dispatch('sortings/setCurrent', data);
      return false;
    },
    setTag(data, isActive) {
      this.$store.dispatch('tags/toggleSelected', {
        slug: data,
        selected: !isActive,
      });
      return false;
    },
  },
};
</script>

<style scoped lang="scss">
  @import '@/scss/_utils.scss';
  .search-panel {
    &__inner {
    }
  }
    .search-panel-top {
      background: $c_search_panel_top_bg_gradient;
      padding: 12px 0;
      &__inner {
        @include breakpoint($desktop) {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
      .search-panel-form {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @include breakpoint($desktop) {
          flex-basis: 50%;
        }
        &__title {
          flex-basis: 25%;
          padding: 0.25rem 0 0;
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          @include breakpoint($desktop) {
            flex-basis: calc(1/3 * 100%);
          }
        }
        &__form {
          flex-basis: 75%;
          @include breakpoint($desktop) {
            flex-basis: calc(2/3 * 100%);
          }
        }
      }
        .search-form {
          position: relative;
          @include breakpoint($desktop) {
            max-width: 300px;
          }
          &__input {
            width: 100%;
          }
          &__submit-btn {
            position: absolute;
            top: 12px;
            right: 12px;
            width: 25px;
            height: 25px;
            border: 0;
            @include bg();
            @include clrBtn();
            font-size: 0;
            background-image: url('../assets/search.svg');
          }
        }
      .search-panel-sorting {
        margin: 14px 0 0;
        visibility: visible;
        opacity: 1;

        &--hidden {
          visibility: hidden;
          opacity: 0;
          transition: opacity .2s linear;
        }
        @include breakpoint($desktop) {
          flex-basis: 50%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          padding: 0 0 0 20px;
        }
        &__title {
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          @include breakpoint($desktop) {
            margin: 0 28px 0 0;
          }
        }
        &__items {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
          margin: 0 -6px;
        }
          &__item {
            display: block;
            margin: 0 6px 6px;
            font-size: 1.2rem;
            @include linkUnderline($c_blue_dark);
            &--active {
              &:after {
                opacity: 1;
              }
            }
          }
      }
    .search-panel-bottom {
      background: $c_search_panel_bottom_bg;
      padding: 12px 0;
      &__inner {
      }
    }
    .search-panel-filters {
      visibility: visible;
      opacity: 1;

      &--hidden {
        visibility: hidden;
        opacity: 0;
        transition: opacity .2s linear;
      }
      &__title {
        margin: 0 0 10px;
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
      }
      &__tags {
      }
    }
      .search-panel-tags {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        margin: 0 -2px;
        &__tag {
          display: block;
          margin: 0 4px 8px;
        }
          &__tag-btn {
            @include roundedBtn();
            font-size: 1.2rem;
            font-weight: 400;
            &:hover,
            .search-panel-tags__tag--active & {
              background: $c_accent;
              color: $c_white;
            }
          }
      }
    .search-panel-description {
      margin: 12px 0 0;
      padding: 12px 0;
      border-top: 1px solid $c_gray_light3;
      text-align: center;
      &:last-child {
        padding-bottom: 0;
      }
    }
</style>
