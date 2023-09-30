// กำหนดความโปร่งใสของการ์ด
let concard = document.getElementById("container-card");
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
  concard.style.opacity = this.value + '%';
  txtcss.style.opacity = this.value + '%';
}

// กำหนดค่าเริ่มต้น
let colorCounter = 0;
const maxColorCount = 5; 
let box1Color, box2Color, box3Color, box4Color, box5Color;

function changeColor() {
    // รับค่าสีจาก input
    const colorCode = document.getElementById('colorInput').value;

    // ตรวจสอบว่าค่าสีถูกกรอกหรือไม่
    if (isValidColor(colorCode)) {
        colorCounter++; // เพิ่มค่าการนับ  

        const boxIndex = (colorCounter - 1) % maxColorCount + 1;
        const inputElement = document.getElementById("myInput" + boxIndex);
        if (boxIndex === 1) {
            box1Color = colorCode;
            inputElement.value = colorCode;
        } else if (boxIndex === 2) {
            box2Color = colorCode;
            inputElement.value = colorCode;
        } else if (boxIndex === 3) {
            box3Color = colorCode;
            inputElement.value = colorCode;
        }else if (boxIndex === 4) {
            box4Color = colorCode;
            inputElement.value = colorCode;
        }else if (boxIndex === 5) {
            box5Color = colorCode;
            inputElement.value = colorCode;
        }
        document.querySelector('.box' + boxIndex).style.backgroundColor = colorCode;
        // สร้างฟังก์ชันที่จะเปลี่ยนค่า value ของอิงพุท
        // function changeInputValue(newValue) {
        //     let inputElement = document.getElementById("myInput" + boxIndex);
        //     if (boxIndex === 1) {
        //     inputElement.value = newValue[0];
        //     } else if (boxIndex === 2){
        //     inputElement.value = newValue[1];
        //     }else if (boxIndex === 3){
        //     inputElement.value = newValue[2];
        //     }else if (boxIndex === 4){
        //     inputElement.value = newValue[3];
        //     }else if (boxIndex === 5){
        //     inputElement.value = newValue[4];
        //     }
        //   }
          
        //   const Allcolor = [box1Color, box2Color, box3Color, box4Color, box5Color];
          
        // // เรียกใช้ฟังก์ชันและส่งค่าที่คุณต้องการให้กับ input
        //     let newValue = Allcolor;
        //     // changeInputValue(newValue[0], newValue[1], newValue[2], newValue[3], newValue[4]);
        //     changeInputValue(newValue);
    
        // ล้างค่าใน input
        document.getElementById('colorInput').value = '';

        // ตรวจสอบว่า colorCounter มากกว่าหรือเท่ากับ maxColorCount
        if (colorCounter > maxColorCount) {
            document.querySelectorAll('.box2, .box3, .box4, .box5').forEach(function(element) {
                element.style.backgroundColor = '#ffffff';
              });
            // document.getElementById("myInput1").value = colorCode;
            document.getElementById("myInput2").value = '';
            document.getElementById("myInput3").value = '';
            document.getElementById("myInput4").value = '';
            document.getElementById("myInput5").value = '';
            colorCounter = 1; // รีเซ็ต colorCounter เมื่อครบ maxColorCount
        }
        // console.log(colorCounter);
    } else {
        alert('โปรดป้อนรหัสสีที่ถูกต้อง');
    }
}

  // ตรวจสอบความถูกต้องของรหัสสี
  function isValidColor(color) {
    const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return colorRegex.test(color);
  }

// let header = document.getElementById("container-btn");
// let btns = header.getElementsByClassName("btn");
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }
let bg = document.querySelector('.container');
let txtcss = document.getElementById('displaycode');
let direction = ''; // ประกาศตัวแปร direction เพื่อเก็บค่าทิศทาง

function Apply() {
    if (colorCounter >= 2) {
        alert('สำเร็จ');
        txtcss.style.display = 'block';

        // เรียกใช้ changeGradient(direction) เพื่อรับค่า direction และเก็บไว้ในตัวแปร direction
        direction = changeGradient(currentDirection);

        // ตรวจสอบค่า direction และตั้งค่า background และ innerHTML ตามค่า direction
        if (colorCounter === 2) {
            bg.style.background = `linear-gradient(${direction}, ${box1Color}, ${box2Color})`;
            document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction}, ${box1Color}, ${box2Color});`;
        } else if (colorCounter === 3) {
            bg.style.background = `linear-gradient(${direction}, ${box1Color}, ${box2Color}, ${box3Color})`;
            document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction}, ${box1Color}, ${box2Color}, ${box3Color});`;
        } else if (colorCounter === 4) {
            bg.style.background = `linear-gradient(${direction}, ${box1Color}, ${box2Color}, ${box3Color}, ${box4Color})`;
            document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction}, ${box1Color}, ${box2Color}, ${box3Color}, ${box4Color});`;
        } else if (colorCounter === 5) {
            bg.style.background = `linear-gradient(${direction}, ${box1Color}, ${box2Color}, ${box3Color}, ${box4Color}, ${box5Color})`;
            document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction}, ${box1Color}, ${box2Color}, ${box3Color}, ${box4Color}, ${box5Color});`;
        }
    } else {
        alert('โปรดป้อนรหัสสีมากกว่า 1 สี');
    }
}

let header = document.getElementById("container-btn");
let btns = header.getElementsByClassName("btn");

// กำหนดค่าเริ่มต้นของ currentDirection
let currentDirection = 6;

// เพิ่มอีเวนต์ลิสเนอร์สำหรับปุ่ม
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // ลบคลาส "active" จากปุ่มที่มีคลาส "active" ในปัจจุบัน
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    // เพิ่มคลาส "active" ให้กับปุ่มที่ถูกคลิก
    this.className += " active";

    // อัปเดตค่า currentDirection เมื่อปุ่มถูกคลิก
    currentDirection = i;

    // เรียกฟังก์ชัน changeGradient และส่งค่า currentDirection ไปยังฟังก์ชัน
    changeGradient(currentDirection);
  });
}

function changeGradient(currentDirection) {
  const directions = ['to left', 'to left bottom', 'to left top', 'to top', 'to bottom', 'to right top', 'to right bottom', 'to right'];
//   let selectedDirection = directions[currentDirection];
  return(directions[currentDirection]);
}

// function changeGradient(direction) {
//     if (colorCounter >= 2) {
//         if (colorCounter === 2) {
//             bg.style.background = `linear-gradient(${direction},` + box1Color + ',' + box2Color + `)`;
//             document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction},` + ' ' + box1Color + ',' + ' ' + box2Color + `)`;            
//             } else if (colorCounter === 3){
//             bg.style.background = `linear-gradient(${direction},` + box1Color + ',' + box2Color + ',' + box3Color + `)`;
//             document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction},` + ' ' + box1Color + ',' + ' ' + box2Color + ',' + ' ' + box3Color +  `)`;             
//             } else if (colorCounter === 4){
//             bg.style.background = `linear-gradient(${direction},` + box1Color + ',' + box2Color + ',' + box3Color + ',' + box4Color + `)`;
//             document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction},` + ' ' + box1Color + ',' + ' ' + box2Color + ',' + ' ' + box3Color + ',' + ' ' + box4Color + `)`;             
//             } else if (colorCounter === 5){
//             bg.style.background = `linear-gradient(${direction},` + box1Color + ',' + box2Color + ',' + box3Color  + ',' + box4Color + ',' + box5Color + `)`;
//             document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction},` + ' ' + box1Color + ',' + ' ' + box2Color + ',' + ' ' + box3Color  + ',' + ' ' + box4Color + ',' + ' ' + box5Color + `)`;             
//             } 
//         }   
// }

// let bg =  document.querySelector('.container');
// let txtcss = document.getElementById('displaycode');
// function Apply() {
//     if (colorCounter >= 2) {
//         alert('สำเร็จ');
//         txtcss.style.display = 'block';
//         if (colorCounter === 2) {
//             changeGradient(direction)
//             bg.style.background = `linear-gradient(${direction},` + box1Color + ',' + box2Color + `)`;
//             document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction},` + ' ' + box1Color + ',' + ' ' + box2Color + `)`;
//         } else if (colorCounter === 3) {
//             changeGradient(direction)
//             bg.style.background = `linear-gradient(${direction},` + box1Color + ',' + box2Color + ',' + box3Color + `)`;
//             document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction},` + ' ' + box1Color + ',' + ' ' + box2Color + ',' + ' ' + box3Color +  `)`;
//         } else if (colorCounter === 4) {
//             changeGradient(direction)
//             bg.style.background = `linear-gradient(${direction},` + box1Color + ',' + box2Color + ',' + box3Color + ',' + box4Color + `)`;
//             document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction},` + ' ' + box1Color + ',' + ' ' + box2Color + ',' + ' ' + box3Color + ',' + ' ' + box4Color + `)`;
//         } else if (colorCounter === 5) {
//             changeGradient(direction)
//             bg.style.background = `linear-gradient(${direction},` + box1Color + ',' + box2Color + ',' + box3Color  + ',' + box4Color + ',' + box5Color + `)`;
//             document.getElementById('displaycode').innerHTML = `CSS Code:<br>background: linear-gradient(${direction},` + ' ' + box1Color + ',' + ' ' + box2Color + ',' + ' ' + box3Color  + ',' + ' ' + box4Color + ',' + ' ' + box5Color + `)`;
//         }
//     } else {
//         alert('โปรดป้อนรหัสสีมากกว่า 1 สี');
//     }
// }

// ล้างค่าสี
function claercolor() {  
    document.querySelectorAll('.box1, .box2, .box3, .box4, .box5').forEach(function(element) {
      element.style.backgroundColor = '#ffffff';
    });
    bg.style.background = 'linear-gradient(to right bottom, #35155D, #8CABFF)';
    txtcss.style.display = 'none';
    document.getElementById("myInput1").value = '';
    document.getElementById("myInput2").value = '';
    document.getElementById("myInput3").value = '';
    document.getElementById("myInput4").value = '';
    document.getElementById("myInput5").value = '';
    colorCounter = 0;  // รีเซ็ต colorCounter เมื่อกดปุ่ม
  }


