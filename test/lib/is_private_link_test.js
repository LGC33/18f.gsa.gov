const chai = require('chai')
const Token = require('markdown-it/lib/token')

const { expect } = chai

const { isPrivateLink } = require('../../lib/links')

describe('.isPrivateLink', () => {
  context('with a private domain', () => {
    const token = new Token()
    token.attrPush(['href', 'https://18f.slack.com/team'])
    it('returns true', async () => expect(isPrivateLink(token)).to.be.true)
  })

  context('with a public domain', () => {
    const token = new Token()
    token.attrPush(['href', 'https://example.com'])
    it('returns false', async () => expect(isPrivateLink(token)).to.be.false)
  })
})
