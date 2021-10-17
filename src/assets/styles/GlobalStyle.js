import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`{
    html { 
        /**
         * Common
         */ 
        --primary-background: #e77733;
        --foreground: rgb(252, 235, 198);
        --primary-body-background: rgb(246,246,246);
        --main-info-font-color: #666;
        --main-info-background: #f6f6f6;
        --main-bold-info-font-color: #434343;
        --unactive-nav: black;
        --nav-modal-font-color: #606060;
        --border-color: #e8e8e8;

        /**
         * Shopping cart header 
         */ 
        --cart-primary-header: #C8A165;
        --cart-info-font-color: #999;
        
        /**
         * Review
         */ 
        --review-star-background: rgb(253, 216, 53);
        --review-star-border: rgb(255, 181, 0);
        --reviewed-tag: rgb(0, 153, 0);

        /**
         * Subscription
         */ 
        --subs-font-color: rgb(249, 97, 103);
        --review-star-border: rgb(255, 181, 0);
        --reviewed-tag: rgb(0, 153, 0);

        /**
         * Stock status
         */ 
        --in-stock-status: #5cb85c;
        --out-of-stock-status: red;

        /**
         * Product
         */ 
        --description-font-color: #909295;

        /**
         * Order Status
         */ 
        --order-status-detail: rgb(0, 153, 0);

        /**
         * List Order
         */ 
        --nav-container-icon-background: #5c4bdb;
        --nav-order-list-background: #6857F6;
        --nav-order-primary-font-color: #6a5bde;
        --nav-order-primary-font-color1: #6a5bd4;
        --nav-order-primary-font-color3: #6a5bd4;


}`;
export default GlobalStyle;
