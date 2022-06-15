import { handleResponse } from '../../utils';

export default (ctx) => {
    const $axios = ctx.$axios;
    const $store = ctx.store;
    return {
        getAllLevels(callback, errorHandler) {
            $axios.setHeader("X-Auth-Token", $store.state.token);
            handleResponse($axios.get(
                `/content/levels/all`,
            ), callback, errorHandler);
        },
    }
}