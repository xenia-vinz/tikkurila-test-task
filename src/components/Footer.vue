<template>
  <footer class="footer">
    <div class="footer__inner width-wrapper">

      <div class="footer-content">
        <div class="footer-content__inner">

          <div class="footer-content-block">
            <div class="footer-content-block__inner">
              <div class="footer-content-block__title">Löydä lähin luotettava tekijä!</div>
              <div class="footer-content-block__content">
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
        <div class="footer-copyright__inner">
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
    &__inner {
    }
  }
    .footer-content {
      &__inner {

      }
    }
      .footer-content-block {
        &__inner {

        }
          &__title {

          }
          &__content {
            // WYSIWYG content
              p {

              }
                a {

                }

          }
          &__links {

          }
      }
        .footer-menu {
          &__item {

          }
            &__item-link {

            }

        }

    .footer-copyright {
      &__inner {

      }

      // WYSIWYG content
        p {

        }
          a {

          }
    }
</style>
