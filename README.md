<h1>Apple Juice Media Search App Overview</h1>

<p>The Apple Juice Media Search App is a React-based application that leverages the iTunes Search API to allow users to explore and discover various media types such as movies, music, podcasts, TV shows, audiobooks, and more. Featuring a sleek, user-friendly interface, the app supports functionalities like user authentication, favorites management, and responsive design for optimal viewing across different devices.</p>

<h2>Technologies and Tools Used</h2>

<ul> <li><strong>Frontend</strong>: React, including hooks (useState, useEffect) and React Router for navigation</li> <li><strong>State Management</strong>: Redux for managing application state</li> <li><strong>Styling</strong>: Bootstrap and custom CSS for responsive design</li> <li><strong>Icons</strong>: React Icons for enhancing UI elements</li> <li><strong>APIs</strong>: iTunes Search API for fetching media content (https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html#//apple_ref/doc/uid/TP40017632-CH3-SW1)</li> <li><strong>Testing</strong>: Jest and React Testing Library for unit and integration tests</li> <li><strong>Deployment</strong>: Create React App (CRA) as the base setup</li> </ul>

<h2>Features</h2>

<ul> <li><strong>User Authentication</strong>: Users can log in to access personalized features like managing a list of favorites.</li> <li><strong>Dynamic Search</strong>: Search functionality integrated with the iTunes Search API to find a wide range of media.</li> <li><strong>Favorites</strong>: Ability to add or remove items from a favorites list.</li> <li><strong>Responsiveness</strong>: A mobile-first design approach ensuring a seamless experience on all devices.</li> </ul>

<h2>Getting Started</h2>

<p>Clone the repository and install dependencies:</p>

<pre><code>git clone https://github.com/Brentyn-Delport/Apple-Juice.git cd apple-juice npm install </code></pre>

<p>Start the development server:</p>

<pre><code>npm start </code></pre>

<p>Visit <a href="http://localhost:3000">http://localhost:3000</a> in your browser to view the app.</p>

<h3>Testing</h3>

<p>The application includes tests written with Jest and React Testing Library focusing on user interactions and component functionality. To run the tests:</p>

<pre><code>npm test </code></pre>

<p>Specifically, the user login functionality is tested to ensure the UI updates correctly upon successful login, utilizing mocked API calls with Jest.</p>

<h3>Available Scripts</h3>

<ul> <li><code>npm start</code>: Runs the app in development mode.</li> <li><code>npm test</code>: Launches the test runner in interactive watch mode.</li> <li><code>npm run build</code>: Builds the app for production.</li> <li><code>npm run eject</code>: Removes the single build dependency from your project.</li> </ul>

<h2>Deployment</h2>

<p>This app was bootstrapped with Create React App, which provides a ready-to-use setup for React applications, including a development server, build scripts, and more. For deployment instructions, refer to the CRA documentation.</p>

<h2>Learn More</h2>

<p>For a deep dive into React and its ecosystem, visit the <a href="https://reactjs.org/">React documentation</a>. To explore more about testing React applications, check out the <a href="https://testing-library.com/docs/react-testing-library/intro/">Testing Library documentation</a>.</p>
