<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    name: 'buttons-view',

    data () {
      return {
        doc: {
          component: 'buttons',
          edit: 'ButtonsView',
          title: 'Button',
          desc: `
            <p>
              The <code>v-btn</code> component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color. Remember that all event captures must be done using the <strong>.native</strong> modifier.
            </p>
          `,
          examples: [
            { header: "Flat", file: "buttons/1", desc: ``},
            { header: "Raised", file: "buttons/2", desc: ``},
            { header: "Button Dropdown", file: "buttons/3", desc: ``},
            { header: "Button Dropdown Variants", file: "buttons/4", desc: ``},
            { header: "Button Toggle", file: "buttons/5", desc: ``},
            { header: "Icon", file: "buttons/6", desc: ``},
            { header: "App Bar", file: "buttons/7", desc: ``},
            { header: "Floating", file: "buttons/8", desc: ``},
            { header: "Loaders", file: "buttons/9", desc: ``},
            { header: "Sizing", file: "buttons/10", desc: ``},
            { header: "Outline", file: "buttons/11", desc: ``},
            { header: "Round", file: "buttons/12", desc: ``},
            { header: "Block", file: "buttons/13", desc: ``},
          ],
          props: {
            'v-btn': {
              params: [
                [
                  'active-class',
                  'String',
                  'btn--active',
                  'Applies the .btn--active class. This does not alter the button style, but can be used for hooking into.'
                ],
                [
                  'dark',
                  'Boolean',
                  'False',
                  'Applies the dark theme (default light)'
                ],
                [
                  'block',
                  'Boolean',
                  'False',
                  'Button will have 100% width'
                ],
                [
                  'flat',
                  'Boolean',
                  'False',
                  'Applies the flat style'
                ],
                [
                  'floating',
                  'Boolean',
                  'False',
                  'Applies the floating / round style'
                ],
                [
                  'icon',
                  'Boolean',
                  'False',
                  'Designates the button as icon - round and flat'
                ],
                [
                  'small',
                  'Boolean',
                  'False',
                  'Small size button',
                ],
                [
                  'large',
                  'Boolean',
                  'False',
                  'Large size button'
                ],
                [
                  'loading',
                  'Boolean',
                  'False',
                  'Adds a loading icon animation'
                ],
                [
                  'outline',
                  'Boolean',
                  'False',
                  'Button will have an outline'
                ],
                [
                  'round',
                  'Boolean',
                  'False',
                  'Button will be round on the sides'
                ],
                [
                  'raised',
                  'Boolean',
                  'True',
                  'Applies the raised style'
                ],
                [
                  'ripple',
                  'Boolean',
                  'True',
                  'Applies the ripple directive',
                ],
                [
                  'type',
                  'String',
                  'button',
                  'Sets the buttons type attribute',
                ],
                [
                  'tag',
                  'String',
                  'button',
                  'Change the element type',
                ],
                [
                  'primary',
                  'Boolean',
                  'False',
                  'Applies the "primary" context',
                ],
                [
                  'secondary',
                  'Boolean',
                  'False',
                  'Applies the "secondary" context',
                ],
                [
                  'success',
                  'Boolean',
                  'False',
                  'Applies the "success" context',
                ],
                [
                  'info',
                  'Boolean',
                  'False',
                  'Applies the "info" context',
                ],
                [
                  'warning',
                  'Boolean',
                  'False',
                  'Applies the "warning" context',
                ],
                [
                  'error',
                  'Boolean',
                  'False',
                  'Applies the "error" context',
                ]
              ],
              model: {
                types: ['Boolean'],
                default: 'False'
              },
              router: true
            },
            'v-btn-dropdown': {
              params: [
                [
                  'light',
                  'Boolean',
                  'True',
                  'Applies the light theme'
                ],
                [
                  'dark',
                  'Boolean',
                  'False',
                  'Applies the dark theme'
                ],
                [
                  'editable',
                  'Boolean',
                  'False',
                  'Makes the value editable'
                ],
                [
                  'options',
                  'Array',
                  '[]',
                  'Option Props: [text, icon]'
                ],
                [
                  'max-height',
                  'String, Number',
                  '200',
                  'Designate the maximum height of the dropdown'
                ],
                [
                  'overflow',
                  'Boolean',
                  'False',
                  'Designates the dropdown as an overflow btn'
                ],
                [
                  'label',
                  'String',
                  'Select',
                  'Sets placeholder text if no model value present'
                ],
                [
                  'segmented',
                  'Boolean',
                  'False',
                  'Designates the dropdown as a segmented btn'
                ]
              ],
              model: {
                types: ['String', 'Object'],
                default: '-',
                description: 'Sets selected value'
              }
            },
            'v-btn-toggle': {
              params: [
                [
                  'options',
                  'Array',
                  '[]',
                  'Option Props: [text, icon, value]'
                ],
                [
                  'multiple',
                  'Boolean',
                  'False',
                  'Designates the toggle accepts and returns an array'
                ]
              ],
              model: {
                types: ['String'],
                default: '-',
                description: 'Sets mode: toggle_exclusive, toggle_multiple, toggle_none, toggle_one, text, icon'
              }
            }
          },
          slots: {
            'v-btn': {
              default: true,
              params: [
                [
                  'loader',
                  'Used for specifying custom loader'
                ]
              ]
            }
          },
          events: {
            'v-btn-dropdown': {
              events: [
                ['input', 'String, Number', 'Selected value']
              ]
            },
            'v-btn-toggle': {
              events: [
                ['input', 'String, Number', 'Selected button(s)']
              ]
            },
          }
        }
      }
    }
  }
</script>
