import { expect } from 'vitest'
import { allCustomMatcherWithAliases } from 'aws-sdk-client-mock-vitest'

expect.extend(allCustomMatcherWithAliases)
