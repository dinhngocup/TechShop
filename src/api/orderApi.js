import * as UrlConstant from "utilities/UrlConstant";
import axiosClientAuthen from "./axiosClientAuthen";
const OrderApi = {
    getAllCompletedOrders: async () => {
        const url = `${UrlConstant.GET_ALL_COMPLETED_ORDER}`;
        return axiosClientAuthen.get(url);
    },
    getDetailedOrder: async (id) => {
        const url = `${UrlConstant.GET_DETAILED_ORDER}/${id}`;
        return axiosClientAuthen.get(url);
    }
}
export default OrderApi;