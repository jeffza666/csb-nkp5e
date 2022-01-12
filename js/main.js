(function ($) {
  var myBlog = [
    {
      title: "G-223",
      text:
        "บ้านขนาดกลาง สไตล์ Modern Contemporary  โปร่ง โล่ง  รับแสงธรรมชาติ ทุก พื้นที่ในบ้านสามารถใช้งานจริง ตอบโจทย์การใช้ชีวิตในทุกรูปแบบ ให้ความอบอุ่น ห้องพักผ่อนกว้าง แยกส่วนรับแขก ครัวนอก และครัวไทย จำนวน 3 ห้องนอน 3 ห้องน้ำ",
      image: "images/1.jpg",
      link:
        "https://hba-th.org/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%A7%E0%B8%A2/product/722"
    },
    {
      title: "BL-08",
      text:
        "แบบบ้านสวย ทันสมัย สไตล์ Modern-Contemporary เป็นแบบบ้าน Multifamily สำหรับผู้ต้องการสร้างบ้านสำหรับสมาชิกหลายครอบครัว ด้วยการออกแบบกลุ่มอาคารที่เชื่อมกัน ด้วยการจัดพื้นที่ใช้สอยดูเป็นหลังเดียวอย่างอบอุ่นด้วยพื้นที่ใช้สอยขนาดใหญ่ จัดวางตำแหน่งห้องได้อย่างลงตัว",
      image: "images/2.jpg",
      link:
        "https://hba-th.org/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%A7%E0%B8%A2/product/507"
    },
    {
      title: "ABSOLUTE 04",
      text:
        "บ้านแฝด 3 ชั้นสไตล์ Modern ออกแบบอย่างลงตัว ทุกการใช้สอยของสมาชิกทุกคน พื้นที่เชื่อมต่อ รองรับกิจกรรมครอบครัว ระเบียงยาวสระว่ายน้ำ เป็นที่พักผ่อนและพักสายตาได้เป็นอย่างดี ภายนอกอาคารโดดเด่นด้วยการตกแต่งระแนงเหล็ก และผนังหินธรรมชาติ จัดวางอย่างอบอุ่น",
      image: "images/3.jpg",
      link:
        "https://hba-th.org/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%A7%E0%B8%A2/product/745"
    },
    {
      title: "P-212",
      text:
        "บ้านสไตล์โมเดิร์นคลาสสิก ดีไซน์ที่ดูวิจิตรบรรจง มีเอกลักษณ์ที่หรูหรา เป็นบ้านมี พื้นที่ใช้สอยมากถึง 505 ตารางเมตร ฟังก์ชั่นใช้สอยครบครัน ภายในชั้นล่างโออ่า ส่วนโถงด้านหน้า โล่งถึงชั้นบน ห้องรับแขก ห้องพักผ่อน แยกพื้นที่เป็นสัดส่วน ชั้นมี 4 ห้องนอน พร้อมพื้นที่พักผ่อน ส่วนกลางที่โปร่ง สบาย",
      image: "images/4.jpg",
      link:
        "https://www.hba-th.org/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%A7%E0%B8%A2/product/737"
    },
    {
      title: "FEB-11",
      text:
        "บ้าน Style Classic ที่ออกแบบให้ร่วมสมัยมุขทางเข้าสูงโปรงเน้นบัวโค้งรับกับบัวโดยรอบของบ้านออกแบบให้ดูแข็งแรงมั่นคงในส่วนช่วงล่างของตัวบ้าน ภายในออกแบบพื้นที่ให้เชื่อต่อกันได้ทุกส่วนบ้านจะดูกว้างขวางมากเป็นพิเศษ ความลงตัวของบ้านหลังนี้เหมาะกับครอบครัวขนาดใหญ่ที่ต้องการพื้นที่กว้างที่",
      image: "images/5.jpg",
      link:
        "https://www.hba-th.org/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%A7%E0%B8%A2/product/84"
    },
    {
      title: "G-209",
      text:
        "แบบบ้านสองชั้น Modern Contemporary Style  3 ห้องนอน รูปทรงกะทัดรัด ฟังก์ชั่นใช้สอยให้ความสะดวกสบายในการพักผ่อนและใช้ชีวิตประจำวัน ประตู หน้าต่างกระจกบานกว้าง ทำให้บ้านมีความโปร่ง โล่ง มองเห็นบรรยากาศภายนอก  จัดเตรียมพื้นที่พิเศษไว้จัดสวนบนหลังคาโรงรถ Roof Garden สร้างความรื่นรมย์ ให้กับตัวบ้าน",
      image: "images/6.jpg",
      link:
        "https://www.hba-th.org/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%A7%E0%B8%A2/product/711"
    }
  ];
  var blog = document.getElementById("myListBlog");
  var innerHTML = "";
  for (let i = 0; i < myBlog.length; i++) {
    let data = myBlog[i];
    innerHTML += `
      <li class="list-item">
      <div class="thumb">
        <a href="${data.image}" class="lightbox">
          <img class="info_img" src="${data.image}" alt="" />
        </a>
      </div>
      <h3 class="head_color before">${data.title}</h3>
      <p>${data.text}</p>
      <div class="colored_button_div">
        <a href="${data.link}" class="colored_button">คลิกเพื่อเปิด</a>
      </div>
    </li>
    `;
  }
  blog.innerHTML = innerHTML;

  $("#myListBlog").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image"
    // other options
  });
})(jQuery);
