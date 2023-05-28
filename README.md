# Posts App Documentation
## Introduction
This documentation provides an overview of a Next.js project and its components. The project includes pages for displaying favorite posts and all posts, along with various reusable components and a context for managing post data.

## Features
1. Well-designed layout
2. Loading and error indicator pages for smooth user experience
3. Two main pages: Home Posts and Favorite Posts
4. Navigation bar for easy page navigation
5. View and interact with a list of posts
6. Mark posts as favorites
7. Favorites stored in local storage
8. Heart icon indicating whether a post is added to favorites

## The project includes the following pages:
### All Posts Page
This page displays a list of all posts. It shows all the posts available in the application.
### Favorite Posts Page
This page displays a list of favorite posts. It filters the posts based on the isPostFav property of each post. If there are no favorite posts, a message is displayed indicating the absence of posts.

## The project includes the following Components:
### PostHeader
This component represents the header section of a post. It includes the user's profile image, name, and username. It also includes an ellipsis icon for additional options.

### PostImg
This component displays the main image and content of a post. It includes the post description, title, and an icon for toggling the favorite state of the post.

### PostFooter
This component displays the footer section of a post. It shows the number of likes, post captions, tags, and the number of comments.

### ListOfPosts
This component displays a list of posts. It takes a postsList prop, which is an array of PostDetails objects. It also includes a loading state and handles the case when there are no posts available.

### CircularImage
This component renders a circular image using the next/image component. It takes a userPP prop, which specifies the URL of the user's profile picture.

### NavBar
This component represents a navigation bar with two links: Home and Liked. It changes the color of the icons based on the active page. The appearance of the navigation bar changes based on the width of the screen.

### Loading
This component renders a loading indicator, displaying a loading message and a spinner animation.

### Context
The project includes a context for managing post data:

### PostsContextProvider
This context provider component manages the state of post data. It initializes the posts list from local storage or sets it to the default list if no data is found. The context provides a function toggleIsFavPost for toggling the favorite state of a post.

To use the context, import the postsContext and usePostContext from @/context/context. Wrap your components with the PostsContextProvider to access the post data and toggle functions.

## How to Use the project
To use this project, follow the steps below:

Clone the project repository to your local machine.
Install the required dependencies by running the following command in the project directory:
```
npm install
```
Start the development server by running the following command:
```
npm run dev
```
Open your browser and access the project at http://localhost:3000.

