# Customer Labs - Saving Segment App

A React application built with Vite, TypeScript, and TailwindCSS for managing and saving customer segments.

## Features

- **Clean UI**: Modern, responsive design matching the requirements
- **Modal Interface**: Interactive popup for segment creation
- **Dynamic Schema Management**: Add, change, and remove schema fields
- **Smart Dropdown**: Automatically filters out already selected options
- **Type Safety**: Full TypeScript support
- **Reusable Components**: Modular, maintainable code structure

## Requirements Implemented

✅ Initial page with "Save segment" button  
✅ Modal popup triggered by button click  
✅ Text input for segment name  
✅ Dropdown with 7 predefined schema options  
✅ "+ Add new schema" link functionality  
✅ Dynamic schema addition to the list  
✅ Editable schemas with changeable options  
✅ Reset main dropdown after adding  
✅ Proper data submission format  

## Project Structure

```
src/
├── components/
│   ├── SaveSegmentModal.tsx    # Main modal component
│   └── SchemaItem.tsx          # Individual schema item component
├── utils/
│   └── schemaOptions.ts        # Schema options configuration
├── types/
│   └── index.ts                # TypeScript type definitions
├── App.tsx                     # Main app component
├── main.tsx                    # Application entry point
└── style.css                   # Tailwind CSS imports
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The application will start at `http://localhost:5173`

## Build

```bash
npm run build
```

## Features Explained

### Schema Management
- Users can select from 7 predefined schema options
- Once added, schemas become editable dropdown items
- The main dropdown only shows unselected options
- Each schema can be changed or removed individually

### Data Format
When saving, data is formatted as:
```json
{
  "segment_name": "example_segment",
  "schema": [
    { "first_name": "First name" },
    { "last_name": "Last name" }
  ]
}
```

### Webhook Integration
Currently, the data is logged to console. To enable webhook submission:
1. Get a webhook URL from https://webhook.site
2. Update the URL in `src/components/SaveSegmentModal.tsx`
3. Uncomment the fetch call

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Modern ES6+** - Latest JavaScript features

## Code Quality

- Clean, reusable components
- TypeScript for type safety
- Modular structure
- Proper separation of concerns
- Easy to maintain and extend

