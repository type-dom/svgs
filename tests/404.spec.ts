// Note: This is a simple test file. Oxlint will lint this file for code quality.
// For actual testing, consider using a test runner alongside oxlint.
import { Td404Svg } from '../src/lib/common/404';

// Test case: Td404Svg should work
const svg404 = new Td404Svg();
const expectedClassName = 'Td404Svg';
if (svg404.className !== expectedClassName) {
  throw new Error(`Expected className to be '${expectedClassName}', but got '${svg404.className}'`);
}
