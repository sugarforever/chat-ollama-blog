---
title: "Smart Quick Chat Dialog Positioning: A Better User Experience"
date: "2025-09-18"
description: "Significant improvement to ChatOllama's Quick Chat feature with intelligent dialog positioning and enhanced viewport awareness"
---

We've just rolled out a significant improvement to ChatOllama's Quick Chat feature that addresses a common frustration users experience when selecting text near screen edges. The Quick Chat dialog now intelligently positions itself to stay within the viewport while providing more space for AI responses.

## The Problem

Previously, when users selected text at the bottom right corner of their screen or near viewport edges, the Quick Chat dialog would appear partially outside the visible area or get cut off entirely. This made it difficult to read AI responses and interact with the dialog effectively. Additionally, the dialog was quite narrow (320px), limiting the amount of text that could be displayed comfortably.

## The Solution

Our new smart positioning algorithm addresses these issues with several key improvements:

### 1. Intelligent Positioning Logic

The dialog now follows a sophisticated positioning strategy:

- **Horizontal positioning**: First tries to position to the right of the selected text, then to the left if there's insufficient space, and finally centers horizontally if neither side works
- **Vertical positioning**: Attempts to position below the selection first, then above if needed, and centers vertically as a last resort
- **Viewport awareness**: Always ensures the dialog stays within screen bounds with proper padding

### 2. Larger Dialog Size

- **Width increased**: From 320px to 480px for better readability
- **Dynamic height**: Automatically adjusts based on response content length
- **Response area**: Doubled from 160px to 320px maximum height
- **Better typography**: Response text size increased from extra-small to small for improved readability

### 3. Dynamic Content Adaptation

The dialog now calculates its optimal size based on the AI response length, ensuring longer responses have adequate space while keeping shorter ones compact.

## Technical Implementation

The positioning algorithm uses several key constants:

```typescript
const DIALOG_WIDTH = 480  // Increased from 320px
const DIALOG_MIN_HEIGHT = 280
const DIALOG_MAX_HEIGHT = 600  // Maximum height when response is long
const VIEWPORT_PADDING = 20
const OFFSET_FROM_SELECTION = 10
```

The smart positioning logic ensures the dialog:
- Maintains a 20px padding from viewport edges
- Positions 10px away from the selected text
- Dynamically adjusts height based on response content
- Never gets cut off or appears outside the visible area

## Impact on User Experience

These improvements deliver several tangible benefits:

1. **Better accessibility**: Users can now select text anywhere on the screen without worrying about dialog positioning
2. **Improved readability**: Larger dialog and text size make AI responses easier to read
3. **Smarter behavior**: The dialog adapts to different screen sizes and selection positions automatically