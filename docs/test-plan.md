# Test Plan

## 1. Test Strategy

The testing strategy ensures that the Boarding House / Dormitory Management System works correctly and meets user requirements.

Testing activities include:

- **Unit Testing**: Test individual backend components developed with Spring Boot.
- **Integration Testing**: Verify the interaction between backend services and the PostgreSQL database.
- **API Testing**: Use Postman to test REST APIs such as login, room management, tenant management, and invoice creation.
- **UI Testing**: Test the Thymeleaf-based frontend interface to ensure it correctly interacts with backend APIs.
- **Manual Testing**: Perform manual testing for core system features to ensure usability and correctness.

---

## 2. Test Scope

### Features to be tested

The following core features will be tested:

1. **Account Management**
   - User registration
   - User login
   - Role-based access (Admin / Tenant)

2. **Room Management**
   - Add new room
   - Edit room information
   - Delete room
   - View room list
   - Update room status (Available / Occupied)

3. **Tenant Management**
   - Add tenant information
   - Update tenant information
   - Delete tenant
   - View tenant list

4. **Contract Management**
   - Create rental contract
   - Track rental duration
   - View contract list

5. **Invoice and Payment Management**
   - Create rental invoice
   - Record payment
   - View payment history

### Features not included in testing

- Performance testing
- Advanced security testing
- Mobile device compatibility testing

---

## 3. Test Environment

| Component | Technology |
|----------|------------|
| Backend | Spring Boot |
| Frontend | Thymeleaf |
| Database | PostgreSQL |
| API Testing Tool | Postman |
| Operating System | Windows |
| Browser | Google Chrome |

---

## 4. Basic Test Cases

| Test Case ID | Feature | Description | Expected Result |
|--------------|--------|------------|----------------|
| TC01 | Login | User enters valid username and password | Login successful |
| TC02 | Login | User enters invalid password | Error message displayed |
| TC03 | Register | User registers a new account | Account created successfully |
| TC04 | Add Room | Admin adds a new room | Room is added successfully |
| TC05 | Update Room | Admin updates room information | Room information updated |
| TC06 | View Rooms | User views the list of rooms | Room list displayed |
| TC07 | Add Tenant | Admin adds new tenant information | Tenant added successfully |
| TC08 | Update Tenant | Admin edits tenant information | Tenant information updated |
| TC09 | Create Contract | Admin creates a rental contract | Contract saved successfully |
| TC10 | Create Invoice | Admin creates a rental invoice | Invoice stored in database |
| TC11 | Record Payment | Admin records payment for invoice | Payment recorded successfully |
| TC12 | View Payment History | Admin views payment history | Payment history displayed |
