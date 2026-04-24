API Documentation – Dorm Management System
Base URL
http://localhost:8080/api
Common Notes
All request/response bodies use application/json
Foreign key fields are sent as nested objects with id only
Example:
{
"room": { "id": 1 }
}
1. Users API
1.1 Get all users

Endpoint
GET /users

Response 200 OK
[
{
"id": 1,
"username": "admin01",
"password": "pass123",
"role": "admin"
}
]

1.2 Get user by id

Endpoint
GET /users/{id}

Response 200 OK
{
"id": 1,
"username": "admin01",
"password": "pass123",
"role": "admin"
}

Response 404 Not Found
{
"timestamp": "2025-04-01T10:00:00",
"status": 404,
"error": "Not Found",
"message": "User not found with id: 99"
}

1.3 Create user

Endpoint
POST /users

Request Body
{
"username": "newuser",
"password": "123456",
"role": "manager"
}

Response 200 OK
{
"id": 3,
"username": "newuser",
"password": "123456",
"role": "manager"
}

1.4 Update user

Endpoint
PUT /users/{id}

Request Body
{
"username": "admin02",
"password": "999999",
"role": "admin"
}

Response 200 OK
{
"id": 1,
"username": "admin02",
"password": "999999",
"role": "admin"
}

1.5 Delete user

Endpoint
DELETE /users/{id}

Response 204 No Content

2. Rooms API
2.1 Get all rooms

Endpoint
GET /rooms

Response 200 OK
[
{
"id": 1,
"roomNumber": "P101",
"capacity": 4,
"price": 1400000,
"status": "available"
}
]

2.2 Get room by id

Endpoint
GET /rooms/{id}

Response 200 OK
{
"id": 1,
"roomNumber": "P101",
"capacity": 4,
"price": 1400000,
"status": "available"
}

Response 404 Not Found
{
"timestamp": "2025-04-01T10:00:00",
"status": 404,
"error": "Not Found",
"message": "Room not found with id: 99"
}

2.3 Create room

Endpoint
POST /rooms

Request Body
{
"roomNumber": "P202",
"capacity": 3,
"price": 1500000,
"status": "available"
}

Response 200 OK
{
"id": 3,
"roomNumber": "P202",
"capacity": 3,
"price": 1500000,
"status": "available"
}

2.4 Update room

Endpoint
PUT /rooms/{id}

Request Body
{
"roomNumber": "P202",
"capacity": 4,
"price": 1600000,
"status": "occupied"
}

Response 200 OK
{
"id": 3,
"roomNumber": "P202",
"capacity": 4,
"price": 1600000,
"status": "occupied"
}

2.5 Delete room

Endpoint
DELETE /rooms/{id}

Response 204 No Content

3. Tenants API
3.1 Get all tenants

Endpoint
GET /tenants

Response 200 OK
[
{
"id": 1,
"name": "Pham Minh Tuan",
"phone": "0914567823",
"email": "tuanpm@gmail.com
",
"room": {
"id": 2
}
}
]

3.2 Get tenant by id

Endpoint
GET /tenants/{id}

Response 200 OK
{
"id": 1,
"name": "Pham Minh Tuan",
"phone": "0914567823",
"email": "tuanpm@gmail.com
",
"room": {
"id": 2
}
}

Response 404 Not Found
{
"timestamp": "2025-04-01T10:00:00",
"status": 404,
"error": "Not Found",
"message": "Tenant not found with id: 99"
}

3.3 Create tenant

Endpoint
POST /tenants

Request Body
{
"name": "Le Van A",
"phone": "0987654321",
"email": "a@gmail.com
",
"room": {
"id": 1
}
}

Response 200 OK
{
"id": 3,
"name": "Le Van A",
"phone": "0987654321",
"email": "a@gmail.com
",
"room": {
"id": 1
}
}

3.4 Update tenant

Endpoint
PUT /tenants/{id}

Request Body
{
"name": "Le Van A Updated",
"phone": "0987654321",
"email": "a.updated@gmail.com
",
"room": {
"id": 3
}
}

Response 200 OK
{
"id": 3,
"name": "Le Van A Updated",
"phone": "0987654321",
"email": "a.updated@gmail.com
",
"room": {
"id": 3
}
}

3.5 Delete tenant

Endpoint
DELETE /tenants/{id}

Response 204 No Content

4. Contracts API
4.1 Get all contracts

Endpoint
GET /contracts

Response 200 OK
[
{
"id": 1,
"tenant": {
"id": 1
},
"room": {
"id": 2
},
"startDate": "2025-02-10",
"endDate": "2025-12-10"
}
]

4.2 Get contract by id

Endpoint
GET /contracts/{id}

Response 200 OK
{
"id": 1,
"tenant": {
"id": 1
},
"room": {
"id": 2
},
"startDate": "2025-02-10",
"endDate": "2025-12-10"
}

Response 404 Not Found
{
"timestamp": "2025-04-01T10:00:00",
"status": 404,
"error": "Not Found",
"message": "Contract not found with id: 99"
}

4.3 Create contract

Endpoint
POST /contracts

Request Body
{
"tenant": {
"id": 1
},
"room": {
"id": 2
},
"startDate": "2025-04-01",
"endDate": "2025-12-31"
}

Response 200 OK
{
"id": 3,
"tenant": {
"id": 1
},
"room": {
"id": 2
},
"startDate": "2025-04-01",
"endDate": "2025-12-31"
}

4.4 Update contract

Endpoint
PUT /contracts/{id}

Request Body
{
"tenant": {
"id": 2
},
"room": {
"id": 3
},
"startDate": "2025-05-01",
"endDate": "2025-12-31"
}

Response 200 OK
{
"id": 3,
"tenant": {
"id": 2
},
"room": {
"id": 3
},
"startDate": "2025-05-01",
"endDate": "2025-12-31"
}

4.5 Delete contract

Endpoint
DELETE /contracts/{id}

Response 204 No Content

5. Invoices API
5.1 Get all invoices

Endpoint
GET /invoices

Response 200 OK
[
{
"id": 1,
"contract": {
"id": 1
},
"amount": 1350000,
"dueDate": "2025-04-05",
"status": "unpaid"
}
]

5.2 Get invoice by id

Endpoint
GET /invoices/{id}

Response 200 OK
{
"id": 1,
"contract": {
"id": 1
},
"amount": 1350000,
"dueDate": "2025-04-05",
"status": "unpaid"
}

Response 404 Not Found
{
"timestamp": "2025-04-01T10:00:00",
"status": 404,
"error": "Not Found",
"message": "Invoice not found with id: 99"
}

5.3 Create invoice

Endpoint
POST /invoices

Request Body
{
"contract": {
"id": 1
},
"amount": 1500000,
"dueDate": "2025-05-05",
"status": "unpaid"
}

Response 200 OK
{
"id": 3,
"contract": {
"id": 1
},
"amount": 1500000,
"dueDate": "2025-05-05",
"status": "unpaid"
}

5.4 Update invoice

Endpoint
PUT /invoices/{id}

Request Body
{
"contract": {
"id": 2
},
"amount": 1200000,
"dueDate": "2025-06-05",
"status": "paid"
}

Response 200 OK
{
"id": 3,
"contract": {
"id": 2
},
"amount": 1200000,
"dueDate": "2025-06-05",
"status": "paid"
}

5.5 Delete invoice

Endpoint
DELETE /invoices/{id}

Response 204 No Content

6. Payments API
6.1 Get all payments

Endpoint
GET /payments

Response 200 OK
[
{
"id": 1,
"invoice": {
"id": 2
},
"paymentDate": "2025-04-02",
"amount": 1350000
}
]

6.2 Get payment by id

Endpoint
GET /payments/{id}

Response 200 OK
{
"id": 1,
"invoice": {
"id": 2
},
"paymentDate": "2025-04-02",
"amount": 1350000
}

Response 404 Not Found
{
"timestamp": "2025-04-01T10:00:00",
"status": 404,
"error": "Not Found",
"message": "Payment not found with id: 99"
}

6.3 Create payment

Endpoint
POST /payments

Request Body
{
"invoice": {
"id": 1
},
"paymentDate": "2025-04-10",
"amount": 1500000
}

Response 200 OK
{
"id": 3,
"invoice": {
"id": 1
},
"paymentDate": "2025-04-10",
"amount": 1500000
}

6.4 Update payment

Endpoint
PUT /payments/{id}

Request Body
{
"invoice": {
"id": 2
},
"paymentDate": "2025-04-12",
"amount": 1200000
}

Response 200 OK
{
"id": 3,
"invoice": {
"id": 2
},
"paymentDate": "2025-04-12",
"amount": 1200000
}

6.5 Delete payment

Endpoint
DELETE /payments/{id}

Response 204 No Content

7. Dashboard API
7.1 Get dashboard summary

Endpoint
GET /dashboard

Response 200 OK
{
"totalUsers": 3,
"totalRooms": 3,
"totalTenants": 3,
"totalContracts": 3,
"totalInvoices": 3,
"availableRooms": 2,
"occupiedRooms": 1,
"unpaidInvoices": 2,
"paidInvoices": 1
}

7.2 Get recent activity

Endpoint
GET /dashboard/recent-activity

Response 200 OK
[
{
"type": "invoice",
"message": "Invoice #3 created",
"createdAt": "2025-04-01T10:30:00"
},
{
"type": "contract",
"message": "Contract #2 updated",
"createdAt": "2025-04-01T09:20:00"
},
{
"type": "tenant",
"message": "Tenant #1 added",
"createdAt": "2025-04-01T08:10:00"
}
]

8. Validation and Error Responses
8.1 Validation error

Response 400 Bad Request
{
"timestamp": "2025-04-01T10:00:00",
"status": 400,
"error": "Validation Error",
"details": {
"paymentDate": "Payment date is required"
}
}

8.2 Business error

Response 400 Bad Request
{
"timestamp": "2025-04-01T10:00:00",
"status": 400,
"error": "Bad Request",
"message": "Room is not available"
}

8.3 Server error

Response 500 Internal Server Error
{
"timestamp": "2025-04-01T10:00:00",
"status": 500,
"error": "Internal Server Error",
"message": "Something went wrong"
}
