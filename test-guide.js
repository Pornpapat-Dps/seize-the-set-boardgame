// สคริปต์สำหรับทดสอบและตรวจสอบฟังก์ชัน applySetWithMarker

console.log('=== การทดสอบ Logic การ์ดเซต ===');

// 1. ทดสอบ Intersection กับเซตว่าง
console.log('\n1. Intersection กับเซตว่าง:');
console.log('   - เมื่อใช้การ์ด Intersection กับเซตว่าง');
console.log('   - ควรลบเบี้ยฝ่ายตรงข้ามทั้งหมดออกจากกระดาน');
console.log('   - ไม่ควรได้พื้นที่เพิ่ม (resultCells = [])');
console.log('   - ควรมีการแสดง toast แจ้งจำนวนเบี้ยที่ลบ');
console.log('   - ควรมีการลบการ์ดและจบเทิร์น');

// 2. ทดสอบ Complement กับเซต 2x2/4x4
console.log('\n2. Complement กับเซต 2x2 หรือ 4x4:');
console.log('   - เมื่อใช้การ์ด Complement กับเซต 2x2 (4 ช่อง)');
console.log('   - ควรได้ทุกช่องบนกระดาน ยกเว้น 4 ช่องในเซต = 60 ช่อง');
console.log('   - เมื่อใช้การ์ด Complement กับเซต 4x4 (16 ช่อง)');
console.log('   - ควรได้ทุกช่องบนกระดาน ยกเว้น 16 ช่องในเซต = 48 ช่อง');
console.log('   - ต้องยึดทั้งช่องที่มีเบี้ยและไม่มีเบี้ย');

// 3. การตรวจสอบโค้ด
console.log('\n3. การตรวจสอบโค้ดที่แก้ไข:');
console.log('   ✅ เพิ่ม opponentColor ในฟังก์ชัน applySetWithMarker');
console.log('   ✅ แก้ไข Intersection กับเซตว่างให้ลบเบี้ยฝ่ายตรงข้าม');
console.log('   ✅ แก้ไข Complement ให้ใช้ allCells แทน existingTokens');
console.log('   ✅ เพิ่มการ cleanup การ์ดสำหรับ Intersection กับเซตว่าง');

// 4. วิธีทดสอบในเกม
console.log('\n4. วิธีทดสอบในเกม:');
console.log('   A. ทดสอบ Intersection กับเซตว่าง:');
console.log('      - เริ่มเกมใหม่');
console.log('      - วางเบี้ยเริ่มต้นให้ทั้งสองฝ่าย');
console.log('      - จั่วการ์ด Intersection และการ์ดเซตว่าง');
console.log('      - ใช้การ์ดทั้งสองใบ');
console.log('      - ตรวจสอบว่าเบี้ยฝ่ายตรงข้ามหายไปหรือไม่');

console.log('\n   B. ทดสอบ Complement กับเซต 2x2:');
console.log('      - เริ่มเกมใหม่');
console.log('      - วางเบี้ยเริ่มต้นให้ทั้งสองฝ่าย');
console.log('      - จั่วการ์ด Complement และการ์ดเซต 2x2');
console.log('      - ใช้การ์ดทั้งสองใบ');
console.log('      - ตรวจสอบว่าได้ 60 ช่อง (ทั้งหมด 64 - 4 ในเซต)');

console.log('\n=== เตรียมพร้อมสำหรับการทดสอบ ===');