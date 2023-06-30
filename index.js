let arrStr = [];
let strNum = "";
// Nhập vào số n
function addNum() {
  let addNumEl = document.getElementById("input-num").value;
  arrStr.push(addNumEl);
  let newString;
  for (let i = 0; i < arrStr.length; i++) {
    newString = arrStr[i];
  }
  if (arrStr.length < 2) {
    strNum = newString;
  } else {
    strNum = strNum + ", " + newString;
  }
  document.querySelector("#output-num").innerHTML = `Result: ${strNum}`;
  document.getElementById("input-num").value = "";
}

// Exe1: tính tổng số dương nhập vào
function exe1() {
  let sum = 0;
  let arrStrNums = strNum.split(", ");
  for (let i = 0; i < arrStrNums.length; ++i) {
    if (arrStrNums[i] > 0) {
      sum += arrStrNums[i] * 1;
    }
  }
  document.getElementById("output-exe1").innerHTML = `Tổng số dương: ${sum}`;
}

// Exe2: Đếm số dương
function exe2() {
  let arrStrNums = strNum.split(", ");
  let count = 0;
  for (let i = 0; i < arrStrNums.length; i++) {
    if (arrStrNums[i] > 0) {
      count++;
    }
  }
  document.getElementById("output-exe2").innerHTML = `Số dương: ${count}`;
}

// Exe3: Tìm số nhỏ nhất
function exe3() {
  let arrStrNums = strNum.split(", ");
  let arrNums = [];
  for (let i = 0; i < arrStrNums.length; i++) {
    arrNums.push(arrStrNums[i] * 1);
  }
  document.getElementById("output-exe3").innerHTML = `Số nhỏ nhất: ${Math.min(
    ...arrNums
  )}`;
}

// Exe4: Tìm số dương nhỏ nhất
function exe4() {
  let arrStrNums = strNum.split(", ");
  let arrNums = [];
  for (let i = 0; i < arrStrNums.length; i++) {
    if (arrStrNums[i] * 1 > 0) {
      arrNums.push(arrStrNums[i] * 1);
    }
    document.getElementById(
      "output-exe4"
    ).innerHTML = `Số dương nhỏ nhất: ${Math.min(...arrNums)}`;
  }
}

// Exe5: Tìm số chẵn cuối cùng
function exe5() {
  let arrStrNums = strNum.split(", ");
  let arrNums = [];
  for (let i = 0; i < arrStrNums.length; i++) {
    arrNums.push(arrStrNums[i] * 1);
  }

  let evenNums = [];
  arrNums.forEach((value) => {
    if (value % 2 === 0) {
      evenNums.push(value);
    }
  });
  let lastEvenNum = evenNums.pop();
  document.getElementById(
    "output-exe5"
  ).innerHTML = `Số chẫn cuối cùng: ${lastEvenNum}`;
}

// Exe6: Đổi chỗ
function exe6() {
  let arrStrNums = strNum.split(", ");
  let arrNums = [];
  for (let i = 0; i < arrStrNums.length; i++) {
    arrNums.push(arrStrNums[i] * 1);
  }
}

// Exe7: Sắp xếp tăng dần
function exe7() {
  let arrStrNums = strNum.split(", ");
  let arrNums = [];
  for (let i = 0; i < arrStrNums.length; i++) {
    arrNums.push(arrStrNums[i] * 1);
  }

  arrNums.sort((a, b) => {
    return a - b;
  });
  document.getElementById(
    "output-exe7"
  ).innerHTML = `Mảng sau khi sắp xếp: ${arrNums.join(",")}`;
}

// Exe8: Tìm số nguyên tố đầu tiên
function exe8() {
  let arrStrNums = strNum.split(", ");
  let arrNums = [];
  for (let i = 0; i < arrStrNums.length; i++) {
    arrNums.push(arrStrNums[i] * 1);
  }

  arrNums = arrNums.filter((value) => {
    if (value < 2) return false;
    for (let i = 2; i <= Math.sqrt(value); i++) {
      if (value % i === 0) return false;
    }
    return true;
  });
  document.getElementById(
    "output-exe8"
  ).innerHTML = `Số nguyên tố đầu tiên: ${arrNums.shift()} `;
}

// Exe9: Đếm số nguyên
function exe9() {
  let arrStrNums = strNum.split(", ");
  let arrNums = [];
  for (let i = 0; i < arrStrNums.length; i++) {
    arrNums.push(arrStrNums[i] * 1);
  }

  let count = 0;

  for (j = 0; j < arrNums.length; j++) {
    if (Number.isInteger(arrNums[j])) {
      count++;
    }
  }
  document.getElementById("output-exe9").innerHTML = ` Số Nguyên: ${count} `;
}

// Exe10: Đếm số âm và số dương, sau đó so sánh 2 loại
function exe10() {
  let arrStrNums = strNum.split(", ");
  let arrNums = [];
  for (let i = 0; i < arrStrNums.length; i++) {
    arrNums.push(arrStrNums[i] * 1);
  }

  let countNegNum = 0;
  let countPosNum = 0;
  for (let i = 0; i < arrNums.length; i++) {
    if (arrNums[i] === 0) {
    } else if (arrNums[i] > 0) {
      countPosNum++;
    } else {
      countNegNum++;
    }
  }

  let result = document.getElementById("output-exe10");
  if (countNegNum === countPosNum) {
    return (result.innerHTML = `Tổng Số Dương bằng Tổng Số Âm: ${countPosNum} = ${countNegNum} `);
  }
  if (countPosNum > countNegNum) {
    return (result.innerHTML = `Tổng Số Dương nhiều hơn Tổng Số Âm: ${countPosNum} > ${countNegNum} `);
  } else {
    return (result.innerHTML = `Tổng Số Âm nhiều hơn Tổng Số Dương: ${countNegNum} > ${countPosNum} `);
  }
}
