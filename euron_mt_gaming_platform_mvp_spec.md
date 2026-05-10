# Euron MT Gaming Platform MVP Spec

## 1. Goal
Build a simple web-based gaming platform for Euron school club MT tomorrow.

The platform should help the host run multiple team-based games quickly using fixed MVP data: quizzes, tech logos, song quiz rounds, initial-consonant games, bingo prompts, and relay drawing prompts.

Primary goal: **fast, stable, easy-to-use host screen + optional participant/team interaction**.

---

## 2. MVP Philosophy
Because the MT is tomorrow, the MVP should avoid complex real-time multiplayer.

Final MVP direction:

- There are **3 teams**.
- Teams answer on **paper/offline**, not through phones.
- One host/MC controls the platform from a laptop.
- The laptop is connected to a **projector**.
- The platform shows questions, timers, answers, and scoreboard.
- Scores are updated manually by the host.
- Game content is fixed in seed data.
- No login, no backend, and no database are required for the MVP.

Important display behavior:

- The projected screen can show the question first.
- The answer should stay hidden until the host clicks **Reveal Answer**.
- This means we do not need a separate host-only screen for MVP, but the UI should make it easy not to accidentally reveal answers too early.

---

## 3. Core Users

### 3.1 Host / MC
The host can:

- Select a game.
- Start rounds/questions.
- Show questions on the projector.
- Start/reset timers.
- Reveal answers only when ready.
- Add team scores manually.
- Move to the next question.
- View leaderboard.

### 3.2 Teams
There are **3 teams**.

Teams will:

- Look at the projected screen.
- Write answers on paper.
- Submit or show answers to the host.
- Receive points manually from the host.

No team login or phone submission is needed for MVP.

---

## 4. MVP Game List

### 4.1 Euron 퀴즈
Format: fixed club knowledge quiz.

Questions:

1. Euron의 지도 교수님 성함은 무엇일까?
   - Answer: 심재형 교수님

2. Euron의 세션들을 모두 적으시오.
   - Answer:
     - Machine Learning (ML)
     - Deep Learning (DL)
     - Research

3. 유런 의미
   - Answer:
     - Neuron + Networking
     - You Run
     - 앞을 향해 달려나가자는 “You Run”

4. Euron 시작된 연도는?
   - Answer: 2021년 2월 14일

5. Euron 운영진 팀명을 모두 적어주세요 (총 7팀)
   - Answer:
     - 회장, 부회장
     - 홍보
     - 전체운영
     - ML
     - DL
     - Research
   - Note: current provided answer seems to list 6 groups if “회장, 부회장” is counted as one team. Needs clarification.

6. 메인 스폰서십
   - Answer: codeit

7. 소통 창구 (4개)
   - Answer:
     - 디스코드
     - 카카오톡
     - 네이버 카페
     - 깃허브

Recommended MVP screen:
- Question view
- Optional hint view
- Answer reveal view
- Score buttons per team

---

### 4.2 관상 퀴즈: “내가 OO이 될 상인가?”
Format: host chooses one person for one question. Teams guess that person's answer between A/B choices.

Important MVP decision:

- The correct answer does **not** need to be pre-registered.
- The selected person chooses/reveals the correct answer live.
- The host manually gives points.

Questions:

1. 이 사람이 사용하는 운영체제는?
   - A. WINDOW
   - B. MAC

2. 이 사람이 집순이인가?
   - A. YES
   - B. NO

3. 이 사람이 더 선호하는 영화 장르는?
   - A. 로맨스
   - B. 공포

4. 이 사람이 더 좋아하는 음식은?
   - A. 마라탕
   - B. 떡볶이

5. 이 사람은 복수 전공을 하고 있을까요? (예정이어도 YES)
   - A. YES
   - B. NO

6. 이 사람의 음악 취향은?
   - A. KPOP
   - B. 밴드

7. 이 사람이 좋아할 것 같은 반려동물은?
   - A. 강아지
   - B. 고양이

8. 이 사람이 좋아할 것 같은 계절은?
   - A. 여름
   - B. 겨울

9. 이 사람의 여행 스타일은?
   - A. 휴양
   - B. 관광

10. 이 사람의 MBTI는 무엇으로 시작할까요?
   - A. E
   - B. I

Recommended MVP screen:

- Show A/B question
- Show choices clearly
- No fixed answer stored
- Button: “Live Answer Revealed” or “Reveal Result”
- Score buttons

---

### 4.3 노래 퀴즈
Categories:

- 2010–2014
- 2015–2019
- 2020–2026

Final MVP behavior:

- Host plays songs manually from phone.
- Platform does not need audio playback.
- Song list is still being chosen, so the app should use placeholder song rounds for now.
- The host can replace placeholder names later.

Placeholder data:

- 2010–2014 Song 1
- 2010–2014 Song 2
- 2010–2014 Song 3
- 2015–2019 Song 1
- 2015–2019 Song 2
- 2015–2019 Song 3
- 2020–2026 Song 1
- 2020–2026 Song 2
- 2020–2026 Song 3

Use exactly 3 placeholder song rounds per category for MVP.

Recommended MVP screen:

- Category
- Placeholder round/song number
- Reveal answer button
- Score buttons

---

### 4.4 로고 퀴즈
Items:

- Swift
- Go
- Kotlin
- Matlab
- Scala
- Stack Overflow
- Cursor AI
- Jasper AI
- Microsoft Copilot
- Hugging Face
- LangGraph
- Google Cloud
- TensorFlow
- PyTorch
- Codex
- Google Bard
- Perplexity
- Midjourney
- Grok
- Julia
- Prolog
- Pydantic AI
- LlamaIndex
- Streamlit

Final MVP behavior:

- User already has logo image files.
- Images should be stored in the frontend public folder.
- Logos are shown normally, not cropped/blurred/hidden.
- Host shows one logo at a time.
- Teams answer on paper.
- Host reveals answer and gives points manually.

Recommended MVP screen:

- Show logo image clearly
- Timer
- Reveal answer
- Score buttons

Placeholder implementation:

- Use placeholder image filenames for now.
- Expected path format:
  - `/logos/swift.png`
  - `/logos/go.png`
  - `/logos/kotlin.png`
  - etc.
- Actual filenames can be replaced later when the logo image files are added.

---

### 4.5 초성 게임: 영화/드라마 편
Questions:

1. ㄱㅎㅈㅇ
   - 극한직업

2. ㄱㅅㅊ
   - 기생충

3. ㅅㄱㅎㄲ
   - 신과함께

4. ㅇㅁㄴㅍㄹㄷㄹㅇㄴㄷ
   - 악마는 프라다를 입는다

5. ㅇㄱㅅㄴㄴㅈ
   - 왕과사는 남자
   - Needs checking: likely “왕의 남자” or another title? Current consonants do not clearly match.

6. ㅇㅂㅇㅌㅇ
   - 아바웃타임

7. ㄷㄱㄹㄹ
   - 더글로리

8. ㅅㅈㅇㄱㅌㅇ
   - 선재업고튀어

9. ㅅㅁㄷㅅㅅㅁㅎㄴ
   - 스물다섯 스물하나

10. ㅍㅆㅅㅇㅅㄷ
   - 폭싹 속았수다

Recommended MVP screen:
- Show consonants
- Timer
- Reveal answer
- Score buttons

---

### 4.6 주제 빙고: 개발
Rules:

- Participants fill a 4x4 bingo board on sketchbook/paper for 5 minutes.
- Teams take turns calling development-related words.
- Teams erase/cross out matching words.
- First team to complete 2 lines shouts “빙고!”

Scoring:

- 1st place: 5 points
- 2nd place: 3 points

Recommended MVP support:

- Show rules
- 5-minute timer
- Buttons to award:
  - Team 1 +5
  - Team 2 +5
  - Team 3 +5
  - Team 1 +3
  - Team 2 +3
  - Team 3 +3
- Optional called-word history

Fastest MVP option:

- Bingo board remains offline on paper.
- Platform provides rules, timer, and scoring only.

---

### 4.7 릴레이 그림 그리기
Category: 속담

Prompts:

- 작은 고추가 맵다
- 소 잃고 외양간 고친다
- 얌전한 고양이가 부뚜막에 먼저 올라간다
- 낮말은 새가 듣고, 밤말은 쥐가 듣는다
- 지렁이도 밟으면 꿈틀한다
- 오르지 못할 나무 쳐다보지도 말아라
- 등잔 밑이 어둡다
- 고래 싸움에 새우등 터진다
- 바늘 도둑이 소도둑 된다
- 남의 떡이 더 커 보인다
- 친구 따라 강남 간다
- 비 온 뒤에 땅이 굳는다
- 되로 주고 말로 받는다

Rules:

1. Choose one person who will guess the answer.
2. The guesser turns around.
3. Host shows the prompt to the remaining team members.
4. Team members draw one by one for 5 seconds each.
5. After everyone draws, the guesser looks and answers.

Final MVP behavior:

- Drawing happens offline on paper/whiteboard.
- Platform shows the prompt, controls a 5-second timer, and tracks score.

Scoring:

- 3 points per correct question

Recommended MVP screen:

- Prompt display
- 5-second timer
- Reset timer button
- Reveal answer / hide answer button if needed
- Award +3 button for each team

---

## 5. Recommended MVP Feature List

### Must Have

1. Home page / game selection page
2. Team setup page
   - Default 3 teams
   - Editable team names
   - Default score = 0
3. Host game control screen
   - Choose game
   - Start question/round
   - Hide answer by default
   - Reveal answer button
   - Next/previous question
4. Scoreboard
   - Add points manually
   - Subtract points manually
   - Show leaderboard only when the host clicks to view it
   - Leaderboard should not automatically appear after every game
5. Game-specific scoring
   - Most quiz questions: 1 point per correct answer
   - 주제 빙고:
     - 1st place: 5 points
     - 2nd place: 3 points
   - 릴레이 그림 그리기:
     - 3 points per correct question
6. Timer behavior
   - Only 릴레이 그림 그리기 needs a required timer: 5 seconds per player
   - Other games do not need timers because the host will wait until someone says or submits the correct answer
7. Fixed game order and fixed question order
   - Do not randomize questions for MVP
8. Fixed game data seeded in code or JSON
9. Clean UI style
10. Projector-friendly layout
11. 로고 퀴즈 uses normal logo images, not cropped or hidden

### Should Have

1. Mark question as used
2. Reset game/session
3. Full-screen projector mode
4. Big readable text for projected display
5. Manual leaderboard button available globally

### Not Needed for Tomorrow MVP

1. Team phone answer submission
2. Login/signup
3. Backend database
4. Real-time multiplayer
5. Web drawing canvas
6. Built-in song playback
7. Question randomization

---

## 6. Suggested MVP Screens

### 6.1 `/`
Home / Game Lobby

- Event title: Euron MT Game Night
- Start / Continue session
- Game cards
- Leaderboard preview

### 6.2 `/setup`
Team Setup

- Start with 3 empty/default team slots
- Team names will be registered on-site because teams will create their own names during MT
- Default names can be Team 1, Team 2, Team 3
- Host can edit team names before starting
- Start session

### 6.3 `/games`
Game Selection

Cards:

- Euron 퀴즈
- 관상 퀴즈
- 노래 퀴즈
- 로고 퀴즈
- 초성 게임
- 주제 빙고
- 릴레이 그림 그리기

### 6.4 `/host/:gameId`
Host Control Screen

Common components:

- Question/prompt area
- Timer
- Reveal answer button
- Next button
- Score control panel
- Used/remaining question count

### 6.5 `/leaderboard`
Leaderboard

- Ranking by score
- Team names
- Scores
- Reset option

### 6.6 `/projector/:gameId` Optional
Projector-safe display that hides host-only answers.

If using one laptop only, this can be skipped and host can manually reveal answers.

---

## 7. Frontend Spec

Recommended stack for fastest MVP:

- Next.js or Vite + React
- TypeScript optional but recommended
- Tailwind CSS
- Local state + localStorage for tomorrow-ready MVP

Frontend responsibilities:

- Render game screens
- Manage question index
- Manage timer
- Manage scores
- Persist session state in localStorage
- Load fixed game data from JSON/TS file

Suggested frontend structure:

```txt
src/
  app/ or pages/
  components/
    GameCard.tsx
    Timer.tsx
    Scoreboard.tsx
    ScoreControls.tsx
    QuestionCard.tsx
    AnswerReveal.tsx
  data/
    games.ts
  types/
    game.ts
  utils/
    storage.ts
```

---

## 8. Backend Spec

For this MVP, backend should be skipped.

The platform should be implemented as a frontend-only app because:

- Teams answer on paper.
- The host manually manages scores.
- Only one laptop/projector is required.
- The event is tomorrow, so stability and speed matter most.

Use:

- localStorage for teams, scores, and progress
- static game data in TypeScript/JSON files
- static image files for 로고 퀴즈

Backend is only needed in a future version if teams submit answers from phones or if multiple devices need real-time sync.

---

## 9. Database Spec

### 9.1 No-Backend MVP
No real database.

Use localStorage keys:

```txt
euron_mt_session
```

Example localStorage shape:

```json
{
  "teams": [
    { "id": "team_1", "name": "Team A", "score": 0 },
    { "id": "team_2", "name": "Team B", "score": 0 }
  ],
  "gameProgress": {
    "euron_quiz": { "currentIndex": 0, "usedQuestionIds": [] },
    "tech_logo": { "currentIndex": 0, "usedQuestionIds": [] }
  }
}
```

### 9.2 Database Tables If Backend Is Used

#### sessions

```txt
id
name
created_at
status
```

#### teams

```txt
id
session_id
name
score
created_at
```

#### games

```txt
id
name
type
```

#### questions

```txt
id
game_id
category
prompt
choices
answer
media_url
hint
order_index
```

#### submissions

```txt
id
session_id
team_id
question_id
answer
is_correct
points_awarded
created_at
```

For MVP, game/question data can still be hardcoded and only teams/scores stored.

---

## 10. Deployment Plan

### Recommended Deployment

Use Vercel for the deployed version.

Steps:

1. Build the app as a frontend-only React/Next.js app.
2. Store game data in source code.
3. Put tech logo images in the `public/logos/` folder.
4. Use localStorage for team names, scores, and game progress.
5. Push to GitHub.
6. Deploy to Vercel.
7. Open deployed URL on the host laptop connected to projector.
8. Test full flow before MT.

### Backup Plan

Because the event is tomorrow:

- Also prepare local execution with `npm run dev` or `npm run build && npm run preview`.
- Keep a local copy on the host laptop.
- Prepare PPT/screenshots backup of questions in case internet fails.
- Since songs are played manually from phone, song quiz can continue even if the web app has issues.

---

## 11. Open Questions To Finalize

### Event / Operation

1. How many teams will participate?
2. Will one host/MC control everything, or will each team use their phones?
3. Will there be a projector/TV connected to the host laptop?
4. Do you need a separate host-only screen and public projector screen?
5. Should scores be visible all the time, only between games, or only at the end?

### Scoring

6. Is every correct answer worth the same points?
7. Do different games have different point values?
8. Can teams lose points?
9. Is there a speed bonus?
10. Who decides correctness: automatic system or host?

### Games

11. For Euron 퀴즈, question 5 says 총 7팀 but the provided answer appears to list 6 if “회장, 부회장” is counted together. What is the exact correct answer?
12. For 관상 퀴즈, how many target people are there?
13. For 관상 퀴즈, do you have photos and correct A/B answers for each person?
14. For 노래 퀴즈, will audio be played inside the platform or externally?
15. For 노래 퀴즈, do you already have the song list and answers?
16. For 로고 퀴즈, do you already have logo images?
17. For 로고 퀴즈, should logos be shown normally, blurred, cropped, or partially hidden?
18. For 초성 게임, should the typo/unclear item “ㅇㄱㅅㄴㄴㅈ / 왕과사는 남자” be corrected?
19. For bingo, should the platform generate words or just show timer/rules?
20. For relay drawing, should drawing happen offline on paper/whiteboard or inside the platform?

### Design / Tech

21. Do you want the UI to be cute/funny, clean/professional, or game-like/neon?
22. Should the app use Korean only, English only, or mixed Korean/English?
23. Do you want sound effects/background music inside the app?
24. Are you comfortable deploying to Vercel?
25. Do you already have a GitHub repo?

---

## 12. Final Current MVP Decision

Recommended for tomorrow:

- Frontend-only React/Next.js app
- Clean UI style
- 3 teams
- No login
- No backend
- No database
- Use localStorage
- Host-led game control
- Projector-friendly question display
- Answers hidden until host clicks reveal
- Teams answer on paper
- Manual scorekeeping inside app
- Fixed game order
- Fixed question order
- Leaderboard shown only when host clicks it
- Game-specific timers
- Fixed questions/images
- Tech logos shown normally
- Song quiz played manually from phone
- Relay drawing done offline on paper/whiteboard
- Deploy to Vercel
- Prepare local backup

This is the safest MVP with the highest chance of being usable immediately at MT.

---

## 13. Remaining Questions For Next Iteration

All major MVP decisions are now locked.

Final choices:

- Tech logo filenames can use placeholders for now.
- Song quiz uses 3 placeholder rounds per category.
- Final winner screen should include a celebration effect and full ranking.

---

## 14. AI Build Prompt Draft

Use the following prompt to ask an AI coding model to build the MVP:

```txt
Build a frontend-only web MVP for an Euron school club MT game platform.

Tech stack:
- Next.js or Vite + React
- TypeScript preferred
- Tailwind CSS
- No backend
- No database
- Use localStorage for session state

Core context:
- There are 3 teams.
- Teams answer on paper/offline.
- One host controls the app from a laptop connected to a projector.
- The app should show questions, timers, answers, and score controls.
- Answers must be hidden until the host clicks “Reveal Answer.”
- The leaderboard should only appear when the host clicks a leaderboard button.
- Include a final winner celebration screen with confetti/celebration effect and full ranking.
- The UI should be clean, simple, and projector-friendly.
- Use fixed game order and fixed question order. Do not randomize.

Main pages/screens:
1. Home / Game Selection
2. Team Setup
3. Host Game Screen
4. Leaderboard Modal or Leaderboard Page

Required features:
- Create/edit 3 team names on-site. Use Team 1 / Team 2 / Team 3 as defaults.
- Track scores for 3 teams.
- Persist teams, scores, and game progress in localStorage.
- Game selection screen with cards for:
  - Euron 퀴즈
  - 관상 퀴즈
  - 노래 퀴즈
  - 로고 퀴즈
  - 초성 게임
  - 주제 빙고
  - 릴레이 그림 그리기
- For each game, display one question/prompt at a time.
- Provide Previous / Next controls.
- Provide Reveal Answer / Hide Answer controls.
- Provide a 5-second timer only for 릴레이 그림 그리기.
- Provide score buttons for each team.
- Provide global leaderboard button.
- Provide reset session button with confirmation.

Scoring rules:
- Most quiz questions: +1 point per correct answer.
- 주제 빙고:
  - 1st place: +5 points
  - 2nd place: +3 points
- 릴레이 그림 그리기:
  - +3 points per correct question

Game details:

1. Euron 퀴즈
- Use fixed questions and answers from the provided spec.
- Each correct answer is +1.

2. 관상 퀴즈
- A/B choice game.
- Host chooses one person for each question.
- The selected person reveals/chooses the correct answer live.
- Correct answers do not need to be stored in advance.
- Teams answer on paper.
- Host gives points manually.
- Each correct answer is +1.

3. 노래 퀴즈
- Categories: 2010–2014, 2015–2019, 2020–2026.
- Host plays songs manually from phone.
- App does not need audio playback.
- Use placeholder song names/rounds for now because the final song list is not ready.
- App only shows category, placeholder round, answer reveal, and score buttons.

4. 로고 퀴즈
- Use logo image files from public/logos.
- Logos are shown normally, not cropped or hidden.
- Each correct answer is +1.

5. 초성 게임
- Show Korean initial consonants.
- Reveal full movie/drama title.
- Each correct answer is +1.

6. 주제 빙고
- Offline 4x4 bingo on paper.
- App shows rules.
- No timer is required.
- App has buttons to award +5 for 1st place and +3 for 2nd place.

7. 릴레이 그림 그리기
- Drawing happens offline on paper/whiteboard.
- App shows proverb prompt.
- App has a 5-second timer for each drawing turn.
- Correct answer gives +3 points.

Data:
- Store all game content in a data/games.ts file.
- Use types for Game, Question, Team, and SessionState.

Suggested components:
- GameCard
- TeamSetup
- HostGameScreen
- QuestionCard
- Timer
- ScoreControls
- LeaderboardModal
- RevealAnswer

Deployment:
- Should be deployable to Vercel.
- Also runnable locally as backup.

Important UX:
- Large text for projector readability.
- Clean UI.
- Avoid accidental answer reveal.
- Keep controls simple for the host.
```

