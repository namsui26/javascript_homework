//1.클래스가 box인 div 태그 중 클릭된 div 태그에 clicked 클래스를 추가해보세요.
// 이벤트 핸들러 함수 정의
function handleClick(event) {
  // 클릭된 요소에 clicked 클래스 추가
  event.target.classList.add("clicked");
}

// 컨테이너 요소 찾기
const container = document.getElementById("container");

// 컨테이너에 클릭 이벤트 리스너 추가
container.addEventListener("click", handleClick);

//2.
function getSquare(number) {
  // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
  return number * number;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
