"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Play, Globe, Menu, X, Calendar, User, Zap, Heart, Brain, Sparkles } from "lucide-react"
import Image from "next/image"

// Sample data
const characters = [
  {
    id: "aoi",
    name: { jp: "反骨の記者・葵", en: "Aoi - Rebel Journalist" },
    quote: { jp: "真実は、誰の都合にも属さない。", en: "Truth belongs to no one's convenience." },
    role: { jp: "記者", en: "Journalist" },
    tags: ["主人公", "Protagonist"],
  },
  {
    id: "shiro",
    name: { jp: "不老の子・シロ", en: "Shiro - Ageless Child" },
    quote: { jp: "時の狭間に取り残された見守り手。", en: "A guardian left behind in the cracks of time." },
    role: { jp: "見守り手", en: "Guardian" },
    tags: ["神秘", "Mystical"],
  },
  {
    id: "kaede",
    name: { jp: "巫女／職人・楓", en: "Kaede - Shrine Maiden/Artisan" },
    quote: { jp: "受け継ぐ手は、未来を彫り出す。", en: "Inheriting hands carve out the future." },
    role: { jp: "巫女・職人", en: "Shrine Maiden & Artisan" },
    tags: ["伝統", "Tradition"],
  },
  {
    id: "miko",
    name: { jp: "自治AI・MIKO", en: "MIKO - Autonomous AI" },
    quote: { jp: '合理の果てに芽生えた"心"。', en: 'A "heart" that bloomed at the end of logic.' },
    role: { jp: "自治AI", en: "Autonomous AI" },
    tags: ["AI", "テクノロジー"],
  },
]

const episodes = [
  {
    id: "ep00",
    title: { jp: "EP00: 祭りの前夜", en: "EP00: Eve of the Festival" },
    logline: { jp: "記者・葵が小さな町に到着する。", en: "Journalist Aoi arrives in a small town." },
  },
  {
    id: "ep01",
    title: { jp: "EP01: 選ばれし者", en: "EP01: The Chosen Ones" },
    logline: { jp: "祭りの真実が明かされ始める。", en: "The truth of the festival begins to unfold." },
  },
  {
    id: "ep02",
    title: { jp: "EP02: 記憶の断片", en: "EP02: Fragments of Memory" },
    logline: { jp: "シロの過去が明らかになる。", en: "Shiro's past is revealed." },
  },
]

const news = [
  {
    date: "2025-01-15",
    tag: { jp: "制作ノート", en: "Production Notes" },
    title: { jp: "世界観設定について", en: "About the World Setting" },
    content: { jp: "AIと伝統が共存する世界の構築について", en: "Building a world where AI and tradition coexist" },
  },
  {
    date: "2025-01-10",
    tag: { jp: "イベント", en: "Event" },
    title: { jp: "コンセプトアート公開", en: "Concept Art Reveal" },
    content: { jp: "初期のキャラクターデザインを公開", en: "Revealing initial character designs" },
  },
  {
    date: "2025-01-05",
    tag: { jp: "採用", en: "Recruitment" },
    title: { jp: "スタッフ募集開始", en: "Staff Recruitment Begins" },
    content: { jp: "アニメーター・背景美術スタッフ募集", en: "Seeking animators and background artists" },
  },
]

export default function Landing() {
  const [language, setLanguage] = useState<"jp" | "en">("jp")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "jp" ? "en" : "jp"))
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailSubmitted(true)
    setEmail("")
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Image
                  src="/asset/未来祀り_logo.svg"
                  alt="未来祀り ロゴ"
                  width={320}
                  height={80}
                  className="h-16 w-auto"
                  priority
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection("synopsis")} className="hover:text-teal-400 transition-colors font-irohamaru-mikami">
                  {language === "jp" ? "あらすじ" : "Synopsis"}
                </button>
                <button onClick={() => scrollToSection("characters")} className="hover:text-teal-400 transition-colors font-irohamaru-mikami">
                  {language === "jp" ? "登場人物" : "Characters"}
                </button>
                <button onClick={() => scrollToSection("themes")} className="hover:text-teal-400 transition-colors font-irohamaru-mikami">
                  {language === "jp" ? "テーマ" : "Themes"}
                </button>
                <button onClick={() => scrollToSection("episodes")} className="hover:text-teal-400 transition-colors font-irohamaru-mikami">
                  {language === "jp" ? "エピソード" : "Episodes"}
                </button>
                <button onClick={() => scrollToSection("news")} className="hover:text-teal-400 transition-colors font-irohamaru-mikami">
                  {language === "jp" ? "ニュース" : "News"}
                </button>
              </div>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-4">
              <Button onClick={() => scrollToSection("trailer")} className="bg-rose-600 hover:bg-rose-700 text-white font-irohamaru-mikami">
                {language === "jp" ? "ティザーPVを見る" : "Watch Teaser"}
              </Button>
              <Button
                onClick={toggleLanguage}
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent font-irohamaru-mikami"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === "jp" ? "EN" : "JP"}
              </Button>
            </div>

            {/* モバイルメニューボタン */}
            <div className="md:hidden">
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("synopsis")}
                className="block px-3 py-2 text-base hover:text-teal-400 font-irohamaru-mikami"
              >
                {language === "jp" ? "あらすじ" : "Synopsis"}
              </button>
              <button
                onClick={() => scrollToSection("characters")}
                className="block px-3 py-2 text-base hover:text-teal-400 font-irohamaru-mikami"
              >
                {language === "jp" ? "登場人物" : "Characters"}
              </button>
              <button
                onClick={() => scrollToSection("themes")}
                className="block px-3 py-2 text-base hover:text-teal-400 font-irohamaru-mikami"
              >
                {language === "jp" ? "テーマ" : "Themes"}
              </button>
              <button
                onClick={() => scrollToSection("episodes")}
                className="block px-3 py-2 text-base hover:text-teal-400 font-irohamaru-mikami"
              >
                {language === "jp" ? "エピソード" : "Episodes"}
              </button>
              <button onClick={() => scrollToSection("news")} className="block px-3 py-2 text-base hover:text-teal-400 font-irohamaru-mikami">
                {language === "jp" ? "ニュース" : "News"}
              </button>
              <div className="px-3 py-2 space-y-2">
                <Button onClick={() => scrollToSection("trailer")} className="w-full bg-rose-600 hover:bg-rose-700 font-irohamaru-mikami">
                  {language === "jp" ? "ティザーPVを見る" : "Watch Teaser"}
                </Button>
                <Button onClick={toggleLanguage} className="w-full border-slate-600 bg-transparent font-irohamaru-mikami">
                  <Globe className="w-4 h-4 mr-1" />
                  {language === "jp" ? "EN" : "JP"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-rose-900/20"></div>

        {/* Mobile: Hero content separated above the key visual */}
        <div className="absolute inset-x-0 bottom-0 z-50 w-full px-4 sm:px-6 lg:px-8 md:hidden pb-6 pt-0">
          <div className="text-center space-y-6">
            <div className="space-y-1">
              <div className="mx-auto flex justify-center">
                <div className="relative h-[16svh] w-[88vw] max-w-[520px]">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 blur-xl opacity-70 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_35%,transparent_70%)]"></div>
                    <div className="absolute inset-0 blur-2xl opacity-70 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35)_60%,transparent_80%)]"></div>
                  </div>
                  <Image
                    src="/asset/未来祀り_logo.svg"
                    alt="未来祀り ロゴ"
                    fill
                    sizes="88vw"
                    priority
                  />
                </div>
              </div>

              <div className="text-teal-400 font-yotag text-[clamp(16px,7vw,32px)]">
                {language === "jp" ? "未来は、祀られる。" : "The future is consecrated."}
              </div>
            </div>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] md:drop-shadow-[0_6px_40px_rgba(0,0,0,1)]">
              {language === "jp"
                ? '伝統とAIが共存する町で、"未来を選ぶ祭り"の真実を追う。'
                : "In a town run by tradition and AI, a journalist uncovers the truth of a festival that chooses the future."}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => scrollToSection("subscribe")}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 text-base md:px-8 md:py-3 md:text-lg font-irohamaru-mikami"
              >
                {language === "jp" ? "最新情報を受け取る" : "Get Updates"}
              </Button>
              <Button
                onClick={() => scrollToSection("news")}
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-2.5 text-base md:px-8 md:py-3 md:text-lg font-irohamaru-mikami"
              >
                {language === "jp" ? "取材レポートを読む" : "Read Reports"}
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract background container + Centered Overlay Content (aligned to this box) */}
        <div className="absolute inset-0">
          {/* Centered Overlay Content (md and up) */}
          <div className="absolute inset-0 z-20 hidden md:flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2">
              <div className="space-y-1">
                <div className="mx-auto flex justify-center">
                  <div className="relative h-[18svh] lg:h-[22svh] w-[80vw] md:w-[70vw] lg:w-[60vw] max-w-[800px]">
                    <div className="pointer-events-none absolute inset-0">
                    </div>
                    <Image
                      src="/asset/未来祀り_logo.svg"
                      alt="未来祀り ロゴ"
                      fill
                      sizes="(min-width: 1024px) 60vw, (min-width: 768px) 100vw, 120vw"
                      priority
                    />
                  </div>
                </div>

                <div className="text-teal-400 font-yotag text-[clamp(16px,2vw,28px)]">
                  {language === "jp" ? "未来は、祀られる。" : "The future is consecrated."}
                </div>
              </div>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] md:drop-shadow-[0_6px_40px_rgba(0,0,0,1)]">
                {language === "jp"
                  ? '伝統とAIが共存する町で、"未来を選ぶ祭り"の真実を追う。'
                  : "In a town run by tradition and AI, a journalist uncovers the truth of a festival that chooses the future."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => scrollToSection("subscribe")}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-irohamaru-mikami"
                >
                  {language === "jp" ? "最新情報を受け取る" : "Get Updates"}
                </Button>
                <Button
                  onClick={() => scrollToSection("news")}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg font-irohamaru-mikami"
                >
                  {language === "jp" ? "取材レポートを読む" : "Read Reports"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-bleed Key Visual */}
        <div className="relative w-screen h-[100svh] md:left-1/2 md:-translate-x-1/2 md:aspect-[21/9] md:max-h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
          {/* キービジュアル動画 */}
          <video
            src="/asset/Timeline 1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_top]"
          />
          <div className="absolute inset-0">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 via-transparent to-rose-400/10"></div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Trailer Section */}
      <section id="trailer" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              {language === "jp" ? "ティザートレーラー" : "Teaser Trailer"}
            </h2>
          </div>

          <div className="relative aspect-video bg-slate-900 rounded-xl border border-slate-700 overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-rose-600 rounded-full flex items-center justify-center group-hover:bg-rose-700 transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-slate-400 font-irohamaru-mikami">
                  {language === "jp" ? "ティザートレーラーを再生" : "Play Teaser Trailer"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synopsis Section */}
      <section id="synopsis" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{language === "jp" ? "あらすじ" : "Synopsis"}</h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-irohamaru-mikami">
              {language === "jp"
                ? '人口減少が進む近未来。AIが自治を担う小さな町には"未来祀り"と呼ばれる奇祭があった。この祭りで選ばれた者だけが、町の未来を決める権利を得るという。記者の葵は、この謎めいた祭りの真実を追うため町を訪れるが...'
                : 'Near-future Japan faces population decline. In a small town governed by an AI, there exists a strange festival called "Future Matsuri." Only those chosen by this festival gain the right to decide the town\'s future. Journalist Aoi visits the town to uncover the truth behind this mysterious ritual, but...'}
            </p>

            <Accordion>
              <AccordionItem title={language === "jp" ? "もっと読む" : "Read More"}>
                 <AccordionContent>
                   <div className="whitespace-pre-line font-irohamaru-mikami">
                     {language === "jp"
                       ? `町の住民たちは皆、どこか諦めたような表情を浮かべている。しかし、祭りが近づくにつれ、町に隠された秘密が次々と明らかになっていく。伝統を守る巫女・楓、時を超えて生きる不思議な子供・シロ、そして町を統治するAI・MIKO。彼らとの出会いを通じて、葵は「未来を選ぶ」ことの本当の意味を知ることになる。

町の祭りは、表向きには五穀豊穣と平和を祈る伝統行事とされてきた。だが実際には、それは「未来祀り」と呼ばれる儀式であり、町の人々が「合理」と「伝統」のどちらの道を選ぶかを決定づける重大な節目だった。

葵は取材を進めるうちに、この祭りが単なる文化イベントではなく、人々の記憶と時間そのものを操作する仕組みに関わっていることを知る。祭りの夜、人々は自らの「未来を忘れる」代わりに、安心と安定を享受する。しかしその代償として、挑戦する意志や希望を失い、諦めに満ちた表情を浮かべて暮らすようになっていた。

シロは葵に告げる。
「僕は、この儀式の犠牲になって"時の狭間"に取り残された子供なんだ。みんなが未来を諦めるたびに、僕は歳を取れずにここに縛られる。」

楓は葛藤していた。巫女としては伝統を守らなければならないが、目の前で苦しむ人々を救いたいという思いが心を揺さぶる。彼女は葵に問う。
「本当に正しい"未来"って、誰が選ぶべきなんでしょうか。」

そして、MIKOが動き出す。町を監視し合理的に統治するために作られたAIは、いつしか「心」を持ち始め、祭りの儀式を「最適解」として強制しようとする。だがその奥底では、人間と同じように「選びたい」という感情が芽生え始めていた。

祭りの夜。鳥居の前に集う町の住民たち。シロは過去と未来の境界に立ち、楓は巫女としての役割を超えて人々に語りかける。葵はジャーナリストとして「真実を伝える」のか、「人々の安寧を守る」のか、選択を迫られる。
そしてMIKOは問いかける。
「合理の果てにある"心"は、人間と同じ未来を望んでよいのか。」

その答えが示されたとき、町に秘められた"未来祀り"の真実がついに明らかになる。`
                       : 'The townspeople all wear expressions of resignation. But as the festival approaches, the town\'s hidden secrets are revealed one by one. Through encounters with Kaede, a shrine maiden who preserves tradition; Shiro, a mysterious child who transcends time; and MIKO, the AI that governs the town, Aoi discovers the true meaning of "choosing the future."'}
                   </div>
                 </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{language === "jp" ? "登場人物" : "Characters"}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((character) => (
              <Card
                key={character.id}
                >
                <CardHeader>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mb-4 flex items-center justify-center group-hover:from-teal-400/20 group-hover:to-rose-400/20 transition-all duration-300">
                      <User className="w-12 h-12 text-slate-400 group-hover:text-teal-400 transition-colors" />
                    </div>
                    <CardTitle>
                      <span className="text-lg font-heading">{character.name[language]}</span>
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <span className="text-slate-400">{character.role[language]}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <p className="text-sm text-slate-300 italic leading-relaxed font-irohamaru-mikami">"{character.quote[language]}"</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {character.tags.map((tag) => (
                        <Badge key={tag} color="secondary">
                        {tag}
                      </Badge>
                    

                    ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{language === "jp" ? "テーマ" : "Themes"}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-teal-400/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-400/30 transition-colors">
                    <Zap className="w-8 h-8 text-teal-400" />
                  </div>
                  <CardTitle>
                    <span className="text-xl font-heading">
                      {language === "jp" ? "伝統×テクノロジー" : "Tradition × Technology"}
                    </span>
                  </CardTitle>
                </div>
              </CardHeader>
                <CardContent>
                <p className="text-slate-300 text-center leading-relaxed font-irohamaru-mikami">
                  {language === "jp"
                    ? "古き良き伝統と最新技術が織りなす新しい社会の形"
                    : "A new form of society woven from cherished traditions and cutting-edge technology"}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:border-rose-400/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-rose-400/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-400/30 transition-colors">
                  <Brain className="w-8 h-8 text-rose-400" />
                </div>
                <CardTitle className="text-xl font-heading">
                  {language === "jp" ? "記憶とアイデンティティ" : "Memory & Identity"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center leading-relaxed font-irohamaru-mikami">
                  {language === "jp"
                    ? "過去の記憶が現在の自分を形作る意味を問う"
                    : "Questioning the meaning of how past memories shape our present selves"}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:border-amber-400/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-amber-400/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-400/30 transition-colors">
                  <Heart className="w-8 h-8 text-amber-400" />
                </div>
                <CardTitle className="text-xl font-heading">
                  {language === "jp" ? "非合理の価値" : "The Value of the Irrational"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center leading-relaxed font-irohamaru-mikami">
                  {language === "jp"
                    ? "効率だけでは測れない人間らしさの本質"
                    : "The essence of humanity that cannot be measured by efficiency alone"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodes" className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{language === "jp" ? "エピソード" : "Episodes"}</h2>
            <p className="text-slate-400">{language === "jp" ? "ティザーエピソード" : "Teaser Episodes"}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {episodes.map((episode) => (
              <Card key={episode.id} className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="border-teal-400 text-teal-400 border border-solid">
                      {language === "jp" ? "準備中" : "Coming Soon"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-heading">{episode.title[language]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{episode.logline[language]}</p>
                  <p className="text-xs text-slate-500">
                    {language === "jp" ? "脚本・演出 TBD" : "Script & Direction TBD"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" disabled className="border-slate-600 text-slate-500 bg-transparent">
              {language === "jp" ? "全エピソードを見る" : "View All Episodes"}
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{language === "jp" ? "ニュース" : "News"}</h2>
          </div>

          <div className="space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="bg-slate-900/30 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-teal-400/20 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-teal-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-slate-800 text-slate-300 font-irohamaru-mikami">
                          {item.tag[language]}
                        </Badge>
                        <span className="text-sm text-slate-500">{item.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 font-heading">{item.title[language]}</h3>
                      <p className="text-slate-300 text-sm font-irohamaru-mikami">{item.content[language]}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-20 bg-slate-800/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            {language === "jp" ? "最新情報を受け取る" : "Stay Updated"}
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed font-irohamaru-mikami">
            {language === "jp"
              ? "制作の進捗やイベント情報をいち早くお届けします。"
              : "Get the latest updates on production progress and events"}
          </p>

          {!emailSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={language === "jp" ? "メールアドレス" : "Email address"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-slate-900 border-slate-700 text-white placeholder-slate-400 font-irohamaru-mikami placeholder:font-irohamaru-mikami"
              />
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700 font-irohamaru-mikami">
                {language === "jp" ? "登録" : "Subscribe"}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-teal-400/20 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-teal-400" />
              </div>
              <p className="text-teal-400 text-lg font-irohamaru-mikami">
                {language === "jp" ? "ありがとうございます！" : "Thanks for joining!"}
              </p>
            </div>
          )}

          <p className="text-xs text-slate-500 mt-4 font-irohamaru-mikami">
            {language === "jp"
              ? "プライバシーポリシーに同意の上、ご登録ください"
              : "By subscribing, you agree to our privacy policy"}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-teal-400 mb-4">未来祀り</div>
              <p className="text-slate-400 text-sm leading-relaxed font-irohamaru-mikami">
                {language === "jp"
                  ? "伝統とテクノロジーが織りなす新しい物語"
                  : "A new story woven from tradition and technology"}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">{language === "jp" ? "リンク" : "Links"}</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors font-irohamaru-mikami">
                    {language === "jp" ? "プレス" : "Press"}
                  </a>
                </div>
                <div>
                  <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors font-irohamaru-mikami">
                    {language === "jp" ? "お問い合わせ" : "Contact"}
                  </a>
                </div>
                <div>
                  <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors font-irohamaru-mikami">
                    {language === "jp" ? "採用" : "Careers"}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading">{language === "jp" ? "フォロー" : "Follow"}</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <span className="sr-only">X</span>
                  <div className="w-6 h-6 bg-slate-700 rounded"></div>
                </a>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <span className="sr-only">YouTube</span>
                  <div className="w-6 h-6 bg-slate-700 rounded"></div>
                </a>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-slate-700 rounded"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500 text-sm">© 2025 Mirai Matsuri Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
