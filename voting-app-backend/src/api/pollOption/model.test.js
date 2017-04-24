import { PollOption } from '.'

let pollOption

beforeEach(async () => {
  pollOption = await PollOption.create({ name: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = pollOption.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(pollOption.id)
    expect(view.name).toBe(pollOption.name)
    expect(view.description).toBe(pollOption.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = pollOption.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(pollOption.id)
    expect(view.name).toBe(pollOption.name)
    expect(view.description).toBe(pollOption.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
