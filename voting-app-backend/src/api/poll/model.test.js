import { Poll } from '.'

let poll

beforeEach(async () => {
  poll = await Poll.create({ name: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = poll.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(poll.id)
    expect(view.name).toBe(poll.name)
    expect(view.description).toBe(poll.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = poll.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(poll.id)
    expect(view.name).toBe(poll.name)
    expect(view.description).toBe(poll.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
