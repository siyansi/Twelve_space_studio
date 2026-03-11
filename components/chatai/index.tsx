"use client";
import { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";

export default function AIChatWidget() {

  const [open,setOpen] = useState(false)
  const [message,setMessage] = useState("")
  const [chat,setChat] = useState<any[]>([])

  const sendMessage = async () => {

   const res = await fetch("/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ message }),
});

    const data = await res.json()

    setChat([...chat,
      {role:"user",text:message},
      {role:"ai",text:data.reply}
    ])

    setMessage("")
  }

  
  return (
    <>
      {/* Floating Button */}
      <button
        onClick={()=>setOpen(!open)}
        className="fixed bottom-6 right-20 z-50 bg-orange-500 text-white p-4 rounded-full shadow-xl"
      >
        <FiMessageCircle size={24}/>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">

          <div className="bg-orange-500 text-white p-3 font-semibold">
            Twelvespace AI
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-3">

            {chat.map((c,i)=>(
              <div key={i}
                className={c.role==="user" ? "text-right" : "text-left"}>
                <span className="bg-gray-100 px-3 py-2 rounded-lg inline-block">
                  {c.text}
                </span>
              </div>
            ))}

          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              className="flex-1 border rounded-lg px-2"
              placeholder="Ask about our services..."
            />
            <button
              onClick={sendMessage}
              className="bg-orange-500 text-white px-3 rounded-lg"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  )
}