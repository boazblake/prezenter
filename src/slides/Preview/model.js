import { compose, lt, prop, gt, set, lensProp, subtract } from 'ramda'
import { log } from '../../services/index.js'

const orderOf = slide => prop('order', slide)

export const forGreater = removeSlide => checkSlide =>
  lt(orderOf(removeSlide), orderOf(checkSlide))

export const forLess = removeSlide => checkSlide =>
  gt(orderOf(removeSlide), orderOf(checkSlide))

export const reduceOrder = slide =>
  set(lensProp('order', slide), subtract(orderOf(slide), 1), slide)

const updateIsSelected = slide =>
  set(lensProp('isSelected', slide), false, slide)

const updateOrder = slide => set(lensProp('order', slide), 0, slide)

export const updateRemoveSlide = compose(
  Array.of,
  updateIsSelected,
  updateOrder
)
