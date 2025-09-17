---
title: "Instantly Talk to Any Model with @ Mentions"
date: "2025-09-16"
feature: "Tag a model inline to override the next reply without touching session settings"
timeToShip: "~1 day"
description: "Instantly switch between AI models in conversations using @ mentions without changing session settings"
---

## 🎯 Why We Built It

Our long-form chat sessions have always been anchored to a single "default" model. That kept conversations coherent, but it also meant lots of friction when you wanted to toss a quick question to a different model:

1. Open session settings  
2. Swap the default model  
3. Ask the question  
4. Switch the model back so the rest of the thread stays consistent  

That dance got even worse when comparing outputs from multiple providers or when you only needed one specialty answer (e.g. “let me sanity-check this with Claude real quick”). We needed something as fast as tagging a teammate in Slack.

## 💡 The Solution in a Nutshell

You can now add `@model-name` to any outgoing message. Each mentioned model temporarily "hijacks" the request, so the response comes from that model while the session’s default choice remains unchanged.

- Mention a single model (`@gpt-4o-mini`) to reroute just this message.  
- Mention multiple models (`@openrouter/claude-3.5-sonnet @llama3`) to fan out the question.  
- Don’t mention anything and the chat continues using the default model like before.

The UI keeps the override discoverable: as soon as you type `@`, the input shows model families, live search, and keyboard navigation so you never have to remember exact IDs.

## 🔍 What Changed Under the Hood

### 1. Parsing Mentions Without Polluting Prompts
`ChatInputBox.vue` now parses model mentions every time the user types. We persist the selected models in `hijackedModels` and simultaneously strip the `@model` tokens into a `sanitizedContent` payload. That sanitized payload is what the backend actually sees, so no model receives literal `@claude` strings in its prompt.

### 2. Respecting Overrides in Delivery
`Chat.vue` checks for `hijackedModels` before sending. If we find any, we bypass the session defaults for that single send, while the session metadata (and sidebar defaults) stay untouched. The outgoing transcript reuses `sanitizedContent` so historical messages read cleanly without the mentions.

### 3. Making Mentions First-Class Citizens in the UI
We refreshed `ModelMentionText.vue` to show consistent badges for mentions, even when the provider uses namespaced values like `openrouter/claude-3.5-sonnet`. The existing auto-title generator also consumes the sanitized message to avoid naming chats "@gpt-4o mini thoughts".

## ✅ Results

- Instant context switches without breaking the session model.  
- Keyboard-only flow for power users comparing providers.  
- Clean transcripts and prompts even when users pepper messages with mentions.  

Give it a try: type `@` in any chat input, pick a model, and enjoy frictionless comparisons.
