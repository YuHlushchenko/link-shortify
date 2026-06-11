## Tests

### Unit tests (Jest 30 + React Testing Library)

```bash
yarn test:unit          # run all tests
yarn test:unit:ok       # update snapshots after intentional changes
```

Test files live next to the components they test (`*.test.tsx`).
Config: `config/jest/jest.config.ts`

### Notes

- `next-intl` is mocked — it's ESM-only and can't be transformed by Jest
- SVGs are stubbed via `fileMock.ts` (returns a string path)
- `next/image` is mocked to render a plain `<img>`
