import PureInboxScreen from './PureInboxScreen.vue'

export default {
  component: PureInboxScreen,
  title: 'PureInboxScreen',
  tags: ['autodocs']
}

// 👇 will render but display as empty tasks. Error is shown in the AutoDocs entry in the sidebar
export const Default = {}

export const Error = {
  args: { error: true }
}
