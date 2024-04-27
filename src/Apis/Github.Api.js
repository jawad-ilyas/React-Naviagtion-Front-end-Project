import axios from "axios";

const fetchGithubUsers = async () => {
    try {
        // Define the minimum number of followers you want to filter by
        const minFollowers = 1000;

        // Fetch users with followers greater than minFollowers
        const response = await axios.get(`https://api.github.com/search/users?q=followers:>${minFollowers}&per_page=15`);

        // Log the response data
        // console.log("Response from GitHub API:", response.data);
        return response.data?.items;
    } catch (error) {
        console.error("Error fetching GitHub users:", error);
        throw error;
    }
};

export { fetchGithubUsers };
