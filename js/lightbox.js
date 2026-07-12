// 地圖圖片燈箱：橫幅縮圖點擊後全螢幕看完整圖，點任意處或按 Esc 關閉
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.map-figure img').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.className = 'lightbox';
      const full = document.createElement('img');
      full.src = img.src;
      full.alt = img.alt;
      const hint = document.createElement('div');
      hint.className = 'lightbox-hint';
      hint.textContent = '點擊任意處關閉';
      overlay.appendChild(full);
      overlay.appendChild(hint);
      const close = () => {
        overlay.remove();
        document.removeEventListener('keydown', onKey);
      };
      const onKey = (e) => { if (e.key === 'Escape') close(); };
      overlay.addEventListener('click', close);
      document.addEventListener('keydown', onKey);
      document.body.appendChild(overlay);
    });
  });
});
