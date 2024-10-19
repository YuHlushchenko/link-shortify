/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * allows to cancel the previous call of the function until the delay expires
 * @param callback
 * @param delay - delay in ms
 */

import { MutableRefObject, useCallback, useRef } from 'react'

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>

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
