const form = document.querySelector('.lead-form');
const message = document.querySelector('.form-message');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = '感谢提交，演示页面已收到你的咨询信息。正式站点请接入实际表单服务。';
  form.reset();
});
