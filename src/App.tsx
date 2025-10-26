import { useState } from 'react'
import SaveSegmentModal from './components/SaveSegmentModal'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Page */}
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition-colors"
        >
          Save segment
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <SaveSegmentModal
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

export default App

