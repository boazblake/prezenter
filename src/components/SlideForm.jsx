const m = require('mithril')
const marked = require('marked')
const {assoc,clone, fromPairs} = require('ramda');
const { v1  } = require('uuid')

const log = m => v => {console.log(m,v); return v}

import {setMockData} from './../store/data.js'
import UIButton from './ui/UIButton.jsx'


const saveSlide = (formDOM, position) => {
  let form = formDOM.querySelector('.form')
  const formData = new FormData(form)
  const newEntry = assoc('position',position,assoc('uuid',v1(),assoc('isEditing',false,assoc('isSelected',false,fromPairs(Array.from(formData.entries()))))))
  // console.log('entry', newEntry)
  setMockData(newEntry)
  form.reset()
}

const assignSlide = () => {
  let currentId = m.route.param('slideId')
  console.log('cur', currentId)
}


const previewText = (e, state) => {
   let currentId = m.route.param('slideId')
console.log('currentId', currentId)

  state.contents = 'ADD TEXT'
  if (e == undefined) return state
  state.contents = e.target.value
  return m.trust(marked(state.contents))
}

const load = (e, state) => {
  console.log(e, state)
  previewText(e, state)
}

const SlideForm = {
  oninit: load,
  oncreate: assignSlide,
  data:{
    isSelected:false,
    contents:'ADD TEXT'
  },
  reset: () => console.log(this),
  view: vnode =>
  <section class="columns">
      <form name="slide-form" id="slide-form" class="form column is-half">
        <label for="title" class="label">
          {`Slide Title`}
        </label>
        <input id="title" class="input" name="title" type="text" autocomplete="false" />

        <label for="contents" class="label">
          {`Slide Contents`}
        </label>
        <textarea id="text" class="textarea" onkeyup={e => previewText(e, vnode.state)} name="text"  autocomplete="false" />
        <UIButton action={dom => saveSlide(vnode.dom, vnode.attrs.list.length)} buttonName="Save" />
      </form>



      <section id="preview" class="column is-half">
        <h1 id="preview-title">PREVIEW ##</h1>
      <div id="preview-text">
        { m.trust(marked(vnode.state.contents || ''))}
      </div>
      </section>
    </section>

}

export default SlideForm
