import blogsService from './blogService'
import blogsMockService from './blogService/mock'

const isMock = true;

export default function(axiosInstance) {
    return {
        blogsService : (isMock) ? blogsMockService(axiosInstance) : blogsService(axiosInstance)
    }
}