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

| id | BIGSERIAL | PRIMARY KEY | ID người dùng |

| username | VARCHAR(50) | NOT NULL, UNIQUE | Tên đăng nhập |

| password | VARCHAR(255) | NOT NULL | Mật khẩu |

| role | VARCHAR(20) | NOT NULL | Vai trò (admin/manager) |

---

## 3.2 Rooms

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID phòng |

| room_number | VARCHAR(10) | NOT NULL, UNIQUE | Số phòng |

| capacity | INT | NOT NULL | Sức chứa |

| price | DECIMAL(10,2) | NOT NULL | Giá phòng |

| status | VARCHAR(20) | NOT NULL | Trạng thái (available/occupied) |

---

## 3.3 Tenants

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID người thuê |

| name | VARCHAR(100) | NOT NULL | Tên người thuê |

| phone | VARCHAR(15) | NULL | Số điện thoại |

| email | VARCHAR(100) | | Email |

| room_id | BIGINT | FK -> rooms(id) | Phòng đang thuê |

---

## 3.4 Contracts

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID hợp đồng |

| tenant_id | BIGINT | FK -> tenants(id) | Người thuê |

| room_id | BIGINT | FK -> rooms(id) | Phòng thuê |

| start_date | DATE | NOT NULL | Ngày bắt đầu |

| end_date | DATE | | Ngày kết thúc |

---

## 3.5 Invoices

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID hóa đơn |

| contract_id | BIGINT | FK -> contracts(id) | Hợp đồng |

| amount | DECIMAL(10,2) | NOT NULL | Số tiền |

| due_date | DATE | | Hạn thanh toán |

| status | VARCHAR(20) | | Trạng thái |

---

## 3.6 Payments

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID thanh toán |

| invoice_id | BIGINT | FK -> invoices(id) | Hóa đơn |

| payment_date | DATE | NOT NULL | Ngày thanh toán |

| amount | DECIMAL(10,2) | NOT NULL | Số tiền |

---

# 4. Quan Hệ Giữa Các Bảng

- Một *Room* có thể có nhiều *Contracts*

- Một *Tenant* có thể có nhiều *Contracts*

- Một *Contract* thuộc về một *Room*

- Một *Contract* thuộc về một *Tenant*

- Một *Contract* có thể có nhiều *Invoices*

- Một *Invoice* có thể có nhiều *Payments*

## 5. Test Data (Sample Data)

Dữ liệu mẫu để kiểm thử hệ thống.

```sql
-- Users
INSERT INTO users (id, username, password, role) VALUES
(1, 'admin01', 'pass123', 'admin'),
(2, 'quanlyA', 'abc123', 'manager'),
(3, 'quanlyB', 'xyz789', 'manager');

-- Rooms
INSERT INTO rooms (id, room_number, capacity, price, status) VALUES
(1, 'P101', 4, 1400000, 'available'),
(2, 'P102', 3, 1350000, 'occupied'),
(3, 'P201', 2, 1200000, 'available');

-- Tenants
INSERT INTO tenants (id, name, phone, email, room_id) VALUES
(1, 'Pham Minh Tuan', '0914567823', 'tuanpm@gmail.com', 2),
(2, 'Nguyen Thi Lan', '0903345678', 'lannt@gmail.com', 2),
(3, 'Hoang Gia Bao', '0938765432', 'baohoang@gmail.com', 3);

-- Contracts
INSERT INTO contracts (id, tenant_id, room_id, start_date, end_date) VALUES
(1, 1, 2, '2025-02-10', '2025-12-10'),
(2, 2, 2, '2025-03-01', '2025-11-30'),
(3, 3, 3, '2025-01-15', '2025-09-15');

-- Invoices
INSERT INTO invoices (id, contract_id, amount, due_date, status) VALUES
(1, 1, 1350000, '2025-04-05', 'unpaid'),
(2, 2, 1350000, '2025-04-05', 'paid'),
(3, 3, 1200000, '2025-04-10', 'unpaid');

-- Payments
INSERT INTO payments (id, invoice_id, payment_date, amount) VALUES
(1, 2, '2025-04-02', 1350000),
(2, 1, '2025-04-06', 500000),
(3, 3, '2025-04-09', 1200000);
```
