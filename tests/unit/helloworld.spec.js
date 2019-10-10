/* eslint-disable no-undef */
import { shallowMount, mount } from '@vue/test-utils'
import Prova from '../../src/components/specialties/Prova'
import specialtiesFixture from './fixtures/specialtiesFixture'

import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)

const el = document.createElement('div')
el.setAttribute('data-app', true)
document.body.appendChild(el)

describe('Prova', () => {
  let props

  const build = (properties) => {
    properties = properties || props
    const wrapper = shallowMount(Prova, {
      propsData: properties
    })
    const wrapperMounted = mount(Prova, {
      propsData: properties
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
  })

  it('Renders the mounted component', async () => {

    const wrapper = shallowMount(Prova, {
      propsData: {
        specialties: ['Item 1', 'Item 2']
      }
    })
    const wrapperMounted = mount(Prova, {
      propsData: {
        specialties: ['Item 1', 'Item 2']
      }
    })

    await wrapperMounted.vm.$nextTick()

    console.log(wrapperMounted.html())
    console.log(wrapper.html())
    // console.log(wrapper.html())
  })
})
