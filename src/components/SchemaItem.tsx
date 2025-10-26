import type { SchemaItem, SchemaOption } from '../types'
import { SCHEMA_OPTIONS } from '../utils/schemaOptions'

interface SchemaItemComponentProps {
  schema: SchemaItem
  onRemove: (value: string) => void
  onChange: (oldValue: string, newValue: string) => void
  availableOptions: SchemaOption[]
  addedSchemas: SchemaItem[]
}

const SchemaItemComponent = ({
  schema,
  onRemove,
  onChange,
}: SchemaItemComponentProps) => {
  const getOptionsForDropdown = () => {
    const currentOption = SCHEMA_OPTIONS.find(opt => opt.value === schema.value)
    return currentOption ? [currentOption] : []
  }

  const optionsToShow = getOptionsForDropdown()

  return (
    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
      {/* Status Indicator */}
      <span
        className={`w-3 h-3 rounded-full ${
          schema.value === 'first_name' || schema.value === 'last_name' || schema.value === 'gender' || schema.value === 'age'
            ? 'bg-green-500'
            : 'bg-red-500'
        }`}
      />

      {/* Dropdown (disabled since only one option) */}
      <select
        value={schema.value}
        disabled
        className="flex-1 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        {optionsToShow.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(schema.value)}
        className="text-red-500 hover:text-red-700 font-bold text-lg px-2"
        title="Remove schema"
      >
        −
      </button>
    </div>
  )
}

export default SchemaItemComponent
