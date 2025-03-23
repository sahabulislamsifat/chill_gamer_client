# Chill Gamer: A Game Review Application
# Live Link: https://chill-gamer-by-sifat.vercel.app/

## Project Description
Chill Gamer is a user-friendly game review platform where gamers can easily explore and share game reviews. The application prioritizes simplicity, functionality, and a "chill" experience. It includes a clean and responsive user interface, featuring essential functionalities such as user authentication and review management to ensure a seamless experience.

---

## Features

### 1. User Authentication
- **Sign Up**: Users can create an account to access all features.
- **Login**: Secure login for existing users.
- **Password Recovery**: Option to reset forgotten passwords.

### 2. Game Review Management
- **Explore Reviews**: View a curated list of reviews by other users.
- **Add Reviews**: Submit new reviews, including ratings and descriptions.
- **Edit/Delete Reviews**: Modify or delete your own reviews.
- **Like & Comment**: Interact with other users by liking or commenting on their reviews.

### 3. Clean & Responsive User Interface
- **Mobile-Friendly**: Optimized for various screen sizes.
- **Minimalistic Design**: Focused on simplicity and usability.
- **Dark/Light Modes**: Option to switch themes based on user preference.

---

## Technologies Used

### Frontend
- **HTML,Tailwind CSS, JavaScript**: For structure and interactivity.
- **React.js**: A powerful framework for building dynamic user interfaces.
### Additional Tools
- **AOS-Animation,React-Typewriter,React-tooltip** : For more Interactive

### Backend
- **Node.js & Express.js**: For server-side operations.
- **MongoDB**: Database for storing user data and reviews.

### Additional Tools
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **RESTful APIs**: To facilitate communication between the frontend and backend.
---

## Installation

### Prerequisites
- Node.js and npm must be installed.
- MongoDB must be installed and running.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sahabulislamsifat/chill-gamer.git
   cd chill-gamer
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and configure the following:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```
4. **Start the Development Server**:
   ```bash
   npm start
   ```
5. **Access the Application**:
   Open your browser and navigate to `http://localhost:5000`.

---

## Usage
1. Sign up or log in to access the platform.
2. Explore reviews by browsing the home page.
3. Add your own reviews by clicking the "Add Review" button.
4. Interact with other users by liking or commenting on reviews.

---

## Roadmap
- **Phase 1**: Core features (User authentication, CRUD operations for reviews).
- **Phase 2**: Enhanced interactivity (likes, comments, user profiles).
- **Phase 3**: Advanced functionalities (search, filter, game recommendations).

---

## Contribution
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a feature branch.
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes.
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch.
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- Inspiration for the project theme.
- Open-source tools and libraries used.
