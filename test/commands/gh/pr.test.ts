import {expect, test} from '@oclif/test'

describe('gh/pr', () => {
  test
  .stdout()
  .command(['gh/pr'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['gh/pr', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
