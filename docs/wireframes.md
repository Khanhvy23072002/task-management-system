Wireframes 
Hệ thống có 3 loại người dùng:
- Người thuê (End User)
- Chủ nhà trọ (Business User)
- Admin

1. Login Page

# Bố cục giao diện: Trang đăng nhập cho tất cả người dùng (Người thuê, Chủ nhà, Admin).

HỆ THỐNG QUẢN LÝ NHÀ TRỌ / KÝ TÚC XÁ

Email / Username  
[________________________]

Password  
[________________________]

[ Đăng nhập ]

Quên mật khẩu?

_____________________________________________

# Chức năng

- Người dùng nhập tài khoản và mật khẩu
- Xác thực thông tin đăng nhập
- Điều hướng tới dashboard phù hợp với vai trò:
  - Người thuê
  - Chủ nhà
  - Admin

2. Dashboard: Dashboard hiển thị thông tin tổng quan sau khi đăng nhập.

------------------------------------------------
Menu: Dashboard | Phòng | Hợp đồng | Hóa đơn | Báo cáo | Logout
------------------------------------------------

TỔNG QUAN HỆ THỐNG

[ Tổng số phòng ]  
[ Phòng đang thuê ]  
[ Phòng trống ]  
[ Tổng doanh thu tháng ]

------------------------------------------------

HOẠT ĐỘNG GẦN ĐÂY

- Người thuê mới đăng ký phòng
- Hóa đơn tháng mới được tạo
- Yêu cầu sửa chữa mới

____________________________________________

# Chức năng

- Hiển thị thống kê tổng quan
- Hiển thị hoạt động gần đây
- Điều hướng tới các chức năng khác

3. Trang quản lý phòng (Chủ nhà): Trang quản lý phòng và tình trạng phòng.

------------------------------------------------
Menu: Dashboard | Phòng | Hợp đồng | Hóa đơn
------------------------------------------------

QUẢN LÝ PHÒNG

[Tìm phòng........]  [Search]

[Thêm phòng]

------------------------------------------------

| ID | Số phòng | Sức chứa | Người đang ở | Trạng thái | Lưu ý |
|----|----------|----------|--------------|------------|--------|
| 1  | 101      | 4        | 3            | Còn chỗ    | Thêm |
| 2  | 102      | 4        | 4            | Đầy        | Thêm |

_____________________________________________

# Chức năng

- Thêm phòng mới
- Cập nhật thông tin phòng
- Xóa phòng
- Theo dõi trạng thái phòng (đầy / còn chỗ)

4. Trang Quản lý Hợp đồng và Khách thuê (Chủ nhà)

------------------------------------------------
Menu: Dashboard | Phòng | Hợp đồng | Hóa đơn
------------------------------------------------

QUẢN LÝ NGƯỜI THUÊ & HỢP ĐỒNG

[Tìm tên người thuê........]

[Thêm hợp đồng]

------------------------------------------------

| ID | Người thuê | Phòng | Ngày bắt đầu | Ngày kết thúc | Lưu ý |
|----|------------|------|--------------|--------------|--------|
| 1  | Nguyễn Văn A | 101 | 01/03/2026 | 01/03/2027 | Thêm |
| 2  | Trần Văn B   | 102 | 10/03/2026 | 10/03/2027 | Thêm |
______________________________________________

# Chức năng

- Quản lý hợp đồng thuê
- Gán người thuê vào phòng
- Gia hạn hợp đồng
- Kết thúc hợp đồng

5. Trang quản lý hóa đơn (Chủ nhà): Trang ghi điện nước và tạo hóa đơn.

------------------------------------------------
Menu: Dashboard | Phòng | Hợp đồng | Hóa đơn
------------------------------------------------

QUẢN LÝ HÓA ĐƠN

Chọn tháng: [Tháng / Năm]

[Tạo hóa đơn mới]

------------------------------------------------

| ID | Phòng | Điện | Nước | Tiền phòng | Tổng | Trạng thái |
|----|------|------|------|------------|------|-----------|
| 1 | 101 | 200k | 100k | 2,000k | 2,300k | Chưa trả |
| 2 | 102 | 150k | 80k | 2,000k | 2,230k | Đã trả |

____________________________________________

# Chức năng

- Nhập số điện nước
- Tạo hóa đơn
- Tính tổng chi phí
- Theo dõi trạng thái thanh toán

6. Trang người thuê: Trang để người thuê xem thông tin phòng và hóa đơn.

------------------------------------------------
Menu: Phòng | Hợp đồng | Hóa đơn | Logout
------------------------------------------------

THÔNG TIN PHÒNG

Phòng: 101  
Số người: 3 / 4  
Ngày bắt đầu hợp đồng: 01/03/2026

------------------------------------------------

HÓA ĐƠN GẦN ĐÂY

| Tháng | Tiền phòng | Điện | Nước | Tổng | Trạng thái |
|------|------------|------|------|------|-----------|
| 03/2026 | 2,000k | 200k | 100k | 2,300k | Chưa trả |

[Thanh toán]

_____________________________________________

# Chức năng

- Xem thông tin phòng
- Xem hợp đồng
- Xem hóa đơn
- Thanh toán hóa đơn
- Xem lịch sử thanh toán

7. Trang quản trị: Trang quản lý hệ thống cho Admin.

------------------------------------------------
Menu: Dashboard | Trọ/Ký túc xá | Chủ sở hữu | Báo cáo
------------------------------------------------

QUẢN LÝ KHU TRỌ / KÝ TÚC XÁ

[Thêm trọ/ ký túc xá]

------------------------------------------------

| ID | Tên khu trọ | Chủ nhà | Số phòng | Lưu ý |
|----|-------------|--------|----------|--------|
| 1 | KTX A | Nguyễn Văn B | 50 | Thêm |
| 2 | Khu trọ Bình An | Trần Văn C | 30 | Thêm |

________________________________________________

# Chức năng

- Quản lý khu trọ / ký túc xá (CRUD)
- Quản lý tài khoản chủ nhà
- Cấu hình loại phí
- Xem báo cáo hệ thống

* Chức năng chính:
1. Người thuê xem thông tin phòng và hợp đồng  
2. Người thuê thanh toán tiền phòng và điện nước  
3. Chủ nhà ghi điện nước và tạo hóa đơn  
4. Admin quản lý khu trọ và cấu hình hệ thống
