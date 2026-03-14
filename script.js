let examQuestions = [];
let currentIdx = 0;
let userAnswers = {};
let timeLeft = 4800; 
let securityWarnings = 0;
let timerInterval;
let finalScore = 0;

// Theme Controller
function setTheme(t) {
    document.body.classList.remove('theme-dark', 'theme-midnight', 'theme-light');
    if(t !== 'default') document.body.classList.add(`theme-${t}`);
    localStorage.setItem('examTheme', t);
}

// Security
window.onblur = () => {
    securityWarnings++;
    if(securityWarnings >= 3) { finishExam(); }
    else { alert(`🚨 SECURITY ALERT: You left the exam screen. This is recorded. (${securityWarnings}/3)`); }
};

function startExam() {
    const name = document.getElementById('student-name').value;
    if(name.length < 3) return alert("Enter your full candidate name.");

    // Load from masterBank (Assuming questions.js is loaded)
    examQuestions = [];
    for(let sub in masterBank) {
        let shuffled = [...masterBank[sub]].sort(() => 0.5 - Math.random());
        examQuestions.push(...shuffled.slice(0, 25));
    }
    examQuestions.sort(() => 0.5 - Math.random());

    // UI Switches
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');
    document.getElementById('exam-controls').classList.remove('hidden');
    document.getElementById('progress-container').classList.remove('hidden');
    document.getElementById('total-count').innerText = examQuestions.length;

    timerInterval = setInterval(updateTimer, 1000);
    renderQuestion();
}

function updateTimer() {
    timeLeft--;
    let m = Math.floor(timeLeft/60), s = timeLeft % 60;
    const box = document.getElementById('timer-box');
    box.innerText = `${m}:${s<10?'0':''}${s}`;
    
    if(timeLeft <= 300) box.classList.add('timer-low');
    if(timeLeft <= 0) finishExam();
}

function renderQuestion() {
    const q = examQuestions[currentIdx];
    document.getElementById('q-number').innerText = `Question ${currentIdx + 1} of ${examQuestions.length}`;
    document.getElementById('q-text').innerText = q.q;
    
    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'option-card' + (userAnswers[currentIdx] === opt ? ' selected' : '');
        btn.onclick = () => {
            userAnswers[currentIdx] = opt;
            updateStatus();
            renderQuestion();
        };
        grid.appendChild(btn);
    });

    // Button Logic
    document.getElementById('prev-btn').style.visibility = currentIdx === 0 ? 'hidden' : 'visible';
    const isLast = currentIdx === examQuestions.length - 1;
    document.getElementById('next-btn').classList.toggle('hidden', isLast);
    document.getElementById('submit-btn').classList.toggle('hidden', !isLast);

    // Progress Bar
    const prog = ((currentIdx + 1) / examQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = prog + "%";
}

function updateStatus() {
    const count = Object.keys(userAnswers).length;
    document.getElementById('answered-count').innerText = count;
}

function navigate(dir) {
    currentIdx += dir;
    renderQuestion();
    window.scrollTo(0,0);
}

function finishExam() {
    clearInterval(timerInterval);
    finalScore = 0;
    const list = document.getElementById('review-list');
    list.innerHTML = "";

    examQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.a;
        if(isCorrect) finalScore++;
        
        list.innerHTML += `
            <div class="review-item">
                <p><strong>${i+1}. ${q.q}</strong></p>
                <p style="color:${isCorrect?'green':'red'}">Choice: ${userAnswers[i] || 'Skipped'}</p>
                ${!isCorrect ? `<p style="color:green">Correct: ${q.a}</p>` : ''}
            </div>`;
    });

    const pct = ((finalScore/examQuestions.length)*100).toFixed(1);
    document.getElementById('modal-score').innerText = `Score: ${finalScore}/${examQuestions.length} (${pct}%)`;
    document.getElementById('review-modal').classList.remove('hidden');
}

function confirmSubmission() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const name = document.getElementById('student-name').value;
    const pct = ((finalScore/examQuestions.length)*100).toFixed(1);

    doc.setFontSize(22);
    doc.text("EXAMINATION RESULT", 105, 20, null, null, "center");
    doc.setFontSize(14);
    doc.text(`Candidate: ${name}`, 20, 40);
    doc.text(`Final Score: ${finalScore} / ${examQuestions.length} (${pct}%)`, 20, 50);
    doc.text(`Security Warnings: ${securityWarnings}`, 20, 60);
    doc.save(`${name}_Result.pdf`);

    const msg = `*MOCK RESULT*%0A*Candidate:* ${name}%0A*Score:* ${finalScore}/${examQuestions.length}%0A*Security:* ${securityWarnings}`;
    window.location.href = `https://wa.me/2347035646208?text=${msg}`;
}

// Load Theme
window.onload = () => {
    const t = localStorage.getItem('examTheme');
    if(t) setTheme(t);
};