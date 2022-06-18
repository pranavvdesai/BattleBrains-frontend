import blogsService from './services/blogs'
import contentService from './services/content';
import authenticationService from './services/authentication';

const isMock = false;

export default function(ctx) {
    return {
        blogsService : blogsService(ctx),
        contentService : contentService(ctx),
        authenticationService: authenticationService(ctx)
    }
}