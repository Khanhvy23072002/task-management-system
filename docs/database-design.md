# Database Design
Hệ thống Quản Lý Nhà Trọ / Ký Túc Xá
## 1. Tổng Quan
Hệ thống sử dụng cơ sở dữ liệu PostgreSQL để lưu trữ thông tin phòng, người thuê, hợp đồng và thanh toán.

Database gồm các bảng chính:
- users
- rooms
- tenants
- contracts
- invoices
- payments
---

# 2. Danh Sách Bảng

| Table Name | Description |

|-------------|-------------|

| users | Quản lý tài khoản đăng nhập |

| rooms | Quản lý thông tin phòng |

| tenants | Quản lý người thuê |

| contracts | Quản lý hợp đồng thuê phòng |

| invoices | Quản lý hóa đơn |

| payments | Lưu lịch sử thanh toán |


# 3. Chi Tiết Các Bảng

## 3.1 Users

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK, AUTO_INCREMENT | ID người dùng |

| username | VARCHAR(50) | NOT NULL, UNIQUE | Tên đăng nhập |

| password | VARCHAR(255) | NOT NULL | Mật khẩu |

| role | VARCHAR(20) | NOT NULL | Vai trò |

---

## 3.2 Rooms

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID phòng |

| room_number | VARCHAR(10) | NOT NULL | Số phòng |

| capacity | INT | NOT NULL | Sức chứa |

| price | DECIMAL | NOT NULL | Giá phòng |

| status | VARCHAR(20) | NOT NULL | Trạng thái |

---

## 3.3 Tenants

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID người thuê |

| name | VARCHAR(100) | NOT NULL | Tên người thuê |

| phone | VARCHAR(15) | | Số điện thoại |

| email | VARCHAR(100) | | Email |

| room_id | BIGINT | FK | Phòng đang thuê |

---

## 3.4 Contracts

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID hợp đồng |

| tenant_id | BIGINT | FK | Người thuê |

| room_id | BIGINT | FK | Phòng thuê |

| start_date | DATE | NOT NULL | Ngày bắt đầu |

| end_date | DATE | | Ngày kết thúc |

---

## 3.5 Invoices

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID hóa đơn |

| contract_id | BIGINT | FK | Hợp đồng |

| amount | DECIMAL | NOT NULL | Số tiền |

| due_date | DATE | | Hạn thanh toán |

| status | VARCHAR(20) | | Trạng thái |

---

## 3.6 Payments

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID thanh toán |

| invoice_id | BIGINT | FK | Hóa đơn |

| payment_date | DATE | NOT NULL | Ngày thanh toán |

| amount | DECIMAL | NOT NULL | Số tiền |

---

# 4. Quan Hệ Giữa Các Bảng

- Một *Room* có thể có nhiều *Tenants*

- Một *Tenant* có thể có nhiều *Contracts*

- Một *Contract* thuộc về một *Room*

- Một *Contract* có nhiều *Invoices*

- Một *Invoice* có thể có nhiều *Payments*
