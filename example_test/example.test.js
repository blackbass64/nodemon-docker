function exampleTestSum(a, b) {
    return a + b;
  }


  test('adds 1 + 2 to equal 3', () => {
    expect(exampleTestSum(1, 2)).toBe(3);
  }); 