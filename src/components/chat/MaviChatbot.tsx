"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Minus,
  Send,
  ExternalLink,
  MapPin,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { ChatMessage, INITIAL_QUICK_ACTIONS } from "@/lib/maviKnowledge";
import { sendChatMessage } from "@/services/chatService";

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "init-1",
    sender: "mavi",
    text: "Hello! I'm Mavi, the MacVision School Assistant.\n\nHow can I help you today?",
    timestamp: Date.now(),
    quickActions: INITIAL_QUICK_ACTIONS,
  },
];

export default function MaviChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  // Quick Lead Capture State
  const [leadFormData, setLeadFormData] = useState({
    parentName: "",
    phone: "",
    grade: "Grade I",
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMinimized]);

  // Keyboard accessibility: Escape to close chat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Reset unread count when opening
  const handleOpenChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setUnreadCount(0);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || inputValue).trim();
    if (!messageText || isTyping) return;

    const userMsgId = `user-${Date.now()}`;
    const newHistory: ChatMessage[] = [
      ...messages,
      {
        id: userMsgId,
        sender: "user",
        text: messageText,
        timestamp: Date.now(),
      },
    ];

    setMessages(newHistory);
    setInputValue("");
    setIsTyping(true);

    try {
      // Simulate natural thinking delay (500ms - 800ms) for polished conversational rhythm
      const [aiResponse] = await Promise.all([
        sendChatMessage(messageText, newHistory),
        new Promise((resolve) => setTimeout(resolve, 650)),
      ]);

      const maviMsgId = `mavi-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        {
          id: maviMsgId,
          sender: "mavi",
          text: aiResponse.text,
          timestamp: Date.now(),
          quickActions: aiResponse.quickActions,
          links: aiResponse.links,
          showLeadForm: aiResponse.showLeadForm,
        },
      ]);
    } catch (error) {
      console.error("Error communicating with assistant:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `mavi-err-${Date.now()}`,
          sender: "mavi",
          text: "I don't have that information available right now. You can contact the school directly for the most accurate information.",
          timestamp: Date.now(),
          quickActions: ["Contact School", "Admissions", "Location"],
          links: [
            { label: "Contact School", url: "/contact", isPrimary: true },
          ],
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadFormData.parentName || !leadFormData.phone) return;

    setLeadSubmitted(true);
    setMessages((prev) => [
      ...prev,
      {
        id: `mavi-lead-${Date.now()}`,
        sender: "mavi",
        text: `Thank you, ${leadFormData.parentName}! Your admission enquiry for ${leadFormData.grade} has been noted. Our admissions coordinator will reach out to you shortly at ${leadFormData.phone}.`,
        timestamp: Date.now(),
        quickActions: ["Campus & Facilities", "Academics", "Location"],
        links: [
          { label: "Visit Admissions Page", url: "/admissions", isPrimary: true },
          { label: "View on Google Maps", url: "https://maps.app.goo.gl/jU16ATZJsVmuttFx7?g_st=iw", external: true },
        ],
      },
    ]);
  };

  const handleResetConversation = () => {
    setMessages(INITIAL_MESSAGES);
    setLeadSubmitted(false);
    setLeadFormData({ parentName: "", phone: "", grade: "Grade I" });
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. FLOATING CHAT WINDOW (DESKTOP & MOBILE)                                */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            key="mavi-window"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Mavi - MacVision School Assistant"
            className="fixed z-50 flex flex-col bg-white overflow-hidden shadow-2xl transition-all
              /* Mobile: near fullscreen bottom sheet */
              inset-x-0 bottom-0 top-10 rounded-t-2xl border-t border-slate-200
              /* Desktop & Tablet: floating card at bottom-right */
              sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[400px] sm:h-[620px] sm:max-h-[calc(100vh-110px)] sm:rounded-2xl sm:border sm:border-[#102A63]/15"
          >
            {/* Header */}
            <div className="bg-[#102A63] text-white px-4 py-3.5 sm:px-5 sm:py-3.5 flex items-center justify-between shadow-md relative z-10 select-none">
              <div className="flex items-center gap-3">
                {/* Mavi Crest Avatar */}
                <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#123B82] to-[#0A1D45] border-2 border-[#F4C62E] flex items-center justify-center shadow-inner flex-shrink-0">
                  <span className="font-serif font-bold text-sm text-[#F4C62E] tracking-tighter">M</span>
                  {/* Status Indicator Dot */}
                  <span
                    className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#102A63]"
                    title="Online"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-serif font-bold text-base text-white tracking-wide leading-none">
                      Mavi
                    </h2>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#F4C62E]/20 text-[#F4C62E] border border-[#F4C62E]/30">
                      Online
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans tracking-normal mt-0.5">
                    MacVision School Assistant
                  </p>
                </div>
              </div>

              {/* Action Buttons: Reset, Minimize, Close */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetConversation}
                  className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[#F4C62E]"
                  title="Restart Conversation"
                  aria-label="Restart Conversation"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsMinimized(true)}
                  className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[#F4C62E]"
                  title="Minimize"
                  aria-label="Minimize Chat"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    launcherRef.current?.focus();
                  }}
                  className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[#F4C62E]"
                  title="Close"
                  aria-label="Close Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* School Trust Assurance Sub-ribbon */}
            <div className="bg-[#0A1D45]/95 text-slate-300 px-4 py-1 text-[11px] border-b border-white/10 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3 h-3 text-[#F4C62E]" />
                Official MacVision Assistant
              </span>
              <span className="text-[#F4C62E] font-medium text-[10px]">
                CBSE Affiliated • 2026–27
              </span>
            </div>

            {/* Scrollable Conversation Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-4.5 space-y-4 bg-[#F8FAFC]">
              {messages.map((msg) => {
                const isMavi = msg.sender === "mavi";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isMavi ? "items-start" : "items-end"}`}
                  >
                    <div className={`flex gap-2.5 max-w-[88%] ${isMavi ? "flex-row" : "flex-row-reverse"}`}>
                      {/* Avatar for Mavi */}
                      {isMavi && (
                        <div className="w-7 h-7 rounded-full bg-[#102A63] border border-[#F4C62E] text-[#F4C62E] flex items-center justify-center text-xs font-serif font-bold flex-shrink-0 mt-0.5 shadow-xs">
                          M
                        </div>
                      )}

                      {/* Message Bubble */}
                      <div
                        className={`rounded-2xl px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-xs ${
                          isMavi
                            ? "bg-white text-[#101828] border border-slate-200/90 rounded-tl-xs"
                            : "bg-[#102A63] text-white rounded-tr-xs"
                        }`}
                      >
                        <p className="whitespace-pre-line">{msg.text}</p>
                      </div>
                    </div>

                    {/* Interactive Action Links / CTAs */}
                    {isMavi && msg.links && msg.links.length > 0 && (
                      <div className="mt-2 ml-9 flex flex-wrap gap-1.5">
                        {msg.links.map((link, idx) => (
                          <React.Fragment key={idx}>
                            {link.external ? (
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-xs ${
                                  link.isPrimary
                                    ? "bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63]"
                                    : "bg-white hover:bg-slate-50 text-[#102A63] border border-slate-200"
                                }`}
                              >
                                {link.label}
                                {link.url.includes("maps.app") ? (
                                  <MapPin className="w-3 h-3 text-[#102A63]" />
                                ) : link.url.startsWith("tel:") ? (
                                  <Phone className="w-3 h-3 text-[#102A63]" />
                                ) : (
                                  <ExternalLink className="w-3 h-3 text-[#102A63]" />
                                )}
                              </a>
                            ) : (
                              <Link
                                href={link.url}
                                onClick={() => setIsOpen(false)}
                                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-xs ${
                                  link.isPrimary
                                    ? "bg-[#F4C62E] hover:bg-[#D4A31C] text-[#102A63]"
                                    : "bg-white hover:bg-slate-50 text-[#102A63] border border-slate-200"
                                }`}
                              >
                                {link.label}
                                <ArrowUpRight className="w-3 h-3" />
                              </Link>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}

                    {/* In-chat Lead Form (Explicit enquiry flow only) */}
                    {isMavi && msg.showLeadForm && !leadSubmitted && (
                      <div className="mt-2.5 ml-9 w-full max-w-sm bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                        <p className="text-[11px] font-semibold text-[#102A63] mb-2">
                          Quick Admission Callback
                        </p>
                        <form onSubmit={handleLeadSubmit} className="space-y-2">
                          <input
                            type="text"
                            placeholder="Parent / Guardian Name *"
                            required
                            value={leadFormData.parentName}
                            onChange={(e) =>
                              setLeadFormData({ ...leadFormData, parentName: e.target.value })
                            }
                            className="w-full px-2.5 py-1.5 rounded-md border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#102A63]"
                          />
                          <input
                            type="tel"
                            placeholder="Phone Number (10 Digits) *"
                            required
                            value={leadFormData.phone}
                            onChange={(e) =>
                              setLeadFormData({ ...leadFormData, phone: e.target.value })
                            }
                            className="w-full px-2.5 py-1.5 rounded-md border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#102A63]"
                          />
                          <select
                            value={leadFormData.grade}
                            onChange={(e) =>
                              setLeadFormData({ ...leadFormData, grade: e.target.value })
                            }
                            className="w-full px-2.5 py-1.5 rounded-md border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:border-[#102A63]"
                          >
                            <option value="Pre-Nursery / Nursery">Pre-Nursery / Nursery</option>
                            <option value="Kindergarten (KG)">Kindergarten (KG)</option>
                            <option value="Primary (Grades I - V)">Primary (Grades I - V)</option>
                            <option value="Middle (Grades VI - VIII)">Middle (Grades VI - VIII)</option>
                            <option value="Secondary (Grades IX - X)">Secondary (Grades IX - X)</option>
                            <option value="Senior Secondary (Grades XI - XII)">Senior Secondary (XI - XII)</option>
                          </select>
                          <button
                            type="submit"
                            className="w-full py-1.5 rounded-md bg-[#102A63] hover:bg-[#0A1D45] text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F4C62E]" />
                            Request Callback
                          </button>
                        </form>
                      </div>
                    )}

                    {/* Quick Action Chips */}
                    {isMavi && msg.quickActions && msg.quickActions.length > 0 && (
                      <div className="mt-2.5 ml-9 flex flex-wrap gap-1.5">
                        {msg.quickActions.map((action, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleQuickAction(action)}
                            disabled={isTyping}
                            className="text-left text-[11px] font-medium px-2.5 py-1 rounded-full bg-white hover:bg-slate-100 text-[#102A63] border border-[#102A63]/20 hover:border-[#102A63] transition-all shadow-2xs hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Minimal Three-Dot Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#102A63] border border-[#F4C62E] text-[#F4C62E] flex items-center justify-center text-xs font-serif font-bold flex-shrink-0 shadow-xs">
                    M
                  </div>
                  <div className="bg-white px-3.5 py-2.5 rounded-2xl rounded-tl-xs border border-slate-200 shadow-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-3.5 bg-white border-t border-slate-200/90 relative z-10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <label htmlFor="mavi-chat-input" className="sr-only">
                    Ask about MacVision
                  </label>
                  <input
                    id="mavi-chat-input"
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about MacVision..."
                    disabled={isTyping}
                    className="w-full pl-3.5 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#102A63]/20 focus:border-[#102A63] transition-all disabled:opacity-60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-[#102A63] hover:bg-[#0A1D45] text-white disabled:opacity-40 disabled:hover:bg-[#102A63] transition-all flex items-center justify-center shadow-xs flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#F4C62E]"
                  title="Send message"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 text-[#F4C62E]" />
                </button>
              </form>
              <div className="flex items-center justify-between mt-1.5 px-1">
                <span className="text-[10px] text-slate-400">
                  Press Enter to send
                </span>
                <span className="text-[10px] text-slate-400">
                  Dharuhera, Haryana
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 2. MINIMIZED FLOATING BAR                                                 */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isOpen && isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="fixed z-50 bottom-24 right-6 bg-[#102A63] text-white px-4 py-2.5 rounded-full shadow-xl border border-[#F4C62E]/30 flex items-center gap-3 cursor-pointer hover:bg-[#0A1D45] transition-colors"
            onClick={() => setIsMinimized(false)}
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#123B82] to-[#0A1D45] border border-[#F4C62E] flex items-center justify-center text-xs font-serif font-bold text-[#F4C62E]">
              M
            </div>
            <span className="text-xs font-semibold tracking-wide">Mavi is minimized</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Close chat"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 3. PREMIUM DESKTOP & MOBILE CIRCULAR LAUNCHER                             */}
      {/* ========================================================================= */}
      <div className="fixed z-50 bottom-5 right-5 sm:bottom-6 sm:right-6 select-none">
        {/* Hover Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 bottom-full mb-2.5 pointer-events-none hidden sm:block whitespace-nowrap"
            >
              <div className="bg-[#102A63] text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg border border-[#F4C62E]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4C62E] animate-ping" />
                Ask Mavi
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Circular Launcher Button */}
        <motion.button
          ref={launcherRef}
          type="button"
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
            } else {
              handleOpenChat();
            }
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label={isOpen ? "Close Mavi School Assistant" : "Ask Mavi - MacVision School Assistant"}
          className="relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#102A63] text-white flex items-center justify-center shadow-xl shadow-[#0A1D45]/35 border-2 border-[#F4C62E]/70 focus:outline-none focus:ring-4 focus:ring-[#F4C62E]/30 group transition-shadow"
        >
          {/* Subtle gentle breathing aura (idle) */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full border border-[#F4C62E] opacity-30 animate-ping pointer-events-none" />
          )}

          {/* Icon Switcher */}
          {isOpen ? (
            <X className="w-6 h-6 text-[#F4C62E] transition-transform duration-200" />
          ) : (
            <div className="relative flex items-center justify-center">
              {/* Monogram crest or speech icon */}
              <div className="flex flex-col items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white group-hover:text-[#F4C62E] transition-colors" />
                <span className="absolute text-[8px] font-bold text-[#F4C62E] font-serif -top-0.5">
                  M
                </span>
              </div>
            </div>
          )}

          {/* Unread indicator / Notification badge */}
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F4C62E] text-[#102A63] text-[10px] font-bold flex items-center justify-center shadow-md">
              {unreadCount}
            </span>
          )}
        </motion.button>
      </div>
    </>
  );
}
