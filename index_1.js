function anotherInsecurePassword() {
  // GOOD: use a cryptographically secure random suffix
  var suffix = window.crypto.getRandomValues(new Uint32Array(1))[0];
  var password = "sssAAAA" + suffix;
  return password;
}