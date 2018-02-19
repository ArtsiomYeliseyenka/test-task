import { email, password, ip, name } from './validation';

describe('Email', () => {
  test(' validation should be correct', () => {
    expect(email('email@example.com')).toBe(true);
    expect(email('firstname.lastname@example.com')).toBe(true);
    expect(email('email@subdomain.example.com')).toBe(true);
    expect(email('firstname+lastname@example.com')).toBe(true);
    expect(email('email@123.123.123.123')).toBe(true);
    expect(email('1234567890@example.com')).toBe(true);
    expect(email('email@example-one.com')).toBe(true);
    expect(email('_______@example.com')).toBe(true);
    expect(email('firstname-lastname@example.com')).toBe(true);
    expect(email('email@example.co.jp')).toBe(true);
    expect(email('.email@example.com')).toBe(true);
  });

  test(' validation should be not correct', () => {
    expect(email('plainaddress')).toBe(false);
    expect(email('#@%^%#$@#$@#.com')).toBe(false);
    expect(email('@example.com')).toBe(false);
    expect(email('Joe Smith <email@example.com>')).toBe(false);
    expect(email('email.example.com')).toBe(false);
    expect(email('email@example@example.com')).toBe(false);
    expect(email('email@example.com (Joe Smith)')).toBe(false);
    expect(email('email@example')).toBe(false);
    expect(email('あいうえお@example.com')).toBe(false);
  });
});

describe('Password', () => {
  test('validation should be correct', () => {
    expect(password('123456')).toBe(true);
    expect(password('123456789012345')).toBe(true);
    expect(password('Aa1@3@.?n&()*^')).toBe(true);
    expect(password('firstname+last')).toBe(true);
  });
  test('validation should be not correct', () => {
    expect(password('1')).toBe(false);
    expect(password('12')).toBe(false);
    expect(password('123')).toBe(false);
    expect(password('12345678901234567890123456')).toBe(false);
  });
});

describe('Name', () => {
  test('validation should be correct', () => {
    expect(name('abc')).toBe(true);
  });
  test('Validation should not be correct', () => {
    expect(name('')).toBe(false);
    expect(name('name#')).toBe(false);
    expect(name('Hello 世界')).toBe(false);
  });
});

describe('IP', () => {
  test('validation should be correct', () => {
    expect(ip('0.0.0.0')).toBe(true);
    expect(ip('255.255.255.255')).toBe(true);
    expect(ip('1.22.99.200')).toBe(true);
  });
  test('Validation should not be correct', () => {
    expect(ip('')).toBe(false);
    expect(ip('256.256.256.256')).toBe(false);
    expect(ip('0000.1111.1111.1222')).toBe(false);
    expect(ip('000111.222333')).toBe(false);
  });
});
