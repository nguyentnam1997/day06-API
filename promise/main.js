//Khởi tạo Promise
// const promise = new Promise(function(resolve, reject) {});
// console.log(promise);   //state: pending, result: undefined

// const promiseSuccess = new Promise(function(resolve, reject) {
//     resolve("Mua xe thành công");
// });
// console.log(promiseSuccess);    //state: fulfiled, result: "Mua xe thành công"

// const promiseFail = new Promise(function(resolve, reject) {
//     reject("Mua xe thất bại do không đủ tiền");
// });
// console.log(promiseFail);   //state: rejected, result: "Mua xe thất bại do không đủ tiền"

const doTask1 = function (name) {
  return new Promise(function (resolve, reject) {
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
      resolve(`Hoàn thành công việc ${name}`);
    }, 4000);
  });
};

const doTask2 = function (name) {
  return new Promise(function (resolve, reject) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
      resolve(`Hoàn thành công việc ${name}`);
    }, 3000);
  });
};

const doTask3 = function (name) {
  return new Promise(function (resolve, reject) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
      resolve(`Hoàn thành công việc ${name}`);
    }, 5000);
  });
};

//TH1: Nhặt rau - rửa rau - luộc rau
// doTask1("Nhặt rau")
//   .then(function (rs) {
//     console.log(rs);
//     return doTask2("Rửa rau"); //promise
//   })
//   .then(function (rs) {
//     console.log(rs);
//     return doTask3("Luộc rau"); //promise
//   })
//   .then(function (rs) {
//     console.log(rs);
//     console.log("Kết thúc công việc");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

  //TH2: Ăn cơm - Xem tivi - lướt facebook
  Promise.all([doTask1('Ăn cơm'), doTask2('Xem tivi'), doTask3('Lướt facebook')])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  })
