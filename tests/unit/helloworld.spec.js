/* eslint-disable no-undef */
import { shallowMount, mount } from '@vue/test-utils'
import Prova from '../../src/components/Prova'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Router)
Vue.use(Vuetify)

// import sv from 'i18n/vuetify/sv'
//
// Vue.use(Vuetify, {
//   lang: {
//     locales: { sv },
//     current: 'sv'
//   }
// })

const el = document.createElement('div')
el.setAttribute('data-app', true)
document.body.appendChild(el)

describe('Prova', () => {
  let props
  let vuetify

  // eslint-disable-next-line no-unused-vars
  const build = (properties) => {
    properties = properties || props
    const wrapper = shallowMount(Prova, {
      propsData: properties,
      vuetify
      // sync: false
    })
    const wrapperMounted = mount(Prova, {
      propsData: properties,
      vuetify
      // sync: false
    })
    return {
      wrapper,
      wrapperMounted
    }
  }

  beforeEach(() => {
    props = {
      specialties: ['Item 1', 'Item 2']
    }
    vuetify = new Vuetify({
      mocks: {
        $vuetify: {
          lang: {
            t: jest.fn()
          }
        }
      }
    })
  })

  it('Renders the mounted component prova 222', async () => {
    // TODO https://github.com/vuetifyjs/vuetify/blob/ac5c6bf353a50e9b2019374b3948e9b7a98b0b30/packages/vuetify/src/components/VAlert/__tests__/VAlert.spec.ts
    const { wrapperMounted, wrapper } = build()

    await wrapperMounted.vm.$nextTick()

    console.log(wrapperMounted.html())

    await wrapper.vm.$nextTick()

    console.log(wrapper.html())
  })
})

// beforeEach(() => {
//   mountFunction = (options = {}) => {
//     return mount(VAlert, {
//       ...options,
//       // https://github.com/vuejs/vue-test-utils/issues/1130
//       sync: false,
//       mocks: {
//         $vuetify: {
//           lang: {
//             t: (val: string) => val,
//           },
//         },
//       },
//     })
//   }
// })
