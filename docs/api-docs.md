# API Documentation
Hệ thống Quản Lý Nhà Trọ / Ký Túc Xá

Base URL:
http://localhost:8080

## 1. Users API

### Lấy danh sách user
GET /users

### Lấy user theo id
GET /users/{id}

### Tạo user
POST /users  
Body:
{
  "username": "admin01",
  "password": "123456",
  "role": "admin"
}

### Cập nhật user
PUT /users/{id}

### Xóa user
DELETE /users/{id}

## 2. Rooms API

### Lấy danh sách phòng
GET /rooms

### Lấy phòng theo id
GET /rooms/{id}

### Tạo phòng
POST /rooms  
Body:
{
  "roomNumber": "A101",
  "capacity": 4,
  "price": 1500000,
  "status": "available"
}

### Cập nhật phòng
PUT /rooms/{id}

### Xóa phòng
DELETE /rooms/{id}

## 3. Tenants API

### Lấy danh sách người thuê
GET /tenants

### Lấy theo id
GET /tenants/{id}

### Tạo người thuê
POST /tenants  
Body:
{
  "name": "Nguyen Van A",
  "phone": "0901234567",
  "email": "a@gmail.com",
  "room": {
    "id": 1
  }
}

### Cập nhật
PUT /tenants/{id}

### Xóa
DELETE /tenants/{id}

## 4. Contracts API

### Lấy danh sách hợp đồng
GET /contracts

### Lấy theo id
GET /contracts/{id}

### Tạo hợp đồng
POST /contracts  
Body:
{
  "tenant": { "id": 1 },
  "room": { "id": 1 },
  "startDate": "2026-01-01",
  "endDate": "2026-12-31"
}

### Cập nhật
PUT /contracts/{id}

### Xóa
DELETE /contracts/{id}

## 5. Invoices API

### Lấy danh sách hóa đơn
GET /invoices

### Lấy theo id
GET /invoices/{id}

### Tạo hóa đơn
POST /invoices  
Body:
{
  "contract": { "id": 1 },
  "amount": 1500000,
  "dueDate": "2026-04-10",
  "status": "unpaid"
}

### Cập nhật
PUT /invoices/{id}

### Xóa
DELETE /invoices/{id}

## 6. Payments API

### Lấy danh sách thanh toán
GET /payments

### Lấy theo id
GET /payments/{id}

### Tạo thanh toán
POST /payments  
Body:
{
  "invoice": { "id": 1 },
  "paymentDate": "2026-04-05",
  "amount": 1500000
}

### Cập nhật
PUT /payments/{id}

### Xóa
DELETE /payments/{id}

## Ghi chú
- Dữ liệu gửi lên dạng JSON
- Dùng Postman để test API
- Các quan hệ sử dụng id để liên kết
