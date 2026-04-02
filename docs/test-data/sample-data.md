# SAMPLE TEST DATA

## 1. Account (Tài khoản test)

| Username | Password | Role |
|----------|---------|------|
| admin | 123456 | Admin |
| user1 | 123456 | User |
| user2 | 123456 | User |

---

## 2. Room (Dữ liệu phòng)

| Room ID | Room Name | Price | Status |
|--------|----------|-------|--------|
| R01 | Room A | 1000000 | Available |
| R02 | Room B | 1200000 | Occupied |
| R03 | Room C | 900000 | Available |

---

## 3. Tenant (Người thuê)

| Tenant ID | Name | Phone | Room ID |
|----------|------|--------|--------|
| T01 | Nguyen Van A | 0901234567 | R01 |
| T02 | Tran Thi B | 0912345678 | R02 |

---

## 4. Contract (Hợp đồng)

| Contract ID | Tenant ID | Room ID | Start Date | End Date |
|-------------|----------|--------|------------|----------|
| C01 | T01 | R01 | 2024-01-01 | 2024-12-31 |
| C02 | T02 | R02 | 2024-02-01 | 2025-01-31 |

---

## 5. Invoice (Hóa đơn)

| Invoice ID | Room ID | Amount | Status |
|------------|--------|--------|--------|
| I01 | R01 | 1000000 | Unpaid |
| I02 | R02 | 1200000 | Paid |