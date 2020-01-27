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
                  class="search-form__submit"
                  type="submit"
                >
                  Hae
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <div class="search-panel-bottom">
        <div class="search-panel-bottom__inner width-wrapper">

          <div class="search-panel-sorting">
            <div class="search-panel-sorting__title">
              Valitse maalaustyö
            </div>
            <div class="search-panel-sorting__tags">
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

          <div class="search-panel-description">
              <p>Etsi projektiisi sopivia urakoitsijoita ja pyydä tarjous!</p>
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
};
</script>

<style scoped lang="scss">
  @import '@/scss/_utils.scss';
  .search-panel {
    &__inner {
    }
  }
</style>
