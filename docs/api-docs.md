# API Documentation – Dorm Management System

## Base URL
```text
http://localhost:8080/api để có thể test chuyển bằng  https://weblike-emelda-thanklessly.ngrok-free.dev
1. Users API
1.1 Get all users

Endpoint

GET /users

Response 200 OK

[
    {
        "id": 1,
        "password": "pass123",
        "role": "admin",
        "username": "admin01"
    },
    {
        "id": 2,
        "password": "abc123",
        "role": "manager",
        "username": "quanlyA"
    },
    {
        "id": 3,
        "password": "xyz789",
        "role": "manager",
        "username": "quanlyB"
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
  "path": "/api/users/99"
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
        "capacity": 4,
        "id": 1,
        "price": 1400000.0,
        "roomNumber": "P101",
        "status": "available"
    },
    {
        "capacity": 3,
        "id": 2,
        "price": 1350000.0,
        "roomNumber": "P102",
        "status": "occupied"
    },
    {
        "capacity": 2,
        "id": 3,
        "price": 1200000.0,
        "roomNumber": "P201",
        "status": "available"
    }
]
2.2 Get room by id

Endpoint

GET /rooms/{id}

Response 200 OK

{
    "capacity": 4,
    "id": 1,
    "price": 1400000.0,
    "roomNumber": "P101",
    "status": "available"
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
  "id": 4,
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
  "id": 4,
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
        "email": "tuanpm@gmail.com",
        "id": 1,
        "name": "Pham Minh Tuan",
        "phone": "0914567823",
        "room": {
            "capacity": 3,
            "id": 2,
            "price": 1350000.0,
            "roomNumber": "P102",
            "status": "occupied"
        }
    },
    {
        "email": "lannt@gmail.com",
        "id": 2,
        "name": "Nguyen Thi Lan",
        "phone": "0903345678",
        "room": {
            "capacity": 3,
            "id": 2,
            "price": 1350000.0,
            "roomNumber": "P102",
            "status": "occupied"
        }
    },
    {
        "email": "baohoang@gmail.com",
        "id": 3,
        "name": "Hoang Gia Bao",
        "phone": "0938765432",
        "room": {
            "capacity": 2,
            "id": 3,
            "price": 1200000.0,
            "roomNumber": "P201",
            "status": "available"
        }
    }
]
3.2 Get tenant by id

Endpoint

GET /tenants/{id}

Response 200 OK

{
    "email": "tuanpm@gmail.com",
    "id": 1,
    "name": "Pham Minh Tuan",
    "phone": "0914567823",
    "room": {
        "capacity": 3,
        "id": 2,
        "price": 1350000.0,
        "roomNumber": "P102",
        "status": "occupied"
    }
}
3.3 Create tenant

Endpoint

POST /tenants

Request Body

{
  "name": "Le Van A",
  "phone": "0987654321",
  "email": "a@gmail.com",
  "room": {
    "id": 1
  }
}

Response 200 OK

{
  "id": 4,
  "name": "Le Van A",
  "phone": "0987654321",
  "email": "a@gmail.com",
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
  "email": "a.updated@gmail.com",
  "room": {
    "id": 3
  }
}

Response 200 OK

{
  "id": 4,
  "name": "Le Van A Updated",
  "phone": "0987654321",
  "email": "a.updated@gmail.com",
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
        "endDate": "2025-12-10",
        "id": 1,
        "room": {
            "capacity": 3,
            "id": 2,
            "price": 1350000.0,
            "roomNumber": "P102",
            "status": "occupied"
        },
        "startDate": "2025-02-10",
        "tenant": {
            "email": "tuanpm@gmail.com",
            "id": 1,
            "name": "Pham Minh Tuan",
            "phone": "0914567823",
            "room": {
                "capacity": 3,
                "id": 2,
                "price": 1350000.0,
                "roomNumber": "P102",
                "status": "occupied"
            }
        }
    },
    {
        "endDate": "2025-11-30",
        "id": 2,
        "room": {
            "capacity": 3,
            "id": 2,
            "price": 1350000.0,
            "roomNumber": "P102",
            "status": "occupied"
        },
        "startDate": "2025-03-01",
        "tenant": {
            "email": "lannt@gmail.com",
            "id": 2,
            "name": "Nguyen Thi Lan",
            "phone": "0903345678",
            "room": {
                "capacity": 3,
                "id": 2,
                "price": 1350000.0,
                "roomNumber": "P102",
                "status": "occupied"
            }
        }
    },
    {
        "endDate": "2025-09-15",
        "id": 3,
        "room": {
            "capacity": 2,
            "id": 3,
            "price": 1200000.0,
            "roomNumber": "P201",
            "status": "available"
        },
        "startDate": "2025-01-15",
        "tenant": {
            "email": "baohoang@gmail.com",
            "id": 3,
            "name": "Hoang Gia Bao",
            "phone": "0938765432",
            "room": {
                "capacity": 2,
                "id": 3,
                "price": 1200000.0,
                "roomNumber": "P201",
                "status": "available"
            }
        }
    }
]
4.2 Get contract by id

Endpoint

GET /contracts/{id}

Response 200 OK

{
    "endDate": "2025-12-10",
    "id": 1,
    "room": {
        "capacity": 3,
        "id": 2,
        "price": 1350000.0,
        "roomNumber": "P102",
        "status": "occupied"
    },
    "startDate": "2025-02-10",
    "tenant": {
        "email": "tuanpm@gmail.com",
        "id": 1,
        "name": "Pham Minh Tuan",
        "phone": "0914567823",
        "room": {
            "capacity": 3,
            "id": 2,
            "price": 1350000.0,
            "roomNumber": "P102",
            "status": "occupied"
        }
    }
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
  "id": 4,
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
  "id": 4,
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
        "amount": 1350000.0,
        "contract": {
            "endDate": "2025-12-10",
            "id": 1,
            "room": {
                "capacity": 3,
                "id": 2,
                "price": 1350000.0,
                "roomNumber": "P102",
                "status": "occupied"
            },
            "startDate": "2025-02-10",
            "tenant": {
                "email": "tuanpm@gmail.com",
                "id": 1,
                "name": "Pham Minh Tuan",
                "phone": "0914567823",
                "room": {
                    "capacity": 3,
                    "id": 2,
                    "price": 1350000.0,
                    "roomNumber": "P102",
                    "status": "occupied"
                }
            }
        },
        "dueDate": "2025-04-05",
        "id": 1,
        "status": "unpaid"
    },
    {
        "amount": 1350000.0,
        "contract": {
            "endDate": "2025-11-30",
            "id": 2,
            "room": {
                "capacity": 3,
                "id": 2,
                "price": 1350000.0,
                "roomNumber": "P102",
                "status": "occupied"
            },
            "startDate": "2025-03-01",
            "tenant": {
                "email": "lannt@gmail.com",
                "id": 2,
                "name": "Nguyen Thi Lan",
                "phone": "0903345678",
                "room": {
                    "capacity": 3,
                    "id": 2,
                    "price": 1350000.0,
                    "roomNumber": "P102",
                    "status": "occupied"
                }
            }
        },
        "dueDate": "2025-04-05",
        "id": 2,
        "status": "paid"
    },
    {
        "amount": 1200000.0,
        "contract": {
            "endDate": "2025-09-15",
            "id": 3,
            "room": {
                "capacity": 2,
                "id": 3,
                "price": 1200000.0,
                "roomNumber": "P201",
                "status": "available"
            },
            "startDate": "2025-01-15",
            "tenant": {
                "email": "baohoang@gmail.com",
                "id": 3,
                "name": "Hoang Gia Bao",
                "phone": "0938765432",
                "room": {
                    "capacity": 2,
                    "id": 3,
                    "price": 1200000.0,
                    "roomNumber": "P201",
                    "status": "available"
                }
            }
        },
        "dueDate": "2025-04-10",
        "id": 3,
        "status": "unpaid"
    }
]
5.2 Get invoice by id

Endpoint

GET /invoices/{id}

Response 200 OK

{
    "amount": 1350000.0,
    "contract": {
        "endDate": "2025-12-10",
        "id": 1,
        "room": {
            "capacity": 3,
            "id": 2,
            "price": 1350000.0,
            "roomNumber": "P102",
            "status": "occupied"
        },
        "startDate": "2025-02-10",
        "tenant": {
            "email": "tuanpm@gmail.com",
            "id": 1,
            "name": "Pham Minh Tuan",
            "phone": "0914567823",
            "room": {
                "capacity": 3,
                "id": 2,
                "price": 1350000.0,
                "roomNumber": "P102",
                "status": "occupied"
            }
        }
    },
    "dueDate": "2025-04-05",
    "id": 1,
    "status": "unpaid"
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
  "id": 4,
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
  "id": 4,
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
        "amount": 1350000.0,
        "id": 1,
        "invoice": {
            "amount": 1350000.0,
            "contract": {
                "endDate": "2025-11-30",
                "id": 2,
                "room": {
                    "capacity": 3,
                    "id": 2,
                    "price": 1350000.0,
                    "roomNumber": "P102",
                    "status": "occupied"
                },
                "startDate": "2025-03-01",
                "tenant": {
                    "email": "lannt@gmail.com",
                    "id": 2,
                    "name": "Nguyen Thi Lan",
                    "phone": "0903345678",
                    "room": {
                        "capacity": 3,
                        "id": 2,
                        "price": 1350000.0,
                        "roomNumber": "P102",
                        "status": "occupied"
                    }
                }
            },
            "dueDate": "2025-04-05",
            "id": 2,
            "status": "paid"
        },
        "paymentDate": "2025-04-02"
    },
    {
        "amount": 500000.0,
        "id": 2,
        "invoice": {
            "amount": 1350000.0,
            "contract": {
                "endDate": "2025-12-10",
                "id": 1,
                "room": {
                    "capacity": 3,
                    "id": 2,
                    "price": 1350000.0,
                    "roomNumber": "P102",
                    "status": "occupied"
                },
                "startDate": "2025-02-10",
                "tenant": {
                    "email": "tuanpm@gmail.com",
                    "id": 1,
                    "name": "Pham Minh Tuan",
                    "phone": "0914567823",
                    "room": {
                        "capacity": 3,
                        "id": 2,
                        "price": 1350000.0,
                        "roomNumber": "P102",
                        "status": "occupied"
                    }
                }
            },
            "dueDate": "2025-04-05",
            "id": 1,
            "status": "unpaid"
        },
        "paymentDate": "2025-04-06"
    },
    {
        "amount": 1200000.0,
        "id": 3,
        "invoice": {
            "amount": 1200000.0,
            "contract": {
                "endDate": "2025-09-15",
                "id": 3,
                "room": {
                    "capacity": 2,
                    "id": 3,
                    "price": 1200000.0,
                    "roomNumber": "P201",
                    "status": "available"
                },
                "startDate": "2025-01-15",
                "tenant": {
                    "email": "baohoang@gmail.com",
                    "id": 3,
                    "name": "Hoang Gia Bao",
                    "phone": "0938765432",
                    "room": {
                        "capacity": 2,
                        "id": 3,
                        "price": 1200000.0,
                        "roomNumber": "P201",
                        "status": "available"
                    }
                }
            },
            "dueDate": "2025-04-10",
            "id": 3,
            "status": "unpaid"
        },
        "paymentDate": "2025-04-09"
    }
]
6.2 Get payment by id

Endpoint

GET /payments/{id}

Response 200 OK

{
    "amount": 1350000.0,
    "id": 1,
    "invoice": {
        "amount": 1350000.0,
        "contract": {
            "endDate": "2025-11-30",
            "id": 2,
            "room": {
                "capacity": 3,
                "id": 2,
                "price": 1350000.0,
                "roomNumber": "P102",
                "status": "occupied"
            },
            "startDate": "2025-03-01",
            "tenant": {
                "email": "lannt@gmail.com",
                "id": 2,
                "name": "Nguyen Thi Lan",
                "phone": "0903345678",
                "room": {
                    "capacity": 3,
                    "id": 2,
                    "price": 1350000.0,
                    "roomNumber": "P102",
                    "status": "occupied"
                }
            }
        },
        "dueDate": "2025-04-05",
        "id": 2,
        "status": "paid"
    },
    "paymentDate": "2025-04-02"
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
  "id": 4,
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
  "id": 4,
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

Notes
All requests and responses use JSON.
For foreign key relationships, send nested objects with id only.
Example: "room": { "id": 1 }
Example: "tenant": { "id": 1 }
Example: "contract": { "id": 1 }
Example: "invoice": { "id": 1 }
