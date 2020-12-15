const solution = require('./04_remote-data')

test('all users have been accounted for', async () => {
  // Arrange
  const expected = 10

  // Act
  const actual = await solution()

  // Assert
  expect(actual.length).toBe(expected)
})


////// new test cases ////////////////////

test(' username type check, not to be', async () => {
  // Arrange
  const expected = 'int'

  // Act
  const actual = await solution()

  // Assert
  expect(typeof(actual[0].username)).not.toBe(expected)
})

test(' username type check, to be', async () => {
  // Arrange
  const expected = 'string'

  // Act
  const actual = await solution()

  // Assert
  expect(typeof(actual[0].username)).toBe(expected)
})
