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

| role | VARCHAR(20) | NOT NULL | Vai trò (admin/manager) |

---

## 3.2 Rooms

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID phòng |

| room_number | VARCHAR(10) | NOT NULL | Số phòng |

| capacity | INT | NOT NULL | Sức chứa |

| price | DECIMAL(10,2) | NOT NULL | Giá phòng |

| status | VARCHAR(20) | NOT NULL | Trạng thái (available/occupied) |

---

## 3.3 Tenants

| Column | Data Type | Constraint | Description |

|------|------|------|------|

| id | BIGINT | PK | ID người thuê |

| name | VARCHAR(100) | NOT NULL | Tên người thuê |

| phone | VARCHAR(15) | | Số điện thoại |

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

Dữ liệu mẫu dùng để kiểm thử hệ thống.

```sql
-- Users
INSERT INTO users (id, username, password, role) VALUES
(1, 'admin', 'admin123', 'admin'),
(2, 'manager1', 'manager123', 'manager'),
(3, 'manager2', 'manager456', 'manager');

-- Rooms
INSERT INTO rooms (id, room_number, capacity, price, status) VALUES
(1, 'A101', 4, 1500000, 'available'),
(2, 'A102', 3, 1300000, 'occupied'),
(3, 'B201', 2, 1200000, 'available');

-- Tenants
INSERT INTO tenants (id, name, phone, email, room_id) VALUES
(1, 'Nguyen Van A', '0901234567', 'a@gmail.com', 2),
(2, 'Tran Thi B', '0912345678', 'b@gmail.com', 2),
(3, 'Le Van C', '0923456789', 'c@gmail.com', 3);

-- Contracts
INSERT INTO contracts (id, tenant_id, room_id, start_date, end_date) VALUES
(1, 1, 2, '2025-01-01', '2025-12-31'),
(2, 2, 2, '2025-02-01', '2025-12-31'),
(3, 3, 3, '2025-03-01', '2025-09-01');

-- Invoices
INSERT INTO invoices (id, contract_id, amount, due_date, status) VALUES
(1, 1, 1500000, '2025-04-05', 'unpaid'),
(2, 2, 1500000, '2025-04-05', 'paid'),
(3, 3, 1200000, '2025-04-05', 'unpaid');

-- Payments
INSERT INTO payments (id, invoice_id, payment_date, amount) VALUES
(1, 2, '2025-04-03', 1500000),
(2, 2, '2025-04-03', 500000),
(3, 1, '2025-04-06', 1500000);
```
