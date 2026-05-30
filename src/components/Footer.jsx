const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Dev Diaries</h2>
            <p className="text-sm text-gray-500 mt-1">
              A place for developers to share their journey.
            </p>
          </div>

          <div className="flex items-center gap-6">
            
            <a
              href="https://github.com/rudrapratapsingh26"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/Rudrapratap2610"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Twitter
            </a>
            <a
              href="mailto:your@email.com"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Support
            </a>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-6 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Dev Diaries. Built by Rudra Pratap Singh.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer