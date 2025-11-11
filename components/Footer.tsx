const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              © 2024 Design By h💖
               <span className="text-[#0EA5E9] font-semibold">Tayyab Ur Rehman Khattak</span>.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/tayyabktk2002" className="text-gray-400 hover:text-[#0EA5E9] transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/tayyab-khattak/" className="text-gray-400 hover:text-[#0EA5E9] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer