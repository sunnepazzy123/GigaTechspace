
function solution(S) {
  const n = S.length;
  console.log(n)

  for (let length = 0; length <= n; length++) {
    // for (let i = 0; i <= n - length; i++) {
    //   const substring = S.slice(i, i + length);
    //   console.log(substring, "substi")
    //   console.log(S.split(substring), "split")
    //   const count = S.split(substring).length - 1;
    //   if (count === 1) {
    //     return length;
    //   }
    // }
    console.log(length)
  }

  return -1;
}

console.log(solution("abaaba"));  // Output: 2
// console.log(solution("zyzyzyz"));  // Output: 5
// console.log(solution("aabbbabaaa"));  // Output: 3