/* eslint-disable no-undef */
import { shallowMount, mount, createWrapper } from '@vue/test-utils'
import Specialties from '../../src/components/Specialties'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Router)
Vue.use(Vuetify)

// const divData = document.createElement('div')
// divData.setAttribute('data-app', true)
// document.body.appendChild(divData)

describe('Specialties', () => {
  let props
  let vuetify

  // eslint-disable-next-line no-unused-vars
  const build = (properties) => {
    properties = properties || props
    const wrapper = shallowMount(Specialties, {
      propsData: properties,
      vuetify
      // sync: false
    })
    const wrapperMounted = mount(Specialties, {
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
      specialties: ['Specialty 1', 'Specialty 2']
    }
    // MOCKING t to avoid undefined error
    // TODO https://github.com/vuetifyjs/vuetify/blob/ac5c6bf353a50e9b2019374b3948e9b7a98b0b30/packages/vuetify/src/components/VAlert/__tests__/VAlert.spec.ts
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

  it('Renders the specialities select', async () => {
    const { wrapperMounted } = build()
    await wrapperMounted.vm.$nextTick()

    // NOT VALID: PARENT IS CHILD HIMSELF
    // console.log(createWrapper(wrapperMounted.vm.$parent).html())
    // ALSO DOES NOT WORK
    // console.log(createWrapper(divData).html())
    // console.log(wrapperMounted.html())

    // NOT WORKING VUETIFY RENDER SELECT LIST OUTSIDE COMPONENT DOM
    expect(wrapperMounted.html()).toMatch('Specialty 1')
  })
})
