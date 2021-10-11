import { createGlobalStyle } from 'styled-components';
import _get from 'lodash/get';
const GlobalStyle = createGlobalStyle `{
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

        // /**
        //  * Common
        //  */ 
        // --primary-background: green;
        // --foreground: red;
        // --primary-body-background: pink;
        // --main-info-font-color: green;
        // --main-info-background: brown;
        // --main-bold-info-font-color: aqua;
        // --unactive-nav: white;
        // --nav-modal-font-color: red;

        // /**
        //  * Shopping cart header 
        //  */ 
        // --cart-primary-header: yellow;
        // --cart-info-font-color: purple;
        
        // /**
        //  * Review
        //  */ 
        // --review-star-background: purple;
        // --review-star-border: brown;
        // --reviewed-tag: pink;

        // /**
        //  * Subscription
        //  */ 
        // --subs-font-color: pink;
        // --review-star-border: red;
        // --reviewed-tag: pink;

        // /**
        //  * Stock status
        //  */ 
        // --in-stock-status: green;
        // --out-of-stock-status: red;

        // /**
        //  * Product
        //  */ 
        // --description-font-color: aqua;

        


}`;
export default GlobalStyle;