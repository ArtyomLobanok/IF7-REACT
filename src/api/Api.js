import ReviewsClient from "./ReviewsClient";
import RestClient from "./RestClient";

const BASE_URL = 'https://fe-student-api.herokuapp.com/api/hotels'

class ApiClient  {
    constructor() {
        this.restClient = new RestClient(BASE_URL);
        this.reviewsClient =  new ReviewsClient(this.restClient);
    }
}
export default new ApiClient();