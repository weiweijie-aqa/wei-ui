import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'

export const openDialog = (options) => {
  const { title, content, onCancel, onSubmit, closeOnClickOverlay } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible) => {
            if (!newVisible) {
              app.unmount()
              div.remove()
            }
          },
          onSubmit: onSubmit ? onSubmit : null,
          onCancel: onCancel ? onCancel : null,
          closeOnClickOverlay: closeOnClickOverlay ? closeOnClickOverlay : false,
        },
        {
          title: () => title,
          content: () => content,
        }
      )
    },
  })
  app.mount(div)
}
