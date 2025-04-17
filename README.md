# Bike Service Management API 🚲

## Overview
A robust REST API for managing bike service operations built with Node.js, Express, Prisma, and PostgreSQL.

## Tech Stack 🛠️
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Validation**: Zod
- **Language**: TypeScript

## Key Features ✨
- 👥 Complete customer management
- 🏍️ Bike inventory tracking
- 🔧 Service records management
- ✅ Input validation with Zod
- 🔍 Search and filtering capabilities
- 📝 Detailed error handling

## API Endpoints 🌐

### Customers
```http
GET    /api/customers     # Get all customers
POST   /api/customers     # Create customer
GET    /api/customers/:id # Get single customer
PATCH  /api/customers/:id # Update customer
DELETE /api/customers/:id # Delete customer
```

### Bikes
```http
GET    /api/bikes     # Get all bikes
POST   /api/bikes     # Add bike
GET    /api/bikes/:id # Get single bike

```

### Services
```http
GET    /api/services     # Get all services
POST   /api/services     # Create service
GET    /api/services/:id # Get single service
PATCH  /api/services/:id # Update service

```

## Installation 📥

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/bike-service-api.git
cd bike-service-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
```bash
cp .env.example .env
```

4. **Set up database**
```bash
npx prisma migrate dev
```

5. **Start server**
```bash
npm run dev
```

## Environment Variables 🔐
```env
DATABASE_URL="postgresql://username:password@localhost:5432/bike_service_db"
PORT=5000
```

## Data Models 📊

### Customer
```typescript
{
  customerId: string;    // UUID
  name: string;
  email: string;        // Unique
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Bike
```typescript
{
  bikeId: string;      // UUID
  brand: string;
  model: string;
  year: number;
  customerId: string;  // Foreign Key
  createdAt: Date;
  updatedAt: Date;
}
```

### Service
```typescript
{
  serviceId: string;    // UUID
  bikeId: string;      // Foreign Key
  serviceDate: Date;
  completionDate?: Date;
  description: string;
  status: "PENDING" | "IN_PROGRESS" | "DONE";
  createdAt: Date;
  updatedAt: Date;
}
```

## Error Responses 🚫
```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "code": "ERROR_CODE",
    "details": {}
  }
}
```

## Contributing 🤝
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📝
This project is licensed under the MIT License.