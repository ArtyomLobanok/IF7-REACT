class ReviewsClient {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    getReviews(params) {
        return this.apiClient.get(`reviews`, params)
    }

    getReview(id) {
        return this.apiClient.get(`reviews/${id}`)
    }
    createReviews(params) {
        return this.apiClient.post(`reviews`, params)
    }
    updateReviews(id, params) {
        return this.apiClient.put(`reviews/${id}`, params)
    }
    deleteReviews(id) {
        return this.apiClient.delete(`reviews/${id}`)
    }
}
export default ReviewsClient;