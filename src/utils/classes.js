import { isFunction } from 'lodash-fp'

export function mixin(instance, toMixin) {
  Object.keys(toMixin).forEach(key => {
    if (isFunction(toMixin[key])) {
      instance[key] = toMixin[key].bind(instance);
    }
  })
}
