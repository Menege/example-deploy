import { config } from '@vue/test-utils'
import { vi } from 'vitest'

config.global.mocks = {
  $route: {
    params: {}
  }
}

const mockIntersectionObserver = vi.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
})
window.IntersectionObserver = mockIntersectionObserver 