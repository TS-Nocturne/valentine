const countdownContainer = document.getElementById("countdown-container");
const mainContent = document.getElementById("main-content");
const countdownElement = document.getElementById("countdown");

// กำหนดวันวาเลนไทน์ 14 กุมภาพันธ์ 2025 เวลา 00:00:00
const valentineDate = new Date("February 14, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = valentineDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdownElement.textContent = `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
    } else {
        countdownContainer.classList.add("hidden");
        mainContent.classList.remove("hidden");
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

const messages = [
    "น้าาา",
    "ไม่รักจริงๆหรอ",
    "แน่ใจน้าาา",
    "ลองคิดอีกทีค้าบบ",
    "รักกันน้าาา",
    "นะค้าบบบ",
    "จะไม่รักแน่น้าา",
    "รักกันนะครับบ🥲"
];

let noCount = 0;
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const messageText = document.getElementById("message");

noButton.addEventListener("click", rejectLove);
yesButton.addEventListener("click", acceptLove);

function rejectLove() {
    if (noCount < messages.length) {
        messageText.textContent = messages[noCount];
        noCount++;
        noButton.style.position = "absolute";
        noButton.style.left = Math.min(80, Math.max(10, Math.random() * 80)) + "vw";
        noButton.style.top = Math.min(80, Math.max(10, Math.random() * 80)) + "vh";
        yesButton.style.transform = `scale(${1 + noCount * 0.1})`;
    }
    if (noCount === messages.length) {
        noButton.style.display = "none";
    }
}

function acceptLove() {
    document.getElementById("valentine").innerHTML = `
        <img src="https://media1.tenor.com/m/aEWN44So2ckAAAAC/kiss-kisses.gif" class="gif">
        <div class="question">รักน้ำมากนะคั้บบ จุ๊ฟมั๊ววว ❤️</div>
    `;
    launchConfetti();
    startHeartRain();
}

function launchConfetti() {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

function startHeartRain() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        document.getElementById("heart-container").appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}
