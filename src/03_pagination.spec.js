const { solution, data } = require('./03_pagination')

test('Test 1 - page 1, 5 items per page', () => {
  // Arrange
  const expected = ['a', 'b', 'c', 'd', 'e']

  // Act
  const actual = solution(1, 5, data)

  // Assert
  expect(actual).toEqual(expected)
})

test('Test 2 - page 2, 10 items per page', () => {
  // Arrange
  const expected = ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't']

  // Act
  const actual = solution(2, 10, data)

  // Assert
  expect(actual).toEqual(expected)
})

test('Test 3 - page 3, 10 items per page', () => {
  // Arrange
  const expected = ['u', 'v', 'w', 'x', 'y', 'z']
  // Act
  const actual = solution(3, 10, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 4 - page 9, 3 items per page', () => {
  // Arrange
  const expected = ['y', 'z']
  // Act
  const actual = solution(9, 3, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 5 - page 2, 25 items per page', () => {
  // Arrange
  const expected = ['z']
  // Act
  const actual = solution(2, 25, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 6 - page 4, 10 items per page', () => {
  // Arrange
  const expected = null
  // Act
  const actual = solution(4, 10, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 7 - page 0, 5 items per page', () => {
  // Arrange
  const expected = ['a', 'b', 'c', 'd', 'e']
  // Act
  const actual = solution(0, 5, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 8 - page -1, 5 items per page', () => {
  // Arrange
  const expected = ['a', 'b', 'c', 'd', 'e']
  // Act
  const actual = solution(-1, 5, data)
  // Assert
  expect(actual).toEqual(expected)
})
////// new test cases ////////////////////

test('Test 9 - page 1, 2 items per page', () => {
  // Arrange
  const expected = ['a', 'b']
  // Act
  const actual = solution(1, 2, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 10 - page 2, 20 items per page , , not equal', () => {
  // Arrange
  const expected = ['u', 'v','w','x','y']
  // Act
  const actual = solution(2, 20, data)
  // Assert
  expect(actual).not.toEqual(expected)
})