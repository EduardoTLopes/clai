import {expect, test} from '@oclif/test'

describe('gh/pr/create', () => {
  test
  .stdout()
  .command(['gh/pr/create'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['gh/pr/create', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
