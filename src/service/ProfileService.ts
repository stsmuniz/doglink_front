import http from "@/http";

export const getProfile = (username: string) => http.get(`/profile/${username}`);
