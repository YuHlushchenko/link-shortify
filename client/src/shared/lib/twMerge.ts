import { extendTailwindMerge } from 'tailwind-merge'

// Register custom @theme text-* tokens so twMerge knows they belong to the
// font-size conflict group — without this, text-h1 and text-h1-gradient are
// treated as the same group and twMerge drops text-h1 in favour of the last one.
export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['h1', 'h2', 'h3', 'h4'] }],
    },
  },
})
