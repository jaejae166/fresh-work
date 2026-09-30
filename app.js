const SCHEDULE = [
  { id: 'start', time: '07:55', icon: '🟢', title: '출근 및 업무 준비', desc: '유니폼·명찰·PDA 준비 후 근무를 시작해요.', subtasks: ['유니폼·명찰 착용', 'PDA/업무용 기기 준비', '근무 시작 상태 확인'] },
  { id: 'handover', time: '08:00', icon: '📋', title: '전일 인수인계 확인', desc: '어제 남은 업무와 오늘 꼭 처리할 내용을 먼저 확인해요.', subtasks: ['전일 업무일지 확인', '미처리 업무 확인', '품절·시설 이상·고객 요청사항 확인'] },
  { id: 'storecheck', time: '08:10', icon: '🏪', title: '매장 전체 점검', desc: '매장을 한 바퀴 돌며 빈 매대와 이상사항을 확인해요.', subtasks: ['빈 매대 확인', '흐트러진 진열 확인', '시설 이상 유무 확인'] },
  { id: 'stockcheck', time: '08:20', icon: '🔎', title: '결품·창고 재고 확인', desc: '부족한 상품과 창고 재고를 같이 확인해요.', subtasks: ['결품 상품 체크', '창고 재고 확인', '우선 보충 상품 선정'] },
  { id: 'fill1', time: '08:30', icon: '🛒', title: '1차 보충진열', desc: '아침 고객이 보기 좋도록 빈 매대를 먼저 채워요.', subtasks: ['결품 매대 우선 보충', '상품 전면 정렬', '가격표 위치 확인'] },
  { id: 'freshness', time: '08:45', icon: '🥬', title: '선도·유통기한 체크', desc: '신선도와 유통기한을 확인해 판매 가능한 상태로 정리해요.', subtasks: ['신선상품 상태 확인', '유통기한 임박상품 확인', '할인·폐기 필요상품 분리'] },
  { id: 'frozenprep', time: '09:00', icon: '❄️', title: '냉동물류 입고 준비', desc: '09:10 냉동물류가 바로 들어올 수 있게 공간과 동선을 준비해요.', subtasks: ['냉동고 여유공간 확보', '카트 준비', '입고 동선 확보'] },
  { id: 'frozen', time: '09:10', icon: '🚚', title: '냉동물류 입고', desc: '검품 후 냉동 상태가 풀리지 않도록 신속하게 이동해요.', subtasks: ['입고 차량 도착 확인', '입고 수량 대조', '냉동상품 검품', '냉동고/매대로 신속 이동', '냉동 보충진열', '입고 마무리 확인'] },
  { id: 'quick1', time: '09:50', icon: '🛵', title: '퀵커머스 상태 확인', desc: '주문 접수와 품절상품 상태를 확인해요.', subtasks: ['주문 정상 접수 확인', '품절상품 상태 확인', '들어온 주문 피킹·포장'] },
  { id: 'thaw', time: '10:00', icon: '🧊', title: '사전해동·조리 준비 확인', desc: '당일 판매와 조리에 필요한 상품 준비 상태를 확인해요.', subtasks: ['사전해동 상품 확인', '필요 수량 점검', '조리상품 생산 준비 확인'] },
  { id: 'fill2', time: '10:10', icon: '🛒', title: '2차 보충진열·결품 재확인', desc: '오전 판매 후 빠진 상품을 다시 채워요.', subtasks: ['오전 판매상품 보충', '결품상품 재확인', '매대 전면 정리'] },
  { id: 'dryprep', time: '10:20', icon: '📦', title: '공산물류 입고 준비', desc: '10:30 공산물류를 받을 공간과 카트를 준비해요.', subtasks: ['카트 준비', '적재 공간 확보', '이동 동선 정리'] },
  { id: 'dry', time: '10:30', icon: '🚚', title: '공산물류 입고', desc: '수량과 상품 상태를 확인하고 카테고리별로 분배해요.', subtasks: ['입고 수량 확인', '파손·누수·포장불량 검품', '카테고리별 분류', '진열상품 매장 이동', '여유재고 창고 적재'] },
  { id: 'dryfill', time: '11:15', icon: '🛒', title: '공산품 보충진열', desc: '행사상품과 부족한 상품부터 우선 진열해요.', subtasks: ['부족상품 우선 진열', '행사상품 진열', '상품 전진열'] },
  { id: 'price', time: '11:35', icon: '🏷️', title: '가격표·행사표 확인', desc: '상품과 가격표, 행사 안내가 정확히 맞는지 확인해요.', subtasks: ['가격표 일치 확인', '행사표시 확인', '오표기 수정'] },
  { id: 'morningcheck', time: '11:55', icon: '✅', title: '오전 매장 재점검', desc: '오전 물류 이후 매장 상태를 다시 정리해요.', subtasks: ['결품 재확인', '진열 상태 확인', '선도 상태 확인'] },
  { id: 'quicklunch', time: '12:30', icon: '🛵', title: '퀵커머스 점심시간 점검', desc: '주문이 몰리기 전에 피킹과 포장 상태를 확인해요.', subtasks: ['주문 누락 확인', '피킹·포장 진행', '배차 지연 여부 확인'] },
  { id: 'unfinished', time: '12:45', icon: '📝', title: '오전 미처리 업무 확인', desc: '식사 전에 오전에 남은 일을 확인하고 인계해요.', subtasks: ['미완료 업무 확인', '담당자에게 필요한 내용 인계'] },
  { id: 'lunch', time: '13:00', icon: '🍚', title: '중식', desc: '매장과 퀵커머스 업무를 인계한 뒤 식사해요.', subtasks: ['업무 인계', '주문·고객 대응 공백 확인'] },
  { id: 'order', time: '14:00', icon: '📊', title: '발주 확인', desc: '현재 재고와 판매량을 보고 필요한 발주량을 확인해요.', subtasks: ['현재 재고 확인', '결품 예상상품 확인', '과재고 상품 확인', '발주 수량 최종 검토'] },
  { id: 'afternoonfill', time: '15:00', icon: '🛒', title: '오후 보충진열', desc: '오후 고객이 늘기 전에 매대를 다시 채워요.', subtasks: ['부족상품 보충', '전면 정리', '주력상품 진열 확인'] },
  { id: 'afternoonfresh', time: '15:20', icon: '🥬', title: '선도·임박상품 확인', desc: '신선상품 상태와 할인 예정상품을 미리 분류해요.', subtasks: ['신선상품 선도 확인', '유통기한 임박상품 분류', '저녁 할인 후보 확인'] },
  { id: 'focus', time: '16:00', icon: '🔥', title: '집중 근무 시작', desc: '저녁 피크 전에 판매·진열·고객응대를 집중적으로 준비해요.', subtasks: ['인기상품 보충', '행사상품 진열 확인', '고객응대 집중'] },
  { id: 'cook', time: '17:00', icon: '🍱', title: '조리상품 생산 확인', desc: '저녁 판매량을 고려해 추가 생산 여부를 판단해요.', subtasks: ['현재 조리상품 재고 확인', '추가 생산량 판단', '제조·유통시간 확인'] },
  { id: 'quick2', time: '17:20', icon: '🛵', title: '퀵커머스 주문 점검', desc: '주문 밀림이나 라이더 배차 지연이 없는지 확인해요.', subtasks: ['주문 밀림 확인', '배차 상태 확인', '오배송·누락 확인'] },
  { id: 'eveningstock', time: '17:40', icon: '🔎', title: '저녁 피크 전 결품 재점검', desc: '퇴근 시간 고객이 오기 전에 결품을 다시 확인해요.', subtasks: ['결품상품 확인', '창고 재고 확인', '즉시 보충'] },
  { id: 'eveningfill', time: '18:00', icon: '🛒', title: '저녁 피크 보충', desc: '판매량 높은 상품을 중심으로 매대를 유지해요.', subtasks: ['인기상품 집중 보충', '매대 전면 정리', '저녁 판매상품 재고 확인'] },
  { id: 'dinner', time: '19:00', icon: '🍚', title: '석식', desc: '매장과 퀵커머스 업무를 인계한 뒤 식사해요.', subtasks: ['업무 인계', '퀵커머스 담당 확인'] },
  { id: 'discount1', time: '19:30', icon: '💸', title: '마감 할인 대상 확인·1차 할인', desc: '오늘 판매가 필요한 상품을 선정해 기준에 맞춰 할인해요.', subtasks: ['할인 대상상품 선정', '상품 상태 확인', '1차 할인 적용', '할인상품 보기 좋게 진열'] },
  { id: 'discount2', time: '20:20', icon: '📉', title: '할인상품 판매 확인', desc: '남은 수량을 확인하고 추가 할인 필요 여부를 판단해요.', subtasks: ['남은 수량 확인', '판매속도 확인', '추가 할인 여부 판단'] },
  { id: 'closing', time: '21:00', icon: '🧹', title: '마감업무 시작', desc: '매장과 작업공간을 정리하며 마감을 시작해요.', subtasks: ['빈 박스·카트 정리', '작업공간 정돈', '미처리 업무 확인'] },
  { id: 'faceup', time: '21:15', icon: '↔️', title: '전체 전진열', desc: '상품을 앞으로 당기고 매대를 가지런히 정리해요.', subtasks: ['전 매대 상품 앞으로 당기기', '상품 정면 정렬', '빈 공간 정리'] },
  { id: 'lastfill', time: '21:30', icon: '🛒', title: '마지막 보충진열', desc: '다음 날 오전까지 고려해 필요한 상품을 채워요.', subtasks: ['필요상품 보충', '주요 매대 상태 확인'] },
  { id: 'waste', time: '21:45', icon: '♻️', title: '폐기상품 확인', desc: '판매 불가상품과 폐기 대상을 최종 확인해요.', subtasks: ['폐기 대상 확인', '처리 기준에 따라 분류', '필요 전산 처리'] },
  { id: 'quickclose', time: '22:00', icon: '🛵', title: '퀵커머스 마감 확인', desc: '미완료 주문과 라이더 픽업 여부를 확인해요.', subtasks: ['미완료 주문 확인', '라이더 픽업 완료 확인', '주문 누락·취소 확인'] },
  { id: 'warehouse', time: '22:15', icon: '📦', title: '창고 정리', desc: '재고와 박스를 카테고리별로 정돈해요.', subtasks: ['카테고리별 재고 정리', '빈 박스·카트 정리', '통로 확보'] },
  { id: 'facility', time: '22:30', icon: '🧊', title: '시설물 점검', desc: '냉장·냉동고와 주요 설비 이상 여부를 확인해요.', subtasks: ['냉장·냉동고 상태 확인', '조명·전원·출입문 확인', '누수·고장·이상소음 확인'] },
  { id: 'variance', time: '22:40', icon: '📊', title: '재고 이상 확인', desc: '전산과 실제 재고 차이가 큰 상품을 확인해요.', subtasks: ['재고 차이 상품 확인', '원인 파악', '필요 전산 처리'] },
  { id: 'handover2', time: '22:50', icon: '📝', title: '인수인계 작성', desc: '다음 근무자가 바로 이해할 수 있게 오늘 특이사항을 남겨요.', subtasks: ['품절·재고이상 기록', '시설·고객 이슈 기록', '미처리 업무 기록', '내일 중점사항 기록'] },
  { id: 'finalclose', time: '23:00', icon: '🔒', title: '최종 마감', desc: '매장 상태를 마지막으로 확인하고 오늘 업무를 마무리해요.', subtasks: ['매장 최종 확인', '미처리 업무 확인', '마감 완료'] }
];

const STORAGE_PREFIX = 'freshwork-v1';
const KST_TZ = 'Asia/Seoul';
let activeFilter = 'all';
let toastTimer;

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

function seoulParts() {
  const parts = new Intl.DateTimeFormat('ko-KR', {
    timeZone: KST_TZ, year: 'numeric', month: '2-digit', day: '2-digit',
    weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
  }).formatToParts(new Date());
  return Object.fromEntries(parts.map(p => [p.type, p.value]));
}

function dateKey() {
  const p = seoulParts();
  return `${p.year}-${p.month}-${p.day}`;
}

function timeToMinutes(t) {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

function nowMinutes() {
  const p = seoulParts();
  return Number(p.hour) * 60 + Number(p.minute);
}

function getCurrentIndex() {
  const now = nowMinutes();
  if (now < timeToMinutes(SCHEDULE[0].time)) return -1;
  for (let i = SCHEDULE.length - 1; i >= 0; i--) {
    if (now >= timeToMinutes(SCHEDULE[i].time)) return i;
  }
  return -1;
}

function getCompletion() {
  try { return JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}:done:${dateKey()}`) || '{}'); }
  catch { return {}; }
}
function setCompletion(data) {
  localStorage.setItem(`${STORAGE_PREFIX}:done:${dateKey()}`, JSON.stringify(data));
}
function isTaskDone(id) {
  return Boolean(getCompletion()[id]?.taskDone);
}
function getSubtaskState(id) {
  return getCompletion()[id]?.subtasks || {};
}
function saveTaskState(id, updater) {
  const all = getCompletion();
  const prev = all[id] || { taskDone: false, subtasks: {} };
  all[id] = updater(prev);
  setCompletion(all);
  renderAll();
}
function markTask(id, value) {
  const task = SCHEDULE.find(t => t.id === id);
  saveTaskState(id, prev => ({
    taskDone: value,
    subtasks: value ? Object.fromEntries(task.subtasks.map((_, i) => [i, true])) : prev.subtasks
  }));
  showToast(value ? '완료 처리했어요 ✓' : '완료를 취소했어요.');
}
function toggleSubtask(id, idx, value) {
  const task = SCHEDULE.find(t => t.id === id);
  saveTaskState(id, prev => {
    const subtasks = { ...prev.subtasks, [idx]: value };
    const taskDone = task.subtasks.every((_, i) => subtasks[i]);
    return { taskDone, subtasks };
  });
}

function friendlyHeadline(task, idx) {
  const name = localStorage.getItem(`${STORAGE_PREFIX}:name`)?.trim();
  const prefix = name ? `${name}님, ` : '';
  if (idx === -1) return `${prefix}아직 출근 전이에요.`;
  if (idx === SCHEDULE.length - 1 && nowMinutes() >= timeToMinutes('23:20')) return `${prefix}오늘 업무가 모두 끝났어요!`;
  if (isTaskDone(task.id)) return `${prefix}${task.title}까지 완료했어요!`;
  return `${prefix}지금은 ${task.title} 할 시간이에요!`;
}

function renderClock() {
  const p = seoulParts();
  $('#clock').textContent = `${p.hour}:${p.minute}`;
  $('#dateLabel').textContent = `${Number(p.month)}월 ${Number(p.day)}일 (${p.weekday}) · 서울 기준`;
}

function progressData() {
  const done = SCHEDULE.filter(t => isTaskDone(t.id)).length;
  return { done, total: SCHEDULE.length, percent: Math.round(done / SCHEDULE.length * 100) };
}

function renderProgress() {
  const p = progressData();
  $('#progressText').textContent = `${p.percent}%`;
  $('#progressBar').style.width = `${p.percent}%`;
  $('#progressCount').textContent = `${p.done} / ${p.total} 완료`;
  $('#remainingText').textContent = `남은 업무 ${p.total - p.done}개`;
}

function renderCurrent() {
  const idx = getCurrentIndex();
  const card = $('#currentTaskCard');
  if (idx === -1) {
    $('#nowHeadline').textContent = friendlyHeadline(null, idx);
    $('#nowMessage').textContent = '07:55부터 오늘의 업무가 시작돼요. 출근 후 인수인계부터 확인하면 됩니다.';
    card.innerHTML = `
      <div class="task-focus-header">
        <div class="task-icon">☀️</div>
        <div class="task-focus-copy">
          <div class="status-row"><span class="status-pill done">출근 전</span><span class="task-time">첫 업무 07:55</span></div>
          <h3>첫 업무는 ‘출근 및 업무 준비’예요.</h3>
          <p>업무 시작 전이라면 천천히 준비하세요.</p>
        </div>
      </div>`;
    return;
  }

  const task = SCHEDULE[idx];
  const subState = getSubtaskState(task.id);
  const doneCount = task.subtasks.filter((_, i) => subState[i]).length;
  $('#nowHeadline').textContent = friendlyHeadline(task, idx);
  $('#nowMessage').textContent = isTaskDone(task.id) ? '완료했어요. 다음 업무를 미리 확인해두면 더 여유롭게 움직일 수 있어요.' : task.desc;

  card.innerHTML = `
    <div class="task-focus-header">
      <div class="task-icon">${task.icon}</div>
      <div class="task-focus-copy">
        <div class="status-row">
          <span class="status-pill ${isTaskDone(task.id) ? 'done' : 'now'}">${isTaskDone(task.id) ? '완료' : '진행 중'}</span>
          <span class="task-time">${task.time} 시작 · ${doneCount}/${task.subtasks.length} 체크</span>
        </div>
        <h3>${task.title}</h3>
        <p>${task.desc}</p>
      </div>
    </div>
    <div class="current-subtasks">
      ${task.subtasks.map((s, i) => `
        <label class="subtask-row ${subState[i] ? 'checked' : ''}">
          <input type="checkbox" data-current-sub="${i}" ${subState[i] ? 'checked' : ''} />
          <span>${s}</span>
        </label>`).join('')}
    </div>
    <div class="task-actions">
      <button class="primary-button" id="completeCurrentBtn" type="button">${isTaskDone(task.id) ? '완료 취소' : '✓ 이 업무 완료'}</button>
      <button class="secondary-button" id="openCurrentBtn" type="button">자세히 보기</button>
    </div>`;

  $$('[data-current-sub]').forEach(input => {
    input.addEventListener('change', e => toggleSubtask(task.id, Number(e.target.dataset.currentSub), e.target.checked));
  });
  $('#completeCurrentBtn').addEventListener('click', () => markTask(task.id, !isTaskDone(task.id)));
  $('#openCurrentBtn').addEventListener('click', () => openTaskDialog(task.id));
}

function renderNext() {
  const idx = getCurrentIndex();
  let nextIdx = Math.max(0, idx + 1);
  while (nextIdx < SCHEDULE.length && isTaskDone(SCHEDULE[nextIdx].id)) nextIdx++;
  const host = $('#nextTaskCard');
  if (nextIdx >= SCHEDULE.length) {
    host.innerHTML = `<div class="next-time-badge">DONE</div><div><strong>오늘 예정된 업무를 모두 완료했어요.</strong><p>인수인계까지 확인했다면 오늘 업무 마무리입니다.</p></div>`;
    return;
  }
  const task = SCHEDULE[nextIdx];
  host.innerHTML = `<div class="next-time-badge">${task.time}</div><div><strong>${task.icon} ${task.title}</strong><p>${task.desc}</p></div>`;
  host.onclick = () => openTaskDialog(task.id);
}

function renderMiniTimeline() {
  const idx = getCurrentIndex();
  const indexes = [...new Set([Math.max(0, idx - 1), Math.max(0, idx), Math.min(SCHEDULE.length - 1, idx + 1), Math.min(SCHEDULE.length - 1, idx + 2)])].filter(i => i >= 0);
  $('#miniTimeline').innerHTML = indexes.map(i => {
    const t = SCHEDULE[i];
    const cls = `${i === idx ? 'current' : ''} ${isTaskDone(t.id) ? 'complete' : ''}`;
    return `<button type="button" class="mini-item ${cls}" data-open-task="${t.id}" style="width:100%; border-left:0;border-right:0;border-top:0;text-align:left;background-color:${i===idx?'':'transparent'}">
      <span class="mini-time">${t.time}</span><span class="timeline-dot"></span><span class="mini-copy"><strong>${t.title}</strong><small>${t.desc}</small></span>
    </button>`;
  }).join('');
}

function renderAllTasks() {
  const idx = getCurrentIndex();
  const filtered = SCHEDULE.filter(t => activeFilter === 'all' || (activeFilter === 'done' ? isTaskDone(t.id) : !isTaskDone(t.id)));
  $('#allTasks').innerHTML = filtered.length ? filtered.map(t => {
    const i = SCHEDULE.findIndex(x => x.id === t.id);
    return `<article class="task-list-card ${i === idx ? 'current' : ''}">
      <div class="list-card-head">
        <div class="list-time">${t.time}</div>
        <div><h4>${t.icon} ${t.title}</h4><p>${t.desc}</p></div>
        <button class="complete-toggle ${isTaskDone(t.id) ? 'done' : ''}" data-task-toggle="${t.id}" type="button" aria-label="${t.title} 완료 토글">✓</button>
      </div>
      <details class="list-expand"><summary>세부 업무 ${t.subtasks.length}개 보기</summary><ul>${t.subtasks.map(s => `<li>${s}</li>`).join('')}</ul></details>
    </article>`;
  }).join('') : `<div class="empty-state">해당하는 업무가 없어요.</div>`;
}

function renderFullTimeline() {
  const idx = getCurrentIndex();
  $('#fullTimeline').innerHTML = SCHEDULE.map((t, i) => `
    <button type="button" class="timeline-row ${i === idx ? 'current' : ''} ${isTaskDone(t.id) ? 'done' : ''}" data-open-task="${t.id}" style="border:0;background:transparent;text-align:left;width:100%;padding-left:0;padding-right:0;">
      <time>${t.time}</time><span class="timeline-marker"></span><span class="timeline-content"><strong>${t.icon} ${t.title}</strong><span>${t.desc}</span></span>
    </button>`).join('');
}

function openTaskDialog(id) {
  const task = SCHEDULE.find(t => t.id === id);
  const subState = getSubtaskState(task.id);
  $('#dialogContent').innerHTML = `
    <div class="dialog-title"><span class="eyebrow">${task.time} START</span><h3>${task.icon} ${task.title}</h3><p>${task.desc}</p></div>
    <div class="dialog-checklist">
      ${task.subtasks.map((s, i) => `<label class="dialog-check-row"><input type="checkbox" data-dialog-sub="${i}" ${subState[i] ? 'checked' : ''}><span>${s}</span></label>`).join('')}
    </div>
    <div class="dialog-footer">
      <button type="button" class="primary-button" id="dialogCompleteBtn">${isTaskDone(task.id) ? '완료 취소' : '✓ 전체 완료 처리'}</button>
      <button type="submit" class="secondary-button">닫기</button>
    </div>`;
  $$('[data-dialog-sub]').forEach(input => input.addEventListener('change', e => toggleSubtask(task.id, Number(e.target.dataset.dialogSub), e.target.checked)));
  $('#dialogCompleteBtn').addEventListener('click', () => { markTask(task.id, !isTaskDone(task.id)); openTaskDialog(task.id); });
  if (!$('#taskDialog').open) $('#taskDialog').showModal();
}

function bindDynamicClicks() {
  document.body.onclick = (e) => {
    const open = e.target.closest('[data-open-task]');
    if (open) openTaskDialog(open.dataset.openTask);
    const toggle = e.target.closest('[data-task-toggle]');
    if (toggle) markTask(toggle.dataset.taskToggle, !isTaskDone(toggle.dataset.taskToggle));
  };
}

function renderAll() {
  renderClock();
  renderProgress();
  renderCurrent();
  renderNext();
  renderMiniTimeline();
  renderAllTasks();
  renderFullTimeline();
  bindDynamicClicks();
}

function showToast(message) {
  const t = $('#toast');
  t.textContent = message;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function switchView(id) {
  $$('.view').forEach(v => v.classList.toggle('active', v.id === id));
  $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.view === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function enableNotifications() {
  if (!('Notification' in window)) {
    showToast('이 브라우저는 알림 기능을 지원하지 않아요.');
    return;
  }
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    localStorage.setItem(`${STORAGE_PREFIX}:notify`, 'on');
    showToast('업무 알림을 켰어요 🔔');
    updateNotifyButtons();
  } else {
    showToast('브라우저에서 알림 권한을 허용해 주세요.');
  }
}

function updateNotifyButtons() {
  const supported = 'Notification' in window;
  const on = supported && localStorage.getItem(`${STORAGE_PREFIX}:notify`) === 'on' && Notification.permission === 'granted';
  $('#notifyBtn').title = on ? '업무 알림 켜짐' : '업무 알림 켜기';
  $('#settingsNotifyBtn').textContent = on ? '알림 켜짐' : '알림 켜기';
}

function maybeNotify() {
  if (!('Notification' in window) || Notification.permission !== 'granted' || localStorage.getItem(`${STORAGE_PREFIX}:notify`) !== 'on') return;
  const p = seoulParts();
  const current = `${p.hour}:${p.minute}`;
  const task = SCHEDULE.find(t => t.time === current);
  if (!task || isTaskDone(task.id)) return;
  const key = `${STORAGE_PREFIX}:notified:${dateKey()}:${task.id}`;
  if (localStorage.getItem(key)) return;
  new Notification(`지금은 ${task.title} 할 시간이에요!`, { body: task.desc, icon: './icon.svg', tag: task.id });
  localStorage.setItem(key, '1');
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
}

function init() {
  renderAll();
  updateNotifyButtons();
  registerServiceWorker();

  const savedName = localStorage.getItem(`${STORAGE_PREFIX}:name`) || '';
  $('#employeeName').value = savedName;

  $$('.nav-item').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
  $('#openAllBtn').addEventListener('click', () => switchView('timelineView'));
  $('#notifyBtn').addEventListener('click', enableNotifications);
  $('#settingsNotifyBtn').addEventListener('click', enableNotifications);

  $$('.filter-chip').forEach(btn => btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    $$('.filter-chip').forEach(b => b.classList.toggle('active', b === btn));
    renderAllTasks();
  }));

  $('#resetBtn').addEventListener('click', () => {
    if (confirm('오늘 완료 체크를 모두 초기화할까요?')) {
      localStorage.removeItem(`${STORAGE_PREFIX}:done:${dateKey()}`);
      renderAll();
      showToast('오늘 체크를 초기화했어요.');
    }
  });

  $('#profileForm').addEventListener('submit', e => {
    e.preventDefault();
    localStorage.setItem(`${STORAGE_PREFIX}:name`, $('#employeeName').value.trim());
    renderAll();
    showToast('이름을 저장했어요.');
  });

  setInterval(() => { renderClock(); maybeNotify(); }, 15000);
  setInterval(renderAll, 60000);
  maybeNotify();
}

document.addEventListener('DOMContentLoaded', init);
