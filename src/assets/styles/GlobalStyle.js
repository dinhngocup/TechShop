import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`{
    html { 
        /**
         * Common
         */ 
        --primary-background: #6A5BDE;
        --foreground: rgb(252, 235, 198);
        --primary-body-background: rgb(246,246,246);
        --main-info-font-color: #666;
        --main-info-background: #f6f6f6;
        --main-bold-info-font-color: #434343;
        --border-color: #e8e8e8;
        --scroll-to-top: rgb(119,35,215);
        
        /**
         * Header
         */
        --header-background: white;
        --header-font-color: #6A5BDE;
        --unactive-nav: black;
        --nav-modal-font-color: #606060;
        // --search-background: rgb(136,40,180);
        --search-background: #5c4bdb;
        --search-result: darkblue;
        

        /**
         * Shopping cart 
         */ 
         --cart-nav-hover: rgb(194,204,206);
         --cart-nav-background: rgb(44,2,134);
         --cart-nav-font: rgb(252, 229, 25);
         --cart-info-font: #999;
         --cart-icon-remove-background: rgb(231,74,97);
         --btn-pay-background: rgb(231,74,97);
         --cart-title: rgb(231,74,97);
         --cart-primary-header: rgb(231,74,97);
         --payment-total: rgb(0, 153, 0);
        --empty-item-font: darkblue;

        /**
         * Review
         */ 
        --review-star-background: rgb(253, 216, 53);
        --review-star-border: rgb(255, 181, 0);
        --reviewed-tag: rgb(0, 153, 0);

        /**
         * Subscription
         */ 
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
        --product-rating: rgb(246,159,0);
        --product-grid-view-title: #f37084;
        --product-category-font: darkblue;
        --product-tab-nav-hover: rgb(194,204,206);
        --product-tab-nav-background: rgb(44,2,134);
        --product-tab-nav-font: rgb(252, 229, 25);
        --product-card-name: rgb(44,0,134);
        --product-description-font: rgb(143,1,131);
        
        /**
         * Order Body
         */ 
        --order-status-detail: rgb(0, 153, 0);
        --order-status: #f37084;
        --order-total: rgb(0,16,151);
        --order-action-btn: #f37084;
        --order-title: rgb(119, 35, 215);
        
        /**
         * List Order
         */ 
        --nav-container-icon-background: #5c4bdb;
        --nav-order-list-background: #6857F6;
        --nav-order-primary-font-color: #6a5bde;
        --order-detail-background: #fffefb;
        --order-status-font-color: #2dc258;
        --icon-successful-modal: rgb(0,153,0);
        --icon-unsuccessful-modal: red;
        --icon-cancel-modal: red;
        
        /**
         * Home
         */ 
        --top-product-nav-border: darkblue;
        --supported-brand-title: rgb(119, 35, 215);
        --subs-font-color: rgb(249, 97, 103);
        // --home-header: rgba(253,96,162,1);
        // --home-header: rgba(59,15,80,1);
        --home-header: rgb(44,2,134);
        // --home-header: rgb(119,35,215);
        // --home-header: rgba(229,166,82,1);
        --btn-add-to-cart-background: white; 
        --btn-add-to-cart-font: rgb(119,35,215);

        
        
    }`;
export default GlobalStyle;
