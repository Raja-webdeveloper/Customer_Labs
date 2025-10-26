# Quick Start Guide

## 🚀 Running the Application

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 📋 What the App Does

1. **Main Page**: Shows a "Save segment" button
2. **Click the Button**: Opens a modal popup
3. **Enter Segment Name**: Type a name for your segment
4. **Add Schemas**: 
   - Select from the dropdown "Add schema to segment"
   - Click "+ Add new schema" to add it
   - Repeat to add multiple schemas
5. **Edit/Remove Schemas**: 
   - Change any schema using its dropdown
   - Remove schemas with the "-" button
6. **Save**: Click "Save the Segment" to save your data

## 🎯 Key Features

- ✅ Clean, reusable component architecture
- ✅ TypeScript for type safety
- ✅ TailwindCSS for styling
- ✅ Smart dropdown filtering (shows only unselected options)
- ✅ Editable schema items
- ✅ Proper data validation
- ✅ Console logging of formatted data

## 📤 Webhook Submission

To enable webhook submission:

1. Visit https://webhook.site to get your unique webhook URL
2. Open `src/components/SaveSegmentModal.tsx`
3. Find line ~78 and replace `'https://webhook.site/YOUR-UNIQUE-ID'` with your actual webhook URL
4. Uncomment the fetch code (lines 85-93)

## 📦 Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 🧪 Testing the App

1. Open the app in browser
2. Click "Save segment"
3. Enter a segment name (e.g., "blog_visitors")
4. Add schemas like "First Name", "Last Name", "City"
5. Click "Save the Segment"
6. Open browser console (F12) to see the formatted JSON data

## 🏗️ Project Structure

```
src/
├── components/
│   ├── SaveSegmentModal.tsx  # Main modal with all logic
│   └── SchemaItem.tsx        # Individual schema item
├── types/
│   └── index.ts             # TypeScript interfaces
├── utils/
│   └── schemaOptions.ts     # Schema options config
├── App.tsx                  # Root component
├── main.tsx                 # Entry point
└── style.css               # Tailwind imports
```

## ✨ Code Quality

- **Modular**: Each component has a single responsibility
- **Type Safe**: Full TypeScript coverage
- **Reusable**: Components can be easily extended
- **Clean**: No unnecessary complexity
- **Maintainable**: Clear structure and naming

Perfect for machine test challenges! 🎯

