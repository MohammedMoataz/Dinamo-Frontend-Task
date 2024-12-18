# Posts Management Application

This is a React-based application for managing posts. Users can view, add, edit, and delete posts. The application leverages Ant Design for UI components and Axios for API interactions, and it supports error handling via a separate utility.

## Features

- **Display Posts:** View all posts in a paginated table.
- **Add New Post:** Use a floating button to add a new post through a modal form.
- **Edit Existing Post:** Update the title and body of a post directly from the table.
- **Delete Post:** Remove posts with a confirmation message.
- **Error Notifications:** Display user-friendly error messages for API failures.

## Technology Stack

- React with TypeScript
- Ant Design for UI components
- Axios for API requests
- JSONPlaceholder as a mock API

## Assumptions

- The API follows the REST pattern and supports CRUD operations on the `/posts` endpoint.
- Data updates on the mock API (JSONPlaceholder) are simulated but not persisted.

## Challenges Faced

- Managing state between multiple components while keeping the logic modular and reusable.
- Structuring error handling to provide meaningful messages without disrupting the user experience.
- Balancing UI responsiveness with API call delays for loading states.

## Time Spent

- **Initial Setup:** 1 hour
- **API Integration:** 2 hours
- **Component Development:** 3 hours
- **Error Handling:** 1.5 hours
- **Testing and Debugging:** 1 hour

**Total:** ~9 hours

## How to Run the Application

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Installation Steps

1. **Clone the Repository:**

    ```bash
    git clone <repository_url>
    cd posts-management-app
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set Environment Variables:**
    Create a `.env` file in the root directory with the following content:

    ```env
    VITE_BASE_URL=https://jsonplaceholder.typicode.com
    ```

4. **Run the Application:**

    ```bash
    npm start
    # or
    yarn start
    ```

5. **Access the Application:**
    Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### Building for Production

To create an optimized build of the application, run:

```bash
npm run build
# or
yarn build
