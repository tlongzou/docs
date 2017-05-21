export default {
  functional: true,

  props: {
    first: Boolean
  },

  render (h, { data, props, children }) {
    data.class = 'display-1'
    data.style = {}

    if (props.first) {
      data.styles.marginTop = 0
    }

    return h('h2', data, children)
  }
}
