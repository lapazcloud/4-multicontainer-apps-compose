import { Vote } from '.'

let vote

beforeEach(async () => {
  vote = await Vote.create({ voter: 'test', pollOption: 'test', poll: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = vote.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(vote.id)
    expect(view.voter).toBe(vote.voter)
    expect(view.pollOption).toBe(vote.pollOption)
    expect(view.poll).toBe(vote.poll)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = vote.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(vote.id)
    expect(view.voter).toBe(vote.voter)
    expect(view.pollOption).toBe(vote.pollOption)
    expect(view.poll).toBe(vote.poll)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
