# Identity Reconciliation API

This project goal is to identify and link multiple customer records that may have different contact information (e.g., email, phone number) across multiple purchases.

## Technologies Used
- **Node.js** (Backend)
- **TypeScript** (For type safety)
- **Express.js** (Web framework)
- **Sequelize ORM** (Database interaction)
- **SQLite** (Database engine)

## Features
- **/identify Endpoint**: The `/identify` endpoint accepts a POST request with either an email, phone number, or both to identify or create a contact record. It links related contacts when possible and returns a consolidated contact profile.
- **Primary/Secondary Contact Linking**: The API links multiple contact records that belong to the same person (primary and secondary contacts).
- **Database**: Contacts are stored in a relational database with fields for email, phone number, and linked contact IDs.

## Setup

### Prerequisites

Ensure following installed:
- **Node.js**: You can download it from [nodejs.org](https://nodejs.org/).
- **SQLite**: For this example, we're using SQLite as the database engine, which is lightweight and easy to set up.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Vishalesh-sekar/Identity-Reconciliation.git
    ```

2. Navigate to the project folder:
    ```bash
    cd Identity-Reconciliation
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file for your environment variables:
    ```bash
    touch .env
    ```

    Add the following content to your `.env` file:

    ```bash
    DB_PATH=./database.sqlite  # Path for your SQLite database
    ```

5. Run the application:
    ```bash
    npm start
    ```

6. The server will start on port `3000` by default. You can make requests to `http://localhost:3000/api/contacts` or `http://localhost:3000/identify`.


## Deployed Endpoint

You can access the service at the following endpoint:

- **/identify**: `https://identity-reconciliation-msx0.onrender.com/api/contacts`


### API Endpoints

#### **POST /identify**

This endpoint identifies or creates a contact by matching either the `email` or `phoneNumber`. It returns a consolidated contact profile.

**Request Body** (JSON):

```json
{
  "email": "primary@example.com",
  "phoneNumber": "1234567890"
}
```
```json
{
  "email": "secondary@example.com",
  "phoneNumber": "1234567890"
}
```
