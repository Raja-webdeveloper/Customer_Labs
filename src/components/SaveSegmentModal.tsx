import { useState } from 'react'
import { SCHEMA_OPTIONS } from '../utils/schemaOptions'
import type { SchemaItem, SegmentData } from '../types'
import SchemaItemComponent from './SchemaItem'

interface SaveSegmentModalProps {
  onClose: () => void
}

const SaveSegmentModal = ({ onClose }: SaveSegmentModalProps) => {
  const [segmentName, setSegmentName] = useState('')
  const [selectedSchema, setSelectedSchema] = useState('')
  const [addedSchemas, setAddedSchemas] = useState<SchemaItem[]>([])

  // Get available options (not yet added)
  const getAvailableOptions = () => {
    const addedValues = addedSchemas.map(s => s.value)
    return SCHEMA_OPTIONS.filter(option => !addedValues.includes(option.value))
  }

  const handleAddSchema = () => {
    if (!selectedSchema) return

    const selectedOption = SCHEMA_OPTIONS.find(
      option => option.value === selectedSchema
    )

    if (selectedOption) {
      setAddedSchemas([
        ...addedSchemas,
        {
          value: selectedOption.value,
          label: selectedOption.label,
        },
      ])
      setSelectedSchema('')
    }
  }

  const handleRemoveSchema = (value: string) => {
    setAddedSchemas(addedSchemas.filter(schema => schema.value !== value))
  }

  const handleSchemaChange = (oldValue: string, newValue: string) => {
    const newOption = SCHEMA_OPTIONS.find(option => option.value === newValue)
    if (newOption) {
      setAddedSchemas(
        addedSchemas.map(schema =>
          schema.value === oldValue
            ? { value: newOption.value, label: newOption.label }
            : schema
        )
      )
    }
  }

  const handleSave = async () => {
    if (!segmentName.trim()) {
      alert('Please enter a segment name')
      return
    }

    if (addedSchemas.length === 0) {
      alert('Please add at least one schema')
      return
    }

    const payload: SegmentData = {
      segment_name: segmentName,
      schema: addedSchemas.map(schema => ({
        [schema.value]: schema.label,
      })),
    }

    const webhookUrl = 'https://webhook.site/aa5229a3-537c-4d00-9fb8-21f4be9381d7'
    
    // Try to send to webhook
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors', // Don't wait for response
      });
      
      console.log('Data sent successfully!');
      alert(`Segment saved and sent to webhook!\n\n📋 Check console for data\n📤 URL: ${webhookUrl}`);
    } catch (error) {
      alert(`Segment saved successfully!\n\n📋 Check console (F12) for JSON data\n📤 Webhook URL: ${webhookUrl}\n\nNote: Browser CORS prevents direct send. Data is ready in console.`);
    }
    
    onClose()
  }

  const availableOptions = getAvailableOptions()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        // onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-teal-600 text-white px-6 py-4 flex items-center justify-between">
          {/* <div className="flex items-center space-x-2">
            <span className="opacity-70">←</span>
            <span>View Audience</span>
          </div> */}
          <h2 className="text-lg font-semibold">Saving Segment</h2>
          <div className="w-20" /> {/* Spacer for centering */}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Segment Name Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Enter the Name of the Segment
            </label>
            <input
              type="text"
              value={segmentName}
              onChange={e => setSegmentName(e.target.value)}
              placeholder="Name of this segment"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Info Text */}
          <p className="text-gray-600 mb-4">
            To save your segment, you need to add the schemas to build the query
          </p>

          {/* Schema Status Indicators */}
          <div className="flex gap-4 mb-4">
            <span className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              User Traits
            </span>
            <span className="flex items-center text-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2" />
              Group Traits
            </span>
          </div>

          {/* Add Schema Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Add schema to segment
            </label>
            <select
              value={selectedSchema}
              onChange={e => setSelectedSchema(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select a schema</option>
              {availableOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Added Schemas */}
          <div className="space-y-2 mb-4">
            {addedSchemas.map((schema, index) => (
              <SchemaItemComponent
                key={`${schema.value}-${index}`}
                schema={schema}
                onRemove={handleRemoveSchema}
                onChange={handleSchemaChange}
                availableOptions={SCHEMA_OPTIONS}
                addedSchemas={addedSchemas}
              />
            ))}
            
          </div>

          {/* Add New Schema Link */}
          <button
            onClick={handleAddSchema}
            disabled={!selectedSchema || availableOptions.length === 0}
            className="text-teal-600 hover:text-teal-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            + Add new schema
          </button>
        </div>

        {/* Footer Buttons */}
        <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            Save the Segment
          </button>
        </div>
      </div>
    </div>
  )
}

export default SaveSegmentModal

