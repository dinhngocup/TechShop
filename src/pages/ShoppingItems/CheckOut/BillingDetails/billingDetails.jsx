import React from "react";
import "./_billingDetails.scss";

function BillingDetails(props) {
  return (
    <div className='billing-details'>
      <div>
        <h4>Billing Details</h4>
      </div>
      <div className='mt-4'>
          <input placeholder="Your name here..."/>
          <input placeholder="Email address here..."/>
          <input placeholder="Phone here..."/>
          <select id="" name="">
          <option value="0">Chọn tỉnh thành</option>
          <option value="89">Tỉnh An Giang</option>
          <option value="77">Tỉnh Bà Rịa - Vũng Tàu</option>
          <option value="24">Tỉnh Bắc Giang</option>
          <option value="06">Tỉnh Bắc Kạn</option>
          <option value="95">Tỉnh Bạc Liêu</option>
          <option value="27">Tỉnh Bắc Ninh</option>
          <option value="83">Tỉnh Bến Tre</option>
          <option value="74">Tỉnh Bình Dương</option>
          <option value="52">Tỉnh Bình Định</option>
          <option value="70">Tỉnh Bình Phước</option>
          <option value="60">Tỉnh Bình Thuận</option>
          <option value="96">Tỉnh Cà Mau</option>
          <option value="92">Thành Phố Cần Thơ</option>
          <option value="04">Tỉnh Cao Bằng</option>
          <option value="48">Thành Phố Đà Nẵng</option>
          <option value="66">Tỉnh Đắk Lắk</option>
          <option value="67">Tỉnh Đắk Nông</option>
          <option value="11">Tỉnh Điện Biên</option>
          <option value="75">Tỉnh Đồng Nai</option>
          <option value="87">Tỉnh Đồng Tháp</option>
          <option value="64">Tỉnh Gia Lai</option>
          <option value="02">Tỉnh Hà Giang</option>
          <option value="35">Tỉnh Hà Nam</option>
          <option value="01">Thành Phố Hà Nội</option>
          <option value="42">Tỉnh Hà Tĩnh</option>
          <option value="30">Tỉnh Hải Dương</option>
          <option value="31">Thành Phố Hải Phòng</option>
          <option value="93">Tỉnh Hậu Giang</option>
          <option value="79" selected="">
            Thành Phố Hồ Chí Minh
          </option>
          <option value="17">Tỉnh Hòa Bình</option>
          <option value="33">Tỉnh Hưng Yên</option>
          <option value="56">Tỉnh Khánh Hòa</option>
          <option value="91">Tỉnh Kiên Giang</option>
          <option value="62">Tỉnh Kon Tum</option>
          <option value="12">Tỉnh Lai Châu</option>
          <option value="68">Tỉnh Lâm Đồng</option>
          <option value="20">Tỉnh Lạng Sơn</option>
          <option value="10">Tỉnh Lào Cai</option>
          <option value="80">Tỉnh Long An</option>
          <option value="36">Tỉnh Nam Định</option>
          <option value="40">Tỉnh Nghệ An</option>
          <option value="37">Tỉnh Ninh Bình</option>
          <option value="58">Tỉnh Ninh Thuận</option>
          <option value="25">Tỉnh Phú Thọ</option>
          <option value="54">Tỉnh Phú Yên</option>
          <option value="44">Tỉnh Quảng Bình</option>
          <option value="49">Tỉnh Quảng Nam</option>
          <option value="51">Tỉnh Quảng Ngãi</option>
          <option value="22">Tỉnh Quảng Ninh</option>
          <option value="45">Tỉnh Quảng Trị</option>
          <option value="94">Tỉnh Sóc Trăng</option>
          <option value="14">Tỉnh Sơn La</option>
          <option value="72">Tỉnh Tây Ninh</option>
          <option value="34">Tỉnh Thái Bình</option>
          <option value="19">Tỉnh Thái Nguyên</option>
          <option value="38">Tỉnh Thanh Hóa</option>
          <option value="46">Tỉnh Thừa Thiên Huế</option>
          <option value="82">Tỉnh Tiền Giang</option>
          <option value="84">Tỉnh Trà Vinh</option>
          <option value="08">Tỉnh Tuyên Quang</option>
          <option value="86">Tỉnh Vĩnh Long</option>
          <option value="26">Tỉnh Vĩnh Phúc</option>
          <option value="15">Tỉnh Yên Bái</option>
        </select>
          <textarea placeholder="Your address here..."/>
      </div>
    </div>
  );
}

BillingDetails.propTypes = {};

export default BillingDetails;
