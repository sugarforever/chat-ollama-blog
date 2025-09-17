---
title: "ChatOllama Integrates DeepAgents: Bringing Deep Research Capabilities to Open Source AI Chat"
date: "2025-08-19"
description: "Exciting update as ChatOllama integrates DeepAgents to provide powerful deep research capabilities for our open source AI chat application"
---

Hello everyone! Today I want to share an exciting update — I've integrated DeepAgents into ChatOllama, bringing powerful deep research capabilities to our open source AI chat application.

## What is DeepAgents?

Before diving in, let me introduce DeepAgents. Traditional AI agents typically use a simple "LLM + tool calling" approach. While capable of handling basic tasks, they often fall short when facing complex, multi-step research work. These "shallow" agents lack planning capabilities and cannot effectively decompose and execute complex tasks.

DeepAgents changes this paradigm. Drawing inspiration from successful applications like Claude Code and Deep Research, it builds truly "deep" agents through four core components:

- **🎯 Planning Tools**: Help agents develop and track structured plans
- **🤖 Sub-agents**: Specialized for specific tasks, providing context isolation
- **📁 File System**: Provides persistent state management
- **📝 Refined Prompts**: System prompts optimized based on successful cases

This architecture enables agents to work like human researchers: decomposing complex problems, developing research plans, calling specialized tools, organizing and analyzing information, and ultimately producing high-quality research reports.

## Why Integrate with ChatOllama?

As an open source project focused on localized AI experiences, ChatOllama has always been committed to providing users with powerful yet easy-to-use AI tools. The addition of DeepAgents allows us to:

### 1. **Provide Professional-Grade Research Capabilities**
Users can now conduct deep research directly in ChatOllama, with agents automatically:
- Developing research plans
- Searching for relevant information
- Analyzing and integrating data
- Generating structured reports

### 2. **Seamless MCP Integration**
DeepAgents natively supports MCP (Model Context Protocol), making the integration process exceptionally smooth. We only need:
```javascript
// Simple integration code
const agent = createDeepAgent({
  tools: mcpTools,
  instructions: researchInstructions
})
```

### 3. **Maintaining Open Source Spirit**
DeepAgents itself is open source, perfectly aligning with ChatOllama's philosophy. Users have complete control over their data and research processes.

## Technical Implementation Highlights

### Intelligent Streaming Processing
We implemented server-side intelligent content processing to ensure:
- AI response content accumulates on the server side, avoiding complex client-side logic
- Each conversation turn uses unique UUIDs for grouping, maintaining clear context
- Tool call results are displayed in collapsible UI components for better user experience

### Tool Call Visualization
When agents use tools, users can clearly see:
- Which tool was called (search, browser, file operations, etc.)
- Tool execution results
- Expandable detailed information

### Multi-language Support
We added complete Chinese and English support for the new feature, ensuring good experiences for users of different languages.

## Real Usage Scenarios

Imagine these use cases:

**Academic Research**: Ask "Help me research quantum computing applications in cryptography," and the agent will automatically search for latest papers, analyze technology trends, and organize key insights.

**Market Analysis**: Request "Analyze the competitive landscape of the AI chip market in 2024," and the agent will collect market data, analyze competitors, and generate detailed reports.

**Technical Investigation**: Ask "Compare different container orchestration solutions," and the agent will research the pros and cons of various solutions, use cases, and best practices.

## Development Experience

Thanks to DeepAgents' excellent architectural design and MCP standardization, the entire integration process was very smooth:

1. **Quick Integration**: Enable deep research functionality with just a few lines of code
2. **Flexible Configuration**: Adjust agent instructions and tools as needed
3. **Easy Extension**: Easily add new tools and capabilities through MCP

## Future Outlook

This is just the beginning. Next, we plan to:
- Add more professional domain research templates
- Support custom research workflows
- Integrate more professional tools and data sources
- Optimize performance for long-duration research tasks

## Summary

The integration of DeepAgents brings a qualitative leap to ChatOllama. We're no longer just a simple chat tool, but have become a powerful research assistant. This capability enhancement, combined with our open source nature and localization advantages, makes ChatOllama more competitive in the AI application space.

If you're interested in this feature, welcome to try the latest version of ChatOllama and experience the charm of AI deep research. We also welcome feedback on GitHub to help us make this feature even better!

---

*ChatOllama is an open source local AI chat application committed to providing users with private, powerful, and easy-to-use AI experiences.*