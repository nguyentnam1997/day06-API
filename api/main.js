/*
Mô hình Client - Server
Client -> request -> Server:  Xử lý -> response -> Client

request: CRUD (Create, Update, Read, Delete)
response: JSON (Javascript Object Notation), XML, HTML,...

API (Application Programming Interface): Giao diện lập trình ứng dụng

Khách hàng: Client
Nhân viên: Lấy menu, gọi món, huỷ món, thanh toán... (API)
Nhà bếp: Server

- Tài nguyên hệ thống: món ăn
- Hành động tương tác với tài nguyên: Lấy menu, gọi món,.....
- Phương thức: GET (Read), POST (Create), PUT (update), DELETE (delete)...

- Response: Thành công/Thất bại (HTTP status code)

VD: API:
GET: /api/v1/posts: Lấy danh sách bài viết
GET: /api/v1/posts/1: Lấy bài viết có ID = 1
GET: /api/v1/posts?limit=100&page=1 : Lấy danh sách các bài viết, mỗi trang 10 bài, trang 1
DELETE: /api/v1/posts/1: Xoas bài viết có ID = 1
POST: /api/v1/posts: Tạo bài viết
    request body - {title: 'abc', content: 'xyz'}
PUT: /api/v1/posts/1: Cập nhật bài viết có ID = 1
    request body - {title: 'zzzz', content: 'zvzxcvxc'}

Gọi API trong JS:
- fetch API: build-in method của JS (method có sẵn) -> Hạn chế chức năng hơn
- axios: thư viện bên ngoài
*/

const btn = document.getElementById("btn");
const image = document.getElementById("image");

//Cách 1: Fetch API
//Bấm nút -> Gọi API -> Lấy dữ liệu từ API và hiển thị lên giao diện
// btn.addEventListener("click", () => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(response => {
//         console.log(response);  // {message, status}
//         image.src = response.message;
//     })
//     .catch(error => {
//         console.log(error);
//     })
// });

//Cách 2: async/await
// btn.addEventListener('click', async () => {
//     try {
//         const rs = await fetch("https://dog.ceo/api/breeds/image/random");
//         const data = await rs.json();
//         image.src = data.message;
//     } catch (error) {
//         console.log(error);
//     }
// });

//Cách 3: axios
// btn.addEventListener("click", async () => {
//   axios
//     .get("https://dog.ceo/api/breeds/image/random")
//     .then((response) => {
//       console.log(response);
//       image.src = response.data.message;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

//Cách 4: axios + async/await
btn.addEventListener("click", async () => {
  try {
    const rs = await axios.get("https://dog.ceo/api/breeds/image/random");  // Gọi API lấy ảnh random của dog
    image.src = rs.data.message;  // Gán URL cho thẻ image
  } catch (error) {
    console.log(error);
  }
});
