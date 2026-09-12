const menuBtn=document.getElementById('menuBtn');const navLinks=document.getElementById('navLinks');const modal=document.getElementById('modal');const modalTitle=document.getElementById('modalTitle');const modalDesc=document.getElementById('modalDesc');const modalList=document.getElementById('modalList');const modalKicker=document.getElementById('modalKicker');
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const modules={
 people:{kicker:'DỮ LIỆU GIÁO XỨ',title:'Danh sách giáo dân',desc:'Khu vực tra cứu giáo dân, dự kiến có tìm kiếm, lọc theo đơn vị và mở hồ sơ chi tiết.',items:['Tìm kiếm theo họ tên','Lọc theo Giáo xứ Hải Ninh / Giáo họ Viên Chử','Mở hồ sơ giáo dân 360°','Phân quyền xem và chỉnh sửa']},
 families:{kicker:'DỮ LIỆU GIÁO XỨ',title:'Hộ gia đình',desc:'Quản lý các hộ gia đình và mối liên hệ giữa các thành viên.',items:['Danh sách các hộ gia đình','Thông tin chủ hộ và các thành viên','Liên kết sang hồ sơ giáo dân','Tìm kiếm và lọc theo khu vực']},
 profile:{kicker:'HỒ SƠ GIÁO DÂN',title:'Hồ sơ giáo dân 360°',desc:'Một trang tổng hợp để xem các thông tin cần thiết của một giáo dân trong hệ thống.',items:['Thông tin cá nhân cơ bản','Thông tin hộ gia đình','Sinh hoạt hội đoàn','Lịch sử cập nhật hồ sơ']},
 pastors:{kicker:'LỊCH SỬ MỤC VỤ',title:'Các vị Mục tử qua từng thời kỳ',desc:'Khu vực lưu trữ lịch sử phục vụ của các vị mục tử tại Giáo xứ Hải Ninh.',items:['Danh sách theo từng thời kỳ','Thông tin thời gian phục vụ','Ảnh và tiểu sử khi được bổ sung','Ghi chú lịch sử mục vụ']}
};
function openModule(key){const data=modules[key]||modules.people;modalKicker.textContent=data.kicker;modalTitle.textContent=data.title;modalDesc.textContent=data.desc;modalList.innerHTML=data.items.map(x=>`<div><strong>${x}</strong></div>`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden')}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-module]').forEach(el=>el.addEventListener('click',()=>openModule(el.dataset.module)));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const today=new Date();document.getElementById('todayLabel').textContent=today.toLocaleDateString('vi-VN',{weekday:'long',day:'2-digit',month:'2-digit',year:'numeric'});
document.querySelectorAll('.org-item').forEach(el=>el.addEventListener('click',()=>showNotice(`Mục “${el.firstChild.textContent.trim()}” đang được chuẩn bị.`)));
function showNotice(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}