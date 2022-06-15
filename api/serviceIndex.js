import blogsService from './services/blogs'
import blogsMockService from './services/blogs/mock'
import contentService from './services/content';

const isMock = false;

export default function(ctx) {
    return {
        blogsService : blogsService(ctx),
        contentService : contentService(ctx)
    }
}