import React, { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
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
function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\x27/g, "&#39;");
}
function createCertificateId() {
  return "WM-" + localDateKey().replace(/-/g, "") + "-" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 6).toUpperCase();
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
const fullCourseQuestions = lessons.flatMap(lesson => lesson.quiz.map(question => ({ ...question, lessonTitle: lesson.title, lessonId: lesson.id })));

export default function App() {
  const [tab, setTab] = useState("Home");
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState([]);
  const [stats, setStats] = useState({ quizzesTaken: 0, questionsAnsweredCorrectly: 0, dailySessions: 0, lastPracticeDate: null, dailyPracticeDates: [], quizHistory: [], wrongAnswers: [] });
  const [storageReady, setStorageReady] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [dailyDone, setDailyDone] = useState(false);
  const [filter, setFilter] = useState("All");
  const [lessonSearch, setLessonSearch] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [quizRecorded, setQuizRecorded] = useState(false);
  const [quizNotice, setQuizNotice] = useState("");
  const [isExam, setIsExam] = useState(false);
  const [isMistakePractice, setIsMistakePractice] = useState(false);
  const [examDeadline, setExamDeadline] = useState(null);
  const [examRemaining, setExamRemaining] = useState(0);
  const [examExpired, setExamExpired] = useState(false);
  const [certificateName, setCertificateName] = useState("");
  const [certificateBusy, setCertificateBusy] = useState(false);
  const [certificateMessage, setCertificateMessage] = useState("");
  const [examCertificateId, setExamCertificateId] = useState("");

  const progress = Math.round((completed.length / lessons.length) * 100);

  useEffect(() => {
    let active = true;
    async function loadProgress() {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (!active || !saved) return;
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.completed)) setCompleted(parsed.completed.filter(id => lessons.some(item => item.id === id)));
        if (typeof parsed.certificateName === "string") setCertificateName(parsed.certificateName);
        const savedExam = parsed.examSession;
        if (savedExam && Number.isFinite(savedExam.deadline) && savedExam.totalQuestions === fullCourseQuestions.length) {
          const restoredAnswers = {};
          if (savedExam.answers && typeof savedExam.answers === "object" && !Array.isArray(savedExam.answers)) {
            Object.keys(savedExam.answers).forEach(key => {
              const index = Number(key);
              const answer = savedExam.answers[key];
              if (Number.isInteger(index) && index >= 0 && index < fullCourseQuestions.length && Number.isInteger(answer) && answer >= 0 && answer < fullCourseQuestions[index].options.length) restoredAnswers[index] = answer;
            });
          }
          setSelected(null);
          setIsExam(true);
          setQuiz(fullCourseQuestions);
          setAnswers(restoredAnswers);
          setShowResult(false);
          setQuizRecorded(false);
          setQuizNotice("Your saved exam has been restored.");
          setExamDeadline(savedExam.deadline);
          setExamRemaining(Math.max(0, Math.ceil((savedExam.deadline - Date.now()) / 1000)));
          setExamExpired(false);
          setExamCertificateId(typeof savedExam.certificateId === "string" ? savedExam.certificateId : createCertificateId());
          setTab("Quiz");
        }
        if (parsed.stats && typeof parsed.stats === "object") {
          setStats({
            quizzesTaken: Number(parsed.stats.quizzesTaken) || 0,
            questionsAnsweredCorrectly: Number(parsed.stats.questionsAnsweredCorrectly) || 0,
            dailySessions: Number(parsed.stats.dailySessions) || 0,
            lastPracticeDate: typeof parsed.stats.lastPracticeDate === "string" ? parsed.stats.lastPracticeDate : null,
            dailyPracticeDates: Array.isArray(parsed.stats.dailyPracticeDates) ? [...new Set(parsed.stats.dailyPracticeDates.filter(date => typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)))].slice(-90) : [],
            quizHistory: Array.isArray(parsed.stats.quizHistory) ? parsed.stats.quizHistory.filter(item => item && typeof item.title === "string" && Number.isFinite(item.correct) && Number.isFinite(item.total)).slice(0, 20) : [],
            wrongAnswers: Array.isArray(parsed.stats.wrongAnswers) ? parsed.stats.wrongAnswers.filter(item => item && typeof item.question === "string" && typeof item.correctAnswer === "string").slice(0, 50) : []
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
    if (!examDeadline || showResult || !isExam) return;
    const updateClock = () => {
      const remaining = Math.max(0, Math.ceil((examDeadline - Date.now()) / 1000));
      setExamRemaining(remaining);
      if (remaining === 0) setExamExpired(true);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, [examDeadline, showResult, isExam]);

  useEffect(() => {
    if (examExpired && isExam && !showResult && !quizRecorded) submitQuiz(true);
  }, [examExpired]);

  useEffect(() => {
    if (!storageReady) return;
    const examSession = isExam && examDeadline && !showResult && quiz ? {
      deadline: examDeadline,
      answers,
      totalQuestions: quiz.length,
      certificateId: examCertificateId
    } : null;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ completed, stats, certificateName, examSession })).catch(error => {
      console.warn("Could not save learning progress.", error);
    });
  }, [completed, stats, certificateName, storageReady, isExam, examDeadline, showResult, quiz, answers, examCertificateId]);
  const filteredLessons = useMemo(() => {
    const query = lessonSearch.trim().toLocaleLowerCase();
    return lessons.filter(item => {
      const matchesLevel = filter === "All" || item.level === filter;
      const lessonDetails = [item.example, ...(item.breakdown || []).flat(), ...(item.quiz || []).flatMap(question => [question.q, question.why, ...(question.options || [])])].filter(Boolean).join(" ");
      const searchableText = `${item.title} ${item.subtitle} ${item.rule} ${item.urdu} ${lessonDetails}`.toLocaleLowerCase();
      return matchesLevel && (!query || searchableText.includes(query));
    });
  }, [filter, lessonSearch]);

  function openLesson(item) {
    setIsExam(false);
    setIsMistakePractice(false);
    setExamDeadline(null);
    setExamExpired(false);
    setSelected(item);
    setQuiz(null);
    setAnswers({});
    setShowResult(false);
    setQuizRecorded(false);
    setQuizNotice("");
    setTab("Lesson");
  }
  function startQuiz(item) {
    setIsExam(false);
    setIsMistakePractice(false);
    setExamDeadline(null);
    setExamExpired(false);
    setSelected(item || null);
    setQuiz(item ? item.quiz : dailyQuestions);
    setAnswers({});
    setShowResult(false);
    setQuizRecorded(false);
    setQuizNotice("");
    setTab("Quiz");
  }
  function startMistakePractice() {
    const questions = (stats.wrongAnswers || [])
      .filter(item => Array.isArray(item.options) && Number.isInteger(item.answer) && item.answer >= 0 && item.answer < item.options.length)
      .slice(0, 10)
      .map(item => ({ q: item.question, options: item.options, answer: item.answer, why: item.explanation, lessonTitle: item.lessonTitle, lessonId: item.lessonId }));
    if (!questions.length) return;
    setIsExam(false);
    setIsMistakePractice(true);
    setExamDeadline(null);
    setExamExpired(false);
    setSelected(null);
    setQuiz(questions);
    setAnswers({});
    setShowResult(false);
    setQuizRecorded(false);
    setQuizNotice("");
    setTab("Quiz");
  }
  function startExam() {
    const questions = fullCourseQuestions;
    setIsMistakePractice(false);
    setSelected(null);
    setIsExam(true);
    setQuiz(questions);
    setAnswers({});
    setShowResult(false);
    setQuizRecorded(false);
    setQuizNotice("");
    setExamExpired(false);
    setCertificateMessage("");
    setExamCertificateId(createCertificateId());
    setExamRemaining(30 * 60);
    setExamDeadline(Date.now() + 30 * 60 * 1000);
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
  const examPercent = quiz && quiz.length ? Math.round((score() / quiz.length) * 100) : 0;
  const examGrade = (() => {
    const bands = examPercent >= 90 ? { letter: "A", label: "Excellent", passed: true } : examPercent >= 80 ? { letter: "B", label: "Very good", passed: true } : examPercent >= 70 ? { letter: "C", label: "Good", passed: true } : examPercent >= 60 ? { letter: "D", label: "Pass", passed: true } : { letter: "F", label: "Needs improvement", passed: false };
    return { ...bands, percent: examPercent };
  })();
  const examBreakdown = isExam ? lessons.map(lesson => {
    const items = quiz.map((question, index) => ({ question, index })).filter(item => item.question.lessonId === lesson.id);
    const correct = items.filter(item => answers[item.index] === item.question.answer).length;
    return { lessonId: lesson.id, title: lesson.title, correct, total: items.length, percent: items.length ? Math.round((correct / items.length) * 100) : 0 };
  }) : [];
  async function createAndShareCertificate() {
    if (!isExam || !showResult || !examGrade.passed || !examCertificateId || certificateBusy) return;
    const learner = certificateName.trim();
    if (!learner) {
      setCertificateMessage("Enter the learner name to personalise the certificate.");
      return;
    }
    setCertificateBusy(true);
    setCertificateMessage("");
    const safeName = escapeHtml(learner);
    const safeId = escapeHtml(examCertificateId);
    const date = escapeHtml(localDateKey());
    const grade = escapeHtml(examGrade.letter);
    const percentage = examGrade.percent;
    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
@page { size: A4 landscape; margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; width: 100%; height: 100%; font-family: Arial, Helvetica, sans-serif; color: #18233F; }
body { padding: 28px; background: #fff; }
.frame { width: 100%; height: 100%; min-height: 535px; border: 8px double #C9A85D; padding: 38px 54px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.kicker { color: #9A7836; font-size: 13px; font-weight: 700; letter-spacing: 4px; }
h1 { font-family: Georgia, serif; font-size: 38px; margin: 22px 0 12px; color: #101C3A; }
.intro { font-size: 16px; color: #667085; margin: 8px 0; }
.name { font-family: Georgia, serif; font-size: 34px; font-weight: bold; color: #9A7836; border-bottom: 1px solid #C9A85D; padding: 8px 36px 12px; margin: 10px 0 12px; }
.course { font-size: 18px; font-weight: bold; color: #101C3A; margin-top: 7px; }
.grade { font-size: 18px; font-weight: bold; color: #23866D; margin-top: 22px; }
.meta { color: #667085; font-size: 11px; margin-top: 13px; letter-spacing: 1px; }
.note { color: #7B8499; font-size: 10px; margin-top: 18px; }
</style></head><body><main class="frame">
<div class="kicker">WREN &amp; MARTIN GRAMMAR MASTER</div>
<h1>Certificate of Achievement</h1>
<div class="intro">This certificate is proudly presented to</div>
<div class="name">${safeName}</div>
<div class="intro">for passing the full-course English grammar assessment.</div>
<div class="course">Wren &amp; Martin Grammar Master</div>
<div class="grade">GRADE ${grade} · ${percentage}%</div>
<div class="meta">COMPLETED: ${date}</div>
<div class="meta">CERTIFICATE ID: ${safeId}</div>
<div class="note">Learning achievement certificate · This is not a formal academic accreditation.</div>
</main></body></html>`;
    try {
      const file = await Print.printToFileAsync({ html, width: 842, height: 595, margins: { top: 0, right: 0, bottom: 0, left: 0 } });
      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        await Sharing.shareAsync(file.uri, { mimeType: "application/pdf", UTI: "com.adobe.pdf", dialogTitle: "Save or share your grammar certificate" });
        setCertificateMessage("Your certificate PDF is ready. Choose a destination in the share menu to save or send it.");
      } else {
        await Print.printAsync({ uri: file.uri, orientation: Print.Orientation.landscape });
        setCertificateMessage("The PDF was created. Sharing is unavailable on this device, so the print dialog was opened instead.");
      }
    } catch (error) {
      console.warn("Could not create or share the certificate PDF.", error);
      setCertificateMessage("We couldn't create or share the PDF just now. Please try again.");
    } finally {
      setCertificateBusy(false);
    }
  }

  function submitQuiz(force = false, confirmed = false) {
    if (!quiz || quizRecorded || showResult) return;
    const total = quiz.length;
    const unanswered = total - Object.keys(answers).length;
    if (!force && isExam && unanswered > 0 && !confirmed) {
      Alert.alert(
        "Submit with unanswered questions?",
        `${unanswered} question${unanswered === 1 ? " is" : "s are"} still unanswered. They will count as incorrect.`,
        [
          { text: "Review answers", style: "cancel" },
          { text: "Submit exam", style: "destructive", onPress: () => submitQuiz(false, true) }
        ]
      );
      return;
    }
    if (!force && !isExam && Object.keys(answers).length !== total) {
      setQuizNotice("Please answer every question before checking your result.");
      return;
    }
    const correct = score();
    const today = localDateKey();
    const isDaily = !selected && !isExam && !isMistakePractice;
    const title = isExam ? "Full course exam" : isMistakePractice ? "Mistake review" : selected ? selected.title : "Daily practice";
    const lessonBreakdown = isExam ? lessons.map(lesson => {
      const lessonQuestions = quiz.map((question, index) => ({ question, index })).filter(item => item.question.lessonId === lesson.id);
      const lessonCorrect = lessonQuestions.filter(item => answers[item.index] === item.question.answer).length;
      return { lessonId: lesson.id, correct: lessonCorrect, total: lessonQuestions.length };
    }) : [];
    const attempt = { title, lessonId: selected ? selected.id : null, date: today, correct, total, percent: Math.round((correct / total) * 100), lessonBreakdown };
    setStats(old => ({
      ...old,
      quizzesTaken: old.quizzesTaken + 1,
      questionsAnsweredCorrectly: old.questionsAnsweredCorrectly + correct,
      dailySessions: old.dailySessions + (isDaily ? 1 : 0),
      lastPracticeDate: isDaily ? today : old.lastPracticeDate,
      dailyPracticeDates: isDaily ? [...new Set([...(old.dailyPracticeDates || []), today])].slice(-90) : (old.dailyPracticeDates || []),
      quizHistory: [attempt, ...(old.quizHistory || [])].slice(0, 20),
      wrongAnswers: [...quiz.map((question, index) => ({ question: question.q, options: question.options, answer: question.answer, selectedAnswer: answers[index] === undefined ? "Not answered" : question.options[answers[index]], correctAnswer: question.options[question.answer], explanation: question.why, lessonTitle: question.lessonTitle || (selected ? selected.title : title), lessonId: question.lessonId || (selected ? selected.id : null), date: today })).filter((item, index) => answers[index] !== quiz[index].answer), ...(isMistakePractice ? (old.wrongAnswers || []).filter(item => !quiz.some((question, index) => question.q === item.question && answers[index] === question.answer)) : (old.wrongAnswers || []))].slice(0, 50)
    }));
    if (isDaily) setDailyDone(true);
    setQuizRecorded(true);
    setQuizNotice(force ? "Time is up. Your exam has been submitted." : "");
    setShowResult(true);
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
  const weakestLessons = lessons.map(lesson => {
    const attempts = (stats.quizHistory || []).flatMap(item => item.lessonId === lesson.id ? [{ total: item.total, correct: item.correct }] : (item.lessonBreakdown || []).filter(part => part.lessonId === lesson.id));
    const total = attempts.reduce((sum, item) => sum + item.total, 0);
    const correct = attempts.reduce((sum, item) => sum + item.correct, 0);
    return { ...lesson, total, percent: total ? Math.round((correct / total) * 100) : 0 };
  }).filter(item => item.total > 0).sort((a, b) => a.percent - b.percent || b.total - a.total).slice(0, 3);

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
      {completed.length === lessons.length ? <><Text style={styles.cardSub}>You have completed every lesson. Revisit any topic to refresh your knowledge.</Text>{lessons.slice(0, 2).map(renderLessonCard)}</> : lessons.filter(x => !completed.includes(x.id)).slice(0, 2).map(renderLessonCard)}
      <View style={styles.dailyCard}><View style={styles.dailyIcon}><Text style={{ fontSize: 22 }}>✦</Text></View><View style={{ flex: 1 }}><Text style={styles.dailyTitle}>Daily practice</Text><Text style={styles.cardSub}>{dailyQuestions.length} quick questions to sharpen your English</Text></View><Action title="Start" onPress={() => startQuiz(null)} /></View>
      <View style={styles.tipCard}><Text style={styles.tipLabel}>TODAY'S TIP</Text><Text style={styles.tipText}>“An” is used before a vowel sound, not simply a vowel letter.</Text><Text style={styles.tipUrdu}>مثال: an hour، لیکن a university۔</Text></View>
    </ScrollView>;
  }

  function Learn() {
    return <ScrollView contentContainerStyle={styles.content}>
      <Header eyebrow="THE GRAMMAR LIBRARY" title="Explore lessons" subtitle="Build your foundation, step by step." />
      <TextInput accessibilityLabel="Search grammar lessons" value={lessonSearch} onChangeText={setLessonSearch} placeholder="Search lessons, rules or examples..." placeholderTextColor="#8B93A5" returnKeyType="search" autoCapitalize="none" style={styles.lessonSearch} />
      <View style={styles.filterRow}>{["All", "Beginner", "Intermediate"].map(x => <Pill key={x} active={filter === x} onPress={() => setFilter(x)}>{x}</Pill>)}</View>
      <Text style={styles.listCount}>{filteredLessons.length} LESSONS FOUND · {completed.length} COMPLETED</Text>
      {filteredLessons.length ? filteredLessons.map(item => <View key={item.id}>{renderLessonCard(item, lessons.indexOf(item))}{completed.includes(item.id) ? <Text style={styles.doneMark}>✓ Completed</Text> : null}</View>) : <Text style={styles.emptyText}>No lessons match “{lessonSearch}”. Try another topic or choose a different level.</Text>}
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
    const timerText = String(Math.floor(examRemaining / 60)).padStart(2, "0") + ":" + String(examRemaining % 60).padStart(2, "0");
    return <ScrollView contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => {
        if (isExam) {
          Alert.alert("Leave the exam?", "Your answers are saved. You can resume this timed exam if you reopen the app before time expires.", [
            { text: "Continue exam", style: "cancel" },
            { text: "End exam", style: "destructive", onPress: () => { setExamDeadline(null); setExamExpired(false); setIsExam(false); setQuiz(null); setAnswers({}); setTab("Practice"); } }
          ]);
        } else {
          setExamDeadline(null);
          setExamExpired(false);
          setTab(selected ? "Lesson" : isMistakePractice ? "Practice" : "Home");
        }
      }}><Text style={styles.back}>‹  BACK</Text></TouchableOpacity>
      <Header eyebrow={isExam ? "TIMED ASSESSMENT" : isMistakePractice ? "PERSONALISED REVISION" : "QUICK KNOWLEDGE CHECK"} title={isExam ? "Full course exam" : isMistakePractice ? "Review missed questions" : selected ? selected.title + " quiz" : "Daily practice"} subtitle={isExam ? "Test your knowledge across all 25 lessons." : isMistakePractice ? "Try these questions again and strengthen your weak topics." : "Choose the best answer for each question."} />
      {isExam ? <View style={styles.examTimer}><Text style={styles.examTimerLabel}>TIME REMAINING</Text><Text style={styles.examTimerValue}>{timerText}</Text><Text style={styles.examTimerHint}>{total} questions · 30 minutes · unanswered questions count as incorrect</Text></View> : null}
      {!showResult ? <View style={styles.quizProgress}><View style={styles.quizProgressTop}><Text style={styles.panelLabel}>YOUR PROGRESS</Text><Text style={styles.cardSub}>{Object.keys(answers).length} OF {total} ANSWERED</Text></View><View style={styles.progressTrack}><View style={[styles.progressFill, { width: (total ? Math.round((Object.keys(answers).length / total) * 100) : 0) + "%" }]} /></View></View> : null}
      {quiz.map((q, i) => <View key={i} style={styles.questionCard}>{isExam && q.lessonTitle ? <Text style={styles.questionCount}>{q.lessonTitle.toUpperCase()}</Text> : null}<View style={styles.questionMetaRow}><Text style={styles.questionCount}>QUESTION {i + 1} OF {total}</Text><Text style={[styles.questionStatus, answers[i] !== undefined ? styles.questionStatusAnswered : styles.questionStatusPending]}>{answers[i] !== undefined ? "ANSWERED" : "NOT ANSWERED"}</Text></View><Text style={styles.questionText}>{q.q}</Text>{q.options.map((option, j) => <TouchableOpacity key={j} onPress={() => !showResult && setAnswers(old => ({ ...old, [i]: j }))} style={[styles.option, answers[i] === j && styles.optionSelected, showResult && j === q.answer && styles.optionCorrect, showResult && answers[i] === j && j !== q.answer && styles.optionWrong]}><Text style={[styles.optionText, answers[i] === j && styles.optionTextSelected]}>{String.fromCharCode(65 + j)}.  {option}</Text></TouchableOpacity>)}{showResult ? <Text style={styles.explanation}>{answers[i] === q.answer ? "Correct! " : "Not quite. "}{q.why}</Text> : null}</View>)}
      {quizNotice ? <Text style={styles.quizNotice}>{quizNotice}</Text> : null}
      {!showResult ? <Action title={isExam ? "Submit exam" : "Check my answers"} onPress={() => submitQuiz(false)} /> : <View style={styles.resultCard}><Text style={styles.resultScore}>{score()} / {total}</Text><Text style={styles.resultText}>You got {score()} correct answers.</Text>{isExam ? <>
        <View style={styles.examGradeCard}><Text style={styles.examGradeLabel}>YOUR FINAL GRADE</Text><Text style={styles.examGradeLetter}>{examGrade.letter}</Text><Text style={styles.examGradePercent}>{examGrade.percent}% · {examGrade.label}</Text><Text style={styles.examGradeNote}>{examGrade.passed ? "You passed the full course assessment." : "You need 60% to pass. Review the topics below and try again."}</Text></View>
        <Text style={styles.breakdownHeading}>PER-LESSON PERFORMANCE</Text>
        {examBreakdown.map(item => <View key={item.lessonId} style={styles.breakdownRow}><View style={styles.breakdownTop}><Text style={styles.breakdownTitle}>{item.title}</Text><Text style={styles.breakdownScore}>{item.correct}/{item.total} · {item.percent}%</Text></View><View style={styles.breakdownTrack}><View style={[styles.breakdownFill, { width: item.percent + "%" }]} /></View></View>)}
        {examGrade.passed ? <View style={styles.certificate}><Text style={styles.certificateKicker}>WREN & MARTIN GRAMMAR MASTER</Text><Text style={styles.certificateTitle}>Certificate of Achievement</Text><Text style={styles.certificateBody}>This certificate is presented to</Text><TextInput accessibilityLabel="Certificate learner name" value={certificateName} onChangeText={value => { setCertificateName(value); setCertificateMessage(""); }} placeholder="Enter learner's full name" placeholderTextColor="#9AA2B2" maxLength={70} style={styles.certificateNameInput} autoCapitalize="words" returnKeyType="done" /><Text style={styles.certificateBody}>for successfully completing the full-course grammar assessment.</Text><View style={styles.certificateRule} /><Text style={styles.certificateGrade}>GRADE {examGrade.letter} · {examGrade.percent}%</Text><Text style={styles.certificateDate}>{localDateKey()}</Text><Text style={styles.certificateId}>CERTIFICATE ID · {examCertificateId}</Text><Action title={certificateBusy ? "Preparing PDF..." : "Download / share PDF certificate"} onPress={createAndShareCertificate} /><Text style={styles.certificateHint}>On Android and iPhone, use the share sheet to save the PDF to your files or send it.</Text>{certificateMessage ? <Text accessibilityLiveRegion="polite" style={styles.certificateMessage}>{certificateMessage}</Text> : null}</View> : null}
      </> : null}<Action title="Try again" secondary onPress={() => { setAnswers({}); setShowResult(false); setQuizRecorded(false); setQuizNotice(""); if (isExam) { setExamExpired(false); setExamCertificateId(createCertificateId()); setCertificateMessage(""); setExamRemaining(30 * 60); setExamDeadline(Date.now() + 30 * 60 * 1000); } }} /><Action title="Done" onPress={() => { setExamDeadline(null); setExamExpired(false); if (isExam) { setIsExam(false); setQuiz(null); setAnswers({}); setTab("Practice"); } else if (selected && score() === total) finishLesson(); else setTab(isMistakePractice ? "Practice" : "Home"); }} /></View>}
    </ScrollView>;
  }

  const reviewableMistakes = (stats.wrongAnswers || []).filter(item => Array.isArray(item.options) && Number.isInteger(item.answer) && item.answer >= 0 && item.answer < item.options.length);

  function Practice() {
    return <ScrollView contentContainerStyle={styles.content}>
      <Header eyebrow="BUILD A DAILY HABIT" title="Practice makes progress" subtitle="Short sessions. Stronger grammar. Better confidence." />
      <View style={styles.practiceHero}><Text style={styles.practiceNumber}>{String(dailyQuestions.length).padStart(2, "0")}</Text><Text style={styles.practiceLabel}>QUESTIONS IN THE PRACTICE BANK</Text><Text style={styles.practiceDescription}>A quick daily challenge covering grammar essentials.</Text><Action title={dailyDone ? "Practice again" : "Start daily practice"} onPress={() => startQuiz(null)} /></View>
      {reviewableMistakes.length ? <View style={styles.reviewCard}><Text style={styles.reviewEyebrow}>PERSONALISED REVISION</Text><Text style={styles.examTitle}>Review missed questions</Text><Text style={styles.examDescription}>{reviewableMistakes.length} saved question{reviewableMistakes.length === 1 ? "" : "s"} to help strengthen your weaker topics. Start with up to 10.</Text><Action title="Practice my mistakes" onPress={startMistakePractice} /></View> : null}
      <View style={styles.examCard}><Text style={styles.examEyebrow}>FINAL ASSESSMENT</Text><Text style={styles.examTitle}>Full course exam</Text><Text style={styles.examDescription}>One question set from every lesson. Check your overall grammar knowledge in a timed challenge.</Text><View style={styles.examFacts}><View><Text style={styles.examFactNumber}>{lessons.reduce((sum, lesson) => sum + lesson.quiz.length, 0)}</Text><Text style={styles.examFactLabel}>QUESTIONS</Text></View><View><Text style={styles.examFactNumber}>30</Text><Text style={styles.examFactLabel}>MINUTES</Text></View><View><Text style={styles.examFactNumber}>{lessons.length}</Text><Text style={styles.examFactLabel}>LESSONS</Text></View></View><Action title="Start full course exam" onPress={startExam} /></View>
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
      <View style={styles.progressCard}><Text style={styles.panelLabel}>TOPICS TO REVISIT</Text>{weakestLessons.length ? weakestLessons.map(item => <TouchableOpacity key={item.id} style={styles.weakRow} onPress={() => openLesson(item)}><View style={{ flex: 1 }}><Text style={styles.cardTitle}>{item.title}</Text><Text style={styles.cardSub}>{item.total} questions answered · tap to review lesson</Text><View style={styles.weakTrack}><View style={[styles.weakFill, { width: item.percent + "%" }]} /></View></View><Text style={styles.weakPercent}>{item.percent}%</Text></TouchableOpacity>) : <Text style={styles.emptyText}>Complete a lesson quiz to discover which grammar topics need more practice.</Text>}</View>
      <View style={styles.progressCard}><Text style={styles.panelLabel}>REVIEW YOUR MISTAKES</Text>{(stats.wrongAnswers || []).length ? stats.wrongAnswers.slice(0, 10).map((item, index) => <TouchableOpacity key={item.date + item.question + index} disabled={!item.lessonId} onPress={() => { const lesson = lessons.find(entry => entry.id === item.lessonId); if (lesson) openLesson(lesson); }} style={styles.mistakeRow} accessibilityRole={item.lessonId ? "button" : undefined} accessibilityLabel={item.lessonId ? `Review lesson: ${item.lessonTitle}` : undefined}><Text style={styles.mistakeQuestion}>{item.question}</Text><Text style={styles.mistakeWrong}>Your answer: {item.selectedAnswer || "No answer"}</Text><Text style={styles.mistakeCorrect}>Correct answer: {item.correctAnswer}</Text>{item.explanation ? <Text style={styles.cardSub}>{item.explanation}</Text> : null}<Text style={styles.mistakeMeta}>{item.lessonTitle} · {item.date}{item.lessonId ? " · TAP TO REVIEW LESSON ›" : ""}</Text></TouchableOpacity>) : <Text style={styles.emptyText}>No mistakes recorded yet. Incorrect answers from completed quizzes will appear here.</Text>}</View>
      <View style={styles.progressCard}><Text style={styles.panelLabel}>COURSE COMPLETION</Text><Text style={styles.progressBig}>{progress}%</Text><View style={styles.progressTrack}><View style={[styles.progressFill, { width: progress + "%" }]} /></View><Text style={styles.cardSub}>{completed.length} of {lessons.length} lessons completed</Text></View>
      <Text style={styles.sectionTitle}>Completed lessons</Text>
      {completed.length ? lessons.filter(x => completed.includes(x.id)).map(x => <View key={x.id} style={styles.completedRow}><Text style={styles.completedCheck}>✓</Text><Text style={styles.cardTitle}>{x.title}</Text></View>) : <Text style={styles.emptyText}>Your completed lessons will appear here. Start with Parts of Speech!</Text>}
    </ScrollView>;
  }

  const screens = { Home: <Home />, Learn: <Learn />, Lesson: <Lesson />, Quiz: <Quiz />, Practice: <Practice />, Progress: <Progress /> };
  const nav = [{ id: "Home", icon: "⌂", label: "Home" }, { id: "Learn", icon: "▤", label: "Learn" }, { id: "Practice", icon: "✦", label: "Practice" }, { id: "Progress", icon: "◔", label: "Progress" }];
  return <SafeAreaView style={styles.safe}><StatusBar barStyle="light-content" backgroundColor={navy} /><View style={styles.topbar}><View><Text style={styles.brandSmall}>WREN & MARTIN</Text><Text style={styles.brand}>Grammar Master</Text></View><View style={styles.avatar}><Text style={styles.avatarText}>G</Text></View></View><View style={styles.screen}>{screens[tab] || <Home />}</View>{isExam ? null : <View style={styles.bottomNav}>{nav.map(n => <TouchableOpacity key={n.id} onPress={() => setTab(n.id)} style={styles.navItem}><Text style={[styles.navIcon, tab === n.id && styles.navActive]}>{n.icon}</Text><Text style={[styles.navLabel, tab === n.id && styles.navActive]}>{n.label}</Text></TouchableOpacity>)}</View>}</SafeAreaView>;
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
  lessonSearch: { backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E3E7EF", borderRadius: 14, paddingHorizontal: 15, paddingVertical: 12, minHeight: 48, color: ink, fontSize: 13, marginBottom: 13 },
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
  questionMetaRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  questionStatus: { fontSize: 9, fontWeight: "900", letterSpacing: 0.8 },
  questionStatusAnswered: { color: "#23866D" },
  questionStatusPending: { color: "#A34C32" },
  quizProgress: { backgroundColor: "#FFFFFF", borderRadius: 14, padding: 14, marginBottom: 14, borderWidth: 1, borderColor: "#E9ECF2" },
  quizProgressTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
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
  reviewCard: { backgroundColor: "#FFF7E8", borderRadius: 20, padding: 20, marginTop: 14, borderWidth: 1, borderColor: "#F0DCA9" },
  reviewEyebrow: { color: "#A5792F", fontSize: 9, fontWeight: "900", letterSpacing: 1.5 },
  examCard: { backgroundColor: navy, borderRadius: 20, padding: 20, marginTop: 14 },
  examEyebrow: { color: gold, fontSize: 9, fontWeight: "900", letterSpacing: 1.5 },
  examTitle: { color: "#FFFFFF", fontSize: 21, fontWeight: "900", marginTop: 8 },
  examDescription: { color: "#CFD6E4", fontSize: 11, lineHeight: 18, marginTop: 7 },
  examFacts: { flexDirection: "row", justifyContent: "space-between", marginVertical: 18 },
  examFactNumber: { color: gold, fontSize: 22, fontWeight: "900" },
  examFactLabel: { color: "#CFD6E4", fontSize: 8, fontWeight: "800", letterSpacing: 1, marginTop: 3 },
  examTimer: { backgroundColor: "#FFF8E9", borderRadius: 16, padding: 16, marginBottom: 14, alignItems: "center", borderWidth: 1, borderColor: "#F0DCA9" },
  examTimerLabel: { color: "#8D6A2E", fontSize: 9, fontWeight: "900", letterSpacing: 1.5 },
  examTimerValue: { color: ink, fontSize: 30, fontWeight: "900", marginTop: 3 },
  examTimerHint: { color: muted, fontSize: 10, textAlign: "center", marginTop: 4 },
  examGradeCard: { backgroundColor: "#F2F5FA", borderRadius: 18, padding: 17, marginTop: 16, alignItems: "center" },
  examGradeLabel: { color: muted, fontSize: 9, fontWeight: "900", letterSpacing: 1.5 },
  examGradeLetter: { color: navy, fontSize: 54, fontWeight: "900", lineHeight: 62, marginTop: 5 },
  examGradePercent: { color: green, fontSize: 14, fontWeight: "900" },
  examGradeNote: { color: muted, fontSize: 11, textAlign: "center", marginTop: 8, lineHeight: 17 },
  breakdownHeading: { color: ink, fontSize: 12, fontWeight: "900", letterSpacing: 1, marginTop: 22, marginBottom: 7 },
  breakdownRow: { paddingVertical: 9, borderBottomWidth: 1, borderBottomColor: "#EEF0F4" },
  breakdownTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  breakdownTitle: { color: ink, fontSize: 11, fontWeight: "800", flex: 1, marginRight: 8 },
  breakdownScore: { color: muted, fontSize: 10, fontWeight: "800" },
  breakdownTrack: { height: 5, backgroundColor: "#E9ECF2", borderRadius: 5, marginTop: 7, overflow: "hidden" },
  breakdownFill: { height: 5, backgroundColor: green, borderRadius: 5 },
  certificate: { backgroundColor: "#FFFCF4", borderWidth: 2, borderColor: "#C9A85D", borderRadius: 8, padding: 20, marginTop: 22, alignItems: "center" },
  certificateKicker: { color: "#9A7836", fontSize: 8, fontWeight: "900", letterSpacing: 1.5, textAlign: "center" },
  certificateTitle: { color: navy, fontSize: 22, fontWeight: "900", textAlign: "center", marginTop: 17 },
  certificateBody: { color: muted, fontSize: 10, textAlign: "center", lineHeight: 16, marginTop: 13 },
  certificateName: { color: "#9A7836", fontSize: 18, fontWeight: "900", marginTop: 8, textAlign: "center" },
  certificateNameInput: { color: "#9A7836", fontSize: 18, fontWeight: "900", marginTop: 8, marginBottom: 5, textAlign: "center", borderBottomWidth: 1, borderBottomColor: "#C9A85D", minWidth: "85%", paddingVertical: 8 },
  certificateHint: { color: muted, fontSize: 9, lineHeight: 14, textAlign: "center", marginTop: 9 },
  certificateMessage: { color: green, fontSize: 10, fontWeight: "700", lineHeight: 15, textAlign: "center", marginTop: 8 },
  certificateRule: { height: 1, backgroundColor: "#C9A85D", width: "75%", marginTop: 18 },
  certificateGrade: { color: navy, fontSize: 12, fontWeight: "900", marginTop: 13 },
  certificateDate: { color: muted, fontSize: 10, marginTop: 7 },
  certificateId: { color: "#9A7836", fontSize: 8, fontWeight: "800", marginTop: 12, letterSpacing: 0.5 },
  weakRow: { flexDirection: "row", alignItems: "center", paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#EEF0F4" },
  weakTrack: { height: 5, backgroundColor: "#E9ECF2", borderRadius: 5, marginTop: 8, overflow: "hidden" },
  weakFill: { height: 5, backgroundColor: gold, borderRadius: 5 },
  weakPercent: { color: ink, fontSize: 17, fontWeight: "900", marginLeft: 12 },
  mistakeRow: { paddingVertical: 13, borderBottomWidth: 1, borderBottomColor: "#EEF0F4" },
  mistakeQuestion: { color: ink, fontSize: 13, fontWeight: "800", lineHeight: 19 },
  mistakeWrong: { color: "#B45B5B", fontSize: 11, marginTop: 7 },
  mistakeCorrect: { color: green, fontSize: 11, fontWeight: "800", marginTop: 4 },
  mistakeMeta: { color: muted, fontSize: 9, marginTop: 7, fontWeight: "700" },
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