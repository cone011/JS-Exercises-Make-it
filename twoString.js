function twoString(str1, str2) {
  let letter1 = {};
  let letter2 = {};

  str1.split("").forEach((item) => {
    if (!letter1[item]) {
      letter1[item] = true;
    }
  });

  str2.split("").forEach((item) => {
    if (!letter2[item]) {
      letter2[item] = true;
    }
  });

  if (Object.keys(letter1).length !== Object.keys(letter2).length) return "NO";

  for (let key in letter1) {
    if (letter1[key] !== letter2[key]) return "NO";
  }

  return "YES";
}

twoString("hello", "eellloh"); //YES
twoString("aa", "ab"); //NO
twoString("aaa", "aba"); //NO
twoString("abcd", "daabbcc"); //YES
twoString("abcd", "aefgh"); //NO
