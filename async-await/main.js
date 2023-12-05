const doTask1 = function (name) {
  return new Promise(function (resolve, reject) {
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
      resolve(`Hoàn thành công việc ${name}`);
    }, 3000);
  });
};

const doTask2 = function (name) {
  return new Promise(function (resolve, reject) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
      //resolve(`Hoàn thành công việc ${name}`);
      reject(`${name} lỗi kỹ thuật`);
    }, 2000);
  });
};

const doTask3 = function (name) {
  return new Promise(function (resolve, reject) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
      resolve(`Hoàn thành công việc ${name}`);
    }, 2000);
  });
};

const doTask = async () => {
  try {
    let rs1 = await doTask1("Nhặt rau");
    console.log(rs1);

    let rs2 = await doTask2("Rửa rau");
    console.log(rs2);

    let rs3 = await doTask3("Luộc rau");
    console.log(rs3);
    console.log("Kết thúc công việc");
  } catch (error) {
    console.log(error);
  }
};
doTask();
