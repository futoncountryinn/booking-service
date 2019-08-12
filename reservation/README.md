# AirBnB component for booking a room

> Project description

## Related Projects

  - https://github.com/futoncountryinn/photos-service
  - https://github.com/futoncountryinn/reviews-service
  - https://github.com/futoncountryinn/booking-proxy

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

---

## Getting Started

### Prerequisites
In your terminal,
- [ ] `npm install`

### Starting the App
In your terminal,
- [ ] Run webpack `npm run build-dev` or `npm run build-prod`
- [ ] Start your server `npm start`
- [ ] Seed the database w/ fake data `npm run seed`

In your browser,
- [ ] Navigate to `http://localhost:3002`

### Testing
In your terminal,
- [ ] Run Jest tests for MongoDB connection & Express server connections `npm test`

---

## API Routes

Multiple API routes are supported, including:

### `GET` with route `/checkout` to get all reservation records:

### `POST` with route `/` to insert new records
- include `{checkin: value, checkout: value}` in request body

### `DELETE` with route `/` to remove reservation record
- incude `{id: value}` in request body

### `PUT` with route `/` to update an existing record
- include `{id: value, checkin: value, checkout: value}` in request body