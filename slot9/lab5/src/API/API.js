export const fetchUser = async (userId, timeout = 3000) => {
    try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            { signal: controller.signal }
        );

        clearTimeout(timer);

        if (!response.ok) {
            throw new Error("Fetch user failed! Status: " + response.status);
        }

        return await response.json();
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Timeout!");
            return null;
        }
        return null;
    }

};


export const fetchPost = async (postId, timeout = 3000) => {
    try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            { signal: controller.signal }
        );

        clearTimeout(timer);

        if (!response.ok) {
            throw new Error("Fetch post failed! Status: " + response.status);
        }

        return await response.json();
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Timeout!");
            return null;
        }
        return null;
    }

};


export function createResource(promise) {
    let status = "pending";
    let result;

    const suspender = promise.then(
        (data) => {
            status = "success";
            result = data;
        },
        (error) => {
            status = "error";
            result = error;
        }
    );

    return {
        read() {
            if (status === "pending") throw suspender;
            if (status === "error") throw result;
            return result;
        }
    };
}
