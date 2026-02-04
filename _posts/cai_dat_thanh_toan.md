---

title: "Hướng dẫn tích hợp đầu nhận tiền TP70 vào dslrBooth: Tự động hóa Photobooth 2026" 
excerpt: "Giải pháp chi tiết về phần cứng và phần mềm để biến bộ đôi Canon R100 & DNP RX1 thành trạm chụp ảnh tự động (Self-service) giúp tăng doanh thu và giảm chi phí vận hành." 
coverImage: "https://images.pexels.com/photos/13007559/pexels-photo-13007559.jpeg"
date: "2026-02-04" 
category: "Kỹ thuật"

---

Trong kỷ nguyên kinh doanh tự động, việc để nhân sự túc trực tại Photobooth không còn là phương án tối ưu. Bài viết này sẽ hướng dẫn bạn cách "vũ trang" cho bộ máy **Canon R100** và máy in **DNP RX1HS** của mình một bộ não thanh toán bằng đầu đọc tiền **ICT TP70**.

## 1. Nguyên lý vận hành hệ thống (The Flow)

Để dslrBooth có thể hiểu được khi nào khách đã trả tiền, chúng ta sử dụng cơ chế **Pulse-to-Hotkey**.

* **Bước 1:** Khách hàng nạp tiền Polymer vào đầu đọc **TP70**.
* **Bước 2:** TP70 kiểm tra tiền thật và đếm đúng mệnh giá đã cài đặt.
* **Bước 3:** Sau khi nhận đủ tiền, TP70 xuất xung tín hiệu (Pulse) đến **Mạch USB Interface**.
* **Bước 4:** Mạch này giả lập một phím bấm trên bàn phím (Vd: Phím Space) gửi về máy tính.
* **Bước 5:** Phần mềm **dslrBooth** nhận lệnh "Space" và kích hoạt phiên chụp ngay lập tức.



## 2. Kết nối phần cứng: Sơ đồ đấu nối chi tiết

Bạn cần tập trung vào các chân cắm (Pinout) sau để đảm bảo tín hiệu sạch và không gây nhiễu cho máy ảnh:

### Cấp nguồn cho TP70

Đầu đọc TP70 hoạt động ở điện áp **12V DC**. Bạn nên dùng một nguồn tổ ong rời thay vì trích xuất nguồn từ thùng máy PC để tránh sụt áp khi máy in DNP RX1 hoạt động.

* **Dây Đỏ:** Nối cực Dương (+12V).
* **Dây Đen:** Nối cực Âm (GND).

### Truyền tín hiệu sang dslrBooth

Sử dụng một mạch **USB Arcade Encoder** (loại không trễ - Zero Delay).

* **Dây Trắng (Credit Signal)** từ TP70 nối vào chân **Signal** trên mạch USB.
* **Dây Xanh lá (GND)** từ TP70 nối chung vào chân **GND** của mạch USB.

---

## 3. Cấu hình phần mềm dslrBooth (Kiosk Mode)

Để biến màn hình thành một trạm dịch vụ, hãy thực hiện các bước sau:

1. **Thiết lập Trigger:** Vào `Settings` -> `Triggers`. Tại mục **Start Session**, bạn hãy nạp thử tiền thật vào TP70. Nếu mạch USB gửi tín hiệu về thành công, dslrBooth sẽ tự ghi nhận phím đó làm lệnh bắt đầu.
2. **Khóa hệ thống:** Bật chế độ **Kiosk Mode** để ẩn thanh công cụ và ngăn khách hàng dùng chuột thoát ra ngoài.
3. **Màn hình hướng dẫn:** Thay đổi `Start Screen` thành một video clip hoặc ảnh GIF hướng dẫn: *"Vui lòng nạp 20.000đ để chụp ảnh"*.

---

## 4. Lưu ý quan trọng cho thiết bị Canon & DNP

Vận hành tự động nghĩa là thiết bị phải chạy liên tục trong nhiều giờ:

* **Về Canon R100:** Do dòng Mirrorless này khá tốn pin, bạn **bắt buộc** phải dùng **ACK-E18 (Bộ chuyển đổi nguồn AC)** để cấp điện trực tiếp từ ổ cắm. Đừng quên tắt tính năng *Auto Power Off* trong menu cài đặt vàng của máy ảnh.
* **Về DNP RX1HS:** Với khả năng in 700 tờ/cuộn, đây là "cỗ máy cày" đích thực. Tuy nhiên, hãy cài đặt dslrBooth hiển thị cảnh báo trên màn hình khi số lượng ảnh in đạt đến 680 để bạn có thời gian đến thay giấy trước khi máy dừng hoạt động.

---

## 5. Mẹo tăng tương tác và doanh thu

Để bài blog này trên Web của bạn thu hút nhiều tương tác hơn, hãy gợi ý cho khách hàng của bạn:

* **Lắp thêm nút bấm phụ:** Một nút bấm vật lý lớn, có đèn LED chớp tắt sẽ kích thích khách hàng tò mò và nạp tiền nhiều hơn.
* **Sự kết hợp hoàn hảo:** Tiền mặt là cần thiết, nhưng hãy chèn thêm một mã **QR thanh toán chuyển khoản** bên cạnh đầu đọc TP70 để không bỏ lỡ khách hàng trẻ tuổi.

