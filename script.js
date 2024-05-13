//문제2
document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".title").innerHTML = "제목아니다";
});

//문제3
function sum(num1, num2) {
  console.log(num1 + num2);
}
// 함수 호출 예시
sum(3, 4);

//문제4
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  }
}

// 함수 호출 예시
isEvenOrOdd(8);

//문제5
const name = "수빈";
const age = "22";

console.log("이름:", name);
console.log("나이:", age);
