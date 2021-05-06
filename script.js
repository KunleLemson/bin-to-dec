let result = document.getElementById("result");
let binInput = document.getElementById("bin-input");

binInput.addEventListener("input", convert2Dec)

function convert2Dec(e) {
  e.preventDefault()
  let binary = document.getElementById("binary").value;
  resultArr = binary.split('')
  resultArr.forEach((bin) => {
    if (bin !== '0' && bin !== '1') {
      return alert(bin+" is not valid binary")
    }
  })
  let decimal = parseInt(binary,
    2)
  result.innerHTML = decimal
}