// @flow

import test from 'ava';
import surgeon, {
  subroutineAliasPreset
} from '../../src';

test('ra: reads element attribute', (t): void => {
  const x = surgeon({
    subroutines: subroutineAliasPreset
  });

  const subject = `
    <div class="foo">bar</div>
  `;

  const query = 'select .foo | ra class';

  t.true(x(query, subject) === 'foo');
});

test('s: selects a single element', (t): void => {
  const x = surgeon({
    subroutines: subroutineAliasPreset
  });

  const subject = `
    <div class="foo">bar</div>
  `;

  const query = 's .foo | read property textContent';

  t.true(x(query, subject) === 'bar');
});

test('sm: selects multiple elements', (t): void => {
  const x = surgeon({
    subroutines: subroutineAliasPreset
  });

  const subject = `
    <div class="foo">bar</div>
    <div class="foo">bar</div>
  `;

  const query = 'sm .foo | read property textContent';

  t.deepEqual(x(query, subject), ['bar', 'bar']);
});
