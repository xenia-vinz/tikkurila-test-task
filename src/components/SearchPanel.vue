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

          <div class="search-panel-sorting">
            <div class="search-panel-sorting__title">Lajitteluperuste</div>
            <div class="search-panel-sorting__items">
              <span
                v-for="item in sortings"
                v-bind:key="item.slug"
                :class="{'search-panel-sorting__item--active': currentSorting == item.slug}"
                class="search-panel-sorting__item"
                @click="setSorting()"
              >
                {{ item.title }}
              </span>
            </div>
          </div>

        </div>
      </div>

      <div class="search-panel-bottom">
        <div class="search-panel-bottom__inner">

          <div class="search-panel-filters">
            <div class="search-panel-filters__inner width-wrapper">
              <div class="search-panel-filters__title">
                Valitse maalaustyö
              </div>
              <div class="search-panel-filters__tags">
                <ul class="search-panel-tags">
                  <li class="search-panel-tags__tag">
                    <span
                      class="search-panel-tags__tag-btn"
                      data-tag="terassit"
                      >
                      Terassit
                    </span>
                  </li>
                  <li class="search-panel-tags__tag">
                    <span
                      class="search-panel-tags__tag-btn"
                      data-tag="katot"
                      >
                      Katot
                    </span>
                  </li>
                  <li class="search-panel-tags__tag">
                    <span
                      class="search-panel-tags__tag-btn"
                      data-tag="puujulkisivut"
                      >
                      Puujulkisivut
                    </span>
                  </li>
                  <li class="search-panel-tags__tag">
                    <span
                      class="search-panel-tags__tag-btn"
                      data-tag="tasoitustyöt"
                      >
                      Tasoitustyöt
                    </span>
                  </li>
                  <li class="search-panel-tags__tag">
                    <span
                      class="search-panel-tags__tag-btn"
                      data-tag="efektimaalaus"
                      >
                      Efektimaalaus
                    </span>
                  </li>
                  <li class="search-panel-tags__tag">
                    <span
                      class="search-panel-tags__tag-btn"
                      data-tag="sisämaalaukset"
                      >
                      Sisämaalaukset
                    </span>
                  </li>
                  <li class="search-panel-tags__tag">
                    <span
                      class="search-panel-tags__tag-btn"
                      data-tag="lattiat"
                      >
                      Lattiat
                    </span>
                  </li>
                  <li class="search-panel-tags__tag">
                    <span
                      class="search-panel-tags__tag-btn"
                      data-tag="kivijulkisivut_ja_sokkelit"
                      >
                      kivijulkisivut ja sokkelit
                    </span>
                  </li>
                  <li class="search-panel-tags__tag">
                    <span
                      class="search-panel-tags__tag-btn"
                      data-tag="ovet_ikkunat_ja_kalusteet"
                      >
                      Ovet ikkunat ja kalusteet
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
      sortings: [
        {
          slug: 'työnäytteet',
          title: 'Työnäytteet',
        },
        {
          slug: 'nimi',
          title: 'Nimi',
        },
        {
          slug: 'palaute',
          title: 'Palaute',
        },
      ],
    };
  },
  computed: {
    currentSorting() {
      return 'työnäytteet';
    },
  },
  methods: {
    setSorting() {
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
      }
    }
      .search-panel-form {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &__title {
          flex-basis: 25%;
          padding: 0.25rem 0 0;
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        &__form {
          flex-basis: 75%;
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
        &__title {
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
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
