'use client'

import { useForm } from 'react-hook-form'
import { streamFlow } from '@genkit-ai/next/client'
import { simpleFlow } from '@src/utils/genkit'
import RoundedButton from '@src/components/RoundedButton'
import Textarea from '@src/components/Textarea'
import { Message, useChat } from '@src/contexts/ChatContext'

const ChatForm = ({ onSend }: { onSend?: (e: string) => void }) => {
    const { setMessages, setCurrentAIMessage } = useChat()

  const { register, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      prompt: '',
    },
  })

  const appendMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg])
  }

  const handleSend = async () => {
    const prompt = getValues('prompt').trim()
    if (!prompt) return

    appendMessage({ role: 'user', content: prompt, id: '' })
    setValue('prompt', '')
    setCurrentAIMessage('')

    try {
      const result = streamFlow<typeof simpleFlow>({
        url: '/api/chat',
        input: prompt,
      })

      for await (const chunk of result.stream) {
        setCurrentAIMessage((prev) => prev + chunk.text)
        await new Promise((res) => setTimeout(res, 20)) // Typing effect
      }

      const fullMessage = await result.output
      appendMessage({ role: 'ai', content: fullMessage, id: '' })
      setCurrentAIMessage('')
      onSend?.(prompt)
    } catch (err) {
      console.error('Streaming error:', err)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSend)}
      className="w-[90%] mx-auto bg-white p-4 rounded-4xl"
    >
      <div className="flex items-center gap-2">
        <Textarea
          {...register('prompt')}
          placeholder="Type your message..."
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSend()
            }
          }}
        />
        <RoundedButton type="submit">Send</RoundedButton>
      </div>
    </form>
  )
}

export default ChatForm
