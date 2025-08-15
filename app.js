document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const toggleButton = document.getElementById('toggle-btn');
    let is24HourFormat = true;

    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        if (!is24HourFormat) {
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // 0時の場合は12時と表示
            clockElement.textContent = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
        } else {
            clockElement.textContent = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
        }
    }

    toggleButton.addEventListener('click', () => {
        is24HourFormat = !is24HourFormat;
        updateTime();
    });

    // 1秒ごとに時刻を更新
    setInterval(updateTime, 1000);

    // 初回表示
    updateTime();
});