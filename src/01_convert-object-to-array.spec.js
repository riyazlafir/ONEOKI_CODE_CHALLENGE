const solution = require('./01_convert-object-to-array')

const generateData = () => {
  const expected = []
  const input = {}

  for (let index = 0; index < 100; index++) {
    const val = Math.random()
    input[`prop_${index}`] = val
    expected.push(val)
  }

  return { input, expected }
}

test('should convert an object into array of values', () => {
  // Arrange
  const input = { foo: 123, bar: 456, baz: 789 }
  const expected = [123, 456, 789]

  // Act
  const actual = solution(input)

  // Assert
  expect(actual).toEqual(expected)
})

test('should convert a dynamically created object to array', () => {
  // Arrange
  const { input, expected } = generateData()

  // Act
  const actual = solution(input)

  // Assert
  expect(actual).toEqual(expected)
})

///// new test cases ////////////

test('Test3 - should convert an object into array of values. Combination of string and integer.', () => {
  // Arrange
  const input = { name: "user one", mobilenumber: 2394456, address: "test address" }
  const expected = ["user one", 2394456, "test address"]

  // Act
  const actual = solution(input)

  // Assert
  expect(actual).toEqual(expected)
})

test('Test4 - should convert an object into array of values. Test not equal.', () => {
  // Arrange
  const input = { name: "user one", mobilenumber: 2394456, address: "test address" }
  const expected = ["user", 2394456, "test address"]

  // Act
  const actual = solution(input)

  // Assert
  expect(actual).not.toEqual(expected)
})