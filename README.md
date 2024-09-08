# School Website Project

This is a responsive school website built using React. The project showcases various front-end development techniques, including smooth scrolling with `react-scroll`, form handling with `Web3Forms API`, video integration, and modern React features such as `useState`, `useEffect`, and `useRef` for DOM manipulation and component control.

## Features

### 1. **Responsive Design**
- The website is fully responsive and adapts to different screen sizes.
- On smaller screens, the navbar transforms into a side navigation bar for a better user experience.

### 2. **Smooth Scrolling**
- The website implements smooth scrolling using the `react-scroll` package.
- When users click on a navigation link, the page scrolls smoothly to the corresponding section, enhancing the user experience.

### 3. **Form Handling with Web3Forms**
- I integrated `Web3Forms API` to handle form submissions.
- When users submit a form on the website, the data is sent directly to my email account, providing seamless contact functionality.

### 4. **Video Integration**
- A video is embedded within the website to provide interactive media content.
- The video enhances the website’s user engagement by providing rich multimedia content that showcases learning process at school.

## Technologies and Concepts Used

### 1. **React Hooks**
- **`useState`**: Used to manage component-level state, such as control over video display, toggling the navbar, etc.
- **`useEffect`**: Used to handle side effects like fetching data, updating the DOM after render, and initializing third-party libraries like `react-scroll`.
- **`useRef`**: Applied for accessing and manipulating DOM elements directly, especially when working with dynamic UI updates.

### 2. **DOM Manipulation**
- Leveraged React's virtual DOM for efficient updates, ensuring smooth interactions such as scrolling and form submissions.
- `useRef` was used to directly manipulate elements, such as controlling the visibility of the side navigation bar in the mobile version.

### 3. **Component-Based Architecture**
- The project follows a modular structure where different sections of the website, like the header, footer, video section, and various content blocks, are divided into reusable components.
- This approach improves maintainability and scalability.

### 4. **CSS for Styling**
- The website uses both traditional CSS and modern techniques like Flexbox and СSS Position to create a responsive layout.
- Media queries were used to adapt the design to different screen sizes, especially for the side navigation bar on mobile devices.

### 5. **Video Integration**
- The video element is used within the website to display multimedia content.
- The video is embedded using the HTML `<video>` tag and styled to be responsive across different devices.

## Installation and Setup

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/amir-amirov/react-jaiyq-school.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd react-jaiyq-school
   ```
   
3. Install dependencies:
   ```bash
   npm install
   ```
   
4. Run the development server:
   ```bash
   npm start
   ```

The app should now be running at `http://localhost:3000`.

## Future Improvements

- Add more animations for a smoother UI experience.
- Extend the form functionality to handle validation and error feedback.

## Note

- If you are about to clone and use this project, please get and add your own access key from web3forms.