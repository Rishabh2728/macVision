import { ChatMessage, getLocalMaviResponse } from "@/lib/maviKnowledge";

export interface SendMessageResponse {
  text: string;
  quickActions?: string[];
  links?: {
    label: string;
    url: string;
    external?: boolean;
    isPrimary?: boolean;
  }[];
  showLeadForm?: boolean;
}

/**
 * Clean frontend service to communicate with /api/chat.
 * Seamlessly falls back to the client-side knowledge matcher if offline or network fails.
 */
export async function sendChatMessage(
  message: string,
  history: ChatMessage[] = []
): Promise<SendMessageResponse> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        messages: history.map((h) => ({
          sender: h.sender,
          text: h.text,
        })),
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return {
      text: data.text,
      quickActions: data.quickActions,
      links: data.links,
      showLeadForm: data.showLeadForm,
    };
  } catch (error) {
    console.warn("API request failed, invoking client-side knowledge engine:", error);
    // Instant seamless fallback on client
    return getLocalMaviResponse(message);
  }
}
