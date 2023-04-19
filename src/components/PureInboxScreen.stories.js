import PureInboxScreen from './PureInboxScreen.vue'
import { fireEvent, within } from '@storybook/testing-library'
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

export const WithInteractions = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'))
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'))
  }
}
