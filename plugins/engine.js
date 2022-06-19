import serviceIndex from "~/api/serviceIndex";

export default (ctx, inject) => {
    const services = serviceIndex(ctx);
    inject('engine', services);
}