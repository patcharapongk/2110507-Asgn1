/* requirements
ืขื่่อบริษัท ชื่อผู้ติดต่อ และเบอร์ผู้ติดต่อ ห้ำมเป็นค่ำว่ำง
- ต้องมีกำรเลือกขนำดบูธ (สำมำรถใช้ html attribute แทน JavaScript ได้)
- จ ำนวนเก้ำอี้ ถ้ำมีกำรใส่ค่ำมำ ค่ำต้องเป็นตัวเลข ค่ำระหว่ำง 1 ถึง 10 เท่ำนั้น
 */
const form = document.getElementById("register-form");
const companyName = document.getElementById("register-form-company-name");
const contactName = document.getElementById("register-form-person-name");
const telephoneNo = document.getElementById("register-form-telephone-no");
const boothType = document.getElementById("register-form-booth-type");
const chairCount = document.getElementById("register-form-chair-count");

function validateForm() {
  // ืขื่่อบริษัท ชื่อผู้ติดต่อ และเบอร์ผู้ติดต่อ ห้ำมเป็นค่ำว่ำง
  if (!companyName.value || !contactName.value || !telephoneNo.value) {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    return false;
  }
  if (boothType.value === "0") {
    alert("กรุณาเลือกขนาดบูธ");
    return false;
  }
  if (chairCount.value < 1 || chairCount.value > 10) {
    alert("กรุณากรอกจำนวนเก้าอี้ให้ถูกต้อง");
    return false;
  }
}
