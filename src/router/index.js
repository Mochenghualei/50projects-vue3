import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/day27",
    },
    {
      path: "/day01",
      name: "day01",
      meta: {
        title: "Expanding Cards",
      },
      component: () => import("../views/Day01_ExpandingCards/Index.vue"),
    },
    {
      path: "/day02",
      name: "day02",
      meta: {
        title: "Progress Steps",
      },
      component: () => import("../views/Day02_ProgressSteps/Index.vue"),
    },
    {
      path: "/day03",
      redirect: "/day03/page01",
      name: "day03",
      meta: {
        title: "Rotating Navigation Animation",
      },
      component: () =>
        import("../views/day03_RotatingNavigationAnimation/Index.vue"),
      children: [
        {
          path: "page01",
          name: "page01",
          component: () =>
            import(
              "../views/day03_RotatingNavigationAnimation/pages/Page01.vue"
            ),
        },
        {
          path: "page02",
          name: "page02",
          component: () =>
            import(
              "../views/day03_RotatingNavigationAnimation/pages/Page02.vue"
            ),
        },
        {
          path: "page03",
          name: "page03",
          component: () =>
            import(
              "../views/day03_RotatingNavigationAnimation/pages/Page03.vue"
            ),
        },
      ],
    },
    {
      path: "/day04",
      name: "day04",
      meta: {
        title: "Hidden Search Widget",
      },
      component: () => import("../views/Day04_HiddenSearchWidget/Index.vue"),
    },
    {
      path: "/day05",
      name: "day05",
      meta: {
        title: "Blurry Loading",
      },
      component: () => import("../views/Day05_BlurryLoading/Index.vue"),
    },
    {
      path: "/day06",
      name: "day06",
      meta: {
        title: "Scroll Animation",
      },
      component: () => import("../views/day06_ScrollAnimation/Index.vue"),
    },
    {
      path: "/day07",
      name: "day07",
      meta: {
        title: "Split Landing Page",
      },
      component: () => import("../views/Day07_SplitLandingPage/Index.vue"),
    },
    {
      path: "/day08",
      name: "day08",
      meta: {
        title: "Form Input Wave",
      },
      component: () => import("../views/Day08_FormInputWave/Index.vue"),
    },
    {
      path: "/day09",
      name: "day09",
      meta: {
        title: "Sound Board",
      },
      component: () => import("../views/Day09_SoundBoard/Index.vue"),
    },
    {
      path: "/day10",
      name: "day10",
      meta: {
        title: "Dad Jokes",
      },
      component: () => import("../views/Day10_DadJokes/Index.vue"),
    },
    {
      path: "/day11",
      name: "day11",
      meta: {
        title: "Event KeyCodes",
      },
      component: () => import("../views/Day11_EventKeyCodes/Index.vue"),
    },
    {
      path: "/day12",
      name: "day12",
      meta: {
        title: "Faq Collapse",
      },
      component: () => import("../views/Day12_FaqCollapse/Index.vue"),
    },
    {
      path: "/day13",
      name: "day13",
      meta: {
        title: "Random Choice Picker",
      },
      component: () => import("../views/Day13_RandomChoicePicker/Index.vue"),
    },
    {
      path: "/day14",
      name: "day14",
      meta: {
        title: "Animated Navigation",
      },
      component: () => import("../views/Day14_AnimatedNavigation/Index.vue"),
    },
    {
      path: "/day15",
      name: "day15",
      meta: {
        title: "Incrementing Counter",
      },
      component: () => import("../views/Day15_IncrementingCounter/Index.vue"),
    },
    {
      path: "/day16",
      name: "day16",
      meta: {
        title: "Drink Water",
      },
      component: () => import("../views/Day16_DrinkWater/Index.vue"),
    },
    {
      path: "/day18",
      name: "day18",
      meta: {
        title: "Background Slider",
      },
      component: () => import("../views/Day18_BackgroundSlider/Index.vue"),
    },
    {
      path: "/day19",
      name: "day19",
      meta: {
        title: "Theme Clock",
      },
      component: () => import("../views/Day19_ThemeClock/Index.vue"),
    },
    {
      path: "/day20",
      name: "day20",
      meta: {
        title: "Button Ripple Effect",
      },
      component: () => import("../views/Day20_ButtonRippleEffect/Index.vue"),
    },
    {
      path: "/day21",
      name: "day21",
      meta: {
        title: "Drag N Drop",
      },
      component: () => import("../views/Day21_DragNDrop/Index.vue"),
    },
    {
      path: "/day22",
      name: "day22",
      meta: {
        title: "Drawing App",
      },
      component: () => import("../views/Day22_DrawingApp/Index.vue"),
    },
    {
      path: "/day23",
      name: "day23",
      meta: {
        title: "Kinetic Loader",
      },
      component: () => import("../views/Day23_KineticLoader/Index.vue"),
    },
    {
      path: "/day24",
      name: "day24",
      meta: {
        title: "Content Placeholder",
      },
      component: () => import("../views/Day24_ContentPlaceholder/Index.vue"),
    },
    {
      path: "/day25",
      name: "day25",
      meta: {
        title: "Sticky Navigation",
      },
      component: () => import("../views/Day25_StickyNavigation/Index.vue"),
    },
    // Double Vertical Slider
    {
      path: "/day26",
      name: "day26",
      meta: {
        title: "Double Vertical Slider",
      },
      component: () => import("../views/Day26_DoubleVerticalSlider/Index.vue"),
    },
    {
      path: "/day27",
      name: "day27",
      meta: {
        title: "Toast Notification",
      },
      component: () => import("../views/Day27_ToastNotification/Index.vue"),
    },
  ],
})
