import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import GettingStarted from './pages/GettingStarted.vue'

// Elements
import RailDoc from './pages/RailDoc.vue'

// Modules
import DimmerDoc from './pages/modules/DimmerDoc.vue'
import EmbedDoc from './pages/modules/EmbedDoc.vue'
import PopupDoc from './pages/modules/PopupDoc.vue'

const routes: any = [
  {
    path: '/', component: Home,
    children: [
      { path: '/', component: GettingStarted },
      { path: 'elements/button', component: () => import('./pages/elements/Button.vue') },
      { path: 'elements/container', component: () => import('./pages/elements/Container.vue') },
      { path: 'elements/divider', component: () => import('./pages/elements/Divider.vue') },
      { path: 'elements/emoji', component: () => import('./pages/elements/Emoji.vue') },
      { path: 'elements/flag', component: () => import('./pages/elements/Flag.vue') },
      { path: 'elements/header', component: () => import('./pages/elements/Header.vue') },
      { path: 'elements/icon', component: () => import('./pages/elements/Icon.vue') },
      { path: 'elements/image', component: () => import('./pages/elements/Image.vue') },
      { path: 'elements/input', component: () => import('./pages/elements/Input.vue') },
      { path: 'elements/label', component: () => import('./pages/elements/Label.vue') },
      { path: 'elements/list', component: () => import('./pages/elements/List.vue') },
      { path: 'elements/loader', component: () => import('./pages/elements/Loader.vue') },
      { path: 'elements/rail', component: RailDoc },
      { path: 'elements/reveal', component: () => import('./pages/elements/Reveal.vue') },
      { path: 'elements/segment', component: () => import('./pages/elements/Segment.vue') },
      { path: 'elements/step', component: () => import('./pages/elements/Step.vue') },

      { path: 'collections/breadcrumb', component: () => import('./pages/collections/Breadcrumb.vue') },
      { path: 'collections/form', component: () => import('./pages/collections/Form.vue') },
      { path: 'collections/grid', component: () => import('./pages/collections/Grid.vue') },
      { path: 'collections/menu', component: () => import('./pages/collections/Menu.vue') },
      { path: 'collections/message', component: () => import('./pages/collections/Message.vue') },
      { path: 'collections/table', component: () => import('./pages/collections/Table.vue') },

      { path: 'views/advertisement', component: () => import('./pages/views/Advertisement.vue') },
      { path: 'views/card', component: () => import('./pages/views/Card.vue') },
      { path: 'views/comment', component: () => import('./pages/views/Comment.vue') },
      { path: 'views/feed', component: () => import('./pages/views/Feed.vue') },
      { path: 'views/item', component: () => import('./pages/views/Item.vue') },
      { path: 'views/statistic', component: () => import('./pages/views/Statistic.vue') },

      { path: 'modules/accordion', component: () => import('./pages/modules/Accordion.vue') },
      { path: 'modules/calendar', component: () => import('./pages/modules/Calendar.vue') },
      { path: 'modules/checkbox', component: () => import('./pages/modules/Checkbox.vue') },
      { path: 'modules/dimmer', component: DimmerDoc },
      { path: 'modules/dropdown', component: () => import('./pages/modules/Dropdown.vue') },
      { path: 'modules/embed', component: EmbedDoc },
      { path: 'modules/modal', component: () => import('./pages/modules/Modal.vue') },
      { path: 'modules/popup', component: PopupDoc },
      { path: 'modules/progress', component: () => import('./pages/modules/Progress.vue') },
      { path: 'modules/rating', component: () => import('./pages/modules/Rating.vue') },
      { path: 'modules/sidebar', component: () => import('./pages/modules/Sidebar.vue') },
      { path: 'modules/slider', component: () => import('./pages/modules/Slider.vue') },
      { path: 'modules/tab', component: () => import('./pages/modules/Tab.vue') },
      { path: 'modules/toast', component: () => import('./pages/modules/Toast.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/vue-fomantic-ui/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return

    document.querySelector('.article')?.scrollTo(0, 0)
  },
})

export default router
