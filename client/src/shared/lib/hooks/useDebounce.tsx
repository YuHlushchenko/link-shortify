/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * allows to cancel the previous call of the function until the delay expires
 * @param callback
 * @param delay - delay in ms
 */

import { useCallback, useRef } from 'react'

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  // React 19 requires an initial value for useRef
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay],
  )
}
