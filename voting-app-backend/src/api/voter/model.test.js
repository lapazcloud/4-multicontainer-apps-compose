import { Voter } from '.'

let voter

beforeEach(async () => {
  voter = await Voter.create({ username: 'test', email: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = voter.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(voter.id)
    expect(view.username).toBe(voter.username)
    expect(view.email).toBe(voter.email)
    expect(view.description).toBe(voter.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = voter.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(voter.id)
    expect(view.username).toBe(voter.username)
    expect(view.email).toBe(voter.email)
    expect(view.description).toBe(voter.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
