<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Breadcrumbs',
          edit: 'BreadcrumbsView',
          component: 'breadcrumbs',
          desc: `
            <p>
              The <code>v-breadcrumbs</code> component is a navigational helper for pages. It can accept a <strong>Material Icons</strong> icon or characters as a divider. An array of objects containing the fields <em>href</em>, <em>text</em> and optional <em>disabled</em> can be passed to the <strong>items</strong> property of the component.  Additionally, a regular slot exists for more control of the breadcrumbs, either utilizing <code>v-breadcrumb</code> or other custom markup.
            </p>
          `,
          examples: [
            { header: 'Text dividers', file: 'breadcrumbs/1', desc: `By default, breadcrumbs use a text divider. This can be any string.` },
            { header: 'Icon dividers', file: 'breadcrumbs/2', desc: `For the icon variant, breadcrumbs can use any icon in Material Design Icons.` }
          ],
          props: {
            'v-breadcrumbs': [
              [
                'divider',
                'String',
                '/',
                'Specifies the dividing character'
              ],
              [
                'icon',
                'Boolean',
                'False',
                'Specifies that the divider is an icon'
              ]
            ],
            'v-breadcrumbs-item': [
              [
                'append',
                'Boolean',
                'False',
                'Vue Router router-link prop'
              ],
              [
                'disabled',
                'Boolean',
                'False',
                'List tile is disabled'
              ],
              [
                'href',
                'String, Object',
                'javascript:;',
                'For router, this is passed to the "to" prop'
              ],
              [
                'to',
                'String, Object',
                'javascript:;',
                'For router, this is passed to the "to" prop'
              ],
              [
                'nuxt',
                'Boolean',
                'False',
                'Specifies the link is a nuxt-link'
              ],
              [
                'replace',
                'Boolean',
                'False',
                'Vue Router router-link prop'
              ],
              [
                'router',
                'Boolean',
                'False',
                'Designates whether the list tiles will be a router-link'
              ],
              [
                'tag',
                'String',
                'a',
                'Use a custom tag for the list tile'
              ]
            ]
          }
        }
      }
    }
  }
</script>
