
function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Figma Make Local Runner</h1>
          
          <p className="text-lg text-gray-700 mb-6">
            A skeleton project designed to run code downloaded from Figma Make locally, so you can easily modify the generated code with your favorite tools.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-800">
              This project comes with several pre-installed packages that Figma-generated code may require. If you encounter errors about missing dependencies, you may need to install additional packages as needed.
            </p>
          </div>


          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🛠️ Setup</h2>
          

          <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
            <li>Download your code from Figma Make</li>
            <li>Decompress the downloaded files</li>
            <li>Copy the <code className="bg-gray-200 px-1 rounded">src</code> folder into the root folder of this project to replace the existing <code className="bg-gray-200 px-1 rounded">src</code> folder</li>
          </ol>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-800 font-medium">
              <strong>Important:</strong> Make sure to replace or merge with the existing files in the <code className="bg-yellow-200 px-1 rounded">src</code> folder. The current <code className="bg-yellow-200 px-1 rounded">src</code> folder contains a demo application that you should replace with your Figma Make code.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
