const clock = () => {
    const currentDate = new Date();

    const optionsDate = {
        weekday: "short",
        month: "short",
        day: "2-digit",
    };

    const dateParts = new Intl.DateTimeFormat("en-US", optionsDate).formatToParts(currentDate);
    
    const weekday = dateParts.find(part => part.type === 'weekday').value;
    const month = dateParts.find(part => part.type === 'month').value;
    const day = dateParts.find(part => part.type === 'day').value;
    
    const date = `${weekday} ${month} ${day}`;

    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    // const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    document.querySelector(".current-date").textContent = `${date} ${hours}:${minutes}`;
}

setInterval(clock, 1000);