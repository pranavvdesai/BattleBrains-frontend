
import { handleResponse } from '../../utils';

export default ($axios) => {
    return {
        getBlog(blogId, callback, errorHandler) {
            handleResponse($axios.get(
                `/blogs/${blogId}`,
            ), callback, errorHandler);
        },
        clapOnBlog(blogId, authToken, callback, errorHandler) {
            $axios.setHeader('X-Auth-Token', authToken);
            handleResponse($axios.post(
                `/blogs/${blogId}?action=clap`,
            ), callback, errorHandler);
        },
    }
}