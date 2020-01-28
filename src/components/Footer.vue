<template>
  <footer class="footer">
    <div class="footer__inner width-wrapper">

      <div class="footer-content">
        <div class="footer-content__inner">

          <div class="footer-content-block">
            <div class="footer-content-block__inner">
              <div class="footer-content-block__title">Löydä lähin luotettava tekijä!</div>
              <div class="footer-content-block__content text-content">
                <p>Tekijäpankista löydät osaavat ja luotettavat tekijät maalaustyöllesi.</p>
              </div>
              <div class="footer-content-block__links">
                <ul class="footer-menu">
                  <li class="footer-menu__item">
                    <a href="/about" class="footer-menu__item-link">Lue lisää</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-content-block">
            <div class="footer-content-block__inner">
              <div class="footer-content-block__title">Yleistä</div>
              <div class="footer-content-block__links">
                <ul class="footer-menu">
                   <li class="footer-menu__item">
                    <a href="/about" class="footer-menu__item-link">Tietoa palvelusta</a>
                  </li>
                   <li class="footer-menu__item">
                    <a href="/about/contact" class="footer-menu__item-link">Ota yhteyttä</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="footer-copyright">
        <div
          id="text"
          class="footer-copyright__inner text-content">
          <p>© 2019 Tikkurila Oyj - <a href="https://www.tikkurila.fi">www.tikkurila.fi</a></p>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  },
};
</script>

<style scoped lang="scss">
  @import '@/scss/_utils.scss';
  .footer {
    padding: 14px 0;
    @include breakpoint($desktop) {
      margin: 40px 0 0;
      border-top: 1px solid $c_gray_light3;
    }
    &__inner {
    }
  }
    .footer-content {
      &__inner {
        @include breakpoint($desktop) {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin: 0 -20px;
        }
      }
    }
      .footer-content-block {
        margin: 0 0 20px;
        &:last-child {
          margin-bottom: 0;
        }
        @include breakpoint($desktop) {
          flex-basis: 50%;
          margin: 0 20px;
        }
        &__inner {
        }
          &__title {
            margin: 0 0 10px;
            font-size: 1.6rem;
            font-weight: 200;
          }
          &__content {
            font-size: 1.3rem;
            font-weight: 200;
            line-height: 1.6;
            .text-content {
              p {
                font-size: 1.3rem;
                font-weight: 200;
                line-height: 1.6;
              }
            }
          }
          &__links {
          }
      }
        .footer-menu {
          list-style: none inside none;
          margin: 24px 0 0;
          padding: 0;
          &__item {
          }
            &__item-link {
              font-size: 1.35rem;
              &:after {
                content: '»';
                display: inline-block;
                margin-left: 3px;
                color: $c_black2;
              }
            }
        }
    .footer-copyright {
      padding: 50px 0 0;
      &__inner {
        font-size: 1.2rem;
        text-align: center;
      }
    }
</style>
