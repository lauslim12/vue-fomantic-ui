<template>
  <sui-sidebar
    dimmed
    inverted
    ref="elementRef"
    :style="{width: '250px'}"
  >
    <sui-menu-item as="div">
      <strong>
        Fomantic UI Vue
      </strong>
    </sui-menu-item>
    <sui-menu-item as="router-link" to="/">
      <b>Getting Started</b>
    </sui-menu-item>
    <sui-menu-item as="div">
      <sui-menu-header content="Elements" />
      <sui-menu-menu>
        <sui-menu-item
          v-for="el in elements"
          :key="el.name"
          :name="el.name"
          :to="el.path"
          :active="isActive(el.path)"
          as="router-link"
        />
      </sui-menu-menu>
    </sui-menu-item>
    <sui-menu-item as="div">
      <sui-menu-header content="Collections" />
      <sui-menu-menu>
        <sui-menu-item
          v-for="cl in collections"
          :key="cl.name"
          :name="cl.name"
          :to="cl.path"
          :active="isActive(cl.path)"
          as="router-link"
        />
      </sui-menu-menu>
    </sui-menu-item>
    <sui-menu-item as="div">
      <sui-menu-header content="Views" />
      <sui-menu-menu>
        <sui-menu-item
          v-for="v in views"
          :key="v.name"
          :name="v.name"
          :to="v.path"
          :active="isActive(v.path)"
          as="router-link"
        />
      </sui-menu-menu>
    </sui-menu-item>
    <sui-menu-item as="div">
      <sui-menu-header content="Modules" />
      <sui-menu-menu>
        <sui-menu-item
          v-for="m in modules"
          :key="m.name"
          :name="m.name"
          :to="m.path"
          :active="isActive(m.path)"
          as="router-link"
        />
      </sui-menu-menu>
    </sui-menu-item>
  </sui-sidebar>
</template>

<script>
import { defineComponent, ref } from "vue"
import { useRoute } from 'vue-router'

import { useClickOutside } from '@/composables/useClickOutside'

export default defineComponent({
  name: 'Sidebar',
  props: ['onClickOutside'],
  setup(props) {
    const route = useRoute()
    const isActive = (path) => {
      return route.path === path
    }

    const elements = [
      { name: 'Button', path: '/elements/button' },
      { name: 'Container', path: '/elements/container' },
      { name: 'Divider', path: '/elements/divider' },
      { name: 'Emoji', path: '/elements/emoji' },
      { name: 'Flag', path: '/elements/flag' },
      { name: 'Header', path: '/elements/header' },
      { name: 'Icon', path: '/elements/icon' },
      { name: 'Image', path: '/elements/image' },
      { name: 'Input', path: '/elements/input' },
      { name: 'Label', path: '/elements/label' },
      { name: 'List', path: '/elements/list' },
      { name: 'Loader', path: '/elements/loader' },
      { name: 'Rail', path: '/elements/rail' },
      { name: 'Reveal', path: '/elements/reveal' },
      { name: 'Segment', path: '/elements/segment' },
      { name: 'Step', path: '/elements/step' }
    ]

    const collections = [
      { name: 'Breadcrumb', path: '/collections/breadcrumb' },
      { name: 'Form', path: '/collections/form' },
      { name: 'Grid', path: '/collections/grid' },
      { name: 'Menu', path: '/collections/menu' },
      { name: 'Message', path: '/collections/message' },
      { name: 'Table', path: '/collections/table' }
    ]

    const views = [
      { name: 'Advertisement', path: '/views/advertisement' },
      { name: 'Card', path: '/views/card' },
      { name: 'Comment', path: '/views/comment' },
      { name: 'Feed', path: '/views/feed' },
      { name: 'Item', path: '/views/item' },
      { name: 'Statistic', path: '/views/statistic' }
    ]

    const modules = [
      { name: 'Accordion', path: '/modules/accordion' },
      { name: 'Calendar', path: '/modules/calendar' },
      { name: 'Checkbox', path: '/modules/checkbox'},
      { name: 'Dimmer', path: '/modules/dimmer' },
      { name: 'Dropdown', path: '/modules/dropdown' },
      { name: 'Embed', path: '/modules/embed' },
      { name: 'Modal', path: '/modules/modal' },
      { name: 'Popup', path: '/modules/popup' },
      { name: 'Progress', path: '/modules/progress' },
      { name: 'Rating', path: '/modules/rating' },
      { name: 'Sidebar', path: '/modules/sidebar' },
      { name: 'Slider', path: '/modules/slider' },
      { name: 'Tab', path: '/modules/tab' },
      { name: 'Toast', path: '/modules/toast' },
    ]

    const elementRef = ref()
    useClickOutside(elementRef, props.onClickOutside)

    return { isActive, elements, collections, views, modules }
  }
})
</script>
