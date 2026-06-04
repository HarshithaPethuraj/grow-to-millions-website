import { useState, useRef, useEffect } from "react";

const CALENDLY_LINK = "https://calendly.com/yogeshrpdigital/30min";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with your Formspree chatbot endpoint

const STEPS = {
  GREETING: "greeting",
  ASK_NAME: "ask_name",
  ASK_EMAIL: "ask_email",
  ASK_PHONE: "ask_phone",
  ASK_GOAL: "ask_goal",
  DONE: "done",
};

const initialMessages = [
  {
    from: "bot",
    text: "Hi there! 👋 Welcome to Grow to Millions — Chennai's digital growth agency.",
  },
  {
    from: "bot",
    text: "I'm your GTM assistant! Would you like to book a FREE 30-min strategy call with Yogesh? 🚀",
    showOptions: ["Yes, let's go! 🎯", "Just browsing"],
  },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(STEPS.GREETING);
  const [lead, setLead] = useState({ name: "", email: "", phone: "", goal: "" });
  const [typing, setTyping] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const addBotMessage = (text, showOptions = null, delay = 800) => {
    return new Promise((resolve) => {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [...prev, { from: "bot", text, showOptions }]);
        resolve();
      }, delay);
    });
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { from: "user", text }]);
  };

  const handleOption = async (option) => {
    addUserMessage(option);
    if (step === STEPS.GREETING) {
      if (option === "Yes, let's go! 🎯") {
        await addBotMessage("Amazing! 🎉 Let's get you booked in.");
        await addBotMessage("First, what's your name? 😊");
        setStep(STEPS.ASK_NAME);
      } else {
        await addBotMessage("No worries! Feel free to explore the site. 😊");
        await addBotMessage(
          "If you ever want to chat about growing your business, I'm right here! 💪"
        );
      }
    }
  };

  const handleSend = async (e) => {
    e?.preventDefault();
    const value = input.trim();
    if (!value) return;
    setInput("");
    addUserMessage(value);

    if (step === STEPS.ASK_NAME) {
      setLead((prev) => ({ ...prev, name: value }));
      await addBotMessage(`Nice to meet you, ${value}! 😊`);
      await addBotMessage("What's your email address? We'll send the calendar invite here. 📧");
      setStep(STEPS.ASK_EMAIL);
    } else if (step === STEPS.ASK_EMAIL) {
      if (!value.includes("@")) {
        await addBotMessage("Hmm, that doesn't look right. Can you re-enter your email? 🤔");
        return;
      }
      setLead((prev) => ({ ...prev, email: value }));
      await addBotMessage("Got it! 📩");
      await addBotMessage("And your phone number? (So Yogesh can confirm the call) 📱");
      setStep(STEPS.ASK_PHONE);
    } else if (step === STEPS.ASK_PHONE) {
      if (value.replace(/\D/g, "").length < 7) {
        await addBotMessage("Please enter a valid phone number 📱");
        return;
      }
      setLead((prev) => ({ ...prev, phone: value }));
      await addBotMessage("Almost there! 🙌");
      await addBotMessage(
        "What's your #1 business goal right now?",
        [
          "🚀 More leads & sales",
          "📈 Grow social media",
          "🌐 Build/fix my website",
          "📣 Run paid ads",
        ]
      );
      setStep(STEPS.ASK_GOAL);
    } else if (step === STEPS.ASK_GOAL) {
      await submitLead(value);
    }
  };

  const handleGoalOption = async (option) => {
    addUserMessage(option);
    await submitLead(option);
  };

  const submitLead = async (goal) => {
    const finalLead = { ...lead, goal };
    setLead(finalLead);

    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: finalLead.name,
          email: finalLead.email,
          phone: finalLead.phone,
          goal,
          source: "chatbot",
        }),
      });
    } catch (err) {
      console.error("Formspree error:", err);
    }

    setSubmitted(true);
    setStep(STEPS.DONE);
    await addBotMessage(`Perfect! 🎯 You're all set, ${finalLead.name}!`);
    await addBotMessage(
      "Click below to pick your preferred time — Yogesh will be ready for you! 🗓️",
      null,
      600
    );
    setMessages((prev) => [...prev, { from: "bot", text: "__CALENDLY__" }]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #00C896 0%, #00A3FF 100%)",
        }}
        aria-label="Open chat"
      >
        {open ? (
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path stroke="#fff" strokeWidth="2.5" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle cx="8.5" cy="10.5" r="1" fill="#fff" />
            <circle cx="12" cy="10.5" r="1" fill="#fff" />
            <circle cx="15.5" cy="10.5" r="1" fill="#fff" />
          </svg>
        )}
        {/* Pulse ring */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ background: "linear-gradient(135deg, #00C896, #00A3FF)" }}
          />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
        style={{ maxHeight: "520px", background: "#0F1117" }}
      >
        {/* Header */}
        <div
          className="px-4 py-3 flex items-center gap-3"
          style={{ background: "linear-gradient(135deg, #00C896 0%, #00A3FF 100%)" }}
        >
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg">
            🤖
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">GTM Assistant</p>
            <p className="text-white/80 text-xs">Grow to Millions • Chennai</p>
          </div>
          <span className="ml-auto flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            <span className="text-white/80 text-xs">Online</span>
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ minHeight: 0 }}>
          {messages.map((msg, i) => (
            <div key={i}>
              {msg.text === "__CALENDLY__" ? (
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #00C896 0%, #00A3FF 100%)" }}
                >
                  📅 Book My Free Strategy Call
                </a>
              ) : (
                <div
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "text-white rounded-br-sm"
                        : "text-gray-100 rounded-bl-sm"
                    }`}
                    style={{
                      background:
                        msg.from === "user"
                          ? "linear-gradient(135deg, #00C896 0%, #00A3FF 100%)"
                          : "#1E2130",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              )}

              {/* Option buttons */}
              {msg.showOptions && (
                <div className="flex flex-wrap gap-2 mt-2 justify-start">
                  {msg.showOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() =>
                        step === STEPS.ASK_GOAL ? handleGoalOption(opt) : handleOption(opt)
                      }
                      className="px-3 py-1.5 rounded-xl text-xs font-medium border transition-all hover:scale-105"
                      style={{
                        borderColor: "#00C896",
                        color: "#00C896",
                        background: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "#00C896";
                        e.target.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "transparent";
                        e.target.style.color = "#00C896";
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex justify-start">
              <div className="px-4 py-3 rounded-2xl rounded-bl-sm" style={{ background: "#1E2130" }}>
                <div className="flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        {step !== STEPS.GREETING && step !== STEPS.DONE && step !== STEPS.ASK_GOAL && (
          <form
            onSubmit={handleSend}
            className="px-3 py-3 flex gap-2 border-t"
            style={{ borderColor: "#1E2130" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                step === STEPS.ASK_NAME
                  ? "Your name..."
                  : step === STEPS.ASK_EMAIL
                  ? "Your email..."
                  : "Your phone number..."
              }
              className="flex-1 px-3 py-2 rounded-xl text-sm outline-none text-gray-100 placeholder-gray-500"
              style={{ background: "#1E2130" }}
              autoFocus
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "linear-gradient(135deg, #00C896 0%, #00A3FF 100%)" }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M22 2L11 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        )}

        {step === STEPS.DONE && (
          <div
            className="px-4 py-3 text-center text-xs border-t"
            style={{ borderColor: "#1E2130", color: "#6B7280" }}
          >
            🎉 Talk soon, {lead.name}!
          </div>
        )}
      </div>
    </>
  );
}
