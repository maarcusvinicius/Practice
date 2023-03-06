async function myDisplay() {
  var x = 0;
  let myPromise = new Promise(function (resolve, reject) {
    resolve("I love You !!");
  });

  if ((x == 0)) {
    await myPromise;
    console.log(myPromise)
  } else {
    console.log("não")
  }
}

myDisplay();
