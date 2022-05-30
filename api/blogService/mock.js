import { handleResponse, mockPendingPromise } from '../utils';
import mockAssets from './mockAssets'

export default ($axios) => {
    return {
        getBlog(blogId, callback, errorHandler) {
            console.log(`API Call for "getBlog" with blogId=${blogId}`);
            handleResponse(mockPendingPromise({
                title: 'Demo Blog For Testig',
                coverImageId: '12aswerm3234opse',
                content: mockAssets.demoBlog,
                totalClaps: 100
            }), callback, errorHandler);
        },
        clapOnBlog(blogId, authToken, callback, errorHandler) {
            console.log(`API Call for "clapOnBlog" with blogId=${blogId} and authToken=${authToken}`);
            handleResponse(mockPendingPromise({
                message: 'Clap was successful!'
            }), callback, errorHandler);
        },
    }
}