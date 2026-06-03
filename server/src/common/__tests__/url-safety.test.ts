import { describe, it, expect } from 'vitest'
import { isPrivateUrl } from '../url-safety'

const url = (href: string) => new URL(href)

describe('isPrivateUrl', () => {
  describe('private addresses → true', () => {
    it.each([
      ['localhost', 'http://localhost/'],
      ['LOCALHOST (case-insensitive)', 'http://LOCALHOST/'],
      ['127.0.0.1', 'http://127.0.0.1/'],
      ['127.x.x.x range', 'http://127.255.255.255/'],
      ['10.0.0.1 (class A)', 'http://10.0.0.1/'],
      ['10.255.255.255 (class A upper)', 'http://10.255.255.255/'],
      ['172.16.0.1 (class B lower boundary)', 'http://172.16.0.1/'],
      ['172.31.255.255 (class B upper boundary)', 'http://172.31.255.255/'],
      ['172.20.0.1 (class B middle)', 'http://172.20.0.1/'],
      ['192.168.0.1 (class C)', 'http://192.168.0.1/'],
      ['192.168.255.255 (class C upper)', 'http://192.168.255.255/'],
      ['169.254.1.1 (link-local)', 'http://169.254.1.1/'],
      ['0.0.0.0 (unspecified)', 'http://0.0.0.0/'],
      ['::1 (IPv6 loopback)', 'http://[::1]/'],
      ['fc00::1 (IPv6 ULA fc)', 'http://[fc00::1]/'],
      ['fd00::1 (IPv6 ULA fd)', 'http://[fd00::1]/'],
      ['fdab::1 (IPv6 ULA fd variant)', 'http://[fdab::1]/'],
    ])('%s', (_, href) => {
      expect(isPrivateUrl(url(href))).toBe(true)
    })
  })

  describe('public addresses → false', () => {
    it.each([
      ['google.com', 'http://google.com/'],
      ['example.com', 'http://example.com/'],
      ['8.8.8.8 (public IP)', 'http://8.8.8.8/'],
      ['11.0.0.1 (not class A private)', 'http://11.0.0.1/'],
      ['172.15.0.1 (below class B range)', 'http://172.15.0.1/'],
      ['172.32.0.1 (above class B range)', 'http://172.32.0.1/'],
      ['192.167.0.1 (not class C)', 'http://192.167.0.1/'],
      ['192.169.0.1 (not class C)', 'http://192.169.0.1/'],
    ])('%s', (_, href) => {
      expect(isPrivateUrl(url(href))).toBe(false)
    })
  })
})
