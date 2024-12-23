export const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      return response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };
  