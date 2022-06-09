import blogsService from './services/blogs'
import blogsMockService from './services/blogs/mock'

const isMock = true;

export default function(axiosInstance) {
    return {
        blogsService : (isMock) ? blogsMockService(axiosInstance) : blogsService(axiosInstance)
    }
}