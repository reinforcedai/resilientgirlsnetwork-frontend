import { computed, ref, watch, provide, createVNode, inject, Transition, withDirectives, resolveDirective, nextTick, vShow, Fragment, mergeProps, useSSRContext, withCtx, toDisplayString, openBlock, createBlock, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { d as defineComponent, m as makeThemeProps, u as useProxiedModel, a as useRtl, p as provideTheme, g as genericComponent, b as useLocale, I as IconValue, _ as _export_sfc, c as convertToUnit, e as propsFactory, k as keys } from '../server.mjs';
import { m as makeRoundedProps, a as makeTagProps, u as useTextColor, b as useBackgroundColor, c as useRounded, d as useIntersectionObserver, e as useRender, f as useGroup, V as VBtn, g as makeGroupItemProps, h as useGroupItem, i as useSsrBoot, M as MaybeTransition, j as VDefaultsProvider, k as VImg, l as VRow, n as VCol } from './VRow.8e162f19.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const VProgressLinear = defineComponent({
  name: "VProgressLinear",
  props: {
    active: {
      type: Boolean,
      default: true
    },
    bgColor: String,
    bgOpacity: [Number, String],
    bufferValue: {
      type: [Number, String],
      default: 0
    },
    clickable: Boolean,
    color: String,
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    modelValue: {
      type: [Number, String],
      default: 0
    },
    reverse: Boolean,
    stream: Boolean,
    striped: Boolean,
    roundedBar: Boolean,
    ...makeRoundedProps(),
    ...makeTagProps(),
    ...makeThemeProps()
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const progress = useProxiedModel(props, "modelValue");
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(props, "color");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(computed(() => props.bgColor || props.color));
    const {
      backgroundColorClasses: barColorClasses,
      backgroundColorStyles: barColorStyles
    } = useBackgroundColor(props, "color");
    const {
      roundedClasses
    } = useRounded(props);
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const max = computed(() => parseInt(props.max, 10));
    const height = computed(() => parseInt(props.height, 10));
    const normalizedBuffer = computed(() => parseFloat(props.bufferValue) / max.value * 100);
    const normalizedValue = computed(() => parseFloat(progress.value) / max.value * 100);
    const isReversed = computed(() => isRtl.value !== props.reverse);
    const transition = computed(() => props.indeterminate ? "fade-transition" : "slide-x-transition");
    const opacity = computed(() => {
      return props.bgOpacity == null ? props.bgOpacity : parseFloat(props.bgOpacity);
    });
    function handleClick(e) {
      if (!intersectionRef.value)
        return;
      const {
        left,
        right,
        width
      } = intersectionRef.value.getBoundingClientRect();
      const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
      progress.value = Math.round(value / width * max.value);
    }
    useRender(() => createVNode(props.tag, {
      "ref": intersectionRef,
      "class": ["v-progress-linear", {
        "v-progress-linear--active": props.active && isIntersecting.value,
        "v-progress-linear--reverse": isReversed.value,
        "v-progress-linear--rounded": props.rounded,
        "v-progress-linear--rounded-bar": props.roundedBar,
        "v-progress-linear--striped": props.striped
      }, roundedClasses.value, themeClasses.value],
      "style": {
        height: props.active ? convertToUnit(height.value) : 0,
        "--v-progress-linear-height": convertToUnit(height.value)
      },
      "role": "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": props.max,
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value,
      "onClick": props.clickable && handleClick
    }, {
      default: () => [props.stream && createVNode("div", {
        "key": "stream",
        "class": ["v-progress-linear__stream", textColorClasses.value],
        "style": {
          ...textColorStyles.value,
          [isReversed.value ? "left" : "right"]: convertToUnit(-height.value),
          borderTop: `${convertToUnit(height.value / 2)} dotted`,
          opacity: opacity.value,
          top: `calc(50% - ${convertToUnit(height.value / 4)})`,
          width: convertToUnit(100 - normalizedBuffer.value, "%"),
          "--v-progress-linear-stream-to": convertToUnit(height.value * (isReversed.value ? 1 : -1))
        }
      }, null), createVNode("div", {
        "class": ["v-progress-linear__background", backgroundColorClasses.value],
        "style": [backgroundColorStyles.value, {
          opacity: opacity.value,
          width: convertToUnit(!props.stream ? 100 : normalizedBuffer.value, "%")
        }]
      }, null), createVNode(Transition, {
        "name": transition.value
      }, {
        default: () => [!props.indeterminate ? createVNode("div", {
          "class": ["v-progress-linear__determinate", barColorClasses.value],
          "style": [barColorStyles.value, {
            width: convertToUnit(normalizedValue.value, "%")
          }]
        }, null) : createVNode("div", {
          "class": "v-progress-linear__indeterminate"
        }, [["long", "short"].map((bar) => createVNode("div", {
          "key": bar,
          "class": ["v-progress-linear__indeterminate", bar, barColorClasses.value],
          "style": barColorStyles.value
        }, null))])]
      }), slots.default && createVNode("div", {
        "class": "v-progress-linear__content"
      }, [slots.default({
        value: normalizedValue.value,
        buffer: normalizedBuffer.value
      })])]
    }));
    return {};
  }
});
const handleGesture = (wrapper) => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  var _wrapper$start;
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  (_wrapper$start = wrapper.start) == null ? void 0 : _wrapper$start.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  var _wrapper$end;
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  (_wrapper$end = wrapper.end) == null ? void 0 : _wrapper$end.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  var _wrapper$move;
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  (_wrapper$move = wrapper.move) == null ? void 0 : _wrapper$move.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers() {
  let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: (e) => touchstart(e, wrapper),
    touchend: (e) => touchend(e, wrapper),
    touchmove: (e) => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  var _a, _b;
  var _binding$instance;
  const value = binding.value;
  const target = value != null && value.parent ? el.parentElement : el;
  const options = (_a = value == null ? void 0 : value.options) != null ? _a : {
    passive: true
  };
  const uid = (_binding$instance = binding.instance) == null ? void 0 : _binding$instance.$.uid;
  if (!target || !uid)
    return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = (_b = target._touchHandlers) != null ? _b : /* @__PURE__ */ Object.create(null);
  target._touchHandlers[uid] = handlers;
  keys(handlers).forEach((eventName) => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unmounted(el, binding) {
  var _binding$value, _binding$instance2;
  const target = (_binding$value = binding.value) != null && _binding$value.parent ? el.parentElement : el;
  const uid = (_binding$instance2 = binding.instance) == null ? void 0 : _binding$instance2.$.uid;
  if (!(target != null && target._touchHandlers) || !uid)
    return;
  const handlers = target._touchHandlers[uid];
  keys(handlers).forEach((eventName) => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[uid];
}
const Touch = {
  mounted,
  unmounted
};
const Touch$1 = Touch;
const VWindowSymbol = Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group");
const VWindow = genericComponent()({
  name: "VWindow",
  directives: {
    Touch
  },
  props: {
    continuous: Boolean,
    nextIcon: {
      type: [Boolean, String, Function, Object],
      default: "$next"
    },
    prevIcon: {
      type: [Boolean, String, Function, Object],
      default: "$prev"
    },
    reverse: Boolean,
    showArrows: {
      type: [Boolean, String],
      validator: (v) => typeof v === "boolean" || v === "hover"
    },
    touch: {
      type: [Object, Boolean],
      default: void 0
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    modelValue: null,
    disabled: Boolean,
    selectedClass: {
      type: String,
      default: "v-window-item--active"
    },
    mandatory: {
      default: "force"
    },
    ...makeTagProps(),
    ...makeThemeProps()
  },
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref();
    const isRtlReverse = computed(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = ref(false);
    const transition = computed(() => {
      const axis = props.direction === "vertical" ? "y" : "x";
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? "-reverse" : "";
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = ref(0);
    const transitionHeight = ref(void 0);
    const activeIndex = computed(() => {
      return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false;
      } else {
        isReversed.value = newVal < oldVal;
      }
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = computed(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = computed(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed(() => {
      const arrows2 = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        ariaLabel: t("$vuetify.carousel.prev")
      };
      arrows2.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : createVNode(VBtn, prevProps, null) : createVNode("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        ariaLabel: t("$vuetify.carousel.next")
      };
      arrows2.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : createVNode(VBtn, nextProps, null) : createVNode("div", null, null));
      return arrows2;
    });
    const touchOptions = computed(() => {
      if (props.touch === false)
        return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: (_ref2) => {
          let {
            originalEvent
          } = _ref2;
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...props.touch === true ? {} : props.touch
      };
    });
    useRender(() => {
      var _slots$default, _slots$additional;
      return withDirectives(createVNode(props.tag, {
        "ref": rootRef,
        "class": ["v-window", {
          "v-window--show-arrows-on-hover": props.showArrows === "hover"
        }, themeClasses.value]
      }, {
        default: () => [createVNode("div", {
          "class": "v-window__container",
          "style": {
            height: transitionHeight.value
          }
        }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots, {
          group
        }), props.showArrows !== false && createVNode("div", {
          "class": "v-window__controls"
        }, [arrows.value])]), (_slots$additional = slots.additional) == null ? void 0 : _slots$additional.call(slots, {
          group
        })]
      }), [[resolveDirective("touch"), touchOptions.value]]);
    });
    return {
      group
    };
  }
});
const makeLazyProps = propsFactory({
  eager: Boolean
}, "lazy");
function useLazy(props, active) {
  const isBooted = ref(false);
  const hasContent = computed(() => isBooted.value || props.eager || active.value);
  watch(active, () => isBooted.value = true);
  function onAfterLeave() {
    if (!props.eager)
      isBooted.value = false;
  }
  return {
    isBooted,
    hasContent,
    onAfterLeave
  };
}
const VWindowItem = defineComponent({
  name: "VWindowItem",
  directives: {
    Touch: Touch$1
  },
  props: {
    reverseTransition: {
      type: [Boolean, String],
      default: void 0
    },
    transition: {
      type: [Boolean, String],
      default: void 0
    },
    ...makeGroupItemProps(),
    ...makeLazyProps()
  },
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window2 = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window2 || !groupItem)
      throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const isTransitioning = ref(false);
    const hasTransition = computed(() => window2.isReversed.value ? props.reverseTransition !== false : props.transition !== false);
    function onAfterTransition() {
      if (!isTransitioning.value || !window2) {
        return;
      }
      isTransitioning.value = false;
      if (window2.transitionCount.value > 0) {
        window2.transitionCount.value -= 1;
        if (window2.transitionCount.value === 0) {
          window2.transitionHeight.value = void 0;
        }
      }
    }
    function onBeforeTransition() {
      if (isTransitioning.value || !window2) {
        return;
      }
      isTransitioning.value = true;
      if (window2.transitionCount.value === 0) {
        var _window$rootRef$value;
        window2.transitionHeight.value = convertToUnit((_window$rootRef$value = window2.rootRef.value) == null ? void 0 : _window$rootRef$value.clientHeight);
      }
      window2.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition();
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        if (!hasTransition.value || !isTransitioning.value || !window2) {
          return;
        }
        window2.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window2.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== "string" ? window2.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => {
      var _slots$default;
      return createVNode(MaybeTransition, {
        "transition": isBooted.value && transition.value
      }, {
        default: () => [withDirectives(createVNode("div", {
          "class": ["v-window-item", groupItem.selectedClass.value]
        }, [hasContent.value && ((_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots))]), [[vShow, groupItem.isSelected.value]])]
      });
    });
    return {};
  }
});
const VCarousel = defineComponent({
  name: "VCarousel",
  props: {
    color: String,
    cycle: Boolean,
    delimiterIcon: {
      type: IconValue,
      default: "$delimiter"
    },
    height: {
      type: [Number, String],
      default: 500
    },
    hideDelimiters: Boolean,
    hideDelimiterBackground: Boolean,
    interval: {
      type: [Number, String],
      default: 6e3,
      validator: (value) => value > 0
    },
    modelValue: null,
    progress: [Boolean, String],
    showArrows: {
      type: [Boolean, String],
      default: true,
      validator: (v) => typeof v === "boolean" || v === "hover"
    },
    verticalDelimiters: [Boolean, String]
  },
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      t
    } = useLocale();
    const windowRef = ref();
    let slideTimeout = -1;
    watch(model, restartTimeout);
    watch(() => props.interval, restartTimeout);
    watch(() => props.cycle, (val) => {
      if (val)
        restartTimeout();
      else
        window.clearTimeout(slideTimeout);
    });
    function startTimeout() {
      if (!props.cycle || !windowRef.value)
        return;
      slideTimeout = window.setTimeout(windowRef.value.group.next, +props.interval > 0 ? +props.interval : 6e3);
    }
    function restartTimeout() {
      window.clearTimeout(slideTimeout);
      window.requestAnimationFrame(startTimeout);
    }
    useRender(() => createVNode(VWindow, {
      "ref": windowRef,
      "modelValue": model.value,
      "onUpdate:modelValue": ($event) => model.value = $event,
      "class": ["v-carousel", {
        "v-carousel--hide-delimiter-background": props.hideDelimiterBackground,
        "v-carousel--vertical-delimiters": props.verticalDelimiters
      }],
      "style": {
        height: convertToUnit(props.height)
      },
      "continuous": true,
      "mandatory": "force",
      "showArrows": props.showArrows
    }, {
      default: slots.default,
      additional: (_ref2) => {
        let {
          group
        } = _ref2;
        return createVNode(Fragment, null, [!props.hideDelimiters && createVNode("div", {
          "class": "v-carousel__controls",
          "style": {
            left: props.verticalDelimiters === "left" && props.verticalDelimiters ? 0 : "auto",
            right: props.verticalDelimiters === "right" ? 0 : "auto"
          }
        }, [group.items.value.length > 0 && createVNode(VDefaultsProvider, {
          "defaults": {
            VBtn: {
              color: props.color,
              icon: props.delimiterIcon,
              size: "x-small",
              variant: "text"
            }
          },
          "scoped": true
        }, {
          default: () => [group.items.value.map((item, index2) => {
            const props2 = {
              "aria-label": t("$vuetify.carousel.ariaLabel.delimiter", index2 + 1, group.items.value.length),
              class: [group.isSelected(item.id) && "v-btn--active"],
              onClick: () => group.select(item.id, true)
            };
            return slots.item ? slots.item({
              props: props2,
              item
            }) : createVNode(VBtn, mergeProps(item, props2), null);
          })]
        })]), props.progress && createVNode(VProgressLinear, {
          "class": "v-carousel__progress",
          "color": typeof props.progress === "string" ? props.progress : void 0,
          "modelValue": (group.getItemIndex(model.value) + 1) / group.items.value.length * 100
        }, null)]);
      },
      prev: slots.prev,
      next: slots.next
    }));
    return {};
  }
});
const VCarouselItem = defineComponent({
  name: "VCarouselItem",
  inheritAttrs: false,
  props: {
    value: null
  },
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    useRender(() => createVNode(VWindowItem, {
      "class": "v-carousel-item",
      "value": props.value
    }, {
      default: () => [createVNode(VImg, attrs, slots)]
    }));
  }
});
const _sfc_main$1 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const cycle = ref(true);
    const slides = [
      {
        src: "/1.jpeg",
        text: ""
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        text: ""
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        text: ""
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCarousel, mergeProps({
        cycle: cycle.value,
        "show-arrows": false,
        "hide-delimiter-background": "",
        "hide-delimiters": "",
        class: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(slides, (slide, i) => {
              _push2(ssrRenderComponent(VCarouselItem, {
                key: i,
                src: slide.src,
                cover: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VRow, {
                      align: "center",
                      justify: "center",
                      class: "fill-height"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCol, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<h1${_scopeId4}>${ssrInterpolate(slide.text)}</h1>`);
                              } else {
                                return [
                                  createVNode("h1", null, toDisplayString(slide.text), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCol, { class: "text-center" }, {
                              default: withCtx(() => [
                                createVNode("h1", null, toDisplayString(slide.text), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VRow, {
                        align: "center",
                        justify: "center",
                        class: "fill-height"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, { class: "text-center" }, {
                            default: withCtx(() => [
                              createVNode("h1", null, toDisplayString(slide.text), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(slides, (slide, i) => {
                return createVNode(VCarouselItem, {
                  key: i,
                  src: slide.src,
                  cover: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, {
                      align: "center",
                      justify: "center",
                      class: "fill-height"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, { class: "text-center" }, {
                          default: withCtx(() => [
                            createVNode("h1", null, toDisplayString(slide.text), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["src"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Hero = _sfc_main$1;
  _push(`<!--[--><div class="ma-n4">`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(`</div><div class="mt-10"><p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat dolores adipisci quidem veritatis sint delectus corporis rem! Accusantium alias quidem incidunt voluptatem laudantium odio. Ullam soluta expedita necessitatibus aliquam consectetur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis accusamus possimus molestiae labore consequuntur obcaecati ipsum a non natus laborum, recusandae maiores! Ratione dignissimos alias nulla, soluta provident similique voluptates. Officia quis et amet sit repellendus aliquid, saepe sunt temporibus deleniti earum molestiae eveniet nisi doloribus cumque nulla rerum aut quidem, quam aperiam ratione sed corrupti. Veniam, quibusdam sint. Laboriosam eius dignissimos hic neque excepturi ad numquam magni dolores impedit cum nesciunt soluta, veniam nobis necessitatibus architecto sint odio ullam debitis. Itaque pariatur distinctio quod tenetur maxime sapiente et sit odio tempore delectus, nostrum modi earum ab rem alias nemo deserunt, reprehenderit dolorem ad exercitationem id doloribus eum facilis. Exercitationem odit placeat, quisquam quasi beatae alias unde nulla consequuntur adipisci animi eligendi illo eius, laborum error dolores obcaecati sint ea quibusdam facilis aperiam molestias doloremque atque mollitia aspernatur! Reiciendis sunt beatae doloremque nisi distinctio! Fugiat voluptatibus neque incidunt magnam, earum eum sunt laboriosam aperiam nemo alias minus cumque voluptas sapiente laborum dicta quibusdam libero doloribus harum. Voluptatem, quidem quisquam ipsa voluptatibus voluptas harum laboriosam, praesentium voluptatum ad blanditiis animi. Saepe facilis illum ipsa blanditiis. Magnam facere impedit ipsum quidem ipsam similique suscipit sint laboriosam dolor quia! Aliquid exercitationem, pariatur nobis tempore architecto voluptatibus quam, porro incidunt voluptates tempora magni eos placeat unde nesciunt voluptatem explicabo qui ipsa illo veniam eveniet praesentium dolorum vero. Sequi quo sint eos porro enim eum optio voluptates aspernatur voluptate! Veniam, ea ad! Numquam vero molestias unde excepturi magni consequuntur ipsum doloremque laboriosam corrupti? Dicta amet veniam dolore aliquid, consectetur tempore odio expedita eos numquam maiores sint ipsum officiis atque possimus vitae quasi asperiores, fugit obcaecati. Neque suscipit atque veritatis eligendi! Accusantium quibusdam, molestias nesciunt, earum iusto ea dolore impedit et pariatur illo, vel quas consequatur! Repudiandae tempora fuga, perferendis assumenda inventore ex cum sint, magni veniam voluptatem molestias, placeat totam impedit. Sapiente odit dolor sed earum facilis harum non vitae molestias eveniet explicabo. Quisquam, ipsa quas voluptates voluptas quae distinctio consectetur, corrupti magni dolore assumenda nesciunt exercitationem aliquam possimus et praesentium error nostrum rem? Quaerat earum aperiam dicta quasi omnis corporis, explicabo molestias a magni deserunt culpa quas laboriosam officiis illo adipisci aliquam! Expedita illo tenetur quaerat repellendus nam sit magnam possimus totam molestiae reprehenderit pariatur vitae eligendi exercitationem saepe minus amet, officiis ullam provident nisi. Sit blanditiis laboriosam cupiditate placeat similique possimus architecto ipsum, ut quasi aspernatur minus nihil aliquam incidunt quas, deleniti odio veniam ullam ipsa illum eligendi atque officiis officia excepturi? Repellendus laudantium dolore veritatis, consequuntur eos velit corporis iusto blanditiis mollitia explicabo dolor, odio, suscipit vel? A facere, sunt porro sapiente incidunt ipsam rem accusamus maxime natus, esse suscipit maiores commodi laboriosam. Omnis aut ipsa quos natus sunt eveniet, ut porro. Molestiae quas laboriosam magnam. Officia illum nisi unde eveniet explicabo voluptate neque, iure asperiores saepe voluptatibus, dignissimos animi nulla, ex atque nesciunt. Alias, autem? Id, cum? Ex sapiente cupiditate fugit dolores doloribus! Neque doloremque doloribus esse laborum incidunt repellendus dolorum, explicabo ipsum voluptatibus! Optio deserunt incidunt vitae cum dignissimos veritatis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis accusamus possimus molestiae labore consequuntur obcaecati ipsum a non natus laborum, recusandae maiores! Ratione dignissimos alias nulla, soluta provident similique voluptates. Officia quis et amet sit repellendus aliquid, saepe sunt temporibus deleniti earum molestiae eveniet nisi doloribus cumque nulla rerum aut quidem, quam aperiam ratione sed corrupti. Veniam, quibusdam sint. Laboriosam eius dignissimos hic neque excepturi ad numquam magni dolores impedit cum nesciunt soluta, veniam nobis necessitatibus architecto sint odio ullam debitis. Itaque pariatur distinctio quod tenetur maxime sapiente et sit odio tempore delectus, nostrum modi earum ab rem alias nemo deserunt, reprehenderit dolorem ad exercitationem id doloribus eum facilis. Exercitationem odit placeat, quisquam quasi beatae alias unde nulla consequuntur adipisci animi eligendi illo eius, laborum error dolores obcaecati sint ea quibusdam facilis aperiam molestias doloremque atque mollitia aspernatur! Reiciendis sunt beatae doloremque nisi distinctio! Fugiat voluptatibus neque incidunt magnam, earum eum sunt laboriosam aperiam nemo alias minus cumque voluptas sapiente laborum dicta quibusdam libero doloribus harum. Voluptatem, quidem quisquam ipsa voluptatibus voluptas harum laboriosam, praesentium voluptatum ad blanditiis animi. Saepe facilis illum ipsa blanditiis. Magnam facere impedit ipsum quidem ipsam similique suscipit sint laboriosam dolor quia! Aliquid exercitationem, pariatur nobis tempore architecto voluptatibus quam, porro incidunt voluptates tempora magni eos placeat unde nesciunt voluptatem explicabo qui ipsa illo veniam eveniet praesentium dolorum vero. Sequi quo sint eos porro enim eum optio voluptates aspernatur voluptate! Veniam, ea ad! Numquam vero molestias unde excepturi magni consequuntur ipsum doloremque laboriosam corrupti? Dicta amet veniam dolore aliquid, consectetur tempore odio expedita eos numquam maiores sint ipsum officiis atque possimus vitae quasi asperiores, fugit obcaecati. Neque suscipit atque veritatis eligendi! Accusantium quibusdam, molestias nesciunt, earum iusto ea dolore impedit et pariatur illo, vel quas consequatur! Repudiandae tempora fuga, perferendis assumenda inventore ex cum sint, magni veniam voluptatem molestias, placeat totam impedit. Sapiente odit dolor sed earum facilis harum non vitae molestias eveniet explicabo. Quisquam, ipsa quas voluptates voluptas quae distinctio consectetur, corrupti magni dolore assumenda nesciunt exercitationem aliquam possimus et praesentium error nostrum rem? Quaerat earum aperiam dicta quasi omnis corporis, explicabo molestias a magni deserunt culpa quas laboriosam officiis illo adipisci aliquam! Expedita illo tenetur quaerat repellendus nam sit magnam possimus totam molestiae reprehenderit pariatur vitae eligendi exercitationem saepe minus amet, officiis ullam provident nisi. Sit blanditiis laboriosam cupiditate placeat similique possimus architecto ipsum, ut quasi aspernatur minus nihil aliquam incidunt quas, deleniti odio veniam ullam ipsa illum eligendi atque officiis officia excepturi? Repellendus laudantium dolore veritatis, consequuntur eos velit corporis iusto blanditiis mollitia explicabo dolor, odio, suscipit vel? A facere, sunt porro sapiente incidunt ipsam rem accusamus maxime natus, esse suscipit maiores commodi laboriosam. Omnis aut ipsa quos natus sunt eveniet, ut porro. Molestiae quas laboriosam magnam. Officia illum nisi unde eveniet explicabo voluptate neque, iure asperiores saepe voluptatibus, dignissimos animi nulla, ex atque nesciunt. Alias, autem? Id, cum? Ex sapiente cupiditate fugit dolores doloribus! Neque doloremque doloribus esse laborum incidunt repellendus dolorum, explicabo ipsum voluptatibus! Optio deserunt incidunt vitae cum dignissimos veritatis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis accusamus possimus molestiae labore consequuntur obcaecati ipsum a non natus laborum, recusandae maiores! Ratione dignissimos alias nulla, soluta provident similique voluptates. Officia quis et amet sit repellendus aliquid, saepe sunt temporibus deleniti earum molestiae eveniet nisi doloribus cumque nulla rerum aut quidem, quam aperiam ratione sed corrupti. Veniam, quibusdam sint. Laboriosam eius dignissimos hic neque excepturi ad numquam magni dolores impedit cum nesciunt soluta, veniam nobis necessitatibus architecto sint odio ullam debitis. Itaque pariatur distinctio quod tenetur maxime sapiente et sit odio tempore delectus, nostrum modi earum ab rem alias nemo deserunt, reprehenderit dolorem ad exercitationem id doloribus eum facilis. Exercitationem odit placeat, quisquam quasi beatae alias unde nulla consequuntur adipisci animi eligendi illo eius, laborum error dolores obcaecati sint ea quibusdam facilis aperiam molestias doloremque atque mollitia aspernatur! Reiciendis sunt beatae doloremque nisi distinctio! Fugiat voluptatibus neque incidunt magnam, earum eum sunt laboriosam aperiam nemo alias minus cumque voluptas sapiente laborum dicta quibusdam libero doloribus harum. Voluptatem, quidem quisquam ipsa voluptatibus voluptas harum laboriosam, praesentium voluptatum ad blanditiis animi. Saepe facilis illum ipsa blanditiis. Magnam facere impedit ipsum quidem ipsam similique suscipit sint laboriosam dolor quia! Aliquid exercitationem, pariatur nobis tempore architecto voluptatibus quam, porro incidunt voluptates tempora magni eos placeat unde nesciunt voluptatem explicabo qui ipsa illo veniam eveniet praesentium dolorum vero. Sequi quo sint eos porro enim eum optio voluptates aspernatur voluptate! Veniam, ea ad! Numquam vero molestias unde excepturi magni consequuntur ipsum doloremque laboriosam corrupti? Dicta amet veniam dolore aliquid, consectetur tempore odio expedita eos numquam maiores sint ipsum officiis atque possimus vitae quasi asperiores, fugit obcaecati. Neque suscipit atque veritatis eligendi! Accusantium quibusdam, molestias nesciunt, earum iusto ea dolore impedit et pariatur illo, vel quas consequatur! Repudiandae tempora fuga, perferendis assumenda inventore ex cum sint, magni veniam voluptatem molestias, placeat totam impedit. Sapiente odit dolor sed earum facilis harum non vitae molestias eveniet explicabo. Quisquam, ipsa quas voluptates voluptas quae distinctio consectetur, corrupti magni dolore assumenda nesciunt exercitationem aliquam possimus et praesentium error nostrum rem? Quaerat earum aperiam dicta quasi omnis corporis, explicabo molestias a magni deserunt culpa quas laboriosam officiis illo adipisci aliquam! Expedita illo tenetur quaerat repellendus nam sit magnam possimus totam molestiae reprehenderit pariatur vitae eligendi exercitationem saepe minus amet, officiis ullam provident nisi. Sit blanditiis laboriosam cupiditate placeat similique possimus architecto ipsum, ut quasi aspernatur minus nihil aliquam incidunt quas, deleniti odio veniam ullam ipsa illum eligendi atque officiis officia excepturi? Repellendus laudantium dolore veritatis, consequuntur eos velit corporis iusto blanditiis mollitia explicabo dolor, odio, suscipit vel? A facere, sunt porro sapiente incidunt ipsam rem accusamus maxime natus, esse suscipit maiores commodi laboriosam. Omnis aut ipsa quos natus sunt eveniet, ut porro. Molestiae quas laboriosam magnam. Officia illum nisi unde eveniet explicabo voluptate neque, iure asperiores saepe voluptatibus, dignissimos animi nulla, ex atque nesciunt. Alias, autem? Id, cum? Ex sapiente cupiditate fugit dolores doloribus! Neque doloremque doloribus esse laborum incidunt repellendus dolorum, explicabo ipsum voluptatibus! Optio deserunt incidunt vitae cum dignissimos veritatis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis accusamus possimus molestiae labore consequuntur obcaecati ipsum a non natus laborum, recusandae maiores! Ratione dignissimos alias nulla, soluta provident similique voluptates. Officia quis et amet sit repellendus aliquid, saepe sunt temporibus deleniti earum molestiae eveniet nisi doloribus cumque nulla rerum aut quidem, quam aperiam ratione sed corrupti. Veniam, quibusdam sint. Laboriosam eius dignissimos hic neque excepturi ad numquam magni dolores impedit cum nesciunt soluta, veniam nobis necessitatibus architecto sint odio ullam debitis. Itaque pariatur distinctio quod tenetur maxime sapiente et sit odio tempore delectus, nostrum modi earum ab rem alias nemo deserunt, reprehenderit dolorem ad exercitationem id doloribus eum facilis. Exercitationem odit placeat, quisquam quasi beatae alias unde nulla consequuntur adipisci animi eligendi illo eius, laborum error dolores obcaecati sint ea quibusdam facilis aperiam molestias doloremque atque mollitia aspernatur! Reiciendis sunt beatae doloremque nisi distinctio! Fugiat voluptatibus neque incidunt magnam, earum eum sunt laboriosam aperiam nemo alias minus cumque voluptas sapiente laborum dicta quibusdam libero doloribus harum. Voluptatem, quidem quisquam ipsa voluptatibus voluptas harum laboriosam, praesentium voluptatum ad blanditiis animi. Saepe facilis illum ipsa blanditiis. Magnam facere impedit ipsum quidem ipsam similique suscipit sint laboriosam dolor quia! Aliquid exercitationem, pariatur nobis tempore architecto voluptatibus quam, porro incidunt voluptates tempora magni eos placeat unde nesciunt voluptatem explicabo qui ipsa illo veniam eveniet praesentium dolorum vero. Sequi quo sint eos porro enim eum optio voluptates aspernatur voluptate! Veniam, ea ad! Numquam vero molestias unde excepturi magni consequuntur ipsum doloremque laboriosam corrupti? Dicta amet veniam dolore aliquid, consectetur tempore odio expedita eos numquam maiores sint ipsum officiis atque possimus vitae quasi asperiores, fugit obcaecati. Neque suscipit atque veritatis eligendi! Accusantium quibusdam, molestias nesciunt, earum iusto ea dolore impedit et pariatur illo, vel quas consequatur! Repudiandae tempora fuga, perferendis assumenda inventore ex cum sint, magni veniam voluptatem molestias, placeat totam impedit. Sapiente odit dolor sed earum facilis harum non vitae molestias eveniet explicabo. Quisquam, ipsa quas voluptates voluptas quae distinctio consectetur, corrupti magni dolore assumenda nesciunt exercitationem aliquam possimus et praesentium error nostrum rem? Quaerat earum aperiam dicta quasi omnis corporis, explicabo molestias a magni deserunt culpa quas laboriosam officiis illo adipisci aliquam! Expedita illo tenetur quaerat repellendus nam sit magnam possimus totam molestiae reprehenderit pariatur vitae eligendi exercitationem saepe minus amet, officiis ullam provident nisi. Sit blanditiis laboriosam cupiditate placeat similique possimus architecto ipsum, ut quasi aspernatur minus nihil aliquam incidunt quas, deleniti odio veniam ullam ipsa illum eligendi atque officiis officia excepturi? Repellendus laudantium dolore veritatis, consequuntur eos velit corporis iusto blanditiis mollitia explicabo dolor, odio, suscipit vel? A facere, sunt porro sapiente incidunt ipsam rem accusamus maxime natus, esse suscipit maiores commodi laboriosam. Omnis aut ipsa quos natus sunt eveniet, ut porro. Molestiae quas laboriosam magnam. Officia illum nisi unde eveniet explicabo voluptate neque, iure asperiores saepe voluptatibus, dignissimos animi nulla, ex atque nesciunt. Alias, autem? Id, cum? Ex sapiente cupiditate fugit dolores doloribus! Neque doloremque doloribus esse laborum incidunt repellendus dolorum, explicabo ipsum voluptatibus! Optio deserunt incidunt vitae cum dignissimos veritatis! </p></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.41bcfae4.mjs.map
