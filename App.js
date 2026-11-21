import React, { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { lessons, dailyQuestions } from "./src/data/lessons";

const navy = "#101C3A";
const ink = "#18233F";
const muted = "#7B8499";
const gold = "#E6B85C";
const bg = "#F5F6FA";
const green = "#23866D";
const STORAGE_KEY = "@wren-martin-grammar-master/progress-v1";
function localDateKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function Pill({ children, active = false, onPress }) {
  return <TouchableOpacity onPress={onPress} style={[styles.pill, active && styles.pillActive]}><Text style={[styles.pillText, active && styles.pillTextActive]}>{children}</Text></TouchableOpacity>;
}
function Action({ title, onPress, secondary = false }) {
  return <TouchableOpacity onPress={onPress} style={[styles.action, secondary && styles.actionSecondary]}><Text style={[styles.actionText, secondary && styles.actionTextSecondary]}>{title}</Text></TouchableOpacity>;
}
function Header({ eyebrow, title, subtitle }) {
  return <View style={styles.header}><Text style={styles.eyebrow}>{eyebrow}</Text><Text style={styles.headerTitle}>{title}</Text>{subtitle ? <Text style={styles.headerSub}>{subtitle}</Text> : null}</View>;
}

export default function App() {
  const [tab, setTab] = useState("Home");
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState([]);
  const [stats, setStats] = useState({ quizzesTaken: 0, questionsAnsweredCorrectly: 0, dailySessions: 0, lastPracticeDate: null, dailyPracticeDates: [], quizHistory: [] });
  const [storageReady, setStorageReady] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [dailyDone, setDailyDone] = useState(false);
  const [filter, setFilter] = useState("All");
  const [showResult, setShowResult] = useState(false);
  const [quizRecorded, setQuizRecorded] = useState(false);
  const [quizNotice, setQuizNotice] = useState("");

  const progress = Math.round((completed.length / lessons.length) * 100);

  useEffect(() => {
    let active = true;
    async function loadProgress() {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (!active || !saved) return;
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.completed)) setCompleted(parsed.completed.filter(id => lessons.some(item => item.id === id)));
        if (parsed.stats && typeof parsed.stats === "object") {
          setStats({
            quizzesTaken: Number(parsed.stats.quizzesTaken) || 0,
            questionsAnsweredCorrectly: Number(parsed.stats.questionsAnsweredCorrectly) || 0,
            dailySessions: Number(parsed.stats.dailySessions) || 0,
            lastPracticeDate: typeof parsed.stats.lastPracticeDate === "string" ? parsed.stats.lastPracticeDate : null,
            dailyPracticeDates: Array.isArray(parsed.stats.dailyPracticeDates) ? [...new Set(parsed.stats.dailyPracticeDates.filter(date => typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)))].slice(-90) : [],
            quizHistory: Array.isArray(parsed.stats.quizHistory) ? parsed.stats.quizHistory.filter(item => item && typeof item.title === "string" && Number.isFinite(item.correct) && Number.isFinite(item.total)).slice(0, 20) : []
          });
          setDailyDone(parsed.stats.lastPracticeDate === localDateKey());
        }
      } catch (error) {
        console.warn("Could not load saved learning progress.", error);
      } finally {
        if (active) setStorageReady(true);
      }
    }
    loadProgress();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ completed, stats })).catch(error => {
      console.warn("Could not save learning progress.", error);
    });
  }, [completed, stats, storageReady]);
  const filteredLessons = useMemo(() => lessons.filter(item => filter === "All" || item.level === filter), [filter]);

  function openLesson(item) {
    setSelected(item);
    setQuiz(null);
    setAnswers({});
    setShowResult(false);
    setQuizRecorded(false);
    setQuizNotice("");
    setTab("Lesson");
  }
  function startQuiz(item) {
    setSelected(item || null);
    setQuiz(item ? item.quiz : dailyQuestions);
    setAnswers({});
    setShowResult(false);
    setQuizRecorded(false);
    setQuizNotice("");
    setTab("Quiz");
  }
  function finishLesson() {
    if (selected && !completed.includes(selected.id)) setCompleted(old => [...old, selected.id]);
    setTab("Learn");
    setSelected(null);
  }
  function score() {
    return (quiz || []).filter((q, i) => answers[i] === q.answer).length;
  }
  function bestScoreFor(lessonId) {
    const attempts = (stats.quizHistory || []).filter(item => item.lessonId === lessonId && item.total > 0);
    return attempts.length ? Math.max(...attempts.map(item => item.percent)) : null;
  }
  function dateKeyOffset(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const practiceDates = new Set(stats.dailyPracticeDates || []);
  const currentStreak = (() => {
    let offset = practiceDates.has(dateKeyOffset(0)) ? 0 : practiceDates.has(dateKeyOffset(-1)) ? -1 : null;
    if (offset === null) return 0;
    let count = 0;
    while (practiceDates.has(dateKeyOffset(offset))) { count += 1; offset -= 1; }
    return count;
  })();
  const weeklyActivity = Array.from({ length: 7 }, (_, index) => {
    const offset = index - 6;
    const key = dateKeyOffset(offset);
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return { key, label: date.toLocaleDateString("en", { weekday: "short" }), active: practiceDates.has(key), today: offset === 0 };
  });

  const renderLessonCard = (item, index) => (
    <TouchableOpacity key={item.id} onPress={() => openLesson(item)} style={styles.lessonCard}>
      <View style={styles.lessonNumber}><Text style={styles.lessonNumberText}>{String(index + 1).padStart(2, "0")}</Text></View>
      <View style={{ flex: 1 }}><Text style={styles.cardTitle}>{item.title}</Text><Text style={styles.cardSub}>{item.subtitle}</Text><Text style={styles.cardMeta}>{item.level}  ·  {item.duration}</Text>{bestScoreFor(item.id) !== null ? <Text style={styles.bestScoreMeta}>Best quiz score: {bestScoreFor(item.id)}%</Text> : null}</View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );

  function Home() {
    return <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.heroKicker}>YOUR PERSONAL ENGLISH COACH</Text>
        <Text style={styles.heroTitle}>Master English,{"\n"}one lesson at a time.</Text>
        <Text style={styles.heroUrdu}>آسان اردو وضاحت کے ساتھ انگریزی گرامر سیکھیں</Text>
        <View style={styles.heroBottom}><View><Text style={styles.heroSmall}>COURSE PROGRESS</Text><Text style={styles.heroPercent}>{progress}%</Text></View><View style={styles.heroProgressTrack}><View style={[styles.heroProgressFill, { width: progress + "%" }]} /></View></View>
      </View>
      <View style={styles.sectionRow}><Text style={styles.sectionTitle}>Continue learning</Text><Text style={styles.link} onPress={() => setTab("Learn")}>View all</Text></View>
      {lessons.filter(x => !completed.includes(x.id)).slice(0, 2).map(renderLessonCard)}
      <View style={styles.dailyCard}><View style={styles.dailyIcon}><Text style={{ fontSize: 22 }}>✦</Text></View><View style={{ flex: 1 }}><Text style={styles.dailyTitle}>Daily practice</Text><Text style={styles.cardSub}>{dailyQuestions.length} quick questions to sharpen your English</Text></View><Action title="Start" onPress={() => startQuiz(null)} /></View>
      <View style={styles.tipCard}><Text style={styles.tipLabel}>TODAY'S TIP</Text><Text style={styles.tipText}>“An” is used before a vowel sound, not simply a vowel letter.</Text><Text style={styles.tipUrdu}>مثال: an hour، لیکن a university۔</Text></View>
    </ScrollView>;
  }

  function Learn() {
    return <ScrollView contentContainerStyle={styles.content}>
      <Header eyebrow="THE GRAMMAR LIBRARY" title="Explore lessons" subtitle="Build your foundation, step by step." />
      <View style={styles.filterRow}>{["All", "Beginner", "Intermediate"].map(x => <Pill key={x} active={filter === x} onPress={() => setFilter(x)}>{x}</Pill>)}</View>
      <Text style={styles.listCount}>{filteredLessons.length} LESSONS · {completed.length} COMPLETED</Text>
      {filteredLessons.map((item, index) => <View key={item.id}>{renderLessonCard(item, lessons.indexOf(item))}{completed.includes(item.id) ? <Text style={styles.doneMark}>✓ Completed</Text> : null}</View>)}
    </ScrollView>;
  }

  function Lesson() {
    if (!selected) return null;
    return <ScrollView contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => setTab("Learn")}><Text style={styles.back}>‹  ALL LESSONS</Text></TouchableOpacity>
      <Header eyebrow={selected.level.toUpperCase() + " · " + selected.duration.toUpperCase()} title={selected.title} subtitle={selected.subtitle} />
      <View style={styles.lessonPanel}><Text style={styles.panelLabel}>THE RULE</Text><Text style={styles.ruleText}>{selected.rule}</Text><Text style={styles.urduText}>{selected.urdu}</Text></View>
      <View style={styles.examplePanel}><Text style={styles.panelLabel}>EXAMPLE</Text><Text style={styles.exampleText}>{selected.example}</Text></View>
      <Text style={styles.sectionTitle}>Understand the sentence</Text>
      {selected.breakdown.map((line, i) => <View key={i} style={styles.breakRow}><View style={{ flex: 1 }}><Text style={styles.breakWord}>{line[0]}</Text><Text style={styles.breakKind}>{line[1]}</Text></View><Text style={styles.breakUrdu}>{line[2]}</Text></View>)}
      <Action title="Take chapter quiz  →" onPress={() => startQuiz(selected)} />
      <Action title="Mark lesson complete" secondary onPress={finishLesson} />
    </ScrollView>;
  }

  function Quiz() {
    if (!quiz) return null;
    const total = quiz.length;
    return <ScrollView contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => setTab(selected ? "Lesson" : "Home")}><Text style={styles.back}>‹  BACK</Text></TouchableOpacity>
      <Header eyebrow="QUICK KNOWLEDGE CHECK" title={selected ? selected.title + " quiz" : "Daily practice"} subtitle="Choose the best answer for each question." />
      {quiz.map((q, i) => <View key={i} style={styles.questionCard}><Text style={styles.questionCount}>QUESTION {i + 1} OF {total}</Text><Text style={styles.questionText}>{q.q}</Text>{q.options.map((option, j) => <TouchableOpacity key={j} onPress={() => !showResult && setAnswers(old => ({ ...old, [i]: j }))} style={[styles.option, answers[i] === j && styles.optionSelected, showResult && j === q.answer && styles.optionCorrect, showResult && answers[i] === j && j !== q.answer && styles.optionWrong]}><Text style={[styles.optionText, answers[i] === j && styles.optionTextSelected]}>{String.fromCharCode(65 + j)}.  {option}</Text></TouchableOpacity>)}{showResult ? <Text style={styles.explanation}>{answers[i] === q.answer ? "Correct! " : "Not quite. "}{q.why}</Text> : null}</View>)}
      {quizNotice ? <Text style={styles.quizNotice}>{quizNotice}</Text> : null}
      {!showResult ? <Action title="Check my answers" onPress={() => {
        if (Object.keys(answers).length !== total) {
          setQuizNotice("Please answer every question before checking your result.");
          return;
        }
        if (!quizRecorded) {
          const correct = score();
          const isDaily = !selected;
          const today = localDateKey();
          const totalQuestions = quiz.length;
          const attempt = { title: selected ? selected.title : "Daily practice", lessonId: selected ? selected.id : null, date: today, correct, total: totalQuestions, percent: Math.round((correct / totalQuestions) * 100) };
          setStats(old => ({
            ...old,
            quizzesTaken: old.quizzesTaken + 1,
            questionsAnsweredCorrectly: old.questionsAnsweredCorrectly + correct,
            dailySessions: old.dailySessions + (isDaily ? 1 : 0),
            lastPracticeDate: isDaily ? today : old.lastPracticeDate,
            dailyPracticeDates: isDaily ? [...new Set([...(old.dailyPracticeDates || []), today])].slice(-90) : (old.dailyPracticeDates || []),
            quizHistory: [attempt, ...(old.quizHistory || [])].slice(0, 20)
          }));
          if (isDaily) setDailyDone(true);
          setQuizRecorded(true);
        }
        setQuizNotice("");
        setShowResult(true);
      }} /> : <View style={styles.resultCard}><Text style={styles.resultScore}>{score()} / {total}</Text><Text style={styles.resultText}>You got {score()} correct answers.</Text><Action title="Try again" secondary onPress={() => { setAnswers({}); setShowResult(false); setQuizRecorded(false); setQuizNotice(""); }} /><Action title="Done" onPress={() => { if (selected && score() === total) finishLesson(); else setTab("Home"); }} /></View>}
    </ScrollView>;
  }

  function Practice() {
    return <ScrollView contentContainerStyle={styles.content}>
      <Header eyebrow="BUILD A DAILY HABIT" title="Practice makes progress" subtitle="Short sessions. Stronger grammar. Better confidence." />
      <View style={styles.practiceHero}><Text style={styles.practiceNumber}>{String(dailyQuestions.length).padStart(2, "0")}</Text><Text style={styles.practiceLabel}>QUESTIONS IN THE PRACTICE BANK</Text><Text style={styles.practiceDescription}>A quick daily challenge covering grammar essentials.</Text><Action title={dailyDone ? "Practice again" : "Start daily practice"} onPress={() => startQuiz(null)} /></View>
      <View style={styles.tipCard}><Text style={styles.tipLabel}>STUDY TIP</Text><Text style={styles.tipText}>Try to explain each grammar rule in your own words after reading it.</Text><Text style={styles.tipUrdu}>ہر سبق کے بعد اصول کو اپنے الفاظ میں سمجھانے کی کوشش کریں۔</Text></View>
    </ScrollView>;
  }

  function Progress() {
    return <ScrollView contentContainerStyle={styles.content}>
      <Header eyebrow="YOUR LEARNING JOURNEY" title="Your progress" subtitle="Every lesson brings you closer to confident English." />
      <View style={styles.statsGrid}><View style={styles.statCard}><Text style={styles.statNumber}>{completed.length}</Text><Text style={styles.statLabel}>LESSONS DONE</Text></View><View style={styles.statCard}><Text style={styles.statNumber}>{lessons.length - completed.length}</Text><Text style={styles.statLabel}>REMAINING</Text></View></View>
      <View style={styles.statsGrid}><View style={styles.statCard}><Text style={styles.statNumber}>{stats.quizzesTaken}</Text><Text style={styles.statLabel}>QUIZ ATTEMPTS</Text></View><View style={styles.statCard}><Text style={styles.statNumber}>{stats.questionsAnsweredCorrectly}</Text><Text style={styles.statLabel}>CORRECT ANSWERS</Text></View></View>
      <View style={styles.progressCard}><Text style={styles.panelLabel}>DAILY PRACTICE</Text><View style={styles.streakHeader}><View><Text style={styles.progressBig}>{currentStreak}</Text><Text style={styles.cardSub}>Day current streak</Text></View><View style={styles.activeDays}><Text style={styles.activeDaysNumber}>{practiceDates.size}</Text><Text style={styles.activeDaysLabel}>ACTIVE DAYS</Text></View></View><Text style={styles.cardSub}>{stats.dailySessions} practice sessions completed</Text><Text style={styles.weekLabel}>LAST 7 DAYS</Text><View style={styles.weekRow}>{weeklyActivity.map(day => <View key={day.key} style={styles.weekDay}><View style={[styles.weekDot, day.active && styles.weekDotActive, day.today && styles.weekDotToday]}><Text style={[styles.weekCheck, day.active && styles.weekCheckActive]}>{day.active ? "✓" : "·"}</Text></View><Text style={[styles.weekDayLabel, day.today && styles.weekDayToday]}>{day.label}</Text></View>)}</View></View>
      <View style={styles.progressCard}><Text style={styles.panelLabel}>RECENT QUIZ RESULTS</Text>{(stats.quizHistory || []).length ? stats.quizHistory.slice(0, 5).map((item, index) => <View key={item.date + item.title + index} style={styles.historyRow}><View style={{ flex: 1 }}><Text style={styles.cardTitle}>{item.title}</Text><Text style={styles.cardSub}>{item.date} · {item.correct}/{item.total} correct</Text></View><Text style={styles.historyScore}>{item.percent}%</Text></View>) : <Text style={styles.emptyText}>Your quiz results will appear here after your first attempt.</Text>}</View>
      <View style={styles.progressCard}><Text style={styles.panelLabel}>COURSE COMPLETION</Text><Text style={styles.progressBig}>{progress}%</Text><View style={styles.progressTrack}><View style={[styles.progressFill, { width: progress + "%" }]} /></View><Text style={styles.cardSub}>{completed.length} of {lessons.length} lessons completed</Text></View>
      <Text style={styles.sectionTitle}>Completed lessons</Text>
      {completed.length ? lessons.filter(x => completed.includes(x.id)).map(x => <View key={x.id} style={styles.completedRow}><Text style={styles.completedCheck}>✓</Text><Text style={styles.cardTitle}>{x.title}</Text></View>) : <Text style={styles.emptyText}>Your completed lessons will appear here. Start with Parts of Speech!</Text>}
    </ScrollView>;
  }

  const screens = { Home: <Home />, Learn: <Learn />, Lesson: <Lesson />, Quiz: <Quiz />, Practice: <Practice />, Progress: <Progress /> };
  const nav = [{ id: "Home", icon: "⌂", label: "Home" }, { id: "Learn", icon: "▤", label: "Learn" }, { id: "Practice", icon: "✦", label: "Practice" }, { id: "Progress", icon: "◔", label: "Progress" }];
  return <SafeAreaView style={styles.safe}><StatusBar barStyle="light-content" backgroundColor={navy} /><View style={styles.topbar}><View><Text style={styles.brandSmall}>WREN & MARTIN</Text><Text style={styles.brand}>Grammar Master</Text></View><View style={styles.avatar}><Text style={styles.avatarText}>G</Text></View></View><View style={styles.screen}>{screens[tab] || <Home />}</View><View style={styles.bottomNav}>{nav.map(n => <TouchableOpacity key={n.id} onPress={() => setTab(n.id)} style={styles.navItem}><Text style={[styles.navIcon, tab === n.id && styles.navActive]}>{n.icon}</Text><Text style={[styles.navLabel, tab === n.id && styles.navActive]}>{n.label}</Text></TouchableOpacity>)}</View></SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: navy },
  topbar: { height: 68, paddingHorizontal: 22, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: navy },
  brandSmall: { color: gold, fontSize: 9, letterSpacing: 2, fontWeight: "800" },
  brand: { color: "#FFFFFF", fontSize: 18, fontWeight: "800", marginTop: 2 },
  avatar: { width: 38, height: 38, borderRadius: 14, backgroundColor: "#263655", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#52617B" },
  avatarText: { color: gold, fontWeight: "900", fontSize: 16 },
  screen: { flex: 1, backgroundColor: bg },
  content: { padding: 20, paddingBottom: 34 },
  hero: { backgroundColor: navy, borderRadius: 24, padding: 22, marginBottom: 26, overflow: "hidden" },
  heroKicker: { color: gold, fontSize: 9, letterSpacing: 1.8, fontWeight: "800" },
  heroTitle: { color: "#FFFFFF", fontSize: 29, lineHeight: 35, fontWeight: "900", marginTop: 14 },
  heroUrdu: { color: "#D5DCEC", fontSize: 14, marginTop: 10, textAlign: "right" },
  heroBottom: { flexDirection: "row", alignItems: "center", marginTop: 25, gap: 18 },
  heroSmall: { color: "#9EABC1", fontSize: 8, letterSpacing: 1.3, fontWeight: "800" },
  heroPercent: { color: gold, fontSize: 23, fontWeight: "900", marginTop: 2 },
  heroProgressTrack: { flex: 1, height: 7, backgroundColor: "#35435E", borderRadius: 8, overflow: "hidden" },
  heroProgressFill: { height: 7, backgroundColor: gold, borderRadius: 8 },
  sectionRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  sectionTitle: { color: ink, fontSize: 18, fontWeight: "800", marginBottom: 12, marginTop: 12 },
  link: { color: green, fontWeight: "800", fontSize: 12 },
  lessonCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 17, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: "#EAECF2" },
  lessonNumber: { width: 42, height: 42, borderRadius: 13, backgroundColor: "#F4EBD8", alignItems: "center", justifyContent: "center", marginRight: 13 },
  lessonNumberText: { color: "#9B702A", fontWeight: "900", fontSize: 13 },
  cardTitle: { color: ink, fontSize: 14, fontWeight: "800" },
  cardSub: { color: muted, fontSize: 11, marginTop: 4 },
  cardMeta: { color: green, fontSize: 9, fontWeight: "800", marginTop: 6, letterSpacing: 0.4 },
  bestScoreMeta: { color: green, fontSize: 10, fontWeight: "800", marginTop: 5 },
  chevron: { color: "#A8AFBD", fontSize: 26, marginLeft: 8 },
  dailyCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#EAF3F0", borderRadius: 18, padding: 14, marginTop: 12 },
  dailyIcon: { width: 42, height: 42, borderRadius: 14, backgroundColor: "#D4E9E1", alignItems: "center", justifyContent: "center", marginRight: 11 },
  dailyTitle: { color: ink, fontSize: 14, fontWeight: "800" },
  action: { backgroundColor: green, borderRadius: 13, paddingVertical: 14, paddingHorizontal: 17, alignItems: "center", justifyContent: "center", marginTop: 12, minHeight: 46 },
  actionText: { color: "#FFFFFF", fontWeight: "800", fontSize: 13 },
  actionSecondary: { backgroundColor: "#E8EBF1", marginTop: 9 },
  actionTextSecondary: { color: ink },
  tipCard: { backgroundColor: "#FFF7E8", borderRadius: 18, padding: 17, marginTop: 17 },
  tipLabel: { color: "#A5792F", fontSize: 9, fontWeight: "900", letterSpacing: 1.5 },
  tipText: { color: ink, fontSize: 14, fontWeight: "700", lineHeight: 21, marginTop: 8 },
  tipUrdu: { color: "#8B7654", fontSize: 12, textAlign: "right", marginTop: 8 },
  header: { marginTop: 8, marginBottom: 18 },
  eyebrow: { color: green, fontSize: 9, letterSpacing: 1.5, fontWeight: "900" },
  headerTitle: { color: ink, fontSize: 27, lineHeight: 33, fontWeight: "900", marginTop: 7 },
  headerSub: { color: muted, fontSize: 12, marginTop: 6, lineHeight: 18 },
  filterRow: { flexDirection: "row", gap: 7, marginBottom: 18 },
  pill: { paddingHorizontal: 13, paddingVertical: 9, borderRadius: 20, backgroundColor: "#E9EBF1" },
  pillActive: { backgroundColor: navy },
  pillText: { color: muted, fontSize: 11, fontWeight: "700" },
  pillTextActive: { color: "#FFFFFF" },
  listCount: { color: muted, fontSize: 9, letterSpacing: 1.2, fontWeight: "900", marginBottom: 10 },
  doneMark: { color: green, fontSize: 10, fontWeight: "800", marginTop: -4, marginBottom: 9, marginLeft: 57 },
  back: { color: green, fontSize: 10, fontWeight: "900", letterSpacing: 1.1, marginBottom: 12, marginTop: 5 },
  lessonPanel: { backgroundColor: "#FFFFFF", borderRadius: 20, padding: 19, borderWidth: 1, borderColor: "#E9ECF2", marginBottom: 12 },
  panelLabel: { color: green, fontSize: 9, fontWeight: "900", letterSpacing: 1.4 },
  ruleText: { color: ink, fontSize: 17, lineHeight: 25, fontWeight: "800", marginTop: 10 },
  urduText: { color: "#68738A", fontSize: 15, lineHeight: 26, textAlign: "right", marginTop: 13 },
  examplePanel: { backgroundColor: navy, borderRadius: 18, padding: 18, marginBottom: 16 },
  exampleText: { color: "#FFFFFF", fontSize: 17, lineHeight: 24, fontWeight: "700", marginTop: 9 },
  breakRow: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 14, padding: 14, marginBottom: 8 },
  breakWord: { color: ink, fontWeight: "900", fontSize: 14 },
  breakKind: { color: green, fontSize: 10, fontWeight: "700", marginTop: 3 },
  breakUrdu: { color: muted, fontSize: 12, textAlign: "right", flex: 1 },
  questionCard: { backgroundColor: "#FFFFFF", borderRadius: 18, padding: 16, marginBottom: 13, borderWidth: 1, borderColor: "#EAECF2" },
  questionCount: { color: green, fontSize: 9, fontWeight: "900", letterSpacing: 1.2 },
  questionText: { color: ink, fontSize: 16, fontWeight: "800", lineHeight: 23, marginTop: 9, marginBottom: 12 },
  option: { borderWidth: 1, borderColor: "#E5E8EF", padding: 12, borderRadius: 12, marginTop: 7, minHeight: 44, justifyContent: "center" },
  optionSelected: { borderColor: green, backgroundColor: "#EAF4F0" },
  optionCorrect: { borderColor: green, backgroundColor: "#EAF4F0" },
  optionWrong: { borderColor: "#C95F5F", backgroundColor: "#FFF0F0" },
  optionText: { color: ink, fontSize: 12, fontWeight: "600" },
  optionTextSelected: { color: green, fontWeight: "900" },
  explanation: { color: muted, fontSize: 11, lineHeight: 17, marginTop: 11 },
  quizNotice: { color: "#A34C32", fontSize: 12, fontWeight: "700", marginBottom: 10, lineHeight: 18 },
  resultCard: { backgroundColor: "#EAF3F0", padding: 18, borderRadius: 18, alignItems: "center" },
  resultScore: { color: green, fontSize: 34, fontWeight: "900" },
  resultText: { color: ink, fontWeight: "700", marginTop: 4 },
  practiceHero: { backgroundColor: navy, borderRadius: 22, padding: 22, alignItems: "center", marginTop: 5 },
  practiceNumber: { color: gold, fontSize: 55, fontWeight: "900" },
  practiceLabel: { color: "#D5DCEC", letterSpacing: 2, fontSize: 9, fontWeight: "900" },
  practiceDescription: { color: "#FFFFFF", textAlign: "center", lineHeight: 20, marginTop: 13, fontSize: 13 },
  statsGrid: { flexDirection: "row", gap: 10 },
  statCard: { flex: 1, backgroundColor: "#FFFFFF", borderRadius: 18, padding: 18, borderWidth: 1, borderColor: "#EAECF2" },
  statNumber: { color: ink, fontSize: 30, fontWeight: "900" },
  statLabel: { color: muted, fontSize: 9, fontWeight: "900", letterSpacing: 1, marginTop: 5 },
  progressCard: { backgroundColor: "#FFFFFF", borderRadius: 18, padding: 19, marginTop: 13, borderWidth: 1, borderColor: "#EAECF2" },
  historyRow: { flexDirection: "row", alignItems: "center", paddingVertical: 11, borderBottomWidth: 1, borderBottomColor: "#EEF0F4" },
  historyScore: { color: green, fontSize: 18, fontWeight: "900", marginLeft: 12 },
  streakHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  activeDays: { backgroundColor: "#F1F6F3", borderRadius: 14, paddingHorizontal: 16, paddingVertical: 10, alignItems: "center" },
  activeDaysNumber: { color: green, fontSize: 22, fontWeight: "900" },
  activeDaysLabel: { color: muted, fontSize: 8, fontWeight: "900", letterSpacing: 1 },
  weekLabel: { color: muted, fontSize: 9, fontWeight: "900", letterSpacing: 1.2, marginTop: 20, marginBottom: 12 },
  weekRow: { flexDirection: "row", justifyContent: "space-between" },
  weekDay: { alignItems: "center", flex: 1 },
  weekDot: { width: 29, height: 29, borderRadius: 15, backgroundColor: "#F0F2F6", alignItems: "center", justifyContent: "center" },
  weekDotActive: { backgroundColor: "#DDF1E6" },
  weekDotToday: { borderWidth: 1, borderColor: green },
  weekCheck: { color: muted, fontSize: 15, fontWeight: "800" },
  weekCheckActive: { color: green },
  weekDayLabel: { color: muted, fontSize: 9, marginTop: 6, fontWeight: "700" },
  weekDayToday: { color: green, fontWeight: "900" },
  progressBig: { color: ink, fontSize: 38, fontWeight: "900", marginTop: 8 },
  progressTrack: { height: 9, backgroundColor: "#E9ECF2", borderRadius: 10, marginTop: 10, marginBottom: 10, overflow: "hidden" },
  progressFill: { height: 9, backgroundColor: green, borderRadius: 10 },
  completedRow: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", padding: 14, borderRadius: 13, marginBottom: 8 },
  completedCheck: { color: green, fontSize: 16, fontWeight: "900", marginRight: 12 },
  emptyText: { color: muted, fontSize: 12, lineHeight: 19, backgroundColor: "#FFFFFF", padding: 16, borderRadius: 14 },
  bottomNav: { height: 70, flexDirection: "row", backgroundColor: "#FFFFFF", borderTopWidth: 1, borderTopColor: "#E9ECF2", justifyContent: "space-around", alignItems: "center", paddingBottom: 5 },
  navItem: { alignItems: "center", justifyContent: "center", minWidth: 65, minHeight: 50 },
  navIcon: { color: "#9AA2B2", fontSize: 20, fontWeight: "800" },
  navLabel: { color: "#9AA2B2", fontSize: 9, fontWeight: "700", marginTop: 3 },
  navActive: { color: green }
});