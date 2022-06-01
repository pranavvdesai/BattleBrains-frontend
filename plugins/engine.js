import serviceIndex from "~/api/serviceIndex";

export default (ctx, inject) => {
    const services = serviceIndex(ctx.$axios);
    inject('engine', services);
}