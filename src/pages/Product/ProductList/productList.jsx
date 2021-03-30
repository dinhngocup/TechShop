import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Col, Row } from "reactstrap";
import ProductCard from "../ProductCard/productCard";
import ProductModal from "../ProductModal/productModal";

function ProductList() {
  //console.log("list");

  const { slug } = useParams();
  const [products, setProducts] = useState([]);

  // get products
  useEffect(() => {
    let products = [];
    // call api

    // temp data
    switch (slug) {
      case "smart-watch":
        products = [
          {
            img: "",
            rate: 2.7,
            name: "Apple Watch 1",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.1,
            name: "Apple Watch 2",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },

          {
            img: "",
            rate: 3.4,
            name: "Apple Watch 3",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.8,
            name: "IApple Watch 4",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4,
            name: "Apple Watch 5",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4.1,
            name: "Apple Watch 6",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4.6,
            name: "Apple Watch 7",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4.8,
            name: "Apple Watch 8",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
        ];
        break;
      case "pc-accessories":
        products = [
          {
            img: "",
            rate: 2.7,
            name: "PC 1",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.1,
            name: "PC 2",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },

          {
            img: "",
            rate: 3.4,
            name: "PC 3",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.8,
            name: "PC 4",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4,
            name: "PC 5",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4.1,
            name: "PC 6",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
        ];
        break;
      case "audio-system":
        products = [
          {
            img: "",
            rate: 2.7,
            name: "Audio 1",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.1,
            name: "Audio 2",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },

          {
            img: "",
            rate: 3.4,
            name: "Audio 3",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.8,
            name: "Audio 4",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4,
            name: "Audio 5",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4.1,
            name: "Audio 6",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
        ];
        break;
      case "headphone":
        products = [
          {
            img: "",
            rate: 2.7,
            name: "Headphone 1",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.1,
            name: "Headphone 2",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },

          {
            img: "",
            rate: 3.4,
            name: "Headphone 3",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.8,
            name: "Headphone 4",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4,
            name: "Headphone 5",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4.1,
            name: "Headphone 6",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4.1,
            name: "Headphone 7",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
        ];
        break;
      case "mouse":
        products = [
          {
            img: "",
            rate: 2.7,
            name: "Mouse 1",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.1,
            name: "Mouse 2",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },

          {
            img: "",
            rate: 3.4,
            name: "Mouse 3",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.8,
            name: "Mouse 4",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4,
            name: "Mouse 5",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4.1,
            name: "Mouse 6",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
        ];
        break;
      case "gaming-desk-chair":
        products = [
          {
            img: "",
            rate: 2.7,
            name: "Gaming 1",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.1,
            name: "Gaming 2",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },

          {
            img: "",
            rate: 3.4,
            name: "Gaming 3",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.8,
            name: "Gaming 4",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4,
            name: "Gaming 5",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4.1,
            name: "Gaming 6",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
        ];
        break;
      case "laptop":
        products = [
          {
            img: "",
            rate: 2.7,
            name: "Laptop 1",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.1,
            name: "Laptop 2",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },

          {
            img: "",
            rate: 3.4,
            name: "Laptop 3",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.8,
            name: "Laptop 4",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4,
            name: "Laptop 5",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4.1,
            name: "Laptop 6",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
        ];
        break;
      case "monitor":
        products = [
          {
            img: "",
            rate: 2.7,
            name: "Monitor 1",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.1,
            name: "Monitor 2",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },

          {
            img: "",
            rate: 3.4,
            name: "Monitor 3",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 3.8,
            name: "Monitor 4",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4,
            name: "Monitor 5",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
          {
            img: "",
            rate: 4.1,
            name: "Monitor 6",
            price: "10.000.000đ",
            shortDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt distinctio saepe laudantium, nam unde quaerat perferendis harum, aspernatur atque blanditiis rerum possimus! Praesentium dolorum, accusamus repellat doloribus ex ipsam.",
          },
        ];
        break;
      default:
        break;
    }
    setProducts(products);
  }, [slug]);

  const stateProductModal = useSelector((state) => state.productModal);
  return (
    
    <React.Fragment>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs="12" sm="6" md="4" lg="4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <ProductModal product={stateProductModal.data} />
    </React.Fragment>
  );
}

export default ProductList;
