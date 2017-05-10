export default {
  functional: true,

  props: {
    first: Boolean
  },

  render (h, { props, children }) {
    const data = {
      'class': 'display-1',
      style: {}
    }

    if (props.first) {
      data.styles.marginTop = 0
    }

    return h('h2', data, children)
  }
}
