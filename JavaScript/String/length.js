function shortcut(s1, s2) {
  // your code here 
	if (s1.length === 0 || s2.length === 0) {
    return '';
  }
  return s1[0] +" "+ s2[0];
}

console.log(shortcut("Sena","Com"));
