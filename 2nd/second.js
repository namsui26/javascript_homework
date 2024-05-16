//4. 1부터 10까지 숫자를 for문을 활용하여 출력해보세요.
//    - 3번 문제에서 생성한 **second.js** 파일의 하단에 코드를 작성하세요. (기존 코드 삭제 X)

//방법1
for (let i = 1; i < 11; i++) {
  console.log(i);
}

//방법2
function oneToTen() {
  let result = [];
  for (let i = 1; i < 11; i++) {
    result.push(i);
  }
  return result;
}

//5. 1부터 20까지 숫자 중 짝수만 출력하도록 코드를 작성해보세요.
//    - **second.js** 파일의 하단에 코드를 작성하세요. (기존 코드 삭제 X)
//방법1
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//방법2
function onlyEven() {
  let result = [];
  for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}

//6. 3초 후에 “**3초 후에 출력되는 텍스트입니다.**” 라는 콘솔로그가 출력되도록 코드를 작성해보세요.
//    - `setTimeout`을 활용하세요
setTimeout(function () {
  console.log("3초 후에 출력되는 텍스트입니다.");
}, 3000);
