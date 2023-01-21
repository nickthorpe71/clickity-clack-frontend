import axios from "axios";

const baseURL = "https://wktjyi7ccf.sharedwithexpose.com";

const http = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

const actions = {
    get: (endpoint: string) => http.get(`${baseURL}${endpoint}`),
    post: (endpoint: string, data: any) =>
        http.post(`${baseURL}${endpoint}`, data),
    put: (endpoint: string, data: any) =>
        http.put(`${baseURL}${endpoint}`, data),
    delete: (endpoint: string) => http.delete(`${baseURL}${endpoint}`),
};

const api = {
    joinShowdown: (userId: string) =>
        actions.get(`/api/showdown/join/${userId === "comb-1" ? "" : userId}`),
    // joinShowdown: (userId: string) => actions.get(`/api/showdown/join/`),
    confirmShowdown: (showdownId: string) =>
        actions.get(`/api/showdown/${showdownId}/confirm`),
    submitPerformance: (
        userId: string,
        duration: number,
        showdownId: string,
        roundId: string
    ) =>
        actions.post(
            `/api/showdown/${showdownId}/round/${roundId}/performance`,
            {
                userId,
                duration,
            }
        ),
};

export default api;
