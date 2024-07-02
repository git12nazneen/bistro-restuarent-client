# Bistro Boss

Bistro Boss is a restaurant website where customers can browse and purchase food items. The site offers a user-friendly interface for viewing the menu, selecting items, and placing orders.

<p>Click here <a href="https://bistro-boss-6004a.web.app/">Live site</a></p>

## Features
- Browse the menu with various categories of food items
- View detailed descriptions, prices, and images of food items
- Add items to the cart and place orders
- User authentication and profile management
- Responsive design for optimal viewing on any device

## Technologies Used

### Front-end:
- HTML
- CSS
- JavaScript
- React.js

### Back-end:
- Node.js
- Express.js
- MongoDB

### Other Tools:
- Redux for state management
- JWT for authentication
- Axios for API calls

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- npm (Node Package Manager)
- MongoDB

### Steps

1. Clone the repository:
    ```bash
    https://github.com/git12nazneen/bistro-restuarent-client.git
    cd bistro-boss
    ```

2. Install dependencies:
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Run the application:
    In the root directory, run:
    ```bash
    npm run dev
    ```
    This will start both the server and the client concurrently.

## Usage
1. Open your browser and go to `http://localhost:3000`.
2. Browse the menu and add items to your cart.
3. Proceed to checkout and place your order.
4. Register or log in to manage your profile and view order history.

